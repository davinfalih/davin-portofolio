"use client"

import { motion } from "framer-motion"
import { personal, aboutChips, coreStrengths } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="section-bg px-4 py-20 sm:px-6 lg:px-8">
      <div className="about-section-shell mx-auto max-w-7xl overflow-hidden rounded-[32px] border bg-white shadow-sm dark:bg-slate-900 dark:border-slate-700">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative bg-gradient-to-br from-[#4285F4]/10 via-white to-[#34a853]/10 p-8 sm:p-10 lg:p-14 dark:from-[#4285F4]/5 dark:via-slate-900 dark:to-[#34a853]/5">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#fbbc05]/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-[#ea4335]/10 blur-3xl"></div>

            <div className="relative z-10 text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 text-3xl font-bold tracking-tight text-[#202124] sm:text-4xl dark:text-white"
              >
                About Me
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300"
              >
                {personal.description}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-8 text-base leading-relaxed text-slate-700 dark:text-slate-300"
              >
                {personal.extendedBio}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-3 lg:justify-start"
              >
                {aboutChips.map((chip) => (
                  <span
                    key={chip}
                    className="about-chip rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[#202124] shadow-sm dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  >
                    {chip}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 sm:p-10 lg:p-14 dark:bg-slate-800/50">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center lg:justify-start"
              >
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-[#4285F4]/20 shadow-lg">
                  <img loading="lazy" src="/profile.jpeg" alt="Davin Falih Ramadhan" className="h-full w-full object-cover" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center sm:text-left"
              >
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 italic">
                  &ldquo;Build practical solutions, stay focused, and deliver with consistency.&rdquo;
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mb-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] subtitle-education mb-4">
                Core strengths
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {coreStrengths.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="about-strength-card rounded-xl border border-slate-200/70 bg-white/70 px-3 py-3 text-sm text-[#5f6368] shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-300"
                  >
                    <span className="font-semibold text-[#202124] dark:text-white">{s.title}</span>
                    <p className="mt-1">{s.tech}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
              className="flex justify-center"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="group relative inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-[#202124] shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 active:scale-95 sm:px-8 sm:text-base dark:bg-slate-800/80 dark:border-slate-700 dark:text-white"
              >
                <span>Let&apos;s Work Together</span>
                <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
