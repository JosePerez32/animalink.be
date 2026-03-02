import { Starfield } from "@/components/effects/Starfield";
import { Hero } from "@/components/home/Hero";
import { StatStrip } from "@/components/home/StatStrip";
import { WhatIs } from "@/components/home/WhatIs";
import { CharacterPreview } from "@/components/home/CharacterPreview";
import { CTABanner } from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Starfield />
      <Hero />
      <StatStrip />
      <WhatIs />
      <CharacterPreview />
      <CTABanner />
    </>
  );
}
