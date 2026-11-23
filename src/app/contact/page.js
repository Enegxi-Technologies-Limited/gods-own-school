import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | God's Own Secondary School",
};

const email = "admin@godsownsecschool.com";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Aaye+Town+Irese+Road+Ondo+State";

const details = [
  {
    label: "Address",
    items: [{ text: "Aaye Town, along Irese Road, Ondo State" }],
  },
  {
    label: "Phone",
    items: [
      { text: "0703 581 8713", href: "tel:+2347035818713" },
      { text: "0706 399 9146", href: "tel:+2347063999146" },
    ],
  },
  {
    label: "Email",
    items: [{ text: email, href: `mailto:${email}` }],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Call us, visit the school or send us a message."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid overflow-hidden rounded-2xl border border-navy/10 bg-white md:grid-cols-5">
          <div className="bg-navy p-8 text-white md:col-span-2 md:p-10">
            <h2 className="text-xl font-semibold">Get in touch</h2>
            <p className="mt-2 text-sm text-white/70">
              Reach us by phone or email, or visit the school.
            </p>

            <dl className="mt-8 space-y-6 text-sm">
              {details.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-white/60">{detail.label}</dt>
                  {detail.items.map((item) => (
                    <dd key={item.text} className="mt-1 font-medium">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
                        >
                          {item.text}
                        </a>
                      ) : (
                        item.text
                      )}
                    </dd>
                  ))}
                </div>
              ))}
            </dl>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-lg bg-white px-5 py-3 text-sm font-medium text-navy transition-colors hover:bg-white/90"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}