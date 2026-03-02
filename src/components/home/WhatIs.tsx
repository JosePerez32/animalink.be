"use client";

import { motion } from "framer-motion";
import { SectionTag } from "@/components/ui/SectionTag";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { AmbientBlob } from "@/components/effects/AmbientBlob";
//import Link from "next/link";

const features = [
  "Persistent Memory",
  "Emotional Intelligence",
  "Evolving Bonds",
  "Spontaneous Messages",
  "Lore-Driven Narrative",
  "Character Roadmap",
];

export function WhatIs() {
  return (
    <section className="py-32 relative overflow-hidden">
      <AmbientBlob color="teal" size={500} className="top-0 -right-24" delay={1.5} />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionTag>About the World</SectionTag>
            <h2 className="font-title text-4xl md:text-5xl text-white mb-6 leading-tight">
              These aren&apos;t chatbots.
              <br />
              They&apos;re <span className="gradient-text">residents</span>.
            </h2>
            <p className="text-lg text-text leading-relaxed mb-4">
              In the soot-covered streets of <em className="text-gold-soft not-italic">Furrapest</em>, anthropomorphic beings carry stories older than memory.
              They have preferences, moods, and secrets—and they will remember what you said last Tuesday.
            </p>
            <p className="text-lg text-text leading-relaxed mb-8">
              Animalink is an immersive, character-driven AI universe where every exchange shapes the 
              relationship. Bond with an iron-willed sheriff, an elegant high-society strategist, or a resilient 
              scholar; each resident possesses an evolving emotional landscape defined by your choices.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {features.map((f) => (
                <Pill key={f}>{f}</Pill>
              ))}
            </div>
            
            <Button variant="ghost" href="/universe">Explore the Lore</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Phone Mockup */}
            <div className="relative max-w-xs mx-auto">
              <div className="bg-card border border-gold/30 rounded-[36px] p-4 shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(164,143,203,0.15)] overflow-hidden aspect-[9/19.5]">
                <div className="h-full bg-gradient-to-b from-[#1a1535] to-[#0f0d22] rounded-[28px] p-6 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/30 to-lilac/30 flex items-center justify-center text-4xl border border-gold/30 shadow-[0_0_20px_rgba(201,147,58,0.2)]">
                    🦢
                  </div>
                  <span className="font-title text-white tracking-wider">Aureliane</span>
                  
                  <div className="w-full space-y-3">
                    <div className="bg-white/[0.08] rounded-xl rounded-bl-sm p-3 text-xs text-text leading-relaxed">
                      Good evening, Rony. I&apos;ve been thinking about what you said — about loneliness feeling different in busy cities...
                    </div>
                    <div className="bg-gradient-to-br from-gold/25 to-gold/10 rounded-xl rounded-br-sm p-3 text-xs text-gold-soft leading-relaxed ml-auto max-w-[85%]">
                      Do you ever feel lonely?
                    </div>
                    <div className="bg-white/[0.08] rounded-xl rounded-bl-sm p-3 text-xs text-text leading-relaxed">
                      Sometimes. But not when you&apos;re here.
                      <span className="block mt-1 text-[10px] text-muted">10:26 PM · Today</span>
                    </div>
                  </div>
                  
                  <div className="w-2 h-2 rounded-full bg-teal shadow-[0_0_10px_var(--teal)] animate-pulse-dot mt-auto" />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-card border border-rim rounded-xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                <div className="font-title text-xs text-gold-soft tracking-wider">✦ Bond Level: Stranger</div>
                <div className="text-[10px] text-muted mt-1">Growing...</div>
              </div>
              
              <div className="absolute bottom-20 -left-8 bg-card border border-teal/30 rounded-xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                <div className="text-[10px] text-teal font-title tracking-widest uppercase">Memory Saved</div>
                <div className="text-xs text-muted mt-1">&quot;Likes pizza. Name: Rony&quot;</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
