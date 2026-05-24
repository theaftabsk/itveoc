import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services — AI, Web Dev, SaaS, Meta Ads & Digital Marketing",
  description:
    "Explore ITVEXO's full services: AI automation, website development, SaaS build, custom software, Meta ads & SEO. World-class IT solutions for ambitious businesses worldwide.",
  keywords: [
    "Website Development Services India", "AI Automation Services",
    "SaaS Development Company", "Custom Software Development India",
    "Meta Ads Agency India", "Digital Marketing Services India",
    "Next.js Development", "ChatGPT Integration Services",
    "SEO Services India", "IT Services Company India",
  ],
  alternates: { canonical: "https://itvexo.com/services" },
  openGraph: {
    title: "ITVEXO Services — AI, Web Dev, SaaS & Digital Marketing",
    description: "World-class AI automation, website development, SaaS, Meta ads & SEO services.",
    url: "https://itvexo.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
