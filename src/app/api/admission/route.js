import { sendMail } from "@/lib/mail";

const CLASSES = ["JSS 1", "JSS 2", "JSS 3", "SS 1", "SS 2", "SS 3"];
const GENDERS = ["Male", "Female"];

function clean(value) {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
}

function bad(message) {
  return Response.json({ error: message }, { status: 400 });
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return bad("Invalid request.");
  }

  if (body.website) {
    return Response.json({ ok: true });
  }

  const studentName = clean(body.studentName);
  const dateOfBirth = clean(body.dateOfBirth);
  const gender = clean(body.gender);
  const classApplying = clean(body.classApplying);
  const previousSchool = clean(body.previousSchool);
  const parentName = clean(body.parentName);
  const phone = clean(body.phone);
  const email = clean(body.email);
  const address = clean(body.address);
  const notes = typeof body.notes === "string" ? body.notes.trim() : "";

  if (
    !studentName ||
    !dateOfBirth ||
    !gender ||
    !classApplying ||
    !parentName ||
    !phone ||
    !email ||
    !address
  ) {
    return bad("Please fill in all required fields.");
  }

  if (!GENDERS.includes(gender) || !CLASSES.includes(classApplying)) {
    return bad("Invalid selection.");
  }

  const dob = new Date(dateOfBirth);
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(dateOfBirth) ||
    Number.isNaN(dob.getTime()) ||
    dob > new Date()
  ) {
    return bad("Invalid date of birth.");
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return bad("Invalid email address.");
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    return bad("Invalid phone number.");
  }

  if (
    studentName.length > 100 ||
    parentName.length > 100 ||
    previousSchool.length > 150 ||
    address.length > 300 ||
    notes.length > 1000
  ) {
    return bad("One of the fields is too long.");
  }

  const text = [
    "NEW ADMISSION APPLICATION",
    "",
    "Student",
    `Full name: ${studentName}`,
    `Date of birth: ${dateOfBirth}`,
    `Gender: ${gender}`,
    `Class applying for: ${classApplying}`,
    `Previous school: ${previousSchool || "Not given"}`,
    "",
    "Parent or guardian",
    `Name: ${parentName}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Address: ${address}`,
    "",
    "Additional information",
    notes || "None",
  ].join("\n");

  try {
    await sendMail({
      subject: `New admission application: ${studentName} (${classApplying})`,
      replyTo: email,
      text,
    });
  } catch (error) {
    console.error("Admission email failed:", error);
    return Response.json(
      { error: "Could not submit your application." },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}