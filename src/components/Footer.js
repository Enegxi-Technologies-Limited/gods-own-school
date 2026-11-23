import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="God's Own Secondary School logo"
              width={56}
              height={56}
              className="rounded-lg"
            />
            <h3 className="font-semibold">God&apos;s Own Secondary School</h3>
          </div>
          <p className="mt-2 text-sm text-white/70">
            Chastity, Sedulity and Tranquility
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Visit Us</h3>
          <p className="mt-2 text-sm text-white/70">
            Aaye Town, along Irese Road,
            <br />
            Akure, Ondo State.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>
          <ul className="mt-2 space-y-1 text-sm text-white/70">
            <li>
              <a href="tel:+2347035818713" className="hover:text-white">
                0703 581 8713
              </a>
            </li>
            <li>
              <a href="tel:+2347063999146" className="hover:text-white">
                0706 399 9146
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Send us a message
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        &copy; {new Date().getFullYear()} God&apos;s Own Secondary School. All
        rights reserved.
      </div>
    </footer>
  );
}