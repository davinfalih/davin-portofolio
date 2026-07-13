"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { personal, stats } from "@/lib/data"

export function Hero() {
  const [displayedName, setDisplayedName] = useState("")
  const fullName = personal.name
  const [showCursor, setShowCursor] = useState(true)
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= fullName.length) {
        setDisplayedName(fullName.slice(0, i))
        i++
      } else {
        clearInterval(timer)
      }
    }, 120)
    return () => clearInterval(timer)
  }, [fullName])

  useEffect(() => {
    const timer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const targets = stats.map((s) => parseInt(s.value))
    const duration = 2000
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      setCounters(targets.map((t) => Math.floor(t * progress)))
      if (progress >= 1) clearInterval(timer)
    }, 30)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 sm:px-6 lg:px-8 section-bg"
    >
      <div className="hero-grid-pattern" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-xs font-medium text-[#5f6368] shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-[#4285F4]/30 sm:px-4 sm:py-2.5 sm:text-sm dark:bg-slate-800/80 dark:border-slate-700 dark:text-slate-300"
          >
            <span className="relative h-2.5 w-2.5 rounded-full bg-[#34a853]">
              <span className="absolute inset-0 rounded-full bg-[#34a853] animate-ping opacity-75"></span>
            </span>
            {personal.status}
          </motion.span>

          <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-[#202124] sm:text-4xl lg:text-6xl dark:text-white">
            Hi, I&apos;m{" "}
            <span className="inline-block text-[#4285F4]">
              {displayedName}
            </span>
            <span id="cursor" className="text-[#4285F4] ml-1" style={{ opacity: showCursor ? 1 : 0 }}>
              |
            </span>
          </h1>

          <p className="mb-4 text-lg font-bold text-[#4285F4] sm:text-xl">
            Full Stack Web Developer
          </p>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[#5f6368] sm:text-lg lg:mx-0 dark:text-slate-400">
            {personal.tagline}
          </p>

          <div className="mb-8 flex justify-center gap-6 lg:justify-start">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                {i > 0 && <div className="hero-stat-divider h-10 mx-4" />}
                <div className="hero-stat-item">
                  <span className="hero-stat-number">{counters[i]}</span>
                  <span className="hero-stat-plus">{stat.plus}</span>
                  <p className="hero-stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href={personal.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4285F4] to-[#3367d6] px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#4285F4]/30 hover:-translate-y-1 active:scale-95 sm:px-8 sm:text-lg overflow-hidden"
            >
              <span className="hero-btn-shimmer"></span>
              <i className="fa-solid fa-file-arrow-down text-base transition-transform duration-300 group-hover:-translate-y-0.5"></i>
              <span>Download Resume</span>
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="group relative inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-base font-semibold text-[#202124] shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 active:scale-95 sm:px-8 sm:text-lg dark:bg-slate-800/80 dark:border-slate-700 dark:text-white"
            >
              <span>View Projects</span>
              <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="absolute right-12 top-12 -z-10 h-72 w-72 rounded-full bg-gradient-to-tr from-[#4285F4]/10 to-[#34a853]/5 blur-3xl dark:from-[#4285F4]/5 dark:to-[#34a853]/2"></div>

          <div className="relative z-0">
            <img
              loading="lazy"
              src="/profile.png"
              alt="Davin Falih Ramadhan"
              className="relative z-0 max-h-[420px] w-auto object-contain drop-shadow-[0_15px_35px_rgba(66,133,244,0.18)] select-none pointer-events-none"
            />
          </div>

          <div
            className="absolute z-30 w-44 md:w-56 rounded-xl border border-slate-200 bg-white/90 shadow-xl backdrop-blur-md dark:bg-slate-900/90 dark:border-slate-800 animate-float-slow overflow-hidden"
            style={{ left: "10px", top: "80px" }}
          >
            <div className="flex items-center justify-between px-3 py-1.5 md:px-4 md:py-2 bg-slate-50/50 dark:bg-slate-800/30 border-b border-slate-200/60 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-[#ff5f56]"></span>
                <span className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-[#ffbd2e]"></span>
                <span className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-[#27c93f]"></span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500">index.js</span>
              <div className="w-6 md:w-10"></div>
            </div>
            <div className="py-3 px-4 md:py-4 md:px-5 font-mono space-y-0.5 md:space-y-1 text-[#202124] dark:text-slate-300" style={{ fontSize: "11px" }}>
              <p className="text-[#4285F4]"><span className="text-[#ea4335]">const</span> dev = {'{'}</p>
              <p className="pl-2 md:pl-3 text-[#5f6368] dark:text-slate-400">name: <span className="text-[#34a853]">&apos;{personal.name}&apos;</span>,</p>
              <p className="pl-2 md:pl-3 text-[#5f6368] dark:text-slate-400">builds: <span className="text-[#fbbc05]">[&apos;Web&apos;, &apos;App&apos;]</span></p>
              <p className="text-[#4285F4]">{'};'}</p>
            </div>
          </div>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute z-20 flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-2xl shadow-lg animate-float-medium"
            style={{ backgroundColor: "#0a66c2", right: "-10px", top: "50%" }}
            title="LinkedIn Profile"
          >
            <i className="fa-brands fa-linkedin-in text-white text-lg md:text-xl"></i>
          </a>

          <a
            href={personal.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute z-20 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full shadow-lg animate-float-fast"
            style={{
              background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              left: "0",
              bottom: "30%",
            }}
            title="Instagram Profile"
          >
            <i className="fa-brands fa-instagram text-white text-lg"></i>
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute z-20 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full shadow-lg animate-float-slow"
            style={{ backgroundColor: "#24292e", right: "10%", bottom: "15%" }}
            title="GitHub Profile"
          >
            <i className="fa-brands fa-github text-white text-lg"></i>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
