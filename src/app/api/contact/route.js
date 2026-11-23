import { sendMail } from "@/lib/mail";

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.website) {
    return Response.json({ ok: true });
  }

  const { name, email, phone, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return Response.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return Response.json({ error: "Invalid email address." }, { status: 400 });
  }

  if (message.length > 2000) {
    return Response.json({ error: "Message is too long." }, { status: 400 });
  }

  const safeName = name.trim().replace(/[\r\n]+/g, " ");

  try {
    await sendMail({
      subject: `New message from ${safeName} (website contact form)`,
      replyTo: email,
      text: [
        `Name: ${safeName}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not given"}`,
        "",
        message,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Contact email failed:", error);
    return Response.json(
      { error: "Could not send your message." },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}