import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { MandalaMark } from "@/components/MandalaMark";
import { CTASection } from "@/components/CTASection";
import { Award, BookOpen, Calendar, ShieldCheck } from "lucide-react";
import headshot from "@/assets/headshot.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Kenneth Feiner | Clinical Psychologist NYC" },
      { name: "description", content: "Kenneth Feiner, PsyD has practiced psychoanalytically-oriented psychotherapy in Manhattan for over 35 years. PsyD, Yeshiva University." },
      { property: "og:title", content: "About Dr. Kenneth Feiner" },
      { property: "og:description", content: "PsyD, Yeshiva University. Psychoanalytic training at NYU. 35+ years of practice in Manhattan." },
    ],
  }),
  component: AboutPage,
});

const CREDENTIALS = [
  { icon: Award, label: "PsyD, Clinical Psychology", value: "Yeshiva University, 1984" },
  { icon: BookOpen, label: "Psychoanalytic Training", value: "New York University" },
  { icon: Calendar, label: "Years in Practice", value: "Over 35 years" },
  { icon: ShieldCheck, label: "NY State License", value: "#008171" },
];

function AboutPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-12">
          <FadeIn className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-soft aspect-[4/5] bg-secondary">
              <img
                src={headshot}
                alt="Portrait of Dr. Kenneth Feiner"
                width={1024}
                height={1280}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 bg-card border border-border/60 rounded-2xl p-6 shadow-card">
              <h3 className="font-serif text-lg text-primary-deep mb-4">Credentials</h3>
              <ul className="space-y-3">
                {CREDENTIALS.map((c) => (
                  <li key={c.label} className="flex gap-3 text-sm">
                    <c.icon className="h-4 w-4 text-accent mt-1 shrink-0" />
                    <div>
                      <div className="text-muted-foreground text-xs uppercase tracking-wider">{c.label}</div>
                      <div className="text-foreground/85">{c.value}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-7" delay={120}>
            <p className="text-sm tracking-[0.25em] uppercase text-accent mb-5">About</p>
            <h1 className="font-serif text-5xl md:text-6xl text-primary-deep leading-[1.05]">
              A practice built on listening, time, and depth.
            </h1>
            <div className="prose-lg mt-8 space-y-5 text-foreground/80 text-lg">
              <p>
                I'm a clinical psychologist in private practice on Manhattan's East Side. I received my PsyD in clinical psychology from Yeshiva University in 1984 and pursued postdoctoral psychoanalytic training at New York University. For more than thirty-five years, I've worked with adolescents, adults, couples, and families.
              </p>
              <p>
                I'm licensed by the State of New York (License #008171) and verified by Psychology Today. My office is at 220 East 26th Street; I also see patients online throughout New York State.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="font-serif text-3xl md:text-4xl text-primary-deep">My Approach</h2>
              <div className="mt-6 space-y-5 text-foreground/80 text-lg">
                <p>
                  My orientation is psychodynamic, relational, and family-systems informed. I believe that lasting change rarely comes from managing symptoms in isolation. It comes from understanding the patterns, often very old ones, that shape how we relate to ourselves and to the people closest to us.
                </p>
                <p>
                  Sessions are conversational and unhurried. We pay attention to what comes up between us, to what repeats across your relationships, and to the parts of your experience that have been hardest to put into words. Over time, that kind of careful, sustained attention tends to loosen things that nothing else has reached.
                </p>
                <p>
                  I work with people in genuine distress and with people who are doing reasonably well but feel that something important is unresolved. Both are good reasons to come to therapy.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <FadeIn className="mx-auto max-w-3xl px-4 text-center">
          <MandalaMark size={48} strokeWidth={0.8} className="mx-auto text-accent mb-5" />
          <p className="font-serif italic text-xl md:text-2xl text-primary-deep">
            "The work is slower than people expect, and more interesting than they imagine."
          </p>
        </FadeIn>
      </section>

      <CTASection />
    </>
  );
}
