"use client";

import { MotionConfig, motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1];

const directions = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

// Honours the visitor's "reduce motion" setting for every animation below it.
export function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

// Fades and slides its children in the first time they scroll into view.
export function Reveal({
  children,
  from = "up",
  delay = 0,
  className,
  as = "div",
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...directions[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </Tag>
  );
}

// A container whose StaggerItem children animate in one after another.
export function Stagger({ children, className, as = "div", gap = 0.1 }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className, as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28, scale: 0.97 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, ease },
        },
      }}
    >
      {children}
    </Tag>
  );
}
