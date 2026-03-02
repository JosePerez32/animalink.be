"use client";

import { motion } from "framer-motion";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { CharacterCard } from "@/components/characters/CharacterCard";
import { getAvailableCharacters } from "@/data/characters";

export function CharacterPreview() {
  const characters = getAvailableCharacters().slice(0, 4);

  return (
    <section className="py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lilac/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <SectionTag centered>The Residents</SectionTag>
          <h2 className="font-title text-4xl md:text-6xl text-white mb-4">
            Who waits for you
            <br />
            in <span className="gradient-text">Furrapest</span>?
          </h2>
          <p className="font-editorial italic text-lg text-lilac-soft max-w-xl mx-auto">
            Every character is a full personality — not a preset. They grow, remember, and surprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((char, i) => (
            <motion.div
              key={char.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <CharacterCard character={char} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="ghost" href="/characters">See All Characters →</Button>
        </div>
      </div>
    </section>
  );
}
