import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";
import { Logo } from "@/components/site/Logo";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Admin Login — Naingate" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => navigate({ to: "/admin/dashboard" }), 700);
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block relative bg-navy text-navy-foreground overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
        <div className="absolute inset-0 bg-radial-gold" />
        <div className="relative h-full flex flex-col justify-between p-12">
          <Link to="/" className="[&_*]:text-navy-foreground"><Logo /></Link>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Admin console</div>
            <h2 className="font-display text-4xl font-semibold leading-tight">
              The control room for<br />Naingate operations.
            </h2>
            <p className="mt-4 text-navy-foreground/70 max-w-md">
              Manage policies, claims, sponsorship enquiries and customer messages from a single dashboard.
            </p>
          </div>
          <div className="text-xs text-navy-foreground/50">© {new Date().getFullYear()} Naingate Insurance</div>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 sm:p-12 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="lg:hidden mb-8"><Logo /></div>
          <h1 className="font-display text-3xl font-semibold text-navy">Sign in</h1>
          <p className="mt-2 text-sm text-muted-foreground">Authorized personnel only. (Demo UI — no real authentication yet.)</p>

          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            <div>
              <label className="text-sm font-medium text-navy">Email</label>
              <div className="mt-2 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input type="email" defaultValue="admin@naingate.com" required
                  className="w-full h-12 rounded-xl border border-input bg-background pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-navy">Password</label>
              <div className="mt-2 relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input type="password" defaultValue="demo-password" required
                  className="w-full h-12 rounded-xl border border-input bg-background pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40" />
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              <input type="checkbox" className="rounded border-input" /> Remember this device
            </label>
            <button type="submit" disabled={loading}
              className="w-full h-12 rounded-full bg-navy text-navy-foreground font-medium hover:bg-navy/90 transition disabled:opacity-60">
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <div className="mt-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-navy underline underline-offset-4">← Back to website</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
