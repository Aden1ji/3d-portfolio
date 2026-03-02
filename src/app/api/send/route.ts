export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { z } from "zod";

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
          { error: "Missing RESEND_API_KEY. Add it in Vercel env vars." },
          { status: 500 }
      );
    }

    const body = await req.json();
    const parsed = Email.safeParse(body);

    if (!parsed.success) {
      return Response.json({ error: parsed.error.message }, { status: 400 });
    }

    const { Resend } = await import("resend");
    const { config } = await import("@/data/config");
    const { EmailTemplate } = await import("@/components/email-template");

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [config.email],
      subject: "Contact me from portfolio",
      react: EmailTemplate({
        fullName: parsed.data.fullName,
        email: parsed.data.email,
        message: parsed.data.message,
      }),
    });

    if (error) return Response.json({ error }, { status: 500 });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}