import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero, Section } from "@/components/site/Section";
import { CTABanner } from "@/components/site/CTA";
import { faqs } from "@/lib/site";

export const Route = createFileRoute("/_site/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Naingate Insurance Brokers" },
      { name: "description", content: "Answers to the most common questions about Naingate Insurance Brokers policies, claims and account management." },
      { property: "og:title", content: "Naingate FAQ" },
      { property: "og:description", content: "Common questions about cover, claims and accounts — answered." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question", name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers, fast."
        description="The questions our customers ask most often. Don't see yours? Reach out — we respond within one business day."
      />
      <Section>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-0">
                <AccordionTrigger className="text-left text-base sm:text-lg font-display font-semibold text-navy py-6 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 pr-8">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
