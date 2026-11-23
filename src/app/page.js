import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";

const values = [
  {
    title: "Chastity",
    text: "Moral uprightness and self-discipline in everything our students do.",
  },
  {
    title: "Sedulity",
    text: "Steady hard work and diligence in learning.",
  },
  {
    title: "Tranquility",
    text: "A calm, peaceful environment where every student can focus and grow.",
  },
];

const levels = [
  {
    title: "Junior Secondary",
    range: "JSS 1 to JSS 3",
    src: "/images/jss.jpg",
    alt: "Junior secondary students at God's Own Secondary School",
    text: "The foundation years, where students build strong basics across their core subjects.",
  },
  {
    title: "Senior Secondary",
    range: "SS 1 to SS 3",
    src: "/images/sss.jpg",
    alt: "Senior secondary students at God's Own Secondary School",
    text: "The final stage of secondary education, preparing students for their external examinations and what comes next.",
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
    src: "/images/more-students.jpg",
    alt: "Students of God's Own Secondary School in uniform",
    caption: "Our students",
  },

  {
    src: "/images/mores-students.jpg",
    alt: "Students of God's Own Secondary School in uniform",
    caption: "Our students",
  },

  {
    src: "/images/confrence.jpg",
    alt: "Students of God's Own Secondary School in conference hall",
    caption: "Our students",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-navy/70">
            Aaye Town, Akure, Ondo State
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-navy md:text-5xl">
            God&apos;s Own Secondary School
          </h1>
          <p className="mt-4 max-w-md text-gray-600">
            A school built on discipline, diligence and a peaceful learning
            environment for every student.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-navy px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <HeroSlideshow />
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-navy/10">
          <Image
            src="/images/more-building.jpg"
            alt="The school building at God's Own Secondary School"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-navy">
            Welcome to God&apos;s Own Secondary School
          </h2>
          <p className="mt-4 text-gray-600">
            Located in Aaye Town, along Irese Road, Akure, our school teaches students
            from JSS 1 to SS 3. We aim to give every child a solid education
            in an orderly, caring and peaceful environment.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-medium text-navy underline-offset-4 hover:underline"
          >
            Read our story &rarr;
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-2xl border border-navy/10 bg-white p-8 md:p-10">
          <h2 className="text-2xl font-bold text-navy">
            Hear from Our Principal
          </h2>

          <blockquote className="mt-6 max-w-3xl border-l-4 border-azure pl-5 text-gray-700">
            {principal.message}
          </blockquote>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy font-semibold text-white">
              {principal.role[0]}
            </div>
            <div>
              <p className="font-semibold text-navy">{principal.name}</p>
              <p className="text-sm text-navy/70">{principal.role}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-navy/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-navy">Our Motto</h2>
          <p className="mt-2 text-gray-600">
            Chastity, Sedulity and Tranquility
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-navy/10 bg-paper p-6"
              >
                <h3 className="font-semibold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 className="text-2xl font-bold text-navy">Life at Our School</h2>
          <Link
            href="/gallery"
            className="text-sm font-medium text-navy underline-offset-4 hover:underline"
          >
            See the full gallery &rarr;
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {lifePhotos.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-xl border border-navy/10 bg-white"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-gray-600">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-navy">Our Classes</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {levels.map((level) => (
            <div
              key={level.title}
              className="overflow-hidden rounded-xl border border-navy/10 bg-white"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={level.src}
                  alt={level.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-navy/70">
                  {level.range}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-navy">
                  {level.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{level.text}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/classes"
          className="mt-6 inline-block text-sm font-medium text-navy underline-offset-4 hover:underline"
        >
          View all classes &rarr;
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-2xl bg-navy px-6 py-10 text-center text-white md:py-14">
          <h2 className="text-2xl font-bold">Want to know more about us?</h2>
          <p className="mt-2 text-white/70">
            Call us, visit the school or send us a message.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-white/90"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}