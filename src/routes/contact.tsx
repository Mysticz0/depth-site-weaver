import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Lock } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Kenneth Feiner, PsyD | Manhattan Office" },
      { name: "description", content: "Contact Dr. Kenneth Feiner for a free 15-minute consultation. 220 East 26th Street, NYC. (646) 351-1746. In-person and online sessions." },
      { property: "og:title", content: "Contact Dr. Kenneth Feiner, PsyD" },
      { property: "og:description", content: "Free 15-minute consultation. Manhattan office, online sessions throughout NY State." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", time: "", message: "" });

  function update<K extends keyof typeof form>(key: K, v: string) {
    setForm((f) => ({ ...f, [key]: v }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("[contact] submission:", form);
    toast.success("Thank you. Your message has been received. Dr. Feiner will be in touch.");
    setForm({ name: "", email: "", phone: "", time: "", message: "" });
  }

  return (
    <>
      <section className="py-20 md:py-24">
        <FadeIn className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm tracking-[0.25em] uppercase text-accent mb-5">Contact</p>
          <h1 className="font-serif text-5xl md:text-6xl text-primary-deep leading-[1.05]">
            Let's begin with a conversation.
          </h1>
          <p className="mt-6 text-lg text-foreground/75">
            The best first step is a free 15-minute phone call. Use any of the methods below, whichever feels easiest.
          </p>
        </FadeIn>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-5 gap-8">
          <FadeIn className="lg:col-span-2">
            <div className="bg-card border border-border/60 rounded-2xl p-8 shadow-card sticky top-32">
              <h2 className="font-serif text-2xl text-primary-deep mb-6">Office details</h2>
              <ul className="space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Address</div>
                    <div className="text-foreground/85">220 East 26th Street<br/>Suite L-D<br/>New York, NY 10010</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Phone</div>
                    <a href="tel:+16463511746" className="text-foreground/85 hover:text-accent">(646) 351-1746</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Email</div>
                    <a href="mailto:kfeinerpsyd@example.com" className="text-foreground/85 hover:text-accent break-all">kfeinerpsyd@example.com</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Hours</div>
                    <div className="text-foreground/85">Mon–Fri, by appointment</div>
                  </div>
                </li>
              </ul>
              <p className="mt-6 text-sm text-foreground/70 border-t border-border/60 pt-5">
                Available both in-person and online (NY State residents).
              </p>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-3" delay={120}>
            <form onSubmit={onSubmit} className="bg-card border border-border/60 rounded-2xl p-8 shadow-card space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required value={form.name} onChange={(e) => update("name", e.target.value)} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="time">Best time to call</Label>
                  <Input id="time" placeholder="e.g. weekday afternoons" value={form.time} onChange={(e) => update("time", e.target.value)} className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Brief message</Label>
                <Textarea id="message" rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} className="mt-1.5" placeholder="A few sentences about what you're looking for." />
              </div>
              <p className="text-xs text-muted-foreground flex gap-2 items-start">
                <Lock className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                Please do not include sensitive clinical information in this form. Email is not a fully secure channel.
              </p>
              <Button type="submit" size="lg" className="w-full bg-cta hover:bg-cta/90 text-cta-foreground rounded-full">
                Send message
              </Button>
            </form>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20">
        <FadeIn className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl overflow-hidden shadow-card border border-border/60 aspect-[16/8]">
            <iframe
              title="Map of 220 East 26th Street, New York, NY"
              src="https://www.google.com/maps?q=220+East+26th+Street,+New+York,+NY+10010&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </section>

      <section className="bg-secondary py-12">
        <FadeIn className="mx-auto max-w-3xl px-4 text-center text-sm text-foreground/70 leading-relaxed">
          <p>
            <strong className="text-primary-deep">Confidentiality & HIPAA:</strong> All communication with the office is treated as confidential and handled in accordance with HIPAA. If you are experiencing a mental health emergency, please call <a href="tel:988" className="text-accent hover:underline">988</a> or go to your nearest emergency room.
          </p>
        </FadeIn>
      </section>
    </>
  );
}
