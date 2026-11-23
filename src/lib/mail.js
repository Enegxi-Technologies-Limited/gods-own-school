import { Resend } from "resend";

export async function sendMail({ subject, text, replyTo }) {
  const { RESEND_API_KEY, EMAIL_FROM, EMAIL_TO } = process.env;

  if (!RESEND_API_KEY || !EMAIL_FROM || !EMAIL_TO) {
    throw new Error("Email is not configured.");
  }

  const resend = new Resend(RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    replyTo,
    subject,
    text,
  });



  if (error) {
    throw new Error(error.message);
  }
}