import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Users, Award, TrendingUp, Car, HardHat, Building2, Sprout, ShieldAlert, HeartPulse, Banknote, Scale } from "lucide-react";
import { products } from "@/lib/site";
import heroSkyline from "@/assets/hero-skyline.jpg";

const iconMap = { Car, HardHat, Building2, Sprout, ShieldAlert, HeartPulse, Banknote, Scale };

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Naingate Insurance Brokers — Insurance solutions built on trust" },
      { name: "description", content: "Naingate Insurance Brokers delivers risk management and tailored insurance for corporates, government and individuals." },
      { property: "og:title", content: "Naingate Insurance Brokers" },
      { property: "og:description", content: "Insurance solutions built on trust." },
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
      <ProductsGrid />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground -mt-16 pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroSkyline})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-40 lg:py-48">
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-gold"
        >
          NAICOM & NCRIB Registered
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 max-w-3xl text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          Insurance solutions
          <br />
          <span className="text-gold">built on trust.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-6 text-lg text-navy-foreground/80 max-w-xl"
        >
          Naingate Insurance Brokers delivers risk management and tailored insurance for corporates, government and individuals — with prompt service and transparent advice.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link to="/products" className="inline-flex items-center gap-2 h-12 px-7 rounded-md bg-gold text-gold-foreground font-medium hover:bg-gold/90 transition">
            Explore Plans <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center h-12 px-7 rounded-md border border-white/30 hover:border-gold hover:text-gold transition">
            Get a Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { icon: ShieldCheck, value: "100%", label: "Regulated" },
    { icon: Users, value: "500+", label: "Clients served" },
    { icon: Award, value: "20+", label: "Years experience" },
    { icon: TrendingUp, value: "Africa", label: "Wide reach" },
  ];
  return (
    <section className="bg-muted/50 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-4"
            >
              <div className="h-12 w-12 rounded-lg bg-navy flex items-center justify-center text-gold shrink-0">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-2xl font-display font-semibold text-navy leading-none">{it.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{it.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsGrid() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.22em] text-gold font-medium">Our Products</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold text-navy tracking-tight">
            Coverage for every kind of risk
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            From motor and property to aviation and agriculture — we curate the best combination of cover for your needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((p, i) => {
            const Icon = iconMap[p.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group rounded-xl border border-border bg-card p-7 hover:border-gold/60 hover:shadow-lg transition"
              >
                <div className="h-12 w-12 rounded-lg bg-gold flex items-center justify-center text-gold-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-navy">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                <Link to="/products" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-gold transition">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-navy text-navy-foreground px-8 sm:px-16 py-16 sm:py-20 text-center">
          <div className="absolute inset-0 bg-radial-gold opacity-60" />
          <div className="relative">
            <h3 className="text-3xl sm:text-4xl font-semibold">Ready to protect what matters?</h3>
            <p className="mt-4 text-navy-foreground/75 max-w-xl mx-auto">
              Speak with our brokers for a personalised insurance audit and the right cover at competitive rates.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 h-12 px-7 rounded-md bg-gold text-gold-foreground font-medium hover:bg-gold/90 transition">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
