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

const ES = {
  "Study buddy adventure": "Aventura con tu compañero de estudio",
  "Games": "Juegos",
  "Profile": "Perfil",
  "Sound On": "Sonido activo",
  "Sound Off": "Sonido apagado",
  "Heart": "Vida",
  "Gem": "Gema",
  "Streak": "Racha",
  "Sign in to start fresh": "Inicia sesión para empezar limpio",
  "Welcome to NotebookLM Quest.": "Bienvenido a NotebookLM Quest.",
  "Your old stuck game values were cleared. Sign in with Google to begin a clean adventure with full hearts.": "Borramos los valores anteriores que estaban trabados. Inicia sesión con Google para empezar una aventura nueva con todas las vidas.",
  "Continue with Google": "Continuar con Google",
  "Demo mode: this static version saves your Google-style session in this browser. A real Google OAuth client ID can be connected later.": "Modo demo: esta versión estática guarda tu sesión tipo Google en este navegador. Luego se puede conectar un cliente real de Google OAuth.",
  "Fresh backpack, fresh hearts, clean start.": "Mochila nueva, vidas nuevas, comienzo limpio.",
  "NotebookLM for total beginners": "NotebookLM para principiantes",
  "Train your source-powered study buddy.": "Entrena a tu compañero de estudio con fuentes.",
  "Novi teaches NotebookLM like you are 10: pack good sources, ask clear questions, follow citation clues, and make study tools you can trust.": "Novi te enseña NotebookLM como si tuvieras 10 años: guarda buenas fuentes, haz preguntas claras, sigue las pistas de citas y crea herramientas de estudio confiables.",
  "Who are you?": "¿Quién eres?",
  "Main quest": "Misión principal",
  "AI level": "Nivel de IA",
  "Kid / Student": "Niño / Estudiante",
  "Teacher": "Maestro",
  "Researcher": "Investigador",
  "Creator": "Creador",
  "Knowledge Worker": "Trabajador del conocimiento",
  "Admin": "Administrador",
  "Homework help": "Ayuda con tareas",
  "Teaching": "Enseñanza",
  "Research": "Investigación",
  "Content": "Contenido",
  "Meetings": "Reuniones",
  "All-around": "Todo",
  "I am brand new": "Soy nuevo",
  "I tried it once": "Lo probé una vez",
  "I use AI a lot": "Uso mucho la IA",
  "Backpack rule": "Regla de la mochila",
  "NotebookLM is smart, but it only knows the sources you pack. Good sources in, useful answers out.": "NotebookLM es inteligente, pero solo conoce las fuentes que guardas. Buenas fuentes entran, buenas respuestas salen.",
  "Start my quest": "Empezar mi misión",
  "I am Novi, your notebook buddy. I will keep the words tiny and the source clues shiny.": "Soy Novi, tu compañero de libreta. Usaré palabras simples y pistas de fuentes claras.",
  "World path": "Camino de mundos",
  "NotebookLM Adventure Academy": "Academia de Aventuras NotebookLM",
  "Continue": "Continuar",
  "Daily goal": "Meta diaria",
  "lessons": "lecciones",
  "of the academy complete. Finish a lesson to grow your streak.": "de la academia completada. Termina una lección para aumentar tu racha.",
  "Boosters": "Ayudas",
  "Heart refill - 30 gems": "Recargar vidas - 30 gemas",
  "Hint pass - 20 gems": "Pista - 20 gemas",
  "Streak freeze - 50 gems": "Congelar racha - 50 gemas",
  "Badges": "Insignias",
  "Back to path": "Volver al camino",
  "Read aloud": "Leer en voz alta",
  "Novi note": "Nota de Novi",
  "Question": "Pregunta",
  "of": "de",
  "Kid picture:": "Imagen para niños:",
  "Pick one answer to unlock the explanation.": "Elige una respuesta para desbloquear la explicación.",
  "Read Novi's reason, then press Continue.": "Lee la razón de Novi y luego presiona Continuar.",
  "Continue to next question": "Continuar a la siguiente pregunta",
  "Continue to sandbox": "Continuar al laboratorio",
  "Try again": "Intentar de nuevo",
  "Correct": "Correcto",
  "Tiny wobble": "Pequeño tropiezo",
  "Heart refill needed": "Necesitas recargar vidas",
  "You are out of hearts. Buy a refill with gems, then keep going.": "No tienes vidas. Compra una recarga con gemas y sigue.",
  "Even heroes need snacks.": "Hasta los héroes necesitan merienda.",
  "Choose the answer that keeps NotebookLM source-powered and safe.": "Elige la respuesta que mantiene a NotebookLM seguro y basado en fuentes.",
  "I am reading this in a calm American voice. Follow along like story time.": "Estoy leyendo con una voz americana tranquila. Sígueme como si fuera una historia.",
  "I am reading this with the selected voice. Follow along like story time.": "Estoy leyendo con una voz en español. Sígueme como si fuera una historia.",
  "Fake NotebookLM sandbox": "Laboratorio falso de NotebookLM",
  "Sources": "Fuentes",
  "Secret packet": "Paquete secreto",
  "Class notes.pdf": "Notas de clase.pdf",
  "Helpful website": "Sitio web útil",
  "YouTube lesson": "Lección de YouTube",
  "Chat": "Chat",
  "Ask your source backpack a question...": "Hazle una pregunta a tu mochila de fuentes...",
  "Explain this for a 10-year-old and show citation clues.": "Explica esto para un niño de 10 años y muestra pistas de citas.",
  "NotebookLM-style answer": "Respuesta estilo NotebookLM",
  "Here is a simple answer from your sources. Citation clues appear as [Source 1] and [Source 2].": "Aquí tienes una respuesta simple de tus fuentes. Las pistas de citas aparecen como [Fuente 1] y [Fuente 2].",
  "Citation clues": "Pistas de citas",
  "Studio": "Estudio",
  "Study Guide": "Guía de estudio",
  "Flashcards": "Tarjetas",
  "Mind Map": "Mapa mental",
  "Audio Overview": "Resumen de audio",
  "Video Overview": "Resumen de video",
  "Slide Deck": "Presentación",
  "Next best move": "Mejor siguiente paso",
  "Workflow complete": "Flujo completado",
  "Great. Press Complete lesson to collect your reward.": "Genial. Presiona Completar lección para recibir tu recompensa.",
  "Click the matching action card on the right.": "Haz clic en la tarjeta de acción correcta a la derecha.",
  "Correct steps": "Pasos correctos",
  "Mistakes": "Errores",
  "Hint passes": "Pistas",
  "Stage reached. Press the reward button.": "Etapa alcanzada. Presiona el botón de recompensa.",
  "Complete lesson and get rewards": "Completar lección y recibir recompensas",
  "Lesson complete": "Lección completada",
  "Accuracy": "Precisión",
  "World badges": "Insignias de mundos",
  "Best next move: continue the path, or play rewards if a game unlocked.": "Mejor siguiente paso: continúa el camino o juega recompensas si se desbloqueó un juego.",
  "Next lesson": "Siguiente lección",
  "Play rewards": "Jugar recompensas",
  "Reward games": "Juegos de recompensa",
  "NotebookLM Arcade": "Arcade de NotebookLM",
  "Game": "Juego",
  "Best:": "Mejor:",
  "Play": "Jugar",
  "Mini-game": "Minijuego",
  "Pick the best tile to score points.": "Elige la mejor ficha para ganar puntos.",
  "Best score:": "Mejor puntuación:",
  "Back to games": "Volver a juegos",
  "Progress": "Progreso",
  "Your NotebookLM Quest": "Tu aventura NotebookLM",
  "Lessons": "Lecciones",
  "Signed in:": "Sesión:",
  "Role:": "Rol:",
  "Goal:": "Meta:",
  "Sound:": "Sonido:",
  "Muted": "Silenciado",
  "On": "Activo",
  "Turn sound on": "Activar sonido",
  "Mute sound": "Silenciar",
  "Reset progress": "Reiniciar progreso",
  "Sign out": "Cerrar sesión",
  "Go to world map": "Ir al mapa",
  "EN": "EN",
  "ES": "ES"
};

Object.assign(ES, {
  "Meet NotebookLM": "Conoce NotebookLM",
  "Feed It Good Sources": "Dale buenas fuentes",
  "Ask Better Questions": "Haz mejores preguntas",
  "Trust But Check": "Confia, pero revisa",
  "Study Tools": "Herramientas de estudio",
  "Maps, Slides, And Visuals": "Mapas, diapositivas y visuales",
  "Audio And Video Magic": "Magia de audio y video",
  "Use It Safely": "Usalo con seguridad",
  "Learn what your study buddy can do.": "Aprende lo que puede hacer tu companero de estudio.",
  "Pack clean books, notes, and links.": "Guarda libros, notas y enlaces claros.",
  "Write prompts that get useful answers.": "Escribe prompts que dan respuestas utiles.",
  "Use citation clues and fix weak answers.": "Usa pistas de citas y arregla respuestas debiles.",
  "Make guides, cards, quizzes, and FAQs.": "Crea guias, tarjetas, cuestionarios y preguntas frecuentes.",
  "Turn ideas into pictures.": "Convierte ideas en imagenes.",
  "Create listening and watching tools.": "Crea herramientas para escuchar y ver.",
  "Protect private stuff and know limits.": "Protege cosas privadas y conoce limites.",
  "What NotebookLM Is": "Que es NotebookLM",
  "Topic Backpacks": "Mochilas de temas",
  "What It Can Make": "Que puede crear",
  "What Counts As A Source": "Que cuenta como fuente",
  "Good Sources Vs Messy Sources": "Buenas fuentes vs fuentes desordenadas",
  "Source Sets": "Grupos de fuentes",
  "Tiny Prompts Vs Super Prompts": "Prompts pequenos vs super prompts",
  "Audience, Task, Format": "Audiencia, tarea, formato",
  "Follow-Up Questions": "Preguntas de seguimiento",
  "Citation Clues": "Pistas de citas",
  "Spot Unsupported Claims": "Detecta ideas sin apoyo",
  "Fix Weak Answers": "Arregla respuestas debiles",
  "Study Guides": "Guias de estudio",
  "Flashcards And Quizzes": "Tarjetas y cuestionarios",
  "FAQs And Briefing Docs": "Preguntas frecuentes y resumenes",
  "Mind Maps": "Mapas mentales",
  "Infographics": "Infografias",
  "Slide Decks": "Presentaciones",
  "Audio Overviews": "Resumenes de audio",
  "Video Overviews": "Resumenes de video",
  "Pick The Right Format": "Elige el formato correcto",
  "Private Stuff Stays Out": "Lo privado se queda afuera",
  "Sharing Notebooks": "Compartir libretas",
  "NotebookLM Limits And Rules": "Limites y reglas de NotebookLM",
  "Source buddy basics": "Bases del companero con fuentes",
  "Notebook planning": "Planear libretas",
  "Studio tools": "Herramientas de Studio",
  "Source types": "Tipos de fuentes",
  "Source quality": "Calidad de fuentes",
  "Goal matching": "Coincidir con la meta",
  "Prompt power": "Poder del prompt",
  "Prompt recipe": "Receta del prompt",
  "Chat refinement": "Mejorar el chat",
  "Evidence checking": "Revisar evidencia",
  "Claim checking": "Revisar afirmaciones",
  "Repair workflow": "Flujo de reparacion",
  "Review sheets": "Hojas de repaso",
  "Practice tools": "Herramientas de practica",
  "Quick help": "Ayuda rapida",
  "Idea trees": "Arboles de ideas",
  "Visual summaries": "Resumenes visuales",
  "Presentation drafts": "Borradores de presentacion",
  "Podcast-style review": "Repaso estilo podcast",
  "Visual review": "Repaso visual",
  "Format choice": "Elegir formato",
  "Privacy basics": "Bases de privacidad",
  "Share checks": "Revisar antes de compartir",
  "Account rules": "Reglas de cuenta",
  "Create one notebook for the topic": "Crea una libreta para el tema",
  "Add the class notes and useful article": "Agrega notas de clase y un articulo util",
  "Ask a clear question about the sources": "Haz una pregunta clara sobre las fuentes",
  "Open citation clues and check the source": "Abre las pistas de citas y revisa la fuente",
  "Name the notebook after one topic": "Nombra la libreta con un solo tema",
  "Add only sources that match the topic": "Agrega solo fuentes que coincidan con el tema",
  "Choose the best Studio tool": "Elige la mejor herramienta de Studio",
  "Generate the learning tool": "Genera la herramienta de aprendizaje",
  "Review before using or sharing": "Revisa antes de usar o compartir",
  "Add clean PDFs, Docs, links, audio, or videos": "Agrega PDF, documentos, enlaces, audio o videos claros",
  "Remove private or secret information": "Quita informacion privada o secreta",
  "Remove blurry or unrelated sources": "Quita fuentes borrosas o no relacionadas",
  "Add a clear, complete source": "Agrega una fuente clara y completa",
  "Ask one focused question": "Haz una pregunta enfocada",
  "Pick the learning goal first": "Elige primero la meta de aprendizaje",
  "Skip unrelated sources": "Evita fuentes no relacionadas",
  "Generate a study guide": "Genera una guia de estudio",
  "Select the right source set": "Selecciona el grupo correcto de fuentes",
  "Say who the answer is for": "Di para quien es la respuesta",
  "Say exactly what to make": "Di exactamente que crear",
  "Choose the answer format": "Elige el formato de respuesta",
  "Choose the audience": "Elige la audiencia",
  "Choose the task": "Elige la tarea",
  "Spot the confusing part": "Encuentra la parte confusa",
  "Ask a simpler follow-up": "Haz una pregunta de seguimiento mas simple",
  "Save the useful note": "Guarda la nota util",
  "Open the citation clue": "Abre la pista de cita",
  "Compare it with the original source": "Comparalo con la fuente original",
  "Keep the claim only if it matches": "Conserva la idea solo si coincide",
  "Read the answer carefully": "Lee la respuesta con cuidado",
  "Find the surprising claim": "Encuentra la idea sorprendente",
  "Rewrite the claim using source facts": "Reescribe la idea usando hechos de la fuente",
  "Spot what is weak": "Encuentra lo debil",
  "Add a better source": "Agrega una mejor fuente",
  "Rewrite the prompt clearly": "Reescribe el prompt claramente",
  "Choose Study Guide": "Elige Guia de estudio",
  "Set the audience": "Define la audiencia",
  "Generate flashcards or a quiz": "Genera tarjetas o un cuestionario",
  "Mark hard cards as missed": "Marca tarjetas dificiles como falladas",
  "Retry missed cards": "Repite las tarjetas falladas",
  "Celebrate after practice": "Celebra despues de practicar",
  "Choose Briefing Doc or FAQ": "Elige resumen o preguntas frecuentes",
  "Add common questions": "Agrega preguntas comunes",
  "Share only after checking": "Comparte solo despues de revisar",
  "Choose Mind Map": "Elige Mapa mental",
  "Inspect the branches": "Revisa las ramas",
  "Add a missing idea as a note": "Agrega una idea faltante como nota",
  "Choose Infographic": "Elige Infografia",
  "Pick the key ideas": "Elige las ideas clave",
  "Review the facts": "Revisa los hechos",
  "Export or save the artifact": "Exporta o guarda el material",
  "Choose Slide Deck": "Elige Presentacion",
  "Review every slide": "Revisa cada diapositiva",
  "Export as PPTX if available": "Exporta como PPTX si esta disponible",
  "Open the Studio panel": "Abre el panel Studio",
  "Generate Audio Overview": "Genera Resumen de audio",
  "Choose Video Overview": "Elige Resumen de video",
  "Set the learning goal": "Define la meta de aprendizaje",
  "Check account type and age rules": "Revisa tipo de cuenta y reglas de edad",
  "Check if the feature is available": "Revisa si la funcion esta disponible",
  "Ask a school or work admin if needed": "Pregunta a un administrador si hace falta",
  "Choose another tool if a feature is off": "Elige otra herramienta si la funcion no esta activa",
  "Upload a password list": "Subir una lista de contrasenas",
  "Ask NotebookLM to invent missing facts": "Pedir a NotebookLM que invente datos faltantes",
  "Share without checking": "Compartir sin revisar",
  "Put every subject into one notebook": "Poner todas las materias en una libreta",
  "Ignore the citation clues": "Ignorar las pistas de citas",
  "Add random unrelated links": "Agregar enlaces al azar no relacionados",
  "Upload private grades": "Subir calificaciones privadas",
  "Ask before adding sources": "Preguntar antes de agregar fuentes",
  "Source Sorter": "Clasificador de fuentes",
  "Catch good sources. Avoid secret stuff.": "Atrapa buenas fuentes. Evita cosas secretas.",
  "Citation Chase": "Carrera de citas",
  "Match claims to source clues.": "Une afirmaciones con pistas de fuentes.",
  "Prompt Builder Blocks": "Bloques para crear prompts",
  "Build a super prompt from pieces.": "Construye un super prompt con piezas.",
  "Mind Map Match": "Parejas de mapa mental",
  "Match connected ideas.": "Une ideas conectadas.",
  "Unlocks after World 1": "Se desbloquea despues del Mundo 1",
  "Unlocks after World 2": "Se desbloquea despues del Mundo 2",
  "Unlocks after World 3": "Se desbloquea despues del Mundo 3",
  "Unlocks after World 4": "Se desbloquea despues del Mundo 4",
  "One lesson, one sandbox, one smarter NotebookLM move. Tiny steps count.": "Una leccion, un laboratorio y un paso mas inteligente en NotebookLM. Los pasos pequenos cuentan.",
  "Clean work. You checked sources like a tiny research captain.": "Buen trabajo. Revisaste fuentes como un pequeno capitan de investigacion."
});

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

const STATE_KEY = "notebookQuestState.v2";
localStorage.removeItem("notebookMentorState");
localStorage.removeItem("notebookQuestState");

const totalLessons = curriculum.reduce((sum, unit) => sum + unit.lessons.length, 0);
const initialState = {
  authed: false,
  user: null,
  onboarded: false,
  role: "",
  goal: "",
  confidence: "",
  xp: 0,
  hearts: 5,
  gems: 80,
  streak: 0,
  muted: false,
  lang: "en",
  voiceName: "",
  completed: {},
  badges: {},
  gameScores: {},
  selectedUnit: "meet",
  selectedLesson: "what-notebooklm-is",
  screen: "onboarding",
  activeGame: "",
  lessonIndex: 0,
  answeredIndex: null,
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
setDefaultVoice();

function loadState() {
  const saved = localStorage.getItem(STATE_KEY);
  if (!saved) return { ...initialState };
  return { ...initialState, ...JSON.parse(saved), answeredIndex: null, feedback: null, confetti: "", readingAloud: false, reward: null, sandboxActions: [], sandboxMistakes: 0 };
}

function saveState() {
  localStorage.setItem(STATE_KEY, JSON.stringify({ ...state, answeredIndex: null, feedback: null, confetti: "", readingAloud: false, reward: null, sandboxActions: [], sandboxMistakes: 0 }));
}

function L(text) {
  if (state.lang !== "es" || !text) return text;
  return ES[text] || spanishText(text);
}

function spanishText(text) {
  if (text.startsWith("What is the big idea of ")) return `¿Cuál es la idea principal de ${text.slice(24)}`;
  if (text.startsWith("You are using ")) return text.replace("You are using", "Estás usando").replace("for homework. What is the safest move?", "para la tarea. ¿Cuál es el paso más seguro?");
  if (text.startsWith("You can explain ")) return text.replace("You can explain", "Puedes explicar").replace("in simple words and use it safely in NotebookLM.", "con palabras simples y usarlo de forma segura en NotebookLM.");
  if (text.includes("of the academy complete")) return text.replace("of the academy complete. Finish a lesson to grow your streak.", L("of the academy complete. Finish a lesson to grow your streak."));
  return translateByPhrase(text);
}

function translateByPhrase(text) {
  const replacements = [
    ["NotebookLM is like a smart study buddy with a backpack. It answers best when the right sources are inside.", "NotebookLM es como un compañero de estudio inteligente con una mochila. Responde mejor cuando las fuentes correctas están adentro."],
    ["A notebook is one backpack for one topic. Mixing every school subject into one backpack gets messy fast.", "Una libreta es una mochila para un solo tema. Mezclar todas las materias en una mochila se vuelve desordenado."],
    ["NotebookLM can turn sources into study guides, FAQs, flashcards, quizzes, maps, audio, video, infographics, and slides.", "NotebookLM puede convertir fuentes en guías de estudio, preguntas frecuentes, tarjetas, cuestionarios, mapas, audio, video, infografías y diapositivas."],
    ["Sources can be PDFs, websites, YouTube videos, audio files, Google Docs, Google Slides, EPUB books, or pasted text.", "Las fuentes pueden ser PDF, sitios web, videos de YouTube, audios, Google Docs, Google Slides, libros EPUB o texto pegado."],
    ["Clear sources are like clean puzzle pieces. Blurry scans and random pages make the picture harder to build.", "Las fuentes claras son como piezas limpias de rompecabezas. Escaneos borrosos y páginas al azar dificultan armar la imagen."],
    ["A source set is the small group of materials that match one goal, like studying planets or making a debate brief.", "Un grupo de fuentes es un conjunto pequeño de materiales para una meta, como estudiar planetas o preparar un debate."],
    ["A tiny prompt says 'summarize.' A super prompt says who it is for, what to make, and how to explain it.", "Un prompt pequeño dice 'resume'. Un super prompt dice para quién es, qué crear y cómo explicarlo."],
    ["Great prompts have three puzzle pieces: audience, task, and format.", "Los buenos prompts tienen tres piezas: audiencia, tarea y formato."],
    ["A follow-up is asking again in a smarter way: simpler, shorter, with examples, or with a comparison.", "Una pregunta de seguimiento es volver a preguntar mejor: más simple, más corta, con ejemplos o comparación."],
    ["Citations are page clues. They help you walk back to the source and see if the answer is real.", "Las citas son pistas de página. Te ayudan a volver a la fuente y ver si la respuesta es real."],
    ["If NotebookLM says something surprising, check whether the source really says it.", "Si NotebookLM dice algo sorprendente, revisa si la fuente realmente lo dice."],
    ["Weak answers usually need cleaner sources, a clearer prompt, or a citation check.", "Las respuestas débiles suelen necesitar mejores fuentes, un prompt más claro o revisar citas."],
    ["A study guide is like a treasure map for the big ideas in your sources.", "Una guía de estudio es como un mapa del tesoro para las ideas importantes de tus fuentes."],
    ["Flashcards and quizzes help you practice. Missed cards are the ones to try again.", "Las tarjetas y cuestionarios te ayudan a practicar. Las tarjetas falladas son las que debes repetir."],
    ["FAQs answer common questions. Briefing docs give a fast overview before you start.", "Las preguntas frecuentes responden dudas comunes. Los resúmenes rápidos te dan una vista general antes de empezar."],
    ["A mind map is an idea tree. The trunk is the topic, and the branches are connected ideas.", "Un mapa mental es un árbol de ideas. El tronco es el tema y las ramas son ideas conectadas."],
    ["An infographic is a poster that explains the important stuff with pictures and short words.", "Una infografía es un cartel que explica lo importante con imágenes y pocas palabras."],
    ["Slide decks are starting drafts for presentations. You still check them before showing people.", "Las presentaciones son borradores iniciales. Aun así debes revisarlas antes de mostrarlas."],
    ["An Audio Overview is like two friendly hosts making a mini radio show from your sources.", "Un resumen de audio es como dos anfitriones amigables haciendo un mini programa de radio con tus fuentes."],
    ["A Video Overview is a narrated visual summary, like a tiny lesson video made from your sources.", "Un resumen de video es una explicación visual narrada, como una mini lección hecha con tus fuentes."],
    ["Pick audio for listening, video for seeing, a guide for reading, and a quiz for practice.", "Elige audio para escuchar, video para ver, guía para leer y cuestionario para practicar."],
    ["Do not put secret papers in the backpack: passwords, grades, private student info, or sensitive records.", "No pongas papeles secretos en la mochila: contraseñas, notas, datos privados de estudiantes o archivos sensibles."],
    ["Before sharing, check who can see the notebook, sources, notes, and generated artifacts.", "Antes de compartir, revisa quién puede ver la libreta, las fuentes, notas y materiales generados."],
    ["Some tools depend on age, country, account type, Workspace settings, and school or work rules.", "Algunas herramientas dependen de edad, país, tipo de cuenta, configuración de Workspace y reglas de escuela o trabajo."],
    ["NotebookLM is most useful when you give it good sources and still check the answer.", "NotebookLM es más útil cuando le das buenas fuentes y aun así revisas la respuesta."],
    ["Pack good sources, then ask.", "Guarda buenas fuentes y luego pregunta."],
    ["What should happen first in a strong NotebookLM workflow?", "¿Qué debe pasar primero en un buen flujo de NotebookLM?"],
    ["Add or choose useful sources.", "Agregar o elegir fuentes útiles."],
    ["Share the answer instantly.", "Compartir la respuesta al instante."],
    ["Ignore the original materials.", "Ignorar los materiales originales."],
    ["Upload secret information.", "Subir información secreta."],
    ["You cannot ask a backpack about a book until the book is inside.", "No puedes preguntarle a una mochila sobre un libro si el libro no está adentro."],
    ["Sources give NotebookLM the material it needs to answer.", "Las fuentes le dan a NotebookLM el material que necesita para responder."],
    ["Sources first.", "Fuentes primero."],
    ["Which metaphor matches NotebookLM best?", "¿Qué metáfora describe mejor a NotebookLM?"],
    ["A study buddy that reads the sources in its backpack.", "Un compañero de estudio que lee las fuentes en su mochila."],
    ["A magic crystal ball that knows everything.", "Una bola mágica que lo sabe todo."],
    ["A locked diary for passwords.", "Un diario cerrado para contraseñas."],
    ["A game controller for videos only.", "Un control de juegos solo para videos."],
    ["NotebookLM is the buddy. Your sources are the backpack.", "NotebookLM es el compañero. Tus fuentes son la mochila."],
    ["NotebookLM should stay grounded in the sources you add.", "NotebookLM debe basarse en las fuentes que agregas."],
    ["It is smart, but it needs your materials.", "Es inteligente, pero necesita tus materiales."],
    ["Check the answer against citations before trusting it.", "Revisar la respuesta con citas antes de confiar."],
    ["Copy anything that sounds fancy.", "Copiar cualquier cosa que suene elegante."],
    ["Add private grades for more context.", "Agregar notas privadas para más contexto."],
    ["Use unrelated sources because more is always better.", "Usar fuentes no relacionadas porque más siempre es mejor."],
    ["Citations are clue cards. Follow them before you celebrate.", "Las citas son tarjetas de pistas. Síguelas antes de celebrar."],
    ["Checking citations helps you catch mistakes or unsupported claims.", "Revisar citas ayuda a encontrar errores o ideas sin apoyo."],
    ["Trust, but check.", "Confía, pero revisa."],
    ["What should you do next after NotebookLM creates something useful?", "¿Qué debes hacer después de que NotebookLM crea algo útil?"],
    ["Review it, check source clues, then decide how to use it.", "Revisarlo, comprobar pistas de fuentes y decidir cómo usarlo."],
    ["Share it without reading.", "Compartirlo sin leer."],
    ["Delete every source.", "Borrar todas las fuentes."],
    ["Pretend citations do not matter.", "Fingir que las citas no importan."],
    ["Even a great robot helper needs a human captain.", "Hasta un gran robot ayudante necesita un capitán humano."],
    ["You are responsible for making sure the result is accurate and safe.", "Tú eres responsable de asegurar que el resultado sea correcto y seguro."],
    ["You are the captain.", "Tú eres el capitán."]
  ];
  return replacements.reduce((result, [en, es]) => result.replaceAll(en, es), text);
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
      ${!state.authed ? authView() : ""}
      ${state.authed && state.screen === "onboarding" ? onboarding() : ""}
      ${state.authed && state.screen === "home" ? home() : ""}
      ${state.authed && state.screen === "lesson" ? lessonView() : ""}
      ${state.authed && state.screen === "sandbox" ? sandboxView() : ""}
      ${state.authed && state.screen === "reward" ? rewardView() : ""}
      ${state.authed && state.screen === "games" ? gamesView() : ""}
      ${state.authed && state.screen === "playGame" ? playGameView() : ""}
      ${state.authed && state.screen === "profile" ? profileView() : ""}
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
        <span><strong>NotebookLM Quest</strong><small>${L("Study buddy adventure")}</small></span>
      </button>
      <nav class="nav-actions" aria-label="Main navigation">
        ${state.authed ? `<button class="ghost small" data-action="games">${L("Games")}</button>
        <button class="ghost small" data-action="profile">${L("Profile")}</button>` : ""}
        <button class="lang-toggle" data-action="toggleLang" aria-label="Toggle EN ES"><span class="${state.lang === "en" ? "active" : ""}">EN</span><span class="${state.lang === "es" ? "active" : ""}">ES</span></button>
        <button class="icon-button" data-action="toggleMute" aria-label="${state.muted ? L("Turn sound on") : L("Mute sound")}">${state.muted ? L("Sound Off") : L("Sound On")}</button>
      </nav>
      ${state.authed ? `<div class="stats" aria-label="Game stats">
        <span title="Hearts">${L("Heart")} ${state.hearts}</span>
        <span title="Gems">${L("Gem")} ${state.gems}</span>
        <span title="Streak">${L("Streak")} ${state.streak}</span>
        <span title="XP">${state.xp} XP</span>
      </div>` : ""}
    </header>
  `;
}

function authView() {
  return `
    <main class="auth-screen">
      <section class="auth-card brut">
        <div>
          <p class="eyebrow">${L("Sign in to start fresh")}</p>
          <h1>${L("Welcome to NotebookLM Quest.")}</h1>
          <p class="lede">${L("Your old stuck game values were cleared. Sign in with Google to begin a clean adventure with full hearts.")}</p>
          <button class="google-button brut-press" data-action="googleSignIn" aria-label="Continue with Google">
            <span class="google-mark" aria-hidden="true">G</span>
            ${L("Continue with Google")}
          </button>
          <p class="auth-note">${L("Demo mode: this static version saves your Google-style session in this browser. A real Google OAuth client ID can be connected later.")}</p>
        </div>
        ${mascot("happy", L("Fresh backpack, fresh hearts, clean start."))}
      </section>
    </main>
  `;
}

function onboarding() {
  return `
    <main class="onboarding">
      <section class="hero">
        <div>
          <p class="eyebrow">${L("NotebookLM for total beginners")}</p>
          <h1>${L("Train your source-powered study buddy.")}</h1>
          <p class="lede">${L("Novi teaches NotebookLM like you are 10: pack good sources, ask clear questions, follow citation clues, and make study tools you can trust.")}</p>
          <div class="onboard-grid">
            ${selectGroup("role", "Who are you?", ["Kid / Student", "Teacher", "Researcher", "Creator", "Knowledge Worker", "Admin"])}
            ${selectGroup("goal", "Main quest", ["Homework help", "Teaching", "Research", "Content", "Meetings", "All-around"])}
            ${selectGroup("confidence", "AI level", ["I am brand new", "I tried it once", "I use AI a lot"])}
          </div>
          <div class="diagnostic-card">
            <strong>${L("Backpack rule")}</strong>
            <p>${L("NotebookLM is smart, but it only knows the sources you pack. Good sources in, useful answers out.")}</p>
          </div>
          <button class="primary brut-press" data-action="finishOnboarding">${L("Start my quest")}</button>
        </div>
        ${mascot("thinking", L("I am Novi, your notebook buddy. I will keep the words tiny and the source clues shiny."))}
      </section>
    </main>
  `;
}

function selectGroup(key, label, options) {
  return `
    <fieldset class="brut">
      <legend>${L(label)}</legend>
      ${options.map((option) => `
        <label class="chip">
          <input type="radio" name="${key}" value="${option}" ${state[key] === option ? "checked" : ""} />
          <span>${L(option)}</span>
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
            <p class="eyebrow">${L("World path")}</p>
            <h1>NotebookLM Adventure Academy</h1>
          </div>
          <button class="primary brut-press" data-action="openLesson" data-unit="${next.unit.id}" data-lesson="${next.lesson.id}">${L("Continue")}</button>
        </div>
        <div class="path">${curriculum.map(unitCard).join("")}</div>
      </section>
      <aside class="side">
        ${mascot("happy", L("One lesson, one sandbox, one smarter NotebookLM move. Tiny steps count."))}
        <section class="card brut">
          <p class="eyebrow">${L("Daily goal")}</p>
          <h2>${completedCount()} / ${totalLessons} ${L("lessons")}</h2>
          <div class="meter"><span style="width:${pct}%"></span></div>
          <p>${pct}% ${L("of the academy complete. Finish a lesson to grow your streak.")}</p>
        </section>
        <section class="card brut boosters">
          <p class="eyebrow">${L("Boosters")}</p>
          <button data-action="buyHeart">${L("Heart refill - 30 gems")}</button>
          <button data-action="buyHint">${L("Hint pass - 20 gems")} (${state.hintPasses})</button>
          <button data-action="buyFreeze">${L("Streak freeze - 50 gems")} (${state.streakFreezes})</button>
        </section>
        <section class="card brut">
          <p class="eyebrow">${L("Badges")}</p>
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
        <p class="eyebrow">${state.lang === "es" ? "Mundo" : "World"} ${index + 1}</p>
        <h2>${L(unit.title)}</h2>
        <p>${L(unit.short)}</p>
        <div class="lesson-list">
          ${unit.lessons.map((lesson) => `
            <button class="lesson-pill brut-press ${state.completed[lesson.id] ? "done" : ""}" ${unlocked ? "" : "disabled"} data-action="openLesson" data-unit="${unit.id}" data-lesson="${lesson.id}">
              <span>${state.completed[lesson.id] ? (state.lang === "es" ? "Listo" : "Done") : L("Play")}</span>${L(lesson.title)}
            </button>
          `).join("")}
        </div>
      </div>
      <div class="progress-ring"><strong>${done}/3</strong><span>${L("lessons")}</span></div>
    </article>
  `;
}

function lessonView() {
  const lesson = currentLesson();
  const exercise = lesson.exercises[state.lessonIndex];
  const answered = state.answeredIndex !== null;
  return `
    <main class="lesson-screen">
      <section class="lesson-card brut">
        <div class="lesson-tools">
          <button class="back" data-action="home">${L("Back to path")}</button>
          <button class="ghost" data-action="speak" data-text="${escapeAttr(`${L(exercise.prompt)}. ${L(exercise.metaphor)}`)}">${L("Read aloud")}</button>
        </div>
        <p class="eyebrow">${L(lesson.skill)} - ${lesson.minutes} min</p>
        <h1>${L(lesson.title)}</h1>
        <div class="micro">
          <strong>${L("Novi note")}</strong>
          <p>${L(lesson.intro)}</p>
        </div>
        <div class="question">
          <p class="step">${L("Question")} ${state.lessonIndex + 1} ${L("of")} ${lesson.exercises.length}</p>
          <h2>${L(exercise.prompt)}</h2>
          <div class="metaphor"><strong>${L("Kid picture:")}</strong> ${L(exercise.metaphor)}</div>
          <div class="next-signal ${answered ? "ready" : ""}">
            <strong>${answered ? L("Read Novi's reason, then press Continue.") : L("Pick one answer to unlock the explanation.")}</strong>
          </div>
          <div class="answers">
            ${exercise.options.map((option, index) => answerButton(option, index, exercise)).join("")}
          </div>
        </div>
        ${feedback()}
        ${answered ? `<button class="primary brut-press continue-button" data-action="continueLesson">${state.feedback?.correct ? nextLessonLabel(lesson) : L("Try again")}</button>` : ""}
      </section>
      ${mascot(lessonMascotMood(), state.readingAloud ? L("I am reading this with the selected voice. Follow along like story time.") : L(state.feedback?.text || "Choose the answer that keeps NotebookLM source-powered and safe."))}
    </main>
  `;
}

function answerButton(option, index, exercise) {
  const answered = state.answeredIndex !== null;
  const selected = state.answeredIndex === index;
  const correctChoice = index === exercise.answer;
  const classes = ["brut-press"];
  if (answered && selected) classes.push(correctChoice ? "answer-correct" : "answer-wrong");
  if (answered && correctChoice) classes.push("answer-key");
  return `<button class="${classes.join(" ")}" data-action="answer" data-index="${index}" ${answered ? "disabled" : ""}>${L(option)}</button>`;
}

function nextLessonLabel(lesson) {
  return state.lessonIndex < lesson.exercises.length - 1 ? L("Continue to next question") : L("Continue to sandbox");
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
          <button class="back" data-action="lesson">${state.lang === "es" ? "Volver a la leccion" : "Back to lesson"}</button>
          <div>
            <p class="eyebrow">${L("Fake NotebookLM sandbox")}</p>
            <h1>${L(task.title)}</h1>
            <p>${L(task.brief)}</p>
          </div>
        </div>
        <div class="workspace">
          <aside class="sources">
            <h2>${L("Sources")}</h2>
            <div class="source ${hasRisky(selected) ? "danger" : ""}">${L("Secret packet")}</div>
            <div class="source active">${L("Class notes.pdf")}</div>
            <div class="source active">${L("Helpful website")}</div>
            <div class="source">${L("YouTube lesson")}</div>
          </aside>
          <section class="chat">
            <h2>${L("Chat")}</h2>
            <div class="prompt-box">${selected.includes("askQuestion") || selected.includes("askFocusedQuestion") ? L("Explain this for a 10-year-old and show citation clues.") : L("Ask your source backpack a question...")}</div>
            <div class="output">
              <strong>${L("NotebookLM-style answer")}</strong>
              <p>${L("Here is a simple answer from your sources. Citation clues appear as [Source 1] and [Source 2].")}</p>
              <button class="citation ${selected.some((id) => id.toLowerCase().includes("citation") || id === "verifyOutput") ? "active" : ""}">${L("Citation clues")}</button>
            </div>
          </section>
          <aside class="studio">
            <h2>${L("Studio")}</h2>
            ${["Study Guide", "Flashcards", "Mind Map", "Audio Overview", "Video Overview", "Slide Deck"].map((tool) => `<button class="${selected.some((id) => id.toLowerCase().includes(tool.split(" ")[0].toLowerCase())) ? "active" : ""}">${L(tool)}</button>`).join("")}
          </aside>
        </div>
        <div class="action-tray">
          <div>
            <p class="eyebrow">${L("Next best move")}</p>
            <strong>${complete ? L("Workflow complete") : L(LABELS[nextStep])}</strong>
            <p>${complete ? L("Great. Press Complete lesson to collect your reward.") : L("Click the matching action card on the right.")}</p>
          </div>
          <div class="sandbox-actions">
            ${task.actions.map(([id, label]) => `<button class="brut-press" data-action="sandboxAction" data-step="${id}" ${selected.includes(id) ? "disabled" : ""}>${L(label)}</button>`).join("")}
          </div>
        </div>
        <div class="sandbox-meta">
          <span>${L("Correct steps")}: ${selected.length}/${task.steps.length}</span>
          <span>${L("Mistakes")}: ${state.sandboxMistakes}</span>
          <span>${L("Hint passes")}: ${state.hintPasses}</span>
        </div>
        ${feedback()}
        ${complete ? `<div class="next-signal ready"><strong>${L("Stage reached. Press the reward button.")}</strong></div><button class="primary brut-press complete-button" data-action="completeLesson">${L("Complete lesson and get rewards")}</button>` : ""}
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
        ${mascot("celebration", reward.badge ? `${state.lang === "es" ? "Insignia desbloqueada" : "Badge unlocked"}: ${L(reward.badge)}. ${state.lang === "es" ? "Tus habilidades de mochila subieron de nivel." : "Your backpack skills leveled up."}` : L("Clean work. You checked sources like a tiny research captain."))}
        <p class="eyebrow">${L("Lesson complete")}</p>
        <h1>${L(lesson.title)}</h1>
        <div class="reward-grid">
          <div><strong>+${reward.xp}</strong><span>XP</span></div>
          <div><strong>+${reward.gems}</strong><span>Gems</span></div>
          <div><strong>${reward.accuracy}%</strong><span>${L("Accuracy")}</span></div>
          <div><strong>${completedWorlds()}</strong><span>${L("World badges")}</span></div>
        </div>
        <p class="takeaway">${L(lesson.takeaway)}</p>
        <div class="next-signal ready"><strong>${L("Best next move: continue the path, or play rewards if a game unlocked.")}</strong></div>
        <div class="actions">
          <button class="primary brut-press" data-action="openLesson" data-unit="${next.unit.id}" data-lesson="${next.lesson.id}">${L("Next lesson")}</button>
          <button class="ghost brut-press" data-action="home">${L("Back to path")}</button>
          <button class="ghost brut-press" data-action="games">${L("Play rewards")}</button>
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
        <div><p class="eyebrow">${L("Reward games")}</p><h1>${L("NotebookLM Arcade")}</h1></div>
        <button class="ghost" data-action="home">${L("Back to path")}</button>
      </section>
      <section class="game-grid">
        ${games.map(([id, title, text, unlock], index) => {
          const unlocked = worlds > index;
          return `
            <article class="game-card brut ${unlocked ? "" : "locked"}">
              <p class="eyebrow">${L("Game")} ${index + 1}</p>
              <h2>${L(title)}</h2>
              <p>${L(text)}</p>
              <p><strong>${L("Best:")}</strong> ${state.gameScores[id] || 0}</p>
              <button class="primary brut-press" data-action="playGame" data-game="${id}" ${unlocked ? "" : "disabled"}>${unlocked ? L("Play") : L(unlock)}</button>
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
        <p class="eyebrow">${L("Mini-game")}</p>
        <h1>${L(game[1])}</h1>
        <p>${L(game[2])} ${L("Pick the best tile to score points.")}</p>
        <div class="game-board">
          ${choices.map(([label, good], index) => `<button class="game-tile brut-press" data-action="gameChoice" data-good="${good}" data-score="${(index + 1) * 25}">${L(label)}</button>`).join("")}
        </div>
        <p><strong>${L("Best score:")}</strong> ${state.gameScores[state.activeGame] || 0}</p>
        ${feedback()}
        <div class="actions"><button class="ghost" data-action="games">${L("Back to games")}</button></div>
      </section>
    </main>
  `;
}

function profileView() {
  return `
    <main class="profile-screen">
      <section class="profile-card brut">
        <p class="eyebrow">${L("Progress")}</p>
        <h1>${L("Your NotebookLM Quest")}</h1>
        <div class="reward-grid">
          <div><strong>${state.xp}</strong><span>XP</span></div>
          <div><strong>${state.gems}</strong><span>Gems</span></div>
          <div><strong>${state.streak}</strong><span>Streak</span></div>
          <div><strong>${completedCount()}</strong><span>${L("Lessons")}</span></div>
        </div>
        <p><strong>${L("Signed in:")}</strong> ${state.user?.name || "Google Learner"} (${state.user?.provider || "google"})</p>
        <p><strong>${L("Role:")}</strong> ${L(state.role || "Kid / Student")} | <strong>${L("Goal:")}</strong> ${L(state.goal || "All-around")} | <strong>${L("Sound:")}</strong> ${state.muted ? L("Muted") : L("On")}</p>
        <div class="actions">
          <button class="ghost" data-action="toggleMute">${state.muted ? L("Turn sound on") : L("Mute sound")}</button>
          <button class="ghost danger-button" data-action="resetProgress">${L("Reset progress")}</button>
          <button class="ghost" data-action="signOut">${L("Sign out")}</button>
          <button class="primary" data-action="home">${L("Back to path")}</button>
        </div>
      </section>
    </main>
  `;
}

function feedback() {
  return state.feedback ? `<div class="feedback ${state.feedback.correct ? "good" : "bad"}"><strong>${L(state.feedback.title)}</strong><p>${L(state.feedback.text)}</p>${state.feedback.kid ? `<small>${L(state.feedback.kid)}</small>` : ""}</div>` : "";
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
  if (action === "toggleLang") state.lang = state.lang === "en" ? "es" : "en";
  if (action === "googleSignIn") googleSignIn();
  if (action === "finishOnboarding") finishOnboarding();
  if (action === "openLesson") openLesson(target.dataset.unit, target.dataset.lesson);
  if (action === "answer") answer(Number(target.dataset.index));
  if (action === "continueLesson") continueLesson();
  if (action === "lesson") state.screen = "lesson";
  if (action === "sandboxAction") sandboxAction(target.dataset.step);
  if (action === "completeLesson") completeLesson();
  if (action === "buyHeart") buy("heart");
  if (action === "buyHint") buy("hint");
  if (action === "buyFreeze") buy("freeze");
  if (action === "speak") speak(target.dataset.text);
  if (action === "playGame") playGame(target.dataset.game);
  if (action === "gameChoice") gameChoice(target.dataset.good === "true", Number(target.dataset.score));
  if (action === "signOut") signOut();
  if (action === "resetProgress" && confirm("Reset your NotebookLM Quest progress?")) resetProgress(true);
  state.feedback = ["home", "games", "profile", "lesson"].includes(action) ? null : state.feedback;
  saveState();
  render();
}

function googleSignIn() {
  const name = "Google Learner";
  resetProgress(false);
  state.authed = true;
  state.user = {
    name,
    email: "google-user@notebooklm-quest.local",
    provider: "google"
  };
  state.screen = "onboarding";
  state.feedback = null;
}

function signOut() {
  state.authed = false;
  state.user = null;
  state.screen = "onboarding";
}

function resetProgress(keepAuth) {
  const auth = keepAuth ? { authed: state.authed, user: state.user } : {};
  Object.assign(state, { ...initialState, ...auth });
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
  state.answeredIndex = null;
  state.correct = 0;
  state.feedback = null;
  state.sandboxActions = [];
  state.sandboxMistakes = 0;
  state.screen = "lesson";
}

function answer(index) {
  if (state.answeredIndex !== null) return;
  if (state.hearts <= 0) {
    state.answeredIndex = index;
    state.feedback = { correct: false, title: "Heart refill needed", text: "You are out of hearts. Buy a refill with gems, then keep going.", kid: "Even heroes need snacks." };
    playSound("wrong");
    return;
  }
  const lesson = currentLesson();
  const exercise = lesson.exercises[state.lessonIndex];
  state.answeredIndex = index;
  if (index === exercise.answer) {
    state.correct += 1;
    state.xp += 5;
    state.feedback = { correct: true, title: "Correct", text: exercise.rationale, kid: exercise.kidSummary };
    playSound("correct");
  } else {
    state.hearts = Math.max(0, state.hearts - 1);
    state.feedback = { correct: false, title: "Tiny wobble", text: exercise.rationale, kid: exercise.kidSummary };
    playSound("wrong");
  }
}

function continueLesson() {
  const lesson = currentLesson();
  if (!state.feedback?.correct) {
    state.answeredIndex = null;
    state.feedback = null;
    return;
  }
  if (state.lessonIndex < lesson.exercises.length - 1) {
    state.lessonIndex += 1;
    state.answeredIndex = null;
    state.feedback = null;
  } else {
    state.answeredIndex = null;
    state.feedback = null;
    state.screen = "sandbox";
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

async function speak(text) {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  state.readingAloud = true;
  saveState();
  render();
  const playedOpenAiVoice = await speakWithOpenAi(text);
  if (playedOpenAiVoice) return;
  speakWithBrowser(text);
}

async function speakWithOpenAi(text) {
  try {
    const response = await fetch("/api/tts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text, lang: state.lang })
    });
    if (!response.ok) return false;
    const audio = new Audio(URL.createObjectURL(await response.blob()));
    audio.onended = () => {
      state.readingAloud = false;
      saveState();
      render();
    };
    audio.onerror = audio.onended;
    await audio.play();
    return true;
  } catch {
    return false;
  }
}

function speakWithBrowser(text) {
  if (!("speechSynthesis" in window)) {
    state.readingAloud = false;
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = state.lang === "es" ? "es-ES" : "en-US";
  utterance.rate = 0.95;
  utterance.pitch = 1.08;
  const preferredVoice = pickPreferredVoice();
  if (preferredVoice) utterance.voice = preferredVoice;
  utterance.onend = () => {
    state.readingAloud = false;
    saveState();
    render();
  };
  utterance.onerror = utterance.onend;
  speechSynthesis.speak(utterance);
}

function setDefaultVoice() {
  if (!("speechSynthesis" in window)) return;
  const applyDefault = () => {
    const voice = pickPreferredVoice();
    if (voice && state.voiceName !== voice.name) {
      state.voiceName = voice.name;
      saveState();
    }
  };
  applyDefault();
  speechSynthesis.addEventListener?.("voiceschanged", applyDefault);
  speechSynthesis.onvoiceschanged = applyDefault;
}

function pickPreferredVoice() {
  const voices = speechSynthesis.getVoices();
  const langPattern = state.lang === "es" ? /^es([-_]|$)/i : /^en[-_]us/i;
  const savedVoice = voices.find((voice) => voice.name === state.voiceName && langPattern.test(voice.lang));
  if (savedVoice) return savedVoice;
  if (state.lang === "es") {
    const spanishVoices = voices.filter((voice) => /^es([-_]|$)/i.test(voice.lang));
    const preferredSpanishVoice = spanishVoices.find((voice) => /female|woman|mujer|paulina|sabina|mónica|monica|lucia|lupe|soledad|elvira|helena|laura|maria|paloma|carmen|isabela/i.test(voice.name))
      || spanishVoices.find((voice) => !/male|man|hombre|jorge|pablo|diego|carlos|miguel|juan/i.test(voice.name))
      || spanishVoices[0];
    if (preferredSpanishVoice) state.voiceName = preferredSpanishVoice.name;
    return preferredSpanishVoice;
  }
  const americanVoices = voices.filter((voice) => voice.lang === "en-US" || voice.lang.toLowerCase().startsWith("en-us"));
  const preferredVoice = americanVoices.find((voice) => /female|woman|zira|jenny|aria|samantha|victoria|karen|susan|allison|ava|joanna|kendra|kimberly|salli/i.test(voice.name))
    || americanVoices.find((voice) => !/male|man|david|mark|guy|brian|daniel|george|fred|alex/i.test(voice.name))
    || americanVoices[0]
    || voices.find((voice) => /^en[-_]us/i.test(voice.lang))
    || voices.find((voice) => /^en/i.test(voice.lang));
  if (preferredVoice) state.voiceName = preferredVoice.name;
  return preferredVoice;
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
