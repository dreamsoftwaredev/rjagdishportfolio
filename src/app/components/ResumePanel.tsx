import Link from "next/link";
import { profile } from "../data/portfolio";

export default function ResumePanel() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10">
      <div className="rounded-[2rem] border border-sky-300/20 bg-[linear-gradient(135deg,_rgba(14,165,233,0.16),_rgba(15,23,42,0.9)_46%,_rgba(251,191,36,0.12))] p-8 shadow-2xl shadow-slate-950/20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-100">Resume Attachment</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Updated CV attached to the portfolio</h2>
            <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base">
              The latest resume is now available directly inside the site so recruiters and clients can open or download it without leaving the portfolio flow.
            </p>
            <p className="mt-2 text-sm text-slate-300">File: `public/attachment/PJagdishRao_FullStackDeveloper_2Yrs.pdf.pdf`</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={profile.resumePath} target="_blank" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
              Open Resume
            </Link>
            <Link href={profile.resumePath} download className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Download PDF
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
