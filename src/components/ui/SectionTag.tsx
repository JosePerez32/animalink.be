"use client";

interface SectionTagProps {
  children: React.ReactNode;
  centered?: boolean;
}

export function SectionTag({ children, centered = false }: SectionTagProps) {
  return (
    <div className={`inline-flex items-center gap-3 mb-6 ${centered ? "justify-center w-full" : ""}`}>
      {!centered && <span className="w-8 h-px bg-gold/60" />}
      <span className="font-title text-xs tracking-[0.25em] uppercase text-gold">
        {children}
      </span>
      {centered && <span className="w-8 h-px bg-gold/60" />}
    </div>
  );
}
