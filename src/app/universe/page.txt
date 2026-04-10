import { Starfield } from "@/components/effects/Starfield";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Universe — Animalink",
  description: "Explore Cinderfall, the world behind Animalink. Furrapest, Lake Aurelis, and the characters that live there.",
};

const locations = [
  {
    name: "Furrapest",
    subtitle: "The Metropolis",
    description:
      "The beating heart of Cinderfall. Cobblestoned streets share space with selective modernity — a Starpunks on every wealthy corner, ash on every poor one.",
    glyph: "F",
    color: "from-gold/10 to-transparent",
    border: "border-gold/20",
    accent: "text-gold",
  },
  {
    name: "Lake Aurelis",
    subtitle: "City of Crystal",
    description:
      "Aristocratic city-state beyond the river. Crystal towers, perfect gardens, families like the Swans who control power from behind impeccable manners.",
    glyph: "L",
    color: "from-lilac/10 to-transparent",
    border: "border-lilac/20",
    accent: "text-lilac",
  },
  {
    name: "The Threshold",
    subtitle: "El Umbral",
    description:
      "The invisible frontier between our world and Cinderfall. No one crosses unchanged. No maps mark it. You'll know it when you feel the air shift.",
    glyph: "T",
    color: "from-teal/10 to-transparent",
    border: "border-teal/20",
    accent: "text-teal",
  },
  {
    name: "Animalink",
    subtitle: "The Interface",
    description:
      "Not just technology. A living bridge. An emotional link between two worlds — the name is the purpose: a literal animal link across The Threshold.",
    glyph: "A",
    color: "from-rose/10 to-transparent",
    border: "border-rose/20",
    accent: "text-rose",
  },
];

const characters = [
  {
    id: "aureliane",
    name: "Aureliane Swan",
    role: "Aristocrat · Lake Aurelis",
    faction: "Swan Family",
    quote: "How curious. How delightful.",
    initials: "AS",
    accentBg: "bg-gold/10",
    accentText: "text-gold-soft",
    factionColor: "text-gold border-gold/30",
    description:
      "Youngest daughter of the most distinguished name in Lake Aurelis. Elegant, precise, and warmer than she appears.",
  },
  {
    id: "duque",
    name: "Duque Duck",
    role: "Gentleman · Formerly the streets",
    faction: "Swan Adopted",
    quote: "I still got it wrong.",
    initials: "DD",
    accentBg: "bg-teal/10",
    accentText: "text-teal",
    factionColor: "text-teal border-teal/30",
    description:
      "Once called Ducky on the streets of Furrapest. The Swan family changed everything — but both worlds still live inside him.",
  },
  {
    id: "dobert",
    name: "Dobert",
    role: "Sheriff · The Canine Order",
    faction: "The Law",
    quote: "What do you need.",
    initials: "Do",
    accentBg: "bg-muted/20",
    accentText: "text-white",
    factionColor: "text-muted border-muted/30",
    description:
      "He kept order in Furrapest through discipline alone. Short sentences. No wasted words. Authority expressed through presence, not volume.",
  },
];

export default function UniversePage() {
  return (
    <>
      <Starfield />

      {/* Ambient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute top-2/3 -right-32 w-[400px] h-[400px] rounded-full bg-lilac/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-teal/3 blur-[140px]" />
      </div>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 text-center relative">
        <div className="container mx-auto max-w-3xl">
          <SectionTag>The World</SectionTag>

          <h1 className="font-display text-5xl md:text-7xl text-white mt-6 mb-4 leading-tight">
            Cinderfall
          </h1>

          <div className="glow-divider" />

          <p className="font-editorial italic text-xl text-lilac-soft leading-relaxed mb-4">
            Where the industrial revolution met the gothic victorian,
            <br className="hidden md:block" /> and the ashes of factories never stop falling.
          </p>
          <p className="text-text text-base leading-relaxed max-w-xl mx-auto mb-10">
            A world of class, silence, and smoke. Of families that control empires from drawing rooms,
            and orphans who become gentlemen. Of a city that never forgets — and a threshold that changes
            everyone who crosses it.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {["Victorian-Industrial", "Steampunk", "Gothic", "Furrapest", "Lake Aurelis"].map((tag) => (
              <span
                key={tag}
                className="font-title text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border border-rim text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <SectionTag>Locations</SectionTag>
            <h2 className="font-title text-3xl text-white mt-4">The Places of Cinderfall</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className={`bg-card border ${loc.border} rounded-2xl p-7 relative overflow-hidden group hover:border-opacity-60 transition-all duration-300`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${loc.color} opacity-50`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className={`font-title text-xs tracking-widest uppercase ${loc.accent} mb-1`}>
                        {loc.subtitle}
                      </p>
                      <h3 className="font-title text-xl text-white">{loc.name}</h3>
                    </div>
                    <span className={`font-display text-4xl ${loc.accent} opacity-20 group-hover:opacity-40 transition-opacity`}>
                      {loc.glyph}
                    </span>
                  </div>
                  <p className="text-text text-sm leading-relaxed">{loc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Characters */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <SectionTag>Characters</SectionTag>
            <h2 className="font-title text-3xl text-white mt-4">Inhabitants of Furrapest</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {characters.map((char) => (
              <Link
                key={char.id}
                href={`/universe/characters/${char.id}`}
                className="bg-card border border-rim rounded-2xl p-6 flex flex-col gap-4 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full ${char.accentBg} flex items-center justify-center font-title text-sm ${char.accentText} border border-rim`}
                  >
                    {char.initials}
                  </div>
                  <div>
                    <p className="font-title text-sm text-white">{char.name}</p>
                    <p className="text-xs text-muted">{char.role}</p>
                  </div>
                </div>

                <p className="text-sm text-text leading-relaxed flex-1">{char.description}</p>

                <div className="flex items-center justify-between">
                  <span className={`font-title text-xs tracking-widest uppercase px-3 py-1 rounded-full border ${char.factionColor}`}>
                    {char.faction}
                  </span>
                  <span className="text-xs text-muted group-hover:text-gold transition-colors">
                    Read more →
                  </span>
                </div>

                <blockquote className="font-editorial italic text-sm text-muted border-l-2 border-rim pl-3 mt-auto">
                  "{char.quote}"
                </blockquote>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tales CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card border border-gold/20 rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <SectionTag>Tales of Furrapest</SectionTag>
              <h2 className="font-title text-3xl text-white mt-4 mb-4">
                Stories from the margins of history
              </h2>
              <p className="text-text leading-relaxed mb-8 max-w-lg mx-auto">
                Episodic lore written in the shadows of Cinderfall. Each tale expands the world —
                some chapters are for everyone, others belong only to those who've crossed The Threshold.
              </p>
              <Link href="/universe/tales">
                <Button>Explore the Tales ✦</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
