import Link from "next/link";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-medium text-white">{profile.name}</p>
          <p>{profile.role}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href={profile.resumePath} download className="transition hover:text-white">Resume</Link>
          <Link href="/projects" className="transition hover:text-white">Projects</Link>
          <Link href="/skills" className="transition hover:text-white">Skills</Link>
          <a href={`mailto:${profile.email}`} className="transition hover:text-white">{profile.email}</a>
        </div>
      </div>
    </footer>
  );
}
