import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Music,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";
import HeroSlideshow from "@/components/HeroSlideshow";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { admissionSteps, site } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/" },
};

const highlights = [
  {
    icon: CalendarDays,
    value: `Since ${site.foundingYear}`,
    label: "Serving Aaye Town and Akure",
    color: "bg-azure-deep text-white",
  },
  {
    icon: GraduationCap,
    value: "JSS 1 – SS 3",
    label: "Six class levels",
    color: "bg-accent-deep text-white",
  },
  {
    icon: Sparkles,
    value: "3 core values",
    label: "Chastity, Sedulity, Tranquility",
    color: "bg-leaf-deep text-white",
  },
  {
    icon: Laptop,
    value: "Apply online",
    label: "From anywhere, in minutes",
    color: "bg-sun text-navy",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Chastity",
    text: "Moral uprightness and self-discipline in everything our students do.",
    card: "from-accent-deep to-[#9e2d4c] text-white",
  },
  {
    icon: BookOpenCheck,
    title: "Sedulity",
    text: "Steady hard work and diligence in learning.",
    card: "from-sun to-[#e09a00] text-navy",
  },
  {
    icon: Sun,
    title: "Tranquility",
    text: "A calm, peaceful environment where every student can focus and grow.",
    card: "from-leaf-deep to-[#1b6b3c] text-white",
  },
];

const reasons = [
  {
    icon: Users,
    title: "Dedicated teachers",
    text: "Caring teachers who know their students and help each one keep up and do well.",
    color: "text-azure-deep bg-azure/10",
  },
  {
    icon: GraduationCap,
    title: "Ready for exams",
    text: "Senior students are prepared steadily for their external examinations and what comes next.",
    color: "text-accent-deep bg-accent/10",
  },
  {
    icon: Music,
    title: "Culture and activities",
    text: "Cultural festivals, performances and graduation celebrations that build confidence.",
    color: "text-[#9a6b00] bg-sun/15",
  },
  {
    icon: HeartHandshake,
    title: "Parents are welcome",
    text: "An open door for parents. Visit the school, meet the staff and see how your child learns.",
    color: "text-leaf-deep bg-leaf/10",
  },
];

const levels = [
  {
    title: "Junior Secondary",
    range: "JSS 1 to JSS 3",
    src: "/images/jss.jpg",
    alt: "Junior secondary students at God's Own Secondary School",
    text: "The foundation years, where students build strong basics across their core subjects.",
    tag: "bg-azure-deep",
  },
  {
    title: "Senior Secondary",
    range: "SS 1 to SS 3",
    src: "/images/sss.jpg",
    alt: "Senior secondary students at God's Own Secondary School",
    text: "The final stage of secondary education, preparing students for their external examinations and what comes next.",
    tag: "bg-accent-deep",
  },
];

// DEMO: the message is still demo text, replace it with the principal's real words
const principal = {
  name: "Mr Ogunleye Ayobami",
  role: "Principal",
  message:
    "Every child deserves a school that is orderly, caring and serious about learning. We work hard each day to give our students exactly that, and we welcome every parent to visit us and see the school for themselves.",
};

const lifePhotos = [
  {
    src: "/images/more-graduates.jpg",
    alt: "A graduating student in a gown at the school's graduation ceremony",
    caption: "Graduation day",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/more-cultural.jpg",
    alt: "Students in traditional attire at the cultural festival",
    caption: "Cultural festival",
  },
  {
    src: "/images/more-teachers.jpg",
    alt: "Teachers of God's Own Secondary School",
    caption: "Our teachers",
  },
  {
    src: "/images/confrence.jpg",
    alt: "Students of God's Own Secondary School in the conference hall",
    caption: "Learning together",
  },
  {
    src: "/images/more-students.jpg",
    alt: "Students of God's Own Secondary School in uniform",
    caption: "Our students",
  },
];

const stepColors = ["bg-azure-deep", "bg-accent-deep", "bg-leaf-deep"];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-sky">
        <div className="absolute -left-24 -top-24 -z-10 h-80 w-80 rounded-full bg-azure/25 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-32 right-0 -z-10 h-96 w-96 rounded-full bg-sun/25 blur-3xl" aria-hidden="true" />
        <div className="absolute right-1/3 top-10 -z-10 h-40 w-40 rounded-full bg-accent/15 blur-2xl" aria-hidden="true" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 md:grid-cols-2 md:py-24">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-accent-deep shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Admissions open · JSS 1 to SS 3
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy md:text-6xl">
                God&apos;s Own{" "}
                <span className="relative whitespace-nowrap text-azure-deep">
                  Secondary School
                  <svg
                    viewBox="0 0 300 12"
                    className="absolute -bottom-2 left-0 h-3 w-full text-sun"
                    aria-hidden="true"
                    preserveAspectRatio="none"
                  >
                    <path d="M2 9C80 3 220 3 298 9" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-lg text-gray-600">
                Built on discipline, diligence and a peaceful learning environment for every
                student.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/admission"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-deep px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:bg-navy"
              >
                Apply for Admission
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="rounded-full border-2 border-navy px-7 py-3.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                Discover Our School
              </Link>
            </Reveal>

            <Reveal delay={0.4} className="mt-8 flex flex-wrap gap-2">
              {values.map((value) => (
                <span
                  key={value.title}
                  className={`rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold ${value.card}`}
                >
                  {value.title}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal from="left" delay={0.15} className="relative">
            <HeroSlideshow />
            {/* <div className="absolute -left-4 top-8 hidden rounded-2xl bg-white p-4 shadow-xl shadow-navy/10 md:block">
              <p className="text-2xl font-extrabold text-accent-deep">6</p>
              <p className="text-xs font-medium text-gray-600">class levels</p>
            </div> */}
            <div className="absolute -right-3 bottom-20 hidden rounded-2xl bg-navy p-4 text-white shadow-xl md:block">
              <p className="text-sm font-bold text-sun">Since {site.foundingYear}</p>
              <p className="text-xs text-white/70">Aaye Town, Akure</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-4">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <StaggerItem
              key={item.value}
              className={`flex items-center gap-4 rounded-2xl p-5 shadow-lg shadow-navy/10 transition hover:-translate-y-1 ${item.color}`}
            >
              <span className="rounded-xl bg-white/20 p-3">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-lg font-bold">{item.value}</span>
                <span className="block text-sm opacity-85">{item.label}</span>
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Welcome */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <Reveal from="right" className="relative">
          <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] bg-sun" aria-hidden="true" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/more-building.jpg"
              alt="The school building at God's Own Secondary School"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Welcome"
            color="accent"
            title="Welcome to God's Own Secondary School"
            text="Located in Aaye Town, along Irese Road, Akure, our school teaches students from JSS 1 to SS 3. We aim to give every child a solid education in an orderly, caring and peaceful environment."
          />
          <Reveal delay={0.15}>
            <Link
              href="/about"
              className="group mt-6 inline-flex items-center gap-2 font-semibold text-azure-deep"
            >
              Read our story
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Motto */}
      <section className="relative overflow-hidden bg-navy py-20 text-white">
        <div className="bg-dots absolute inset-0 text-white/5" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sun">
              Our Motto
            </p>
            <p className="mt-3 text-white/70">
              Three values that shape how we teach, how we behave and how we
              grow together.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 md:grid-cols-3" gap={0.15}>
            {values.map((value) => (
              <StaggerItem
                key={value.title}
                className={`rounded-3xl bg-gradient-to-br p-8 shadow-xl transition hover:-translate-y-2 ${value.card}`}
              >
                <span className="inline-flex rounded-2xl bg-white/20 p-3">
                  <value.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-2xl font-bold">{value.title}</h3>
                <p className="mt-2 opacity-90">{value.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading
          center
          eyebrow="Why Choose Us"
          color="leaf"
          title="A school parents can trust"
          text="We combine good teaching with good character, so students leave ready for what comes next."
        />

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <StaggerItem
              key={reason.title}
              className="group rounded-3xl border border-navy/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
            >
              <span className={`inline-flex rounded-2xl p-3 transition group-hover:scale-110 ${reason.color}`}>
                <reason.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy">{reason.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{reason.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Principal */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-azure-deep to-navy p-8 text-white md:p-14">
          <Quote className="absolute right-8 top-8 h-24 w-24 text-white/10" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-wider text-sun">
            From the Principal&apos;s desk
          </p>
          <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">
            Hear from Our Principal
          </h2>
          <blockquote className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
            &ldquo;{principal.message}&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sun text-lg font-bold text-navy">
              OA
            </div>
            <div>
              <p className="font-semibold">{principal.name}</p>
              <p className="text-sm text-white/70">{principal.role}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Classes */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Our Classes"
              title="From JSS 1 to SS 3"
              text="Every stage of secondary school, under one roof."
            />
            <Reveal>
              <Link href="/classes" className="group inline-flex items-center gap-2 font-semibold text-azure-deep">
                View all classes
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <Stagger className="mt-10 grid gap-6 md:grid-cols-2" gap={0.15}>
            {levels.map((level) => (
              <StaggerItem
                key={level.title}
                className="group overflow-hidden rounded-3xl border border-navy/10 bg-paper"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={level.src}
                    alt={level.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white ${level.tag}`}>
                    {level.range}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-navy">{level.title}</h3>
                  <p className="mt-2 text-gray-600">{level.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Life at school */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="School Life"
            color="sun"
            title="Life at Our School"
            text="Learning, celebrating and growing together."
          />
          <Reveal>
            <Link href="/gallery" className="group inline-flex items-center gap-2 font-semibold text-azure-deep">
              See the full gallery
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-10 grid auto-rows-[200px] gap-4 sm:grid-cols-4" gap={0.08}>
          {lifePhotos.map((photo) => (
            <StaggerItem
              key={photo.src}
              as="figure"
              className={`group relative overflow-hidden rounded-3xl ${photo.span ?? ""}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-4 pt-12 text-sm font-semibold text-white">
                {photo.caption}
              </figcaption>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* How to join */}
      <section className="bg-sky py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            center
            eyebrow="Admission"
            color="accent"
            title="Join us in 3 easy steps"
            text="Applying for a place at God's Own Secondary School is simple."
          />
          <Stagger as="ol" className="mt-12 grid gap-6 md:grid-cols-3" gap={0.15}>
            {admissionSteps.map((step, index) => (
              <StaggerItem
                key={step.title}
                as="li"
                className="relative rounded-3xl bg-white p-8 text-center shadow-sm"
              >
                <span className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-extrabold text-white shadow-lg ${stepColors[index]}`}>
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{step.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-accent-deep via-[#8f3463] to-navy px-6 py-14 text-center text-white md:py-20">
          <div className="bg-dots absolute inset-0 text-white/10" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Give your child a great start
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-white/90">
              Apply online today, call us, or visit the school in Aaye Town.
              We would love to meet you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/admission"
                className="rounded-full bg-sun px-7 py-3.5 text-sm font-semibold text-navy shadow-lg transition hover:-translate-y-0.5"
              >
                Apply Now
              </Link>
              <a
                href={`tel:${site.phones[0].tel}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-navy"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {site.phones[0].display}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
