"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/characters", label: "Characters" },
  { href: "/universe", label: "Universe" },
  { href: "/updates", label: "Updates" },
  { href: "/support", label: "Support" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 h-[72px] transition-all duration-400 ${
          scrolled
            ? "bg-[rgba(10,9,20,0.92)] border-b border-gold/15 backdrop-blur-md"
            : "bg-gradient-to-b from-[rgba(7,6,15,0.95)] to-transparent"
        }`}
      >
        <Link href="/" className="font-display text-lg text-gold-soft tracking-wider whitespace-nowrap drop-shadow-[0_0_20px_rgba(201,147,58,0.5)]">
          An9imalink <span className="text-lilac-soft">✦</span>
        </Link>

        <ul className="hidden lg:flex gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-title text-xs tracking-[0.15em] uppercase text-muted hover:text-gold-soft transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/download"
          className="hidden lg:flex bg-gradient-to-br from-gold to-[#8a5e1c] text-void font-title text-xs tracking-widest uppercase font-bold px-6 py-2 rounded-full hover:shadow-[0_0_20px_rgba(201,147,58,0.6)] hover:-translate-y-0.5 transition-all"
        >
          Download
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-gold-soft" />
          ) : (
            <Menu className="w-6 h-6 text-gold-soft" />
          )}
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[72px] left-0 right-0 bg-[rgba(10,9,20,0.97)] border-b border-rim p-8 z-40 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-title text-sm tracking-widest text-text hover:text-gold-soft transition-colors pb-4 border-b border-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/download"
                onClick={() => setMobileOpen(false)}
                className="font-title text-sm tracking-widest text-gold-soft"
              >
                Download
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
