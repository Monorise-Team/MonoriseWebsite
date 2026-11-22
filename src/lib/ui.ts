import type { CSSProperties } from "react";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Opóźnienie animacji wejścia (zmienna CSS --delay). */
export function delay(ms: number): CSSProperties {
  return { "--delay": `${ms}ms` } as CSSProperties;
}

export const primaryButton =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-accent font-semibold text-ink shadow-[inset_0_1px_0_rgb(255_255_255/0.45)] transition-[background-color,transform] duration-200 hover:bg-accent-hover active:translate-y-px";

export const secondaryButton =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-line-strong bg-ink-raised/70 font-semibold text-fg transition-[border-color,transform] duration-200 hover:border-accent/60 active:translate-y-px";

export const sectionTitle = "text-3xl font-semibold tracking-tight text-fg sm:text-4xl";

export const eyebrow = "font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent";
