import Link from "next/link";
import { EnvelopeSimpleIcon, GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/content/types";
import { CONTACT_EMAIL, GITHUB_URL } from "@/lib/site";
import { BrandMark } from "./brand-mark";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  const { footer, nav, contact } = dict;
  const year = 2026;

  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <BrandMark idPrefix="footer" className="size-7" />
          <p>
            © {year} {footer.rights}
          </p>
        </div>
        <p>{footer.privacy}</p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label={contact.emailLabel}
            className="rounded-md text-fg-soft transition-colors hover:text-fg"
          >
            <EnvelopeSimpleIcon aria-hidden size={20} />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={contact.githubLabel}
            className="rounded-md text-fg-soft transition-colors hover:text-fg"
          >
            <GithubLogoIcon aria-hidden size={20} />
          </a>
          <Link
            href={nav.switchHref}
            hrefLang={nav.switchLocale}
            lang={nav.switchLocale}
            className="rounded-md font-mono text-xs font-semibold tracking-wider text-fg-soft transition-colors hover:text-fg"
          >
            {nav.switchAria}
          </Link>
        </div>
      </div>
    </footer>
  );
}
