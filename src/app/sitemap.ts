import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const languages = { pl: `${SITE_URL}/`, en: `${SITE_URL}/en` };
const lastModified = new Date("2026-11-22");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified, alternates: { languages } },
    { url: `${SITE_URL}/en`, lastModified, alternates: { languages } },
  ];
}
