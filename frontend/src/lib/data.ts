export const profile = {
  name: "Nadeesha Maduwantha",
  handle: "nadeesha",
  title: "IT Undergraduate",
  role: "Aspiring DevOps Engineer",
  tagline:
    "Building reliable systems and automating the boring parts. Currently exploring cloud infrastructure, CI/CD pipelines, and clean backend architecture.",
  resumeUrl: "/resume.pdf",
  email: "nadeesha.maduwantha@example.com",
  githubUrl: "https://github.com/nadeesha-example",
  githubLabel: "github.com/nadeesha",
  linkedinUrl: "https://linkedin.com/in/nadeesha-example",
  linkedinLabel: "linkedin.com/in/nadeesha",
};

export const navLinks = [
  { href: "#about", label: "01.about" },
  { href: "#skills", label: "02.skills" },
  { href: "#projects", label: "03.projects" },
  { href: "#education", label: "04.education" },
  { href: "#contact", label: "05.contact" },
];

export const about = {
  bio: [
    "I'm a final-year undergraduate pursuing a degree in ",
    { bold: "Information Technology & Management" },
    " at the University of Colombo, with a growing focus on DevOps and systems engineering. I enjoy working close to infrastructure — automating deployments, containerizing applications, and understanding how software behaves at scale. Outside coursework, I contribute to small open-source tools and tinker with home-lab server setups.",
  ],
};

export const skillGroups = [
  { name: "languages", items: ["Java", "Python", "JavaScript", "C", "Bash"] },
  {
    name: "devops_tools",
    items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"],
  },
  { name: "databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
  { name: "frameworks", items: ["Node.js", "Express", "React", "Spring Boot"] },
];

export const projects = [
  {
    file: "ci-cd-pipeline.yml",
    title: "Automated CI/CD Pipeline",
    description:
      "End-to-end pipeline that builds, tests, and deploys a containerized app to a Kubernetes cluster on every push.",
    stack: ["Docker", "Jenkins", "Kubernetes", "AWS"],
    githubUrl: "https://github.com/nadeesha-example/ci-cd-pipeline",
    demoUrl: "#",
  },
  {
    file: "infra-as-code.tf",
    title: "Infrastructure as Code Toolkit",
    description:
      "Terraform modules for provisioning reproducible cloud environments with automated cost and drift checks.",
    stack: ["Terraform", "AWS", "Python"],
    githubUrl: "https://github.com/nadeesha-example/infra-as-code",
    demoUrl: "#",
  },
  {
    file: "task-tracker.js",
    title: "Team Task Tracker",
    description:
      "Full-stack task management app with real-time updates, built to practice REST API design and database modeling.",
    stack: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/nadeesha-example/task-tracker",
    demoUrl: "https://task-tracker-example.vercel.app",
  },
];

export const education = {
  dateRange: "2022 — 2026",
  degree: "BSc (Hons) Information Technology & Management",
  university: "University of Colombo School of Computing",
  coursework: [
    "Database Systems",
    "Computer Architecture",
    "Operating Systems",
    "Networking",
    "Cloud Computing",
    "Software Engineering",
  ],
};

export const contact = {
  blurb:
    "Open to internship and graduate opportunities in DevOps, cloud, and systems engineering. Feel free to reach out.",
};
