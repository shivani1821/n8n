import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const NAV = [
  { label: "About", to: "/", hash: "about" },
  { label: "Our Breads", to: "/", hash: "products" },
  { label: "Our Story", to: "/", hash: "philosophy" },
  { label: "FAQs", to: "/", hash: "faq" },
  { label: "HR Policy", to: "/hr-policy" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="text-foreground" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              {...("hash" in item
                ? { hash: item.hash, activeOptions: { includeHash: true } }
                : { activeProps: { className: "text-primary" } })}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="brand" size="sm" className="px-5">
            <Link to="/contact">Order Fresh Bread</Link>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  {...("hash" in item ? { hash: item.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-base font-medium text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild variant="brand" size="xl" className="mt-5 w-full">
            <Link to="/contact" onClick={() => setOpen(false)}>
              Order Fresh Bread
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
