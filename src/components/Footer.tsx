import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F5F0E8] border-t-4 border-black font-mono">
      
      {/* Main footer grid */}
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-0 border-b-4 border-black">
        
        <div className="md:border-r-4 border-black pr-8 pb-8 md:pb-0">
          <Link href="/" className="font-display text-4xl tracking-widest text-black block mb-4">
            ITVEXO
          </Link>
          <p className="text-xs text-black/60 leading-relaxed mb-6">
            Build Smarter. Grow Faster.<br />
            World-class IT solutions for ambitious businesses.
          </p>
          <span className="stamp border-black text-black">ISO Certified ✓</span>
        </div>

        <div className="md:border-r-4 border-black px-8 pt-8 md:pt-0">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-6 border-b-2 border-black pb-2">Company</p>
          <ul className="flex flex-col gap-3 text-xs text-black/70">
            {[
              { label: "About Us", href: "/about" },
              { label: "Our Services", href: "/services" },
              { label: "Startup Rise", href: "/startup-rise" },
              { label: "Portfolio", href: "/#portfolio" },
              { label: "Contact Us", href: "/contact" },
              { label: "Admin", href: "/admin" },
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-black transition-colors flex items-center gap-1 group uppercase tracking-wider font-bold">
                  <span className="w-0 group-hover:w-3 overflow-hidden transition-all text-black">→</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:border-r-4 border-black px-8 pt-8 md:pt-0">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-6 border-b-2 border-black pb-2">Services</p>
          <ul className="flex flex-col gap-3 text-xs text-black/70">
            {["Website Development", "AI Automation", "SaaS Build", "Meta Ads", "Digital Marketing", "Custom Software"].map((item) => (
              <li key={item}>
                <Link href="/services" className="hover:text-black transition-colors uppercase tracking-wider font-bold">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="pl-8 pt-8 md:pt-0">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-6 border-b-2 border-black pb-2">Get In Touch</p>
          <ul className="flex flex-col gap-5 text-xs">
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-black shrink-0 mt-0.5" />
              <a href="mailto:support@itvexo.com" className="text-black/70 hover:text-black font-bold uppercase tracking-wider">support@itvexo.com</a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-black shrink-0 mt-0.5" />
              <a href="tel:+919732351545" className="text-black/70 hover:text-black font-bold uppercase tracking-wider">+91 97323 51545</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
              <span className="text-black/70 font-bold uppercase tracking-wider">India / Global Remote</span>
            </li>
          </ul>

          <Link href="/contact" className="mt-8 brut-btn bg-black text-yellow-400 px-6 py-3 text-xs uppercase tracking-widest inline-flex items-center gap-2">
            Start Project <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-black/50 uppercase tracking-widest font-bold">
          © 2026 ITVEXO. Built with ♥ by the ITVEXO Team.
        </p>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
          <Link href="/privacy" className="text-black/50 hover:text-black transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-black/50 hover:text-black transition-colors">Terms of Service</Link>
        </div>
      </div>

    </footer>
  );
}
