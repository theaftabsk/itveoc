"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const benefits = [
  { title: "Faster Launch",        desc: "MVP in 4 weeks. Skip months of planning and go live fast.",         tag: "Speed" },
  { title: "Investor-Ready MVP",   desc: "Demo-able, scalable, and documented for investor decks.",            tag: "Funding" },
  { title: "Scalable Backend",     desc: "Cloud-native architecture that grows from 10 to 10 million users.",  tag: "Scale" },
  { title: "AI Integration",       desc: "ChatGPT, automation, and smart features baked in from day one.",     tag: "AI" },
  { title: "Cloud Deployment",     desc: "AWS-hosted, auto-scaling, 99.9% SLA. Production-ready from day 1.", tag: "Cloud" },
  { title: "CTO as a Service",     desc: "Expert technical guidance without the full-time CTO cost.",          tag: "Strategy" },
];

const whoFor = [
  { label: "SaaS Startups",       desc: "Building subscription-based software products." },
  { label: "AI Founders",         desc: "Shipping AI-powered tools and automations."     },
  { label: "E-commerce Brands",   desc: "Scaling online stores and platforms."           },
  { label: "Tech Entrepreneurs",  desc: "First-time founders with big ideas."            },
  { label: "Agencies",            desc: "Delivering client projects faster."             },
];

const processSteps = [
  { n: "01", title: "Discovery Call",     desc: "30-min strategy session. We map your idea, goals, and constraints." },
  { n: "02", title: "Product Planning",   desc: "Feature scoping, tech stack selection, and project blueprint."     },
  { n: "03", title: "UI/UX Design",       desc: "Figma prototypes reviewed with you before a single line of code."  },
  { n: "04", title: "MVP Development",    desc: "Agile sprints, weekly demos, full-stack engineering."              },
  { n: "05", title: "Launch & Scale",     desc: "Deploy to production + 24/7 monitoring + growth support."          },
];

const metrics = [
  { value: "20+", label: "Startups Launched" },
  { value: "4 Wks", label: "Avg. MVP Delivery" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "30+", label: "Global Clients" },
];

const techStack = [
  { name: "Next.js",    color: "bg-black text-white" },
  { name: "React",      color: "bg-blue-600 text-white" },
  { name: "Node.js",    color: "bg-green-700 text-white" },
  { name: "AWS",        color: "bg-orange-500 text-white" },
  { name: "OpenAI",     color: "bg-purple-700 text-white" },
  { name: "PostgreSQL", color: "bg-blue-800 text-white" },
  { name: "Stripe",     color: "bg-violet-600 text-white" },
  { name: "Docker",     color: "bg-sky-600 text-white" },
];

const testimonials = [
  {
    quote: "ITVEXO transformed our idea into a scalable SaaS product in under 5 weeks. Unbelievable execution.",
    author: "Ahmed R.", role: "Founder, TechFlow SaaS", avatar: "A",
  },
  {
    quote: "The CTO-as-a-Service model saved us $200K in hiring. We launched investor-ready in 4 weeks.",
    author: "Sarah M.", role: "CEO, AI Startup", avatar: "S",
  },
  {
    quote: "From wireframe to live product — everything was smooth, professional, and on time.",
    author: "Kadir A.", role: "Co-Founder, E-commerce Brand", avatar: "K",
  },
];

const faqs = [
  { q: "What is Startup Rise?",               a: "A dedicated program for early-stage founders. We provide end-to-end engineering — from MVP to scale — at startup-friendly speed and pricing." },
  { q: "How fast can you deliver an MVP?",    a: "Most MVPs are delivered within 4 weeks. Complex AI products may take 6–8 weeks depending on scope." },
  { q: "Do I need a technical co-founder?",   a: "No. We act as your technical partner and CTO. You focus on the business; we handle everything engineering." },
  { q: "What's the investment?",              a: "Every project is scoped individually. Book a free discovery call and we'll give you a transparent quote within 24 hours." },
  { q: "Will the code be mine?",              a: "100%. Full code ownership, repo access, and documentation handed to you on launch day." },
];

export default function StartupRisePage() {
  return (
    <div className="overflow-x-hidden font-mono">

      {/* ─── HERO ─── */}
      <section className="min-h-screen lg:h-screen bg-black text-white border-b-4 border-black relative overflow-hidden flex flex-col justify-between lg:grid lg:grid-rows-[auto_1fr_auto]">
        {/* Yellow bar */}
        <div className="bg-yellow-400 border-b-4 border-black flex items-center gap-6 px-8 py-3 flex-wrap">
          <span className="stamp border-black text-black">Exclusive Program</span>
          <span className="stamp border-black text-black">MVP in 4 Weeks</span>
          <span className="ml-auto font-mono text-xs font-bold uppercase tracking-widest text-black/60 hidden md:block">
            ITVEXO / Startup Rise — Vol. 03
          </span>
        </div>

        {/* Big BG word */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-display text-[28vw] leading-none text-white/[0.03] select-none">RISE</span>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-full relative z-10">
          {/* Left */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 lg:py-0 border-b-4 lg:border-b-0 lg:border-r-4 border-white/20">
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.p variants={fadeUp} className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-6">
                For Founders & Builders
              </motion.p>
              <motion.h1 variants={fadeUp} className="font-serif text-[11vw] lg:text-[5.5vw] leading-[0.9] tracking-tight text-white mb-0">
                Launch Your<br />
                <em className="not-italic bg-yellow-400 text-black px-3 inline-block my-2" style={{ boxShadow: "6px 6px 0 #FACC15", transform: "rotate(-1.5deg)" }}>
                  MVP.
                </em><br />
                In Weeks,<br />
                Not Months.
              </motion.h1>
            </motion.div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between px-8 md:px-16 py-12 lg:py-10">
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
              <p className="font-mono text-sm leading-[1.9] text-white/60 max-w-md mb-10">
                From idea to investor-ready product — ITVEXO's Startup Rise program gives early-stage founders a complete technical team, CTO-level strategy, and production-grade engineering at startup speed.
              </p>
              <div className="flex flex-col gap-4 w-fit">
                <Link href="/contact" className="brut-btn bg-yellow-400 text-black px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-3">
                  Apply for Program <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="#process" className="brut-btn bg-transparent text-white border-white/30 px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-3">
                  See How It Works ↓
                </Link>
              </div>
            </motion.div>

            {/* Who it's for tags */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              className="border-t-4 border-white/20 pt-8">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-5">Built For</p>
              <div className="flex flex-wrap gap-3">
                {["SaaS Founders", "AI Builders", "Tech Entrepreneurs", "Non-technical Founders"].map((s) => (
                  <span key={s} className="font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 border-2 border-white/20 text-white/60">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t-4 border-white/20 bg-white/5 py-3 px-8 flex items-center gap-8 flex-wrap">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/40">ITVEXO Startup Rise 2026</span>
          <span className="ml-auto font-mono text-xs text-white/30 uppercase tracking-widest">20+ Startups Launched</span>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <section className="bg-yellow-400 border-b-4 border-black py-4 overflow-hidden">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap gap-10">
          {["MVP in 4 Weeks", "CTO as a Service", "AI Integration", "Investor Ready", "Scalable Backend", "Cloud Deployment", "Full Code Ownership", "24/7 Support"].concat(
            ["MVP in 4 Weeks", "CTO as a Service", "AI Integration", "Investor Ready", "Scalable Backend"]
          ).map((s, i) => (
            <span key={i} className="font-display text-3xl tracking-widest uppercase shrink-0 text-black flex items-center gap-6">
              {s} <span className="text-black/25">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ─── METRICS ─── */}
      <section className="bg-[#F5F0E8] border-b-4 border-black">
        <div className="grid grid-cols-2 md:grid-cols-4 border-l-4 border-black">
          {metrics.map((m, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="border-r-4 border-b-4 md:border-b-0 border-black px-10 py-10 text-center group hover:bg-black hover:text-white transition-colors duration-300">
              <div className="font-serif text-5xl md:text-6xl italic text-black group-hover:text-yellow-400 mb-2">{m.value}</div>
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 group-hover:text-white/50">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="bg-[#F5F0E8] border-b-4 border-black py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="border-b-4 border-black pb-10 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="stamp border-black text-black mb-4 block w-fit">Why Startup Rise</span>
              <h2 className="font-serif text-6xl md:text-8xl italic text-black leading-none">What You Get.</h2>
            </div>
            <p className="font-mono text-sm text-black/50 max-w-xs leading-relaxed">Everything you need to go from idea to live product — without hiring a team.</p>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l-4 border-t-4 border-black">
            {benefits.map((b, i) => {
              const accents = ["bg-yellow-400 text-black", "bg-black text-yellow-400", "bg-red-600 text-white", "bg-blue-700 text-white", "bg-green-700 text-white", "bg-orange-500 text-white"];
              return (
                <motion.div key={b.title} variants={fadeUp}
                  className="border-r-4 border-b-4 border-black p-10 group hover:bg-black hover:text-white transition-colors duration-300">
                  <div className={`stamp mb-6 w-fit border-black text-xs ${accents[i]}`}>{b.tag}</div>
                  <h3 className="font-serif text-3xl italic text-black group-hover:text-yellow-400 mb-4 transition-colors">{b.title}</h3>
                  <p className="font-mono text-sm leading-relaxed text-black/60 group-hover:text-white/60">{b.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── WHO IS THIS FOR ─── */}
      <section className="bg-black text-white border-b-4 border-black py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
            <div className="lg:border-r-4 border-white/20 lg:pr-16 mb-12 lg:mb-0">
              <span className="stamp border-yellow-400 text-yellow-400 mb-6 block w-fit">Who Is This For?</span>
              <h2 className="font-serif text-6xl md:text-8xl italic text-white leading-none mb-8">Built For<br />Builders.</h2>
              <p className="font-mono text-sm text-white/50 leading-relaxed max-w-sm">
                Whether you have zero technical background or a rough prototype — we take you to launch.
              </p>
            </div>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:pl-16 flex flex-col border-t-4 border-white/20 lg:border-t-0">
              {whoFor.map((w, i) => (
                <motion.div key={w.label} variants={fadeUp}
                  className="flex items-start justify-between py-8 border-b-4 border-white/10 group hover:bg-yellow-400 hover:text-black hover:-mx-4 hover:px-4 transition-all duration-300 cursor-default">
                  <div>
                    <div className="font-mono font-bold text-base uppercase tracking-wider text-white group-hover:text-black mb-1">{w.label}</div>
                    <div className="font-mono text-sm text-white/40 group-hover:text-black/60">{w.desc}</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-black shrink-0 mt-1" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section id="process" className="bg-yellow-400 border-b-4 border-black py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="border-b-4 border-black pb-10 mb-16">
            <span className="stamp border-black text-black mb-4 block w-fit">How It Works</span>
            <h2 className="font-serif text-6xl md:text-8xl italic text-black leading-none">The Process.</h2>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-0 border-l-4 border-black">
            {processSteps.map((step, i) => (
              <motion.div key={step.n} variants={fadeUp}
                className="border-r-4 border-b-4 md:border-b-0 border-black p-8 group hover:bg-black hover:text-white transition-colors duration-300">
                <div className="font-display text-7xl leading-none text-black/15 group-hover:text-white/10 mb-4">{step.n}</div>
                <h3 className="font-mono font-bold text-sm uppercase tracking-wider text-black group-hover:text-yellow-400 mb-3">{step.title}</h3>
                <p className="font-mono text-xs text-black/60 group-hover:text-white/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="bg-[#F5F0E8] border-b-4 border-black py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="border-b-4 border-black pb-10 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="stamp border-black text-black mb-4 block w-fit">Tech Stack</span>
              <h2 className="font-serif text-6xl md:text-8xl italic text-black leading-none">Built With<br />The Best.</h2>
            </div>
            <p className="font-mono text-sm text-black/50 max-w-xs leading-relaxed">Enterprise-grade tools that scale from your first user to your millionth.</p>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-0 border-l-4 border-t-4 border-black">
            {techStack.map((tech, i) => (
              <motion.div key={tech.name} variants={fadeUp}
                className="border-r-4 border-b-4 border-black p-10 text-center group hover:bg-black hover:text-white transition-colors duration-300">
                <span className={`inline-block ${tech.color} font-mono font-bold text-xs uppercase tracking-widest px-4 py-2 mb-4`}
                  style={{ border: "3px solid #0A0A0A", boxShadow: "3px 3px 0 #0A0A0A" }}>
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-red-600 text-white border-b-4 border-black py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="border-b-4 border-white/30 pb-10 mb-16">
            <span className="stamp border-white text-white mb-4 block w-fit">Founder Stories</span>
            <h2 className="font-serif text-6xl md:text-8xl italic text-white leading-none">They Built.<br />They Launched.</h2>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp}
                className="bg-white text-black p-10 border-4 border-black"
                style={{ boxShadow: "6px 6px 0 #0A0A0A" }}>
                <p className="font-serif text-5xl italic text-black/10 leading-none mb-4">"</p>
                <p className="font-mono text-sm leading-[1.9] text-black mb-10">"{t.quote}"</p>
                <div className="flex items-center gap-4 border-t-4 border-black pt-6">
                  <div className="w-12 h-12 bg-black text-yellow-400 flex items-center justify-center font-display text-xl border-4 border-black shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-mono font-bold text-sm uppercase tracking-wider">{t.author}</p>
                    <p className="font-mono text-xs text-black/50">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-[#F5F0E8] border-b-4 border-black py-24">
        <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="md:border-r-4 border-black md:pr-16 mb-12 md:mb-0">
            <span className="stamp border-black text-black mb-4 block w-fit">FAQ</span>
            <h2 className="font-serif text-7xl italic text-black leading-tight">Founder<br />Questions.</h2>
            <div className="mt-12 border-4 border-black p-8 bg-yellow-400" style={{ boxShadow: "6px 6px 0 #0A0A0A" }}>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-black/60 mb-3">Still unsure?</p>
              <p className="font-mono text-sm text-black mb-6">Book a free 30-min discovery call. No commitment. Just clarity.</p>
              <Link href="/contact" className="brut-btn bg-black text-yellow-400 px-6 py-3 text-xs uppercase tracking-widest inline-flex items-center gap-2">
                Book Free Call <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
          <div className="md:pl-16">
            {faqs.map((faq, i) => (
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

      {/* ─── CTA FOOTER ─── */}
      <section className="bg-black py-32 border-b-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-display text-[30vw] leading-none text-white/[0.03] select-none">APPLY</span>
        </div>
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center border-4 border-white/10 p-12 md:p-20">
            <div className="md:border-r-4 border-white/10 md:pr-16 mb-10 md:mb-0">
              <span className="stamp border-yellow-400 text-yellow-400 mb-6 block w-fit">Ready to Rise?</span>
              <h2 className="font-serif text-6xl md:text-8xl italic text-white leading-[0.9] mb-6">
                From Idea<br />to Launch.
              </h2>
              <p className="font-mono text-sm text-white/50 leading-relaxed max-w-sm">
                Join 20+ founders who shipped their product with ITVEXO. Your MVP awaits.
              </p>
            </div>
            <div className="md:pl-16 flex flex-col gap-5">
              <Link href="/contact" className="brut-btn bg-yellow-400 text-black px-10 py-5 text-base uppercase tracking-widest inline-flex items-center justify-between gap-4 w-full">
                Apply for Program <ArrowUpRight className="w-5 h-5 shrink-0" />
              </Link>
              <Link href="/contact" className="brut-btn bg-transparent text-white border-white/30 px-10 py-5 text-base uppercase tracking-widest inline-flex items-center justify-between gap-4 w-full">
                Book Discovery Call <ArrowUpRight className="w-5 h-5 shrink-0" />
              </Link>
              <Link href="https://wa.me/1234567890" className="brut-btn bg-green-500 text-white px-10 py-5 text-base uppercase tracking-widest inline-flex items-center justify-between gap-4 w-full border-green-500">
                WhatsApp Us Now <ArrowUpRight className="w-5 h-5 shrink-0" />
              </Link>
              <p className="font-mono text-xs text-white/30 uppercase tracking-widest text-center">Free 30-min consultation · No commitment</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
