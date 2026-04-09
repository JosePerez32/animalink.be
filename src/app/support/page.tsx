"use client";

import { Starfield } from "@/components/effects/Starfield";
import { SectionTag } from "@/components/ui/SectionTag";
import { useState } from "react";

const categories = ["All", "Subscriptions", "Account", "Technical", "Characters & Lore"];

const faqs = [
  // Subscriptions
  {
    category: "Subscriptions",
    question: "What is Crown and what do I get with it?",
    answer:
      "Crown is Animalink's premium subscription. It unlocks unlimited conversations with all characters, exclusive lore in the Crown Vault, premium themes (Obsidian and Aurora), and early access to new content. Free users get a limited number of messages per day.",
  },
  {
    category: "Subscriptions",
    question: "How do I cancel my Crown subscription?",
    answer:
      "Subscriptions are managed through the Google Play Store. Go to Play Store → Profile → Payments & Subscriptions → Subscriptions → Animalink, and tap Cancel. Your Crown access remains active until the end of the billing period.",
  },
  {
    category: "Subscriptions",
    question: "I was charged but Crown isn't active in my account.",
    answer:
      "This can happen if the purchase didn't sync correctly. Open the app, go to Settings → Restore Purchases, and tap Restore. If the issue persists, contact us at supp@animalink.city with your Google Play order number and we'll resolve it manually.",
  },
  {
    category: "Subscriptions",
    question: "Is there a free trial for Crown?",
    answer:
      "Availability of free trials depends on your region and current promotions. Check the Premium section inside the app — any active trial offer will appear there before you subscribe.",
  },

  // Account
  {
    category: "Account",
    question: "How do I create an account?",
    answer:
      "Download Animalink from the Google Play Store, open it, and sign up with your email address. You'll receive a verification email — confirm it and you're in. Google Sign-In is also available for faster access.",
  },
  {
    category: "Account",
    question: "I didn't receive my verification email.",
    answer:
      "Check your spam or junk folder first. If it's not there, wait a few minutes and try resending from the login screen. Still nothing? Contact us at supp@animalink.city and we'll verify your account manually.",
  },
  {
    category: "Account",
    question: "How do I change my username or avatar?",
    answer:
      "Go to your Profile screen inside the app and tap Edit Profile. You can update your display name, username, and upload a custom avatar from your gallery.",
  },
  {
    category: "Account",
    question: "How do I delete my account?",
    answer:
      "You can request account deletion by emailing supp@animalink.city from the address linked to your account. We'll permanently delete your data within 30 days, in accordance with our Privacy Policy.",
  },

  // Technical
  {
    category: "Technical",
    question: "The app crashes when I open it. What do I do?",
    answer:
      "Try these steps in order: force-close and reopen the app, check for an update in the Play Store, restart your device, and reinstall the app. If none of these work, send us your device model and Android version at supp@animalink.city.",
  },
  {
    category: "Technical",
    question: "A character stopped responding mid-conversation.",
    answer:
      "This is usually a temporary connection issue. Pull down to refresh the chat screen, or close and reopen the conversation. If it happens consistently with a specific character, let us know at supp@animalink.city.",
  },
  {
    category: "Technical",
    question: "I'm not receiving notifications.",
    answer:
      "Go to your device Settings → Apps → Animalink → Notifications and make sure they're enabled. Also check inside the app under Settings → Notifications to confirm your preferences are saved.",
  },
  {
    category: "Technical",
    question: "My message count doesn't seem right.",
    answer:
      "Message limits reset daily at midnight UTC. If your count looks off after the reset, try logging out and back in to refresh your session. Still incorrect? Email us at supp@animalink.city.",
  },

  // Characters & Lore
  {
    category: "Characters & Lore",
    question: "Who are the characters in Animalink?",
    answer:
      "Animalink is set in Cinderfall — a victorian-industrial world where Furrapest is the great metropolis. Current characters include Aureliane Swan (aristocrat, Lake Aurelis), Duque Duck (gentleman, formerly the streets), and Dobert (Sheriff of Furrapest). Each has a full backstory in the Universe section.",
  },
  {
    category: "Characters & Lore",
    question: "Will new characters be added?",
    answer:
      "Yes. New characters from Cinderfall are planned and will be announced in the Updates section. Crown subscribers get early access and first looks at upcoming characters.",
  },
  {
    category: "Characters & Lore",
    question: "What is the Crown Vault?",
    answer:
      "The Crown Vault is an exclusive section for Crown subscribers containing locked lore, character backstories, and Tales of Furrapest episodes not available to free users. Access it from the Universe section once your Crown subscription is active.",
  },
  {
    category: "Characters & Lore",
    question: "Do the characters remember our previous conversations?",
    answer:
      "Characters maintain context within a single conversation. Cross-session memory is a planned feature — Crown subscribers will get it first when it launches.",
  },
];

export default function SupportPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      <Starfield />

      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-32 w-[450px] h-[450px] rounded-full bg-lilac/5 blur-[120px]" />
        <div className="absolute bottom-1/3 -right-32 w-[350px] h-[350px] rounded-full bg-gold/4 blur-[120px]" />
      </div>

      <section className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-3xl">

          {/* Header */}
          <div className="text-center mb-16">
            <SectionTag>Help Center</SectionTag>
            <h1 className="font-title text-4xl md:text-5xl text-white mt-4 mb-5 leading-tight">
              How can we help?
            </h1>
            <p className="text-text leading-relaxed max-w-md mx-auto">
              Answers to the most common questions about Animalink. Can't find what you need?
              A real person reads every email.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`font-title text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? "border-gold/50 text-gold bg-gold/5"
                    : "border-rim text-muted hover:border-gold/30 hover:text-text"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ accordion */}
          <div className="space-y-3 mb-16">
            {filtered.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`bg-card border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? "border-gold/30" : "border-rim hover:border-gold/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <span
                        className={`font-title text-xs tracking-widest uppercase px-2 py-0.5 rounded-full border flex-shrink-0 mt-0.5 ${
                          faq.category === "Subscriptions"
                            ? "text-gold border-gold/30"
                            : faq.category === "Account"
                            ? "text-lilac border-lilac/30"
                            : faq.category === "Technical"
                            ? "text-teal border-teal/30"
                            : "text-rose border-rose/30"
                        }`}
                      >
                        {faq.category}
                      </span>
                      <span className="font-title text-sm text-white leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={`text-muted flex-shrink-0 transition-transform duration-300 text-lg leading-none ${
                        isOpen ? "rotate-45 text-gold" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 border-t border-rim/50">
                      <p className="text-sm text-text leading-relaxed pt-4">
                        {faq.answer.split("supp@animalink.city").map((part, j, arr) =>
                          j < arr.length - 1 ? (
                            <span key={j}>
                              {part}
                              <a
                                href="mailto:supp@animalink.city"
                                className="text-gold hover:text-gold-soft underline underline-offset-2 transition-colors"
                              >
                                supp@animalink.city
                              </a>
                            </span>
                          ) : (
                            <span key={j}>{part}</span>
                          )
                        )}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="bg-card border border-lilac/20 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-lilac/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-lilac/10 border border-lilac/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-lilac text-lg">✉</span>
              </div>
              <h3 className="font-title text-xl text-white mb-2">Still need help?</h3>
              <p className="text-sm text-text mb-6 max-w-sm mx-auto leading-relaxed">
                Every message is read by a human who cares about Furrapest as much as you do.
              </p>
              <a
                href="mailto:supp@animalink.city"
                className="inline-flex items-center gap-2 font-title text-sm tracking-widest uppercase px-6 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/5 transition-all duration-200"
              >
                supp@animalink.city ✦
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
