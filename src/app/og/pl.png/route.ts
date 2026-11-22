import { renderOgImage } from "@/lib/og-image";

export const dynamic = "force-static";

export function GET() {
  return renderOgImage("Software house z Polski", "Web, desktop i API dla firm");
}
