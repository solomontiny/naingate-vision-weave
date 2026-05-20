import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy text-navy-foreground p-10 sm:p-16">
          <div className="absolute inset-0 bg-radial-gold opacity-80" />
          <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Talk to an advisor</div>
              <h3 className="text-3xl sm:text-4xl font-semibold">Build a policy as serious as your ambition.</h3>
              <p className="mt-4 text-navy-foreground/75 max-w-xl">
                Our advisors design coverage around your risk — not the other way around. Get a tailored quote in under 24 hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/contact" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-gold text-gold-foreground font-medium hover:bg-gold/90 transition">
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="inline-flex items-center h-12 px-6 rounded-full border border-white/20 hover:border-gold hover:text-gold transition">
                Explore products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
