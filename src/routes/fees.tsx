import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { CTASection } from "@/components/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info } from "lucide-react";

export const Route = createFileRoute("/fees")({
  head: () => ({
    meta: [
      { title: "Fees & Insurance | Kenneth Feiner, PsyD" },
      { name: "description", content: "Session fees, sliding scale availability, payment methods, and out-of-network insurance information for Dr. Feiner's Manhattan practice." },
      { property: "og:title", content: "Fees & Insurance" },
      { property: "og:description", content: "Out-of-network practice with superbills provided. Sliding scale available." },
    ],
  }),
  component: FeesPage,
});

const FEES = [
  { label: "Individual session (50 min)", price: "$400" },
  { label: "Couples session (50 min)", price: "$400" },
  { label: "Family session (50 min)", price: "$400" },
];

const FAQS = [
  {
    q: "Why out of network?",
    a: "Working out of network allows me to provide the kind of unrushed, depth-oriented care this practice is built on, without insurance companies dictating session length, frequency, or treatment goals. Most patients with PPO plans receive partial reimbursement.",
  },
  {
    q: "How do I check my out-of-network benefits?",
    a: "Call the member services number on the back of your insurance card and ask: (1) Do I have out-of-network outpatient mental-health benefits? (2) What is my deductible, and how much have I met? (3) What percentage do you reimburse for CPT code 90834 or 90837? (4) Is there a session limit per year?",
  },
  {
    q: "What is a superbill?",
    a: "A superbill is an itemized receipt with the diagnostic and procedural codes your insurance company needs to process an out-of-network claim. I provide one each month; you submit it to your insurer for reimbursement directly to you.",
  },
  {
    q: "Is a sliding scale available?",
    a: "A limited number of reduced-fee slots are available for patients for whom the standard fee is a meaningful barrier. If you think you may be eligible, please mention it during our consultation call.",
  },
];

function FeesPage() {
  return (
    <>
      <section className="py-20 md:py-24">
        <FadeIn className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm tracking-[0.25em] uppercase text-accent mb-5">Fees & Insurance</p>
          <h1 className="font-serif text-5xl md:text-6xl text-primary-deep leading-[1.05]">
            Clear fees, no surprises.
          </h1>
          <p className="mt-6 text-lg text-foreground/75">
            I keep this page simple on purpose. Anything not covered here, please ask during our consultation.
          </p>
        </FadeIn>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4">
          <FadeIn>
            <div className="bg-card rounded-2xl shadow-card border border-border/60 overflow-hidden">
              <table className="w-full">
                <tbody>
                  {FEES.map((f) => (
                    <tr key={f.label} className="border-b border-border/60 last:border-b-0">
                      <td className="px-6 py-5 text-foreground/85">{f.label}</td>
                      <td className="px-6 py-5 text-right font-serif text-2xl text-primary-deep">{f.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              <strong className="text-foreground/85">Sliding scale available</strong>. Please ask if you may be eligible.
            </p>
          </FadeIn>

          <FadeIn delay={100} className="mt-12 grid md:grid-cols-2 gap-5">
            <div className="bg-secondary rounded-2xl p-6 border border-border/60">
              <h3 className="font-serif text-xl text-primary-deep mb-2">Payment</h3>
              <p className="text-sm text-foreground/75">ACH bank transfer or check. Payment is due at the time of service.</p>
            </div>
            <div className="bg-secondary rounded-2xl p-6 border border-border/60">
              <h3 className="font-serif text-xl text-primary-deep mb-2">Insurance</h3>
              <p className="text-sm text-foreground/75">Out of network. I provide superbills you can submit to your insurance for possible reimbursement.</p>
            </div>
          </FadeIn>

          <FadeIn delay={150} className="mt-12">
            <h2 className="font-serif text-3xl text-primary-deep mb-6 text-center">Frequently asked</h2>
            <Accordion type="single" collapsible className="bg-card rounded-2xl border border-border/60 px-6 shadow-card">
              {FAQS.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-border/60">
                  <AccordionTrigger className="text-left font-serif text-lg text-primary-deep hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/75 text-base leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          <FadeIn delay={200} className="mt-10">
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 flex gap-4">
              <Info className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div className="text-sm text-foreground/80 leading-relaxed">
                <strong className="text-primary-deep">Good Faith Estimate / No Surprises Act:</strong> Under the law, you have the right to receive a Good Faith Estimate explaining how much your medical care will cost. You may request one before scheduling, and at any time during care.
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
