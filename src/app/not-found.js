import Link from "next/link";
import { Reveal } from "@/components/motion";

export const metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-sky">
      <div className="absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-azure/25 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-20 right-0 -z-10 h-72 w-72 rounded-full bg-sun/30 blur-3xl" aria-hidden="true" />
      <Reveal className="mx-auto max-w-xl px-4 py-28 text-center">
        <p className="text-8xl font-extrabold text-azure-deep">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-navy">
          This page has stepped out of class
        </h1>
        <p className="mt-3 text-gray-600">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-azure-deep"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="rounded-full border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
