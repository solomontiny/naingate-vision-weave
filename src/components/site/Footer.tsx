import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { site, products } from "@/lib/site";
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="text-navy-foreground [&_*]:text-navy-foreground">
              <Logo />
            </div>
            <p className="mt-4 text-sm text-navy-foreground/70 max-w-xs">
              {site.tagline} A subsidiary of {site.parent}.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={site.social.linkedin} className="p-2 rounded-full border border-white/15 hover:border-gold hover:text-gold transition"><Linkedin className="h-4 w-4" /></a>
              <a href={site.social.twitter} className="p-2 rounded-full border border-white/15 hover:border-gold hover:text-gold transition"><Twitter className="h-4 w-4" /></a>
              <a href={site.social.instagram} className="p-2 rounded-full border border-white/15 hover:border-gold hover:text-gold transition"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-gold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-navy-foreground/80">
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/careers" className="hover:text-gold">Careers</Link></li>
              <li><Link to="/sponsorship" className="hover:text-gold">Sponsorship</Link></li>
              <li><Link to="/partners" className="hover:text-gold">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-gold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-navy-foreground/80">
              {products.slice(0, 6).map((p) => (
                <li key={p.slug}><Link to="/products" className="hover:text-gold">{p.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-gold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-navy-foreground/80">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold" /><span>{site.address}</span></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold" /><span>{site.phone}</span></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold" /><span>{site.email}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-navy-foreground/60">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>A subsidiary of {site.parent}.</p>
        </div>
      </div>
    </footer>
  );
}
