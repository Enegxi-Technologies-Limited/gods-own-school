import { site } from "@/lib/site";

// Renders structured data for search engines. "<" is escaped to prevent script injection.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export const schoolJsonLd = {
  "@context": "https://schema.org",
  "@type": "HighSchool",
  "@id": `${site.url}/#school`,
  name: site.name,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  image: `${site.url}/images/more-building.jpg`,
  description: site.description,
  slogan: site.motto,
  foundingDate: site.foundingYear,
  email: site.email,
  telephone: site.phones.map((phone) => phone.tel),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  contactPoint: site.phones.map((phone) => ({
    "@type": "ContactPoint",
    telephone: phone.tel,
    contactType: "admissions",
    areaServed: "NG",
    availableLanguage: ["English"],
  })),
};

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
