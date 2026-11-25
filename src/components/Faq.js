"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";

export default function Faq({ items }) {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl border transition-colors ${
              isOpen ? "border-azure bg-white shadow-lg shadow-navy/5" : "border-navy/10 bg-white"
            }`}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-navy"
              >
                {item.question}
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  className={`shrink-0 rounded-full p-1 ${isOpen ? "bg-accent-deep text-white" : "bg-sky text-navy"}`}
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="px-6 pb-5 text-gray-600">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
