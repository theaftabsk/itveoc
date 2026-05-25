"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Mail, Calendar } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p className="mb-4">
          At ITVEXO, accessible from <Link href="/" className="underline font-bold hover:text-yellow-600">https://itvexo.com</Link>, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document contains types of information that is collected and recorded by ITVEXO and how we use it.
        </p>
        <p>
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:support@itvexo.com" className="underline font-bold hover:text-yellow-600">support@itvexo.com</a>.
        </p>
      </>
    ),
  },
  {
    id: "info-collect",
    title: "Information We Collect",
    content: (
      <>
        <p className="mb-4">
          The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Contact Information:</strong> When you register or contact us, we may ask for your name, company name, email address, phone number, and mailing address.</li>
          <li><strong>Communication Details:</strong> If you contact us directly, we may receive additional information such as your message, attachments, or any details you choose to share.</li>
          <li><strong>Technical Data:</strong> Like many websites, we collect standard log files. This includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, and referring/exit pages.</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-use",
    title: "How We Use Your Information",
    content: (
      <>
        <p className="mb-4">We use the information we collect in various ways, including to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide, operate, and maintain our website and services.</li>
          <li>Improve, personalize, and expand our website offerings and client projects.</li>
          <li>Understand and analyze how you interact with our products.</li>
          <li>Develop new software services, features, and capabilities.</li>
          <li>Communicate with you for customer support, updates, and marketing materials.</li>
          <li>Detect and prevent fraudulent activities.</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and Web Beacons",
    content: (
      <>
        <p className="mb-4">
          ITVEXO uses "cookies" to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
        </p>
        <p>
          You can choose to disable cookies through your individual browser options. Detailed information about cookie management with specific web browsers can be found at the browsers' respective websites.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Data Protection & Security",
    content: (
      <>
        <p className="mb-4">
          We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.
        </p>
        <p>
          Please note that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
        </p>
      </>
    ),
  },
  {
    id: "gdpr-rights",
    title: "GDPR & CCPA Rights",
    content: (
      <>
        <p className="mb-4">
          We want to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
          <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
          <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data under certain conditions.</li>
          <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
          <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data.</li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="overflow-x-hidden font-mono bg-[#F5F0E8] text-black">
      
      {/* ─── 1. HERO ─── */}
      <section className="bg-[#F5F0E8] border-b-4 border-black relative overflow-hidden flex flex-col justify-between py-12 md:py-20">
        
        {/* Yellow top bar */}
        <div className="bg-yellow-400 border-y-4 border-black flex items-center gap-6 px-8 py-3 flex-wrap mb-12">
          <span className="stamp border-black text-black flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Secure Protocol
          </span>
          <span className="stamp border-black text-black flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Effective: May 2026
          </span>
          <span className="ml-auto font-mono text-xs font-bold uppercase tracking-widest text-black/60 hidden md:block">
            ITVEXO / Legal Documentation
          </span>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-black/40 mb-4"
            >
              Terms & Compliance
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl leading-tight text-black mb-6"
            >
              Privacy <br />
              <em className="not-italic bg-yellow-400 px-3 inline-block" style={{ boxShadow: "6px 6px 0 #000", transform: "rotate(-1deg)" }}>
                Policy.
              </em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-sm leading-relaxed text-black/70 max-w-xl"
            >
              Your privacy is extremely important to us. This policy details how ITVEXO handles your personal data, data collection methods, and your user rights.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── 2. CONTENT AREA ─── */}
      <section className="py-16 max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          
          {/* Left: Sticky Navigation Sidebar */}
          <div className="lg:sticky lg:top-28 flex flex-col gap-4 order-2 lg:order-1">
            <div className="border-4 border-black bg-white p-6" style={{ boxShadow: "4px 4px 0 #000" }}>
              <h3 className="font-serif text-xl italic mb-4 border-b-2 border-black pb-2">Policy Index</h3>
              <ul className="flex flex-col gap-2">
                {sections.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className="font-mono text-xs uppercase tracking-wider font-bold text-black/60 hover:text-black flex items-center justify-between group py-1"
                    >
                      {sec.title}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:text-yellow-500 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick Contact Box */}
            <div className="border-4 border-black bg-yellow-400 p-6" style={{ boxShadow: "4px 4px 0 #000" }}>
              <h4 className="font-mono font-bold text-xs uppercase tracking-widest text-black/60 mb-2">Have Questions?</h4>
              <p className="font-mono text-xs text-black/80 mb-4">Our compliance team is ready to assist you.</p>
              <a
                href="mailto:support@itvexo.com"
                className="brut-btn bg-black text-yellow-400 px-4 py-3 text-[10px] uppercase tracking-widest inline-flex items-center gap-2 w-full justify-center"
              >
                <Mail className="w-3.5 h-3.5" /> Email Support
              </a>
            </div>
          </div>

          {/* Right: Main Content */}
          <div className="lg:col-span-3 flex flex-col gap-8 order-1 lg:order-2">
            <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col gap-8">
              {sections.map((sec) => (
                <motion.div
                  key={sec.id}
                  id={sec.id}
                  variants={fadeUp}
                  className="border-4 border-black bg-white p-8 md:p-10 relative scroll-mt-28"
                  style={{ boxShadow: "6px 6px 0 #000" }}
                >
                  <h2 className="font-serif text-2xl md:text-3xl italic mb-6 border-b-2 border-black/10 pb-4 pr-12">
                    {sec.title}
                  </h2>
                  <div className="font-mono text-sm leading-relaxed text-black/80">
                    {sec.content}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* ─── 3. CTA ─── */}
      <section className="bg-black py-20 text-white border-t-4 border-black">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <span className="stamp border-yellow-400 text-yellow-400 mb-6 mx-auto block w-fit text-xs">
            Review Complete
          </span>
          <h2 className="font-serif text-4xl md:text-5xl italic mb-8">
            Back to terms or home?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="brut-btn bg-yellow-400 text-black px-8 py-4 text-xs uppercase tracking-widest">
              Back to Home
            </Link>
            <Link href="/terms" className="brut-btn bg-transparent text-white border-white px-8 py-4 text-xs uppercase tracking-widest">
              Read Terms of Service
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
