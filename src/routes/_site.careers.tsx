import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Briefcase, ArrowUpRight } from "lucide-react";
import { PageHero, Section, SectionHeader } from "@/components/site/Section";
import { jobs } from "@/lib/site";

export const Route = createFileRoute("/_site/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Naingate Insurance" },
      { name: "description", content: "Join Naingate. Build the modern insurer for Africa's most ambitious economy." },
      { property: "og:title", content: "Careers at Naingate" },
      { property: "og:description", content: "We're hiring underwriters, claims operators, engineers and customer-experience leaders." },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const values = [
  { title: "Own the outcome", body: "We optimise for what the customer feels, not what the org chart prefers." },
  { title: "Speed with care", body: "Move fast — but never at the cost of an underwriting or claims decision being right." },
  { title: "Build the system", body: "Every win should make the next one cheaper, faster and more reliable." },
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the insurer Nigeria deserves."
        description="We're a team of underwriters, operators and engineers building the modern insurance company we always wished existed. Join us."
      />

      <Section>
        <SectionHeader eyebrow="Our values" title="How we work." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-gold">0{i + 1}</div>
              <h3 className="mt-3 font-display text-lg font-semibold text-navy">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/40">
        <SectionHeader eyebrow="Open roles" title="We're hiring across underwriting, claims and technology." />
        <div className="mt-10 space-y-3">
          {jobs.map((j, i) => (
            <motion.a
              key={j.title}
              href="mailto:careers@naingate.com"
              initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl bg-background border border-border p-6 hover:border-gold/60 hover:shadow-md transition"
            >
              <div>
                <div className="font-display text-lg font-semibold text-navy group-hover:text-gold transition">{j.title}</div>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{j.team}</span>
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{j.location}</span>
                  <span>{j.type}</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-1 text-sm font-medium text-navy group-hover:text-gold">
                Apply <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground text-center">
          Don't see a role for you? Send your CV to <a href="mailto:careers@naingate.com" className="text-navy underline underline-offset-4 hover:text-gold">careers@naingate.com</a>.
        </p>
      </Section>
    </>
  );
}
