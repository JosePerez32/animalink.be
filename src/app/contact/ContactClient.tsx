'use client';

import { useState } from 'react';
import { Starfield } from "@/components/effects/Starfield";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";

export default function ContactClient() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('https://api.animalink.city/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error();
            setStatus('ok');
            setForm({ name: '', email: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <>
            <Starfield />
            <section className="pt-40 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <SectionTag>Reach Out</SectionTag>
                            <h1 className="font-title text-4xl text-white mb-6">Talk to<br />the makers</h1>
                            <p className="text-text leading-relaxed mb-8">
                                We&apos;re a small team with a big universe. Every message is read by a human who cares about Furrapest as much as you do.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { icon: "✉️", text: "supp@animalink.city", href: "mailto:supp@animalink.city" },
                                    { icon: "💬", text: "Community Discord", href: "#" },
                                    { icon: "🐦", text: "@animalinkapp", href: "#" },
                                ].map((link) => (
                                    <a
                                        key={link.text}
                                        href={link.href}
                                        className="flex items-center gap-4 p-4 bg-card border border-rim rounded-xl hover:border-gold/40 transition-colors"
                                    >
                                        <span className="text-xl">{link.icon}</span>
                                        <span className="text-sm text-text">{link.text}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-card border border-rim rounded-2xl p-8">
                            <h3 className="font-title text-xl text-white mb-2">Send a message</h3>
                            <p className="text-sm text-muted mb-6">A real person reads this. Not an AI.</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block font-title text-xs tracking-widest uppercase text-muted mb-2">Your Name</label>
                                    <input
                                        value={form.name}
                                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                                        type="text"
                                        className="w-full bg-surface border border-rim rounded-xl px-4 py-3 text-white focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/10"
                                        placeholder="How the characters will know you"
                                    />
                                </div>
                                <div>
                                    <label className="block font-title text-xs tracking-widest uppercase text-muted mb-2">Email</label>
                                    <input
                                        value={form.email}
                                        onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                                        type="email"
                                        className="w-full bg-surface border border-rim rounded-xl px-4 py-3 text-white focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/10"
                                        placeholder="For our reply"
                                    />
                                </div>
                                <div>
                                    <label className="block font-title text-xs tracking-widest uppercase text-muted mb-2">Message</label>
                                    <textarea
                                        value={form.message}
                                        onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                                        rows={4}
                                        className="w-full bg-surface border border-rim rounded-xl px-4 py-3 text-white focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/10 resize-none"
                                        placeholder="What&apos;s on your mind?"
                                    />
                                </div>
                                {status === 'ok' && (
                                    <p className="text-sm text-gold">✦ Message sent! We'll get back to you soon.</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
                                )}
                                <Button type="submit" fullWidth disabled={status === 'sending'}>
                                    {status === 'sending' ? 'Sending...' : 'Send Message ✦'}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}