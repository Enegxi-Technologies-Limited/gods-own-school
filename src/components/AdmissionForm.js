"use client";

import { useState } from "react";

const classes = ["JSS 1", "JSS 2", "JSS 3", "SS 1", "SS 2", "SS 3"];

const emptyForm = {
  studentName: "",
  dateOfBirth: "",
  gender: "",
  classApplying: "",
  previousSchool: "",
  parentName: "",
  phone: "",
  email: "",
  address: "",
  notes: "",
  website: "",
};

const inputClass =
  "mt-1 w-full rounded-lg border border-navy/20 bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-navy focus:ring-2 focus:ring-navy/20";

function Field({ label, id, optional, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
        {optional && (
          <span className="font-normal text-gray-500"> (optional)</span>
        )}
      </label>
      {children}
    </div>
  );
}

export default function AdmissionForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/admission", {
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
    <form onSubmit={handleSubmit} className="p-8 md:p-10">
      <h2 className="text-xl font-semibold text-navy">Admission form</h2>

      <fieldset className="mt-6">
        <legend className="mb-4 text-xs font-semibold uppercase tracking-wide text-navy/70">
          Student details
        </legend>

        <div className="space-y-4">
          <Field label="Full name" id="studentName">
            <input
              id="studentName"
              name="studentName"
              type="text"
              required
              maxLength={100}
              value={form.studentName}
              onChange={handleChange}
              className={inputClass}
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Date of birth" id="dateOfBirth">
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                required
                value={form.dateOfBirth}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Gender" id="gender">
              <select
                id="gender"
                name="gender"
                required
                value={form.gender}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Class applying for" id="classApplying">
              <select
                id="classApplying"
                name="classApplying"
                required
                value={form.classApplying}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select</option>
                {classes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Previous school" id="previousSchool" optional>
              <input
                id="previousSchool"
                name="previousSchool"
                type="text"
                maxLength={150}
                value={form.previousSchool}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>
          </div>
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className="mb-4 text-xs font-semibold uppercase tracking-wide text-navy/70">
          Parent or guardian details
        </legend>

        <div className="space-y-4">
          <Field label="Full name" id="parentName">
            <input
              id="parentName"
              name="parentName"
              type="text"
              required
              maxLength={100}
              value={form.parentName}
              onChange={handleChange}
              className={inputClass}
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Phone number" id="phone">
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Email address" id="email">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>
          </div>

          <Field label="Home address" id="address">
            <textarea
              id="address"
              name="address"
              rows={3}
              required
              maxLength={300}
              value={form.address}
              onChange={handleChange}
              className={inputClass}
            />
          </Field>

          <Field label="Anything else the school should know" id="notes" optional>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              maxLength={1000}
              value={form.notes}
              onChange={handleChange}
              className={inputClass}
            />
          </Field>
        </div>
      </fieldset>

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
        className="mt-8 rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90 disabled:opacity-60"
      >
        {status === "sending" ? "Submitting..." : "Submit application"}
      </button>

      <p className="mt-4 text-xs text-gray-500">
        Your details are sent to the school by email so it can process your
        application.
      </p>

      {status === "success" && (
        <p className="mt-4 text-sm text-green-700">
          Thank you. Your application has been received. The school will
          contact you.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">
          Something went wrong. Please try again or call the school.
        </p>
      )}
    </form>
  );
}