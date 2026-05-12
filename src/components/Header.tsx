import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, Mail, MapPin, Clock } from "lucide-react";
import { MandalaMark } from "./MandalaMark";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/approach", label: "Approach" },
  { to: "/fees", label: "Fees & Insurance" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      {/* Utility bar */}
      <div className="bg-[var(--utility-bar)] text-cream text-xs">
        <div className="mx-auto max-w-7xl px-4 py-2 flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4">
          <span className="flex items-center gap-2 opacity-90">
            <Clock className="h-3.5 w-3.5" /> Mon–Fri: 9 AM – 7 PM · By Appointment
          </span>
          <span className="hidden md:flex items-center gap-2 opacity-90">
            <MapPin className="h-3.5 w-3.5" /> 220 East 26th Street, Suite L-D, New York, NY 10010
          </span>
          <span className="flex items-center gap-3 opacity-90">
            <a href="tel:+16463511746" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" /> (646) 351-1746
            </a>
            <span className="opacity-40">|</span>
            <a href="mailto:kfeinerpsyd@example.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="h-3.5 w-3.5" /> kfeinerpsyd@example.com
            </a>
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-cream/95 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-4 h-20 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 text-primary">
            <MandalaMark size={42} strokeWidth={0.9} />
            <div className="leading-tight">
              <div className="font-serif text-xl text-primary-deep">Kenneth Feiner, PsyD</div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Clinical Psychologist</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-accent" }}
                className="text-primary hover:text-accent transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-5">
              <Link to="/contact">Request a Consultation</Link>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-primary" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-cream">
              <SheetTitle className="font-serif text-primary-deep">Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-4 text-lg">
                {NAV.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="text-primary hover:text-accent"
                  >
                    {n.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/contact" onClick={() => setOpen(false)}>Request a Consultation</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
