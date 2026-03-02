import { Starfield } from "@/components/effects/Starfield";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Animalink",
  description: "Talk to the makers of Animalink.",
};

export default function ContactPage() {
  return (
    <>
      <Starfield />
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionTag>Reach Out</SectionTag>
              <h1 className="font-title text-4xl text-white mb-6">Talk to<br />the makers</h1>
              <p className="text-text leading-relaxed mb-8">
                We&apos;re a small team with a big universe. Every message is read by a human who cares about Furrapest as much as you do.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: "✉️", text: "hello@animalink.app", href: "mailto:hello@animalink.app" },
                  { icon: "💬", text: "Community Discord", href: "#" },
                  { icon: "🐦", text: "@animalinkapp", href: "#" },
                ].map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    className="flex items-center gap-4 p-4 bg-card border border-rim rounded-xl hover:border-gold/40 transition-colors"
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-sm text-text">{link.text}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-8">
              <h3 className="font-title text-xl text-white mb-2">Send a message</h3>
              <p className="text-sm text-muted mb-6">A real person reads this. Not an AI.</p>
              
              <form className="space-y-4">
                <div>
                  <label className="block font-title text-xs tracking-widest uppercase text-muted mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-surface border border-rim rounded-xl px-4 py-3 text-white focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/10"
                    placeholder="How the characters will know you"
                  />
                </div>
                <div>
                  <label className="block font-title text-xs tracking-widest uppercase text-muted mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-surface border border-rim rounded-xl px-4 py-3 text-white focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/10"
                    placeholder="For our reply"
                  />
                </div>
                <div>
                  <label className="block font-title text-xs tracking-widest uppercase text-muted mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-surface border border-rim rounded-xl px-4 py-3 text-white focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/10 resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>
                <Button fullWidth>Send Message ✦</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
