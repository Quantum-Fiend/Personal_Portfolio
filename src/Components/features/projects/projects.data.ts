export type Project = {
  title: string;
  desc: string;
  tech: string[];
  features: string[];
  image?: string;
  live?: string;
  github?: string;
};

export const featuredProjects: Project[] = [
  {
    title: "Re-Start (Full-Stack / Agency Website)",
    desc: "Re-Start is a modern, responsive website designed to showcase startup services and digital solutions with a clean, conversion-focused UI.",
    tech: ["Php", "MySql", "JavaScript", "Css", "Html"],
    features: [
      "Modern responsive UI with smooth animations",
      "SEO-friendly and performance optimized layout",
      "Clean navigation with professional branding",
    ],
    image: "/project-page-images/re-start.png",
    live: "https://re-start.in/",
  },
];

export const githubProjects: Project[] = [
  {
    title: "Neuro_Vault_Ai",
    desc: "NeuroVault is an AI-powered knowledge base that lets users upload PDFs, code, and web data and then ask questions using semantic search and LLM-based responses.",
    tech: ["Python", "Go" , "Next Js" , "Postgre Sql" , "Redis","Docker"],
    features: [
      "Uploads and indexes PDFs, code, and web data",
      "Enables semantic search using embeddings",
      "Uses LLMs to answer questions from stored knowledge",
    ],
    image: "/project-page-images/NeuroVault.png",
    github: "https://github.com/Quantum-Fiend/Neuro_Vault",
  },
  {
    title: "Auth System Boilerplate",
    desc: "Secure JWT authentication system with role-based access control.",
    tech: ["Node.js", "JWT"],
    features: ["JWT security", "Role access", "Session handling"],
    image: "/project-page-images/re-start.png",
    github: "#",
  },
  {
    title: "API Rate Limiter",
    desc: "Backend middleware for controlling API abuse and request throttling.",
    tech: ["Express", "Redis"],
    features: ["Request throttling", "Redis caching", "Abuse protection"],
    image: "/project-page-images/re-start.png",
    github: "#",
  },
  {
    title: "API Rate Limiter",
    desc: "Backend middleware for controlling API abuse and request throttling.",
    tech: ["Express", "Redis"],
    features: ["Request throttling", "Redis caching", "Abuse protection"],
    image: "/project-page-images/re-start.png",
    github: "#",
  },
];
