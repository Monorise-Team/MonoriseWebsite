export type Locale = "pl" | "en";

export type ServiceKey = "web" | "desktop" | "api" | "design";

export type Dictionary = {
  locale: Locale;
  meta: {
    title: string;
    description: string;
    ogLocale: string;
    ogImageAlt: string;
  };
  ids: {
    services: string;
    process: string;
    products: string;
    technologies: string;
    contact: string;
  };
  nav: {
    skipToContent: string;
    homeLabel: string;
    primaryLabel: string;
    services: string;
    process: string;
    products: string;
    contact: string;
    switchHref: string;
    switchLabel: string;
    switchLocale: Locale;
    switchAria: string;
  };
  cta: {
    contact: string;
    products: string;
  };
  hero: {
    eyebrow: string;
    titleStart: string;
    titleHighlight: string;
    lead: string;
    markLabel: string;
  };
  services: {
    title: string;
    items: { key: ServiceKey; title: string; body: string; tags: string[] }[];
  };
  process: {
    title: string;
    lead: string;
    steps: { title: string; detail: string }[];
  };
  products: {
    eyebrow: string;
    title: string;
    lead: string;
    platformsLabel: string;
    items: { name: string; body: string; platforms: string[]; featured?: boolean }[];
  };
  technologies: {
    title: string;
    groups: { title: string; items: string[] }[];
  };
  contact: {
    title: string;
    lead: string;
    emailLabel: string;
    locationLabel: string;
    location: string;
    githubLabel: string;
  };
  footer: {
    rights: string;
    privacy: string;
  };
};
