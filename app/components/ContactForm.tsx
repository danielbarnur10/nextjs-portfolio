"use client";

import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <form
      className="grid gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        const mailto = `mailto:daniel@example.com?subject=${encodeURIComponent(state.subject)}&body=${encodeURIComponent(
          `From: ${state.name} <${state.email}>\n\n${state.message}`
        )}`;
        window.location.href = mailto;
      }}
    >
      <input required placeholder="Name" className="input" value={state.name} onChange={e => setState({ ...state, name: e.target.value })} />
      <input required type="email" placeholder="Email" className="input" value={state.email} onChange={e => setState({ ...state, email: e.target.value })} />
      <input required placeholder="Subject" className="input" value={state.subject} onChange={e => setState({ ...state, subject: e.target.value })} />
      <textarea required placeholder="Message" rows={5} className="input" value={state.message} onChange={e => setState({ ...state, message: e.target.value })} />
      <button className="rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">Send Message</button>

      <style jsx global>{`
        .input {
          border: 1px solid rgb(229 231 235);
          border-radius: 0.5rem;
          padding: 0.625rem 0.75rem;
        }
        .input:focus {
          outline: none;
          border-color: rgb(59 130 246);
          box-shadow: 0 0 0 3px rgb(59 130 246 / 0.2);
        }
      `}</style>
    </form>
  );
}