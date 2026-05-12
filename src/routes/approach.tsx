import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { MandalaMark } from "@/components/MandalaMark";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Approach — Psychodynamic & Relational Therapy NYC" },
      { name: "description", content: "Psychodynamic, relational, and family-systems therapy in Manhattan. Lasting change comes from understanding patterns, not just managing symptoms." },
      { property: "og:title", content: "My Approach — Kenneth Feiner, PsyD" },
      { property: "og:description", content: "An essay on psychodynamic, relational, and family-systems work." },
    ],
  }),
  component: ApproachPage,
});

const SECTIONS = [
  {
    title: "Psychodynamic Therapy",
    body: "Psychodynamic therapy assumes that much of what shapes our lives — our anxieties, our choices in love and work, the moments we surprise ourselves — happens outside of conscious awareness. The work is to make some of that visible. Not as a clever interpretation imposed from above, but as something we discover together, slowly, through the texture of conversation.",
  },
  {
    title: "Relational Therapy",
    body: "What happens between us in the room is itself part of the work. The way you and I come to know each other tends to mirror, in small and revealing ways, the patterns that play out in your other relationships. When we can notice that — gently, and with care — it becomes one of the most useful instruments we have.",
  },
  {
    title: "Family Systems",
    body: "Psychodynamic therapy is briefer and less intensive than psychoanalysis and also focuses on the relationship between the therapist and the client, as a way to learn about how the client relates to everyone in their life.\n",
  },
  {
    title: "Psychoanalytic Foundations",
    body: "My training is psychoanalytic. In practice, that means a particular kind of attention: to dreams when they come, to slips of the tongue, to what is repeated and what is avoided. It does not mean a couch and four sessions a week. It means taking seriously the parts of you that aren't on the surface, and giving them time.",
  },
  {
    title: "What to Expect",
    body: "A first session is mostly listening — to what brings you in, what you've tried, and what you're hoping might be different. Sessions are 50 minutes. Most patients come once or twice a week. There is no fixed length to the work. People leave when something has shifted, when the original distress has loosened, and when they feel ready.",
  },
];

function ApproachPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <FadeIn className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm tracking-[0.25em] uppercase text-accent mb-5">My Approach</p>
          <h1 className="font-serif text-5xl md:text-6xl text-primary-deep leading-[1.05]">
            Lasting change comes from understanding patterns — not from managing symptoms.
          </h1>
          <p className="mt-6 text-lg text-foreground/75">
            A few notes on the way I work, and what brought me to it.
          </p>
        </FadeIn>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 space-y-16">
          {SECTIONS.map((s, i) => (
            <FadeIn key={s.title} delay={i * 80}>
              <article>
                <div className="flex items-center gap-4 mb-4">
                  <MandalaMark size={36} strokeWidth={0.8} className="text-accent shrink-0" />
                  <h2 className="font-serif text-3xl md:text-4xl text-primary-deep">{s.title}</h2>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">{s.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-primary text-cream py-20">
        <FadeIn className="mx-auto max-w-3xl px-4 text-center">
          <blockquote className="font-serif italic text-2xl md:text-3xl leading-relaxed">
            "We don't fix the past. We change our relationship to it — and that, in turn, changes what becomes possible."
          </blockquote>
        </FadeIn>
      </section>

      <CTASection />
    </>
  );
}
