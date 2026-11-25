import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative bg-navy text-white">
      <div className="flex h-1.5" aria-hidden="true">
        <span className="flex-1 bg-accent" />
        <span className="flex-1 bg-sun" />
        <span className="flex-1 bg-leaf" />
        <span className="flex-1 bg-azure" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_1.3fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={site.logo}
              alt={`${site.name} logo`}
              width={56}
              height={56}
              className="rounded-xl"
            />
            <p className="font-bold leading-tight">{site.name}</p>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Raising students of good character who are hardworking, calm and
            ready for the future.
          </p>
          {/* <p className="mt-4 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-sun">
            {site.motto}
          </p> */}
        </div>

        <div>
          <h2 className="font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-sun">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/admission" className="transition hover:text-sun">
                Admission
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Get in Touch</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sun" aria-hidden="true" />
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {site.address.street},
                <br />
                {site.address.city}, {site.address.region}.
              </a>
            </li>
            {site.phones.map((phone) => (
              <li key={phone.tel} className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sun" aria-hidden="true" />
                <a href={`tel:${phone.tel}`} className="hover:text-white">
                  {phone.display}
                </a>
              </li>
            ))}
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sun" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Admissions</h2>
          <p className="mt-4 text-sm text-white/70">
            Applications are open for JSS 1 to SS 3. Apply online in a few
            minutes.
          </p>
          <Link
            href="/admission"
            className="mt-5 inline-block rounded-full bg-sun px-5 py-2.5 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-white"
          >
            Apply Now
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
