import { Starfield } from "@/components/effects/Starfield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Animalink",
  description: "The terms and conditions governing your use of Animalink.",
};

const lastUpdated = "2025";

export default function TermsPage() {
  return (
    <>
      <Starfield />

      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full bg-gold/4 blur-[120px]" />
      </div>

      <section className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-3xl">

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-title text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-gold/30 text-gold">
                Legal
              </span>
              <span className="font-title text-xs tracking-widest uppercase text-muted">
                Last updated {lastUpdated}
              </span>
            </div>
            <h1 className="font-title text-4xl md:text-5xl text-white mb-5 leading-tight">
              Terms of Service
            </h1>
            <p className="text-text leading-relaxed">
              These Terms of Service govern your access to and use of the Animalink mobile application
              and website. By creating an account or using Animalink, you agree to these terms.
              Please read them carefully.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 text-text text-sm leading-relaxed">

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">1. About Animalink</h2>
              <p>
                Animalink is a mobile application that allows users to engage in conversations with
                AI-powered fictional characters set in the world of Cinderfall. It is developed and
                operated by:
              </p>
              <div className="bg-surface border border-rim rounded-xl p-5 space-y-1 mt-2">
                <p className="text-white font-title text-sm">José Carlos Pérez Rojas</p>
                <p>Aarschot 3200, Brabant Flamand, Belgique</p>
                <p>
                  <a href="mailto:supp@animalink.city" className="text-gold hover:text-gold-soft underline underline-offset-2 transition-colors">
                    supp@animalink.city
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">2. Eligibility</h2>
              <p>
                You must be at least 13 years of age to use Animalink. By using the app, you confirm
                that you meet this requirement. If you are under 18, you confirm that you have obtained
                parental or guardian consent.
              </p>
              <p>
                Animalink is available for download in regions supported by the Google Play Store.
                You are responsible for ensuring your use of the app complies with laws applicable
                in your country of residence.
              </p>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">3. Your account</h2>
              <p>
                To access most features of Animalink, you must create an account. You are responsible for:
              </p>
              <div className="space-y-2 mt-2">
                {[
                  "Providing accurate and complete registration information",
                  "Maintaining the confidentiality of your login credentials",
                  "All activity that occurs under your account",
                  "Notifying us immediately at supp@animalink.city if you suspect unauthorized access",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-gold text-xs mt-1 flex-shrink-0">✦</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3">
                We reserve the right to suspend or terminate accounts that violate these Terms.
              </p>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">4. Subscriptions and billing</h2>
              <p>
                Animalink offers three service tiers: Streetborn (free), Highborn ($4.99/month),
                and Crownbound ($24.99/month). Paid subscriptions are processed through Google Play
                and governed by Google Play's Terms of Service.
              </p>
              <div className="space-y-3 mt-3">
                {[
                  {
                    title: "Billing",
                    detail: "Subscriptions are billed monthly on the date of initial purchase. Google Play handles all payment processing.",
                  },
                  {
                    title: "Cancellation",
                    detail: "You may cancel at any time through Google Play. Access to paid features continues until the end of the current billing period. No partial refunds are issued for unused time.",
                  },
                  {
                    title: "Refunds",
                    detail: "Refund requests are subject to Google Play's refund policy. For issues related to the app itself, contact us at supp@animalink.city within 48 hours of purchase.",
                  },
                  {
                    title: "Price changes",
                    detail: "We reserve the right to change subscription prices. We will give at least 30 days' notice before any price change takes effect.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-rim pl-4">
                    <p className="font-title text-xs tracking-widest uppercase text-gold mb-1">{item.title}</p>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">5. Acceptable use</h2>
              <p>You agree not to use Animalink to:</p>
              <div className="space-y-2 mt-2">
                {[
                  "Attempt to extract, replicate, or reverse-engineer the AI character prompts or models",
                  "Use the app to harass, threaten, or harm any person",
                  "Generate or transmit illegal, abusive, or offensive content",
                  "Circumvent subscription limits or access controls",
                  "Use automated tools, bots, or scripts to interact with the app",
                  "Impersonate another person or misrepresent your identity",
                  "Use the app in any way that violates applicable law",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-rose text-xs mt-1 flex-shrink-0">◎</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3">
                Violation of these rules may result in immediate account suspension without refund.
              </p>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">6. Intellectual property</h2>
              <p>
                All content within Animalink — including but not limited to the characters Aureliane Swan,
                Duque Duck, and Dobert; the world of Cinderfall; Furrapest; Lake Aurelis; The Threshold;
                all lore, stories, artwork, interface design, and the Animalink name and logo — is the
                exclusive intellectual property of José Carlos Pérez Rojas.
              </p>
              <p>
                You are granted a limited, non-exclusive, non-transferable license to use the app for
                personal, non-commercial purposes. You may not reproduce, distribute, modify, or create
                derivative works from any Animalink content without prior written permission.
              </p>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">7. AI-generated content</h2>
              <p>
                Animalink uses artificial intelligence to generate character responses. By using the app,
                you acknowledge that:
              </p>
              <div className="space-y-2 mt-2">
                {[
                  "Character responses are AI-generated and do not constitute real advice, medical guidance, legal counsel, or professional opinions of any kind.",
                  "The characters are fictional. Any resemblance to real persons is coincidental.",
                  "AI responses may occasionally be inaccurate, inconsistent, or unexpected. We do not guarantee the accuracy of any AI-generated content.",
                  "You interact with AI characters at your own discretion and risk.",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-lilac text-xs mt-1 flex-shrink-0">✦</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">8. Availability and modifications</h2>
              <p>
                We strive to keep Animalink available at all times, but we do not guarantee uninterrupted
                access. We reserve the right to:
              </p>
              <div className="space-y-2 mt-2">
                {[
                  "Modify, suspend, or discontinue the app or any feature at any time",
                  "Update these Terms of Service with reasonable notice",
                  "Add, remove, or modify subscription tiers and their contents",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-gold text-xs mt-1 flex-shrink-0">◎</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3">
                We will provide at least 14 days' notice before making material changes that negatively
                affect your use of the service.
              </p>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">9. Limitation of liability</h2>
              <p>
                To the maximum extent permitted by applicable law, José Carlos Pérez Rojas shall not
                be liable for any indirect, incidental, special, consequential, or punitive damages
                arising from your use of — or inability to use — Animalink.
              </p>
              <p>
                Our total liability to you for any claim arising from these Terms or your use of the
                app shall not exceed the amount you paid for the subscription in the 30 days preceding
                the claim.
              </p>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">10. Governing law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of
                Belgium. Any disputes arising from these Terms shall be subject to the exclusive
                jurisdiction of the courts of Brabant Flamand, Belgium.
              </p>
              <p>
                If you are a consumer resident in the EU, you also benefit from any mandatory
                consumer protection provisions of the law of your country of residence.
              </p>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">11. Changes to these Terms</h2>
              <p>
                We may update these Terms of Service from time to time. We will notify you of significant
                changes via the app or email at least 14 days in advance. Your continued use of Animalink
                after the effective date constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">12. Contact</h2>
              <p>
                For questions or concerns about these Terms of Service, contact us at:
              </p>
              <div className="bg-surface border border-rim rounded-xl p-5 space-y-1 mt-2">
                <p className="text-white font-title text-sm">José Carlos Pérez Rojas</p>
                <p>Aarschot 3200, Brabant Flamand, Belgique</p>
                <p>
                  <a href="mailto:supp@animalink.city" className="text-gold hover:text-gold-soft underline underline-offset-2 transition-colors">
                    supp@animalink.city
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
