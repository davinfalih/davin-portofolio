"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects, certificates, techStack } from "@/lib/data"

type Tab = "projects" | "certificates" | "techstack"

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>("projects")
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showAllCerts, setShowAllCerts] = useState(false)

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3)
  const visibleCerts = showAllCerts ? certificates : certificates.slice(0, 2)
  const hiddenProjectsCount = projects.length - 3
  const hiddenCertsCount = certificates.length - 2

  return (
    <section id="portfolio" className="section-bg px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-[#202124] sm:text-4xl dark:text-white"
          >
            Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-[#5f6368] dark:text-slate-400"
          >
            Explore my projects, verified certifications, and the technologies I use.
          </motion.p>
        </div>

        <div className="mb-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="portfolio-tab-container"
          >
            {[
              { key: "projects" as Tab, label: "Projects", icon: "fa-solid fa-folder-open" },
              { key: "certificates" as Tab, label: "Certificates", icon: "fa-solid fa-certificate" },
              { key: "techstack" as Tab, label: "Tech Stack", icon: "fa-solid fa-microchip" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`portfolio-tab-btn ${activeTab === tab.key ? "active-tab" : ""}`}
              >
                <i className={tab.icon}></i>
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 24, filter: "blur(2px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(2px)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {visibleProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:bg-slate-950 dark:border-slate-800"
                  >
                    <div className="relative overflow-hidden">
                      <div className="h-56 w-full bg-gradient-to-br from-[#4285F4]/20 to-[#34a853]/10">
                        <img
                          loading="lazy"
                          src={project.image}
                          alt={project.title}
                          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.style.display = "none"
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/70 via-[#202124]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#202124] shadow-lg transition-all duration-300 hover:text-white hover:shadow-xl hover:-translate-y-1"
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = project.btnColor; e.currentTarget.style.color = "white" }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "#202124" }}
                        >
                          <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
                          <span>View Project</span>
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-xl font-bold text-[#202124] dark:text-white">{project.title}</h3>
                      <p className="mb-4 text-sm font-semibold text-[#4285F4]">{project.subtitle}</p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t.name}
                            className="rounded-full px-3 py-1 text-xs font-medium"
                            style={{
                              backgroundColor: `${t.color}15`,
                              color: t.color,
                            }}
                          >
                            {t.name}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm leading-relaxed text-[#5f6368] dark:text-slate-400">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {!showAllProjects && hiddenProjectsCount > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-10 text-center"
                >
                  <button
                    onClick={() => setShowAllProjects(true)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-[#202124] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  >
                    <i className="fa-solid fa-layer-group"></i>
                    <span>
                      {hiddenProjectsCount} more project{hiddenProjectsCount > 1 ? "s" : ""}
                    </span>
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {activeTab === "certificates" && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 24, filter: "blur(2px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(2px)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
                {visibleCerts.map((cert, idx) => (
                  <motion.a
                    key={cert.id}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:bg-slate-950 dark:border-slate-800 block"
                  >
                    <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#4285F4]/10 to-[#34a853]/5">
                      <img
                        loading="lazy"
                        src={cert.image}
                        alt={cert.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = "none"
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#202124] shadow-lg">
                          <i className="fa-solid fa-eye"></i>
                          View Certificate
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-[#4285F4] uppercase tracking-wide">
                          {cert.category}
                        </span>
                        <span className="text-xs text-[#5f6368] dark:text-slate-400">{cert.year}</span>
                      </div>
                      <h3 className="text-base font-semibold text-[#202124] dark:text-white group-hover:text-[#4285F4] transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-[#5f6368] dark:text-slate-400 mt-1">
                        Issued by {cert.issuer}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {!showAllCerts && hiddenCertsCount > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-10 text-center"
                >
                  <button
                    onClick={() => setShowAllCerts(true)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-[#202124] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  >
                    <i className="fa-solid fa-layer-group"></i>
                    <span>
                      {hiddenCertsCount} more certificate{hiddenCertsCount > 1 ? "s" : ""}
                    </span>
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {activeTab === "techstack" && (
            <motion.div
              key="techstack"
              initial={{ opacity: 0, y: 24, filter: "blur(2px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(2px)" }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Object.entries(techStack).map(([category, items], idx) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm dark:bg-slate-900 dark:border-slate-700"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#4285F4] mb-3">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-sm border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
