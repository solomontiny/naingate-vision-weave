import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";
import { Mail, Phone, MapPin } from "lucide-react";

const offices = [
  "5a Adekunle Lawal Street, off Oba Adeyinka Oyekan Road, Ikoyi, Lagos Nigeria",
  "42 Kenneth Dike Way, Bodija, Ibadan",
  "9 Tema St, Wuse Zone 6, Abuja",
];

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="font-display text-xl font-semibold">Naingate Insurance</div>
            <p className="mt-4 text-sm text-navy-foreground/70 max-w-xs">
              Registered Insurance Broker with NAICOM and NCRIB. Risk management & insurance solutions across Nigeria.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-gold mb-5">Company</h4>
            <ul className="space-y-2.5 text-sm text-navy-foreground/85">
              <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
              <li><Link to="/products" className="hover:text-gold">Services</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-gold mb-5">Offices</h4>
            <ul className="space-y-3 text-sm text-navy-foreground/85">
              {offices.map((o) => (
                <li key={o} className="flex gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-gold mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-navy-foreground/85">
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold" /><span>info@naingateinsurancebrokers.com</span></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold" /><span>{site.phone}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-navy-foreground/60">
          © {new Date().getFullYear()} {site.name} Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
