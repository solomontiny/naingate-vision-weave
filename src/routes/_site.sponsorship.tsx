import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Trophy, Megaphone, HeartHandshake, ArrowRight } from "lucide-react";
import { PageHero, Section, SectionHeader } from "@/components/site/Section";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/sponsorship")({
  head: () => ({
    meta: [
      { title: "Sponsorship — Naingate Insurance Brokers" },
      { name: "description", content: "Naingate sponsors initiatives in sport, culture and community that align with our values of resilience, trust and ambition." },
      { property: "og:title", content: "Naingate Sponsorship" },
      { property: "og:description", content: "Partnering with the people, events and causes that move Nigeria forward." },
    ],
    links: [{ rel: "canonical", href: "/sponsorship" }],
  }),
  component: SponsorshipPage,
});

const pillars = [
  { icon: Trophy, title: "Sport", body: "Backing grassroots and elite athletics, football academies and motorsport — where discipline meets ambition." },
  { icon: Megaphone, title: "Culture", body: "Supporting Nigeria's creative industries, from film and music festivals to design and literary platforms." },
  { icon: HeartHandshake, title: "Community", body: "Funding financial literacy, road-safety and resilience programmes in the communities where we operate." },
];

const opportunities = [
  { tier: "Title", price: "From ₦150M", perks: ["Naming rights", "Brand integration across all assets", "Hospitality & VIP access", "Quarterly impact report"] },
  { tier: "Strategic", price: "From ₦50M", perks: ["Co-branded campaigns", "On-site activation", "Content & PR partnership", "Annual impact report"] },
  { tier: "Community", price: "From ₦10M", perks: ["Logo placement", "Local activation", "Social co-promotion"] },
];

function SponsorshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsorship"
        title="Partnering with the people moving Nigeria forward."
        description="Naingate invests in sport, culture and community programmes that reflect our values — resilience, trust and ambition."
      />

      <Section>
        <SectionHeader eyebrow="Where we invest" title="Three pillars. One philosophy." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="h-12 w-12 rounded-2xl bg-gold/15 text-gold flex items-center justify-center">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-navy">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/40">
        <SectionHeader eyebrow="Opportunities" title="Partnership tiers built around outcomes." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {opportunities.map((o, i) => (
            <motion.div
              key={o.tier}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-2xl border p-8 ${i === 0 ? "bg-navy text-navy-foreground border-navy" : "bg-background border-border"}`}
            >
              <div className={`text-xs uppercase tracking-[0.2em] ${i === 0 ? "text-gold" : "text-muted-foreground"}`}>{o.tier}</div>
              <div className="mt-3 font-display text-3xl font-semibold">{o.price}</div>
              <ul className={`mt-6 space-y-2 text-sm ${i === 0 ? "text-navy-foreground/85" : "text-muted-foreground"}`}>
                {o.perks.map((perk) => (
                  <li key={perk} className="flex gap-2"><span className={`mt-2 h-1 w-1 rounded-full ${i === 0 ? "bg-gold" : "bg-navy"}`} />{perk}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-navy text-navy-foreground font-medium hover:bg-navy/90">
            Submit a sponsorship proposal <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
