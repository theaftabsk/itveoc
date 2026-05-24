"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const CONTACT_EMAIL    = "support@itvexo.com";
const CONTACT_PHONE    = "+91 97323 51545";
const CONTACT_WHATSAPP = "919732351545";

const contactMethods = [
  {
    icon: Mail,
    label: "Email Us",
    value: CONTACT_EMAIL,
    sub: "Reply within 24 hours",
    href: `mailto:${CONTACT_EMAIL}`,
    accent: "bg-yellow-400 text-black",
    shadow: "#FACC15",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: CONTACT_PHONE,
    sub: "Mon–Sat, 10am–7pm IST",
    href: `tel:+919732351545`,
    accent: "bg-black text-yellow-400",
    shadow: "#0A0A0A",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: CONTACT_PHONE,
    sub: "Fastest response — usually within 1hr",
    href: `https://wa.me/${CONTACT_WHATSAPP}`,
    accent: "bg-green-600 text-white",
    shadow: "#16A34A",
  },
];

const services = [
  "Website Development",
  "AI Automation",
  "SaaS Build",
  "Custom Software",
  "Meta Ads",
  "Digital Marketing",
  "Startup Rise Program",
  "Other",
];

export default function ContactPage() {
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="overflow-x-hidden font-mono">

      {/* ──────────────────────────────────────
          1. HERO
      ────────────────────────────────────── */}
      <section className="min-h-screen lg:h-screen bg-black text-white border-b-4 border-black relative overflow-hidden flex flex-col justify-between lg:grid lg:grid-rows-[auto_1fr_auto]">
        {/* Yellow bar */}
        <div className="bg-yellow-400 border-b-4 border-black flex items-center gap-6 px-8 py-3 flex-wrap">
          <span className="stamp border-black text-black">24hr Reply</span>
          <span className="stamp border-black text-black">Free Consultation</span>
          <span className="ml-auto font-mono text-xs font-bold uppercase tracking-widest text-black/60 hidden md:block">
            ITVEXO / Contact — Vol. 05
          </span>
        </div>

        {/* Ghost word */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-display text-[28vw] leading-none text-white/[0.03] select-none">TALK</span>
        </div>

        {/* Split content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-full relative z-10">
          {/* Left */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 lg:py-0 border-b-4 lg:border-b-0 lg:border-r-4 border-white/20">
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.p variants={fadeUp} className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-6">
                Get In Touch
              </motion.p>
              <motion.h1 variants={fadeUp} className="font-serif text-[11vw] lg:text-[5.5vw] leading-[0.9] tracking-tight text-white">
                Let's Build<br />
                <em className="not-italic bg-yellow-400 text-black px-3 inline-block my-2"
                  style={{ boxShadow: "6px 6px 0 #FACC15", transform: "rotate(-1deg)" }}>
                  Something.
                </em><br />
                Powerful.
              </motion.h1>
            </motion.div>
          </div>

          {/* Right — contact quick links */}
          <div className="flex flex-col justify-between px-8 md:px-16 py-12 lg:py-10">
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
              <p className="font-mono text-sm leading-[1.9] text-white/60 max-w-md mb-10">
                Ready to build something powerful? Drop us a message, book a free consultation, or reach us directly on WhatsApp — we respond fast.
              </p>
              <div className="flex flex-col gap-4">
                <a href={`https://wa.me/${CONTACT_WHATSAPP}`} target="_blank" rel="noreferrer"
                  className="brut-btn bg-green-500 text-white px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-3 border-green-500 w-fit">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us Now
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`}
                  className="brut-btn bg-yellow-400 text-black px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-3 w-fit">
                  <Mail className="w-4 h-4" /> Email Us
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              className="border-t-4 border-white/20 pt-8">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-5">Contact Details</p>
              <div className="flex flex-col gap-3">
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-mono text-sm text-white/70 hover:text-yellow-400 transition-colors flex items-center gap-3">
                  <Mail className="w-4 h-4 shrink-0" /> {CONTACT_EMAIL}
                </a>
                <a href={`tel:+919732351545`} className="font-mono text-sm text-white/70 hover:text-yellow-400 transition-colors flex items-center gap-3">
                  <Phone className="w-4 h-4 shrink-0" /> {CONTACT_PHONE}
                </a>
                <a href={`https://wa.me/${CONTACT_WHATSAPP}`} className="font-mono text-sm text-white/70 hover:text-green-400 transition-colors flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 shrink-0" /> WhatsApp: {CONTACT_PHONE}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t-4 border-white/20 bg-white/5 py-3 px-8 flex items-center gap-8 flex-wrap">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/40">ITVEXO Contact 2026</span>
          <span className="ml-auto font-mono text-xs text-white/30 uppercase tracking-widest">Free Consultation · No Commitment</span>
        </div>
      </section>

      {/* ──────────────────────────────────────
          2. MARQUEE
      ────────────────────────────────────── */}
      <section className="bg-yellow-400 border-b-4 border-black py-4 overflow-hidden">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap gap-10">
          {[
            "Start Project", "Book Consultation", "Free Demo", "WhatsApp Us",
            "Email Us", "24hr Reply", "No Commitment", "Let's Build",
            "Start Project", "Book Consultation", "Free Demo", "WhatsApp Us",
          ].map((s, i) => (
            <span key={i} className="font-display text-3xl tracking-widest uppercase shrink-0 text-black flex items-center gap-6">
              {s} <span className="text-black/25">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ──────────────────────────────────────
          3. CONTACT METHODS — 3 Cards
      ────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] border-b-4 border-black">
        <div className="grid grid-cols-1 md:grid-cols-3 border-l-4 border-black">
          {contactMethods.map((m, i) => (
            <motion.a key={i} href={m.href} target={m.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="border-r-4 border-b-4 md:border-b-0 border-black p-12 group hover:bg-black hover:text-white transition-colors duration-300 block">
              <div className={`w-14 h-14 flex items-center justify-center mb-8 ${m.accent}`}
                style={{ border: "3px solid #0A0A0A", boxShadow: `4px 4px 0 ${m.shadow}` }}>
                <m.icon className="w-6 h-6" />
              </div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-black/40 group-hover:text-white/40 mb-3">{m.label}</p>
              <p className="font-mono font-bold text-lg uppercase tracking-wider text-black group-hover:text-yellow-400 mb-2 break-all">{m.value}</p>
              <p className="font-mono text-xs text-black/50 group-hover:text-white/50">{m.sub}</p>
              <div className="mt-8 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-black/40 group-hover:text-yellow-400">
                Contact Now <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ──────────────────────────────────────
          4. CONTACT FORM + INFO
      ────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] border-b-4 border-black py-24">
        <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-0">

          {/* Left — Form */}
          <div className="lg:border-r-4 border-black lg:pr-16 mb-16 lg:mb-0">
            <span className="stamp border-black text-black mb-6 block w-fit">Send Message</span>
            <h2 className="font-serif text-5xl md:text-6xl italic text-black mb-10 leading-tight">Tell Us About<br />Your Project.</h2>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="border-4 border-black bg-yellow-400 p-12 text-center" style={{ boxShadow: "8px 8px 0 #0A0A0A" }}>
                <div className="font-display text-8xl text-black mb-4">✓</div>
                <h3 className="font-serif text-4xl italic text-black mb-3">Message Sent!</h3>
                <p className="font-mono text-sm text-black/70">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-0 border-t-4 border-black">
                {/* Name */}
                <div className="border-b-4 border-black">
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 px-0 pt-6 pb-2">Your Name *</label>
                  <input required type="text" placeholder="John Smith"
                    className="w-full bg-transparent font-mono text-lg font-bold text-black placeholder-black/20 outline-none pb-6 uppercase tracking-wide" />
                </div>
                {/* Email */}
                <div className="border-b-4 border-black">
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 pt-6 pb-2">Email Address *</label>
                  <input required type="email" placeholder="you@company.com"
                    className="w-full bg-transparent font-mono text-lg font-bold text-black placeholder-black/20 outline-none pb-6" />
                </div>
                {/* Phone */}
                <div className="border-b-4 border-black">
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 pt-6 pb-2">Phone / WhatsApp</label>
                  <input type="tel" placeholder="+91 98765 43210"
                    className="w-full bg-transparent font-mono text-lg font-bold text-black placeholder-black/20 outline-none pb-6" />
                </div>
                {/* Service select */}
                <div className="border-b-4 border-black pt-6 pb-4">
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4">Select Service *</label>
                  <div className="flex flex-wrap gap-3">
                    {services.map((s) => (
                      <button key={s} type="button" onClick={() => setSelected(s)}
                        className={`font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 border-2 border-black transition-colors ${selected === s ? "bg-black text-yellow-400" : "bg-transparent text-black hover:bg-black/10"}`}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Message */}
                <div className="border-b-4 border-black">
                  <label className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 pt-6 pb-2">Message *</label>
                  <textarea required rows={5} placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full bg-transparent font-mono text-sm text-black placeholder-black/20 outline-none resize-none pb-6 leading-relaxed" />
                </div>
                {/* Submit */}
                <div className="pt-8">
                  <button type="submit"
                    className="brut-btn bg-black text-yellow-400 px-12 py-5 text-sm uppercase tracking-widest inline-flex items-center gap-3 w-full justify-center">
                    Send Message <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right — Info */}
          <div className="lg:pl-16">
            <span className="stamp border-black text-black mb-6 block w-fit">Our Info</span>
            <h2 className="font-serif text-5xl italic text-black mb-10 leading-tight">Find Us,<br />Reach Us.</h2>

            {/* Contact details */}
            <div className="flex flex-col gap-0 border-t-4 border-black mb-12">
              {[
                { icon: Mail,          label: "Email",     value: CONTACT_EMAIL,   href: `mailto:${CONTACT_EMAIL}`        },
                { icon: Phone,         label: "Phone",     value: CONTACT_PHONE,   href: `tel:+919732351545`              },
                { icon: MessageCircle, label: "WhatsApp",  value: CONTACT_PHONE,   href: `https://wa.me/${CONTACT_WHATSAPP}` },
                { icon: MapPin,        label: "Location",  value: "Bangladesh / Global Remote", href: "#"               },
                { icon: Clock,         label: "Hours",     value: "Mon–Sat 10am–7pm IST", href: "#"                    },
              ].map((item, i) => (
                <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                  className="flex items-start gap-6 py-6 border-b-4 border-black group hover:bg-yellow-400 hover:-mx-4 hover:px-4 transition-all duration-300">
                  <div className="w-10 h-10 bg-black group-hover:bg-white flex items-center justify-center shrink-0 transition-colors">
                    <item.icon className="w-4 h-4 text-yellow-400 group-hover:text-black" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 group-hover:text-black/60 mb-1">{item.label}</p>
                    <p className="font-mono font-bold text-sm uppercase tracking-wider text-black">{item.value}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-black/20 group-hover:text-black ml-auto shrink-0 mt-1" />
                </a>
              ))}
            </div>

            {/* Quick CTA card */}
            <div className="border-4 border-black bg-black p-10" style={{ boxShadow: "6px 6px 0 #FACC15" }}>
              <span className="stamp border-yellow-400 text-yellow-400 mb-4 block w-fit">Fastest Way</span>
              <h3 className="font-serif text-4xl italic text-white mb-4">Message us on WhatsApp</h3>
              <p className="font-mono text-sm text-white/60 mb-8 leading-relaxed">
                For fastest response, message us directly on WhatsApp. We reply within 1 hour during business hours.
              </p>
              <a href={`https://wa.me/${CONTACT_WHATSAPP}?text=Hi%20ITVEXO!%20I%27m%20interested%20in%20your%20services.`}
                target="_blank" rel="noreferrer"
                className="brut-btn bg-green-500 text-white px-8 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-3 border-green-500">
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          5. VISION
      ────────────────────────────────────── */}
      <section className="bg-yellow-400 border-b-4 border-black py-28">
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
              We combine engineering, AI, and digital strategy to help businesses launch, scale, and dominate online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          6. FINAL CTA
      ────────────────────────────────────── */}
      <section className="bg-black py-36 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-display text-[28vw] leading-none text-white/[0.03] select-none">BUILD</span>
        </div>
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center border-4 border-white/10 p-12 md:p-20">
            <div className="md:border-r-4 border-white/10 md:pr-16 mb-10 md:mb-0">
              <span className="stamp border-yellow-400 text-yellow-400 mb-6 block w-fit">Ready?</span>
              <h2 className="font-serif text-6xl md:text-8xl italic text-white leading-[0.9] mb-6">
                Ready To Build<br /><span className="text-yellow-400">Something</span><br />Powerful?
              </h2>
              <p className="font-mono text-sm text-white/40 uppercase tracking-widest">
                Free consultation · No commitment
              </p>
            </div>
            <div className="md:pl-16 flex flex-col gap-5">
              <Link href="#form" className="brut-btn bg-yellow-400 text-black px-10 py-5 text-base uppercase tracking-widest inline-flex items-center justify-between gap-4">
                Start Project <ArrowUpRight className="w-5 h-5 shrink-0" />
              </Link>
              <a href={`https://wa.me/${CONTACT_WHATSAPP}`} target="_blank" rel="noreferrer"
                className="brut-btn bg-green-500 text-white px-10 py-5 text-base uppercase tracking-widest inline-flex items-center justify-between gap-4 border-green-500">
                <MessageCircle className="w-5 h-5 shrink-0" /> WhatsApp Now
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`}
                className="brut-btn bg-transparent text-white border-white/30 px-10 py-5 text-base uppercase tracking-widest inline-flex items-center justify-between gap-4">
                <Mail className="w-5 h-5 shrink-0" /> {CONTACT_EMAIL}
              </a>
              <a href={`tel:+919732351545`}
                className="brut-btn bg-transparent text-white border-white/30 px-10 py-5 text-base uppercase tracking-widest inline-flex items-center justify-between gap-4">
                <Phone className="w-5 h-5 shrink-0" /> {CONTACT_PHONE}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
