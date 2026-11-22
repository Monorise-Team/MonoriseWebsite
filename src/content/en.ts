import type { Dictionary } from "./types";

export const en: Dictionary = {
  locale: "en",
  meta: {
    title: "Monorise | Software house: web and desktop applications",
    description:
      "A Polish software house from Olkusz. We design, build and launch web apps, desktop apps and APIs, and we are building a suite of products for businesses.",
    ogLocale: "en_US",
    ogImageAlt: "Monorise: a software house from Poland, web, desktop and API",
  },
  ids: {
    services: "services",
    process: "process",
    products: "products",
    technologies: "technologies",
    contact: "contact",
  },
  nav: {
    skipToContent: "Skip to content",
    homeLabel: "Monorise, home",
    primaryLabel: "Main navigation",
    services: "Services",
    process: "How we work",
    products: "Products",
    contact: "Contact",
    switchHref: "/",
    switchLabel: "PL",
    switchLocale: "pl",
    switchAria: "Wersja polska",
  },
  cta: {
    contact: "Email us",
    products: "See products",
  },
  hero: {
    eyebrow: "Software house from Poland",
    titleStart: "Web and desktop,",
    titleHighlight: "from idea to launch.",
    lead: "Web apps, desktop apps and APIs for businesses. We take each project from the first conversation to release and beyond.",
    markLabel: "Monorise mark: a sun rising over an M-shaped ridge",
  },
  services: {
    title: "Software that businesses use every day",
    items: [
      {
        key: "web",
        title: "Web applications",
        body: "Dashboards, business systems and SaaS apps built with Next.js and React. Fast, accessible and ready to grow.",
        tags: ["Next.js", "React", "TypeScript"],
      },
      {
        key: "desktop",
        title: "Desktop applications",
        body: "Lightweight apps for Windows, macOS and Linux built with Tauri and Rust, with automatic updates.",
        tags: ["Tauri", "Rust"],
      },
      {
        key: "api",
        title: "APIs and backend",
        body: "Servers and integrations on Node.js and PostgreSQL, tested from day one.",
        tags: ["Node.js", "PostgreSQL"],
      },
      {
        key: "design",
        title: "UI/UX design",
        body: "From Figma mockups to a design system that keeps the whole product consistent.",
        tags: ["Figma"],
      },
    ],
  },
  process: {
    title: "One team from the first call to release",
    lead: "No middlemen, a clear scope and regular versions to review.",
    steps: [
      { title: "Analysis", detail: "goals, scope, estimate" },
      { title: "Design", detail: "UX, UI, prototype" },
      { title: "Code", detail: "web, desktop, API" },
      { title: "Launch", detail: "releases and support" },
    ],
  },
  products: {
    eyebrow: "In the works",
    title: "Monorise products for businesses",
    lead: "We are building a suite of apps with one sign-in and a shared company structure.",
    platformsLabel: "Platforms",
    items: [
      {
        name: "TimoTime",
        body: "Working time tracking: clock in and out, breaks, approvals and team reports.",
        platforms: ["Web"],
        featured: true,
      },
      {
        name: "KivoTasks",
        body: "Team tasks and projects: boards, deadlines, comments and progress.",
        platforms: ["Web"],
      },
      {
        name: "HiraHR",
        body: "HR: employee profiles, documents, leave and absences.",
        platforms: ["Web"],
      },
      {
        name: "FynraFinance",
        body: "Company finances: expenses, income, budgets and reports by department.",
        platforms: ["Web", "Desktop", "Mobile"],
      },
      {
        name: "AvenMail",
        body: "A business mail client for desktop and mobile that connects to the email you already use.",
        platforms: ["Desktop", "Mobile"],
      },
    ],
  },
  technologies: {
    title: "Technologies we work with",
    groups: [
      { title: "Web and UI", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vite", "Figma"] },
      {
        title: "Desktop and backend",
        items: ["Tauri", "Rust", "Node.js", "Python", "Django", "PostgreSQL", "SQLite", "Prisma"],
      },
      {
        title: "Cloud and tools",
        items: ["Cloudflare", "Vercel", "GitHub Actions", "Docker", "Linux", "Git"],
      },
    ],
  },
  contact: {
    title: "Have an idea for an app or a business tool?",
    lead: "We will design, build and launch it on the web and desktop, then take care of the next versions.",
    emailLabel: "Email",
    locationLabel: "Based in",
    location: "Olkusz, Poland",
    githubLabel: "GitHub",
  },
  footer: {
    rights: "Monorise. All rights reserved.",
    privacy: "This site uses no cookies or analytics.",
  },
};
