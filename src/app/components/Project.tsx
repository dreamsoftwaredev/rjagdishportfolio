"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects, projectTechnologies } from "../data/portfolio";

type ProjectsProps = {
  compact?: boolean;
};

export default function Project({ compact = false }: ProjectsProps) {
  const visibleProjects = compact ? projects.slice(0, 2) : projects;

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Selected Work</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Projects shaped by real product and API work
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          These projects reflect the same stack and delivery pattern highlighted in the resume: responsive frontend architecture, secure authentication, modular backend services, and scalable database design.
        </p>
      </div>

      <div className="space-y-8">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-slate-950/20 lg:grid-cols-[1fr_0.9fr] lg:p-8"
          >
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.28em] text-amber-300">{project.subtitle}</p>
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">{project.name}</h3>
                <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{project.overview}</p>
              </div>

              <div className="grid gap-3">
                {project.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-2xl border border-white/8 bg-slate-950/45 px-4 py-4 text-sm leading-7 text-slate-300">
                    {bullet}
                  </div>
                ))}
              </div>

              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200">
                Visit Website
              </Link>
            </div>

            <div className="rounded-[1.75rem] border border-white/8 bg-slate-950/50 p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Project Stack</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {projectTechnologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm text-sky-100">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
