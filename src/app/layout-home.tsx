import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered IT Solutions & Digital Growth Agency",
  description:
    "ITVEXO delivers world-class AI automation, website development, SaaS platforms, and Meta ad campaigns. Build smarter. Grow faster. From India to the world.",
  keywords: [
    "Best AI Software Company India", "Website Development Company India",
    "SaaS Development Agency", "Meta Ads Agency India", "AI Automation Company",
    "Digital Marketing Agency India", "Next.js Development", "Custom Software India",
    "Startup Tech Agency", "IT Solutions Company India",
  ],
  alternates: { canonical: "https://itvexo.com" },
  openGraph: {
    title: "ITVEXO — Best AI & Software Development Company in India",
    description: "AI automation, SaaS, website dev & digital growth for ambitious businesses.",
    url: "https://itvexo.com",
    type: "website",
  },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ITVEXO",
    image: "https://itvexo.com/og-image.png",
    "@id": "https://itvexo.com",
    url: "https://itvexo.com",
    telephone: "+91-97323-51545",
    email: "support@itvexo.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "West Bengal",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
