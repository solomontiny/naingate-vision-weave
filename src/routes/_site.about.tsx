import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section, SectionHeader, PageHero } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTA";
import { team, stats } from "@/lib/site";
import { Compass, Target, Eye } from "lucide-react";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About — Naingate Insurance" },
      { name: "description", content: "Naingate Insurance is a subsidiary of Digital Space Capital, building a modern, data-driven insurer for Nigeria and beyond." },
      { property: "og:title", content: "About Naingate Insurance" },
      { property: "og:description", content: "A modern insurer for the African economy, backed by Digital Space Capital." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A modern insurer for an ambitious economy."
        description="Naingate Insurance was built to close the protection gap for Nigeria's businesses and households — combining traditional underwriting craft with digital-first operations."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Our story</div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy">From a holding company's vision to a national insurer.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>Naingate Insurance was incorporated as the insurance arm of Digital Space Capital — a diversified holding group with interests in financial services, technology and infrastructure.</p>
              <p>We launched with a simple thesis: Nigerians deserve insurance that pays. Not a brochure full of promises, but cover that responds within days when life and business demand it.</p>
              <p>Today we serve thousands of policyholders across motor, property, engineering, agric, marine, energy, life and liability lines — backed by reinsurance partnerships with global names and a claims engine designed for speed.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-6">
                <div className="text-3xl font-display font-semibold text-navy">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-muted/40">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { icon: Compass, title: "Mission", body: "To make quality insurance accessible, transparent and dependable for every Nigerian business and household." },
            { icon: Eye, title: "Vision", body: "To be Africa's most trusted modern insurer — the default partner for risk, recovery and resilience." },
            { icon: Target, title: "Values", body: "Discipline. Speed. Empathy. Stewardship. Integrity in every policy, every claim, every conversation." },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-background border border-border p-8"
            >
              <div className="h-12 w-12 rounded-2xl bg-navy text-gold flex items-center justify-center">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-navy">{v.title}</h3>
              <p className="mt-2 text-muted-foreground">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Leadership" title="Operators with decades of underwriting and claims experience." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-navy via-navy/80 to-gold/30 relative">
                <div className="absolute inset-0 flex items-center justify-center font-display text-6xl text-gold/40">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>
              <div className="p-5">
                <div className="font-display font-semibold text-navy">{m.name}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{m.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
