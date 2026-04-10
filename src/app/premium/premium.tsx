import { Starfield } from "@/components/effects/Starfield";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium — Animalink",
  description: "Choose your status in Furrapest. Three tiers, one world.",
};

const plans = [
  {
    id: "streetborn",
    name: "Streetborn",
    price: "Free",
    priceNote: "Always free",
    lore: "Every story in Furrapest starts on the streets. So does yours.",
    accentText: "text-muted",
    accentBorder: "border-rim",
    accentBg: "bg-muted/5",
    badgeBg: "bg-muted/10 border-muted/20 text-muted",
    featured: false,
    features: [
      { text: "Access to all characters", included: true },
      { text: "Limited messages per day", included: true },
      { text: "Basic profile & avatar", included: true },
      { text: "Public lore & Universe", included: true },
      { text: "Unlimited conversations", included: false },
      { text: "Crown Vault lore", included: false },
      { text: "Premium themes", included: false },
      { text: "Early access to new characters", included: false },
    ],
    cta: "Download free",
    ctaHref: "/download",
    ctaVariant: "ghost" as const,
  },
  {
    id: "highborn",
    name: "Highborn",
    price: "$4.99",
    priceNote: "per month",
    lore: "You've climbed above the cobblestones. Furrapest opens its better doors.",
    accentText: "text-lilac",
    accentBorder: "border-lilac/30",
    accentBg: "bg-lilac/5",
    badgeBg: "bg-lilac/10 border-lilac/30 text-lilac",
    featured: false,
    features: [
      { text: "Access to all characters", included: true },
      { text: "Unlimited messages", included: true },
      { text: "Custom profile & avatar", included: true },
      { text: "Public lore & Universe", included: true },
      { text: "Highborn profile badge", included: true },
      { text: "Crown Vault lore", included: false },
      { text: "Premium themes", included: false },
      { text: "Early access to new characters", included: false },
    ],
    cta: "Become Highborn",
    ctaHref: "/download",
    ctaVariant: "ghost" as const,
  },
  {
    id: "crownbound",
    name: "Crownbound",
    price: "$24.99",
    priceNote: "per month",
    lore: "The Crown does not ask for loyalty. It recognizes it.",
    accentText: "text-gold",
    accentBorder: "border-gold/40",
    accentBg: "bg-gold/5",
    badgeBg: "bg-gold/10 border-gold/30 text-gold",
    featured: true,
    features: [
      { text: "Everything in Highborn", included: true },
      { text: "Unlimited messages", included: true },
      { text: "Crown Vault — exclusive lore", included: true },
      { text: "Obsidian & Aurora themes", included: true },
      { text: "Early access to new characters", included: true },
      { text: "Exclusive Tales of Furrapest", included: true },
      { text: "Crownbound profile badge", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Claim the Crown",
    ctaHref: "/download",
    ctaVariant: "primary" as const,
  },
];

const CheckIcon = ({ filled }: { filled: boolean }) => (
  <span
    className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs ${
      filled ? "bg-gold/20 text-gold" : "bg-rim/50 text-muted/40"
    }`}
  >
    {filled ? "✦" : "—"}
  </span>
);

export default function PremiumPage() {
  return (
    <>
      <Starfield />

      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gold/4 blur-[140px]" />
        <div className="absolute bottom-1/3 -left-40 w-[400px] h-[400px] rounded-full bg-lilac/5 blur-[120px]" />
        <div className="absolute top-2/3 -right-32 w-[300px] h-[300px] rounded-full bg-rose/4 blur-[120px]" />
      </div>

      <section className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-5xl">

          {/* Header */}
          <div className="text-center mb-6">
            <SectionTag>Your Status</SectionTag>
            <h1 className="font-display text-5xl md:text-6xl text-white mt-6 mb-4 leading-tight">
              Choose your place<br />in Furrapest
            </h1>
            <div className="glow-divider" />
            <p className="text-text leading-relaxed max-w-lg mx-auto mt-4">
              {"Three tiers. One world. Where you stand in Cinderfall depends on how far"}
              {" you're willing to go."}
            </p>
          </div>

          {/* Plans grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 items-start">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-card rounded-2xl border ${plan.accentBorder} flex flex-col overflow-hidden transition-all duration-300 ${
                  plan.featured
                    ? "ring-1 ring-gold/20 shadow-[0_0_40px_rgba(201,147,58,0.08)]"
                    : ""
                }`}
              >
                {/* Featured glow top bar */}
                {plan.featured && (
                  <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
                )}

                {/* Card header */}
                <div className={`p-7 ${plan.accentBg} border-b ${plan.accentBorder}`}>
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className={`font-title text-xs tracking-widest uppercase px-3 py-1 rounded-full border ${plan.badgeBg}`}
                    >
                      {plan.name}
                    </span>
                    {plan.featured && (
                      <span className="font-title text-xs tracking-widest uppercase px-2 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold">
                        Most popular
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className={`font-display text-4xl ${plan.accentText}`}>
                        {plan.price}
                      </span>
                      {plan.priceNote !== "Always free" && (
                        <span className="text-xs text-muted">{plan.priceNote}</span>
                      )}
                    </div>
                    {plan.priceNote === "Always free" && (
                      <p className="text-xs text-muted mt-1">{plan.priceNote}</p>
                    )}
                  </div>

                  <p className="font-editorial italic text-sm text-muted leading-relaxed">
                    "{plan.lore}"
                  </p>
                </div>

                {/* Features */}
                <div className="p-7 flex flex-col gap-3 flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckIcon filled={feature.included} />
                      <span
                        className={`text-sm ${
                          feature.included ? "text-text" : "text-muted/50"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-7 pb-7">
                  <Link href={plan.ctaHref} className="block">
                    <Button fullWidth>
                      {plan.cta} ✦
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Lore divider */}
          <div className="text-center my-20">
            <div className="glow-divider" />
            <p className="font-editorial italic text-muted text-sm mt-6 max-w-sm mx-auto leading-relaxed">
              "In Cinderfall, your title is not given. It is chosen — and then it is earned."
            </p>
          </div>

          {/* FAQ strip */}
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {[
              {
                q: "Can I upgrade or downgrade at any time?",
                a: "Yes. Changes take effect at the start of your next billing cycle. Managed through Google Play.",
              },
              {
                q: "How do I cancel?",
                a: "Go to Google Play → Subscriptions → Animalink and tap Cancel. Access continues until the period ends.",
              },
              {
                q: "Is Crownbound worth it?",
                a: "If you want the full Cinderfall experience — exclusive lore, unlimited conversations, and the Crown Vault — yes.",
              },
              {
                q: "What happens to my data if I downgrade?",
                a: "Your conversations and profile are preserved. Crown-exclusive content becomes inaccessible until you resubscribe.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-rim rounded-2xl p-6">
                <p className="font-title text-sm text-white mb-2">{item.q}</p>
                <p className="text-sm text-text leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-card border border-gold/20 rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <p className="font-title text-xs tracking-widest uppercase text-gold mb-3">
                Still deciding?
              </p>
              <h3 className="font-title text-2xl text-white mb-3">
                Start as Streetborn. Always free.
              </h3>
              <p className="text-sm text-text mb-7 max-w-sm mx-auto leading-relaxed">
                Every story in Furrapest starts on the streets. Download the app and meet
                the characters — no commitment required.
              </p>
              <Link href="/download">
                <Button>Download Animalink ✦</Button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
