export interface ProjectItem {
  id: string;
  title: string;
  path: string;
  category: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  kodamaMessage: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  path: string;
  skills: string[];
  kodamaMessage: string;
}

export interface ResumeEntry {
  period: string;
  title: string;
  organization: string;
  details: string[];
}

export interface InterestItem {
  id: string;
  title: string;
  path: string;
  badge: string;
  description: string;
  kodamaMessage: string;
}

// 1. PERSONAL DETAILS and ABOUT ME
export const PERSONAL_DETAILS = {
  id: "hero-card",
  name: "ARNAV SHARMA",
  role: "[ AI ENGINEER and BACKEND SYSTEMS DEVELOPER ]",
  tagline:
    "Building agentic AI harnesses, multi-step LLM/RAG pipelines, and scalable backend systems.",
  location: "Chandigarh, India",
  focus: "AGENTIC AI // RAG // BACKEND ARCHITECTURE",
  status: "OPEN TO AI ENGINEER and BACKEND SYSTEMS ROLES",
  email: "arnavsharma200626@gmail.com",
  github: "https://github.com/points-to-arnav",
  kodamaMessage:
    "Yo! I'm Arnav's Kodama spirit. Hover over any card to explore his AI harnesses, backend systems, and Linux builds!",
};

export const ABOUT_ME_DATA = {
  id: "about-me-card",
  path: "~/arnav/about_me.md",
  paragraphs: [
    "I'm an AI and Backend Engineer focused on building deterministic LLM systems, agentic AI harnesses, and scalable backend architectures. My core work centers around Deep Learning, Generative AI, and NLP—orchestrating multi-step RAG pipelines, vector stores, and human-in-the-loop automation.",
    "Across the stack, I work with Python, LangChain, LangGraph, ChromaDB, n8n, and Node.js/Express. I daily-drive Omarchy Linux and build tools from scratch whenever existing software gets in my way—whether that means intercepting raw Linux kernel keystrokes over Bluetooth or shipping an ad-free web audio guitar tuner.",
  ],
  quickFacts: [
    { label: "CORE FOCUS", value: "Agentic AI, GenAI/NLP and Backend" },
    { label: "DAILY DRIVER", value: "Omarchy (Linux)" },
    { label: "PRIMARY STACK", value: "Python, LangGraph, Node.js, ChromaDB" },
    { label: "TARGET ROLES", value: "AI Engineer and Backend Developer" },
  ],
  kodamaMessage:
    "He daily-drives Omarchy Linux and obsesses over Deep Learning, GenAI, Agentic harnesses, and backend architecture!",
};

// 2. RESUME SECTION DATA
export const RESUME_DATA = {
  id: "resume-card",
  path: "~/arnav/resume.pdf",
  pdfUrl: "/resume.pdf",
  kodamaMessage:
    "Check out his AI workflow training at IIT Jammu or grab the raw PDF above!",
  education: [
    {
      period: "2024 — 2028",
      title: "B.Tech in Computer Science and Engineering (AI and ML)",
      organization: "Amity University Punjab",
      details: [
        "Focus areas: Deep Learning, Natural Language Processing (NLP), Applied Machine Learning, and Backend Systems.",
      ],
    },
  ] as ResumeEntry[],
  experienceAndMilestones: [
    {
      period: "SUMMER 2025",
      title: "AI Workflow Automation and LLM Orchestration Training",
      organization: "IIT Jammu, Techible and i3c",
      details: [
        "Engineered multi-step AI automation pipelines, multi-service API integrations, and human-in-the-loop LLM workflows using n8n.",
      ],
    },
    {
      period: "2024-2026",
      title: "Band Coordinator and Lead Guitarist",
      organization: "University Music Club",
      details: [
        "Managing live band sets, rehearsal logistics, and mentoring musicians.",
      ],
    },
  ] as ResumeEntry[],
};

// 3. TECH STACK SECTION DATA
export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "skills-ai",
    title: "GenAI, Agentic AI and Deep Learning",
    path: "~/tech_stack/ai_engineering",
    skills: [
      "Python",
      "Deep Learning (DL)",
      "GenAI and LLMs",
      "NLP",
      "Agentic AI and Harnesses",
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "Structured Output Parsing",
      "Whisper / Mistral / Sarvam AI",
    ],
    kodamaMessage:
      "From LangGraph agent harnesses and RAG pipelines to Deep Learning and multilingual NLP!",
  },
  {
    id: "skills-backend",
    title: "Backend, Databases and Automation",
    path: "~/tech_stack/backend_systems",
    skills: [
      "Node.js",
      "Express.js",
      "Java",
      "JavaScript (ES6+)",
      "ChromaDB (Vector DB)",
      "MySQL",
      "MongoDB",
      "Supabase",
      "n8n Automation",
      "Human-in-the-Loop Systems",
      "REST and Telegram Bot APIs",
    ],
    kodamaMessage:
      "Scalable backends and automation—Node, Express, SQL/NoSQL, ChromaDB vectors, and n8n pipelines!",
  },
  {
    id: "skills-frontend-linux",
    title: "Frontend, Linux and Dev Tooling",
    path: "~/tech_stack/linux_and_web",
    skills: [
      "Omarchy Linux (Daily Driver)",
      "React",
      "Vite",
      "Streamlit",
      "Git and GitHub",
      "Linux Kernel / Bluetooth HID Scripting",
      "HTML5 and Tailwind CSS",
    ],
    kodamaMessage:
      "Daily-driving Omarchy Linux! React + Vite on the frontend, Git in the terminal, and low-level Linux scripting under the hood.",
  },
];

// 4. PROJECTS SECTION DATA
export const PROJECTS: ProjectItem[] = [
  {
    id: "keyboarder",
    title: "Keyboarder",
    path: "~/projects/keyboarder",
    category: "[LINUX SYSTEMS // BLUETOOTH HID]",
    description:
      "A low-level Linux utility built on Omarchy that turns a laptop's built-in keyboard into a wireless Bluetooth keyboard for a tablet—built instead of buying a separate physical tablet keyboard. (Linux-only, as Windows blocks raw keystroke interrupts).",
    highlights: [
      "Intercepts raw hardware keystroke interrupts on Omarchy Linux and streams HID packets over Bluetooth to paired devices.",
      "Bypasses OS-level input restrictions that prevent raw key-interrupt forwarding on Windows.",
    ],
    tags: ["Python", "Omarchy Linux", "Bluetooth HID", "System Interrupts"],
    githubUrl: "https://github.com/points-to-arnav/keyboarder",
    kodamaMessage:
      "Why buy a tablet keyboard when you can hack Linux? Built on Omarchy to stream raw laptop key interrupts over Bluetooth!",
  },
  {
    id: "nyanko-tuner",
    title: "Nyanko Tuner",
    path: "~/projects/nyanko-tuner",
    category: "[WEB AUDIO // MUSICIAN TOOL]",
    description:
      "A fast, zero-ad web guitar tuner built to replace bloated, ad-riddled guitar tuner apps on the Play Store.",
    highlights: [
      "Processes real-time microphone audio frequencies in the browser for low-latency pitch detection.",
      "Shipped a distraction-free, instant-load interface with zero ads or paywalls.",
    ],
    tags: ["JavaScript", "React", "Vite", "Web Audio API"],
    githubUrl: "https://github.com/points-to-arnav/nyanko-tuner",
    liveUrl: "https://nyanko-tuner.vercel.app/",
    kodamaMessage:
      "Play Store tuners were flooded with annoying ads, so Arnav built Nyanko Tuner! Click [Live Demo] to try it out.",
  },
  {
    id: "linkedin-ai-automation",
    title: "Human-in-the-Loop AI Content Pipeline",
    path: "~/projects/linkedin-n8n-agent",
    category: "[AGENTIC WORKFLOW // N8N and LLM]",
    description:
      "An end-to-end AI pipeline that converts raw ideas sent via Telegram into structured, publication-ready posts using Nemotron 550B and a human-in-the-loop approval cycle.",
    highlights: [
      "Enforced deterministic structured output parsing (hook, narrative, lesson, CTA) over raw LLM text.",
      "Built an interactive Telegram approval loop allowing iterative AI edits before publishing.",
    ],
    tags: [
      "n8n",
      "Nemotron 550B",
      "Telegram Bot API",
      "Structured Output",
      "Human-in-the-Loop",
    ],
    githubUrl: "https://github.com/points-to-arnav",
    kodamaMessage:
      "Drop a rough idea in Telegram -> Nemotron 550B + n8n parses it into a structured draft with a human-in-the-loop approval cycle!",
  },
  {
    id: "AI-Video-Assistant",
    title: "Multilingual AI Video Assistant (RAG)",
    path: "~/projects/ai-video-rag",
    category: "[APPLIED AI // MULTILINGUAL RAG]",
    description:
      "A conversational RAG system that ingests YouTube videos, transcribes audio across English and Hindi, and enables context-aware Q and A.",
    highlights: [
      "Combined Whisper AI transcription, ChromaDB vector embeddings, LangChain, and Mistral AI.",
      "Extended multilingual transcription to Hindi via Sarvam AI's API with a Streamlit UI.",
    ],
    tags: ["Python", "LangChain", "ChromaDB", "Whisper AI", "Mistral AI", "Sarvam AI"],
    githubUrl: "https://github.com/points-to-arnav/AI_Video_Assistant",
    kodamaMessage:
      "Multilingual RAG in action! Ingests YouTube videos in English and Hindi using Whisper + Sarvam AI and answers questions via Mistral and ChromaDB.",
  },
  {
    id: "Mediflow-ai",
    title: "MediFlow AI",
    path: "~/projects/mediflow-ai",
    category: "[HACKATHON // AI and BACKEND]",
    description:
      "A collaborative hackathon build designed to streamline clinical triage and workflow automation using AI pipelines and real-time backend infrastructure.",
    highlights: [
      "Architected backend data routing and Supabase real-time synchronization under hackathon constraints.",
      "Integrated automated AI workflow pipelines for triage prioritization.",
    ],
    tags: ["AI Workflows", "Supabase", "Backend Systems", "JavaScript"],
    githubUrl: "https://github.com/CodeCrafterAdi2006/MediflowAI",
    kodamaMessage:
      "Built during a collaborative hackathon sprint—combining real-time Supabase backend tables with automated AI triage workflows!",
  },
];

// 5. INTERESTS SECTION DATA
export const INTERESTS_DATA: InterestItem[] = [
  {
    id: "interest-guitar",
    title: "Guitar (7+ Years) and Live Music",
    path: "~/interests/guitar.wav",
    badge: "[ // 7+_YEARS_GUITAR ]",
    description:
      "Playing guitar for over seven years and coordinating live band sets—which also inspired building tools like Nyanko Tuner.",
    kodamaMessage:
      "7+ years on the fretboard! When he's not building agent harnesses, he's jamming on guitar.",
  },
  {
    id: "interest-omarchy",
    title: "Omarchy Linux and System Tinkering",
    path: "~/interests/omarchy.conf",
    badge: "[ // OMARCHY_LINUX ]",
    description:
      "Daily-driving Omarchy Linux, customizing keyboard-driven workflows, and writing low-level utilities that talk directly to hardware.",
    kodamaMessage:
      "Omarchy Linux is home! Give him a terminal and raw system access, and he'll automate anything.",
  },
  {
    id: "interest-media",
    title: "Anime, Cinema and Storytelling",
    path: "~/interests/watchlist.mkv",
    badge: "[ // ANIME_AND_FILMS ]",
    description:
      "Unwinding with anime, movies, and great soundtracks—always appreciating sharp world-building and narrative pacing.",
    kodamaMessage:
      "Always down to talk top-tier anime arcs, cinema, or killer soundtracks!",
  },
];

export interface NetworkItem {
  id: string;
  name: string;
  role: string;
  path: string;
  description: string;
  url: string;
  linkLabel: string;
  kodamaMessage: string;
}

// 6. NETWORK SECTION DATA
export const NETWORK_DATA: NetworkItem[] = [
  {
    id: "friend-jungbir",
    name: "JUNGBIR",
    role: "[ DEVELOPER // FRIEND ]",
    path: "~/network/jungbir.sh",
    description:
      "Fellow developer and friend building sharp projects and web experiences.",
    url: "https://jungbir.github.io/",
    linkLabel: "[ Visit Portfolio -> ]",
    kodamaMessage:
      "That's Jungbir! Solid developer and a great friend of Arnav's—click to check out his portfolio!",
  },
  {
    id: "friend-aditya",
    name: "ADITYA",
    role: "[ DEVELOPER // FRIEND ]",
    path: "~/network/aditya.sh",
    description:
      "Fellow engineer and developer friend shipping clean builds on the web.",
    url: "https://aditya1952-portfolio.vercel.app",
    linkLabel: "[ Visit Portfolio -> ]",
    kodamaMessage:
      "Meet Aditya! Another awesome developer friend in Arnav's circle—go explore his site!",
  },
];

// 7. CONTACT_ME SECTION DATA
export const CONTACT_DATA = {
  id: "contact-card",
  path: "~/arnav/contact_me.sh",
  heading: "INITIATE_CONNECTION // CONTACT_ME",
  subtext:
    "Want to collaborate on an AI or backend project, talk agentic systems, or jam on guitar? Drop a signal below.",
  email: "arnavsharma200626@gmail.com",
  github: "https://github.com/points-to-arnav",
  kodamaMessage:
    "Building something in AI or Backend systems? Copy `arnavsharma200626@gmail.com` with one click and reach out!",
};
