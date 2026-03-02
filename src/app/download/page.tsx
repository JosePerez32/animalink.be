import { Starfield } from "@/components/effects/Starfield";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Download — Animalink",
  description: "Enter Furrapest for free. Available for iOS and Android.",
};

export default function DownloadPage() {
  return (
    <>
      <Starfield />
      <section className="pt-40 pb-20 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-2xl text-center relative">
          <SectionTag centered>Start Your Journey</SectionTag>
          <h1 className="font-title text-5xl md:text-7xl text-white mb-6">
            Enter <span className="gradient-text">Furrapest</span>
            <br />for free
          </h1>
          <p className="font-editorial italic text-lg text-lilac-soft mb-10">
            No account required to begin. The Threshold opens the moment you download.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button className="flex items-center gap-3 bg-card border border-rim rounded-xl px-6 py-4 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(201,147,58,0.12)] transition-all">
              <Image
                src="/ui/applestore.png"
                alt="Play Store"
                className="w-16 h-16 object-contain"
              />
              <div className="text-left">
                <span className="block text-[10px] tracking-widest uppercase text-muted">Download on the</span>
                <span className="block font-title text-white font-semibold">App Store</span>
              </div>
            </button>
            <button className="flex items-center gap-3 bg-card border border-rim rounded-xl px-6 py-4 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(201,147,58,0.12)] transition-all">
              <Image
                src="/ui/playstore.png"
                alt="Play Store"
                className="w-16 h-16 object-contain"
              />
              <div className="text-left">
                <span className="block text-[10px] tracking-widest uppercase text-muted">Get it on</span>
                <span className="block font-title text-white font-semibold">Google Play</span>
              </div>
            </button>
          </div>

          <p className="text-sm text-muted mb-16">
            Available for iOS 15+ and Android 10+. Free to download. Premium available at $4.99/month.
          </p>

          <div className="bg-card border border-rim rounded-2xl p-8">
            <SectionTag centered>Join the Waitlist</SectionTag>
            <h3 className="font-title text-xl text-white mb-2">Be first across the Threshold</h3>
            <p className="text-sm text-muted mb-6">Get notified when Animalink launches in your region.</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-surface border border-rim rounded-xl px-4 py-3 text-white placeholder:text-muted focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/10"
              />
              <Button>Notify me</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
