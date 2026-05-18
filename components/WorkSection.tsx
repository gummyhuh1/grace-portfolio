'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import FadeIn from './FadeIn'
import Link from 'next/link'

interface Project {
  title: string
  description: string
  category: string
  href: string
  aspectClass: string
  bgColor: string
  image?: string
  imageClass?: string
  comingSoon?: boolean
}

const projects: Project[] = [
  {
    title: 'Mosaic Companion App',
    description: "End to end app development for the world's first E-ink phone case.",
    category: 'Product Design',
    href: '/work/mosaic',
    aspectClass: 'aspect-[16/9]',
    bgColor: 'bg-stone-100',
  },
  {
    title: 'Nourishing Networks App',
    description: 'Connecting community members in need with local donors and volunteers.',
    category: 'Product Design',
    href: '/work/nourishing',
    aspectClass: 'aspect-[4/3]',
    bgColor: 'bg-slate-100',
    image: '/nourishing-header.png',
    imageClass: 'object-contain scale-50',
    comingSoon: true,
  },
  {
    title: 'Air Fryer Interface',
    description: 'Creating simple cooking experiences.',
    category: 'Interface Design',
    href: '/work/air-fryer',
    aspectClass: 'aspect-[4/3]',
    bgColor: 'bg-zinc-100',
    image: '/airfryer-header.jpg',
  },
]

export default function WorkSection() {
  const [p1, p2, p3] = projects

  return (
    <section id="work" className="pb-32 pt-12">
      {/* Section header */}
      <FadeIn>
        <div className="mb-12">
          <h2 className="text-xl font-bold tracking-tight text-gray-800 flex items-center gap-2">
            Selected work
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block"
            >
              ↓
            </motion.span>
          </h2>
          <p className="mt-1 text-base text-gray-400">Reach out for more details</p>
        </div>
      </FadeIn>

      {/* Project 1 — full width */}
      <FadeIn>
        <Link href={p1.href} className="group block mb-3">
          <div className="w-full aspect-[4/3] sm:aspect-[3/2] bg-black mb-6 overflow-hidden rounded-[24px] sm:rounded-[32px] relative">
            <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
              <Image
                src="/mosaic-header.png"
                alt="Mosaic Companion App"
                fill
                className="object-cover sm:object-contain sm:scale-[1.12] sm:translate-y-[20px]"
                sizes="100vw"
              />
            </div>
          </div>
          <div className="flex items-start justify-between gap-4 sm:gap-8">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight group-hover:opacity-60 transition-opacity">
                {p1.title}
              </h3>
              <p className="mt-1.5 text-sm text-gray-500 max-w-xl leading-relaxed">
                {p1.description}
              </p>
            </div>
            <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap mt-1">{p1.category}</span>
          </div>
        </Link>
      </FadeIn>

      {/* Projects 2 & 3 — stacked on mobile, side by side on desktop */}
      <FadeIn delay={0.1}>
        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[p2, p3].map((project) => (
            <Link key={project.title} href={project.href} className="group block">
              <div className={`w-full ${project.aspectClass} ${project.bgColor} mb-6 overflow-hidden rounded-[24px] sm:rounded-[32px] relative`}>
                {project.image ? (
                  <>
                    <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={project.imageClass ?? 'object-cover'}
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    {project.comingSoon && (
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-[24px] sm:rounded-[32px]">
                        <span className="text-white text-sm font-semibold tracking-[0.2em] uppercase">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-stone-300 text-sm tracking-widest uppercase">
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
            </Link>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
