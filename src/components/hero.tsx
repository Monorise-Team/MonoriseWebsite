import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/content/types";
import { CONTACT_EMAIL } from "@/lib/site";
import { delay, eyebrow, primaryButton, secondaryButton } from "@/lib/ui";
import { BrandMark } from "./brand-mark";

export function Hero({ dict }: { dict: Dictionary }) {
  const { hero, cta, ids } = dict;

  return (
    <section className="relative isolate overflow-hidden">
      {/* Maska wygasza poświatę przy dolnej krawędzi, żeby sekcja nie kończyła się ostrą linią. */}
      <div
        aria-hidden
        className="aurora absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
      />
      <div
        aria-hidden
        className="dots absolute inset-0 -z-10 [mask-image:radial-gradient(70%_65%_at_45%_40%,black,transparent)]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 md:pt-20 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 lg:pb-28 lg:pt-24">
        <div>
          <p className={`hero-in ${eyebrow}`}>{hero.eyebrow}</p>
          <h1
            className="hero-in mt-5 text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-fg sm:text-6xl lg:text-[4.1rem]"
            style={delay(80)}
          >
            {hero.titleStart}
            <br />
            <span className="brand-gradient-text">{hero.titleHighlight}</span>
          </h1>
          <p className="hero-in mt-6 max-w-[52ch] text-lg leading-relaxed text-muted" style={delay(160)}>
            {hero.lead}
          </p>
          <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={delay(240)}>
            <a href={`mailto:${CONTACT_EMAIL}`} className={`${primaryButton} h-12 px-6 text-[15px]`}>
              {cta.contact}
              <ArrowRightIcon aria-hidden size={18} weight="bold" />
            </a>
            <a href={`#${ids.products}`} className={`${secondaryButton} h-12 px-6 text-[15px]`}>
              {cta.products}
            </a>
          </div>
        </div>

        <div className="hero-in relative mx-auto w-full max-w-[15rem] sm:max-w-xs lg:max-w-none" style={delay(200)}>
          <div
            aria-hidden
            className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgb(251_191_36/0.26),transparent_65%)] blur-2xl"
          />
          <BrandMark
            idPrefix="hero"
            animated
            title={hero.markLabel}
            className="relative mx-auto w-full max-w-[20rem] drop-shadow-[0_30px_60px_rgb(99_102_241/0.28)]"
          />
        </div>
      </div>
    </section>
  );
}
