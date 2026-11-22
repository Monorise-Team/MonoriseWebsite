import type { Dictionary } from "./types";

export const pl: Dictionary = {
  locale: "pl",
  meta: {
    title: "Monorise | Software house: aplikacje webowe i desktopowe",
    description:
      "Polski software house z Olkusza. Projektujemy, budujemy i wdrażamy aplikacje webowe, desktopowe i API. Tworzymy też ekosystem produktów dla firm.",
    ogLocale: "pl_PL",
    ogImageAlt: "Monorise: software house z Polski, web, desktop i API",
  },
  ids: {
    services: "uslugi",
    process: "proces",
    products: "produkty",
    technologies: "technologie",
    contact: "kontakt",
  },
  nav: {
    skipToContent: "Przejdź do treści",
    homeLabel: "Monorise, strona główna",
    primaryLabel: "Główna nawigacja",
    services: "Usługi",
    process: "Jak pracujemy",
    products: "Produkty",
    contact: "Kontakt",
    switchHref: "/en",
    switchLabel: "EN",
    switchLocale: "en",
    switchAria: "English version",
  },
  cta: {
    contact: "Napisz do nas",
    products: "Zobacz produkty",
  },
  hero: {
    eyebrow: "Software house z Polski",
    titleStart: "Web i desktop,",
    titleHighlight: "od pomysłu do wdrożenia.",
    lead: "Aplikacje webowe, desktopowe i API dla firm. Prowadzimy projekt od pierwszej rozmowy po wydanie i dalszy rozwój.",
    markLabel: "Znak Monorise: słońce wschodzące nad grzbietem w kształcie litery M",
  },
  services: {
    title: "Oprogramowanie, z którego firmy korzystają codziennie",
    items: [
      {
        key: "web",
        title: "Aplikacje webowe",
        body: "Panele, systemy dla firm i aplikacje SaaS w Next.js i React. Szybkie, dostępne i gotowe na rozwój.",
        tags: ["Next.js", "React", "TypeScript"],
      },
      {
        key: "desktop",
        title: "Aplikacje desktopowe",
        body: "Lekkie aplikacje na Windows, macOS i Linux w Tauri i Rust, z automatycznymi aktualizacjami.",
        tags: ["Tauri", "Rust"],
      },
      {
        key: "api",
        title: "API i backend",
        body: "Serwery i integracje na Node.js i PostgreSQL, z testami od pierwszego dnia.",
        tags: ["Node.js", "PostgreSQL"],
      },
      {
        key: "design",
        title: "Projekt UI/UX",
        body: "Od makiet w Figmie po system projektowy, który trzyma spójność całego produktu.",
        tags: ["Figma"],
      },
    ],
  },
  process: {
    title: "Jeden zespół od pierwszej rozmowy do wydania",
    lead: "Bez pośredników, z jasnym zakresem i regularnymi wersjami do sprawdzenia.",
    steps: [
      { title: "Analiza", detail: "cele, zakres, wycena" },
      { title: "Projekt", detail: "UX, UI, prototyp" },
      { title: "Kod", detail: "web, desktop, API" },
      { title: "Wdrożenie", detail: "wydania i opieka" },
    ],
  },
  products: {
    eyebrow: "W przygotowaniu",
    title: "Produkty Monorise dla firm",
    lead: "Budujemy ekosystem aplikacji z jednym logowaniem i wspólną strukturą firmy.",
    platformsLabel: "Platformy",
    items: [
      {
        name: "TimoTime",
        body: "Ewidencja i rozliczanie czasu pracy: start i stop, przerwy, zatwierdzanie godzin i raporty dla zespołów.",
        platforms: ["Web"],
        featured: true,
      },
      {
        name: "KivoTasks",
        body: "Zadania i projekty zespołów: tablice, terminy, komentarze i postępy.",
        platforms: ["Web"],
      },
      {
        name: "HiraHR",
        body: "Kadry: profile pracowników, dokumenty, urlopy i nieobecności.",
        platforms: ["Web"],
      },
      {
        name: "FynraFinance",
        body: "Finanse firmy: wydatki, przychody, budżety i raporty według działów.",
        platforms: ["Web", "Komputery", "Telefony"],
      },
      {
        name: "AvenMail",
        body: "Klient poczty firmowej na komputery i telefony, połączony z pocztą, której już używasz.",
        platforms: ["Komputery", "Telefony"],
      },
    ],
  },
  technologies: {
    title: "Technologie, z którymi pracujemy",
    groups: [
      { title: "Web i UI", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vite", "Figma"] },
      {
        title: "Desktop i backend",
        items: ["Tauri", "Rust", "Node.js", "Python", "Django", "PostgreSQL", "SQLite", "Prisma"],
      },
      {
        title: "Chmura i narzędzia",
        items: ["Cloudflare", "Vercel", "GitHub Actions", "Docker", "Linux", "Git"],
      },
    ],
  },
  contact: {
    title: "Masz pomysł na aplikację albo narzędzie dla firmy?",
    lead: "Zaprojektujemy, zbudujemy i wdrożymy je na webie i desktopie, a potem zadbamy o kolejne wersje.",
    emailLabel: "E-mail",
    locationLabel: "Miasto",
    location: "Olkusz, Polska",
    githubLabel: "GitHub",
  },
  footer: {
    rights: "Monorise. Wszelkie prawa zastrzeżone.",
    privacy: "Ta strona nie używa ciasteczek ani analityki.",
  },
};
