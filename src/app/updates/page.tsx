import { Starfield } from "@/components/effects/Starfield";
import { SectionTag } from "@/components/ui/SectionTag";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Updates — Animalink",
  description: "Latest news and updates from Furrapest.",
};

export default function UpdatesPage() {
  return (
    <>
      <Starfield />
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <SectionTag>Dispatches from Furrapest</SectionTag>
              <h1 className="font-title text-4xl md:text-5xl text-white">Updates & Lore Events</h1>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2 bg-card border border-rim rounded-2xl overflow-hidden hover:border-gold/40 transition-colors">
              <div className="h-48 bg-gradient-to-br from-lilac/20 to-gold/10 flex items-center justify-center text-6xl">
                <Image
                  src="../../characters/milla-update.png"
                  alt="Milla"
                  width={350}
                  height={150}
                  className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-full"
                />
              </div>
              <div className="p-8">
                <div className="font-title text-xs tracking-widest uppercase text-gold-soft mb-2">Major Update · v1.3</div>
                <h2 className="font-title text-xl text-white mb-3">New Resident — Milla Arrives</h2>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  Milla Vik, a quiet and perceptive rabbit, is now available for conversation.
                  Her slow-burn introduction arc unfolds over multiple encounters.
                </p>
                <div className="text-xs text-muted">March 20, 2026</div>
              </div>
            </div>

            {[
              { cat: "System Update", title: "Bond memory now persists across reinstalls", date: "Feb 12, 2026" },
              {
                cat: "Lore Event — The Lantern Quarter Falls Silent", title: "Something changes in one of Furrapest's oldest districts. Residents react differently — depending on who you know.",
                date: "Jan 30, 2026"
              },
              { cat: "Feature — Characters Reach Out First", title: "Residents may initiate conversations on their own. Not randomly. For a reason.", date: "Jun 15, 2026" },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-rim rounded-xl p-6 hover:border-gold/30 hover:translate-x-1 transition-all">
                <div className="font-title text-xs tracking-widest uppercase text-gold-soft mb-2">{item.cat}</div>
                <h3 className="font-title text-white mb-2">{item.title}</h3>
                <div className="text-xs text-muted">{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
