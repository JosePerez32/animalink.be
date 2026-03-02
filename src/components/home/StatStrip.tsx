"use client";

import { motion } from "framer-motion";

const stats = [
  { num: "5+", label: "Unique Characters" },
  { num: "∞", label: "Conversations Remembered" },
  { num: "1", label: "Living Universe" },
];

export function StatStrip() {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent via-gold/[0.04] to-transparent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-void p-12 text-center hover:bg-gold/[0.04] transition-colors"
            >
              <span className="font-display text-5xl md:text-6xl text-gold-soft drop-shadow-[0_0_30px_rgba(201,147,58,0.3)] block">
                {stat.num}
              </span>
              <span className="font-title text-xs tracking-widest uppercase text-muted mt-2 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
