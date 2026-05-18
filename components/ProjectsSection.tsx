'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'

interface Project {
  title: string
  description: string
  category: string
  bgColor: string
}

const projects: Project[] = [
  {
    title: 'Project Title One',
    description: 'A short description of this personal or school project.',
    category: 'UX Design',
    bgColor: 'bg-stone-100',
  },
  {
    title: 'Project Title Two',
    description: 'A short description of this personal or school project.',
    category: 'Product Design',
    bgColor: 'bg-slate-100',
  },
  {
    title: 'Project Title Three',
    description: 'A short description of this personal or school project.',
    category: 'Interface Design',
    bgColor: 'bg-zinc-100',
  },
]

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
}

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + projects.length) % projects.length)
  }

  const next = () => {
    setDirection(1)
    setCurrent((c) => (c + 1) % projects.length)
  }

  const project = projects[current]

  return (
    <section className="pb-32 pt-12">
      {/* Section header */}
      <FadeIn>
        <div className="mb-12">
          <h2 className="text-xl font-bold tracking-tight text-gray-800 flex items-center gap-2">
            Projects
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block"
            >
              ↓
            </motion.span>
          </h2>
          <p className="mt-1 text-base text-gray-400">What I am up to these days → side projects & school projects</p>
        </div>
      </FadeIn>

      <FadeIn>
        {/* Carousel */}
        <div className="relative">
          {/* Image track */}
          <div className="w-full aspect-[16/9] rounded-[32px] overflow-hidden relative">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute inset-0 ${project.bgColor} flex items-center justify-center text-stone-300 text-sm tracking-widest uppercase`}
              >
                Image
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous project"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-200 z-10"
          >
            ←
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next project"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-200 z-10"
          >
            →
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              aria-label={`Go to project ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-4 h-1.5 bg-black' : 'w-1.5 h-1.5 bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Project info */}
        <div className="flex items-start justify-between gap-8 mt-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
            <p className="mt-1.5 text-sm text-gray-500 max-w-xl leading-relaxed">
              {project.description}
            </p>
          </div>
          <span className="text-sm text-gray-400 whitespace-nowrap mt-1">{project.category}</span>
        </div>
      </FadeIn>
    </section>
  )
}
