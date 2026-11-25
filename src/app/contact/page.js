import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { pageMetadata, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: `Call ${site.phones[0].display}, email ${site.email} or visit God's Own Secondary School in Aaye Town, along Irese Road, Akure, Ondo State.`,
  path: "/contact",
});

const cards = [
  {
    icon: Phone,
    title: "Call us",
    color: "bg-azure-deep",
    items: site.phones.map((phone) => ({ text: phone.display, href: `tel:${phone.tel}` })),
  },
  {
    icon: Mail,
    title: "Email us",
    color: "bg-accent-deep",
    items: [{ text: site.email, href: `mailto:${site.email}` }],
  },
  {
    icon: MapPin,
    title: "Visit us",
    color: "bg-leaf-deep",
    items: [{ text: site.address.full, href: site.mapsUrl, external: true }],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Call us, visit the school or send us a message. We would love to hear from you."
        path="/contact"
        image="/images/more-teachers.jpg"
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Stagger className="grid gap-5 md:grid-cols-3" gap={0.12}>
          {cards.map((card) => (
            <StaggerItem
              key={card.title}
              className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
            >
              <span className={`inline-flex rounded-2xl p-3 text-white ${card.color}`}>
                <card.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-lg font-bold text-navy">{card.title}</h2>
              <ul className="mt-2 space-y-1">
                {card.items.map((item) => (
                  <li key={item.text}>
                    <a
                      href={item.href}
                      {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="break-words text-gray-600 underline-offset-4 hover:text-navy hover:underline"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <Reveal className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-navy/5 lg:col-span-3">
            <ContactForm />
          </Reveal>

          <Reveal from="left" delay={0.1} className="flex flex-col overflow-hidden rounded-[2rem] bg-navy text-white lg:col-span-2">
            <iframe
              title={`Map showing ${site.name}`}
              src={site.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full flex-1 border-0 lg:h-auto"
            />
            <div className="p-7">
              <p className="font-semibold">{site.address.full}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-sun px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-white"
              >
                Open in Google Maps
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
