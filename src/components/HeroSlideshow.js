"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/students.jpeg",
    alt: "Students of God's Own Secondary School in uniform",
  },
  {
    src: "/images/cultural.jpeg",
    alt: "Cultural event at God's Own Secondary School",
  },
  {
    src: "/images/Teacher.jpeg",
    alt: "Teacher at God's Own Secondary School",
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

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-navy/10 bg-white">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            aria-hidden={index !== current}
            className={`object-cover transition-opacity duration-700 motion-reduce:transition-none ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            onClick={() => setCurrent(index)}
            aria-label={`Show photo ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              index === current ? "w-6 bg-navy" : "w-2.5 bg-navy/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}