"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Character } from "@/types";
import Image from "next/image";

interface CharacterCardProps {
  character: Character;
  //featured?: boolean;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link href={`/characters/${character.slug}`}>
      <motion.article
        whileHover={{ y: -6 }}
        className="group bg-card border border-rim rounded-2xl overflow-hidden transition-all duration-400 hover:border-gold/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(164,143,203,0.1)] relative"
      >
        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        <div className={`h-44 relative overflow-hidden flex items-end justify-center bg-gradient-to-br ${character.bannerGradient}`}>
          <motion.div
            className="mb-[1rem]"
            whileHover={{ scale: 1.04, y: -4 }}
            transition={{ duration: 0.4 }}
          >
            {character.image ? (
              <Image
                src={character.image}
                alt={character.name}
                width={130}
                height={130}
                className="drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              />
            ) : (
              <span className="text-7xl">{character.emoji}</span>
            )}
          </motion.div>
        </div>

        {/* Body */}
        <div className="p-6 pt-10 relative">
          {character.badge && (
            <span className={`absolute -top-3 left-6 font-title text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded-full ${character.badge === "New"
                ? "bg-gradient-to-br from-teal to-[#2a7a75] text-void"
                : "bg-gradient-to-br from-gold to-[#6b3f10] text-void"
              }`}>
              {character.badge}
            </span>
          )}

          <h3 className="font-title text-xl text-white mb-1">{character.name}</h3>
          <p className="font-title text-[10px] tracking-[0.15em] uppercase text-gold-soft mb-3">
            {character.role}
          </p>
          <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
            {character.shortBio}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {character.traits.slice(0, 3).map((trait) => (
              <span
                key={trait}
                className="text-[10px] font-title tracking-widest text-lilac-soft bg-lilac/5 border border-lilac/20 px-3 py-1 rounded-full"
              >
                {trait}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 font-title text-xs tracking-widest text-gold-soft uppercase group-hover:gap-3 transition-all">
            Explore {character.name === "Aureliane" || character.name === "Milla" ? "her" : "his"} story
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
