"use client";

import Link from "next/link";
import { profile } from "../data/portfolio";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-amber-300 text-sm font-bold text-slate-950">
            PJ
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Portfolio</p>
            <h1 className="text-lg font-semibold text-white">{profile.name}</h1>
          </div>
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 transition hover:bg-white/5 hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href={profile.resumePath} download className="rounded-full border border-sky-300/30 bg-sky-300/10 px-4 py-2 font-medium text-sky-100 transition hover:border-sky-200/50 hover:bg-sky-300/20">
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}
