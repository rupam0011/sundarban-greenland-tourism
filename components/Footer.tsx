import Link from "next/link";
import { TreePine, Phone, Mail, MapPin, Globe, Camera, Video, ArrowUp } from "lucide-react";
import content from "@/data/content.json";

const footerLinks = [
  { heading: "Quick Links", links: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/packages", label: "Tour Packages" },
    { href: "/destinations", label: "Destinations" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]},
  { heading: "Top Packages", links: [
    { href: "/packages/1-day-sundarban-trip", label: "1 Day Trip" },
    { href: "/packages/1-night-2-days-sundarban-package", label: "1 Night / 2 Days" },
    { href: "/packages/2-nights-3-days-sundarban-package", label: "2 Nights / 3 Days" },
    { href: "/packages/hilsa-festival-special", label: "Hilsa Festival" },
    { href: "/packages/wildlife-photography-tour", label: "Photography Tour" },
  ]},
];

export default function Footer() {
  const { companyInfo } = content;

  return (
    <footer className="bg-mangrove-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <TreePine className="w-6 h-6 text-gold" />
              </div>
              <div>
                <span className="text-lg font-bold font-[family-name:var(--font-display)]">Sundarban</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-gold-light">Greenland Tourism</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Discover the mystique of the world&apos;s largest mangrove forest. Expertly guided tours into the heart of the Sundarbans.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Globe, href: companyInfo.socials.facebook },
                { icon: Camera, href: companyInfo.socials.instagram },
                { icon: Video, href: companyInfo.socials.youtube },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">{col.heading}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/60 text-sm hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-gold shrink-0" />
                <span className="text-white/60 text-sm">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-white/60 text-sm hover:text-white transition-colors">{companyInfo.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-white/60 text-sm hover:text-white transition-colors">{companyInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <a href="#top" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors group">
            <ArrowUp className="w-4 h-4 group-hover:text-gold transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
