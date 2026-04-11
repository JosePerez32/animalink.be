"use client";

// src/components/auth/AuthModal.tsx
// Modal de login/signup reutilizable en toda la web
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type AuthModalProps = {
  onClose: () => void;
  reason?: "crown" | "highborn" | "login";
};

export function AuthModal({ onClose, reason = "login" }: AuthModalProps) {
  const supabase = createClient();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const headings = {
    crown: { title: "Crown Vault access", sub: "Sign in with your Crownbound account to unlock." },
    highborn: { title: "Highborn access", sub: "Sign in to access this content." },
    login: { title: "Welcome back", sub: "Sign in to your Animalink account." },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setErrorMsg("Invalid email or password. Try again.");
        setStatus("error");
      } else {
        setStatus("success");
        window.location.reload();
      }
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setErrorMsg(error.message);
        setStatus("error");
      } else {
        setStatus("success");
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(7,6,15,0.85)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-card border border-gold/25 rounded-2xl p-8 w-full max-w-md relative">
        {/* Top gold line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent rounded-t-2xl" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-muted hover:text-white transition-colors text-xl leading-none"
        >
          ×
        </button>

        {status === "success" && mode === "signup" ? (
          <div className="text-center py-4">
            <p className="text-gold font-title text-sm tracking-widest uppercase mb-2">✦ Check your email</p>
            <p className="text-text text-sm">We sent a confirmation link to <span className="text-white">{email}</span>. Confirm it and then sign in.</p>
          </div>
        ) : (
          <>
            <div className="mb-7">
              <p className="font-title text-xs tracking-widest uppercase text-gold mb-2">
                {headings[reason].title}
              </p>
              <p className="text-sm text-muted">{headings[reason].sub}</p>
            </div>

            {/* Mode toggle */}
            <div className="flex gap-1 mb-6 bg-surface rounded-xl p-1">
              {(["login", "signup"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`flex-1 font-title text-xs tracking-widest uppercase py-2 rounded-lg transition-all duration-200 ${
                    mode === m
                      ? "bg-card text-white border border-rim"
                      : "text-muted hover:text-text"
                  }`}
                >
                  {m === "login" ? "Sign in" : "Sign up"}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-title text-xs tracking-widest uppercase text-muted mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-surface border border-rim rounded-xl px-4 py-3 text-white text-sm focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/10 placeholder:text-muted/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block font-title text-xs tracking-widest uppercase text-muted mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-surface border border-rim rounded-xl px-4 py-3 text-white text-sm focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/10 placeholder:text-muted/50"
                  placeholder="••••••••"
                />
              </div>

              {status === "error" && (
                <p className="text-xs text-rose">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full font-title text-xs tracking-widest uppercase py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/5 transition-all duration-200 disabled:opacity-50"
              >
                {status === "loading"
                  ? "..."
                  : mode === "login"
                  ? "Sign in ✦"
                  : "Create account ✦"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
