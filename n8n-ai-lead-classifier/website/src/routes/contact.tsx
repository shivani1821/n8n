import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT } from "@/lib/site-data";
import { submitContactForm } from "@/lib/contact.functions";

const TITLE = "Contact Us — Crust & Crumb";
const DESCRIPTION =
  "Questions, orders or bulk enquiries? Get in touch with Crust & Crumb by email, phone or our contact form. Open daily 8 AM – 8 PM.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .max(20)
    .regex(/^[+\d][\d\s-]{6,}$/, "Please enter a valid phone number"),
  subject: z.string().trim().min(2, "Please add a subject").max(150),
  message: z.string().trim().min(10, "Your message should be at least 10 characters").max(1000),
});

type FormValues = z.infer<typeof schema>;
const EMPTY: FormValues = { name: "", email: "", phone: "", subject: "", message: "" };

const DETAILS = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Phone", value: CONTACT.phone },
  { icon: MapPin, label: "Address", value: CONTACT.address },
  { icon: Clock, label: "Opening Hours", value: CONTACT.hours },
];

function ContactPage() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const sendContact = useServerFn(submitContactForm);

  const update = (key: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const next: Partial<Record<keyof FormValues, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setSubmitting(true);
    try {
      const res = await sendContact({ data: result.data });
      if (!res.success) throw new Error("Submission failed");
      setSent(true);
      setValues(EMPTY);
      toast.success("Thank you! Your message has been sent.");
    } catch {
      toast.error("Sorry, we couldn't send your message. Please try again or email us.");
    } finally {
      setSubmitting(false);
    }
  };

  const field = (key: keyof FormValues, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div className="space-y-2">
      <Label htmlFor={key} className="text-sm font-medium text-foreground">
        {label}
      </Label>
      <Input
        id={key}
        value={values[key]}
        onChange={update(key)}
        aria-invalid={!!errors[key]}
        className="h-12 rounded-xl bg-background"
        {...props}
      />
      {errors[key] && <p className="text-sm text-destructive">{errors[key]}</p>}
    </div>
  );

  return (
    <>
      <section className="border-b border-border bg-secondary/60">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center lg:px-8 md:py-24">
          <p className="eyebrow">Let's connect</p>
          <h1 className="mt-4 text-5xl font-semibold text-foreground md:text-6xl">
            We'd Love to Hear From You!
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Have a question, want to place an order, or simply want to talk bread? We're always
            happy to connect.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1.5fr] lg:px-8">
          <aside className="rounded-3xl bg-espresso p-8 text-espresso-foreground shadow-lift md:p-10">
            <p className="eyebrow !text-accent">Contact information</p>
            <h2 className="mt-4 text-3xl font-semibold">Visit, call or write to us.</h2>
            <ul className="mt-10 space-y-7">
              {DETAILS.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-espresso-foreground/60">{label}</p>
                    {href ? (
                      <a href={href} className="mt-1 block text-base hover:text-accent">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <h2 className="mt-6 text-3xl font-semibold text-foreground">Thank you!</h2>
                <p className="mt-3 max-w-md text-muted-foreground">
                  Your message is on its way. Our team will get back to you soon — in the meantime,
                  something delicious is probably coming out of the oven.
                </p>
                <Button variant="brand" size="xl" className="mt-8" onClick={() => setSent(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {field("name", "Full Name", { autoComplete: "name", placeholder: "Your full name" })}
                  {field("email", "Email Address", { type: "email", autoComplete: "email", placeholder: "you@example.com" })}
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  {field("phone", "Phone Number", { type: "tel", autoComplete: "tel", placeholder: "+91 98765 43210" })}
                  {field("subject", "Subject", { placeholder: "Order, bulk enquiry, feedback…" })}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={values.message}
                    onChange={update("message")}
                    aria-invalid={!!errors.message}
                    placeholder="Tell us how we can help…"
                    className="rounded-xl bg-background"
                  />
                  {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                </div>
                <Button
                  type="submit"
                  variant="brand"
                  size="xl"
                  className="w-full sm:w-auto"
                  disabled={submitting}
                >
                  {submitting ? "Sending…" : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
