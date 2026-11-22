import type { Dictionary } from "@/content/types";
import { cn, delay, sectionTitle } from "@/lib/ui";

export function Technologies({ dict }: { dict: Dictionary }) {
  const { technologies, ids } = dict;

  return (
    <section id={ids.technologies} className="scroll-mt-20 border-t border-line/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 data-reveal className={cn(sectionTitle, "max-w-[24ch]")}>
          {technologies.title}
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {technologies.groups.map((group, index) => (
            <div key={group.title} data-reveal style={delay(index * 90)}>
              <h3 className="text-sm font-semibold text-fg-soft">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line bg-ink-raised px-3 py-1.5 font-mono text-xs text-fg-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
