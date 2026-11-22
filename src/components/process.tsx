import type { Dictionary } from "@/content/types";
import { cn, delay, sectionTitle } from "@/lib/ui";

export function Process({ dict }: { dict: Dictionary }) {
  const { process, ids } = dict;
  const last = process.steps.length - 1;

  return (
    <section id={ids.process} className="scroll-mt-20 border-y border-line/60 bg-ink-raised/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 data-reveal className={cn(sectionTitle, "max-w-[26ch]")}>
          {process.title}
        </h2>
        <p data-reveal style={delay(80)} className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted">
          {process.lead}
        </p>

        <div className="relative mt-14">
          {/* Linia procesu: od indygo do słońca, pionowo na telefonach i poziomo od tabletu. */}
          <div
            aria-hidden
            className="absolute bottom-3 left-[11px] top-3 w-px bg-gradient-to-b from-indigo-500 via-fuchsia-400 to-amber-400 md:bottom-auto md:left-3 md:right-3 md:top-[11px] md:h-px md:w-auto md:bg-gradient-to-r"
          />
          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {process.steps.map((step, index) => (
              <li key={step.title} data-reveal style={delay(index * 110)} className="flex gap-5 md:block">
                <span
                  aria-hidden
                  className={cn(
                    "relative mt-0.5 block size-6 shrink-0 rounded-full border-2",
                    index === last
                      ? "border-amber-300 bg-amber-400 shadow-[0_0_24px_rgb(251_191_36/0.6)]"
                      : "border-accent/70 bg-ink",
                  )}
                />
                <div className="md:mt-6">
                  <h3 className="text-xl font-semibold tracking-tight text-fg">{step.title}</h3>
                  <p className="mt-1.5 font-mono text-sm text-muted">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
