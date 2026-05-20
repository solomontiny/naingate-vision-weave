import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { site } from "@/lib/site";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Naingate Insurance" },
      { name: "description", content: "Speak with a Naingate advisor. Get a quote, file a claim, or partner with us." },
      { property: "og:title", content: "Contact Naingate" },
      { property: "og:description", content: "Speak with an advisor today." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk cover."
        description="Tell us what you need to protect. An advisor will follow up within one business day."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border bg-card p-8 sm:p-10 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Company (optional)" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <div>
              <label className="text-sm font-medium text-navy">Interest</label>
              <select required className="mt-2 w-full h-12 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40">
                <option>Get a quote</option>
                <option>File a claim</option>
                <option>Sponsorship enquiry</option>
                <option>Partnership / Bancassurance</option>
                <option>Press / Media</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-navy">Message</label>
              <textarea
                required rows={5} name="message"
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
                placeholder="Tell us a little about what you need…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-navy text-navy-foreground font-medium hover:bg-navy/90 transition w-full sm:w-auto"
            >
              {sent ? (<><Check className="h-4 w-4 text-gold" /> Message sent</>) : (<>Send message <Send className="h-4 w-4" /></>)}
            </button>
          </motion.form>

          <div className="space-y-6">
            <div className="rounded-3xl bg-navy text-navy-foreground p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gold opacity-70" />
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.2em] text-gold">Head office</div>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>{site.address}</span></li>
                  <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>{site.phone}</span></li>
                  <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>{site.email}</span></li>
                </ul>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-border bg-muted aspect-[4/3] relative">
              <div className="absolute inset-0 bg-grid opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex h-12 w-12 rounded-full bg-navy text-gold items-center justify-center mb-3">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="font-display text-lg text-navy">Victoria Island, Lagos</div>
                  <div className="text-xs text-muted-foreground mt-1">Map preview</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium text-navy">{label}</label>
      <input
        type={type} name={name} required={required}
        className="mt-2 w-full h-12 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40"
      />
    </div>
  );
}
