"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  onClick?: () => void;
  href?: string;
  className?: string;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  onClick,
  href,
  className,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-title text-xs tracking-widest uppercase font-bold rounded-full transition-all duration-300 cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-br from-gold to-[#6b3f10] text-void px-8 py-4 hover:shadow-[0_0_30px_rgba(201,147,58,0.5),0_0_60px_rgba(201,147,58,0.2)] hover:-translate-y-0.5",
    ghost: "bg-transparent text-gold-soft border border-gold/40 px-8 py-4 hover:bg-gold/5 hover:border-gold hover:shadow-[0_0_20px_rgba(201,147,58,0.2)]",
  };

  const Component = href ? motion.a : motion.button;
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], fullWidth && "w-full", className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
}
