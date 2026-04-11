"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { AuthModal } from "@/components/auth/AuthModal";
import type { User } from "@supabase/supabase-js";

const navLinks = [
  { href: "/characters", label: "Characters" },
  { href: "/universe", label: "Universe" },
  { href: "/updates", label: "Updates" },
  { href: "/support", label: "Support" },
];

type UserTier = "streetborn" | "highborn" | "crownbound" | null;

const tierStyles: Record<NonNullable<UserTier>, { label: string; color: string; border: string }> = {
  streetborn: { label: "Streetborn", color: "text-muted",    border: "border-muted/30" },
  highborn:   { label: "Highborn",   color: "text-lilac",    border: "border-lilac/30" },
  crownbound: { label: "Crownbound", color: "text-gold",     border: "border-gold/30"  },
};

export function Nav() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [showAuth, setShowAuth]       = useState(false);
  const [user, setUser]               = useState<User | null>(null);
  const [tier, setTier]               = useState<UserTier>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const supabase = createClient();

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auth listener — se activa cuando el usuario inicia/cierra sesión
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      if (user) fetchTier(user.id);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchTier(session.user.id);
      else setTier(null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function fetchTier(userId: string) {
    const { data } = await supabase
      .from("profiles")
      .select("tier")
      .eq("id", userId)
      .single();
    setTier((data?.tier as UserTier) ?? "streetborn");
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    setShowUserMenu(false);
    setUser(null);
    setTier(null);
  }

  const initials = user?.email?.slice(0, 2).toUpperCase() ?? "??";
  const tierInfo = tier ? tierStyles[tier] : null;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 h-[72px] transition-all duration-400 ${
          scrolled
            ? "bg-[rgba(10,9,20,0.92)] border-b border-gold/15 backdrop-blur-md"
            : "bg-gradient-to-b from-[rgba(7,6,15,0.95)] to-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="font-display text-lg text-gold-soft tracking-wider whitespace-nowrap drop-shadow-[0_0_20px_rgba(201,147,58,0.5)]">
          Animalink <span className="text-lilac-soft">✦</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-title text-xs tracking-[0.15em] uppercase text-muted hover:text-gold-soft transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-3">

          {/* Not logged in */}
          {!user && (
            <button
              onClick={() => setShowAuth(true)}
              className="font-title text-xs tracking-widest uppercase text-muted hover:text-text border border-rim hover:border-gold/30 px-4 py-2 rounded-full transition-all duration-200"
            >
              Sign in
            </button>
          )}

          {/* Logged in — avatar + tier badge */}
          {user && tierInfo && (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 group"
              >
                <div className="w-8 h-8 rounded-full bg-card border border-rim group-hover:border-gold/30 flex items-center justify-center font-title text-xs text-white transition-all">
                  {initials}
                </div>
                <span className={`font-title text-xs tracking-widest uppercase px-2 py-0.5 rounded-full border ${tierInfo.border} ${tierInfo.color} hidden xl:block`}>
                  {tierInfo.label}
                </span>
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {showUserMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 top-12 w-52 bg-card border border-rim rounded-2xl p-2 shadow-xl z-50"
                  >
                    <div className="px-3 py-2 border-b border-rim mb-1">
                      <p className="text-xs text-white truncate">{user.email}</p>
                      <p className={`font-title text-xs tracking-widest uppercase ${tierInfo.color} mt-0.5`}>
                        {tierInfo.label}
                      </p>
                    </div>
                    <Link
                      href="/premium"
                      onClick={() => setShowUserMenu(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs text-muted hover:text-text hover:bg-surface rounded-xl transition-all"
                    >
                      Upgrade plan
                    </Link>
                    <Link
                      href="/universe/tales"
                      onClick={() => setShowUserMenu(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs text-muted hover:text-text hover:bg-surface rounded-xl transition-all"
                    >
                      Crown Vault
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left flex items-center gap-2 px-3 py-2 text-xs text-rose hover:bg-surface rounded-xl transition-all mt-1 border-t border-rim pt-2"
                    >
                      Sign out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Download CTA */}
          <Link
            href="/download"
            className="bg-gradient-to-br from-gold to-[#8a5e1c] text-void font-title text-xs tracking-widest uppercase font-bold px-6 py-2 rounded-full hover:shadow-[0_0_20px_rgba(201,147,58,0.6)] hover:-translate-y-0.5 transition-all"
          >
            Download
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-gold-soft" />
          ) : (
            <Menu className="w-6 h-6 text-gold-soft" />
          )}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[72px] left-0 right-0 bg-[rgba(10,9,20,0.97)] border-b border-rim p-8 z-40 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-title text-sm tracking-widest text-text hover:text-gold-soft transition-colors pb-4 border-b border-white/5"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/download"
                onClick={() => setMobileOpen(false)}
                className="font-title text-sm tracking-widest text-gold-soft"
              >
                Download
              </Link>

              {/* Mobile auth */}
              <div className="border-t border-white/5 pt-4">
                {!user ? (
                  <button
                    onClick={() => { setShowAuth(true); setMobileOpen(false); }}
                    className="font-title text-sm tracking-widest text-muted hover:text-text transition-colors"
                  >
                    Sign in
                  </button>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white truncate max-w-[180px]">{user.email}</p>
                      {tierInfo && (
                        <p className={`font-title text-xs tracking-widest uppercase ${tierInfo.color} mt-0.5`}>
                          {tierInfo.label}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="font-title text-xs tracking-widest uppercase text-rose hover:text-rose/70 transition-colors"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auth modal */}
      {showAuth && (
        <AuthModal onClose={() => setShowAuth(false)} reason="login" />
      )}

      {/* Cerrar dropdown al hacer click fuera */}
      {showUserMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowUserMenu(false)}
        />
      )}
    </>
  );
}
