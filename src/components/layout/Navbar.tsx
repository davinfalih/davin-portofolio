"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useActiveSection } from "@/hooks/useActiveSection"
import { personal, navLinks } from "@/lib/data"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)

    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDark = savedTheme ? savedTheme === "dark" : prefersDark
    setDarkMode(isDark)
    document.documentElement.classList.toggle("dark", isDark)
    document.documentElement.style.colorScheme = isDark ? "dark" : "light"

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const next = !darkMode
    setDarkMode(next)
    document.documentElement.classList.toggle("dark", next)
    document.documentElement.style.colorScheme = next ? "dark" : "light"
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  const scrollTo = (href: string) => {
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  return (
    <nav
      className={`fixed z-50 transition-all duration-300 w-full inset-x-0 top-0 border-b navbar-glass ${
        scrolled ? "shadow-sm" : ""
      } md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:top-4 md:w-[90%] md:max-w-5xl md:rounded-full md:border`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollTo("#home") }}
            className="flex items-center gap-3 font-bold tracking-wide text-[#4285F4]"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#4285F4]/30">
              <img loading="lazy" src="/profile.jpeg" alt={personal.fullName} className="h-full w-full object-cover" />
            </div>
            <span>{personal.fullName}</span>
          </a>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                className="relative group transition-all duration-300"
              >
                <span
                  className={`transition duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "text-[#4285F4]"
                      : "text-[#202124] dark:text-white"
                  }`}
                >
                  {link.label}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#4285F4] transition-all duration-300 ${
                    activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <i className="fa-solid fa-moon text-sm"></i>
              ) : (
                <i className="fa-solid fa-sun text-sm"></i>
              )}
            </button>

            <div className="hidden md:flex">
              <a
                href={personal.cvUrl}
                className="nav-resume-btn inline-flex items-center gap-2 rounded-full px-5 py-2 font-semibold shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-file-lines"></i>
                Resume
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileOpen(!mobileOpen)} className="focus:outline-none">
                {mobileOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden rounded-b-3xl border-t border-slate-200 bg-white/95 px-6 py-6 text-center text-base font-medium shadow-lg backdrop-blur dark:bg-slate-900/95 dark:border-slate-700"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className={`mb-2 block rounded-full px-4 py-2 transition duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "text-[#4285F4] bg-[#4285F4]/10"
                      : "text-[#202124] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={personal.cvUrl}
                className="nav-resume-btn mt-3 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 shadow-sm transition duration-300 hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-file-lines"></i>
                Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
