import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FileText, Phone, ClipboardCheck, Banknote, ArrowRight } from "lucide-react";
import { PageHero, Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTA";

export const Route = createFileRoute("/_site/claims")({
  head: () => ({
    meta: [
      { title: "Claims — Naingate Insurance Brokers" },
      { name: "description", content: "Four simple steps. An average settlement in 48 hours. Here's how the Naingate claims process works." },
      { property: "og:title", content: "Naingate Claims" },
      { property: "og:description", content: "Average claim settled in 48 hours." },
    ],
    links: [{ rel: "canonical", href: "/claims" }],
  }),
  component: ClaimsPage,
});

const steps = [
  { icon: Phone, title: "Notify us", body: "Call our 24/7 hotline, email claims@naingate.com or file via the customer portal — within 7 days of the incident." },
  { icon: FileText, title: "Submit documents", body: "Upload your policy number, incident report, photos and any third-party documentation. We'll guide you through what's needed." },
  { icon: ClipboardCheck, title: "Assessment", body: "A dedicated claims handler reviews your file and arranges any inspection or surveyor visit — typically within 24 hours." },
  { icon: Banknote, title: "Settlement", body: "Once approved, funds are paid directly into your nominated account. Average end-to-end turnaround: 48 hours." },
];

function ClaimsPage() {
  return (
    <>
      <PageHero
        eyebrow="Claims"
        title="A claim is a promise kept."
        description="We measure ourselves on how quickly we pay — not on how cleverly we delay. Here's exactly how the Naingate claims process works."
      />

      <Section>
        <SectionHeader eyebrow="The process" title="Four steps from incident to settlement." />
        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-border" />
          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 h-12 w-12 rounded-full bg-navy text-gold flex items-center justify-center mb-5">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Step 0{i + 1}</div>
                <h3 className="font-display text-xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-muted/40">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Need to file now?</div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy">Reach our claims desk, 24/7.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Our claims team is available around the clock. Have your policy number, the incident date, and any supporting documents ready to speed things up.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-navy text-navy-foreground font-medium hover:bg-navy/90">
                Start a claim <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+2347000000000" className="inline-flex items-center h-12 px-6 rounded-full border border-border hover:border-gold hover:text-gold transition">
                Call claims hotline
              </a>
            </div>
          </div>
          <div className="rounded-3xl bg-navy text-navy-foreground p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-gold opacity-70" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.2em] text-gold">What you'll need</div>
              <ul className="mt-4 space-y-3 text-sm">
                {["Policy number", "Date & description of incident", "Photographs (if applicable)", "Police / third-party reports", "Bank account for settlement"].map((x) => (
                  <li key={x} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-gold" />{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
