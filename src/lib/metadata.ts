import type { Metadata, Viewport } from "next";
import type { Dictionary } from "@/content/types";
import { SITE_URL } from "./site";

export function buildMetadata(dict: Dictionary): Metadata {
  const path = dict.locale === "pl" ? "/" : "/en";
  // Pliki z rozszerzeniem .png (route handler), żeby każdy serwer podał poprawny Content-Type.
  const image = { url: `/og/${dict.locale}.png`, width: 1200, height: 630, alt: dict.meta.ogImageAlt };

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: path,
      languages: { pl: "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: "Monorise",
      title: dict.meta.title,
      description: dict.meta.description,
      locale: dict.meta.ogLocale,
      alternateLocale: dict.locale === "pl" ? ["en_US"] : ["pl_PL"],
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [image],
    },
    formatDetection: { email: false, telephone: false, address: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#07080f",
  colorScheme: "dark",
};
