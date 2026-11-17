import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/site-data";

const TITLE = "HR Policy — Crust & Crumb";
const DESCRIPTION =
  "How we work at Crust & Crumb: working hours, leave, food safety, conduct, benefits, growth and how we support our bakery team.";

export const Route = createFileRoute("/hr-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HrPolicyPage,
});

type Section = { id: string; title: string; intro?: string; points: string[] };

const SECTIONS: Section[] = [
  {
    id: "purpose",
    title: "Purpose & Scope",
    intro:
      "This policy explains how we work together at Crust & Crumb. It applies to all full-time, part-time and temporary team members across our bakery, kitchen, delivery and office teams.",
    points: [
      "It sets out what you can expect from us and what we expect from you.",
      "Where local law offers greater protection, the law always takes priority.",
      "We review this policy every year and share any updates with the whole team.",
    ],
  },
  {
    id: "equal-opportunity",
    title: "Equal Opportunity",
    intro:
      "Good bread is made by many hands. We hire, pay and promote people on the basis of skill, attitude and performance.",
    points: [
      "We do not discriminate on the basis of gender, religion, caste, age, disability, marital status, sexual orientation or background.",
      "Reasonable adjustments are made for team members with disabilities or health needs.",
    ],
  },
  {
    id: "working-hours",
    title: "Working Hours & Shifts",
    intro: "Baking starts early, so our schedules are planned around the oven.",
    points: [
      "Standard working time is 48 hours per week, spread over 6 days, with one weekly day off.",
      "Bakery shifts typically run 4:00 AM – 12:00 PM; store and delivery shifts run between 8:00 AM and 8:00 PM.",
      "Every shift of 5 hours or more includes a paid 30-minute meal break.",
      "Rosters are shared at least one week in advance. Shift swaps need your supervisor's approval.",
      "Overtime is voluntary, must be approved beforehand, and is paid at twice the normal hourly rate.",
    ],
  },
  {
    id: "attendance",
    title: "Attendance & Punctuality",
    points: [
      "Please arrive in uniform and ready to work at the start of your shift.",
      "If you will be late or absent, inform your supervisor at least 2 hours before your shift starts.",
      "Repeated unplanned absences or lateness will be discussed privately and may lead to disciplinary action.",
    ],
  },
  {
    id: "leave",
    title: "Leave Policy",
    intro: "Rest matters. All leave is calculated per calendar year and pro-rated for new joiners.",
    points: [
      "Earned / annual leave: 15 working days per year; up to 10 unused days can be carried forward.",
      "Casual leave: 7 days per year for personal matters.",
      "Sick leave: 7 days per year; a doctor's note is required for absences longer than 2 consecutive days.",
      "Public holidays: 10 paid holidays per year. If you work on a holiday, you receive a compensatory day off.",
      "Maternity leave: 26 weeks of paid leave, as per the Maternity Benefit Act.",
      "Paternity leave: 5 working days of paid leave.",
      "Bereavement leave: 3 paid days on the loss of an immediate family member.",
      "Planned leave should be requested at least 2 weeks in advance, especially around festive seasons.",
    ],
  },
  {
    id: "food-safety",
    title: "Food Safety & Hygiene",
    intro: "Our customers trust us with their table. Food safety is non-negotiable.",
    points: [
      "Wear clean uniforms, aprons, hairnets and gloves wherever required. Remove jewellery before handling dough.",
      "Wash hands thoroughly before starting work, after breaks and after handling raw ingredients or waste.",
      "Report any illness — especially fever, stomach upsets or open wounds — before your shift. You will not be penalised for staying home when unwell.",
      "Follow FSSAI guidelines, allergen labelling rules and our cleaning schedules at all times.",
      "All kitchen team members complete food safety training within their first month.",
    ],
  },
  {
    id: "health-safety",
    title: "Workplace Health & Safety",
    points: [
      "Use ovens, mixers and slicers only after you have been trained on them.",
      "Wear heat-resistant gloves near ovens and non-slip footwear in the kitchen.",
      "Report any accident, injury or near-miss to your supervisor immediately.",
      "First-aid kits and fire extinguishers are available in every work area; fire drills are held twice a year.",
    ],
  },
  {
    id: "conduct",
    title: "Code of Conduct",
    points: [
      "Treat colleagues, customers and suppliers with respect and kindness.",
      "Be honest — handle cash, stock and company property with care.",
      "Keep recipes, supplier details and business information confidential.",
      "Mobile phones are not used in food preparation areas.",
      "Alcohol, smoking and illegal substances are strictly prohibited at work.",
    ],
  },
  {
    id: "harassment",
    title: "Prevention of Sexual Harassment (POSH)",
    intro:
      "We are committed to a safe workplace for everyone, in line with the Sexual Harassment of Women at Workplace Act, 2013.",
    points: [
      "Any form of sexual harassment, bullying or intimidation is not tolerated.",
      "An Internal Committee handles complaints confidentially and fairly.",
      "Complaints can be raised in writing within 3 months of an incident.",
      "No one will face retaliation for raising a concern in good faith.",
    ],
  },
  {
    id: "pay-benefits",
    title: "Compensation & Benefits",
    points: [
      "Salaries are paid by bank transfer on or before the 7th of every month.",
      "Provident Fund (PF) and ESI contributions are made as per law.",
      "Free daily staff meal and a weekly allowance of fresh bread to take home.",
      "Uniforms are provided and laundered by the company.",
      "Annual performance bonus and festival bonus for eligible team members.",
      "Night-shift team members receive a transport allowance.",
    ],
  },
  {
    id: "growth",
    title: "Training & Growth",
    points: [
      "Every new team member receives a structured 2-week induction.",
      "Hands-on baking workshops are held every quarter to learn new breads and techniques.",
      "Performance reviews happen twice a year, with clear goals and feedback.",
      "We prefer to promote from within — open roles are shared with the team first.",
    ],
  },
  {
    id: "grievance",
    title: "Grievance Redressal",
    points: [
      "Raise any concern first with your supervisor.",
      "If it remains unresolved, escalate to the HR team or the bakery manager.",
      "We aim to acknowledge grievances within 2 working days and resolve them within 15 working days.",
    ],
  },
  {
    id: "exit",
    title: "Resignation & Exit",
    points: [
      "The notice period is 30 days for permanent team members and 7 days during probation.",
      "Probation lasts 3 months from your date of joining.",
      "Please return uniforms, keys and company property on your last working day.",
      "Final settlement is processed within 30 days of your last working day, along with an experience letter.",
    ],
  },
];

function HrPolicyPage() {
  return (
    <>
      <section className="border-b border-border bg-espresso text-espresso-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 md:py-24">
          <p className="eyebrow !text-accent">Our people</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight md:text-6xl">
            HR Policy
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-espresso-foreground/75">
            Every great loaf starts with a happy team. This policy explains how we work, rest, grow
            and look after each other at Crust &amp; Crumb.
          </p>
          <p className="mt-6 text-sm text-espresso-foreground/50">Last updated: November 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[260px_1fr] lg:px-8">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow">On this page</p>
            <nav className="mt-4" aria-label="HR policy sections">
              <ol className="space-y-1 border-l border-border">
                {SECTIONS.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      {String(i + 1).padStart(2, "0")}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="space-y-6">
            {SECTIONS.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl font-semibold text-foreground md:text-3xl">{s.title}</h2>
                </div>
                {s.intro && <p className="mt-4 leading-relaxed text-muted-foreground">{s.intro}</p>}
                <ul className="mt-5 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed text-foreground/85">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <div className="rounded-3xl bg-warm p-8 text-primary-foreground shadow-lift md:p-10">
              <h2 className="text-2xl font-semibold md:text-3xl">Questions about this policy?</h2>
              <p className="mt-3 max-w-xl leading-relaxed text-primary-foreground/85">
                Speak to your supervisor or write to us at{" "}
                <a href={`mailto:${CONTACT.email}`} className="font-medium underline underline-offset-4">
                  {CONTACT.email}
                </a>{" "}
                with "HR" in the subject line.
              </p>
              <Button asChild variant="hero" size="xl" className="mt-6">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
