"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SocialIcons from "./SocialIcon";
import { highlights, profile, stats } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.14),_transparent_32%),linear-gradient(135deg,_#08111f,_#0f172a_58%,_#111827)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="inline-flex w-fit items-center rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] text-sky-100">
            {profile.role}
          </div>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Building full-stack products that feel fast, clear, and production-ready.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              <span className="font-semibold text-white">{profile.name}</span> is a {profile.role.toLowerCase()} with hands-on experience across modern frontend architecture, API development, authentication flows, and responsive product delivery.
            </p>
            <p className="max-w-2xl text-base leading-8 text-slate-400">{profile.summary}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/projects" className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200">
              Explore Projects
            </Link>
            <Link href={profile.resumePath} download className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-300/40 hover:bg-white/10">
              Download Resume
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition hover:text-white">
              Contact Me
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-2xl font-semibold text-white">{stat.value}</div>
                <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-4">
                {item}
              </div>
            ))}
          </div>
          <SocialIcons />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto w-full max-w-md"
        >
          <div className="relative rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur">
            <div className="absolute -left-6 top-6 hidden rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-slate-300 md:block">
              {profile.tagline}
            </div>
            <div className="absolute -right-4 bottom-8 hidden rounded-2xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm text-amber-100 md:block">
              Available for full-stack opportunities
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
              <Image src={profile.imagePath} alt={profile.name} width={720} height={860} priority className="h-auto w-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
