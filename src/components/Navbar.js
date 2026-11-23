"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/classes", label: "Classes" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpeg"
            alt="God's Own Secondary School logo"
            width={48}
            height={48}
            className="rounded-lg"
          />
          <span className="leading-tight">
            <span className="block font-semibold text-navy">
              God&apos;s Own Secondary School
            </span>
            <span className="block text-xs text-gray-500">
              Aaye Town, Akure, Ondo State
            </span>
          </span>
        </Link>

        <ul className="ml-auto mr-4 hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-navy text-white"
                    : "text-navy hover:bg-navy/10"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/admission"
          className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90 md:inline-block"
        >
          Admission
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-navy/20 px-3 py-2 text-sm font-medium text-navy md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-navy/10 bg-white px-4 py-3 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                  pathname === link.href
                    ? "bg-navy text-white"
                    : "text-navy hover:bg-navy/10"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Link
              href="/admission"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-accent px-3 py-2 text-center text-sm font-medium text-white"
            >
              Admission
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}