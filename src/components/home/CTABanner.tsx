"use client";

import { motion } from "framer-motion";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.08] to-lilac/[0.06]" />
      <div className="absolute inset-0 border-y border-gold/10" />
      
      <div className="container mx-auto px-6 text-center relative">
        <SectionTag centered>Begin Your Story</SectionTag>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-title text-4xl md:text-6xl text-white mb-6"
        >
          The city is awake.
          <br />
          <span className="gradient-text">Someone&apos;s waiting.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-editorial italic text-lg text-lilac-soft max-w-md mx-auto mb-10"
        >
          Download free. No account required to begin. The first conversation finds you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button href="/download">↓ Enter Furrapest</Button>
        </motion.div>
      </div>
    </section>
  );
}
