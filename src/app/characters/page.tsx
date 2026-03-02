import { Starfield } from "@/components/effects/Starfield";
import { SectionTag } from "@/components/ui/SectionTag";
import { CharacterCard } from "@/components/characters/CharacterCard";
import { getAvailableCharacters } from "@/data/characters";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Characters — Animalink",
  description: "Meet the residents of Furrapest. Each character is a living story.",
};

export default function CharactersPage() {
  const characters = getAvailableCharacters();

  return (
    <>
      <Starfield />
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <SectionTag centered>The Residents of Furrapest</SectionTag>
            <h1 className="font-title text-5xl md:text-7xl text-white mb-6">
              Every character is a <span className="gradient-text">living story</span>
            </h1>
            <p className="font-editorial italic text-lg text-lilac-soft max-w-xl mx-auto">
              Not generated. Not reset. They carry every conversation you&apos;ve ever had with them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
            
            {/* Coming Soon Card */}
            <div className="bg-card border border-dashed border-rim/50 rounded-2xl p-6 opacity-50 flex flex-col items-center justify-center text-center min-h-[400px]">
              <div className="text-5xl mb-4">?</div>
              <span className="font-title text-xs tracking-widest uppercase text-muted bg-rim px-3 py-1 rounded-full mb-3">
                Coming Soon
              </span>
              <h3 className="font-title text-lg text-white mb-2">???</h3>
              <p className="text-sm text-muted">A New Arrival</p>
              <p className="text-xs text-muted mt-2">Whispers in the old quarter speak of someone new crossing the Threshold...</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
