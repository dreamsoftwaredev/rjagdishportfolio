import Link from "next/link";
import { education, experience } from "../data/portfolio";

export default function ExperienceSection() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-16 md:px-10 lg:grid-cols-[1.15fr_0.85fr]">
      <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
        <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Experience</p>
        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">{experience.title}</h2>
            <p className="mt-2 text-lg text-slate-300">{experience.company}</p>
          </div>
          <p className="text-sm uppercase tracking-[0.18em] text-amber-300">{experience.period}</p>
        </div>

        <div className="mt-8 grid gap-3">
          {experience.achievements.map((item) => (
            <div key={item} className="rounded-2xl border border-white/8 bg-slate-950/45 px-4 py-4 text-sm leading-7 text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </article>

      <div className="grid gap-6">
        <article className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Education</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">{education.degree}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{education.institution}</p>
        </article>

        <article className="rounded-[2rem] border border-amber-300/20 bg-amber-300/10 p-6">
          <p className="text-sm uppercase tracking-[0.28em] text-amber-100">What I Focus On</p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-amber-50/90">
            <p>Responsive interfaces that stay clean across mobile, tablet, and desktop.</p>
            <p>Secure REST APIs, JWT authentication, and reusable full-stack architecture.</p>
            <p>Performance-minded delivery with SSR, lazy loading, and scalable component systems.</p>
          </div>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black">
            Start a Conversation
          </Link>
        </article>
      </div>
    </section>
  );
}
