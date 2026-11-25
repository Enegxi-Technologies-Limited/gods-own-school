import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Target } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { pageMetadata, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Learn the story, mission, vision and leadership of God's Own Secondary School, Aaye Town, along Irese Road, Akure, Ondo State.",
  path: "/about",
});

// DEMO: replace this story with the school's real history
const story = [
  `God's Own Secondary School was founded in ${site.foundingYear} in Aaye Town, along Irese Road, with a simple goal: to give children in our community a good education in a safe and disciplined environment.`,
  "What began as a small school has grown steadily, and today we teach students from JSS 1 to SS 3. Through the years we have held on to the three values we started with: chastity, sedulity and tranquility.",
  "We keep our classes focused, orderly and caring, so that every student can learn, grow in confidence and be ready for the next stage of life.",
];

const facts = [
  { label: "Location", value: site.address.full, color: "border-azure" },
  { label: "Founded", value: site.foundingYear, color: "border-accent" },
  { label: "Classes", value: "JSS 1 to JSS 3 and SS 1 to SS 3", color: "border-sun" },
  { label: "Motto", value: site.motto, color: "border-leaf" },
];

const aims = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To provide quality education in a disciplined, diligent and peaceful environment.",
    style: "from-azure-deep to-navy",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To raise students of good character who are hardworking, calm and ready for the future.",
    style: "from-accent-deep to-[#8f3463]",
  },
];

// DEMO: replace the proprietor's name, and confirm the role descriptions with the school.
// When you have photos, add the path, for example: image: "/images/principal.jpg"
const leaders = [
  {
    role: "Proprietor",
    name: "Name of Proprietor",
    image: null,
    duties: "Owns the school and sets its direction, standards and values.",
    color: "bg-accent-deep",
  },
  {
    role: "Principal",
    name: "Mr Ogunleye Ayobami",
    image: null,
    duties:
      "Leads the day-to-day running of the school, its teachers and its students.",
    color: "bg-azure-deep",
  },
];

function initials(name) {
  return name
    .replace(/^(Mr|Mrs|Miss|Ms|Dr|Prof|Chief|Pastor|Rev)\.?\s+/i, "")
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Get to know God's Own Secondary School: our story, our values and the people who lead us."
        path="/about"
        image="/images/Building.jpeg"
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionHeading eyebrow="Our Story" title="Built on values that last" />
          <Reveal delay={0.1}>
            {story.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-gray-600">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal className="relative mt-10">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] bg-azure/30" aria-hidden="true" />
            <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/more-building.jpg"
                alt="The school building at God's Own Secondary School"
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal from="left" as="aside" className="h-fit rounded-3xl bg-white p-7 shadow-xl shadow-navy/5 lg:sticky lg:top-28">
          <h2 className="text-lg font-bold text-navy">At a Glance</h2>
          <dl className="mt-6 space-y-5 text-sm">
            {facts.map((fact) => (
              <div key={fact.label} className={`border-l-4 pl-4 ${fact.color}`}>
                <dt className="text-gray-500">{fact.label}</dt>
                <dd className="mt-1 font-semibold text-navy">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="bg-sky py-20">
        <Stagger className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2" gap={0.15}>
          {aims.map((aim) => (
            <StaggerItem
              key={aim.title}
              className={`rounded-3xl bg-gradient-to-br p-9 text-white shadow-xl ${aim.style}`}
            >
              <span className="inline-flex rounded-2xl bg-white/15 p-3">
                <aim.icon className="h-7 w-7 text-sun" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-2xl font-bold">{aim.title}</h2>
              <p className="mt-3 text-lg text-white/90">{aim.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading
          eyebrow="Leadership"
          color="accent"
          title="The people who lead us"
          text="The people who run the school and look after its students."
        />

        <Stagger className="mt-10 grid gap-6 md:grid-cols-2" gap={0.15}>
          {leaders.map((leader) => (
            <StaggerItem
              key={leader.role}
              className="group overflow-hidden rounded-3xl border border-navy/10 bg-white transition hover:shadow-xl hover:shadow-navy/10"
            >
              <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-sky to-white">
                {leader.image ? (
                  <Image
                    src={leader.image}
                    alt={`${leader.name}, ${leader.role}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div
                    className={`flex h-28 w-28 items-center justify-center rounded-full text-3xl font-bold text-white shadow-lg ring-8 ring-white transition group-hover:scale-105 ${leader.color}`}
                  >
                    {initials(leader.name)}
                  </div>
                )}
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent-deep">
                  {leader.role}
                </p>
                <h3 className="mt-1 text-xl font-bold text-navy">{leader.name}</h3>
                <p className="mt-3 text-gray-600">{leader.duties}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-navy p-8 text-white">
          <p className="text-lg font-semibold">
            Want to see the school for yourself? Parents are always welcome.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-sun px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white"
          >
            Plan a visit
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section> */}
    </>
  );
}
