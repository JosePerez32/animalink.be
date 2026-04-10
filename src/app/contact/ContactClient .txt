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
                        {/* Todo tu JSX existente aquí */}
                    </div>
                </div>
            </section>
        </>
    );
}