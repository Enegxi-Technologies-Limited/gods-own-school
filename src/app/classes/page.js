import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Classes | God's Own Secondary School",
};

const sections = [
  {
    title: "Junior Secondary",
    src: "/images/jss1.jpg",
    alt: "Junior secondary students seated at God's Own Secondary School",
    text: "The foundation years, where students build strong basics across their core subjects.",
    classes: [
      { name: "JSS 1", note: "First year" },
      { name: "JSS 2", note: "Second year" },
      { name: "JSS 3", note: "Final year of junior secondary" },
    ],
  },
  {
    title: "Senior Secondary",
    src: "/images/sss1.jpg",
    alt: "Senior secondary students seated at God's Own Secondary School",
    text: "The final stage of secondary education, preparing students for their external examinations and what comes next.",
    classes: [
      { name: "SS 1", note: "First year" },
      { name: "SS 2", note: "Second year" },
      { name: "SS 3", note: "Final year of secondary school" },
    ],
  },
];

export default function ClassesPage() {
  return (
    <>
      <PageHeader
        title="Our Classes"
        subtitle="From JSS 1 to SS 3, every stage of secondary school."
      />

      {sections.map((section, index) => (
        <section
          key={section.title}
          className="mx-auto max-w-6xl px-4 py-12"
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div
              className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-navy/10 ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={section.src}
                alt={section.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy">{section.title}</h2>
              <p className="mt-2 text-gray-600">{section.text}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {section.classes.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-navy/10 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-navy">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{item.note}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <p className="text-sm text-gray-600">
          Want to know more about any class?{" "}
          <Link
            href="/contact"
            className="font-medium text-navy underline underline-offset-4"
          >
            Get in touch
          </Link>
          .
        </p>
      </section>
    </>
  );
}