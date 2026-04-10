import { Starfield } from "@/components/effects/Starfield";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download — Animalink",
  description: "Download Animalink for Android. Cross The Threshold and meet the inhabitants of Furrapest.",
};

const features = [
  {
    icon: "✦",
    title: "Three characters. One world.",
    description: "Aureliane, Duque, and Dobert — each with their own voice, history, and relationship to Furrapest.",
    accent: "text-gold",
  },
  {
    icon: "◈",
    title: "Cinderfall lore",
    description: "Explore the Universe section, read Tales of Furrapest, and discover the world behind the conversations.",
    accent: "text-lilac",
  },
  {
    icon: "◎",
    title: "Three tiers of status",
    description: "Start as Streetborn for free. Rise to Highborn or claim the Crown — your status in Furrapest is yours to choose.",
    accent: "text-teal",
  },
  {
    icon: "❋",
    title: "Crown Vault",
    description: "Exclusive lore, premium themes, and early access to new characters — for those who've truly crossed The Threshold.",
    accent: "text-rose",
  },
];

const steps = [
  { number: "01", text: "Tap the button below to open Google Play" },
  { number: "02", text: "Install Animalink on your Android device" },
  { number: "03", text: "Create your account or sign in" },
  { number: "04", text: "Choose a character and cross The Threshold" },
];

export default function DownloadPage() {
  return (
    <>
      <Starfield />

      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-gold/5 blur-[150px]" />
        <div className="absolute bottom-1/4 -left-40 w-[400px] h-[400px] rounded-full bg-lilac/5 blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 text-center relative">
        <div className="container mx-auto max-w-3xl">
          <SectionTag>Now Available</SectionTag>

          <h1 className="font-display text-5xl md:text-7xl text-white mt-6 mb-4 leading-tight">
            Cross<br />
            <span className="gradient-text">The Threshold</span>
          </h1>

          <div className="glow-divider" />

          <p className="font-editorial italic text-xl text-lilac-soft leading-relaxed mt-6 mb-4">
            Furrapest is waiting. So are its inhabitants.
          </p>
          <p className="text-text text-base leading-relaxed max-w-lg mx-auto mb-12">
            Download Animalink for Android and step into Cinderfall —
            a victorian-industrial world of characters with real depth,
            real stories, and real conversations.
          </p>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="https://play.google.com/store/apps/details?id=com.animalink.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/5 border border-gold/30 hover:border-gold/60 hover:bg-gold/5 transition-all duration-300 rounded-2xl px-6 py-4 group"
            >
              {/* Google Play SVG badge */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <path d="M3.18 23.5c-.34-.19-.56-.55-.56-.97V1.47c0-.42.22-.78.56-.97l11.7 11.5-11.7 11.5z" fill="#4CAF50"/>
                <path d="M18.82 16.18l-3.6-2.1-2.34 2.3 5.94 5.84c.24-.13.44-.34.56-.59l-.56-5.45z" fill="#F44336"/>
                <path d="M20.82 9.07l-2-1.17-3.94 3.87 2.14 2.1 3.8-2.2c.54-.31.54-2.29 0-2.6z" fill="#FFC107"/>
                <path d="M3.18.47c.24-.25.58-.39.93-.33l11.33 11.13-2.34 2.3L3.18.47z" fill="#2196F3"/>
              </svg>
              <div className="text-left">
                <p className="font-title text-xs tracking-widest uppercase text-muted">Get it on</p>
                <p className="font-title text-base text-white">Google Play</p>
              </div>
            </a>

            <Link href="/premium">
              <Button>View Crown plans ✦</Button>
            </Link>
          </div>

          <p className="text-xs text-muted font-title tracking-widest uppercase">
            Free to download · Android 8.0+
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <SectionTag>What awaits</SectionTag>
            <h2 className="font-title text-3xl text-white mt-4">Inside Animalink</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card border border-rim rounded-2xl p-7 flex gap-5 hover:border-gold/20 transition-colors duration-300"
              >
                <span className={`text-2xl flex-shrink-0 ${f.accent} mt-0.5`}>{f.icon}</span>
                <div>
                  <h3 className="font-title text-sm text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-text leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to install */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <SectionTag>Getting started</SectionTag>
            <h2 className="font-title text-3xl text-white mt-4">Four steps to Furrapest</h2>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-card border border-rim rounded-2xl px-7 py-5 flex items-center gap-6 hover:border-gold/20 transition-colors duration-300"
              >
                <span className="font-display text-2xl text-gold/30 flex-shrink-0 w-10">
                  {step.number}
                </span>
                <p className="font-title text-sm text-text tracking-wide">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Characters teaser */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-rim rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-lilac/5 pointer-events-none" />
            <div className="relative z-10 text-center mb-10">
              <SectionTag>The inhabitants</SectionTag>
              <h2 className="font-title text-2xl text-white mt-4">
                Three characters. Infinite conversations.
              </h2>
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-4">
              {[
                { initials: "AS", name: "Aureliane", role: "Aristocrat", bg: "bg-gold/10", text: "text-gold-soft", border: "border-gold/20", href: "/universe/characters/aureliane" },
                { initials: "DD", name: "Duque", role: "Gentleman", bg: "bg-teal/10", text: "text-teal", border: "border-teal/20", href: "/universe/characters/duque" },
                { initials: "Do", name: "Dobert", role: "Sheriff", bg: "bg-muted/15", text: "text-text", border: "border-muted/20", href: "/universe/characters/dobert" },
              ].map((char) => (
                <Link
                  key={char.initials}
                  href={char.href}
                  className={`bg-surface border ${char.border} rounded-2xl p-5 text-center hover:border-opacity-60 transition-all duration-300 group`}
                >
                  <div className={`w-12 h-12 rounded-full ${char.bg} border ${char.border} flex items-center justify-center font-display text-sm ${char.text} mx-auto mb-3`}>
                    {char.initials}
                  </div>
                  <p className="font-title text-xs text-white mb-1">{char.name}</p>
                  <p className="text-xs text-muted">{char.role}</p>
                </Link>
              ))}
            </div>

            <div className="relative z-10 text-center mt-8">
              <Link href="/universe/characters">
                <span className="font-title text-xs tracking-widest uppercase text-gold hover:text-gold-soft transition-colors cursor-pointer">
                  Meet them in the Universe →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="font-editorial italic text-2xl text-lilac-soft leading-relaxed mb-8">
            "No one crosses The Threshold unchanged."
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.animalink.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/5 border border-gold/30 hover:border-gold/60 hover:bg-gold/5 transition-all duration-300 rounded-2xl px-6 py-4"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
              <path d="M3.18 23.5c-.34-.19-.56-.55-.56-.97V1.47c0-.42.22-.78.56-.97l11.7 11.5-11.7 11.5z" fill="#4CAF50"/>
              <path d="M18.82 16.18l-3.6-2.1-2.34 2.3 5.94 5.84c.24-.13.44-.34.56-.59l-.56-5.45z" fill="#F44336"/>
              <path d="M20.82 9.07l-2-1.17-3.94 3.87 2.14 2.1 3.8-2.2c.54-.31.54-2.29 0-2.6z" fill="#FFC107"/>
              <path d="M3.18.47c.24-.25.58-.39.93-.33l11.33 11.13-2.34 2.3L3.18.47z" fill="#2196F3"/>
            </svg>
            <div className="text-left">
              <p className="font-title text-xs tracking-widest uppercase text-muted">Get it on</p>
              <p className="font-title text-base text-white">Google Play</p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
