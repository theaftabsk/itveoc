"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import servicesData from "@/data/services.json";


const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const accentColors = [
  { bg: "bg-yellow-400", text: "text-black", border: "border-yellow-400", shadow: "#FACC15" },
  { bg: "bg-red-600", text: "text-white", border: "border-red-600", shadow: "#DC2626" },
  { bg: "bg-blue-700", text: "text-white", border: "border-blue-700", shadow: "#1D4ED8" },
  { bg: "bg-black", text: "text-yellow-400", border: "border-black", shadow: "#0A0A0A" },
  { bg: "bg-green-700", text: "text-white", border: "border-green-700", shadow: "#15803D" },
  { bg: "bg-orange-500", text: "text-white", border: "border-orange-500", shadow: "#F97316" },
  { bg: "bg-purple-700", text: "text-white", border: "border-purple-700", shadow: "#7E22CE" },
];

const procesSteps = [
  { n: "01", title: "Discovery", desc: "Deep-dive into your goals, users, and business requirements." },
  { n: "02", title: "Blueprint", desc: "Architect a scalable, future-proof technical plan." },
  { n: "03", title: "Build", desc: "Rapid iterations with weekly demos and full transparency." },
  { n: "04", title: "Launch", desc: "Ship to production with 24/7 monitoring and dedicated support." },
];

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden font-mono">

      {/* ─── HERO ─── */}
      <section className="min-h-screen lg:h-screen bg-black text-white border-b-4 border-black relative overflow-hidden flex flex-col justify-between lg:grid lg:grid-rows-[auto_1fr_auto]">

        {/* Yellow bar */}
        <div className="bg-yellow-400 border-b-4 border-black flex items-center gap-6 px-8 py-3 flex-wrap">
          <span className="stamp border-black text-black">6 Services</span>
          <span className="stamp border-black text-black">3 Disciplines</span>
          <span className="stamp border-black text-black">World Class</span>
          <span className="ml-auto font-mono text-xs font-bold uppercase tracking-widest text-black/60 hidden md:block">
            ITVEXO / Services — Vol. 02
          </span>
        </div>

        {/* Background word */}
        <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
          <span className="font-display text-[22vw] leading-none text-white/[0.03] select-none pr-8">
            SCALE
          </span>
        </div>

        {/* Split hero content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-full">
          {/* Left */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 lg:py-0 border-b-4 lg:border-b-0 lg:border-r-4 border-white/20">
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.p variants={fadeUp} className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-6">
                What We Offer — Vol.02
              </motion.p>
              <motion.h1 variants={fadeUp} className="font-serif text-[12vw] lg:text-[6vw] leading-[0.88] tracking-tight text-white">
                Every<br />
                <em className="not-italic bg-yellow-400 text-black px-3 inline-block" style={{ boxShadow: "6px 6px 0 #FACC15", transform: "rotate(-1deg)" }}>
                  Service.
                </em><br />
                You Need.
              </motion.h1>
            </motion.div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between px-8 md:px-16 py-12 lg:py-10">
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
              <p className="font-mono text-sm leading-relaxed text-white/60 max-w-md mb-10">
                From AI-powered automation to enterprise SaaS builds and high-ROI Meta Ads — ITVEXO delivers every digital capability your ambitious business demands.
              </p>
              <Link href="/contact" className="brut-btn bg-yellow-400 text-black px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-3 border-yellow-400">
                Start a Project <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Service index */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              className="border-t-4 border-white/20 pt-8"
            >
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-5">Jump to Service</p>
              <div className="flex flex-wrap gap-3">
                {servicesData.map((s) => (
                  <a key={s.id} href={`#${s.id}`}
                    className="font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 border-2 border-white/20 text-white/70 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all">
                    {s.title}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t-4 border-white/20 bg-white/5 py-3 px-8 flex items-center gap-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/40">ITVEXO Services 2026</span>
          <span className="ml-auto font-mono text-xs text-white/30 uppercase tracking-widest">7 World-Class Capabilities</span>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <section className="bg-yellow-400 border-b-4 border-black py-4 overflow-hidden">
        <div className="flex animate-[marquee_22s_linear_infinite] whitespace-nowrap gap-10">
          {[...servicesData, ...servicesData].map((s, i) => (
            <span key={i} className="font-display text-3xl tracking-widest uppercase shrink-0 text-black flex items-center gap-6">
              {s.title} <span className="text-black/25 text-2xl">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="bg-[#F5F0E8] border-b-4 border-black">
        <div className="grid grid-cols-2 md:grid-cols-4 border-l-4 border-black">
          {[
            { value: "150+", label: "Projects Shipped" },
            { value: "98%",  label: "Client Satisfaction" },
            { value: "5 Yrs", label: "Industry Experience" },
            { value: "30+",  label: "Global Clients" },
          ].map((s, i) => (
            <div key={i} className="border-r-4 border-b-4 md:border-b-0 border-black px-10 py-8 text-center group hover:bg-black hover:text-white transition-colors duration-300">
              <div className="font-serif text-5xl italic text-black group-hover:text-yellow-400 mb-1">{s.value}</div>
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 group-hover:text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES — Alternating Layout ─── */}
      {servicesData.map((service, index) => {
        const ac = accentColors[index % accentColors.length];
        const isEven = index % 2 === 0;
        const numColor = ["text-yellow-400","text-red-400","text-blue-400","text-green-400","text-orange-400","text-purple-400"][index % 6];

        return (
          <section key={service.id} id={service.id} className="border-b-4 border-black">
            <div className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? "" : "lg:grid-flow-col-dense"}`}>

              {/* Image panel */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
                className={`relative overflow-hidden border-b-4 lg:border-b-0 ${isEven ? "lg:border-r-4" : "lg:border-l-4"} border-black min-h-[40vh] lg:min-h-[75vh] group`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                {/* Gradient overlay — unique per service */}
                <div className={`absolute inset-0 ${ac.bg} opacity-40 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top-right index badge */}
                <div className="absolute top-6 right-6">
                  <span className="font-display text-6xl leading-none text-white/20">
                    0{index + 1}
                  </span>
                </div>

                {/* Bottom overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-10">
                  <span className={`stamp mb-3 w-fit border-white/40 text-white/70`}>{service.category}</span>
                  <span className={`font-display text-[4rem] leading-none ${numColor} block mb-1`}>0{index + 1}</span>
                  <p className="font-mono text-white/50 text-xs uppercase tracking-[0.2em]">{service.tag} — {service.title}</p>
                </div>
              </motion.div>

              {/* Content panel */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className={`${isEven ? "" : "lg:col-start-1 lg:row-start-1"} bg-[#F5F0E8] p-10 md:p-16 flex flex-col justify-between min-h-[65vh]`}
              >
                <div>
                  {/* Tag + Category row */}
                  <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                    <span className={`stamp ${ac.border} ${ac.text} ${ac.bg} text-xs`}>{service.tag}</span>
                    <span className="font-mono text-[10px] text-black/40 uppercase tracking-[0.2em]">/ {service.category}</span>
                  </motion.div>

                  {/* Title */}
                  <motion.h2 variants={fadeUp} className="font-serif text-5xl md:text-6xl italic text-black leading-[0.95] mb-2">
                    {service.title}
                  </motion.h2>
                  <motion.p variants={fadeUp} className="font-mono text-sm font-bold text-black/40 uppercase tracking-wider mb-8">
                    {service.short}
                  </motion.p>

                  {/* Description */}
                  <motion.p variants={fadeUp} className="font-mono text-sm leading-[1.8] text-black/60 max-w-md mb-10">
                    {service.description}
                  </motion.p>

                  {/* Feature list */}
                  <motion.ul variants={stagger} className="flex flex-col gap-0 mb-10 border-t-4 border-black">
                    {service.points.map((pt) => (
                      <motion.li key={pt} variants={fadeUp}
                        className="flex items-center justify-between py-4 border-b-2 border-black/20 group/li hover:bg-black hover:px-4 transition-all duration-200 cursor-default">
                        <span className="font-mono text-sm font-bold uppercase tracking-wider text-black group-hover/li:text-yellow-400">{pt}</span>
                        <ArrowUpRight className="w-4 h-4 text-black/20 group-hover/li:text-yellow-400 transition-colors" />
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* CTA row */}
                <motion.div variants={fadeUp} className="flex items-center gap-4 flex-wrap">
                  <Link href="/contact"
                    className={`brut-btn ${ac.bg} ${ac.text} px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-3`}
                    style={{ boxShadow: `5px 5px 0 ${ac.shadow}` }}
                  >
                    Get Started <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <span className="font-mono text-xs text-black/30 uppercase tracking-widest">
                    Free consultation included
                  </span>
                </motion.div>
              </motion.div>

            </div>
          </section>
        );
      })}

      {/* ─── PROCESS — Black ─── */}
      <section className="bg-black text-white py-28 border-b-4 border-black">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="border-b-4 border-white/20 pb-10 mb-16">
            <span className="stamp border-yellow-400 text-yellow-400 mb-4 block w-fit">Our Process</span>
            <h2 className="font-serif text-7xl md:text-9xl italic text-white leading-none">How We Work.</h2>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-0 border-l-4 border-white/20">
            {procesSteps.map((step, i) => (
              <motion.div key={step.n} variants={fadeUp}
                className="border-r-4 border-white/20 px-8 py-10 group hover:bg-yellow-400 hover:text-black transition-colors duration-300">
                <div className="font-display text-8xl text-white/10 group-hover:text-black/20 mb-4 leading-none">{step.n}</div>
                <h3 className="font-mono font-bold text-lg uppercase tracking-wider text-white group-hover:text-black mb-3">{step.title}</h3>
                <p className="font-mono text-sm text-white/50 group-hover:text-black/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ — Cream ─── */}
      <section className="bg-[#F5F0E8] py-24 border-b-4 border-black">
        <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="md:border-r-4 border-black pr-16">
            <span className="stamp border-black text-black mb-4 block w-fit">FAQ</span>
            <h2 className="font-serif text-7xl italic text-black leading-tight">Got<br />Questions?</h2>
          </div>
          <div className="md:pl-16 pt-8 md:pt-0">
            {[
              { q: "How long does a project take?", a: "MVPs in 4–8 weeks. Enterprise scoped individually." },
              { q: "Post-launch support?", a: "Yes — 24/7 monitoring and dedicated support included." },
              { q: "Existing tech stack compatibility?", a: "We integrate with any tools, APIs, or legacy systems." },
              { q: "SaaS from scratch?", a: "Absolutely. Multi-tenancy, billing, onboarding — all covered." },
            ].map((faq, i) => (
              <motion.details key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group border-b-4 border-black py-6 cursor-pointer">
                <summary className="flex justify-between items-center font-mono font-bold uppercase tracking-wider text-sm list-none">
                  {faq.q}
                  <span className="text-3xl font-display group-open:rotate-45 transition-transform duration-300 ml-4 shrink-0 leading-none">+</span>
                </summary>
                <p className="font-mono text-sm text-black/60 leading-relaxed mt-4">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA — Yellow ─── */}
      <section className="bg-yellow-400 py-32 border-b-4 border-black">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="stamp border-black text-black mb-6 mx-auto block w-fit">Ready?</span>
            <h2 className="font-serif text-[14vw] leading-none italic text-black tracking-tighter mb-12">
              Let's Build.
            </h2>
            <Link href="/contact" className="brut-btn bg-black text-yellow-400 px-16 py-6 text-base uppercase tracking-widest inline-flex items-center gap-4">
              Start Your Project <ArrowUpRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
