import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// n8n "Website Contact Lead Webhook" (production). Public webhook, no credentials.
const N8N_CONTACT_WEBHOOK = "https://shivani111.app.n8n.cloud/webhook/company-contact-us-form";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(20),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(2).max(150),
  message: z.string().trim().min(10).max(1000),
});

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    try {
      const res = await fetch(N8N_CONTACT_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          query: `Subject: ${data.subject}\n\n${data.message}`,
        }),
      });
      if (!res.ok) {
        console.error(`n8n contact webhook failed [${res.status}]: ${await res.text()}`);
        return { success: false as const };
      }
      return { success: true as const };
    } catch (err) {
      console.error("n8n contact webhook error:", err);
      return { success: false as const };
    }
  });
