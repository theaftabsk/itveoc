"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const whatWeDo = [
  {
    cat: "Development",
    accent: "bg-blue-700 text-white",
    items: ["Website Development", "SaaS Platforms", "Custom Software"],
  },
  {
    cat: "AI & Automation",
    accent: "bg-purple-700 text-white",
    items: ["AI Automation", "ChatGPT Integration", "Smart Workflows"],
  },
  {
    cat: "Growth",
    accent: "bg-red-600 text-white",
    items: ["Meta Ads", "Digital Marketing", "SEO Strategy"],
  },
];

const whyChoose = [
  { label: "Startup Focused",       n: "01" },
  { label: "Fast Delivery",         n: "02" },
  { label: "Modern Tech Stack",     n: "03" },
  { label: "Scalable Architecture", n: "04" },
  { label: "ROI-Driven Solutions",  n: "05" },
];

const techStack = [
  { name: "Next.js",     color: "bg-black",       text: "text-white"       },
  { name: "React",       color: "bg-blue-600",     text: "text-white"       },
  { name: "Node.js",     color: "bg-green-700",    text: "text-white"       },
  { name: "AWS",         color: "bg-orange-500",   text: "text-white"       },
  { name: "OpenAI",      color: "bg-purple-700",   text: "text-white"       },
  { name: "PostgreSQL",  color: "bg-blue-800",     text: "text-white"       },
  { name: "PHP",         color: "bg-indigo-600",   text: "text-white"       },
  { name: "MySQL",       color: "bg-teal-700",     text: "text-white"       },
  { name: "Python",      color: "bg-yellow-400",   text: "text-black"       },
  { name: "HTML",        color: "bg-red-600",      text: "text-white"       },
  { name: "CSS",         color: "bg-sky-600",      text: "text-white"       },
  { name: "JavaScript",  color: "bg-yellow-500",   text: "text-black"       },
  { name: "REST API",    color: "bg-green-600",    text: "text-white"       },
  { name: "Docker",      color: "bg-blue-500",     text: "text-white"       },
  { name: "TypeScript",  color: "bg-blue-700",     text: "text-white"       },
  { name: "Stripe",      color: "bg-violet-600",   text: "text-white"       },
];

const stats = [
  { value: "50+",  label: "Projects Delivered"  },
  { value: "100%", label: "Remote Global Team"  },
  { value: "24/7", label: "Support & Uptime"    },
  { value: "99%",  label: "Client Satisfaction" },
];

const values = [
  { n: "01", title: "Engineering First",    desc: "Technical excellence in every line of code we ship."            },
  { n: "02", title: "Speed Without Chaos",  desc: "Rapid delivery with disciplined, transparent process."           },
  { n: "03", title: "AI by Default",        desc: "Intelligent automation baked into every product we build."      },
  { n: "04", title: "ROI Obsessed",         desc: "Every decision we make is driven by your business results."     },
  { n: "05", title: "Client as Partner",    desc: "We're co-builders invested in your success, not just vendors."  },
  { n: "06", title: "Global Mindset",       desc: "30+ clients across 15 countries. We build without borders."     },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden font-mono">

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className="min-h-screen lg:h-screen bg-[#F5F0E8] border-b-4 border-black relative overflow-hidden flex flex-col justify-between lg:grid lg:grid-rows-[auto_1fr_auto]">
        {/* Top label bar */}
        <div className="bg-yellow-400 border-b-4 border-black flex items-center gap-6 px-8 py-3 flex-wrap">
          <span className="stamp border-black text-black">Est. 2020</span>
          <span className="stamp border-black text-black">Bangladesh → Global</span>
          <span className="stamp border-black text-black">ISO Certified</span>
          <span className="ml-auto font-mono text-xs font-bold uppercase tracking-widest text-black/60 hidden md:block">
            ITVEXO / About — Vol. 04
          </span>
        </div>

        {/* Ghost word */}
        <div className="absolute bottom-8 right-0 pointer-events-none overflow-hidden">
          <span className="font-display text-[28vw] leading-none text-black/[0.04] select-none">ITVEXO</span>
        </div>

        {/* Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-full relative z-10">
          {/* Left */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 lg:py-0 border-b-4 lg:border-b-0 lg:border-r-4 border-black">
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.p variants={fadeUp} className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-black/40 mb-6">
                Global AI, Software & Growth Agency
              </motion.p>
              <motion.h1 variants={fadeUp} className="font-serif text-[9vw] lg:text-[5vw] leading-[0.92] tracking-tight text-black">
                We Engineer<br />
                <em className="not-italic bg-black text-yellow-400 px-3 inline-block my-1" style={{ boxShadow: "6px 6px 0 #FACC15", transform: "rotate(-1deg)" }}>
                  Digital
                </em><br />
                Growth.
              </motion.h1>
              <motion.p variants={fadeUp} className="font-mono text-sm leading-relaxed text-black/60 max-w-md mt-8">
                ITVEXO is a global AI, software, and digital growth agency helping startups and businesses scale faster with modern technology.
              </motion.p>
            </motion.div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between px-8 md:px-16 py-12 lg:py-10">
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
              <div className="flex flex-col gap-4 w-fit mb-12">
                <Link href="/contact" className="brut-btn bg-black text-yellow-400 px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-3">
                  Start Project <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="brut-btn bg-yellow-400 text-black px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-3">
                  Book Consultation <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              className="border-t-4 border-black pt-8">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-black/40 mb-5">Core Capabilities</p>
              <div className="flex flex-wrap gap-3">
                {["AI Systems", "Web Dev", "SaaS Build", "Meta Ads", "SEO", "Custom Software"].map((s) => (
                  <span key={s} className="font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 border-2 border-black text-black hover:bg-black hover:text-yellow-400 transition-colors cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t-4 border-black bg-black text-yellow-400 py-3 px-8 flex items-center gap-8 flex-wrap">
          <span className="font-mono text-xs font-bold uppercase tracking-widest">ITVEXO © 2026</span>
          <span className="ml-auto font-mono text-xs text-yellow-400/40 uppercase tracking-widest hidden md:block">
            50+ Projects · Global Remote Team · 24/7 Support
          </span>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. MARQUEE
      ══════════════════════════════════════ */}
      <section className="bg-black border-b-4 border-black py-4 overflow-hidden">
        <div className="flex animate-[marquee_22s_linear_infinite] whitespace-nowrap gap-10">
          {[
            "Engineering Excellence", "AI-First", "5 Years Strong",
            "Global Clients", "SaaS Experts", "Meta Ads", "Next.js", "OpenAI",
            "Engineering Excellence", "AI-First", "5 Years Strong", "Global Clients",
          ].map((s, i) => (
            <span key={i} className="font-display text-3xl tracking-widest uppercase shrink-0 text-yellow-400 flex items-center gap-6">
              {s} <span className="text-yellow-400/25">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. COMPANY OVERVIEW
      ══════════════════════════════════════ */}
      <section className="bg-yellow-400 border-b-4 border-black py-24">
        <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:border-r-4 border-black lg:pr-16 mb-12 lg:mb-0">
            <span className="stamp border-black text-black mb-6 block w-fit">Who We Are</span>
            <h2 className="font-serif text-6xl md:text-8xl italic text-black leading-[0.9] mb-8">Company<br />Overview.</h2>
            <p className="font-mono text-sm leading-[1.9] text-black/70 max-w-md">
              We build scalable websites, AI systems, SaaS products, and growth-focused digital experiences for ambitious brands worldwide.
              Founded in 2020, ITVEXO has shipped 50+ products for clients across 15+ countries — with zero compromises on quality.
            </p>
          </motion.div>
          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:pl-16">
            <div className="grid grid-cols-2 gap-0 border-l-4 border-t-4 border-black">
              {stats.map((s, i) => (
                <div key={i} className="border-r-4 border-b-4 border-black p-8 text-center group hover:bg-black transition-colors duration-300">
                  <div className="font-serif text-5xl italic text-black group-hover:text-yellow-400 mb-2">{s.value}</div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/60 group-hover:text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. WHAT WE DO
      ══════════════════════════════════════ */}
      <section className="bg-[#F5F0E8] border-b-4 border-black py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="border-b-4 border-black pb-10 mb-16">
            <span className="stamp border-black text-black mb-4 block w-fit">Our Services</span>
            <h2 className="font-serif text-6xl md:text-8xl italic text-black leading-none">What We Do.</h2>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l-4 border-t-4 border-black">
            {whatWeDo.map((cat, ci) => (
              <motion.div key={cat.cat} variants={fadeUp}
                className="border-r-4 border-b-4 border-black p-10 group hover:bg-black hover:text-white transition-colors duration-300">
                <span className={`stamp ${cat.accent} border-current text-xs mb-8 block w-fit`}>{cat.cat}</span>
                <ul className="flex flex-col gap-0 border-t-4 border-current">
                  {cat.items.map((item, ii) => (
                    <li key={item} className="flex items-center justify-between py-5 border-b-2 border-current/20 group/item">
                      <span className="font-mono text-base font-bold uppercase tracking-wider group-hover:text-yellow-400 transition-colors">{item}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-20 group-hover:opacity-100 group-hover:text-yellow-400 transition-all" />
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. WHY CHOOSE ITVEXO
      ══════════════════════════════════════ */}
      <section className="bg-black text-white border-b-4 border-black py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
            <div className="lg:border-r-4 border-white/20 lg:pr-16 mb-12 lg:mb-0">
              <span className="stamp border-yellow-400 text-yellow-400 mb-6 block w-fit">Why Us</span>
              <h2 className="font-serif text-6xl md:text-8xl italic text-white leading-none mb-8">Why Choose<br /><span className="text-yellow-400">ITVEXO.</span></h2>
              <p className="font-mono text-sm text-white/50 leading-relaxed max-w-sm">
                We're not just another agency. We're engineers and strategists obsessed with your results.
              </p>
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="lg:pl-16 border-t-4 lg:border-t-0 border-white/20 flex flex-col">
              {whyChoose.map((w) => (
                <motion.div key={w.label} variants={fadeUp}
                  className="flex items-center justify-between py-7 border-b-4 border-white/10 group hover:bg-yellow-400 hover:-mx-4 hover:px-4 transition-all duration-300 cursor-default">
                  <div className="flex items-center gap-6">
                    <span className="font-display text-4xl text-white/15 group-hover:text-black/20">{w.n}</span>
                    <span className="font-mono font-bold text-base uppercase tracking-wider text-white group-hover:text-black">{w.label}</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-black shrink-0" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. TECH STACK
      ══════════════════════════════════════ */}
      <section className="bg-[#F5F0E8] border-b-4 border-black py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="border-b-4 border-black pb-10 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="stamp border-black text-black mb-4 block w-fit">Tech Stack</span>
              <h2 className="font-serif text-6xl md:text-8xl italic text-black leading-none">Built With<br />The Best.</h2>
            </div>
            <p className="font-mono text-sm text-black/50 max-w-xs leading-relaxed">
              Enterprise-grade tools that scale from your first user to your millionth.
            </p>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-0 border-l-4 border-t-4 border-black">
            {techStack.map((tech, i) => (
              <motion.div key={tech.name} variants={fadeUp}
                className="border-r-4 border-b-4 border-black p-6 flex flex-col items-center justify-center text-center group hover:scale-105 hover:z-10 transition-transform duration-200 relative bg-[#F5F0E8]">
                <span className={`font-mono font-bold text-xs uppercase tracking-wider px-3 py-2 mb-3 ${tech.color} ${tech.text}`}
                  style={{ border: "2px solid #0A0A0A", boxShadow: "2px 2px 0 #0A0A0A" }}>
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. VALUES
      ══════════════════════════════════════ */}
      <section className="bg-black text-white border-b-4 border-black py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="border-b-4 border-white/20 pb-10 mb-16">
            <span className="stamp border-yellow-400 text-yellow-400 mb-4 block w-fit">What We Believe</span>
            <h2 className="font-serif text-6xl md:text-8xl italic text-white leading-none">Our Values.</h2>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l-4 border-t-4 border-white/20">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp}
                className="border-r-4 border-b-4 border-white/20 p-10 group hover:bg-yellow-400 hover:text-black transition-colors duration-300">
                <span className="font-display text-6xl leading-none text-white/8 group-hover:text-black/10 block mb-6">{v.n}</span>
                <h3 className="font-serif text-3xl italic text-white group-hover:text-black mb-4">{v.title}</h3>
                <p className="font-mono text-sm text-white/50 group-hover:text-black/60 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. VISION
      ══════════════════════════════════════ */}
      <section className="bg-yellow-400 border-b-4 border-black py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="border-4 border-black bg-[#F5F0E8] p-12 md:p-20 relative" style={{ boxShadow: "10px 10px 0 #0A0A0A" }}>
            <span className="stamp border-black text-black mb-8 block w-fit">Our Vision</span>
            <h2 className="font-serif text-6xl md:text-8xl italic text-black leading-[0.9] mb-8">
              Build Smarter.<br />
              <span className="bg-black text-yellow-400 px-4 py-1 inline-block" style={{ boxShadow: "5px 5px 0 #FACC15" }}>
                Grow Faster.
              </span>
            </h2>
            <p className="font-mono text-base leading-[1.9] text-black/60 max-w-2xl">
              We combine engineering, AI, and digital strategy to help businesses launch, scale, and dominate online. Every line of code, every campaign, every system we build is engineered for one outcome — your growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. FINAL CTA
      ══════════════════════════════════════ */}
      <section className="bg-black py-36 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-display text-[30vw] leading-none text-white/[0.03] select-none">BUILD</span>
        </div>
        <div className="max-w-[1400px] mx-auto px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="stamp border-yellow-400 text-yellow-400 mb-8 mx-auto block w-fit text-base">Ready to Build?</span>
            <h2 className="font-serif text-[11vw] leading-none italic text-white tracking-tighter mb-6">
              Ready To Build<br /><span className="text-yellow-400">Something</span><br />Powerful?
            </h2>
            <p className="font-mono text-sm text-white/40 mb-12 uppercase tracking-widest">Free consultation · No commitment · Reply within 24hrs</p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link href="/contact" className="brut-btn bg-yellow-400 text-black px-16 py-6 text-base uppercase tracking-widest inline-flex items-center gap-4">
                Start Project <ArrowUpRight className="w-6 h-6" />
              </Link>
              <Link href="/startup-rise" className="brut-btn bg-transparent text-white border-white/30 px-16 py-6 text-base uppercase tracking-widest">
                Startup Rise ↗
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
