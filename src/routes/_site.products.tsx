import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Car, HardHat, Building2, Sprout, ShieldAlert, HeartPulse, Banknote, Scale, ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTA";
import { products } from "@/lib/site";

const iconMap = { Car, HardHat, Building2, Sprout, ShieldAlert, HeartPulse, Banknote, Scale };

export const Route = createFileRoute("/_site/products")({
  head: () => ({
    meta: [
      { title: "Insurance Products — Naingate" },
      { name: "description", content: "Motor, engineering, property, agric, special risk, life, pecuniary and liability insurance from Naingate." },
      { property: "og:title", content: "Insurance Products — Naingate" },
      { property: "og:description", content: "Eight product lines. One promise. Coverage built for the modern economy." },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our products"
        title="Cover for every risk you carry."
        description="Eight specialised product lines, each underwritten by sector experts and backed by global reinsurance."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p, i) => {
            const Icon = iconMap[p.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className="group rounded-2xl border border-border bg-card p-8 hover:border-gold/60 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="h-12 w-12 rounded-xl bg-navy text-gold flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">0{i + 1}</div>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-navy">{p.name}</h3>
                <p className="mt-2 text-muted-foreground">{p.summary}</p>
                <ul className="mt-5 space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" /> <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-navy group-hover:text-gold">
                  Request a quote <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
