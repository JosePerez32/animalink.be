interface PillProps {
  children: React.ReactNode;
  variant?: "default" | "muted" | "gold";
}

export function Pill({ children, variant = "default" }: PillProps) {
  const variants = {
    default: "border-lilac/30 text-lilac-soft bg-lilac/5",
    muted: "border-rim text-muted bg-surface",
    gold: "border-gold/40 text-gold-soft bg-gold/5",
  };

  return (
    <span className={`px-4 py-1 rounded-full border text-xs font-title tracking-widest ${variants[variant]}`}>
      {children}
    </span>
  );
}
