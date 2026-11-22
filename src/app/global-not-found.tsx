import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { BrandMark } from "@/components/brand-mark";
import { Document } from "@/components/document";
import { primaryButton, secondaryButton } from "@/lib/ui";

export const metadata: Metadata = {
  title: "404 | Monorise",
  description: "Nie znaleziono strony. Page not found.",
};

export default function GlobalNotFound() {
  return (
    <Document lang="pl">
      <main className="aurora grid min-h-dvh place-items-center px-5 py-16">
        <div className="max-w-md text-center">
          <BrandMark idPrefix="notfound" className="mx-auto size-20" />
          <h1 className="mt-8 text-3xl font-semibold tracking-tight text-fg">Nie ma takiej strony</h1>
          <p className="mt-3 text-muted" lang="en">
            This page does not exist.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className={`${primaryButton} h-11 px-5 text-sm`}>
              Strona główna
            </Link>
            <Link href="/en" hrefLang="en" lang="en" className={`${secondaryButton} h-11 px-5 text-sm`}>
              Home page
            </Link>
          </div>
        </div>
      </main>
    </Document>
  );
}
