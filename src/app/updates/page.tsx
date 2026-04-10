import { Starfield } from "@/components/effects/Starfield";
import { SectionTag } from "@/components/ui/SectionTag";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates — Animalink",
  description: "What's new in Animalink. Release notes, new characters, lore drops, and the road ahead.",
};

type UpdateTag = "Release" | "Characters" | "Lore" | "Roadmap" | "Fix";

const tagColors: Record<UpdateTag, string> = {
  Release: "text-gold border-gold/30",
  Characters: "text-teal border-teal/30",
  Lore: "text-lilac border-lilac/30",
  Roadmap: "text-rose border-rose/30",
  Fix: "text-muted border-muted/30",
};

const updates = [
  {
    id: "launch",
    date: "Coming soon",
    tag: "Release" as UpdateTag,
    title: "Animalink 1.0 — Furrapest opens its doors",
    excerpt:
      "The first public release of Animalink. Three characters, the full Universe section, Tales of Furrapest, and the Crown subscription system. The Threshold is open.",
    featured: true,
    items: [
      "Aureliane Swan, Duque Duck, and Dobert available",
      "Streetborn, Highborn, and Crownbound subscription tiers",
      "Universe section with full Cinderfall lore",
      "Tales of Furrapest — Episodes 01–03 free, 04–05 Crown exclusive",
      "Crown Vault with Obsidian and Aurora themes",
      "Google Play release for Android 8.0+",
    ],
  },
  {
    id: "roadmap-q2",
    date: "Roadmap · Q2",
    tag: "Roadmap" as UpdateTag,
    title: "What's coming next",
    excerpt:
      "A look at what the Animalink team is building for the months ahead. New faces in Furrapest, deeper conversations, and features built from community feedback.",
    featured: false,
    items: [
      "New character from Cinderfall (TBA)",
      "Cross-session memory for Crown subscribers",
      "New Tales of Furrapest episodes",
      "iOS App Store release",
      "Notification system improvements",
    ],
  },
  {
    id: "universe-launch",
    date: "Roadmap · Later",
    tag: "Lore" as UpdateTag,
    title: "The Cinderfall Codex",
    excerpt:
      "A dedicated in-app lore compendium — faction maps, character timelines, and the full history of Furrapest. For those who want to go deeper.",
    featured: false,
    items: [
      "Interactive map of Furrapest and Lake Aurelis",
      "Character relationship timelines",
      "Faction lore: The Canine Order, The Swan Family",
      "Unlockable entries as you interact with characters",
    ],
  },
];

const FeaturedUpdate = ({ update }: { update: (typeof updates)[0] }) => (
  <div className="bg-card border border-gold/25 rounded-2xl overflow-hidden mb-6 relative hover:border-gold/40 transition-all duration-300">
    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
    <div className="p-8 md:p-10">
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <span className={`font-title text-xs tracking-widest uppercase px-3 py-1 rounded-full border ${tagColors[update.tag]}`}>
          {update.tag}
        </span>
        <span className="font-title text-xs tracking-widest uppercase text-muted">
          {update.date}
        </span>
        <span className="font-title text-xs tracking-widest uppercase px-2 py-0.5 rounded-full bg-gold/10 border border-gold/30 text-gold">
          Latest
        </span>
      </div>

      <h2 className="font-title text-2xl md:text-3xl text-white mb-4 leading-snug">
        {update.title}
      </h2>
      <p className="text-text leading-relaxed mb-7 max-w-2xl">{update.excerpt}</p>

      <div className="space-y-2 border-t border-rim pt-6">
        {update.items.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-gold text-xs mt-1 flex-shrink-0">✦</span>
            <p className="text-sm text-text">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const UpdateCard = ({ update }: { update: (typeof updates)[0] }) => (
  <div className="bg-card border border-rim rounded-2xl p-7 hover:border-gold/20 transition-all duration-300">
    <div className="flex flex-wrap items-center gap-3 mb-4">
      <span className={`font-title text-xs tracking-widest uppercase px-3 py-1 rounded-full border ${tagColors[update.tag]}`}>
        {update.tag}
      </span>
      <span className="font-title text-xs tracking-widest uppercase text-muted">
        {update.date}
      </span>
    </div>

    <h3 className="font-title text-lg text-white mb-3 leading-snug">{update.title}</h3>
    <p className="text-sm text-text leading-relaxed mb-5">{update.excerpt}</p>

    <div className="space-y-2 border-t border-rim pt-5">
      {update.items.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <span className="text-muted text-xs mt-1 flex-shrink-0">◎</span>
          <p className="text-xs text-text">{item}</p>
        </div>
      ))}
    </div>
  </div>
);

export default function UpdatesPage() {
  const featured = updates.find((u) => u.featured)!;
  const rest = updates.filter((u) => !u.featured);

  return (
    <>
      <Starfield />

      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -right-32 w-[450px] h-[450px] rounded-full bg-gold/4 blur-[130px]" />
        <div className="absolute bottom-1/3 -left-32 w-[350px] h-[350px] rounded-full bg-lilac/5 blur-[120px]" />
      </div>

      <section className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">

          {/* Header */}
          <div className="mb-14">
            <SectionTag>Updates</SectionTag>
            <h1 className="font-title text-4xl md:text-5xl text-white mt-4 mb-5 leading-tight">
              What's new in<br />Animalink
            </h1>
            <p className="text-text leading-relaxed max-w-xl">
              Release notes, new characters, lore drops, and the road ahead.
              Furrapest is always growing.
            </p>
          </div>

          {/* Tag legend */}
          <div className="flex flex-wrap gap-2 mb-12">
            {(Object.keys(tagColors) as UpdateTag[]).map((tag) => (
              <span
                key={tag}
                className={`font-title text-xs tracking-widest uppercase px-3 py-1 rounded-full border ${tagColors[tag]}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Featured */}
          <FeaturedUpdate update={featured} />

          {/* Rest */}
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {rest.map((u) => (
              <UpdateCard key={u.id} update={u} />
            ))}
          </div>

          {/* Stay updated CTA */}
          <div className="bg-card border border-lilac/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-lilac/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <p className="font-title text-xs tracking-widest uppercase text-lilac mb-2">
                Stay in the loop
              </p>
              <h3 className="font-title text-lg text-white mb-1">
                New updates drop without warning
              </h3>
              <p className="text-sm text-text">
                Crown subscribers get first looks. Everyone else finds out when the gates open.
              </p>
            </div>
            <div className="relative z-10 flex gap-3 flex-shrink-0 flex-wrap">
              <Link
                href="/premium"
                className="font-title text-xs tracking-widest uppercase px-5 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/5 transition-all duration-200 whitespace-nowrap"
              >
                Get Crown ✦
              </Link>
              <Link
                href="/download"
                className="font-title text-xs tracking-widest uppercase px-5 py-3 rounded-full border border-rim text-muted hover:border-gold/20 hover:text-text transition-all duration-200 whitespace-nowrap"
              >
                Download
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
