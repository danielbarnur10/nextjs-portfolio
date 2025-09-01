
"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#intro", label: "Intro" },
  { href: "#what-i-do", label: "What I Do" },
  { href: "#who-i-am", label: "Who I Am" },
  { href: "#my-work", label: "My Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="#intro" className="font-semibold">Daniel&apos;s Landing Page</Link>
        <nav className="hidden md:flex gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-blue-600">{l.label}</a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">☰</button>
      </div>
      {open && (
        <nav className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-blue-600">
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}