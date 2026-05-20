import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { LayoutDashboard, FileText, Users, MessageSquare, Settings, LogOut, TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/site/Logo";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Naingate Admin" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminDashboard,
});

const sidebar = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: FileText, label: "Policies" },
  { icon: FileText, label: "Claims" },
  { icon: Users, label: "Customers" },
  { icon: MessageSquare, label: "Messages" },
  { icon: Settings, label: "Settings" },
];

const kpis = [
  { label: "Active policies", value: "25,418", delta: "+4.2%", up: true },
  { label: "Open claims", value: "342", delta: "-8.1%", up: false },
  { label: "Premium MTD", value: "₦1.84B", delta: "+12.6%", up: true },
  { label: "Settlement rate", value: "98.4%", delta: "+0.3%", up: true },
];

const recentClaims = [
  { id: "CLM-20461", customer: "Equator Energy Ltd.", product: "Special Risk", amount: "₦42.5M", status: "In review" },
  { id: "CLM-20460", customer: "A. Okeke", product: "Motor", amount: "₦1.2M", status: "Approved" },
  { id: "CLM-20459", customer: "Pinegrove Realty", product: "Property", amount: "₦18.0M", status: "Paid" },
  { id: "CLM-20458", customer: "Helio Agritech", product: "Agric", amount: "₦7.4M", status: "In review" },
  { id: "CLM-20457", customer: "F. Bello", product: "Life", amount: "₦3.0M", status: "Approved" },
];

const messages = [
  { name: "Cobalt Engineering", topic: "Quote — engineering all-risk", time: "2h ago" },
  { name: "Marina Shipping", topic: "Marine cargo renewal", time: "5h ago" },
  { name: "T. Akinwale", topic: "Sponsorship proposal", time: "1d ago" },
];

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-muted/30 flex">
      <aside className="hidden lg:flex w-64 flex-col bg-navy text-navy-foreground p-6">
        <div className="[&_*]:text-navy-foreground"><Logo /></div>
        <nav className="mt-10 flex-1 space-y-1">
          {sidebar.map((s) => (
            <button
              key={s.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                s.active ? "bg-white/10 text-gold" : "text-navy-foreground/70 hover:bg-white/5 hover:text-navy-foreground"
              }`}
            >
              <s.icon className="h-4 w-4" /> {s.label}
            </button>
          ))}
        </nav>
        <Link to="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-navy-foreground/70 hover:bg-white/5">
          <LogOut className="h-4 w-4" /> Sign out
        </Link>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border bg-background px-6 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Admin</div>
            <div className="font-display text-lg text-navy -mt-0.5">Overview</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <div className="text-sm font-medium text-navy">Adaeze Okonkwo</div>
              <div className="text-xs text-muted-foreground">Group MD</div>
            </div>
            <div className="h-10 w-10 rounded-full bg-navy text-gold flex items-center justify-center font-display text-sm">AO</div>
          </div>
        </header>

        <main className="p-6 lg:p-8 space-y-6 overflow-x-hidden">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((k, i) => (
              <motion.div
                key={k.label}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl bg-background border border-border p-5"
              >
                <div className="text-xs text-muted-foreground">{k.label}</div>
                <div className="mt-2 font-display text-2xl font-semibold text-navy">{k.value}</div>
                <div className={`mt-1 inline-flex items-center gap-1 text-xs ${k.up ? "text-emerald-600" : "text-rose-600"}`}>
                  {k.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}{k.delta}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-2xl bg-background border border-border">
              <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-navy">Recent claims</h3>
                <button className="text-sm text-muted-foreground hover:text-navy inline-flex items-center gap-1">View all <ArrowUpRight className="h-3.5 w-3.5" /></button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-xs uppercase tracking-wider text-muted-foreground bg-muted/40">
                    <tr>
                      <th className="text-left px-6 py-3">Claim</th>
                      <th className="text-left px-6 py-3">Customer</th>
                      <th className="text-left px-6 py-3">Product</th>
                      <th className="text-left px-6 py-3">Amount</th>
                      <th className="text-left px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentClaims.map((c) => (
                      <tr key={c.id} className="border-t border-border">
                        <td className="px-6 py-3 font-mono text-xs text-navy">{c.id}</td>
                        <td className="px-6 py-3">{c.customer}</td>
                        <td className="px-6 py-3 text-muted-foreground">{c.product}</td>
                        <td className="px-6 py-3 font-medium">{c.amount}</td>
                        <td className="px-6 py-3">
                          <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                            c.status === "Paid" ? "bg-emerald-100 text-emerald-700" :
                            c.status === "Approved" ? "bg-gold/15 text-navy" :
                            "bg-muted text-muted-foreground"
                          }`}>{c.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-2xl bg-background border border-border">
              <div className="px-6 py-4 border-b border-border">
                <h3 className="font-display text-lg font-semibold text-navy">Latest messages</h3>
              </div>
              <ul className="divide-y divide-border">
                {messages.map((m) => (
                  <li key={m.name} className="px-6 py-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-medium text-navy">{m.name}</div>
                        <div className="text-sm text-muted-foreground mt-0.5">{m.topic}</div>
                      </div>
                      <div className="text-xs text-muted-foreground shrink-0">{m.time}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-navy text-navy-foreground p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-gold opacity-60" />
            <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-gold">v2 preview</div>
                <h3 className="mt-1 font-display text-xl font-semibold">Admin features coming soon</h3>
                <p className="text-navy-foreground/70 text-sm mt-1">Real authentication, role-based access, and DB-backed claims & policy management.</p>
              </div>
              <Link to="/" className="self-start inline-flex items-center gap-2 rounded-full border border-white/20 px-5 h-11 text-sm hover:border-gold hover:text-gold transition">
                Back to site
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
