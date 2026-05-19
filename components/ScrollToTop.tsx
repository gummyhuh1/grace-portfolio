'use client'

import { motion } from 'framer-motion'

export default function ScrollToTop() {
  return (
    <div className="flex justify-center mb-24">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
      >
        <motion.span
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-block text-lg"
        >
          ↑
        </motion.span>
        <span className="text-sm tracking-wide">To the top</span>
      </button>
    </div>
  )
}
