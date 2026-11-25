import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Our Classes",
  description:
    "Junior Secondary (JSS 1 to JSS 3) and Senior Secondary (SS 1 to SS 3) classes at God's Own Secondary School, Aaye Town, Akure, Ondo State.",
  path: "/classes",
});

const sections = [
  {
    title: "Junior Secondary",
    range: "JSS 1 to JSS 3",
    src: "/images/jss1.jpg",
    alt: "Junior secondary students seated at God's Own Secondary School",
    text: "The foundation years, where students build strong basics across their core subjects.",
    accent: { badge: "bg-azure-deep", card: "border-azure", number: "text-azure-deep" },
    classes: [
      { name: "JSS 1", note: "First year" },
      { name: "JSS 2", note: "Second year" },
      { name: "JSS 3", note: "Final year of junior secondary" },
    ],
  },
  {
    title: "Senior Secondary",
    range: "SS 1 to SS 3",
    src: "/images/sss1.jpg",
    alt: "Senior secondary students seated at God's Own Secondary School",
    text: "The final stage of secondary education, preparing students for their external examinations and what comes next.",
    accent: { badge: "bg-accent-deep", card: "border-accent", number: "text-accent-deep" },
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
        path="/classes"
        image="/images/jss.jpg"
      />

      {sections.map((section, index) => (
        <section
          key={section.title}
          className={index % 2 === 1 ? "bg-white" : undefined}
        >
          <div className="mx-auto max-w-6xl px-4 py-20">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <Reveal
                from={index % 2 === 1 ? "left" : "right"}
                className={`relative ${index % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl shadow-navy/10">
                  <Image
                    src={section.src}
                    alt={section.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold text-white ${section.accent.badge}`}>
                  {section.range}
                </span>
                <h2 className="mt-4 text-3xl font-extrabold text-navy md:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-3 text-lg text-gray-600">{section.text}</p>
              </Reveal>
            </div>

            <Stagger className="mt-10 grid gap-5 sm:grid-cols-3">
              {section.classes.map((item, i) => (
                <StaggerItem
                  key={item.name}
                  className={`rounded-3xl border-t-4 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${section.accent.card} ${index % 2 === 1 ? "bg-paper" : "bg-white"}`}
                >
                  <p className={`text-4xl font-extrabold ${section.accent.number}`}>
                    0{i + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-navy">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{item.note}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-6xl px-4 py-20">
        <Reveal className="flex flex-wrap items-center justify-between gap-6 rounded-[2rem] bg-gradient-to-br from-leaf-deep to-navy p-10 text-white">
          <div>
            <h2 className="text-2xl font-extrabold">Ready to join a class?</h2>
            <p className="mt-2 text-white/80">
              Apply online, or get in touch if you have questions about any class.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/admission"
              className="group inline-flex items-center gap-2 rounded-full bg-sun px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white"
            >
              Apply Now
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-navy"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
