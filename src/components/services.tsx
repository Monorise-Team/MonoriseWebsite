import { BrowserIcon, DesktopIcon, PenNibIcon, PlugsConnectedIcon } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary, ServiceKey } from "@/content/types";
import { cn, delay, sectionTitle } from "@/lib/ui";

const icons: Record<ServiceKey, typeof BrowserIcon> = {
  web: BrowserIcon,
  desktop: DesktopIcon,
  api: PlugsConnectedIcon,
  design: PenNibIcon,
};

/**
 * Układ kafli na dużych ekranach: aplikacje webowe zajmują całą lewą kolumnę,
 * desktop i API stoją obok siebie, a projekt UI/UX domyka dolny rząd. Cztery treści, cztery kafle.
 */
const layout: Record<ServiceKey, string> = {
  web: "md:row-span-2 bg-[radial-gradient(120%_80%_at_0%_0%,rgb(99_102_241/0.22),transparent_60%)]",
  desktop: "",
  api: "dots",
  design:
    "md:col-span-2 lg:col-span-2 bg-[radial-gradient(90%_120%_at_100%_100%,rgb(245_158_11/0.12),transparent_60%)]",
};

const riseBars = [26, 38, 32, 50, 62, 74, 90];

/** Ozdobne okno aplikacji z rosnącymi słupkami (motyw „rise”). Wypełnia wysoki kafel na większych ekranach. */
function RiseWindow() {
  return (
    <div
      aria-hidden
      className="mt-8 hidden min-h-40 flex-1 flex-col overflow-hidden rounded-xl border border-line bg-ink/70 md:flex"
    >
      <div className="flex items-center gap-1.5 border-b border-line px-3.5 py-2.5">
        <span className="size-2 rounded-full bg-line-strong" />
        <span className="size-2 rounded-full bg-line-strong" />
        <span className="size-2 rounded-full bg-line-strong" />
        <span className="ml-3 h-2 w-24 rounded-full bg-line" />
      </div>
      <div className="flex flex-1 gap-4 p-4">
        <div className="flex w-1/4 flex-col gap-2.5 pt-1">
          <span className="h-2 rounded-full bg-line-strong" />
          <span className="h-2 w-3/4 rounded-full bg-line" />
          <span className="h-2 w-2/3 rounded-full bg-line" />
          <span className="h-2 w-4/5 rounded-full bg-line" />
        </div>
        <div className="flex flex-1 items-end gap-1.5 border-b border-line-strong">
          {riseBars.map((height, index) => (
            <span
              key={height}
              className="rise-bar flex-1 rounded-t-md bg-[linear-gradient(to_top,#6366f1,#c084fc_60%,#fbbf24)] opacity-90"
              style={{ height: `${height}%`, ...delay(index * 70) }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Services({ dict }: { dict: Dictionary }) {
  const { services, ids } = dict;

  return (
    <section id={ids.services} className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 data-reveal className={cn(sectionTitle, "max-w-[24ch]")}>
          {services.title}
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {services.items.map((item, index) => {
            const Icon = icons[item.key];
            const large = item.key === "web";
            return (
              <article
                key={item.key}
                data-reveal
                style={delay(index * 90)}
                className={cn(
                  "flex flex-col rounded-2xl border border-line bg-ink-raised p-7 sm:p-8",
                  layout[item.key],
                )}
              >
                <span className="grid size-11 place-items-center rounded-xl border border-line-strong bg-ink text-accent">
                  <Icon aria-hidden size={large ? 26 : 22} weight="duotone" />
                </span>
                <h3 className={cn("mt-6 font-semibold tracking-tight text-fg", large ? "text-2xl" : "text-xl")}>
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[46ch] leading-relaxed text-muted">{item.body}</p>
                {large ? <RiseWindow /> : null}
                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-lg border border-line px-2.5 py-1 font-mono text-[11px] text-fg-soft"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
