import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strona statyczna: działa na Vercel i bez zmian na GitHub Pages (plan awaryjny, ADR-0085).
  output: "export",
  images: { unoptimized: true },
  // Dwa układy główne (pl i en), więc wspólna strona 404 wymaga global-not-found.tsx.
  experimental: { globalNotFound: true },
};

export default nextConfig;
