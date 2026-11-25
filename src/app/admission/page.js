import { Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import AdmissionForm from "@/components/AdmissionForm";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { admissionSteps, pageMetadata, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Admission",
  description:
    "Apply online for admission into JSS 1 to SS 3 at God's Own Secondary School, Aaye Town, Akure, Ondo State. Simple 3-step application.",
  path: "/admission",
});

const phoneList = site.phones.map((phone) => phone.display).join(" or ");

const faqs = [
  {
    question: "Which classes can my child apply for?",
    answer: "We accept applications for every class from JSS 1 to JSS 3 and SS 1 to SS 3.",
  },
  {
    question: "How do I apply?",
    answer:
      "Fill in the admission form on this page. The school receives your application by email and will contact you by phone or email with the next steps.",
  },
  {
    question: "What information do I need to apply?",
    answer:
      "The student's full name, date of birth, gender, the class they are applying for and their previous school if any, plus the parent or guardian's name, phone number, email and home address.",
  },
  {
    question: "Can I visit the school before applying?",
    answer: `Yes. Parents are always welcome to visit and see the school for themselves. Call ${phoneList} to arrange a visit.`,
  },
  {
    question: "Where is the school located?",
    answer: `${site.name} is in ${site.address.full}.`,
  },
  {
    question: "Who can I contact if I need help with the form?",
    answer: `Call ${phoneList}, or email ${site.email}.`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const stepColors = ["bg-azure-deep", "bg-accent-deep", "bg-leaf-deep"];

export default function AdmissionPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <PageHeader
        title="Admission"
        subtitle="Apply online for JSS 1 to SS 3. It only takes a few minutes."
        path="/admission"
        image="/images/students.jpeg"
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Stagger as="ol" className="grid gap-5 md:grid-cols-3" gap={0.12}>
          {admissionSteps.map((step, index) => (
            <StaggerItem
              key={step.title}
              as="li"
              className="flex gap-4 rounded-3xl bg-white p-6 shadow-sm"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-extrabold text-white ${stepColors[index]}`}
              >
                {index + 1}
              </span>
              <span>
                <span className="block font-bold text-navy">{step.title}</span>
                <span className="mt-1 block text-sm text-gray-600">{step.text}</span>
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 grid overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-navy/5 md:grid-cols-5">
          <div className="relative overflow-hidden bg-gradient-to-br from-navy to-azure-deep p-8 text-white md:col-span-2 md:p-10">
            <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-sun/20 blur-2xl" aria-hidden="true" />
            <h2 className="text-2xl font-bold">Why families choose us</h2>
            <ul className="mt-6 space-y-3 text-sm text-white/90">
              <li>✓ Classes from JSS 1 to SS 3</li>
              <li>✓ A disciplined, caring and peaceful environment</li>
              <li>✓ Dedicated teachers</li>
              <li>✓ Cultural festivals and school activities</li>
            </ul>

            <div className="mt-10 rounded-2xl bg-white/10 p-5">
              <p className="text-sm font-semibold text-sun">Need help with the form?</p>
              <ul className="mt-3 space-y-2 text-sm">
                {site.phones.map((phone) => (
                  <li key={phone.tel}>
                    <a
                      href={`tel:${phone.tel}`}
                      className="inline-flex items-center gap-2 underline decoration-white/30 underline-offset-4 hover:decoration-white"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      {phone.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="apply" className="scroll-mt-28 md:col-span-3">
            <AdmissionForm />
          </div>
        </Reveal>
      </section>

      <section className="bg-sky py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading
            center
            eyebrow="FAQ"
            color="accent"
            title="Frequently asked questions"
            text="Quick answers for parents and guardians."
          />
          <Reveal className="mt-10">
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
