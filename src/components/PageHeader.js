import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/motion";

export default function PageHeader({ title, subtitle, path, image }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: title, path },
        ])}
      />

      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover opacity-30"
        />
      )}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-azure/60"
        aria-hidden="true"
      />
      <div
        className="absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full bg-sun/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1 text-sm text-white/70">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li aria-current="page" className="font-medium text-sun">
              {title}
            </li>
          </ol>
        </nav>

        <Reveal>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-xl text-lg text-white/80">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
