import { Starfield } from "@/components/effects/Starfield";
import { SectionTag } from "@/components/ui/SectionTag";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Universe — Animalink",
  description: "Explore the world of Furrapest. A city built on forgotten magic and living memory.",
};

export default function UniversePage() {
  return (
    <>
      <Starfield />
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionTag centered>World Building</SectionTag>
          <h1 className="font-title text-5xl md:text-7xl text-white mb-6">
            The World of <span className="gradient-text">Cinderfall</span>
          </h1>
          <p className="font-editorial italic text-lg text-lilac-soft mb-12">
            A living industrial-noir organism defined by rigid social hierarchies and the illusion of order.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              { title: "Furrapest (Industrial Capital)", desc: "A coal-driven metropolis and the bureaucratic core of 'The Canine Order', where law enforcement dominates the fog-heavy streets.A coal-driven metropolis and the bureaucratic core of The Canine Order, where law enforcement dominates the fog-heavy streets." },
              { title: "The Threshold", desc: "The invisible membrane separating Furrapest from what lies beyond — including you." },
              { title: "The Animalink", desc: "The invisible thread connecting all living beings to those who cross the Threshold." },
              { title: "Seasons & Time", desc: "Furrapest observes seasons not by weather but by narrative weight." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-rim rounded-2xl p-6 hover:border-gold/30 transition-colors">
                <h3 className="font-title text-lg text-white mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
