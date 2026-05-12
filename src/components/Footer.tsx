import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MandalaMark } from "./MandalaMark";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  function onSubscribe(e: FormEvent) {
    e.preventDefault();
    console.log("[newsletter] subscribe:", email);
    toast.success("Thank you — you're subscribed.");
    setEmail("");
  }

  return (
    <footer className="bg-[var(--utility-bar)] text-cream/90 mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 text-cream">
            <MandalaMark size={36} strokeWidth={0.9} />
            <span className="font-serif text-lg">Kenneth Feiner, PsyD</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            Thoughtful, depth-oriented psychotherapy for adolescents, adults, couples, and families on Manhattan's East Side.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cream/20 px-3 py-1.5 text-xs text-cream/80">
            <ShieldCheck className="h-3.5 w-3.5" /> Verified by Psychology Today
          </div>
        </div>

        <div>
          <h3 className="font-serif text-cream text-base mb-3">Hours</h3>
          <p className="text-sm text-cream/75">Monday – Friday<br/>9:00 AM – 7:00 PM</p>
          <p className="text-sm text-cream/60 mt-2">By appointment only</p>
        </div>

        <div>
          <h3 className="font-serif text-cream text-base mb-3">Contact</h3>
          <address className="not-italic text-sm text-cream/75 space-y-1.5">
            <div>220 East 26th Street<br/>Suite L-D<br/>New York, NY 10010</div>
            <div><a href="tel:+16463511746" className="hover:text-accent">(646) 351-1746</a></div>
            <div><a href="mailto:kfeinerpsyd@example.com" className="hover:text-accent">kfeinerpsyd@example.com</a></div>
          </address>
        </div>

        <div>
          <h3 className="font-serif text-cream text-base mb-3">Newsletter</h3>
          <p className="text-sm text-cream/70 mb-3">Occasional reflections on therapy and relationships. No spam.</p>
          <form onSubmit={onSubscribe} className="flex gap-2">
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/40"
            />
            <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-cream/60">
          <div>© 2026 Kenneth Feiner, PsyD · License #008171 (NY)</div>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <Link to="/contact" className="hover:text-accent">Contact</Link>
            <a href="#" className="hover:text-accent">Privacy</a>
            <a href="#" className="hover:text-accent">Accessibility</a>
            <a href="#" className="hover:text-accent">Notice of Privacy Practices</a>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-8 text-[11px] text-cream/45 leading-relaxed">
          This website is for informational purposes only and does not constitute medical or psychological advice.
          If you are experiencing a mental health emergency, please call <a href="tel:988" className="underline hover:text-accent">988</a> (Suicide & Crisis Lifeline) or go to your nearest emergency room.
        </div>
      </div>
    </footer>
  );
}
