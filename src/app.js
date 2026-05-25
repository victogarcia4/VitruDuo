const WORLD_DEFS = [
  ["meet", "Meet NotebookLM", "Learn what your study buddy can do.", "cobalt", "01", [
    ["what-notebooklm-is", "What NotebookLM Is", "Source buddy basics", "NotebookLM is like a smart study buddy with a backpack. It answers best when the right sources are inside.", "Create a Space Facts notebook", ["createNotebook", "addSources", "askQuestion", "checkCitations"]],
    ["topic-backpacks", "Topic Backpacks", "Notebook planning", "A notebook is one backpack for one topic. Mixing every school subject into one backpack gets messy fast.", "Organize homework notebooks", ["createNotebook", "nameTopic", "addMatchingSources", "askQuestion"]],
    ["what-it-can-make", "What It Can Make", "Studio tools", "NotebookLM can turn sources into study guides, FAQs, flashcards, quizzes, maps, audio, video, infographics, and slides.", "Pick the right Studio tool", ["addSources", "chooseArtifact", "generateTool", "reviewOutput"]]
  ]],
  ["sources", "Feed It Good Sources", "Pack clean books, notes, and links.", "mint", "02", [
    ["source-types", "What Counts As A Source", "Source types", "Sources can be PDFs, websites, YouTube videos, audio files, Google Docs, Google Slides, EPUB books, or pasted text.", "Pack a source backpack", ["createNotebook", "addUsefulSources", "removePrivateData", "askQuestion"]],
    ["good-vs-messy", "Good Sources Vs Messy Sources", "Source quality", "Clear sources are like clean puzzle pieces. Blurry scans and random pages make the picture harder to build.", "Clean a messy source pile", ["removeMessySource", "addCleanSource", "askFocusedQuestion", "checkCitations"]],
    ["source-sets", "Source Sets", "Goal matching", "A source set is the small group of materials that match one goal, like studying planets or making a debate brief.", "Build one source set", ["pickGoal", "addMatchingSources", "skipUnrelatedSources", "generateStudyGuide"]]
  ]],
  ["prompts", "Ask Better Questions", "Write prompts that get useful answers.", "sun", "03", [
    ["tiny-vs-super", "Tiny Prompts Vs Super Prompts", "Prompt power", "A tiny prompt says 'summarize.' A super prompt says who it is for, what to make, and how to explain it.", "Upgrade a tiny prompt", ["selectSources", "writeAudience", "writeTask", "chooseFormat"]],
    ["audience-task-format", "Audience, Task, Format", "Prompt recipe", "Great prompts have three puzzle pieces: audience, task, and format.", "Build the prompt recipe", ["chooseAudience", "chooseTask", "chooseFormat", "verifyOutput"]],
    ["follow-ups", "Follow-Up Questions", "Chat refinement", "A follow-up is asking again in a smarter way: simpler, shorter, with examples, or with a comparison.", "Ask a better follow-up", ["askQuestion", "spotConfusingPart", "askFollowUp", "saveUsefulNote"]]
  ]],
  ["verify", "Trust But Check", "Use citation clues and fix weak answers.", "coral", "04", [
    ["citation-clues", "Citation Clues", "Evidence checking", "Citations are page clues. They help you walk back to the source and see if the answer is real.", "Follow citation clues", ["askQuestion", "openCitation", "compareSource", "keepGoodClaim"]],
    ["unsupported-claims", "Spot Unsupported Claims", "Claim checking", "If NotebookLM says something surprising, check whether the source really says it.", "Catch a wobbly claim", ["readOutput", "findSurprise", "checkCitations", "rewriteClaim"]],
    ["fix-weak-answers", "Fix Weak Answers", "Repair workflow", "Weak answers usually need cleaner sources, a clearer prompt, or a citation check.", "Repair a weak answer", ["spotWeakAnswer", "addBetterSource", "rewritePrompt", "verifyOutput"]]
  ]],
  ["study", "Study Tools", "Make guides, cards, quizzes, and FAQs.", "violet", "05", [
    ["study-guides", "Study Guides", "Review sheets", "A study guide is like a treasure map for the big ideas in your sources.", "Make a review sheet", ["addSources", "chooseStudyGuide", "setAudience", "reviewOutput"]],
    ["flashcards-quizzes", "Flashcards And Quizzes", "Practice tools", "Flashcards and quizzes help you practice. Missed cards are the ones to try again.", "Practice missed cards", ["generateCards", "markMissed", "retryMissed", "celebrateMastery"]],
    ["faq-briefing", "FAQs And Briefing Docs", "Quick help", "FAQs answer common questions. Briefing docs give a fast overview before you start.", "Build quick help", ["chooseBriefing", "addQuestions", "checkCitations", "shareCarefully"]]
  ]],
  ["visuals", "Maps, Slides, And Visuals", "Turn ideas into pictures.", "pink", "06", [
    ["mind-maps", "Mind Maps", "Idea trees", "A mind map is an idea tree. The trunk is the topic, and the branches are connected ideas.", "Grow an idea tree", ["addSources", "chooseMindMap", "inspectBranches", "addMissingIdea"]],
    ["infographics", "Infographics", "Visual summaries", "An infographic is a poster that explains the important stuff with pictures and short words.", "Make a poster summary", ["chooseInfographic", "pickKeyIdeas", "reviewFacts", "exportArtifact"]],
    ["slide-decks", "Slide Decks", "Presentation drafts", "Slide decks are starting drafts for presentations. You still check them before showing people.", "Draft slides", ["chooseSlideDeck", "setAudience", "reviewSlides", "exportPptx"]]
  ]],
  ["media", "Audio And Video Magic", "Create listening and watching tools.", "cobalt", "07", [
    ["audio-overviews", "Audio Overviews", "Podcast-style review", "An Audio Overview is like two friendly hosts making a mini radio show from your sources.", "Make a mini radio show", ["addSources", "openStudio", "generateAudio", "reviewOutput"]],
    ["video-overviews", "Video Overviews", "Visual review", "A Video Overview is a narrated visual summary, like a tiny lesson video made from your sources.", "Make a video review", ["addSources", "chooseVideo", "setLearningGoal", "reviewOutput"]],
    ["right-format", "Pick The Right Format", "Format choice", "Pick audio for listening, video for seeing, a guide for reading, and a quiz for practice.", "Choose the best tool", ["pickGoal", "chooseArtifact", "generateTool", "verifyOutput"]]
  ]],
  ["safety", "Use It Safely", "Protect private stuff and know limits.", "mint", "08", [
    ["private-stuff", "Private Stuff Stays Out", "Privacy basics", "Do not put secret papers in the backpack: passwords, grades, private student info, or sensitive records.", "Keep secrets out", ["removePrivateData", "addSafeSources", "askQuestion", "shareCarefully"]],
    ["sharing", "Sharing Notebooks", "Share checks", "Before sharing, check who can see the notebook, sources, notes, and generated artifacts.", "Share with care", ["reviewSources", "checkSharing", "verifyOutput", "shareCarefully"]],
    ["limits-rules", "NotebookLM Limits And Rules", "Account rules", "Some tools depend on age, country, account type, Workspace settings, and school or work rules.", "Check access rules", ["checkAccount", "checkFeature", "askAdmin", "chooseBackupPlan"]]
  ]]
];

const LABELS = {
  createNotebook: "Create one notebook for the topic",
  addSources: "Add the class notes and useful article",
  askQuestion: "Ask a clear question about the sources",
  checkCitations: "Open citation clues and check the source",
  nameTopic: "Name the notebook after one topic",
  addMatchingSources: "Add only sources that match the topic",
  chooseArtifact: "Choose the best Studio tool",
  generateTool: "Generate the learning tool",
  reviewOutput: "Review before using or sharing",
  addUsefulSources: "Add clean PDFs, Docs, links, audio, or videos",
  removePrivateData: "Remove private or secret information",
  removeMessySource: "Remove blurry or unrelated sources",
  addCleanSource: "Add a clear, complete source",
  askFocusedQuestion: "Ask one focused question",
  pickGoal: "Pick the learning goal first",
  skipUnrelatedSources: "Skip unrelated sources",
  generateStudyGuide: "Generate a study guide",
  selectSources: "Select the right source set",
  writeAudience: "Say who the answer is for",
  writeTask: "Say exactly what to make",
  chooseFormat: "Choose the answer format",
  chooseAudience: "Choose the audience",
  chooseTask: "Choose the task",
  spotConfusingPart: "Spot the confusing part",
  askFollowUp: "Ask a simpler follow-up",
  saveUsefulNote: "Save the useful note",
  openCitation: "Open the citation clue",
  compareSource: "Compare it with the original source",
  keepGoodClaim: "Keep the claim only if it matches",
  readOutput: "Read the answer carefully",
  findSurprise: "Find the surprising claim",
  rewriteClaim: "Rewrite the claim using source facts",
  spotWeakAnswer: "Spot what is weak",
  addBetterSource: "Add a better source",
  rewritePrompt: "Rewrite the prompt clearly",
  chooseStudyGuide: "Choose Study Guide",
  setAudience: "Set the audience",
  generateCards: "Generate flashcards or a quiz",
  markMissed: "Mark hard cards as missed",
  retryMissed: "Retry missed cards",
  celebrateMastery: "Celebrate after practice",
  chooseBriefing: "Choose Briefing Doc or FAQ",
  addQuestions: "Add common questions",
  shareCarefully: "Share only after checking",
  chooseMindMap: "Choose Mind Map",
  inspectBranches: "Inspect the branches",
  addMissingIdea: "Add a missing idea as a note",
  chooseInfographic: "Choose Infographic",
  pickKeyIdeas: "Pick the key ideas",
  reviewFacts: "Review the facts",
  exportArtifact: "Export or save the artifact",
  chooseSlideDeck: "Choose Slide Deck",
  reviewSlides: "Review every slide",
  exportPptx: "Export as PPTX if available",
  openStudio: "Open the Studio panel",
  generateAudio: "Generate Audio Overview",
  chooseVideo: "Choose Video Overview",
  setLearningGoal: "Set the learning goal",
  checkAccount: "Check account type and age rules",
  checkFeature: "Check if the feature is available",
  askAdmin: "Ask a school or work admin if needed",
  chooseBackupPlan: "Choose another tool if a feature is off"
};

const DISTRACTORS = [
  ["uploadPassword", "Upload a password list"],
  ["inventFacts", "Ask NotebookLM to invent missing facts"],
  ["shareUnchecked", "Share without checking"],
  ["mixAllSubjects", "Put every subject into one notebook"],
  ["ignoreCitations", "Ignore the citation clues"],
  ["addRandomLinks", "Add random unrelated links"],
  ["uploadGrades", "Upload private grades"],
  ["skipSources", "Ask before adding sources"]
];

const games = [
  ["sorter", "Source Sorter", "Catch good sources. Avoid secret stuff.", "Unlocks after World 1"],
  ["citation", "Citation Chase", "Match claims to source clues.", "Unlocks after World 2"],
  ["prompt", "Prompt Builder Blocks", "Build a super prompt from pieces.", "Unlocks after World 3"],
  ["map", "Mind Map Match", "Match connected ideas.", "Unlocks after World 4"]
];

function makeQuestion(lesson, index) {
  const base = [
    {
      prompt: `What is the big idea of "${lesson.title}"?`,
      options: [lesson.intro, "NotebookLM works best with no sources at all.", "NotebookLM is only a video meeting app.", "NotebookLM should replace checking your work."],
      metaphor: lesson.intro,
      rationale: "NotebookLM is most useful when you give it good sources and still check the answer.",
      kidSummary: "Pack good sources, then ask."
    },
    {
      prompt: "What should happen first in a strong NotebookLM workflow?",
      options: ["Add or choose useful sources.", "Share the answer instantly.", "Ignore the original materials.", "Upload secret information."],
      metaphor: "You cannot ask a backpack about a book until the book is inside.",
      rationale: "Sources give NotebookLM the material it needs to answer.",
      kidSummary: "Sources first."
    },
    {
      prompt: "Which metaphor matches NotebookLM best?",
      options: ["A study buddy that reads the sources in its backpack.", "A magic crystal ball that knows everything.", "A locked diary for passwords.", "A game controller for videos only."],
      metaphor: "NotebookLM is the buddy. Your sources are the backpack.",
      rationale: "NotebookLM should stay grounded in the sources you add.",
      kidSummary: "It is smart, but it needs your materials."
    },
    {
      prompt: `You are using "${lesson.title}" for homework. What is the safest move?`,
      options: ["Check the answer against citations before trusting it.", "Copy anything that sounds fancy.", "Add private grades for more context.", "Use unrelated sources because more is always better."],
      metaphor: "Citations are clue cards. Follow them before you celebrate.",
      rationale: "Checking citations helps you catch mistakes or unsupported claims.",
      kidSummary: "Trust, but check."
    },
    {
      prompt: "What should you do next after NotebookLM creates something useful?",
      options: ["Review it, check source clues, then decide how to use it.", "Share it without reading.", "Delete every source.", "Pretend citations do not matter."],
      metaphor: "Even a great robot helper needs a human captain.",
      rationale: "You are responsible for making sure the result is accurate and safe.",
      kidSummary: "You are the captain."
    }
  ];
  return { type: "choice", answer: 0, ...base[index] };
}

function makeLesson(worldId, raw) {
  const [id, title, skill, intro, sandboxTitle, steps] = raw;
  return {
    id,
    title,
    skill,
    minutes: 5,
    intro,
    takeaway: `You can explain ${title.toLowerCase()} in simple words and use it safely in NotebookLM.`,
    exercises: Array.from({ length: 5 }, (_, index) => makeQuestion({ title, intro }, index)),
    sandbox: makeSandbox(worldId, sandboxTitle, steps)
  };
}

function makeSandbox(worldId, title, steps) {
  const distractors = DISTRACTORS.slice(0, 4).map(([id, label]) => [id, label]);
  const actions = [...steps.map((id) => [id, LABELS[id] || id]), ...distractors]
    .sort((a, b) => (a[0] + worldId).localeCompare(b[0] + worldId));
  return {
    title,
    brief: "Click the action cards in the best order. Novi will warn you if an action is risky.",
    steps,
    actions
  };
}

const curriculum = WORLD_DEFS.map(([id, title, short, accent, icon, lessons]) => ({
  id,
  title,
  short,
  accent,
  icon,
  lessons: lessons.map((item) => makeLesson(id, item))
}));

const totalLessons = curriculum.reduce((sum, unit) => sum + unit.lessons.length, 0);
const initialState = {
  onboarded: false,
  role: "",
  goal: "",
  confidence: "",
  xp: 0,
  hearts: 5,
  gems: 80,
  streak: 0,
  muted: false,
  completed: {},
  badges: {},
  gameScores: {},
  selectedUnit: "meet",
  selectedLesson: "what-notebooklm-is",
  screen: "onboarding",
  activeGame: "",
  lessonIndex: 0,
  correct: 0,
  feedback: null,
  confetti: "",
  readingAloud: false,
  sandboxActions: [],
  sandboxMistakes: 0,
  hintPasses: 1,
  streakFreezes: 0,
  reward: null
};

const app = document.querySelector("#app");
const state = loadState();

function loadState() {
  const saved = localStorage.getItem("notebookQuestState");
  if (!saved) return { ...initialState };
  return { ...initialState, ...JSON.parse(saved), feedback: null, confetti: "", readingAloud: false, reward: null, sandboxActions: [], sandboxMistakes: 0 };
}

function saveState() {
  localStorage.setItem("notebookQuestState", JSON.stringify({ ...state, feedback: null, confetti: "", readingAloud: false, reward: null, sandboxActions: [], sandboxMistakes: 0 }));
}

function flatLessons() {
  return curriculum.flatMap((unit) => unit.lessons.map((lesson) => ({ unit, lesson })));
}

function currentUnit() {
  return curriculum.find((unit) => unit.id === state.selectedUnit) || curriculum[0];
}

function currentLesson() {
  const unit = currentUnit();
  return unit.lessons.find((lesson) => lesson.id === state.selectedLesson) || unit.lessons[0];
}

function completedCount() {
  return Object.keys(state.completed).length;
}

function isUnitUnlocked(index) {
  if (index === 0) return true;
  return curriculum[index - 1].lessons.every((lesson) => state.completed[lesson.id]);
}

function completedWorlds() {
  return curriculum.filter((unit) => unit.lessons.every((lesson) => state.completed[lesson.id])).length;
}

function nextLessonAfter(lessonId) {
  const lessons = flatLessons();
  const index = lessons.findIndex((item) => item.lesson.id === lessonId);
  return lessons[index + 1] || lessons.find((item) => !state.completed[item.lesson.id]) || lessons[0];
}

function nextIncomplete() {
  return flatLessons().find(({ unit, lesson }) => isUnitUnlocked(curriculum.indexOf(unit)) && !state.completed[lesson.id]) || flatLessons()[0];
}

function render() {
  app.innerHTML = `
    <div class="shell">
      ${header()}
      ${state.screen === "onboarding" ? onboarding() : ""}
      ${state.screen === "home" ? home() : ""}
      ${state.screen === "lesson" ? lessonView() : ""}
      ${state.screen === "sandbox" ? sandboxView() : ""}
      ${state.screen === "reward" ? rewardView() : ""}
      ${state.screen === "games" ? gamesView() : ""}
      ${state.screen === "playGame" ? playGameView() : ""}
      ${state.screen === "profile" ? profileView() : ""}
    </div>
  `;
  bindEvents();
  if (state.confetti) {
    throwConfetti(state.confetti);
    state.confetti = "";
    saveState();
  }
}

function header() {
  return `
    <header class="topbar">
      <button class="brand brut-press" data-action="home" aria-label="Go to world map">
        <span class="logo book-logo" aria-hidden="true"><span></span></span>
        <span><strong>NotebookLM Quest</strong><small>Study buddy adventure</small></span>
      </button>
      <nav class="nav-actions" aria-label="Main navigation">
        <button class="ghost small" data-action="games">Games</button>
        <button class="ghost small" data-action="profile">Profile</button>
        <button class="icon-button" data-action="toggleMute" aria-label="${state.muted ? "Turn sound on" : "Mute sound"}">${state.muted ? "Sound Off" : "Sound On"}</button>
      </nav>
      <div class="stats" aria-label="Game stats">
        <span title="Hearts">Heart ${state.hearts}</span>
        <span title="Gems">Gem ${state.gems}</span>
        <span title="Streak">Streak ${state.streak}</span>
        <span title="XP">${state.xp} XP</span>
      </div>
    </header>
  `;
}

function onboarding() {
  return `
    <main class="onboarding">
      <section class="hero">
        <div>
          <p class="eyebrow">NotebookLM for total beginners</p>
          <h1>Train your source-powered study buddy.</h1>
          <p class="lede">Novi teaches NotebookLM like you are 10: pack good sources, ask clear questions, follow citation clues, and make study tools you can trust.</p>
          <div class="onboard-grid">
            ${selectGroup("role", "Who are you?", ["Kid / Student", "Teacher", "Researcher", "Creator", "Knowledge Worker", "Admin"])}
            ${selectGroup("goal", "Main quest", ["Homework help", "Teaching", "Research", "Content", "Meetings", "All-around"])}
            ${selectGroup("confidence", "AI level", ["I am brand new", "I tried it once", "I use AI a lot"])}
          </div>
          <div class="diagnostic-card">
            <strong>Backpack rule</strong>
            <p>NotebookLM is smart, but it only knows the sources you pack. Good sources in, useful answers out.</p>
          </div>
          <button class="primary brut-press" data-action="finishOnboarding">Start my quest</button>
        </div>
        ${mascot("thinking", "I am Novi, your notebook buddy. I will keep the words tiny and the source clues shiny.")}
      </section>
    </main>
  `;
}

function selectGroup(key, label, options) {
  return `
    <fieldset class="brut">
      <legend>${label}</legend>
      ${options.map((option) => `
        <label class="chip">
          <input type="radio" name="${key}" value="${option}" ${state[key] === option ? "checked" : ""} />
          <span>${option}</span>
        </label>
      `).join("")}
    </fieldset>
  `;
}

function home() {
  const next = nextIncomplete();
  const pct = Math.round((completedCount() / totalLessons) * 100);
  return `
    <main class="dashboard">
      <section class="path-panel">
        <div class="section-title">
          <div>
            <p class="eyebrow">World path</p>
            <h1>NotebookLM Adventure Academy</h1>
          </div>
          <button class="primary brut-press" data-action="openLesson" data-unit="${next.unit.id}" data-lesson="${next.lesson.id}">Continue</button>
        </div>
        <div class="path">${curriculum.map(unitCard).join("")}</div>
      </section>
      <aside class="side">
        ${mascot("happy", "One lesson, one sandbox, one smarter NotebookLM move. Tiny steps count.")}
        <section class="card brut">
          <p class="eyebrow">Daily goal</p>
          <h2>${completedCount()} / ${totalLessons} lessons</h2>
          <div class="meter"><span style="width:${pct}%"></span></div>
          <p>${pct}% of the academy complete. Finish a lesson to grow your streak.</p>
        </section>
        <section class="card brut boosters">
          <p class="eyebrow">Boosters</p>
          <button data-action="buyHeart">Heart refill - 30 gems</button>
          <button data-action="buyHint">Hint pass - 20 gems (${state.hintPasses})</button>
          <button data-action="buyFreeze">Streak freeze - 50 gems (${state.streakFreezes})</button>
        </section>
        <section class="card brut">
          <p class="eyebrow">Badges</p>
          <div class="badge-row">${curriculum.map((unit) => `<span class="${state.badges[unit.id] ? "earned" : ""}">${state.badges[unit.id] ? "Star" : "Lock"} ${unit.icon}</span>`).join("")}</div>
        </section>
      </aside>
    </main>
  `;
}

function unitCard(unit, index) {
  const unlocked = isUnitUnlocked(index);
  const done = unit.lessons.filter((lesson) => state.completed[lesson.id]).length;
  const complete = done === unit.lessons.length;
  return `
    <article class="unit brut ${unit.accent} ${unlocked ? "" : "locked"}">
      <div class="unit-badge">${complete ? "Star" : unlocked ? unit.icon : "Lock"}</div>
      <div class="unit-body">
        <p class="eyebrow">World ${index + 1}</p>
        <h2>${unit.title}</h2>
        <p>${unit.short}</p>
        <div class="lesson-list">
          ${unit.lessons.map((lesson) => `
            <button class="lesson-pill brut-press ${state.completed[lesson.id] ? "done" : ""}" ${unlocked ? "" : "disabled"} data-action="openLesson" data-unit="${unit.id}" data-lesson="${lesson.id}">
              <span>${state.completed[lesson.id] ? "Done" : "Play"}</span>${lesson.title}
            </button>
          `).join("")}
        </div>
      </div>
      <div class="progress-ring"><strong>${done}/3</strong><span>lessons</span></div>
    </article>
  `;
}

function lessonView() {
  const lesson = currentLesson();
  const exercise = lesson.exercises[state.lessonIndex];
  return `
    <main class="lesson-screen">
      <section class="lesson-card brut">
        <div class="lesson-tools">
          <button class="back" data-action="home">Back to path</button>
          <button class="ghost" data-action="speak" data-text="${escapeAttr(`${exercise.prompt}. ${exercise.metaphor}`)}">Read aloud</button>
        </div>
        <p class="eyebrow">${lesson.skill} - ${lesson.minutes} min</p>
        <h1>${lesson.title}</h1>
        <div class="micro">
          <strong>Novi note</strong>
          <p>${lesson.intro}</p>
        </div>
        <div class="question">
          <p class="step">Question ${state.lessonIndex + 1} of ${lesson.exercises.length}</p>
          <h2>${exercise.prompt}</h2>
          <div class="metaphor"><strong>Kid picture:</strong> ${exercise.metaphor}</div>
          <div class="answers">
            ${exercise.options.map((option, index) => `<button class="brut-press" data-action="answer" data-index="${index}">${option}</button>`).join("")}
          </div>
        </div>
        ${feedback()}
      </section>
      ${mascot(lessonMascotMood(), state.readingAloud ? "I am reading this in a calm American voice. Follow along like story time." : state.feedback?.text || "Choose the answer that keeps NotebookLM source-powered and safe.")}
    </main>
  `;
}

function sandboxView() {
  const lesson = currentLesson();
  const task = lesson.sandbox;
  const selected = state.sandboxActions.map((item) => item[0]);
  const nextStep = task.steps[selected.length];
  const complete = selected.length === task.steps.length && task.steps.every((step, index) => selected[index] === step);
  return `
    <main class="sandbox-screen">
      <section class="sandbox brut">
        <div class="sandbox-header">
          <button class="back" data-action="lesson">Back to lesson</button>
          <div>
            <p class="eyebrow">Fake NotebookLM sandbox</p>
            <h1>${task.title}</h1>
            <p>${task.brief}</p>
          </div>
        </div>
        <div class="workspace">
          <aside class="sources">
            <h2>Sources</h2>
            <div class="source ${hasRisky(selected) ? "danger" : ""}">Secret packet</div>
            <div class="source active">Class notes.pdf</div>
            <div class="source active">Helpful website</div>
            <div class="source">YouTube lesson</div>
          </aside>
          <section class="chat">
            <h2>Chat</h2>
            <div class="prompt-box">${selected.includes("askQuestion") || selected.includes("askFocusedQuestion") ? "Explain this for a 10-year-old and show citation clues." : "Ask your source backpack a question..."}</div>
            <div class="output">
              <strong>NotebookLM-style answer</strong>
              <p>Here is a simple answer from your sources. Citation clues appear as [Source 1] and [Source 2].</p>
              <button class="citation ${selected.some((id) => id.toLowerCase().includes("citation") || id === "verifyOutput") ? "active" : ""}">Citation clues</button>
            </div>
          </section>
          <aside class="studio">
            <h2>Studio</h2>
            ${["Study Guide", "Flashcards", "Mind Map", "Audio Overview", "Video Overview", "Slide Deck"].map((tool) => `<button class="${selected.some((id) => id.toLowerCase().includes(tool.split(" ")[0].toLowerCase())) ? "active" : ""}">${tool}</button>`).join("")}
          </aside>
        </div>
        <div class="action-tray">
          <div>
            <p class="eyebrow">Next best move</p>
            <strong>${complete ? "Workflow complete" : LABELS[nextStep]}</strong>
          </div>
          <div class="sandbox-actions">
            ${task.actions.map(([id, label]) => `<button class="brut-press" data-action="sandboxAction" data-step="${id}" ${selected.includes(id) ? "disabled" : ""}>${label}</button>`).join("")}
          </div>
        </div>
        <div class="sandbox-meta">
          <span>Correct steps: ${selected.length}/${task.steps.length}</span>
          <span>Mistakes: ${state.sandboxMistakes}</span>
          <span>Hint passes: ${state.hintPasses}</span>
        </div>
        ${feedback()}
        ${complete ? `<button class="primary brut-press complete-button" data-action="completeLesson">Complete lesson</button>` : ""}
      </section>
    </main>
  `;
}

function rewardView() {
  const reward = state.reward || { xp: 0, gems: 0, accuracy: 0, badge: "" };
  const lesson = currentLesson();
  const next = nextLessonAfter(lesson.id);
  return `
    <main class="reward-screen">
      <section class="reward-card brut">
        ${mascot("celebration", reward.badge ? `Badge unlocked: ${reward.badge}. Your backpack skills leveled up.` : "Clean work. You checked sources like a tiny research captain.")}
        <p class="eyebrow">Lesson complete</p>
        <h1>${lesson.title}</h1>
        <div class="reward-grid">
          <div><strong>+${reward.xp}</strong><span>XP</span></div>
          <div><strong>+${reward.gems}</strong><span>Gems</span></div>
          <div><strong>${reward.accuracy}%</strong><span>Accuracy</span></div>
          <div><strong>${completedWorlds()}</strong><span>World badges</span></div>
        </div>
        <p class="takeaway">${lesson.takeaway}</p>
        <div class="actions">
          <button class="primary brut-press" data-action="openLesson" data-unit="${next.unit.id}" data-lesson="${next.lesson.id}">Next lesson</button>
          <button class="ghost brut-press" data-action="home">Back to path</button>
          <button class="ghost brut-press" data-action="games">Play rewards</button>
        </div>
      </section>
    </main>
  `;
}

function gamesView() {
  const worlds = completedWorlds();
  return `
    <main class="games-screen">
      <section class="section-title games-title">
        <div><p class="eyebrow">Reward games</p><h1>NotebookLM Arcade</h1></div>
        <button class="ghost" data-action="home">Back to path</button>
      </section>
      <section class="game-grid">
        ${games.map(([id, title, text, unlock], index) => {
          const unlocked = worlds > index;
          return `
            <article class="game-card brut ${unlocked ? "" : "locked"}">
              <p class="eyebrow">Game ${index + 1}</p>
              <h2>${title}</h2>
              <p>${text}</p>
              <p><strong>Best:</strong> ${state.gameScores[id] || 0}</p>
              <button class="primary brut-press" data-action="playGame" data-game="${id}" ${unlocked ? "" : "disabled"}>${unlocked ? "Play" : unlock}</button>
            </article>
          `;
        }).join("")}
      </section>
    </main>
  `;
}

function playGameView() {
  const game = games.find(([id]) => id === state.activeGame) || games[0];
  const choices = gameChoices(state.activeGame);
  return `
    <main class="games-screen">
      <section class="game-play brut">
        <p class="eyebrow">Mini-game</p>
        <h1>${game[1]}</h1>
        <p>${game[2]} Pick the best tile to score points.</p>
        <div class="game-board">
          ${choices.map(([label, good], index) => `<button class="game-tile brut-press" data-action="gameChoice" data-good="${good}" data-score="${(index + 1) * 25}">${label}</button>`).join("")}
        </div>
        <p><strong>Best score:</strong> ${state.gameScores[state.activeGame] || 0}</p>
        ${feedback()}
        <div class="actions"><button class="ghost" data-action="games">Back to games</button></div>
      </section>
    </main>
  `;
}

function profileView() {
  return `
    <main class="profile-screen">
      <section class="profile-card brut">
        <p class="eyebrow">Progress</p>
        <h1>Your NotebookLM Quest</h1>
        <div class="reward-grid">
          <div><strong>${state.xp}</strong><span>XP</span></div>
          <div><strong>${state.gems}</strong><span>Gems</span></div>
          <div><strong>${state.streak}</strong><span>Streak</span></div>
          <div><strong>${completedCount()}</strong><span>Lessons</span></div>
        </div>
        <p><strong>Role:</strong> ${state.role || "Kid / Student"} | <strong>Goal:</strong> ${state.goal || "All-around"} | <strong>Sound:</strong> ${state.muted ? "Muted" : "On"}</p>
        <div class="actions">
          <button class="ghost" data-action="toggleMute">${state.muted ? "Turn sound on" : "Mute sound"}</button>
          <button class="ghost danger-button" data-action="resetProgress">Reset progress</button>
          <button class="primary" data-action="home">Back to path</button>
        </div>
      </section>
    </main>
  `;
}

function feedback() {
  return state.feedback ? `<div class="feedback ${state.feedback.correct ? "good" : "bad"}"><strong>${state.feedback.title}</strong><p>${state.feedback.text}</p>${state.feedback.kid ? `<small>${state.feedback.kid}</small>` : ""}</div>` : "";
}

function lessonMascotMood() {
  if (state.readingAloud) return "neutral";
  if (state.feedback?.correct) return "happy";
  if (state.feedback) return "sad";
  return "thinking";
}

function mascot(mood, text) {
  return `
    <aside class="mascot brut ${mood}">
      <div class="novi" aria-hidden="true"><div class="cap"></div><div class="eyes"><span></span><span></span></div><div class="smile"></div></div>
      <p>${text}</p>
    </aside>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-action]").forEach((element) => element.addEventListener("click", handleAction));
  document.querySelectorAll("input[type='radio']").forEach((element) => {
    element.addEventListener("change", (event) => {
      state[event.target.name] = event.target.value;
      saveState();
    });
  });
}

function handleAction(event) {
  const target = event.currentTarget;
  const action = target.dataset.action;
  if (!["answer", "speak"].includes(action)) playSound("click");
  if (action === "home") state.screen = state.onboarded ? "home" : "onboarding";
  if (action === "games") state.screen = "games";
  if (action === "profile") state.screen = "profile";
  if (action === "toggleMute") state.muted = !state.muted;
  if (action === "finishOnboarding") finishOnboarding();
  if (action === "openLesson") openLesson(target.dataset.unit, target.dataset.lesson);
  if (action === "answer") answer(Number(target.dataset.index));
  if (action === "lesson") state.screen = "lesson";
  if (action === "sandboxAction") sandboxAction(target.dataset.step);
  if (action === "completeLesson") completeLesson();
  if (action === "buyHeart") buy("heart");
  if (action === "buyHint") buy("hint");
  if (action === "buyFreeze") buy("freeze");
  if (action === "speak") speak(target.dataset.text);
  if (action === "playGame") playGame(target.dataset.game);
  if (action === "gameChoice") gameChoice(target.dataset.good === "true", Number(target.dataset.score));
  if (action === "resetProgress" && confirm("Reset your NotebookLM Quest progress?")) Object.assign(state, { ...initialState });
  state.feedback = ["home", "games", "profile", "lesson"].includes(action) ? null : state.feedback;
  saveState();
  render();
}

function finishOnboarding() {
  state.onboarded = true;
  state.role ||= "Kid / Student";
  state.goal ||= "All-around";
  state.confidence ||= "I am brand new";
  if (state.confidence === "I use AI a lot") state.completed["what-notebooklm-is"] = true;
  state.screen = "home";
}

function openLesson(unitId, lessonId) {
  state.selectedUnit = unitId;
  state.selectedLesson = lessonId;
  state.lessonIndex = 0;
  state.correct = 0;
  state.feedback = null;
  state.sandboxActions = [];
  state.sandboxMistakes = 0;
  state.screen = "lesson";
}

function answer(index) {
  if (state.hearts <= 0) {
    state.feedback = { correct: false, title: "Heart refill needed", text: "You are out of hearts. Buy a refill with gems, then keep going.", kid: "Even heroes need snacks." };
    playSound("wrong");
    return;
  }
  const lesson = currentLesson();
  const exercise = lesson.exercises[state.lessonIndex];
  if (index === exercise.answer) {
    state.correct += 1;
    state.xp += 5;
    state.feedback = { correct: true, title: "Correct", text: exercise.rationale, kid: exercise.kidSummary };
    playSound("correct");
    setTimeout(() => {
      if (state.lessonIndex < lesson.exercises.length - 1) state.lessonIndex += 1;
      else state.screen = "sandbox";
      state.feedback = null;
      saveState();
      render();
    }, 800);
  } else {
    state.hearts = Math.max(0, state.hearts - 1);
    state.feedback = { correct: false, title: "Tiny wobble", text: exercise.rationale, kid: exercise.kidSummary };
    playSound("wrong");
  }
}

function sandboxAction(step) {
  if (state.hearts <= 0) {
    state.feedback = { correct: false, title: "Heart refill needed", text: "You are out of hearts. Refill before continuing the sandbox." };
    playSound("wrong");
    return;
  }
  const task = currentLesson().sandbox;
  const expected = task.steps[state.sandboxActions.length];
  if (step === expected) {
    state.sandboxActions.push([step, LABELS[step]]);
    state.feedback = { correct: true, title: "Good move", text: "Yep. You packed the right action into the workflow." };
    playSound("correct");
  } else if (state.hintPasses > 0) {
    state.hintPasses -= 1;
    state.sandboxMistakes += 1;
    state.feedback = { correct: false, title: "Hint used", text: `That action is not next. Try: ${LABELS[expected]}.` };
    playSound("wrong");
  } else {
    state.sandboxMistakes += 1;
    state.hearts = Math.max(0, state.hearts - 1);
    state.feedback = { correct: false, title: "Risky click", text: `Tiny wobble. Next best move: ${LABELS[expected]}.` };
    playSound("wrong");
  }
}

function completeLesson() {
  const lesson = currentLesson();
  const unit = currentUnit();
  const alreadyDone = Boolean(state.completed[lesson.id]);
  const accuracy = Math.max(50, Math.round(((state.correct / lesson.exercises.length) - Math.min(0.35, state.sandboxMistakes * 0.08)) * 100));
  const xp = alreadyDone ? 20 : accuracy >= 95 ? 110 : accuracy >= 75 ? 85 : 65;
  const gems = alreadyDone ? 5 : accuracy >= 95 ? 25 : accuracy >= 75 ? 16 : 10;
  state.completed[lesson.id] = true;
  state.xp += xp;
  state.gems += gems;
  state.streak = Math.max(1, state.streak + (alreadyDone ? 0 : 1));
  let badge = "";
  if (unit.lessons.every((item) => state.completed[item.id]) && !state.badges[unit.id]) {
    state.badges[unit.id] = true;
    badge = unit.title;
  }
  state.reward = { xp, gems, accuracy, badge };
  state.feedback = null;
  state.confetti = badge ? "world" : "lesson";
  state.screen = "reward";
  playSound("complete");
}

function buy(kind) {
  const costs = { heart: 30, hint: 20, freeze: 50 };
  if (state.gems < costs[kind]) {
    state.feedback = { correct: false, title: "Need more gems", text: "Play lessons or games to earn more gems." };
    return;
  }
  state.gems -= costs[kind];
  if (kind === "heart") state.hearts = 5;
  if (kind === "hint") state.hintPasses += 1;
  if (kind === "freeze") state.streakFreezes += 1;
}

function playGame(gameId) {
  state.activeGame = gameId;
  state.feedback = null;
  state.screen = "playGame";
  playSound("game");
}

function gameChoice(good, score) {
  if (good) {
    const earned = score + 100;
    state.gameScores[state.activeGame] = Math.max(state.gameScores[state.activeGame] || 0, earned);
    state.gems += 5;
    state.xp += 10;
    state.feedback = { correct: true, title: `+${earned} points`, text: "Nice. That choice helps NotebookLM stay useful and safe." };
    playSound("correct");
  } else {
    state.feedback = { correct: false, title: "Not this tile", text: "That move would confuse the source backpack or risk private information." };
    playSound("wrong");
  }
}

function gameChoices(gameId) {
  const sets = {
    sorter: [["Clean science notes", true], ["Password list", false], ["Assigned PDF", true], ["Private grades", false]],
    citation: [["Claim with [Source 2]", true], ["No source clue", false], ["Checked quote", true], ["Sounds true only", false]],
    prompt: [["Audience + task + format", true], ["Make it smart", false], ["Explain for a 10-year-old", true], ["Invent the rest", false]],
    map: [["Planet -> Mars", true], ["Math -> Sandwich", false], ["Source -> Citation", true], ["Privacy -> Password upload", false]]
  };
  return sets[gameId] || sets.sorter;
}

function hasRisky(selected) {
  return selected.some((id) => ["uploadPassword", "uploadGrades"].includes(id));
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  state.readingAloud = true;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.95;
  utterance.pitch = 1.08;
  const femaleUsVoice = pickFemaleAmericanVoice();
  if (femaleUsVoice) utterance.voice = femaleUsVoice;
  utterance.onend = () => {
    state.readingAloud = false;
    saveState();
    render();
  };
  utterance.onerror = utterance.onend;
  speechSynthesis.speak(utterance);
}

function pickFemaleAmericanVoice() {
  const voices = speechSynthesis.getVoices();
  const americanVoices = voices.filter((voice) => voice.lang === "en-US" || voice.lang.toLowerCase().startsWith("en-us"));
  return americanVoices.find((voice) => /female|woman|zira|jenny|aria|samantha|victoria|karen|susan|allison|ava|joanna|kendra|kimberly|salli/i.test(voice.name))
    || americanVoices.find((voice) => !/male|man|david|mark|guy|brian|daniel|george|fred|alex/i.test(voice.name))
    || americanVoices[0]
    || voices.find((voice) => /^en[-_]us/i.test(voice.lang))
    || voices.find((voice) => /^en/i.test(voice.lang));
}

function playSound(kind) {
  if (state.muted) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  const sound = {
    click: { wave: "triangle", volume: 0.025, notes: [320, 0.035] },
    correct: { wave: "sine", volume: 0.055, notes: [523.25, 0.07, 659.25, 0.08, 783.99, 0.11] },
    wrong: { wave: "sawtooth", volume: 0.035, notes: [220, 0.12, 164.81, 0.16] },
    complete: { wave: "triangle", volume: 0.06, notes: [392, 0.08, 523.25, 0.08, 659.25, 0.1, 1046.5, 0.18] },
    game: { wave: "square", volume: 0.035, notes: [330, 0.06, 440, 0.08] }
  }[kind] || { wave: "sine", volume: 0.03, notes: [300, 0.05] };
  for (let i = 0; i < sound.notes.length; i += 2) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = sound.notes[i];
    osc.type = sound.wave;
    gain.gain.setValueAtTime(sound.volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + sound.notes[i + 1] + 0.12);
    osc.connect(gain).connect(ctx.destination);
    const start = ctx.currentTime + i * 0.05;
    osc.start(start);
    osc.stop(start + sound.notes[i + 1] + 0.12);
  }
}

function throwConfetti(kind = "lesson") {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const layer = document.createElement("div");
  layer.className = `confetti-layer ${kind}`;
  layer.setAttribute("aria-hidden", "true");
  const colors = ["#3568ff", "#20d6a3", "#ffd447", "#ff6f61", "#8d5bff", "#ff72b6"];
  const count = kind === "world" ? 96 : 56;
  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement("span");
    piece.style.setProperty("--x", `${Math.random() * 100}vw`);
    piece.style.setProperty("--dx", `${(Math.random() - 0.5) * 18}rem`);
    piece.style.setProperty("--spin", `${Math.random() * 720 - 360}deg`);
    piece.style.setProperty("--delay", `${Math.random() * 0.28}s`);
    piece.style.setProperty("--dur", `${0.9 + Math.random() * 0.9}s`);
    piece.style.background = colors[i % colors.length];
    layer.append(piece);
  }
  document.body.append(layer);
  window.setTimeout(() => layer.remove(), 2200);
}

function escapeAttr(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

render();
