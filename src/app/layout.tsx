import type { Metadata } from "next";
import { DM_Serif_Display, Space_Mono, Bebas_Neue } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const SITE_URL = "https://itvexo.com";
const SITE_NAME = "ITVEXO";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ITVEXO — Best AI, Software & IT Solutions Company in India",
    template: "%s | ITVEXO — AI & Software Agency India",
  },
  description:
    "ITVEXO is a leading AI automation, software development, website development, and digital marketing company in India helping startups and businesses scale with modern technology solutions.",
  keywords: [
    // Core Business
    "Best IT Company in India", "Top IT Company", "Best Software Company",
    "IT Solutions Company", "Software Development Company", "AI Software Company",
    "Web Development Agency", "Digital Solutions Company", "Tech Company India", "Global IT Agency",
    // Website Dev
    "Website Development Company", "Custom Website Development", "Next.js Development Agency",
    "React Website Development", "Full Stack Development Company", "Business Website Development",
    "E-Commerce Website Company", "Web Application Development", "Startup Website Agency",
    // AI
    "AI Automation Agency", "AI Software Development", "ChatGPT Integration Services",
    "AI Chatbot Development", "Generative AI Solutions", "AI Workflow Automation",
    "OpenAI Integration Company", "AI Business Automation", "AI SaaS Development", "AI Agency India",
    // SaaS
    "SaaS Development Company", "SaaS Product Development", "Cloud Software Development",
    "MVP Development Agency", "Startup SaaS Solutions", "Enterprise SaaS Development",
    // Marketing
    "Digital Marketing Agency", "Meta Ads Agency", "Facebook Ads Expert",
    "Performance Marketing Agency", "SEO Agency India", "Growth Marketing Company",
    // Local
    "Best IT Company in Kolkata", "IT Company in India", "Software Company in West Bengal",
    "Web Development Company India", "AI Company India", "SaaS Development India",
    // High Intent
    "Hire Web Developers", "Hire AI Developers", "Best Startup Agency",
    "Best SaaS Developers", "IT Company for Startups",
  ],
  authors: [{ name: "ITVEXO Team", url: SITE_URL }],
  creator: "ITVEXO",
  publisher: "ITVEXO",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "ITVEXO — Best AI, Software & IT Solutions Company in India",
    description:
      "ITVEXO is a leading AI automation, software development & digital marketing agency in India. We help startups and businesses scale faster with modern technology.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "ITVEXO — AI & Software Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@itvexo",
    creator: "@itvexo",
    title: "ITVEXO — Best AI, Software & IT Solutions Company in India",
    description:
      "AI automation, software development & digital marketing agency. Build smarter, grow faster.",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "ITVEXO",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-97323-51545",
            contactType: "customer service",
            email: "support@itvexo.com",
            availableLanguage: ["English", "Bengali", "Hindi"],
          },
        ],
        sameAs: [
          "https://www.facebook.com/itvexo",
          "https://www.instagram.com/itvexo",
          "https://www.linkedin.com/company/itvexo",
          "https://twitter.com/itvexo",
        ],
        foundingDate: "2020",
        founders: [{ "@type": "Person", name: "Kadir Akir" }],
        numberOfEmployees: { "@type": "QuantitativeValue", value: "10-50" },
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
          addressRegion: "West Bengal",
        },
        description:
          "ITVEXO is a global AI automation, software development, website development, and digital marketing agency headquartered in India.",
        areaServed: ["IN", "US", "GB", "AU", "CA", "SG", "AE"],
        serviceType: [
          "Website Development", "AI Automation", "SaaS Development",
          "Custom Software", "Meta Ads", "Digital Marketing", "SEO",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "ITVEXO",
        publisher: { "@id": `${SITE_URL}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${dmSerif.variable} ${spaceMono.variable} ${bebasNeue.variable} h-full`}>
      <head>
        <link rel="canonical" href={SITE_URL} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#FACC15" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="West Bengal, India" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F5F0E8] text-black selection:bg-yellow-400">
        <Navbar />
        <main className="flex-grow pt-20" id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
