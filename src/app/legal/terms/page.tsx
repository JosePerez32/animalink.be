import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Animalink",
};

export default function TermsPage() {
  return (
    <section className="pt-40 pb-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-xs tracking-widest uppercase text-gold mb-4">Legal</div>
        <h1 className="font-title text-4xl text-white mb-8">Terms of Service</h1>
        <p className="text-sm text-muted mb-8">Last updated: February 2026</p>
        
        <div className="space-y-6 text-text leading-relaxed">
          <p>By using Animalink, you agree to these terms. Please read them carefully.</p>
          
          <h2 className="font-title text-gold-soft text-lg mt-8 mb-4">Use of the app</h2>
          <p>Animalink is intended for users 13 and older. You agree not to use the app to harm others or generate illegal content.</p>
          
          <h2 className="font-title text-gold-soft text-lg mt-8 mb-4">Subscriptions</h2>
          <p>Subscriptions are billed monthly. Cancel anytime. No partial refunds.</p>
          
          <h2 className="font-title text-gold-soft text-lg mt-8 mb-4">Intellectual Property</h2>
          <p>All characters, lore, and the Furrapest universe are original IP of the Animalink team.</p>
        </div>
      </div>
    </section>
  );
}
