'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ScrollToTop({ dark = true }: { dark?: boolean }) {
  const textClass = dark
    ? 'text-neutral-400 hover:text-white'
    : 'text-gray-400 hover:text-black'

  return (
    <div className="flex items-center justify-center gap-16 mb-24">
      <Link
        href="/"
        className={`flex flex-col items-center gap-2 transition-colors group ${textClass}`}
      >
        <motion.span
          animate={{ x: [0, -6, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-block text-lg"
        >
          ←
        </motion.span>
        <span className="text-sm tracking-wide">Back to home</span>
      </Link>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`flex flex-col items-center gap-2 transition-colors group ${textClass}`}
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
