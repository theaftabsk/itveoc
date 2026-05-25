"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Scale, Mail, Calendar } from "lucide-react";
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
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p className="mb-4">
          By accessing and using the website and services of ITVEXO ("Company", "we", "our", or "us"), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you are prohibited from using or accessing this site and our services.
        </p>
        <p>
          We reserve the right to review, update, or change these terms at any time. Changes become effective immediately upon being posted on this page.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "2. Description of Services",
    content: (
      <>
        <p className="mb-4">
          ITVEXO provides custom web development, AI automation solutions, SaaS development, fractional CTO services, Meta advertising, SEO, and digital growth marketing.
        </p>
        <p>
          Specific service scopes, timelines, deliverables, and service level agreements (SLAs) are defined individually in separate master service agreements (MSAs) or statements of work (SOWs) signed with each client.
        </p>
      </>
    ),
  },
  {
    id: "payment",
    title: "3. Billing & Payments",
    content: (
      <>
        <p className="mb-4">
          Clients agree to pay all fees associated with their chosen services according to the schedule outlined in their SOW or SOW proposal.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Deposits & Milestones:</strong> Custom development projects usually require an upfront deposit before work begins, with subsequent payments tied to project milestones.</li>
          <li><strong>Late Payments:</strong> We reserve the right to suspend development, hosting, support, or active ad campaigns if invoices remain unpaid beyond their due dates.</li>
          <li><strong>Taxes:</strong> All fees are exclusive of GST or any other applicable government taxes unless specified otherwise.</li>
        </ul>
      </>
    ),
  },
  {
    id: "ip-rights",
    title: "4. Intellectual Property",
    content: (
      <>
        <p className="mb-4">
          All proprietary source code, software architecture, designs, copy, and materials created for our clients are the sole intellectual property of the client upon full payment of all outstanding invoices, unless agreed otherwise in writing.
        </p>
        <p>
          ITVEXO retains ownership of any pre-existing codebases, libraries, algorithms, frameworks, and tools used during development, but grants clients a perpetual, worldwide, non-exclusive license to use them within the delivered software.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "5. Limitation of Liability",
    content: (
      <>
        <p className="mb-4">
          In no event shall ITVEXO, its directors, employees, or partners, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Your access to or use of (or inability to access or use) our services.</li>
          <li>Any third-party server downtime, hosting interruptions, API changes, or ad platform suspensions.</li>
          <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
        </ul>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "6. Governing Law",
    content: (
      <>
        <p>
          These Terms of Service shall be governed by and construed in accordance with the laws of West Bengal, India, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be subject to the exclusive jurisdiction of the courts located in Kolkata, West Bengal, India.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="overflow-x-hidden font-mono bg-[#F5F0E8] text-black">
      
      {/* ─── 1. HERO ─── */}
      <section className="bg-[#F5F0E8] border-b-4 border-black relative overflow-hidden flex flex-col justify-between py-12 md:py-20">
        
        {/* Yellow top bar */}
        <div className="bg-yellow-400 border-y-4 border-black flex items-center gap-6 px-8 py-3 flex-wrap mb-12">
          <span className="stamp border-black text-black flex items-center gap-2">
            <Scale className="w-4 h-4" /> Legal Framework
          </span>
          <span className="stamp border-black text-black flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Effective: May 2026
          </span>
          <span className="ml-auto font-mono text-xs font-bold uppercase tracking-widest text-black/60 hidden md:block">
            ITVEXO / Service Agreements
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
              Terms Of <br />
              <em className="not-italic bg-yellow-400 px-3 inline-block" style={{ boxShadow: "6px 6px 0 #000", transform: "rotate(-1deg)" }}>
                Service.
              </em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-sm leading-relaxed text-black/70 max-w-xl"
            >
              Please read these terms carefully. They outline your legal rights, responsibilities, and conditions when working with ITVEXO or using our software.
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
              <h3 className="font-serif text-xl italic mb-4 border-b-2 border-black pb-2">Terms Index</h3>
              <ul className="flex flex-col gap-2">
                {sections.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className="font-mono text-xs uppercase tracking-wider font-bold text-black/60 hover:text-black flex items-center justify-between group py-1"
                    >
                      {sec.title.split(". ")[1] || sec.title}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:text-yellow-500 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick Contact Box */}
            <div className="border-4 border-black bg-yellow-400 p-6" style={{ boxShadow: "4px 4px 0 #000" }}>
              <h4 className="font-mono font-bold text-xs uppercase tracking-widest text-black/60 mb-2">Legal Questions?</h4>
              <p className="font-mono text-xs text-black/80 mb-4">Get in touch with our legal compliance team.</p>
              <a
                href="mailto:support@itvexo.com"
                className="brut-btn bg-black text-yellow-400 px-4 py-3 text-[10px] uppercase tracking-widest inline-flex items-center gap-2 w-full justify-center"
              >
                <Mail className="w-3.5 h-3.5" /> Contact Legal
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
            Back to privacy policy or home?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="brut-btn bg-yellow-400 text-black px-8 py-4 text-xs uppercase tracking-widest">
              Back to Home
            </Link>
            <Link href="/privacy" className="brut-btn bg-transparent text-white border-white px-8 py-4 text-xs uppercase tracking-widest">
              Read Privacy Policy
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
