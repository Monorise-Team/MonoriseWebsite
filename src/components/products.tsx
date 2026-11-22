import type { Dictionary } from "@/content/types";
import { cn, delay, eyebrow, sectionTitle } from "@/lib/ui";

/**
 * Pięć produktów, pięć kafli: TimoTime (pierwszy w kolejności budowy) jest szerszy,
 * pozostałe cztery wypełniają siatkę bez pustych miejsc.
 */
export function Products({ dict }: { dict: Dictionary }) {
  const { products, ids } = dict;

  return (
    <section id={ids.products} className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p data-reveal className={eyebrow}>
          {products.eyebrow}
        </p>
        <h2 data-reveal style={delay(60)} className={cn(sectionTitle, "mt-4 max-w-[24ch]")}>
          {products.title}
        </h2>
        <p data-reveal style={delay(120)} className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted">
          {products.lead}
        </p>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.items.map((product, index) => (
            <li
              key={product.name}
              data-reveal
              style={delay(index * 80)}
              className={cn(
                "flex flex-col rounded-2xl border border-line bg-ink-raised p-7",
                product.featured &&
                  "md:col-span-2 bg-[radial-gradient(110%_130%_at_0%_0%,rgb(167_139_250/0.16),transparent_55%)] sm:p-9",
              )}
            >
              <div className="flex items-center gap-4">
                <span
                  aria-hidden
                  className="grid size-11 place-items-center rounded-xl border border-line-strong bg-ink font-mono text-lg font-bold text-accent"
                >
                  {product.name.charAt(0)}
                </span>
                <h3 className={cn("font-semibold tracking-tight text-fg", product.featured ? "text-2xl" : "text-xl")}>
                  {product.name}
                </h3>
              </div>
              <p className={cn("mt-5 leading-relaxed text-muted", product.featured && "max-w-[52ch] text-lg")}>
                {product.body}
              </p>
              <div className="mt-auto pt-6">
                <span className="sr-only">{products.platformsLabel}: </span>
                <ul className="flex flex-wrap gap-2">
                  {product.platforms.map((platform) => (
                    <li
                      key={platform}
                      className="rounded-lg border border-line px-2.5 py-1 font-mono text-[11px] text-fg-soft"
                    >
                      {platform}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
