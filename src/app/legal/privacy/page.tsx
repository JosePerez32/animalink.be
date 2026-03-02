import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Animalink",
};

export default function PrivacyPage() {
  return (
    <section className="pt-40 pb-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-xs tracking-widest uppercase text-gold mb-4">Legal</div>
        <h1 className="font-title text-4xl text-white mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted mb-8">Last updated: February 2026</p>
        
        <div className="space-y-6 text-text leading-relaxed">
          <p>Animalink (&quot;we&quot;, &quot;our&quot;, &quot;the app&quot;) is committed to protecting your personal data.</p>
          
          <h2 className="font-title text-gold-soft text-lg mt-8 mb-4">What we collect</h2>
          <p>We collect: email address (optional), conversation data (encrypted), bond progression, and subscription status.</p>
          
          <h2 className="font-title text-gold-soft text-lg mt-8 mb-4">What we never do</h2>
          <p>We never sell your data. We never share conversations with third parties. We never use your conversations to train models without explicit consent.</p>
          
          <h2 className="font-title text-gold-soft text-lg mt-8 mb-4">Your rights</h2>
          <p>You may export or delete all your data at any time. Contact privacy@animalink.app for requests.</p>
        </div>
      </div>
    </section>
  );
}
