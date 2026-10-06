'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from './FadeIn'

interface Project {
  title: string
  description: string
  category: string
  bgColor: string
  image?: string
  imageClass?: string
  video?: string
  href?: string
  comingSoon?: boolean
}

const projects: Project[] = [
  {
    title: 'Usability Study for Actual AI',
    description: 'Usability research and testing for Actual AI\'s onboarding & dashboard experience.',
    category: 'Usability Testing',
    bgColor: 'bg-stone-900',
    image: '/actual-ai-header.jpg',
    imageClass: 'object-contain',
    href: '/work/actual-ai',
    comingSoon: true,
  },
  {
    title: 'Javascript Shark Chase',
    description: 'Javascript code learning exercise',
    category: 'Side Project',
    bgColor: 'bg-slate-100',
    href: '/work/shark-chase',
    image: '/shark-chase-screenshot.png',
  },
]

export default function ProjectsSection() {
  return (
    <section className="pb-32 pt-12">
      {/* Section header */}
      <FadeIn>
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 flex items-center gap-2">
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

      <FadeIn delay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
          {projects.map((project) => {
            const CardInner = (
              <>
                <div className="w-full aspect-[4/3] bg-stone-100 mb-6 overflow-hidden rounded-[40px] sm:rounded-[48px] relative">
                  {project.video ? (
                    <div className={`absolute inset-0 ${project.bgColor} transition-transform duration-500 ease-out group-hover:scale-[1.03]`}>
                      <video
                        src={project.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : project.image ? (
                    <>
                      <div className={`absolute inset-0 ${project.bgColor} transition-transform duration-500 ease-out group-hover:scale-[1.03]`}>
                        <Image src={project.image} alt={project.title} fill className={project.imageClass ?? 'object-cover'} sizes="(max-width: 640px) 100vw, 50vw" />
                      </div>
                      {project.comingSoon && (
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-[40px] sm:rounded-[48px]">
                          <span className="text-white text-sm font-semibold tracking-[0.2em] uppercase">
                            Coming Soon
                          </span>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center text-stone-300 text-sm tracking-widest uppercase ${project.bgColor}`}>
                      Image
                    </div>
                  )}
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight group-hover:opacity-60 transition-opacity">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap mt-1">
                    {project.category}
                  </span>
                </div>
              </>
            )

            return project.href && !project.comingSoon ? (
              <Link key={project.title} href={project.href} className="group block">
                {CardInner}
              </Link>
            ) : (
              <div key={project.title} className="group block">
                {CardInner}
              </div>
            )
          })}
        </div>
      </FadeIn>
    </section>
  )
}
