"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AmbientBlob } from "@/components/effects/AmbientBlob";
//import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(164,143,203,0.15)_0%,transparent_60%),radial-gradient(ellipse_80%_60%_at_80%_100%,rgba(201,147,58,0.1)_0%,transparent_60%),radial-gradient(ellipse_60%_40%_at_10%_80%,rgba(94,204,192,0.07)_0%,transparent_50%)]" />
      
      <AmbientBlob color="gold" size={700} className="-top-52 -left-52" />
      <AmbientBlob color="lilac" size={600} className="-bottom-24 -right-36" delay={3} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-title text-xs tracking-[0.3em] uppercase text-gold-soft mb-8"
        >
          ✦ An AI Universe Unlike Any Other ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 drop-shadow-[0_0_60px_rgba(201,147,58,0.2)]"
        >
          Step into
          <span className="block text-gold-soft">Animalink</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="font-editorial italic text-lg md:text-xl text-lilac-soft max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Where living characters remember you, grow with you, and carry their own secrets.
          Not chatbots — <em>companions</em>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button href="/download">↓ Download Free</Button>
          <Button variant="ghost" href="/characters">Meet the Residents</Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-title text-xs tracking-widest text-muted">Discover</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent animate-scroll-line" />
      </motion.div>
    </section>
  );
}
