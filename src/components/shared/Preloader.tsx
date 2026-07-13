"use client"
import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"

interface PreloaderProps {
  onFinish: () => void
}

const logLines = [
  { text: "Booting development environment...", color: "text-gray-400" },
  { text: "✓ Environment ready", color: "text-green-400" },
  { text: "Loading modules...", color: "text-gray-400" },
  { text: "✓ Core modules loaded", color: "text-green-400" },
  { text: "Compiling portfolio...", color: "text-gray-400" },
  { text: "✓ Compilation complete", color: "text-green-400" },
  { text: "Ready to serve", color: "text-green-400" },
]

export function Preloader({ onFinish }: PreloaderProps) {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    logLines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLogs((prev) => [...prev, line.text])
        setProgress(Math.round(((i + 1) / logLines.length) * 100))
      }, i * 200)
    })
    setTimeout(() => onFinish(), logLines.length * 200 + 400)
  }, [onFinish])

  return (
    <div className="loading-screen" style={{ background: "#0d1117" }}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-96 max-w-[90%] rounded-2xl border border-slate-800 bg-[#0d1117] p-6 shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between bg-[#161b22] px-4 py-2.5 border-b border-[#21262d] -mx-6 -mt-6 mb-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-[11px] text-slate-500 font-mono">bash</span>
          <div className="w-8" />
        </div>
        <div className="space-y-2.5 text-xs md:text-sm font-mono leading-relaxed">
          <p>
            <span className="text-[#34a853]">guest@davin</span>
            <span className="text-white">:</span>
            <span className="text-[#4285F4]">~</span>
            <span className="text-white">$ npm run portfolio</span>
          </p>
          <div className="space-y-1.5 min-h-[80px]">
            {visibleLogs.map((log, i) => {
              const isGreen = log.startsWith("✓")
              return (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={isGreen ? "text-green-400" : "text-gray-400"}
                >
                  {log}
                </motion.p>
              )
            })}
          </div>
          <div className="mt-5 pt-3 border-t border-[#21262d]">
            <div className="flex justify-between text-[10px] text-slate-500 mb-1">
              <span>compiling modules</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#4285F4] to-[#34a853]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
