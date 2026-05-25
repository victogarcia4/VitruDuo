import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || 4173);
const root = process.cwd();

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml"
};

createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://localhost:${port}`);

  if (request.method === "POST" && url.pathname === "/api/tts") {
    await handleTts(request, response);
    return;
  }

  const cleanPath = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
  let filePath = join(root, cleanPath === "/" ? "index.html" : cleanPath);

  if (!filePath.startsWith(root) || !existsSync(filePath)) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  if (statSync(filePath).isDirectory()) {
    filePath = join(filePath, "index.html");
  }

  response.writeHead(200, { "content-type": types[extname(filePath)] || "application/octet-stream" });
  createReadStream(filePath).pipe(response);
}).listen(port, () => {
  console.log(`Notebook Mentor is running at http://localhost:${port}`);
});

async function handleTts(request, response) {
  if (!process.env.OPENAI_API_KEY) {
    sendJson(response, 503, { error: "OPENAI_API_KEY is not configured." });
    return;
  }

  try {
    const body = await readJson(request);
    const input = String(body.text || "").trim().slice(0, 1800);
    if (!input) {
      sendJson(response, 400, { error: "Missing text." });
      return;
    }

    const openaiResponse = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: {
        "authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts",
        voice: process.env.OPENAI_TTS_VOICE || "shimmer",
        input,
        response_format: "mp3",
        instructions: "Speak as a joyful, warm American female tutor for a 10-year-old learner. Sound bright, encouraging, clear, and playful without being overly dramatic."
      })
    });

    if (!openaiResponse.ok) {
      const message = await openaiResponse.text();
      sendJson(response, openaiResponse.status, { error: message || "OpenAI TTS request failed." });
      return;
    }

    response.writeHead(200, {
      "content-type": "audio/mpeg",
      "cache-control": "no-store"
    });
    response.end(Buffer.from(await openaiResponse.arrayBuffer()));
  } catch (error) {
    sendJson(response, 500, { error: error.message || "TTS failed." });
  }
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let data = "";
    request.on("data", (chunk) => {
      data += chunk;
      if (data.length > 5000) request.destroy();
    });
    request.on("end", () => {
      try {
        resolve(JSON.parse(data || "{}"));
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", reject);
  });
}

function sendJson(response, status, payload) {
  response.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}
