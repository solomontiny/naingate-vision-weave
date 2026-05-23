import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Users, Award, Car, HardHat, Building2, Sprout, ShieldAlert, HeartPulse, Banknote, Scale } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTA";
import { products, stats, partners } from "@/lib/site";

const iconMap = { Car, HardHat, Building2, Sprout, ShieldAlert, HeartPulse, Banknote, Scale };

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Naingate Insurance Brokers — Premium cover for Nigeria's modern economy" },
      { name: "description", content: "Motor, property, engineering, agric, life and special-risk insurance from Naingate — a Digital Space Capital company." },
      { property: "og:title", content: "Naingate Insurance Brokers" },
      { property: "og:description", content: "Premium cover engineered for the modern economy." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ProductsPreview />
      <Promise />
      <PartnersStrip />
      <CTABanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="absolute inset-0 bg-radial-gold" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-24 sm:pb-36">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold"
            >
              A Digital Space Capital company
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]"
            >
              Insurance, <span className="text-gold italic">refined</span>
              <br />for the modern economy.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 text-lg text-navy-foreground/75 max-w-xl"
            >
              From motor to marine, engineering to agric — Naingate underwrites the risks that move Nigeria forward, with claims paid in days, not months.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/contact" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-gold text-gold-foreground font-medium hover:bg-gold/90 transition">
                Get a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="inline-flex items-center h-12 px-6 rounded-full border border-white/20 hover:border-gold hover:text-gold transition">
                Explore products
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-2xl">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-gold">
                <span>Policy preview</span>
                <span className="text-navy-foreground/50">Live</span>
              </div>
              <div className="mt-4 rounded-2xl bg-navy-foreground/5 p-5">
                <div className="text-xs text-navy-foreground/60">Policyholder</div>
                <div className="text-lg font-medium">Equator Energy Ltd.</div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-navy-foreground/60 text-xs">Cover</div>
                    <div className="font-medium">Special Risk</div>
                  </div>
                  <div>
                    <div className="text-navy-foreground/60 text-xs">Sum insured</div>
                    <div className="font-medium">₦4.2B</div>
                  </div>
                  <div>
                    <div className="text-navy-foreground/60 text-xs">Premium</div>
                    <div className="font-medium">₦62.5M / yr</div>
                  </div>
                  <div>
                    <div className="text-navy-foreground/60 text-xs">Status</div>
                    <div className="font-medium text-gold">Active</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-gold/10 border border-gold/20 p-4">
                <ShieldCheck className="h-5 w-5 text-gold shrink-0" />
                <p className="text-sm">Last claim settled in <span className="font-semibold">36 hours</span>.</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gold/20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <Section className="!py-16 border-b border-border">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="text-3xl sm:text-4xl font-display font-semibold text-navy">{s.value}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function ProductsPreview() {
  return (
    <Section>
      <SectionHeader
        eyebrow="What we cover"
        title="Eight product lines. One promise."
        description="A complete portfolio of personal and commercial insurance, underwritten by specialists who know your sector."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => {
          const Icon = iconMap[p.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="group relative rounded-2xl border border-border bg-card p-6 hover:border-gold/60 hover:shadow-lg transition"
            >
              <div className="h-10 w-10 rounded-xl bg-navy/5 flex items-center justify-center text-navy group-hover:bg-gold/15 group-hover:text-gold transition">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.summary}</p>
              <Link to="/products" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy group-hover:text-gold">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function Promise() {
  const items = [
    { icon: ShieldCheck, title: "Underwriting discipline", body: "Risk-based pricing built on 30+ data points and sector expertise." },
    { icon: Clock, title: "Claims in 48 hours", body: "An average claim settled in two business days — measured, not promised." },
    { icon: Users, title: "Dedicated advisory", body: "A named account manager from quote to renewal — never a call centre script." },
    { icon: Award, title: "Backed by Digital Space Capital", body: "Capitalised by a diversified group with deep financial-services pedigree." },
  ];
  return (
    <Section className="bg-muted/40">
      <SectionHeader eyebrow="Why Naingate" title="Built differently. Priced fairly. Paid faster." />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
            className="rounded-2xl bg-background border border-border p-6"
          >
            <div className="h-10 w-10 rounded-full bg-gold/15 flex items-center justify-center text-gold">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-navy">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function PartnersStrip() {
  return (
    <Section className="!py-16 border-t border-border">
      <div className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Trusted by leaders across sectors</div>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center">
        {partners.slice(0, 12).map((p) => (
          <div key={p} className="text-center font-display text-sm sm:text-base text-muted-foreground/70 hover:text-navy transition">
            {p}
          </div>
        ))}
      </div>
    </Section>
  );
}
