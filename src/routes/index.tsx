import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { MandalaMark } from "@/components/MandalaMark";
import { FadeIn } from "@/components/FadeIn";
import { CTASection } from "@/components/CTASection";
import { SPECIALTIES } from "@/lib/site";
import { ShieldCheck, MapPin, GraduationCap, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-brownstone.jpg";
import roomImg from "@/assets/who-i-work-with.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kenneth Feiner, PsyD | Manhattan Psychotherapy" },
      { name: "description", content: "Depth-oriented psychotherapy in Manhattan for adolescents, adults, couples, and families. Free 15-minute consultation." },
      { property: "og:title", content: "Kenneth Feiner, PsyD | Manhattan Psychotherapy" },
      { property: "og:description", content: "Over 35 years helping people navigate relationships, anxiety, and life's deeper patterns." },
    ],
  }),
  component: HomePage,
});

const PILLARS = [
  {
    title: "Psychodynamic & Relational Therapy",
    body: "A reflective, depth-oriented approach that uncovers the repetitive patterns interfering with the relationships and life you want.",
    to: "/approach",
  },
  {
    title: "Couples & Family Work",
    body: "Collaborative sessions for partners and families working through conflict, disconnection, or transitions.",
    to: "/services",
  },
  {
    title: "Adolescent & Young Adult Support",
    body: "A steady, non-judgmental space for teens and young adults navigating identity, anxiety, and family dynamics.",
    to: "/services",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <MandalaMark
          size={620}
          strokeWidth={0.4}
          className="absolute -right-40 -top-20 text-primary/10 pointer-events-none hidden md:block"
        />
        <div className="mx-auto max-w-7xl px-4 pt-20 pb-24 md:pt-28 md:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <FadeIn>
              <p className="text-sm tracking-[0.25em] uppercase text-accent mb-5">Manhattan Private Practice</p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-deep leading-[1.05]">
                Thoughtful, depth-oriented psychotherapy in Manhattan.
              </h1>
              <p className="mt-7 text-lg md:text-xl text-foreground/75 max-w-2xl">
                Over 35 years helping adolescents and adults navigate relationships, anxiety, and life's deeper patterns.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-cta hover:bg-cta/90 text-cta-foreground rounded-full px-7">
                  <Link to="/contact">Schedule a Free 15-Minute Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-7">
                  <Link to="/approach">Learn About My Approach</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> Verified by Psychology Today</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" /> Licensed in New York</span>
                <span className="flex items-center gap-1.5"><GraduationCap className="h-3.5 w-3.5 text-primary" /> Yeshiva University, PsyD</span>
              </div>
            </FadeIn>
          </div>
          <FadeIn className="lg:col-span-5" delay={150}>
            <div className="relative rounded-3xl overflow-hidden shadow-soft aspect-[4/5]">
              <img
                src={heroImg}
                alt="Soft natural light on a Manhattan brownstone with leafy branches"
                className="w-full h-full object-cover"
                width={1600}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/30 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-cream py-20 border-y border-border/60">
        <FadeIn className="mx-auto max-w-3xl px-4 text-center">
          <MandalaMark size={48} strokeWidth={0.8} className="mx-auto text-accent mb-6" />
          <p className="font-serif text-2xl md:text-3xl text-primary-deep leading-snug">
            Kenneth Feiner, PsyD is a clinical psychologist in private practice on Manhattan's East Side.
          </p>
          <p className="mt-5 text-lg text-foreground/75">
            He works with adolescents, adults, couples, and families seeking insight into the patterns that shape their relationships and inner lives. Sessions are available in-person at the 26th Street office and online throughout New York State.
          </p>
        </FadeIn>
      </section>

      {/* THREE PILLARS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm tracking-[0.25em] uppercase text-accent mb-4">A Considered Practice</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-deep">How I work</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 120}>
                <article className="h-full bg-card rounded-2xl p-8 shadow-card border border-border/60 hover:shadow-soft transition-shadow group">
                  <MandalaMark size={56} strokeWidth={0.7} className="text-accent mb-6 group-hover:rotate-12 transition-transform duration-700" />
                  <h3 className="font-serif text-2xl text-primary-deep mb-3">{p.title}</h3>
                  <p className="text-foreground/70 mb-6">{p.body}</p>
                  <Link to={p.to} className="inline-flex items-center gap-1.5 text-accent hover:text-primary text-sm font-medium">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-14 items-center">
          <FadeIn>
            <p className="text-sm tracking-[0.25em] uppercase text-accent mb-4">Who I Work With</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-deep leading-tight">
              Most of the people I see come to therapy because something in their relationships isn't working.
            </h2>
            <p className="mt-6 text-lg text-foreground/75">
              That might be difficulty initiating or sustaining intimacy, persistent anxiety or low mood, the weight of a major life transition, unresolved grief, family conflict, or a quieter sense that the same patterns keep returning. Together we look at what's underneath, with patience and without judgment.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="rounded-3xl overflow-hidden shadow-soft aspect-[5/4]">
              <img
                src={roomImg}
                alt="Calm sunlit therapy office interior with a linen armchair and plants"
                loading="lazy"
                width={1280}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <FadeIn className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm tracking-[0.25em] uppercase text-accent mb-4">Areas of Focus</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-deep">Specialties</h2>
          </FadeIn>
          <FadeIn>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {SPECIALTIES.map((s) => (
                <li
                  key={s}
                  className="rounded-2xl border border-border/60 bg-card px-4 py-4 text-sm text-foreground/80 shadow-card transition-shadow duration-500 hover:shadow-soft"
                >
                  {s}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* QUOTE BAND */}
      <section className="relative bg-primary text-cream overflow-hidden">
        <MandalaMark size={520} strokeWidth={0.3} className="absolute -left-32 -bottom-32 text-cream/10 pointer-events-none" />
        <MandalaMark size={360} strokeWidth={0.3} className="absolute -right-20 -top-20 text-cream/10 pointer-events-none" />
        <FadeIn className="relative mx-auto max-w-4xl px-4 py-24 text-center">
          <span className="font-serif text-7xl text-cream leading-none">"</span>
          <blockquote className="font-serif italic text-2xl md:text-3xl leading-relaxed -mt-6">
            In psychotherapy, we identify the repetitive patterns that interfere with the initiation and maintenance of intimate relationships, and slowly, together, we make room for something different.
          </blockquote>
          <cite className="not-italic block mt-8 text-sm tracking-[0.2em] uppercase text-cream/70">
            Kenneth Feiner, PsyD
          </cite>
        </FadeIn>
      </section>

      <CTASection />
    </>
  );
}
