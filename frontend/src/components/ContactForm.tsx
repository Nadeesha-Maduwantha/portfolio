"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    }
  }

  const inputClasses =
    "w-full bg-panel-dark border border-border-subtle rounded px-4 py-3 text-[14px] text-text-primary font-mono placeholder:text-text-faint focus:outline-none focus:border-accent transition-colors";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-panel border border-border-subtle rounded-lg p-8 max-w-[520px] flex flex-col gap-4"
    >
      <div className="flex items-center gap-2 -mt-2 mb-1">
        <span className="font-mono text-text-faint text-[13px]">
          $ send-message --to {profile.handle}
        </span>
      </div>
      <input
        name="name"
        type="text"
        placeholder="name"
        required
        className={inputClasses}
      />
      <input
        name="email"
        type="email"
        placeholder="email"
        required
        className={inputClasses}
      />
      <textarea
        name="message"
        placeholder="message"
        rows={4}
        required
        className={`${inputClasses} resize-none`}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="self-start bg-accent text-panel-dark font-semibold font-mono px-6 py-3 rounded text-[14px] hover:bg-accent-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "sending..." : "send_message()"}
      </button>
      {status === "success" && (
        <p className="font-mono text-[13px] text-accent">
          Message sent — thanks for reaching out.
        </p>
      )}
      {status === "error" && (
        <p className="font-mono text-[13px] text-[#ff6b6b]">{errorMessage}</p>
      )}
    </form>
  );
}
