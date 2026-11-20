// All site content lives here. Edit this file to update the portfolio;
// components only read from it. Fields set to null render as a visible
// "add link" placeholder so missing info is easy to spot.

export type Link = { label: string; href: string };

export type Role = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  points: string[];
};

export type Project = {
  title: string;
  year: string;
  problem: string;
  stack: string[];
  features: string[];
  github: string | null;
  demo: string | null | false; // false = no live demo, hides the button
  featured: boolean;
};

export type SkillGroup = { name: string; items: string[] };

export type School = {
  name: string;
  place: string;
  course: string;
  start: string;
  end: string;
  score: string | null;
};

export const profile = {
  name: "Karibandi Bala Supriya",
  shortName: "Supriya",
  role: "Software Engineer / Full Stack Developer ",
  positioning:
    "Computer Science undergraduate building Node.js backends, React and Angular interfaces, and RAG-based AI applications.",
  terminal: { command: "whoami", output: "cse undergrad, full-stack and AI developer, open to entry-level roles" },
  location: "Hyderabad, India",
  studying: "B.E. CSE, MVSR (2027)",
  status: "Open to entry-level SDE / Full Stack roles",
  email: "balasupriyak@gmail.com",
  phone: "+91 9014400816",
  linkedin: "https://www.linkedin.com/in/bala-supriya",
  github: "https://github.com/balasupriyak" as string | null,
  resume: "/Karibandi-Bala-Supriya-Resume.pdf",
  photo: null as string | null, // TODO: optional headshot in /public
};

export const about: string[] = [
  "I'm a Computer Science student at MVSR Engineering College in Hyderabad, graduating in 2027.",
  "Since June 2026, I've been working as a Node.js intern at Instrutel, building APIs for real-time data processing and Angular interfaces for engineering dashboards.",
  "I also build full-stack applications with React and Next.js, including RAG document assistants and AI-powered travel planning tools.",
  "I'm looking for an entry-level software development or full stack developer role.",
];

export const experience: Role[] = [
  {
    title: "Node.js Technology Intern",
    company: "Instrutel Pvt. Ltd.",
    location: "Hyderabad",
    start: "June 2026",
    end: "Present",
    points: [
      "Developed backend applications in Node.js focused on API development and real-time data processing.",
      "Designed and built responsive Angular interfaces for real-time engineering dashboards.",
      "Collaborated with the development team to build, test and integrate full-stack features in a real-world environment.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "InfoMate – RAG Document Assistant",
    year: "2026",
    problem: "Finding answers across document collections requires searching and reading multiple files manually.",
    stack: ["Next.js", "TypeScript", "Gemini API", "Pinecone", "MongoDB", "Clerk", "Razorpay"],
    features: [
      "Supports PDF, DOCX, PPTX, TXT and Markdown files",
      "Uses Pinecone vector embeddings for semantic search across documents",
      "Integrates Gemini, MongoDB Atlas, Clerk authentication and Razorpay payments",
      "Deployed as a responsive full-stack application on Vercel",
    ],
    github: "https://github.com/balasupriyak/InfoMate",
    demo: "https://info-mate-rej97o79o-supriya-a6d9.vercel.app/",
    featured: true,
  },
  {
    title: "VOYAGE: Smart AI Itinerary Planner",
    year: "2025–2026",
    problem: "Planning a trip means juggling preferences, weather and shared plans across many tabs.",
    stack: ["React.js", "Node.js", "Gemini API", "OpenWeatherMap API"],
    features: [
      "Generates personalized itineraries from user preferences with the Gemini API",
      "Trip planning, live weather updates and trip sharing",
      "Real-time travel information from OpenWeatherMap",
    ],
    github: "https://github.com/balasupriyak/voyage-itinerary",
    demo: "https://voyageitinerary.netlify.app/",
    featured: true,
  },
  {
    title: "AI-Assisted Knowledge Retrieval System",
    year: "2026",
    problem: "Organization-specific information can be difficult to find across separate knowledge sources.",
    stack: ["Angular", "Ollama", "REST APIs"],
    features: [
      "Provides an Angular chatbot integrated with an Ollama language model",
      "Connects frontend components with backend APIs",
      "Uses responsive interface components for knowledge retrieval",
    ],
    github: null,
    demo: null,
    featured: true,
  },
];

export const skills: SkillGroup[] = [
  { name: "Languages", items: ["Python", "SQL", "C"] },
  { name: "Backend", items: ["Node.js", "REST APIs", "Real-time Data Processing"] },
  { name: "Frontend", items: ["HTML", "CSS", "React.js", "Angular", "Responsive Design"] },
  { name: "Databases", items: ["SQL (Oracle)", "MongoDB Atlas", "Pinecone (Vector DB)", "Firebase"] },
  { name: "AI / APIs", items: ["RAG", "Google Gemini API", "Ollama", "OpenWeatherMap API"] },
  { name: "Tools & Practices", items: ["Git", "GitHub", "Visual Studio Code", "MuleSoft", "Vercel Deployment"] },
];

export const certifications: { name: string; issuer: string }[] = [
  { name: "Java Full Stack Developer", issuer: "AICTE" },
  { name: "Python Full Stack Developer", issuer: "AICTE" },
  { name: "Database Programming with SQL", issuer: "Oracle Academy" },
  { name: "Artificial Intelligence – Deep Learning", issuer: "AIMER Society" },
];

export const achievements: string[] = [
  "Certificate of Merit for a paper presentation at CSI Fusion",
  "Participated in hackathons and technical events",
  "Led creative and technical projects",
];

export const education: School[] = [
  {
    name: "MVSR Engineering College",
    place: "Hyderabad",
    course: "B.E. Computer Science Engineering",
    start: "2023",
    end: "2027",
    score: null, // TODO: add CGPA, e.g. "CGPA 8.5 / 10"
  },
  {
    name: "Sri Chaitanya Junior College",
    place: "Hyderabad",
    course: "Intermediate (MPC)",
    start: "2021",
    end: "2023",
    score: null,
  },
  {
    name: "Chaitanya Central School",
    place: "Mahabubnagar",
    course: "CBSE",
    start: "2011",
    end: "2021",
    score: null,
  },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

// Timeline rows in the hero profile card (oldest first).
export const milestones = [
  { when: "2023", what: "Started B.E. CSE at MVSR" },
  { when: "2025", what: "Built VOYAGE" },
  { when: "2026", what: "Built InfoMate and joined Instrutel" },
];
