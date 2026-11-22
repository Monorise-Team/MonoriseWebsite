import type { ReactNode } from "react";
import "../globals.css";
import { Document } from "@/components/document";
import { pl } from "@/content/pl";
import { buildMetadata } from "@/lib/metadata";

export { viewport } from "@/lib/metadata";
export const metadata = buildMetadata(pl);

export default function PolishLayout({ children }: { children: ReactNode }) {
  return <Document lang="pl">{children}</Document>;
}
