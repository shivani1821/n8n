import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { CONTACT, PRODUCTS } from "@/lib/site-data";
import { Logo } from "./Logo";

const linkClass = "text-sm text-espresso-foreground/70 transition-colors hover:text-accent";

export function SiteFooter() {
  return (
    <footer className="bg-espresso text-espresso-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-3 font-display text-lg italic text-accent">Every Crumb Tells a Story.</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-espresso-foreground/70">
            Freshly baked goodness, thoughtfully crafted with care and shared with love. Making
            everyday moments a little more delicious.
          </p>
          <div className="mt-6 space-y-2">
            <a href={`mailto:${CONTACT.email}`} className={`flex items-center gap-2 ${linkClass}`}>
              <Mail className="h-4 w-4" /> {CONTACT.email}
            </a>
            <p className="flex items-center gap-2 text-sm text-espresso-foreground/70">
              <Phone className="h-4 w-4" /> {CONTACT.phone}
            </p>
          </div>
        </div>

        <div>
          <h3 className="eyebrow !text-accent">Quick Links</h3>
          <ul className="mt-5 space-y-3">
            <li><Link to="/" className={linkClass}>Home</Link></li>
            <li><Link to="/" hash="about" className={linkClass}>About Us</Link></li>
            <li><Link to="/" hash="products" className={linkClass}>Our Products</Link></li>
            <li><Link to="/" hash="philosophy" className={linkClass}>Our Story</Link></li>
            <li><Link to="/contact" className={linkClass}>Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow !text-accent">Our Products</h3>
          <ul className="mt-5 space-y-3">
            {PRODUCTS.map((p) => (
              <li key={p.name}>
                <Link to="/" hash="products" className={linkClass}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow !text-accent">Customer Support</h3>
          <ul className="mt-5 space-y-3">
            <li><Link to="/" hash="faq" className={linkClass}>FAQs</Link></li>
            <li><Link to="/" hash="faq" className={linkClass}>Shipping &amp; Delivery</Link></li>
            <li><Link to="/hr-policy" className={linkClass}>HR Policy</Link></li>
            <li><Link to="/contact" className={linkClass}>Get in Touch</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-espresso-foreground/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-espresso-foreground/60 lg:px-8">
          © 2026 Crust &amp; Crumb. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
