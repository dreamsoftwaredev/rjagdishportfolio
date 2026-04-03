"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { collection } from "firebase/firestore";
import { db, addDoc, serverTimestamp } from "../utils/firebase.config";
import SocialIcons from "./SocialIcon";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: serverTimestamp(),
      });

      setSuccess("Message sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
      setSuccess("Message not sent. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-16 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Let&apos;s build something useful and polished
          </h2>
        </div>
        <p className="text-sm leading-7 text-slate-300 sm:text-base">
          Open to full-stack opportunities where product thinking, UI quality, backend reliability, and performance all matter.
        </p>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-white/8 bg-slate-950/45 p-4">
            <p className="text-sm text-slate-400">Email</p>
            <a href={`mailto:${profile.email}`} className="mt-1 block text-white transition hover:text-sky-200">
              {profile.email}
            </a>
          </div>
          <div className="rounded-2xl border border-white/8 bg-slate-950/45 p-4">
            <p className="text-sm text-slate-400">Phone</p>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="mt-1 block text-white transition hover:text-sky-200">
              {profile.phone}
            </a>
            <p className="mt-1 text-sm text-slate-400">{profile.alternatePhone}</p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-slate-950/45 p-4">
            <p className="text-sm text-slate-400">LinkedIn</p>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="mt-1 block text-white transition hover:text-sky-200">
              jagdishrao-dev
            </a>
          </div>
        </div>

        <SocialIcons />
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-slate-950/20"
      >
        <div className="grid gap-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition focus:border-sky-300/40" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition focus:border-sky-300/40" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about the role, project, or collaboration." required rows={6} className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition focus:border-sky-300/40" />
          </div>

          {success ? <p className={`text-sm ${success.includes("not") ? "text-rose-300" : "text-emerald-300"}`}>{success}</p> : null}

          <button type="submit" disabled={loading} className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-70">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </motion.form>
    </section>
  );
}
