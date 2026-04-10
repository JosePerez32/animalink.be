import { Starfield } from "@/components/effects/Starfield";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tales of Furrapest — Animalink",
  description: "Episodic lore from the world of Cinderfall. Stories of Furrapest, Lake Aurelis, and the characters who live there.",
};

const tales = [
  {
    id: "the-night-the-lamps-went-out",
    episode: "01",
    title: "The Night the Lamps Went Out",
    subtitle:
      "A blackout in Furrapest reveals what the city hides in the dark — and Dobert is the only one standing between order and something older.",
    characters: [{ initials: "Do", label: "Dobert", bg: "bg-muted/20", text: "text-white" }],
    tags: ["Dobert", "Furrapest"],
    tagColors: ["text-muted border-muted/30", "text-gold border-gold/30"],
    readTime: "6 min",
    featured: true,
    locked: false,
  },
  {
    id: "a-swan-does-not-explain-herself",
    episode: "02",
    title: "A Swan Does Not Explain Herself",
    subtitle: "Aureliane receives a letter from someone who should not know her name.",
    characters: [{ initials: "AS", label: "Aureliane", bg: "bg-gold/10", text: "text-gold-soft" }],
    tags: ["Aureliane", "Lake Aurelis"],
    tagColors: ["text-gold border-gold/30", "text-lilac border-lilac/30"],
    readTime: "5 min",
    featured: false,
    locked: false,
  },
  {
    id: "seventeen-books-and-still-wrong",
    episode: "03",
    title: "Seventeen Books and Still Wrong",
    subtitle:
      "Duque traces his origins to a street in Furrapest that no longer exists on any map.",
    characters: [{ initials: "DD", label: "Duque", bg: "bg-teal/10", text: "text-teal" }],
    tags: ["Duque", "Origin story"],
    tagColors: ["text-teal border-teal/30", "text-lilac border-lilac/30"],
    readTime: "7 min",
    featured: false,
    locked: false,
  },
  {
    id: "what-dobert-saw-at-the-threshold",
    episode: "04",
    title: "What Dobert Saw at The Threshold",
    subtitle:
      "Some cases are not meant for the public record. This one never left the desk drawer.",
    characters: [{ initials: "Do", label: "Dobert", bg: "bg-muted/20", text: "text-white" }],
    tags: ["Dobert", "The Threshold"],
    tagColors: ["text-muted border-muted/30", "text-teal border-teal/30"],
    readTime: "8 min",
    featured: false,
    locked: true,
  },
  {
    id: "the-swan-and-the-duck",
    episode: "05",
    title: "The Swan & the Duck",
    subtitle:
      "The night Aureliane convinced Dobert to give a street orphan one more chance.",
    characters: [
      { initials: "AS", label: "Aureliane", bg: "bg-gold/10", text: "text-gold-soft" },
      { initials: "DD", label: "Duque", bg: "bg-teal/10", text: "text-teal" },
      { initials: "Do", label: "Dobert", bg: "bg-muted/20", text: "text-white" },
    ],
    tags: ["All characters", "Origin story"],
    tagColors: ["text-rose border-rose/30", "text-lilac border-lilac/30"],
    readTime: "10 min",
    featured: false,
    locked: true,
  },
];

const filters = ["All tales", "Aureliane", "Duque", "Dobert", "Lake Aurelis", "Furrapest"];

const featuredTale = tales.find((t) => t.featured)!;
const restTales = tales.filter((t) => !t.featured);

export default function TalesPage() {
  return (
    <>
      <Starfield />

      {/* Ambient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/3 -left-40 w-[450px] h-[450px] rounded-full bg-gold/4 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[350px] h-[350px] rounded-full bg-lilac/5 blur-[120px]" />
      </div>

      <section className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">

          {/* Header */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-2">
              <Link href="/universe" className="text-xs text-muted hover:text-gold transition-colors font-title tracking-widest uppercase">
                Universe
              </Link>
              <span className="text-muted/40">·</span>
              <span className="text-xs text-gold font-title tracking-widest uppercase">Tales</span>
            </div>
            <SectionTag>Tales of Furrapest</SectionTag>
            <h1 className="font-title text-4xl md:text-5xl text-white mt-4 mb-5 leading-tight">
              Stories from Cinderfall
            </h1>
            <p className="text-text leading-relaxed max-w-xl">
              Episodic lore written in the margins of history. Each tale expands the world —
              some chapters are for everyone, others belong to those who've crossed The Threshold.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f, i) => (
              <button
                key={f}
                className={`font-title text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border transition-all duration-200 ${
                  i === 0
                    ? "border-gold/50 text-gold bg-gold/5"
                    : "border-rim text-muted hover:border-gold/30 hover:text-text"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Featured tale */}
          <div className="bg-card border border-gold/25 rounded-2xl p-8 mb-6 relative overflow-hidden group hover:border-gold/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
            <div className="relative z-10 flex gap-8 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-title text-xs tracking-widest uppercase text-gold">
                    Episode {featuredTale.episode}
                  </span>
                  <span className="font-title text-xs tracking-widest uppercase px-2 py-0.5 rounded-full border border-gold/30 text-gold bg-gold/5">
                    Featured
                  </span>
                </div>
                <h2 className="font-title text-2xl text-white mb-3 leading-snug">
                  {featuredTale.title}
                </h2>
                <p className="text-text text-sm leading-relaxed mb-5">{featuredTale.subtitle}</p>
                <div className="flex flex-wrap items-center gap-3">
                  {featuredTale.tags.map((tag, i) => (
                    <span
                      key={tag}
                      className={`font-title text-xs tracking-widest uppercase px-3 py-1 rounded-full border ${featuredTale.tagColors[i]}`}
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-muted">{featuredTale.readTime} read</span>
                </div>
              </div>

              {/* Decorative glyph */}
              <div className="hidden md:flex w-20 h-20 rounded-2xl bg-surface border border-gold/15 items-center justify-center flex-shrink-0">
                <span className="font-display text-3xl text-gold opacity-40 group-hover:opacity-70 transition-opacity">
                  01
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-6 pt-5 border-t border-rim">
              <button className="font-title text-xs tracking-widest uppercase text-gold hover:text-gold-soft transition-colors">
                Read this tale →
              </button>
            </div>
          </div>

          {/* Tale grid */}
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {restTales.map((tale) => (
              <div
                key={tale.id}
                className={`bg-card border rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 ${
                  tale.locked
                    ? "border-rim opacity-60 cursor-default"
                    : "border-rim hover:border-gold/30 cursor-pointer"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-title text-xs tracking-widest uppercase text-muted">
                        Episode {tale.episode}
                      </span>
                      {tale.locked && (
                        <span className="font-title text-xs tracking-widest uppercase px-2 py-0.5 rounded-full border border-gold/20 text-gold/60 bg-gold/5">
                          Crown
                        </span>
                      )}
                    </div>
                    <h3 className="font-title text-base text-white leading-snug mb-2">
                      {tale.title}
                    </h3>
                  </div>
                  {tale.locked && (
                    <span className="text-muted/50 text-lg mt-1 flex-shrink-0">🔒</span>
                  )}
                </div>

                <p className="text-sm text-text leading-relaxed flex-1">{tale.subtitle}</p>

                <div className="flex items-center justify-between pt-2 border-t border-rim/50">
                  {/* Character dots */}
                  <div className="flex -space-x-2">
                    {tale.characters.map((c) => (
                      <div
                        key={c.initials}
                        className={`w-7 h-7 rounded-full ${c.bg} ${c.text} flex items-center justify-center font-title text-xs border border-void`}
                        title={c.label}
                      >
                        {c.initials}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {tale.tags.slice(0, 1).map((tag, i) => (
                      <span
                        key={tag}
                        className={`font-title text-xs tracking-widest uppercase px-2 py-0.5 rounded-full border ${tale.tagColors[i]}`}
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-xs text-muted">{tale.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Crown banner */}
          <div className="bg-card border border-gold/20 rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent pointer-events-none" />
            <div className="relative z-10 text-center md:text-left">
              <p className="font-title text-xs tracking-widest uppercase text-gold mb-2">Crown Vault</p>
              <h3 className="font-title text-lg text-white mb-1">
                2 tales are locked behind the Crown Vault
              </h3>
              <p className="text-sm text-text">
                Crown subscribers unlock exclusive lore, backstories, and new episodes first.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <Link href="/premium">
                <Button>Unlock with Crown ✦</Button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
