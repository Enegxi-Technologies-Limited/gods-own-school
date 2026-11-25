"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

export default function GalleryGrid({ items, categories }) {
  const [filter, setFilter] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);
  const closeRef = useRef(null);
  const triggerRef = useRef(null);

  const visible =
    filter === "All" ? items : items.filter((item) => item.category === filter);
  const active = openIndex === null ? null : visible[openIndex];

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);

  const step = useCallback(
    (delta) =>
      setOpenIndex((i) => (i + delta + visible.length) % visible.length),
    [visible.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
        {["All", ...categories].map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              filter === category
                ? "bg-navy text-white shadow-md"
                : "bg-white text-navy hover:bg-sky"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.ul layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((item, index) => (
            <motion.li
              layout
              key={item.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
            >
              <button
                type="button"
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setOpenIndex(index);
                }}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl bg-navy/10 text-left focus-visible:outline-4 focus-visible:outline-sun"
                aria-label={`Open ${item.type === "video" ? "video" : "photo"}: ${item.caption}`}
              >
                <Image
                  src={item.type === "video" ? item.poster : item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                {item.type === "video" && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="rounded-full bg-white/90 p-4 text-accent-deep shadow-xl transition group-hover:scale-110">
                      <Play className="h-7 w-7 fill-current" aria-hidden="true" />
                    </span>
                  </span>
                )}
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-4 pt-12">
                  <span className="block text-sm font-semibold text-white">
                    {item.caption}
                  </span>
                  <span className="mt-0.5 block text-xs text-sun">{item.category}</span>
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.caption}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>

            {visible.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  aria-label="Previous"
                  className="absolute left-2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:left-6"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  aria-label="Next"
                  className="absolute right-2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:right-6"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <motion.figure
              key={active.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] max-h-[78vh] w-full overflow-hidden rounded-2xl bg-black">
                {active.type === "video" ? (
                  <video
                    src={active.src}
                    poster={active.poster}
                    controls
                    autoPlay
                    playsInline
                    aria-label={active.alt}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <Image
                    src={active.src}
                    alt={active.alt}
                    fill
                    sizes="(min-width: 1024px) 896px, 100vw"
                    className="object-contain"
                  />
                )}
              </div>
              <figcaption className="mt-4 text-center text-white">
                <span className="font-semibold">{active.caption}</span>
                <span className="ml-2 text-sm text-white/60">
                  {openIndex + 1} / {visible.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
