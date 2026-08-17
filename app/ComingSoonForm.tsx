"use client";

import { useState, FormEvent } from "react";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    )
    .join("&");
}

export default function ComingSoonForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "coming-soon", email }),
      });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="success" role="status">
        You&rsquo;re on the list — we&rsquo;ll be in touch when we launch.
      </p>
    );
  }

  return (
    <form
      name="coming-soon"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="form-block"
    >
      <input type="hidden" name="form-name" value="coming-soon" />
      <div className="form-row">
        <input
          className="field"
          type="email"
          name="email"
          placeholder="you@company.com"
          aria-label="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="submit" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Notify Me"}
        </button>
      </div>
      {status === "error" && (
        <p className="error">
          Something went wrong — please try again in a moment.
        </p>
      )}
      <p className="hint">
        No spam. Just one note the day highlineglassgroup.com goes live.
      </p>
    </form>
  );
}
