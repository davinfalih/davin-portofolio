"use client"

import { motion } from "framer-motion"
import { education, workExperience } from "@/lib/data"

const iconMap: Record<string, string> = {
  book: "fa-solid fa-book",
  school: "fa-solid fa-school",
  code: "fa-solid fa-code",
  building: "fa-solid fa-building",
  bullhorn: "fa-solid fa-bullhorn",
}

function TimelineItem({
  item,
  index,
  color,
}: {
  item: (typeof education)[0] | (typeof workExperience)[0]
  index: number
  color: string
}) {
  const icon = iconMap[item.icon] || "fa-solid fa-circle"
  const isEdu = "institution" in item
  const subtitle = isEdu ? item.institution : (item as (typeof workExperience)[0]).company

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="resume-timeline-item"
    >
      <div className="resume-timeline-dot" style={{ borderColor: color, background: color }}></div>
      <div
        className="group rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-900 dark:border-slate-700 dark:from-slate-900 dark:to-slate-950"
        style={{ borderColor: `var(--border-color, #e2e8f0)`, "--border-color-hover": color } as React.CSSProperties}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = color
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#e2e8f0"
        }}
      >
        <div className="flex gap-4">
          <div
            className="flex h-12 w-12 min-w-fit items-center justify-center rounded-full border-2 text-lg"
            style={{ borderColor: color, backgroundColor: `${color}10`, color }}
          >
            <i className={icon}></i>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-[#202124] dark:text-white">
              {item.role}
            </h4>
            <p
              className="mb-3 text-sm font-semibold"
              style={{ color }}
            >
              {subtitle}
            </p>
            <p className="mb-3 text-sm font-semibold text-[#5f6368] dark:text-slate-400">
              {item.period}
            </p>
            <p className="text-base leading-relaxed text-[#5f6368] dark:text-slate-400">
              {item.description}
            </p>
            {(item as any).contact && (
              <p className="mt-2 text-xs text-[#4285F4] dark:text-blue-400 font-medium">
                <i className="fa-solid fa-phone mr-1"></i>
                {(item as any).contact}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="section-bg px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-[#202124] sm:text-4xl dark:text-white"
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-[#5f6368] dark:text-slate-400"
          >
            Experience and education built around web development, business systems, and deployment.
          </motion.p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="resume-timeline-col timeline-blue">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4285F4] text-white">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <h3 className="text-2xl font-semibold text-[#202124] dark:text-white">Education</h3>
            </motion.div>

            {education.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} color="#4285F4" />
            ))}
          </div>

          <div className="resume-timeline-col timeline-green">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#34a853] text-white">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <h3 className="text-2xl font-semibold text-[#202124] dark:text-white">Experience</h3>
            </motion.div>

            {workExperience.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} color="#34a853" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
