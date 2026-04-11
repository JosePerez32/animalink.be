"use client";

// src/components/auth/TierGate.tsx
// Envuelve cualquier contenido y lo bloquea según el tier requerido
import { useState } from "react";
import { AuthModal } from "./AuthModal";
import Link from "next/link";

type Tier = "streetborn" | "highborn" | "crownbound";

const TIER_RANK: Record<Tier, number> = {
  streetborn: 0,
  highborn: 1,
  crownbound: 2,
};

type TierGateProps = {
  requiredTier: Tier;
  userTier: Tier | null;
  children: React.ReactNode;
  // Modo "blur": muestra el contenido difuminado con overlay
  // Modo "hidden": oculta completamente y muestra card
  mode?: "blur" | "hidden";
};

const tierLabels: Record<Tier, { name: string; color: string; border: string; bg: string }> = {
  streetborn: { name: "Streetborn", color: "text-muted", border: "border-muted/30", bg: "bg-muted/10" },
  highborn: { name: "Highborn", color: "text-lilac", border: "border-lilac/30", bg: "bg-lilac/10" },
  crownbound: { name: "Crownbound", color: "text-gold", border: "border-gold/30", bg: "bg-gold/10" },
};

export function TierGate({
  requiredTier,
  userTier,
  children,
  mode = "blur",
}: TierGateProps) {
  const [showAuth, setShowAuth] = useState(false);

  const userRank = userTier ? TIER_RANK[userTier] : -1;
  const requiredRank = TIER_RANK[requiredTier];
  const hasAccess = userRank >= requiredRank;

  if (hasAccess) return <>{children}</>;

  const label = tierLabels[requiredTier];
  const isLoggedOut = userTier === null;

  const GateCard = () => (
    <div className="rounded-2xl border border-rim bg-card p-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
      <div className="relative z-10">
        <span className={`font-title text-xs tracking-widest uppercase px-3 py-1 rounded-full border ${label.border} ${label.color} ${label.bg} mb-4 inline-block`}>
          {label.name} exclusive
        </span>
        <p className="text-lg font-title text-white mb-2">
          {isLoggedOut ? "Sign in to continue" : `${label.name} required`}
        </p>
        <p className="text-sm text-muted mb-6 max-w-xs mx-auto leading-relaxed">
          {isLoggedOut
            ? "This content is locked. Sign in with your Animalink account to access it."
            : `This content requires a ${label.name} subscription. Upgrade to unlock it.`}
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          {isLoggedOut ? (
            <button
              onClick={() => setShowAuth(true)}
              className={`font-title text-xs tracking-widest uppercase px-5 py-3 rounded-full border ${label.border} ${label.color} hover:${label.bg} transition-all duration-200`}
            >
              Sign in ✦
            </button>
          ) : (
            <Link
              href="/premium"
              className={`font-title text-xs tracking-widest uppercase px-5 py-3 rounded-full border ${label.border} ${label.color} hover:${label.bg} transition-all duration-200`}
            >
              Upgrade to {label.name} ✦
            </Link>
          )}
          <Link
            href="/download"
            className="font-title text-xs tracking-widest uppercase px-5 py-3 rounded-full border border-rim text-muted hover:border-gold/20 hover:text-text transition-all duration-200"
          >
            Open app
          </Link>
        </div>
      </div>
      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          reason={requiredTier === "crownbound" ? "crown" : "highborn"}
        />
      )}
    </div>
  );

  if (mode === "hidden") return <GateCard />;

  // Modo blur: muestra contenido difuminado con overlay encima
  return (
    <div className="relative">
      <div className="pointer-events-none select-none" style={{ filter: "blur(6px)", opacity: 0.4 }}>
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <GateCard />
        </div>
      </div>
      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          reason={requiredTier === "crownbound" ? "crown" : "highborn"}
        />
      )}
    </div>
  );
}
