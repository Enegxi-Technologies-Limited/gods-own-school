"use client";

import { useState } from "react";

const emptyForm = { name: "", email: "", phone: "", message: "", website: "" };

const inputClass =
  "mt-1 w-full rounded-lg border border-navy/20 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-navy focus:ring-2 focus:ring-navy/20";

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setForm(emptyForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 md:p-10"
    >
      <h2 className="text-xl font-semibold text-navy">Send us a message</h2>

      <div className="mt-4 space-y-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-navy">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-navy">
            Phone number (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-navy">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            maxLength={2000}
            value={form.message}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p className="mt-4 text-sm text-green-700">
          Thank you. Your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">
          Something went wrong. Please try again or call us.
        </p>
      )}
    </form>
  );
}