"use client";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  universe: [
    { href: "/characters", label: "Characters" },
    { href: "/universe", label: "Lore & World" },
    { href: "/updates", label: "Updates" },
    { href: "/updates", label: "Roadmap" },
  ],
  product: [
    { href: "/download", label: "Download" },
    { href: "/premium", label: "Premium Plans" },
    { href: "/support", label: "Help Center" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/terms", label: "Terms of Service" },
    { href: "#", label: "Cookie Settings" },
    { href: "mailto:supp@animalink.city", label: "supp@animalink.city" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 pt-20 pb-12 relative z-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="font-display text-xl text-gold-soft block mb-4">
              Animalink <span className="text-lilac-soft">✦</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Animalink is an immersive, character-driven AI universe where every exchange shapes the relationship. Bond with an iron-willed sheriff, an elegant high-society strategist, or a resilient scholar; each resident possesses an evolving emotional landscape defined by your choices.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { src: "/ui/mail.png", alt: "Chat" },
                { src: "/ui/x.png", alt: "Twitter" },
                { src: "/ui/insta.png", alt: "Instagram" },
                { src: "/ui/tik.png", alt: "TikTok" }
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-card border border-rim flex items-center justify-center hover:border-gold hover:shadow-[0_0_10px_rgba(201,147,58,0.3)] transition-all"
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    className="w-8 h-8 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-title text-xs tracking-widest uppercase text-gold-soft mb-5">Universe</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.universe.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted hover:text-text transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-title text-xs tracking-widest uppercase text-gold-soft mb-5">Product</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted hover:text-text transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-title text-xs tracking-widest uppercase text-gold-soft mb-5">Legal</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted hover:text-text transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-muted">
            © 2026 Animalink. All rights reserved. Tales of Furrapest and all characters are original IP.
          </span>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="text-xs text-muted hover:text-text transition-colors">
              Privacy
            </Link>
            <Link href="/legal/terms" className="text-xs text-muted hover:text-text transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-xs text-muted hover:text-text transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}