"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { personal, contacts, socialLinks } from "@/lib/data"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const waMessage = `Halo Davin, saya ${formData.name} (${formData.email}). ${formData.message}`
    window.open(
      `https://wa.me/${personal.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(waMessage)}`,
      "_blank"
    )
  }

  return (
    <section id="contact" className="section-bg px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-[#202124] sm:text-4xl dark:text-white"
          >
            Contact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-[#5f6368] dark:text-slate-400"
          >
            Whether you need a company website, business system, or custom application, I can help turn your plan into a reliable product.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#202124] placeholder:text-slate-400 focus:outline-none focus:border-[#4285F4] focus:ring-2 focus:ring-[#4285F4]/20 transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#202124] placeholder:text-slate-400 focus:outline-none focus:border-[#4285F4] focus:ring-2 focus:ring-[#4285F4]/20 transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#202124] placeholder:text-slate-400 focus:outline-none focus:border-[#4285F4] focus:ring-2 focus:ring-[#4285F4]/20 transition-all resize-none dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-500"
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-[#4285F4] to-[#3367d6] px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#4285F4]/30 hover:-translate-y-1 active:scale-95 overflow-hidden"
                >
                  <span className="hero-btn-shimmer"></span>
                  <i className="fa-solid fa-paper-plane"></i>
                  <span>Send Message</span>
                </button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-[#202124] dark:text-white">Connect with me</h4>
            <div className="space-y-3">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-card flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white shadow-sm dark:bg-slate-800 dark:border-slate-700"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#4285F4]/10 flex items-center justify-center text-[#4285F4]">
                    <i className={`${contact.icon === "envelope" || contact.icon === "globe" ? "fa-solid" : "fa-brands"} fa-${contact.icon}`}></i>
                  </div>
                  <div>
                    <p className="text-xs text-[#5f6368] dark:text-slate-400">{contact.label}</p>
                    <p className="text-sm font-medium text-[#202124] dark:text-white">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-[#4285F4] hover:border-[#4285F4]/30 hover:-translate-y-1 transition-all duration-300 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400"
                >
                  <i className={`${social.icon === "envelope" ? "fa-solid" : "fa-brands"} fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
