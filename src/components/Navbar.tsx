"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b-4 border-black transition-colors duration-300 ${scrolled ? "bg-[#F5F0E8]" : "bg-[#F5F0E8]"}`}>
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="font-display text-3xl tracking-widest text-black hover:text-yellow-500 transition-colors">
          ITVEXO
        </Link>

        {/* Center Nav (Desktop) */}
        <nav className="hidden md:flex items-center gap-0 border-l-4 border-r-4 border-black">
          {[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Startup Rise", href: "/startup-rise" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs font-bold uppercase tracking-widest px-6 py-2 border-r-4 border-black last:border-r-0 hover:bg-black hover:text-yellow-400 transition-colors h-full flex items-center"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA (Desktop) */}
        <Link href="/contact" className="brut-btn bg-yellow-400 text-black px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest hidden md:inline-flex items-center gap-2">
          Start Project ↗
        </Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden border-4 border-black bg-yellow-400 p-2 text-black hover:bg-black hover:text-yellow-400 transition-all active:translate-x-1 active:translate-y-1"
          style={{ boxShadow: "2px 2px 0 #000" }}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {menuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-black/50 md:hidden" onClick={closeMenu}>
          <div 
            className="w-full bg-[#F5F0E8] border-b-4 border-black p-6 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Startup Rise", href: "/startup-rise" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="font-mono text-sm font-bold uppercase tracking-widest p-4 border-4 border-black bg-white hover:bg-black hover:text-yellow-400 transition-all text-black flex justify-between items-center"
                  style={{ boxShadow: "4px 4px 0 #000" }}
                >
                  {item.label}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              ))}
            </nav>
            <Link 
              href="/contact" 
              onClick={closeMenu}
              className="brut-btn bg-yellow-400 text-black px-6 py-4 font-mono text-sm font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 border-4 border-black text-center"
              style={{ boxShadow: "4px 4px 0 #000" }}
            >
              Start Project <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
