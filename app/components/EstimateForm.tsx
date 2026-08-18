"use client";

import { useState, FormEvent } from "react";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    )
    .join("&");
}

const PROJECT_TYPES = [
  "Residential windows — new construction",
  "Residential windows — replacement",
  "Shower enclosure / glass bath",
  "Commercial glass paneling",
  "Glass partitions & separations",
  "Storefront system",
  "Other / not sure yet",
];

export default function EstimateForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle"
  );
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: PROJECT_TYPES[0],
    message: "",
  });

  function update<K extends keyof typeof values>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!values.name || !values.email) return;
    setStatus("submitting");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "estimate-request",
          name: values.name,
          email: values.email,
          phone: values.phone,
          "project-type": values.projectType,
          message: values.message,
        }),
      });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="success" role="status">
        Thank you — your request is in. We&rsquo;ll follow up within one
        business day to schedule your free on-site estimate.
      </p>
    );
  }

  return (
    <form
      name="estimate-request"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="form-block estimate-form"
    >
      <input type="hidden" name="form-name" value="estimate-request" />

      <div className="form-grid">
        <label className="field-label">
          Name
          <input
            className="field"
            type="text"
            name="name"
            placeholder="Your full name"
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </label>

        <label className="field-label">
          Email
          <input
            className="field"
            type="email"
            name="email"
            placeholder="you@email.com"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </label>

        <label className="field-label">
          Phone
          <input
            className="field"
            type="tel"
            name="phone"
            placeholder="(555) 555-0123"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </label>

        <label className="field-label">
          Project type
          <select
            className="field"
            name="project-type"
            value={values.projectType}
            onChange={(e) => update("projectType", e.target.value)}
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="field-label field-label-full">
          Tell us about your project
          <textarea
            className="field"
            name="message"
            rows={4}
            placeholder="Address, number of openings, timeline — whatever you know so far."
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
          />
        </label>
      </div>

      <button className="submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Request Free Estimate"}
      </button>

      {status === "error" && (
        <p className="error">
          Something went wrong — please try again in a moment.
        </p>
      )}
      <p className="hint">
        No obligation. We&rsquo;ll reach out to confirm details and schedule
        an on-site visit.
      </p>
    </form>
  );
}
