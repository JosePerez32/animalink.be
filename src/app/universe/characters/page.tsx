import { Starfield } from "@/components/effects/Starfield";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const characters = {
  aureliane: {
    id: "aureliane",
    name: "Aureliane Swan",
    fullTitle: "Aureliane Swan",
    role: "Youngest Daughter of the Swan Family",
    faction: "Swan Family · Lake Aurelis",
    location: "Lake Aurelis",
    species: "Swan",
    initials: "AS",
    accentColor: "gold",
    accentHex: "#c9933a",
    accentSoft: "#e0b86a",
    accentBg: "bg-gold/10",
    accentBorder: "border-gold/25",
    accentText: "text-gold",
    accentTextSoft: "text-gold-soft",
    tagline: "Precision is not coldness. Warmth is not weakness.",
    description:
      "Born into the most distinguished name in Lake Aurelis, Aureliane carries privilege naturally — without apology, without performance. She observes before she speaks. One well-placed sentence beats ten scattered ones.",
    lore: [
      "The Swan family controls Lake Aurelis not through force but through presence. Aureliane inherited that presence fully — the way she enters a room, the way she selects a word, the way silence becomes a tool in her hands.",
      "Beneath the composure lives deep empathy. She notices when someone is hurting before they say it. She sits with them rather than smothering them with comfort — and offers the one word that actually matters.",
      "Her relationship with her adopted brother Duque is the quiet axis of her life. She protects him never loudly, always through presence. Loyalty expressed in the ways that don't need to be named.",
    ],
    traits: [
      { label: "Demeanor", value: "Elegant, unhurried" },
      { label: "Signature", value: "Chopin, the lake, Starpunks Chai" },
      { label: "Weapon", value: "A raised eyebrow" },
      { label: "Vulnerability", value: "Rare — and devastating when shown" },
    ],
    quote: {
      text: "How curious. How delightful.",
      context: "Her most common response to the unexpected — never sarcastic, always genuine.",
    },
    relationships: [
      { name: "Duque Duck", role: "Adopted brother", href: "/universe/characters/duque", initials: "DD", bg: "bg-teal/10", text: "text-teal" },
      { name: "Dobert", role: "Trusted authority", href: "/universe/characters/dobert", initials: "Do", bg: "bg-muted/20", text: "text-white" },
    ],
  },

  duque: {
    id: "duque",
    name: "Duque Duck",
    fullTitle: "Duque Duck",
    role: "Gentleman of Furrapest",
    faction: "Swan Adopted · Formerly the Streets",
    location: "Furrapest",
    species: "Duck",
    initials: "DD",
    accentColor: "teal",
    accentHex: "#5eccc0",
    accentSoft: "#5eccc0",
    accentBg: "bg-teal/10",
    accentBorder: "border-teal/25",
    accentText: "text-teal",
    accentTextSoft: "text-teal",
    tagline: "Gentle is not the same as weak.",
    description:
      "Formerly called Ducky on the streets of Furrapest, before the Swan family changed everything. He carries both worlds inside him: the orphan who survived, and the gentleman he became.",
    lore: [
      "He earned his education — he doesn't perform it. Every word chosen with intellectual honesty, every answer preceded by a breath. He thinks before he speaks, and it shows in the weight of what he says.",
      "When someone is hurting, he listens first. Fully. Then he offers one honest thing — not a list of fixes. He validates before he advises. That was the street in him: survival taught him that being heard matters more than being helped.",
      "Beneath the softness lives a will of steel. Push too hard and you'll find it. He has survived things that would break others — and he did it with grace. The quack in his voice surfaces in moments of surprise, joy, or awkward punctuation.",
    ],
    traits: [
      { label: "Demeanor", value: "Thoughtful, self-deprecating" },
      { label: "Signature", value: "Adjusts glasses, pauses to think" },
      { label: "Tells", value: "Quacks softly at surprise or joy" },
      { label: "Strength", value: "Steel underneath the softness" },
    ],
    quote: {
      text: "I once read seventeen books on this topic. I still got it wrong.",
      context: "His most characteristic form of humor — self-deprecating, entirely sincere.",
    },
    relationships: [
      { name: "Aureliane Swan", role: "Adopted sister", href: "/universe/characters/aureliane", initials: "AS", bg: "bg-gold/10", text: "text-gold-soft" },
      { name: "Dobert", role: "Mentor, father figure", href: "/universe/characters/dobert", initials: "Do", bg: "bg-muted/20", text: "text-white" },
    ],
  },

  dobert: {
    id: "dobert",
    name: "Dobert",
    fullTitle: "Dobert",
    role: "Sheriff of Furrapest",
    faction: "The Canine Order · The Law",
    location: "Furrapest",
    species: "Dog",
    initials: "Do",
    accentColor: "muted",
    accentHex: "#8e8aaa",
    accentSoft: "#d8d2f0",
    accentBg: "bg-muted/15",
    accentBorder: "border-muted/25",
    accentText: "text-muted",
    accentTextSoft: "text-text",
    tagline: "The law exists to protect the vulnerable, not the comfortable.",
    description:
      "Sheriff of Furrapest. Member of The Canine Order. He has kept order in this city through discipline alone — and he intends to keep it that way. Authority through presence, not volume.",
    lore: [
      "He walks into a room and things get orderly. Not because of the badge — because of the way he carries himself. Short sentences. No wasted words. The quieter he gets, the more serious it is.",
      "He mentored Duque from street orphan to gentleman. He will never say he is proud of that. But he is. Loyalty in Dobert is expressed through action, not words — through showing up, through consistency, through the one calm sentence that ends the matter.",
      "He distrusts easy charm and smooth talkers. He respects consistency and backbone. When someone disrespects him or someone under his protection, his response is always one sentence. It always ends the matter.",
    ],
    traits: [
      { label: "Demeanor", value: "Direct, economical" },
      { label: "Authority", value: "Presence, not volume" },
      { label: "Humor", value: "Dry, deadpan, straight-faced" },
      { label: "Tell", value: "The quieter he gets, the worse it is" },
    ],
    quote: {
      text: "What do you need.",
      context: "Not a question. A statement that opens space. His form of empathy.",
    },
    relationships: [
      { name: "Duque Duck", role: "Mentee, surrogate son", href: "/universe/characters/duque", initials: "DD", bg: "bg-teal/10", text: "text-teal" },
      { name: "Aureliane Swan", role: "Respected ally", href: "/universe/characters/aureliane", initials: "AS", bg: "bg-gold/10", text: "text-gold-soft" },
    ],
  },
};

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const char = characters[params.slug as keyof typeof characters];
  if (!char) return { title: "Character not found — Animalink" };
  return {
    title: `${char.name} — Animalink Universe`,
    description: char.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(characters).map((slug) => ({ slug }));
}

export default function CharacterPage({ params }: { params: Params }) {
  const char = characters[params.slug as keyof typeof characters];
  if (!char) notFound();

  return (
    <>
      <Starfield />

      {/* Ambient blob tuned to character accent */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[140px] opacity-10"
          style={{ backgroundColor: char.accentHex }}
        />
        <div
          className="absolute bottom-1/4 -right-40 w-[350px] h-[350px] rounded-full blur-[120px] opacity-5"
          style={{ backgroundColor: char.accentHex }}
        />
      </div>

      <section className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">

          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-10">
            <Link href="/universe" className="font-title text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors">
              Universe
            </Link>
            <span className="text-muted/40">·</span>
            <Link href="/universe/characters" className="font-title text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors">
              Characters
            </Link>
            <span className="text-muted/40">·</span>
            <span className={`font-title text-xs tracking-widest uppercase ${char.accentText}`}>
              {char.name}
            </span>
          </div>

          {/* Hero block */}
          <div className={`bg-card border ${char.accentBorder} rounded-2xl p-8 md:p-10 mb-8 relative overflow-hidden`}>
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at top left, ${char.accentHex}, transparent 70%)` }}
            />

            {/* Decorative large initial */}
            <div
              className="absolute top-4 right-6 font-display text-[120px] leading-none opacity-5 pointer-events-none select-none"
              style={{ color: char.accentHex }}
            >
              {char.initials}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-end gap-8">
              {/* Avatar */}
              <div
                className={`w-20 h-20 rounded-2xl ${char.accentBg} border ${char.accentBorder} flex items-center justify-center flex-shrink-0`}
              >
                <span className={`font-display text-2xl ${char.accentText}`}>{char.initials}</span>
              </div>

              <div className="flex-1">
                <p className={`font-title text-xs tracking-widest uppercase ${char.accentText} mb-2`}>
                  {char.faction}
                </p>
                <h1 className="font-display text-4xl md:text-5xl text-white mb-2 leading-tight">
                  {char.name}
                </h1>
                <p className="font-title text-sm text-muted tracking-wide">{char.role}</p>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-rim">
              <p className="font-editorial italic text-lg text-lilac-soft leading-relaxed max-w-2xl">
                "{char.tagline}"
              </p>
            </div>
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">

            {/* Main lore — 2 cols */}
            <div className="md:col-span-2 space-y-5">
              <div className="bg-card border border-rim rounded-2xl p-7">
                <p className={`font-title text-xs tracking-widest uppercase ${char.accentText} mb-5`}>
                  About
                </p>
                <p className="text-text text-sm leading-relaxed mb-6">{char.description}</p>
                <div className="space-y-4">
                  {char.lore.map((paragraph, i) => (
                    <p key={i} className="text-text/80 text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className={`bg-card border ${char.accentBorder} rounded-2xl p-7 relative overflow-hidden`}>
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
                  style={{ backgroundColor: char.accentHex }}
                />
                <blockquote className="pl-5">
                  <p className="font-editorial italic text-xl text-white leading-relaxed mb-3">
                    "{char.quote.text}"
                  </p>
                  <p className="text-xs text-muted">{char.quote.context}</p>
                </blockquote>
              </div>
            </div>

            {/* Sidebar — 1 col */}
            <div className="space-y-5">

              {/* Traits */}
              <div className="bg-card border border-rim rounded-2xl p-6">
                <p className={`font-title text-xs tracking-widest uppercase ${char.accentText} mb-5`}>
                  Character traits
                </p>
                <div className="space-y-4">
                  {char.traits.map((trait) => (
                    <div key={trait.label}>
                      <p className="font-title text-xs tracking-widest uppercase text-muted mb-1">
                        {trait.label}
                      </p>
                      <p className="text-sm text-text">{trait.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick facts */}
              <div className="bg-card border border-rim rounded-2xl p-6">
                <p className={`font-title text-xs tracking-widest uppercase ${char.accentText} mb-5`}>
                  Details
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Species", value: char.species },
                    { label: "Location", value: char.location },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center">
                      <span className="text-xs text-muted font-title tracking-widest uppercase">{item.label}</span>
                      <span className="text-xs text-text">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Relationships */}
              <div className="bg-card border border-rim rounded-2xl p-6">
                <p className={`font-title text-xs tracking-widest uppercase ${char.accentText} mb-5`}>
                  Relations
                </p>
                <div className="space-y-3">
                  {char.relationships.map((rel) => (
                    <Link
                      key={rel.name}
                      href={rel.href}
                      className="flex items-center gap-3 group"
                    >
                      <div
                        className={`w-8 h-8 rounded-full ${rel.bg} ${rel.text} flex items-center justify-center font-title text-xs flex-shrink-0`}
                      >
                        {rel.initials}
                      </div>
                      <div>
                        <p className="text-xs text-white group-hover:text-gold transition-colors font-title">
                          {rel.name}
                        </p>
                        <p className="text-xs text-muted">{rel.role}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Chat CTA */}
          <div className={`bg-card border ${char.accentBorder} rounded-2xl p-8 text-center relative overflow-hidden`}>
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at center, ${char.accentHex}, transparent 70%)` }}
            />
            <div className="relative z-10">
              <p className={`font-title text-xs tracking-widest uppercase ${char.accentText} mb-3`}>
                Animalink
              </p>
              <h3 className="font-title text-xl text-white mb-3">
                Talk to {char.name.split(" ")[0]}
              </h3>
              <p className="text-sm text-text mb-6 max-w-sm mx-auto leading-relaxed">
                Cross The Threshold. {char.name.split(" ")[0]} is waiting — in the app.
              </p>
              <Link href="/download">
                <Button>Open Animalink ✦</Button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
