import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/content/types";
import { CONTACT_EMAIL, GITHUB_LABEL, GITHUB_URL } from "@/lib/site";
import { delay, primaryButton } from "@/lib/ui";

export function Contact({ dict }: { dict: Dictionary }) {
  const { contact, cta, ids } = dict;

  return (
    <section id={ids.contact} className="relative isolate scroll-mt-20 overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="aurora-soft absolute inset-0 -z-10" />
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        {/* Grafika „rise” z profilu organizacji; przy wyłączonym ruchu wersja statyczna. */}
        <picture data-reveal>
          <source srcSet="/brand/rise-static.svg" media="(prefers-reduced-motion: reduce)" />
          <img src="/brand/rise.svg" alt="" width={900} height={64} className="mx-auto h-auto w-full max-w-2xl" />
        </picture>

        <h2
          data-reveal
          style={delay(60)}
          className="mx-auto mt-10 max-w-[20ch] text-3xl font-semibold tracking-tight text-fg sm:text-5xl sm:leading-[1.08]"
        >
          {contact.title}
        </h2>
        <p data-reveal style={delay(120)} className="mx-auto mt-5 max-w-[52ch] text-lg leading-relaxed text-muted">
          {contact.lead}
        </p>
        <div data-reveal style={delay(180)} className="mt-9">
          <a href={`mailto:${CONTACT_EMAIL}`} className={`${primaryButton} h-12 px-7 text-[15px]`}>
            <EnvelopeSimpleIcon aria-hidden size={18} weight="bold" />
            {cta.contact}
          </a>
        </div>

        <dl
          data-reveal
          style={delay(240)}
          className="mx-auto mt-14 grid max-w-2xl gap-6 border-t border-line/70 pt-8 text-left sm:grid-cols-3 sm:text-center"
        >
          <div>
            <dt className="font-mono text-xs text-muted">{contact.emailLabel}</dt>
            <dd className="mt-1.5">
              <a href={`mailto:${CONTACT_EMAIL}`} className="rounded-md text-fg transition-colors hover:text-accent">
                {CONTACT_EMAIL}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-muted">{contact.locationLabel}</dt>
            <dd className="mt-1.5 text-fg">{contact.location}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-muted">{contact.githubLabel}</dt>
            <dd className="mt-1.5">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md text-fg transition-colors hover:text-accent"
              >
                {GITHUB_LABEL}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
