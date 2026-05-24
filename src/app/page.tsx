"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portfolioData from "@/data/portfolio.json";
import servicesData from "@/data/services.json";
import statsData from "@/data/stats.json";
import clientsData from "@/data/clients.json";
import partnersData from "@/data/partners.json";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Home() {
  const [clients, setClients] = useState(clientsData);
  const [partners, setPartners] = useState(partnersData);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setClients(data);
      })
      .catch((err) => console.error("Error fetching testimonials:", err));

    fetch("/api/partners")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setPartners(data);
      })
      .catch((err) => console.error("Error fetching partners:", err));
  }, []);

  return (
    <div className="overflow-x-hidden font-mono">

      {/* ─── 1. HERO — Full Screen, Cream + Black + Yellow ─── */}
      <section className="min-h-screen lg:h-screen bg-[#F5F0E8] border-b-4 border-black relative overflow-hidden flex flex-col justify-between lg:grid lg:grid-rows-[auto_1fr_auto]">

        {/* Yellow top bar (below navbar) */}
        <div className="bg-yellow-400 border-b-4 border-black flex items-center gap-6 px-8 py-3 flex-wrap">
          <span className="stamp border-black text-black">Est. 2020</span>
          <span className="stamp border-black text-black">Global Agency</span>
          <span className="stamp border-black text-black">AI + Web + Ads</span>
          <span className="ml-auto font-mono text-xs font-bold uppercase tracking-widest text-black/60 hidden md:block">Vol. 01 — ITVEXO Digital Agency</span>
        </div>

        {/* Big BG text */}
        <div className="absolute bottom-0 right-0 font-display text-[28vw] leading-none text-black/[0.04] select-none pointer-events-none pr-4">
          2026
        </div>

        {/* Main content — split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-full">

          {/* Left: Headline */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 lg:py-0 border-b-4 lg:border-b-0 lg:border-r-4 border-black">
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.h1 variants={fadeUp} className="font-serif text-[14vw] lg:text-[7vw] leading-[0.88] tracking-tight text-black">
                Build<br />
                <em className="not-italic bg-yellow-400 px-3 inline-block" style={{ boxShadow: "6px 6px 0 #0A0A0A", transform: "rotate(-1deg)" }}>
                  Smarter.
                </em><br />
                Grow<br />
                Faster.
              </motion.h1>
            </motion.div>
          </div>

          {/* Right: Description + Buttons + Services pills */}
          <div className="flex flex-col justify-between px-8 md:px-16 py-12 lg:py-10 border-black">

            {/* Top: Description */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <p className="font-mono text-sm md:text-base leading-relaxed text-black/70 max-w-md mb-10">
                From Custom Software Architecture and Enterprise-grade AI Automation to high-ROI Meta Ad Campaigns — ITVEXO delivers world-class digital engineering for ambitious businesses worldwide.
              </p>
              <div className="flex flex-col gap-4 w-fit">
                <Link href="/contact" className="brut-btn bg-black text-yellow-400 px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-3">
                  Get Free Demo <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="brut-btn bg-yellow-400 text-black px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-3">
                  View Services ↓
                </Link>
              </div>
            </motion.div>

            {/* Bottom: Services pill list */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="border-t-4 border-black pt-8 mt-10"
            >
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-black/40 mb-5">What We Do</p>
              <div className="flex flex-wrap gap-3">
                {["Website Dev", "AI Automation", "SaaS Build", "Meta Ads", "Custom Software", "Digital Marketing", "AI Systems"].map((s) => (
                  <Link key={s} href="/services"
                    className="font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 border-2 border-black text-black hover:bg-black hover:text-yellow-400 transition-colors"
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t-4 border-black bg-black text-yellow-400 py-3 px-8 flex items-center gap-8 overflow-hidden">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] shrink-0">ITVEXO © 2026</span>
          <span className="font-mono text-xs text-yellow-400/40 shrink-0">—</span>
          <span className="font-mono text-xs text-yellow-400/60 uppercase tracking-widest">30+ Global Clients · 150+ Projects · 98% Satisfaction</span>
        </div>

      </section>

      {/* ─── 2. TICKER / MARQUEE — Black ─── */}
      <section className="bg-black text-yellow-400 py-4 border-b-4 border-black overflow-hidden">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap gap-12">
          {["Website Development", "AI Automation", "SaaS Build", "Custom Software", "Meta Ads", "Digital Marketing", "AI Systems", "Cloud Architecture", "SEO & Growth"].map((s, i) => (
            <span key={i} className="font-display text-xl tracking-widest uppercase shrink-0">
              {s} <span className="text-white mx-4">✦</span>
            </span>
          ))}
          {["Website Development", "AI Automation", "SaaS Build", "Custom Software", "Meta Ads", "Digital Marketing", "AI Systems"].map((s, i) => (
            <span key={`b-${i}`} className="font-display text-xl tracking-widest uppercase shrink-0">
              {s} <span className="text-white mx-4">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ─── OUR CLIENTS — Cream ─── */}
      <section className="bg-[#F5F0E8] border-b-4 border-black py-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-black pb-6">
            <div>
              <p className="stamp border-black text-black mb-3">Partnerships</p>
              <h2 className="font-serif text-5xl md:text-7xl text-black italic">Our Clients</h2>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-black/50 mt-4 md:mt-0">
              Trusted by startups & enterprises worldwide
            </p>
          </div>
        </div>

        {/* Continuous Looping Marquee */}
        <div className="bg-white border-y-4 border-black py-8 overflow-hidden">
          <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap gap-12 w-max">
            {[...partners, ...partners, ...partners, ...partners].map((partner, idx) => (
              <div key={`${partner.id}-${idx}`} className="inline-flex items-center justify-center px-6">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 pointer-events-none"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                ) : (
                  <span className="font-display text-2xl tracking-wider uppercase px-6 py-3 border-4 border-black bg-[#F5F0E8] text-black hover:bg-yellow-400 transition-colors select-none" style={{ boxShadow: "4px 4px 0 #000" }}>
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. STATS — Yellow ─── */}
      <section className="bg-yellow-400 border-b-4 border-black py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-0 border-l-4 border-black">
            {[
              { label: "Projects Delivered", value: statsData.projectsDelivered },
              { label: "Client Satisfaction", value: statsData.clientSatisfaction },
              { label: "Years in Business", value: statsData.experience },
              { label: "Global Clients", value: statsData.globalClients },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="border-r-4 border-b-4 md:border-b-0 border-black p-10 text-center">
                <div className="font-serif text-6xl md:text-7xl text-black mb-3 italic">{s.value}</div>
                <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-black/70">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 4. SERVICES — Cream ─── */}
      <section className="bg-[#F5F0E8] border-b-4 border-black py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Section header */}
          <div className="flex items-end justify-between mb-16 border-b-4 border-black pb-6">
            <div>
              <p className="stamp border-black text-black mb-3">Our Work</p>
              <h2 className="font-serif text-6xl md:text-8xl text-black italic">What We Do</h2>
            </div>
            <Link href="/services" className="brut-btn bg-black text-yellow-400 px-6 py-3 text-xs uppercase tracking-widest hidden md:inline-flex items-center gap-2">
              All Services ↗
            </Link>
          </div>

          {/* Services grid */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l-4 border-t-4 border-black">
            {servicesData.slice(0, 6).map((service, index) => {
              const accentColors = ["bg-yellow-400", "bg-red-500", "bg-blue-600", "bg-green-600", "bg-purple-600", "bg-orange-500"];
              const accentText = ["text-black", "text-white", "text-white", "text-white", "text-white", "text-white"];
              return (
                <motion.div key={service.id} variants={fadeUp}
                  className="brut-card border-r-4 border-b-4 border-black p-8 bg-[#F5F0E8] group cursor-pointer hover:bg-black hover:text-white transition-colors duration-300"
                  style={{ boxShadow: "none", border: "none", borderRight: "4px solid black", borderBottom: "4px solid black" }}
                >
                  <div className={`${accentColors[index]} ${accentText[index]} stamp mb-6 border-black text-sm w-fit`}>{service.tag}</div>
                  <h3 className="font-serif text-3xl italic text-current mb-4 leading-tight">{service.title}</h3>
                  <p className="font-mono text-sm leading-relaxed text-current opacity-70 mb-8">{service.description.slice(0, 100)}...</p>
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest group-hover:text-yellow-400">
                    Read More <ArrowUpRight className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── OUR PRODUCTS — Cream ─── */}
      <section className="bg-[#F5F0E8] border-b-4 border-black py-24">
        <div className="max-w-[1400px] mx-auto px-6">

          {/* Header */}
          <div className="flex items-end justify-between mb-16 border-b-4 border-black pb-6">
            <div>
              <p className="stamp border-black text-black mb-3">Our Products</p>
              <h2 className="font-serif text-6xl md:text-8xl text-black italic">Built by ITVEXO</h2>
            </div>
            <p className="font-mono text-sm text-black/50 max-w-xs leading-relaxed hidden md:block">
              Beyond client work — we build our own world-class software products.
            </p>
          </div>

          {/* Product 1 — RESTUVEXO */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="border-4 border-black mb-8 grid grid-cols-1 lg:grid-cols-2 group"
            style={{ boxShadow: "8px 8px 0 #0A0A0A" }}
          >
            {/* Left — Content */}
            <div className="p-10 md:p-14 border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-[#F5F0E8] group-hover:bg-black group-hover:text-white transition-colors duration-500">
              {/* Logo + badge */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="https://restuvexo.shop/restuvexo_logo.png"
                  alt="RESTUVEXO Logo"
                  className="h-12 w-auto object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <span className="stamp bg-red-600 text-white border-red-600 text-xs">Restaurant OS</span>
              </div>
              <h3 className="font-serif text-5xl md:text-6xl italic text-black group-hover:text-white leading-tight mb-4 transition-colors">
                RESTUVEXO
              </h3>
              <p className="font-mono font-bold text-sm text-black/50 group-hover:text-white/50 uppercase tracking-wider mb-6 transition-colors">
                AI-Powered Restaurant Management System
              </p>
              <p className="font-mono text-sm leading-[1.9] text-black/60 group-hover:text-white/60 max-w-md mb-10 transition-colors">
                The ultimate cloud-native POS system for restaurants. Ultra-high-speed billing, real-time Kitchen Display, QR table ordering, AI assistant (VexoAI), and automated recipe inventory — all in one platform.
              </p>

              {/* Feature badges */}
              <div className="flex flex-wrap gap-3 mb-10">
                {["AI POS Terminal", "Kitchen Display (KDS)", "QR Self-Ordering", "VexoAI Assistant", "Recipe Inventory", "PWA – No App Needed"].map((f) => (
                  <span key={f} className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-2 border-2 border-black group-hover:border-white text-black group-hover:text-white transition-colors">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Visual */}
            <div className="relative bg-black overflow-hidden min-h-[400px] flex flex-col justify-between p-10">
              {/* Mock POS UI */}
              <div className="border-4 border-white/20 p-6 bg-white/5 backdrop-blur-sm mb-6"
                style={{ boxShadow: "4px 4px 0 rgba(250,204,21,0.3)" }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-yellow-400">RESTUVEXO POS v2.4</span>
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="border-2 border-white/20 p-3 text-center">
                    <p className="font-display text-3xl text-yellow-400">₹24,850</p>
                    <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Live Revenue</p>
                  </div>
                  <div className="border-2 border-white/20 p-3 text-center">
                    <p className="font-display text-3xl text-green-400">18/25</p>
                    <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Tables Active</p>
                  </div>
                </div>
                <div className="border-t-2 border-white/10 pt-3">
                  <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-1">Latest KOT</p>
                  <p className="font-mono text-sm text-white">Table #14 — 2x Burger, 1x Tea</p>
                  <span className="font-mono text-[10px] font-bold text-orange-400 uppercase tracking-wider">● Cooking</span>
                </div>
              </div>

              {/* VexoAI hint */}
              <div className="border-2 border-yellow-400/30 p-4 bg-yellow-400/5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-yellow-400/60 mb-2">VexoAI Assistant</p>
                <p className="font-mono text-sm text-white/70">"What are today's sales and profit?"</p>
                <p className="font-mono text-xs text-green-400 mt-1">→ Today's revenue: ₹24,850 · Profit: ₹12,400</p>
              </div>

              {/* CTA */}
              <a href="https://restuvexo.shop" target="_blank" rel="noreferrer"
                className="mt-8 brut-btn bg-yellow-400 text-black px-8 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-3 border-yellow-400 self-start">
                Visit RESTUVEXO <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Product 2 — POSIX */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="border-4 border-black grid grid-cols-1 lg:grid-cols-2 group"
            style={{ boxShadow: "8px 8px 0 #0A0A0A" }}
          >
            {/* Left — Visual */}
            <div className="relative bg-blue-900 overflow-hidden min-h-[360px] flex flex-col justify-between p-10 border-b-4 lg:border-b-0 lg:border-r-4 border-black order-2 lg:order-1">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 font-display text-[12rem] leading-none text-white select-none">POS</div>
              </div>

              {/* Mock retail UI */}
              <div className="border-4 border-white/20 p-6 bg-white/5 relative z-10 mb-6">
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">POSIX Retail Terminal</p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {["Groceries", "Pharma", "Apparel", "Electronics", "FMCG", "More+"].map((c) => (
                    <div key={c} className="border border-white/20 p-2 text-center">
                      <p className="font-mono text-[10px] text-white/60 uppercase">{c}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between">
                  <span className="font-mono text-sm text-white">Total: ₹1,240</span>
                  <span className="font-mono text-xs font-bold text-blue-300 uppercase">UPI / Cash / Card</span>
                </div>
              </div>

              <a href="https://www.posix.digital" target="_blank" rel="noreferrer"
                className="brut-btn bg-white text-blue-900 px-8 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-3 border-white self-start relative z-10">
                Visit POSIX <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right — Content */}
            <div className="p-10 md:p-14 bg-[#F5F0E8] group-hover:bg-blue-900 group-hover:text-white transition-colors duration-500 order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="https://www.posix.digital/logo.png"
                  alt="POSIX Logo"
                  className="h-10 w-auto object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <span className="stamp bg-blue-700 text-white border-blue-700 text-xs">Retail POS</span>
              </div>
              <h3 className="font-serif text-5xl md:text-6xl italic text-black group-hover:text-white leading-tight mb-4 transition-colors">
                POSIX
              </h3>
              <p className="font-mono font-bold text-sm text-black/50 group-hover:text-white/50 uppercase tracking-wider mb-6 transition-colors">
                Retail POS & Billing System
              </p>
              <p className="font-mono text-sm leading-[1.9] text-black/60 group-hover:text-white/60 max-w-md mb-10 transition-colors">
                While RESTUVEXO powers restaurants, POSIX is engineered for retail — supermarkets, pharmacies, clothing shops, and electronics stores. Fast billing, barcode scanning, multi-store sync, and inventory management.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {["Grocery & Supermarkets", "Pharmacies", "Clothing & Apparel", "Electronics", "Barcode Scanning", "Multi-Store Sync"].map((f) => (
                  <span key={f} className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-2 border-2 border-black group-hover:border-white text-black group-hover:text-white transition-colors">
                    {f}
                  </span>
                ))}
              </div>

              <a href="https://www.posix.digital" target="_blank" rel="noreferrer"
                className="brut-btn bg-blue-700 text-white px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-3 border-blue-700">
                Explore POSIX <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>


      <section className="bg-black text-white border-b-4 border-black py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-end justify-between mb-16 border-b-4 border-white/20 pb-6">
            <div>
              <p className="stamp border-yellow-400 text-yellow-400 mb-3">Portfolio</p>
              <h2 className="font-serif text-6xl md:text-8xl italic text-white">Latest Work</h2>
            </div>
            <p className="font-mono text-sm text-white/40 hidden md:block">
              {portfolioData.length} Projects
            </p>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.map((item, i) => {
              const imgIds = ["1460925895917-afdab827c52f", "1485827404703-89b55fcc595e", "1611162617213-7d7a39e9b1d7"];
              const accents = ["border-yellow-400", "border-red-500", "border-blue-500"];
              return (
                <motion.div key={item.id} variants={fadeUp}
                  className={`border-4 ${accents[i]} group cursor-pointer overflow-hidden`}
                  style={{ boxShadow: `6px 6px 0px ${["#FACC15", "#EF4444", "#3B82F6"][i]}` }}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img src={`https://images.unsplash.com/photo-${imgIds[i]}?q=80&w=800&auto=format&fit=crop`}
                      alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6 border-t-4 border-current bg-black">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-mono text-xs font-bold uppercase tracking-widest text-white/40 mb-2">{item.category}</p>
                        <h4 className="font-serif text-2xl italic text-white">{item.title}</h4>
                        <p className="font-mono text-xs text-white/50 mt-2">{item.description}</p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-yellow-400 group-hover:scale-125 transition-all" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── 6. TESTIMONIALS — Red ─── */}
      <section className="bg-red-600 text-white border-b-4 border-black py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="border-b-4 border-white/30 pb-6 mb-16">
            <p className="stamp border-white text-white mb-3">Social Proof</p>
            <h2 className="font-serif text-6xl md:text-8xl italic text-white">Clients Say</h2>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clients.map((client, i) => (
              <motion.div key={client.id} variants={fadeUp}
                className="bg-white text-black p-8 border-4 border-black"
                style={{ boxShadow: "6px 6px 0px #0A0A0A" }}
              >
                <p className="font-serif text-4xl italic text-black/20 leading-none mb-4">"</p>
                <p className="font-mono text-sm leading-relaxed text-black mb-8">"{client.feedback}"</p>
                <div className="flex items-center gap-4 border-t-4 border-black pt-4">
                  <div className="w-12 h-12 bg-black text-yellow-400 flex items-center justify-center font-display text-xl border-4 border-black">
                    {client.avatar}
                  </div>
                  <div>
                    <p className="font-mono font-bold text-sm uppercase tracking-wider">{client.name}</p>
                    <p className="font-mono text-xs text-black/50">{client.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 7. FAQ — Cream ─── */}
      <section className="bg-[#F5F0E8] border-b-4 border-black py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="md:border-r-4 border-black pr-16">
              <p className="stamp border-black text-black mb-4">FAQ</p>
              <h2 className="font-serif text-6xl md:text-7xl italic text-black leading-tight">Frequently<br />Asked.</h2>
            </div>
            <div className="pt-8 md:pt-0 md:pl-16">
              {[
                { q: "How long does a project take?", a: "Most MVPs ship in 4–8 weeks. Enterprise scoped individually." },
                { q: "Do you offer post-launch support?", a: "Yes — 24/7 monitoring and dedicated support packages included." },
                { q: "What makes ITVEXO different?", a: "We combine engineering excellence with real business strategy. Every line of code drives ROI." },
              ].map((faq, i) => (
                <motion.details key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="group border-b-4 border-black py-6 cursor-pointer">
                  <summary className="flex justify-between items-center font-mono font-bold uppercase tracking-wider text-sm list-none">
                    {faq.q}
                    <span className="text-2xl font-display group-open:rotate-45 transition-transform duration-300 ml-4 shrink-0">+</span>
                  </summary>
                  <p className="font-mono text-sm text-black/60 leading-relaxed mt-4">{faq.a}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. STARTUP RISE — Blue ─── */}
      <section className="bg-blue-700 border-b-4 border-black py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            <div className="md:border-r-4 border-black pr-16">
              <p className="stamp border-white text-white mb-4">Exclusive Program</p>
              <h2 className="font-serif text-7xl md:text-8xl italic text-white leading-tight">Startup<br />Rise.</h2>
            </div>
            <div className="md:pl-16 pt-8 md:pt-0">
              <p className="font-mono text-lg text-white/80 leading-relaxed mb-10">
                Launch your startup with expert tech support. Our Startup Rise program is built for early-stage founders who want to move fast and build right.
              </p>
              <Link href="/startup-rise" className="brut-btn bg-yellow-400 text-black px-10 py-5 text-sm uppercase tracking-widest inline-flex items-center gap-3 border-white">
                Explore Program <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. FINAL CTA — Black ─── */}
      <section className="bg-black py-36">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="stamp border-yellow-400 text-yellow-400 mb-8 text-base mx-auto w-fit">
              Let's Build Together
            </p>
            <h2 className="font-serif text-[15vw] leading-none italic text-white mb-12 tracking-tighter">
              Let's<br />
              <span className="text-yellow-400">Talk.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="brut-btn bg-yellow-400 text-black px-12 py-5 text-base uppercase tracking-widest inline-flex items-center gap-3">
                Start Free Demo <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="brut-btn bg-transparent text-white border-white px-12 py-5 text-base uppercase tracking-widest">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
