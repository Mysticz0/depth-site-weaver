import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { MandalaMark } from "@/components/MandalaMark";
import { CTASection } from "@/components/CTASection";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Individual, Couples & Family Therapy NYC" },
      { name: "description", content: "Individual, couples, family, and adolescent psychotherapy in Manhattan. Consultation available for complex cases including NPD, BPD, and trauma." },
      { property: "og:title", content: "Services | Kenneth Feiner, PsyD" },
      { property: "og:description", content: "Psychodynamic individual, couples, family, and adolescent therapy in Manhattan." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    title: "Individual Psychotherapy",
    body: "Long-form, depth-oriented work for adolescents, adults, and elders (65+). Sessions are 50 minutes; frequency is determined together based on what the work requires.",
    bullets: ["Anxiety & depression", "Relationship & intimacy difficulties", "Grief and life transitions", "Self-esteem and identity"],
  },
  {
    title: "Couples Therapy",
    body: "Collaborative sessions for partners moving through conflict, disconnection, infidelity, or major transitions. Focus is on the patterns the two of you create together, not on assigning blame.",
    bullets: ["Communication breakdown", "Recovery after infidelity", "Sexual & emotional intimacy", "Parenting & life-stage decisions"],
  },
  {
    title: "Family Therapy",
    body: "Work with families navigating conflict, generational patterns, illness, or the strain of a member in distress. Often paired with individual work for one or more family members.",
    bullets: ["Parent–adolescent conflict", "Sibling dynamics", "Adult children & aging parents", "Family transitions"],
  },
  {
    title: "Adolescent Therapy",
    body: "A steady, confidential space for teens and young adults. Parents are involved as appropriate, but the relationship with the adolescent is held carefully and respected.",
    bullets: ["Identity & self-worth", "School & social anxiety", "Family conflict", "Mood and behavior concerns"],
  },
  {
    title: "Consultation for Complex Cases",
    body: "I consult with clinicians and patients on cases involving severe personality disorders, dissociative presentations, psychosis, and complex trauma. Available for one-time consultations or ongoing supervision.",
    bullets: ["Narcissistic Personality Disorder (NPD)", "Borderline Personality Disorder (BPD)", "Dissociative disorders", "Complex trauma & PTSD"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="py-20 md:py-24 text-center">
        <FadeIn className="mx-auto max-w-3xl px-4">
          <p className="text-sm tracking-[0.25em] uppercase text-accent mb-5">Services</p>
          <h1 className="font-serif text-5xl md:text-6xl text-primary-deep leading-[1.05]">
            Care shaped by what each person brings.
          </h1>
          <p className="mt-6 text-lg text-foreground/75">
            Below are the kinds of work I do most often. Almost everyone starts with a brief phone consultation so we can think together about what would be most useful.
          </p>
        </FadeIn>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 space-y-6">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.title} delay={i * 80}>
              <article className="bg-card border border-border/60 rounded-2xl p-8 md:p-10 shadow-card grid md:grid-cols-12 gap-6">
                <div className="md:col-span-2 flex md:block">
                  <MandalaMark size={64} strokeWidth={0.7} className="text-accent" />
                </div>
                <div className="md:col-span-10">
                  <h2 className="font-serif text-3xl text-primary-deep">{s.title}</h2>
                  <p className="mt-3 text-foreground/75 text-lg">{s.body}</p>
                  <div className="mt-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Often includes</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
