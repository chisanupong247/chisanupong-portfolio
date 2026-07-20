"use client";

import {
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+66 XX XXX XXXX",
    href: "tel:+66000000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangkok, Thailand",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/",
  },
];

export default function ContactSection() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!sent) return;
    const timeout = window.setTimeout(() => setSent(false), 4500);
    return () => window.clearTimeout(timeout);
  }, [sent]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const nextErrors: FormErrors = {};

    if (!name) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!message) nextErrors.message = "Please write a message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    event.currentTarget.reset();
    setSent(true);
  };

  return (
    <section id="contact" className="section-space bg-white">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] bg-ink text-white sm:rounded-[2.5rem]">
          <div className="grid lg:grid-cols-[.9fr_1.1fr]">
            <div className="relative overflow-hidden p-7 sm:p-10 lg:p-14">
              <div className="absolute -left-20 -top-20 size-72 rounded-full bg-blue/20 blur-3xl" />
              <div className="relative">
                <SectionHeading
                  eyebrow="07 / Contact"
                  title="Let’s work together."
                  description="Have an internship, project, or problem that could use a thoughtful analyst? I would love to learn more."
                  dark
                />
                <div className="space-y-4">
                  {contactItems.map(({ icon: Icon, label, value, href }) => {
                    const content = (
                      <>
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-cyan">
                          <Icon size={18} />
                        </span>
                        <span>
                          <span className="block text-[10px] font-black uppercase tracking-wider text-white/35">
                            {label}
                          </span>
                          <span className="mt-0.5 block text-sm font-semibold text-white/75">
                            {value}
                          </span>
                        </span>
                      </>
                    );

                    return href ? (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="flex items-center gap-4 rounded-2xl p-2 transition hover:bg-white/5"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={label} className="flex items-center gap-4 p-2">
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-white p-7 text-ink sm:p-10 lg:p-14">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue">
                Send a message
              </p>
              <h3 className="mt-3 text-2xl font-black tracking-[-0.03em]">
                Tell me what you&apos;re working on.
              </h3>
              <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
                <Field label="Name" name="name" error={errors.name} required />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  error={errors.email}
                  required
                />
                <Field label="Subject" name="subject" />
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-bold text-navy"
                  >
                    Message <span className="text-blue">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full resize-none rounded-2xl border bg-mist/50 px-4 py-3 text-sm outline-none transition focus:border-blue focus:ring-4 focus:ring-blue/10 ${
                      errors.message ? "border-red-400" : "border-slate-200"
                    }`}
                    placeholder="A little context about your opportunity or idea..."
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send message <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {sent && (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 z-[90] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center gap-3 rounded-2xl bg-ink p-4 text-sm font-semibold text-white shadow-2xl sm:left-auto sm:right-5 sm:w-auto sm:translate-x-0"
        >
          <CheckCircle2 className="shrink-0 text-cyan" size={20} />
          Your message has been submitted successfully.
        </div>
      )}
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-bold text-navy">
        {label} {required && <span className="text-blue">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`min-h-12 w-full rounded-2xl border bg-mist/50 px-4 py-3 text-sm outline-none transition focus:border-blue focus:ring-4 focus:ring-blue/10 ${
          error ? "border-red-400" : "border-slate-200"
        }`}
        placeholder={label}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
