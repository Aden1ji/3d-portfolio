export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",

  REACT = "react",
  REACTNATIVE = "reactnative",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",

  NODEJS = "nodejs",
  EXPRESS = "express",

  SUPABASE = "Supabase",
  POSTGRES = "postgres",
  MONGODB = "mongodb",

  PYTHON = "python",
  SWIFT = "swift",

  DOCKER = "docker",
  AWS = "aws",

  FIREBASE = "firebase",
  WORDPRESS = "wordpress",

  GIT = "git",
  GITHUB = "github",
  NPM = "npm",
  PRETTIER = "prettier",
  LINUX = "linux",
  VERCEL = "vercel",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Builds interactive web experiences.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Type safe scalable applications.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Semantic and accessible markup.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },

  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Responsive UI styling.",
    color: "#264de4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Component driven UI development.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  [SkillNames.REACTNATIVE]: {
    id: 6,
    name: "reactnative",
    label: "React Native",
    shortDescription: "Cross platform mobile apps.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Production ready React framework.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Utility first styling system.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },

  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Backend services and APIs.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "REST API development.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  [SkillNames.SUPABASE]: {
    id: 11,
    name: "supabase",
    label: "Supabase",
    shortDescription: "Auth, database and storage platform.",
    color: "#3ecf8e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },

  [SkillNames.POSTGRES]: {
    id: 12,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Relational database systems.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },

  [SkillNames.MONGODB]: {
    id: 13,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Flexible document database.",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  [SkillNames.PYTHON]: {
    id: 14,
    name: "python",
    label: "Python",
    shortDescription: "Automation and AI workflows.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  [SkillNames.SWIFT]: {
    id: 15,
    name: "swift",
    label: "Swift",
    shortDescription: "iOS application development.",
    color: "#f05138",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  },

  [SkillNames.DOCKER]: {
    id: 16,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerized deployments.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },

  [SkillNames.AWS]: {
    id: 17,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud infrastructure and services.",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },

  [SkillNames.FIREBASE]: {
    id: 18,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Backend as a service platform.",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },

  [SkillNames.WORDPRESS]: {
    id: 19,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "Content management systems.",
    color: "#21759b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
  },

  [SkillNames.GIT]: {
    id: 20,
    name: "git",
    label: "Git",
    shortDescription: "Version control system.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  [SkillNames.GITHUB]: {
    id: 21,
    name: "github",
    label: "GitHub",
    shortDescription: "Collaboration and code hosting.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  [SkillNames.NPM]: {
    id: 22,
    name: "npm",
    label: "NPM",
    shortDescription: "Dependency management.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },

  [SkillNames.PRETTIER]: {
    id: 23,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Code formatting tool.",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prettier/prettier-original.svg",
  },

  [SkillNames.LINUX]: {
    id: 24,
    name: "linux",
    label: "Linux",
    shortDescription: "Unix based development environment.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },

  [SkillNames.VERCEL]: {
    id: 25,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Frontend deployment platform.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  },
};

// ─── Experience ──────────────────────────────────────────────────────────────

export type Experience = {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: "wouessi-intern",
    title: "Software Developer Intern",
    company: "Wouessi Digital",
    startDate: "Feb 2025",
    endDate: "Apr 2025",
    description: [
      "Built an Employee Management System using React, Node.js, and MongoDB to streamline HR processes.",
      "Set up a CI CD pipeline with Jenkins, Docker, and k3s, integrating Gitea and Grafana for monitoring.",
      "Deployed to AWS using Elastic Beanstalk and S3 with testing in Jest and React Testing Library.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.MONGODB,
      SkillNames.DOCKER,
      SkillNames.AWS,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
  {
    id: "closetlink-founder",
    title: "Founder",
    company: "ClosetLink",
    startDate: "June 2024",
    endDate: "Present",
    description: [
      "Built a second hand fashion marketplace app enabling users to buy, sell, swap, and list clothing items.",
      "Implemented authentication, storage, and database functionality using Supabase.",
      "Integrated Stripe for secure payments and order management.",
      "Developed item uploads, search filters, and swap offer features in React Native.",
    ],
    skills: [
      SkillNames.REACTNATIVE,
      SkillNames.SUPABASE,
      SkillNames.TS,
      SkillNames.NODEJS,
      SkillNames.AWS,
      SkillNames.NPM,
      SkillNames.GITHUB,
    ],
  },
];

// ─── Theme Disclaimers ────────────────────────────────────────────────────────

export const themeDisclaimers = {
  dark: [
    "Dark mode activated. Your eyes will thank you.",
    "Welcome to the dark side. We have better contrast.",
    "Darkness is not just a theme, it's a lifestyle.",
    "Your screen just got 10x cooler.",
    "Are you a developer? Didn't even have to ask.",
    "Night owl mode engaged 🦉",
    "Your retinas have been saved.",
    "The void stares back, but at least it's stylish.",
  ],
  light: [
    "Are you sure about this? 🌞",
    "Bold choice. Respect.",
    "Back to the light side I see.",
    "Is your monitor brightness at 100%? Be careful out there.",
    "Light mode? In this economy?",
  ],
};