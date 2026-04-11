import { Starfield } from "@/components/effects/Starfield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Animalink",
  description: "How Animalink collects, uses, and protects your personal data.",
};

const lastUpdated = "2025";

export default function PrivacyPage() {
  return (
    <>
      <Starfield />

      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full bg-lilac/4 blur-[120px]" />
      </div>

      <section className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-3xl">

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-title text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-lilac/30 text-lilac">
                Legal
              </span>
              <span className="font-title text-xs tracking-widest uppercase text-muted">
                Last updated {lastUpdated}
              </span>
            </div>
            <h1 className="font-title text-4xl md:text-5xl text-white mb-5 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-text leading-relaxed">
              This Privacy Policy explains how Animalink collects, uses, stores, and protects your
              personal data when you use our mobile application and website. We are committed to
              protecting your privacy in accordance with the General Data Protection Regulation (GDPR)
              and applicable Belgian law.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 text-text text-sm leading-relaxed">

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">1. Data Controller</h2>
              <p>
                The data controller responsible for your personal data is:
              </p>
              <div className="bg-surface border border-rim rounded-xl p-5 space-y-1">
                <p className="text-white font-title text-sm">José Carlos Pérez Rojas</p>
                <p>Aarschot 3200, Brabant Flamand, Belgique</p>
                <p>
                  Email:{" "}
                  <a href="mailto:supp@animalink.city" className="text-gold hover:text-gold-soft underline underline-offset-2 transition-colors">
                    supp@animalink.city
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">2. What data we collect</h2>
              <p>We collect only the data necessary to provide the Animalink service:</p>
              <div className="space-y-4 mt-2">
                {[
                  {
                    title: "Account data",
                    detail: "Email address, display name, and username provided at registration. Optionally, a profile avatar you upload.",
                  },
                  {
                    title: "Conversation data",
                    detail: "Messages exchanged with AI characters within the app. These are processed to generate responses and are not sold or shared with third parties.",
                  },
                  {
                    title: "Subscription data",
                    detail: "Purchase and subscription status managed through Google Play. We do not store payment card details — these are handled entirely by Google.",
                  },
                  {
                    title: "Technical data",
                    detail: "Device type, operating system version, app version, and anonymized usage analytics to improve performance and fix bugs.",
                  },
                  {
                    title: "Communication data",
                    detail: "Emails you send to supp@animalink.city for support purposes.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-rim pl-4">
                    <p className="font-title text-xs tracking-widest uppercase text-lilac mb-1">{item.title}</p>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">3. Legal basis for processing</h2>
              <p>We process your personal data on the following legal grounds under GDPR Article 6:</p>
              <div className="space-y-3 mt-2">
                {[
                  { basis: "Contract performance", detail: "To provide the Animalink app and services you have signed up for." },
                  { basis: "Legitimate interests", detail: "To improve the app, fix bugs, prevent abuse, and ensure service security." },
                  { basis: "Legal obligation", detail: "To comply with applicable Belgian and EU law." },
                  { basis: "Consent", detail: "For optional communications such as newsletters or notifications, where you have opted in." },
                ].map((item) => (
                  <div key={item.basis} className="flex gap-4">
                    <span className="text-gold text-xs mt-1 flex-shrink-0">✦</span>
                    <p><span className="text-white font-title text-xs tracking-wide uppercase">{item.basis}:</span> {item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">4. How we use your data</h2>
              <p>Your data is used exclusively to:</p>
              <div className="space-y-2 mt-2">
                {[
                  "Create and manage your Animalink account",
                  "Deliver AI character conversations within the app",
                  "Process and manage your Crown subscription via Google Play",
                  "Send transactional emails (account verification, support replies)",
                  "Improve app performance and fix technical issues",
                  "Comply with legal obligations",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-lilac text-xs mt-1 flex-shrink-0">◎</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-muted">
                We do not sell, rent, or trade your personal data to third parties for marketing purposes.
              </p>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">5. Third-party services</h2>
              <p>Animalink uses the following third-party services, each with their own privacy policies:</p>
              <div className="space-y-4 mt-2">
                {[
                  { name: "Supabase", role: "Authentication and database", link: "https://supabase.com/privacy" },
                  { name: "RevenueCat", role: "Subscription management", link: "https://www.revenuecat.com/privacy" },
                  { name: "Google Play / Firebase", role: "App distribution and notifications", link: "https://policies.google.com/privacy" },
                  { name: "Resend", role: "Transactional email delivery", link: "https://resend.com/legal/privacy-policy" },
                ].map((svc) => (
                  <div key={svc.name} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-white font-title text-xs tracking-wide uppercase mb-0.5">{svc.name}</p>
                      <p className="text-muted text-xs">{svc.role}</p>
                    </div>
                    <a
                      href={svc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-title text-xs tracking-widest uppercase text-gold hover:text-gold-soft transition-colors whitespace-nowrap"
                    >
                      Privacy policy →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">6. Data retention</h2>
              <p>
                We retain your personal data for as long as your account is active or as necessary to provide
                the service. If you delete your account, your personal data is permanently deleted within
                30 days, except where retention is required by law.
              </p>
              <p>
                Conversation logs may be retained in anonymized form for up to 12 months for the purpose
                of improving AI model quality.
              </p>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">7. Your rights under GDPR</h2>
              <p>As a resident of the European Union, you have the following rights regarding your personal data:</p>
              <div className="space-y-3 mt-2">
                {[
                  { right: "Right of access", detail: "Request a copy of the personal data we hold about you." },
                  { right: "Right to rectification", detail: "Request correction of inaccurate or incomplete data." },
                  { right: "Right to erasure", detail: "Request deletion of your personal data ('right to be forgotten')." },
                  { right: "Right to restriction", detail: "Request that we limit how we process your data in certain circumstances." },
                  { right: "Right to portability", detail: "Receive your data in a structured, machine-readable format." },
                  { right: "Right to object", detail: "Object to processing based on legitimate interests." },
                  { right: "Right to withdraw consent", detail: "Withdraw consent at any time where processing is based on consent." },
                ].map((item) => (
                  <div key={item.right} className="flex gap-4">
                    <span className="text-gold text-xs mt-1 flex-shrink-0">✦</span>
                    <p><span className="text-white">{item.right}:</span> {item.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:supp@animalink.city" className="text-gold hover:text-gold-soft underline underline-offset-2 transition-colors">
                  supp@animalink.city
                </a>
                . We will respond within 30 days.
              </p>
              <p>
                You also have the right to lodge a complaint with the Belgian Data Protection Authority (Autorité de protection des données):{" "}
                <a href="https://www.dataprotectionauthority.be" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-soft underline underline-offset-2 transition-colors">
                  www.dataprotectionauthority.be
                </a>
              </p>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">8. Data security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data
                against unauthorized access, alteration, disclosure, or destruction. These include encrypted
                data transmission (HTTPS), access controls, and regular security reviews.
              </p>
              <p>
                In the event of a data breach that poses a risk to your rights and freedoms, we will notify
                the relevant supervisory authority within 72 hours, and you directly where required by law.
              </p>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">9. Children's privacy</h2>
              <p>
                Animalink is not intended for users under the age of 13. We do not knowingly collect
                personal data from children under 13. If you believe a child has provided us with personal
                data, please contact us at{" "}
                <a href="mailto:supp@animalink.city" className="text-gold hover:text-gold-soft underline underline-offset-2 transition-colors">
                  supp@animalink.city
                </a>{" "}
                and we will delete it promptly.
              </p>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">10. Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will update the
                "Last updated" date at the top of this page and, where appropriate, notify you via the
                app or email. Continued use of Animalink after changes constitutes acceptance of the
                updated policy.
              </p>
            </div>

            <div className="bg-card border border-rim rounded-2xl p-7 space-y-3">
              <h2 className="font-title text-lg text-white">11. Contact</h2>
              <p>
                For any questions, requests, or concerns regarding this Privacy Policy or the processing
                of your personal data, contact us at:
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
