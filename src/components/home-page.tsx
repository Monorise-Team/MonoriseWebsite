import type { Dictionary } from "@/content/types";
import { CONTACT_EMAIL, GITHUB_URL, SITE_URL } from "@/lib/site";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { Process } from "./process";
import { Products } from "./products";
import { Services } from "./services";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { Technologies } from "./technologies";

export function HomePage({ dict }: { dict: Dictionary }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Monorise",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    email: CONTACT_EMAIL,
    address: { "@type": "PostalAddress", addressLocality: "Olkusz", addressCountry: "PL" },
    sameAs: [GITHUB_URL],
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
      >
        {dict.nav.skipToContent}
      </a>
      <SiteHeader dict={dict} />
      <main id="main">
        <Hero dict={dict} />
        <Services dict={dict} />
        <Process dict={dict} />
        <Products dict={dict} />
        <Technologies dict={dict} />
        <Contact dict={dict} />
      </main>
      <SiteFooter dict={dict} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
    </>
  );
}
