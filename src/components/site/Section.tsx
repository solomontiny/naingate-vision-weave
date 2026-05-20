import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow, title, description, center = false,
}: { eyebrow?: string; title: string; description?: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.2em] text-gold font-medium mb-3">{eyebrow}</div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy">{title}</h2>
      {description && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{description}</p>}
    </motion.div>
  );
}

export function PageHero({
  eyebrow, title, description,
}: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 bg-grid opacity-[0.07]" />
      <div className="absolute inset-0 bg-radial-gold" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">{title}</h1>
          {description && <p className="mt-6 text-lg text-navy-foreground/75 max-w-2xl">{description}</p>}
        </motion.div>
      </div>
    </div>
  );
}
