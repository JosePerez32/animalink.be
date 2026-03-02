import { Starfield } from "@/components/effects/Starfield";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium — Animalink",
  description: "Choose your presence in Furrapest. Deepen the bond.",
};

const plans = [
  {
    name: "Threshold",
    price: "Free",
    desc: "Begin your journey",
    features: ["Daily message limits", "Access to 3 characters", "Basic bond memory"],
    muted: ["Premium themes", "Persistent full history", "Spontaneous messages"],
    featured: false,
  },
  {
    name: "Highborn",
    price: "$4.99",
    desc: "Deepen your bond",
    features: ["Unlimited messages", "All characters unlocked", "Full persistent history", "Premium themes", "Spontaneous messages", "Priority support"],
    featured: true,
  },
  {
    name: "Crownbound",
    price: "$14.99",
    desc: "Exclusive experience",
    features: ["Everything in Highborn", "Early lore access", "Name in city records", "Beta character access", "Exclusive theme", "Direct dev access"],
    featured: false,
  },
];

export default function PremiumPage() {
  return (
    <>
      <Starfield />
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <SectionTag centered>Deepen the Bond</SectionTag>
            <h1 className="font-title text-5xl md:text-6xl text-white mb-4">
              Choose your <span className="gradient-text">Presence</span>
            </h1>
            <p className="text-muted">How deep do you want to go into Furrapest?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-card border rounded-2xl p-8 ${
                  plan.featured
                    ? "border-gold/50 bg-gradient-to-br from-gold/[0.08] to-card scale-105 shadow-[0_0_60px_rgba(201,147,58,0.1)]"
                    : "border-rim"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-title text-[10px] tracking-widest uppercase font-bold px-4 py-1 rounded-full bg-gradient-to-br from-gold to-[#8a5e1c] text-void">
                    Most Popular
                  </span>
                )}
                <div className="font-display text-xl text-white mb-1">{plan.name}</div>
                <div className="text-sm text-muted mb-4">{plan.desc}</div>
                <div className="font-display text-4xl text-gold-soft mb-1">
                  {plan.price} <span className="text-base text-muted">/mo</span>
                </div>
                <div className="h-px bg-rim my-6" />
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-text">
                      <span className="text-gold text-xs">✦</span>
                      {f}
                    </li>
                  ))}
                  {plan.muted?.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-muted">
                      <span>—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.featured ? "primary" : "ghost"} fullWidth>
                  {plan.price === "Free" ? "Download Free" : `Go ${plan.name}`}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
