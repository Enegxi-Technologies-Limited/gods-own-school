import { Reveal } from "@/components/motion";

const eyebrowColors = {
  azure: "bg-azure/10 text-azure-deep",
  accent: "bg-accent/10 text-accent-deep",
  sun: "bg-sun/15 text-[#9a6b00]",
  leaf: "bg-leaf/10 text-leaf-deep",
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
  color = "azure",
  center = false,
  as: Heading = "h2",
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p
          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${eyebrowColors[color]}`}
        >
          {eyebrow}
        </p>
      )}
      <Heading className="mt-3 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
        {title}
      </Heading>
      {text && <p className="mt-3 text-gray-600">{text}</p>}
    </Reveal>
  );
}
