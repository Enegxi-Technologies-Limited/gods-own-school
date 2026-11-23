import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "About Us | God's Own Secondary School",
};

// DEMO: replace this story with the school's real history
const story = [
  "God's Own Secondary School was founded in 2008 in Aaye Town, along Irese Road, with a simple goal: to give children in our community a good education in a safe and disciplined environment.",
  "What began as a small school has grown steadily, and today we teach students from JSS 1 to SS 3. Through the years we have held on to the three values we started with: chastity, sedulity and tranquility.",
  "We keep our classes focused, orderly and caring, so that every student can learn, grow in confidence and be ready for the next stage of life.",
];

const facts = [
  { label: "Location", value: "Aaye Town, along Irese Road, Akure, Ondo State" },
  // DEMO: replace the founding year
  { label: "Founded", value: "2008" },
  { label: "Classes", value: "JSS 1 to JSS 3 and SS 1 to SS 3" },
  { label: "Motto", value: "Chastity, Sedulity and Tranquility" },
];

const aims = [
  {
    title: "Our Mission",
    text: "To provide quality education in a disciplined, diligent and peaceful environment.",
  },
  {
    title: "Our Vision",
    text: "To raise students of good character who are hardworking, calm and ready for the future.",
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
  },
  {
    role: "Principal",
    name: "Mr Ogunleye Ayobami",
    image: null,
    duties:
      "Leads the day-to-day running of the school, its teachers and its students.",
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
        subtitle="Get to know God's Own Secondary School."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-navy">Our Story</h2>
          {story.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-gray-600">
              {paragraph}
            </p>
          ))}

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl border border-navy/10">
            <Image
              src="/images/more-building.jpg"
              alt="The school building at God's Own Secondary School"
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <aside className="h-fit rounded-xl border border-navy/10 bg-white p-6">
          <h2 className="font-semibold text-navy">At a Glance</h2>
          <dl className="mt-4 space-y-4 text-sm">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-navy/70">{fact.label}</dt>
                <dd className="mt-1 font-medium text-gray-800">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section className="border-y border-navy/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-14 md:grid-cols-2">
          {aims.map((aim) => (
            <div
              key={aim.title}
              className="rounded-xl border border-navy/10 bg-paper p-6"
            >
              <h2 className="font-semibold text-navy">{aim.title}</h2>
              <p className="mt-2 text-sm text-gray-600">{aim.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-navy">Leadership</h2>
        <p className="mt-2 max-w-xl text-gray-600">
          The people who run the school and look after its students.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {leaders.map((leader) => (
            <div
              key={leader.role}
              className="overflow-hidden rounded-xl border border-navy/10 bg-white"
            >
              <div className="relative flex aspect-[4/3] items-center justify-center bg-navy/5">
                {leader.image ? (
                  <Image
                    src={leader.image}
                    alt={`${leader.name}, ${leader.role}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-navy text-3xl font-semibold text-white">
                    {initials(leader.name)}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-navy">
                  {leader.name}
                </h3>
                <p className="text-sm font-medium text-navy/70">
                  {leader.role}
                </p>
                <p className="mt-3 text-sm text-gray-600">{leader.duties}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}