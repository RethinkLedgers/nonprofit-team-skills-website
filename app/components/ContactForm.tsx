"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fromEmail = (form.elements.namedItem("from") as HTMLInputElement).value.trim();
    const orgName = (form.elements.namedItem("org") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    if (!fromEmail || !message) {
      alert("Please add your email and a short message.");
      return;
    }
    const subject =
      "Nonprofit Team Skills inquiry" + (orgName ? ` — ${orgName}` : "");
    const body =
      `${message}\n\n— \nFrom: ${fromEmail}` +
      (orgName ? `\nOrganization: ${orgName}` : "") +
      `\nSent from the Nonprofit Team Skills landing page.`;
    window.location.href = `mailto:info@msg2ai.xyz?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <label>
        <span>Your email</span>
        <input
          type="email"
          name="from"
          required
          placeholder="you@your nonprofit.org"
        />
      </label>
      <label>
        <span>Organization name (optional)</span>
        <input type="text" name="org" placeholder="Bright Futures Foundation" />
      </label>
      <label>
        <span>What are you hoping to do?</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="A quick paragraph about your non-profit, your team, or what you'd like help with."
        />
      </label>
      <p className="form-hint">
        Hitting Send will open your email client with this message pre-filled to{" "}
        <strong>info@msg2ai.xyz</strong>.
      </p>
      <button type="submit" className="btn btn-primary">
        Send to info@msg2ai.xyz <span className="arrow">→</span>
      </button>
    </form>
  );
}
