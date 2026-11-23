import PageHeader from "@/components/PageHeader";
import AdmissionForm from "@/components/AdmissionForm";

export const metadata = {
  title: "Admission | God's Own Secondary School",
};

// DEMO: confirm these steps with the school
const steps = [
  "Fill in the admission form.",
  "The school receives your application by email.",
  "The school contacts you by phone or email.",
];

export default function AdmissionPage() {
  return (
    <>
      <PageHeader
        title="Admission"
        subtitle="Apply online for JSS 1 to SS 3."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid overflow-hidden rounded-2xl border border-navy/10 bg-white md:grid-cols-5">
          <div className="bg-navy p-8 text-white md:col-span-2 md:p-10">
            <h2 className="text-xl font-semibold">How to apply</h2>

            <ol className="mt-6 space-y-5 text-sm">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-navy">
                    {index + 1}
                  </span>
                  <span className="pt-0.5 text-white/90">{step}</span>
                </li>
              ))}
            </ol>

            <p className="mt-8 text-sm text-white/70">
              Need help with the form? Call{" "}
              <a
                href="tel:+2347035818713"
                className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                0703 581 8713
              </a>{" "}
              or{" "}
              <a
                href="tel:+2347063999146"
                className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                0706 399 9146
              </a>
              .
            </p>
          </div>

          <div className="md:col-span-3">
            <AdmissionForm />
          </div>
        </div>
      </section>
    </>
  );
}