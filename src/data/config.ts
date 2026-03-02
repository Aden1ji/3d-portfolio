const config = {
  title: "Ayomikun Adeniji | Softwarx`e Developer",
  description: {
    long: "Explore the portfolio of Ayomikun Adeniji, a software developer focused on building impactful mobile and web applications. From ClosetLink, a digital wardrobe marketplace, to Triage Radio, an applied AI hazard reporting platform, I design scalable systems that solve real problems with clean architecture and thoughtful user experience.",
    short:
        "Ayomikun Adeniji is a software developer building mobile apps, backend systems, and AI powered platforms.",
  },
  keywords: [
    "Ayomikun Adeniji",
    "Software Developer",
    "Portfolio",
    "React Native",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Supabase",
    "Machine Learning",
    "Applied AI",
    "ClosetLink",
    "Triage Radio",
    "Mobile Development",
    "Backend Engineering",
  ],
  author: "Ayomikun Adeniji",
  email: "ayomikunadeniji63@gmail.com",
  site: "https://yourdomain.com",

  githubUsername: "Aden1ji",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },

  social: {
    linkedin: "https://www.linkedin.com/in/ayomikun-adeniji/",
    github: "https://github.com/Aden1ji",
  },
};

export { config };