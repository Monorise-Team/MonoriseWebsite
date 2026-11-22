import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { ReactNode } from "react";
import type { Locale } from "@/content/types";
import { RevealObserver } from "./reveal-observer";

/** Wspólny dokument HTML dla obu układów głównych (polskiego i angielskiego). */
export function Document({ lang, children }: { lang: Locale; children: ReactNode }) {
  return (
    <html lang={lang} className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-head-element -- w App Router <head> układu głównego jest poprawny; reguła dotyczy katalogu pages */}
      <head>
        {/* Klasa "js" włącza animacje wejścia; bez JavaScriptu treść jest widoczna od razu. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-dvh">
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
