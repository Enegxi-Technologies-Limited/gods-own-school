"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="bg-navy text-xs text-white/85">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2">
          <p className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-sun" aria-hidden="true" />
            {site.address.full}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${site.phones[0].tel}`}
              className="flex items-center gap-1.5 hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-sun" aria-hidden="true" />
              {site.phones[0].display}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="hidden items-center gap-1.5 hover:text-white sm:flex"
            >
              <Mail className="h-3.5 w-3.5 text-sun" aria-hidden="true" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 bg-white/90 backdrop-blur transition-shadow ${
          scrolled ? "shadow-lg shadow-navy/10" : "border-b border-navy/10"
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
        >
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={site.logo}
              alt={`${site.name} logo`}
              width={48}
              height={48}
              priority
              className="rounded-xl ring-2 ring-azure/30"
            />
            <span className="leading-tight">
              <span className="block font-bold text-navy">{site.name}</span>
              <span className="block text-xs text-gray-500">
                Aaye Town, Akure, Ondo State
              </span>
            </span>
          </Link>

          <ul className="ml-auto mr-4 hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href} className="relative">
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-navy"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active ? "text-white" : "text-navy hover:bg-sky"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/admission"
            className="hidden rounded-full bg-accent-deep px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent/30 transition hover:-translate-y-0.5 hover:bg-navy lg:inline-block"
          >
            Apply Now
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-navy/15 p-2 text-navy lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-navy/10 bg-white lg:hidden"
            >
              <ul className="space-y-1 px-4 py-4">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={pathname === link.href ? "page" : undefined}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                        pathname === link.href
                          ? "bg-navy text-white"
                          : "text-navy hover:bg-sky"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <li className="pt-2">
                  <Link
                    href="/admission"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl bg-accent-deep px-4 py-3 text-center text-sm font-semibold text-white"
                  >
                    Apply Now
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
