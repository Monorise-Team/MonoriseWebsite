import Link from "next/link";
import type { Dictionary } from "@/content/types";
import { CONTACT_EMAIL } from "@/lib/site";
import { primaryButton } from "@/lib/ui";
import { BrandMark } from "./brand-mark";

export function SiteHeader({ dict }: { dict: Dictionary }) {
  const { nav, ids, cta } = dict;
  const home = dict.locale === "pl" ? "/" : "/en";
  const links = [
    { href: `#${ids.services}`, label: nav.services },
    { href: `#${ids.process}`, label: nav.process },
    { href: `#${ids.products}`, label: nav.products },
    { href: `#${ids.contact}`, label: nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5 sm:px-8">
        <Link href={home} aria-label={nav.homeLabel} className="flex items-center gap-2.5 rounded-lg">
          <BrandMark idPrefix="nav" className="size-8" />
          <span className="text-[17px] font-semibold tracking-tight text-fg">Monorise</span>
        </Link>

        <nav aria-label={nav.primaryLabel} className="ml-auto hidden md:block">
          <ul className="flex items-center gap-7 text-sm text-fg-soft">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="rounded-md transition-colors hover:text-fg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3 md:ml-2">
          <Link
            href={nav.switchHref}
            hrefLang={nav.switchLocale}
            lang={nav.switchLocale}
            aria-label={nav.switchAria}
            className="rounded-lg px-2.5 py-1.5 font-mono text-xs font-semibold tracking-wider text-fg-soft ring-1 ring-line-strong transition-colors hover:text-fg hover:ring-accent/60"
          >
            {nav.switchLabel}
          </Link>
          {/* Na bardzo wąskich ekranach przycisk się nie mieści; kontakt jest wtedy w pierwszej sekcji. */}
          <a href={`mailto:${CONTACT_EMAIL}`} className={`${primaryButton} h-9 px-4 text-sm max-[359px]:hidden`}>
            {cta.contact}
          </a>
        </div>
      </div>
    </header>
  );
}
