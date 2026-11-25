"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const slides = [
  {
    src: "/images/students.jpeg",
    alt: "Students of God's Own Secondary School in uniform",
    caption: "Our students",
  },
  {
    src: "/images/cultural.jpeg",
    alt: "Students at the cultural festival at God's Own Secondary School",
    caption: "Cultural festival",
  },
  {
    src: "/images/more-graduates.jpg",
    alt: "A graduating student at the school's graduation ceremony",
    caption: "Graduation day",
  },
  {
    src: "/images/Teacher.jpeg",
    alt: "Teacher at God's Own Secondary School",
    caption: "Dedicated teachers",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const slide = slides[current];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-sky shadow-2xl shadow-navy/20 ring-8 ring-white">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.8 }, scale: { duration: 5.5, ease: "linear" } }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={current === 0}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-5 pt-16">
          <AnimatePresence mode="wait">
            <motion.p
              key={slide.caption}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="font-semibold text-white"
              aria-live="polite"
            >
              {slide.caption}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {slides.map((item, index) => (
          <button
            type="button"
            key={item.src}
            onClick={() => setCurrent(index)}
            aria-label={`Show photo ${index + 1}: ${item.caption}`}
            aria-current={index === current}
            className={`h-2.5 rounded-full transition-all ${
              index === current ? "w-8 bg-accent" : "w-2.5 bg-navy/25 hover:bg-navy/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
