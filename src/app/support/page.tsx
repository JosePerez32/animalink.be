import { Starfield } from "@/components/effects/Starfield";
import { SectionTag } from "@/components/ui/SectionTag";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Animalink",
  description: "Help Center for Animalink. FAQ and contact information.",
};

const faqs = [
  { q: "Do characters really remember me?", a: "Yes. Animalink uses a persistent memory system that saves key details from your conversations." },
  { q: "Is the app truly free?", a: "The base app is free to download with no credit card required. Highborn ($4.99/mo) removes all limits." },
  { q: "What is the bond system?", a: "Each character tracks your relationship across five stages: Stranger → Acquaintance → Trusted → Confidant → Bonded." },
  { q: "What are spontaneous messages?", a: "Highborn users receive messages from characters outside of conversations — when something happens in Furrapest." },
];

export default function SupportPage() {
  return (
    <>
      <Starfield />
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <SectionTag centered>The Help Archive</SectionTag>
            <h1 className="font-title text-5xl md:text-6xl text-white mb-4">
              We remember<br /><span className="gradient-text">your questions</span>
            </h1>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-card border border-rim rounded-xl overflow-hidden [&[open]]:border-gold/20"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer font-title text-white hover:text-gold-soft transition-colors">
                  {faq.q}
                  <span className="text-gold text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-muted text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
