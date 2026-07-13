"use client"

import { motion } from "framer-motion"
import { personal, socialLinks } from "@/lib/data"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:bg-slate-950 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-bold text-[#202124] dark:text-white">
              {personal.fullName}
            </h3>
            <p className="text-slate-500 text-sm dark:text-slate-400">{personal.title}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {socialLinks.slice(0, 4).map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-[#4285F4] hover:bg-[#4285F4]/10 transition-all dark:bg-slate-800 dark:text-slate-400"
              >
                <i className={`${social.icon === "envelope" ? "fa-solid" : "fa-brands"} fa-${social.icon}`}></i>
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 text-center"
        >
          <p className="text-slate-400 text-xs dark:text-slate-500">
            Designed &amp; Developed by {personal.fullName} &copy; {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
