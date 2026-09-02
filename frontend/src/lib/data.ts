export const profile = {
  name: "Nadeesha Maduwantha",
  handle: "nadeesha",
  title: "IT Undergraduate",
  role: "Aspiring Software Engineer",
  tagline:
    "Building full-stack software with a growing focus on DevOps — from React/Next.js frontends to Flask and PostgreSQL backends. Actively seeking a Software Engineering internship where I can help build reliable, scalable systems.",
  resumeUrl: "/235108J-NADEESHA_MADUWANTHA.pdf",
  email: "nadeeshamaduwantha6@gmail.com",
  githubUrl: "https://github.com/Nadeesha-Maduwantha",
  githubLabel: "github.com/Nadeesha-Maduwantha",
  linkedinUrl: "https://www.linkedin.com/in/nadeesha-maduwantha-02ab40310/",
  linkedinLabel: "linkedin.com/in/nadeesha-maduwantha",
};

export const navLinks = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export const about = {
  bio: [
    "I'm a third-year undergraduate pursuing a degree in ",
    { bold: "Information Technology & Management" },
    " at the ",
    { bold: "University of Moratuwa" },
    ", with a strong focus on Software Engineering and DevOps. I'm actively seeking an internship opportunity where I can contribute to building and maintaining scalable, reliable software systems. With hands-on experience across Java, Python, JavaScript, TypeScript, React, Next.js, Flask, PostgreSQL, MySQL, Supabase, and Docker, I bring both the technical depth and the engineering mindset needed to deliver production-quality solutions. Beyond code, I'm a strong communicator and collaborative team player who thrives in structured, goal-driven environments — approaching every challenge with a problem-solving mindset and a commitment to clean, maintainable, well-architected code.",
  ],
};

export const skillGroups = [
  { name: "frontend", items: ["HTML", "Next.js", "CSS", "Tailwind CSS"] },
  { name: "backend", items: ["Flask", "Node.js"] },
  { name: "database", items: ["PostgreSQL", "MySQL", "Supabase"] },
  { name: "languages", items: ["C", "Java", "Python"] },
  {
    name: "frameworks_tools",
    items: ["Supabase Auth", "JWT", "RBAC", "APScheduler", "Postman"],
  },
  { name: "other", items: ["Git", "GitHub"] },
];

export const experience = [
  {
    company: "Bank of Ceylon — Kegalle Super Grade Branch",
    role: "Internship Trainee",
    dateRange: "Nov 2023 — Mar 2024",
    bullets: [
      "Supported branch operations and back-office administrative tasks.",
      "Promoted bank digital products and services to customers.",
    ],
  },
  {
    company: "Peoples Bank — Kegalle City Branch",
    role: "Internship Trainee",
    dateRange: "Sep — Nov 2023",
    bullets: [
      "Promoted bank digital products and services to customers as a trainee cashier.",
      "Assisted with day-to-day banking operations and customer service procedures.",
    ],
  },
  {
    company: "Pepsi — Kegalle Distribution Office",
    role: "Data Entry Operator",
    dateRange: "Jun — Sep 2023",
    bullets: [
      "Performed accurate data entry and assisted with stock management and distribution logistics records.",
      "Ensured consistency and quality of distribution data across operational systems.",
    ],
  },
];

type Project = {
  file: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    file: "sas-alerting-system.ts",
    title: "Shipment Alerting System (SAS)",
    description:
      "Web-based shipment monitoring system integrated with CargoWise via REST API to track shipment milestones, flag overdue shipments, and trigger automated alerts. Implemented Supabase Auth, JWT-based authentication, and role-based access control (RBAC), plus audit trails and access logging.",
    stack: [
      "Next.js",
      "TypeScript",
      "Python",
      "Flask",
      "PostgreSQL",
      "Supabase",
      "JWT",
    ],
    githubUrl: "https://github.com/Nadeesha-Maduwantha/SAS_project",
  },
  {
    file: "seal-master.ino",
    title: "Seal Master — Automated Document Sealing System",
    description:
      "Automated document sealing machine with multi-pattern seal selection, automatic stamping, and real-time paper/ink-level monitoring. Designed a custom PCB in EasyEDA and implemented UART communication between an ESP32 and Arduino Uno to drive a NEMA17 stepper motor.",
    stack: ["Arduino Uno", "ESP32", "C/C++", "UART", "EasyEDA"],
  },
  {
    file: "ape-bodima.tsx",
    title: "Ape Bodima — Boarding Finder Platform",
    description:
      "Web platform that helps university students find nearby boarding places with room availability and accommodation details. Built as part of a team.",
    stack: ["Next.js", "MongoDB", "Postman"],
    githubUrl: "https://github.com/ShenSandaru/Ape-Boadima-LK",
  },
];

export const education = {
  dateRange: "2024 — 2028",
  degree: "BSc (Hons) Information Technology & Management",
  university: "University of Moratuwa (UOM)",
  coursework: [
    "Database Systems",
    "Computer Architecture",
    "Software Engineering",
    "OOP",
    "OOAD",
  ],
};

export const contact = {
  blurb:
    "Actively seeking a Software Engineering internship where I can help build and maintain scalable, reliable software systems. Feel free to reach out.",
};
