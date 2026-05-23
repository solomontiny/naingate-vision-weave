import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero, Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTA";
import { partners } from "@/lib/site";

export const Route = createFileRoute("/_site/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Naingate Insurance Brokers" },
      { name: "description", content: "Naingate partners with leading banks, reinsurers, brokers and corporates across Africa and beyond." },
      { property: "og:title", content: "Naingate Partners" },
      { property: "og:description", content: "Built on a network of trusted reinsurers, banks, brokers and corporate clients." },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: PartnersPage,
});

const categories = [
  { name: "Reinsurance", items: ["Continental Re", "Africa Re", "Munich Re (cession)", "Swiss Re (cession)"] },
  { name: "Bancassurance", items: ["FirstLine Bank", "Apex Microfinance", "Helio Digital Bank", "Marina Trust"] },
  { name: "Brokers", items: ["Northstar Brokers", "Cobalt Risk", "Pinegrove Advisory", "Lumen Insurance Services"] },
  { name: "Technology", items: ["Digital Space Capital", "Cobalt Cloud", "Verdant Data", "Anchor Identity"] },
];

function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="A network built on shared standards."
        description="From global reinsurers to local distribution partners — our network exists to make cover broader, claims faster, and service better."
      />

      <Section>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 12) * 0.03 }}
              className="bg-card aspect-[3/2] flex items-center justify-center p-6 text-center text-sm sm:text-base font-display text-muted-foreground hover:text-navy transition"
            >
              {p}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/40">
        <SectionHeader eyebrow="Categories" title="Four ecosystems. One Naingate." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl bg-background border border-border p-6"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-gold">{c.name}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {c.items.map((it) => <li key={it} className="text-muted-foreground">{it}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
