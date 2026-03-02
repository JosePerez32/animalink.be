"use client";

import { cn } from "@/lib/utils";

interface AmbientBlobProps {
  color: "gold" | "lilac" | "rose" | "teal";
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

const colorMap = {
  gold: "bg-gold/10",
  lilac: "bg-lilac/10",
  rose: "bg-rose/10",
  teal: "bg-teal/10",
};

export function AmbientBlob({ color, size = 600, className, style, delay = 0 }: AmbientBlobProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-[100px] pointer-events-none animate-blob-pulse",
        colorMap[color],
        className
      )}
      style={{
        width: size,
        height: size,
        animationDelay: `${delay}s`,
        ...style,
      }}
    />
  );
}
