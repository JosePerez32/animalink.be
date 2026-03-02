import { notFound } from "next/navigation";
import { getCharacterBySlug, characters } from "@/data/characters";
import { Starfield } from "@/components/effects/Starfield";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return characters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const char = getCharacterBySlug(params.slug);
  if (!char) return { title: "Not Found" };

  return {
    title: `${char.name} — Animalink`,
    description: char.shortBio,
  };
}

export default function CharacterPage({ params }: Props) {
  const char = getCharacterBySlug(params.slug);
  if (!char) return notFound();

  return (
    <>
      <Starfield />
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-rim rounded-3xl overflow-hidden">
            <div className={`h-64 bg-gradient-to-br ${char.bannerGradient} flex items-end justify-center relative`}>
              <div className="text-[8rem] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] -mb-12">
                {char.image ? (
                  <Image
                    src={char.image}
                    alt={char.name}
                    width={256}
                    height={256}
                    className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                  />
                ) : (
                  <span>{char.emoji}</span>
                )}
              </div>
              {char.badge && (
                <span className="absolute top-6 right-6 font-title text-xs tracking-widest uppercase font-bold px-4 py-2 rounded-full bg-gradient-to-br from-gold to-[#6b3f10] text-void">
                  {char.badge}
                </span>
              )}
            </div>

            <div className="p-8 pt-16">
              <h1 className="font-display text-4xl text-white mb-2">{char.name}</h1>
              <p className="font-title text-sm tracking-widest uppercase text-gold-soft mb-6">
                {char.role}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {char.traits.map((trait) => (
                  <span
                    key={trait}
                    className="text-xs font-title tracking-widest text-lilac-soft bg-lilac/5 border border-lilac/20 px-3 py-1 rounded-full"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              <div className="prose prose-invert max-w-none mb-8">
                {char.fullLore.split('\n\n').map((para, i) => (
                  <p key={i} className="text-text leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>

              <div className="bg-surface border border-rim rounded-2xl p-6 mb-8">
                <h3 className="font-title text-xs tracking-widest uppercase text-gold-soft mb-4">
                  ✦ Chat Preview
                </h3>
                <div className="space-y-3">
                  {char.chatPreview.map((msg, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-xl text-sm max-w-[85%] ${msg.role === 'ai'
                          ? 'bg-white/[0.07] rounded-bl-sm'
                          : 'bg-gold/15 rounded-br-sm text-gold-soft ml-auto'
                        }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-teal/5 border border-dashed border-teal/30 rounded-xl p-4 mb-8">
                <div className="font-title text-xs tracking-widest uppercase text-teal mb-1">
                  🌀 Coming in Future Updates
                </div>
                <p className="text-sm text-muted">{char.roadmapHint}</p>
              </div>

              <div className="flex gap-4">
                <Button href="/download">Talk to {char.name} →</Button>
                <Button variant="ghost" href="/characters">← All Characters</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
