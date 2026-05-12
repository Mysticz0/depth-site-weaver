import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { MandalaMark } from "./MandalaMark";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <MandalaMark
        size={420}
        strokeWidth={0.4}
        className="absolute -right-24 -bottom-24 text-primary/10 pointer-events-none"
      />
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-primary-deep">Ready to begin?</h2>
        <p className="mt-5 text-lg text-foreground/75">
          Call or email for a free 15-minute consultation. There's no pressure to commit, just a conversation about what you're looking for.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-cta hover:bg-cta/90 text-cta-foreground rounded-full">
            <a href="tel:+16463511746"><Phone className="mr-1" /> (646) 351-1746</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
            <a href="mailto:kfeinerpsyd@example.com"><Mail className="mr-1" /> Email Dr. Feiner</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
