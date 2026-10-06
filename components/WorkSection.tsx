'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import FadeIn from './FadeIn'
import Link from 'next/link'
import BigProjectCard from './BigProjectCard'

interface Project {
  title: string
  description: string
  category: string
  href: string
  aspectClass: string
  bgColor: string
  image?: string
  imageClass?: string
  heroBg?: string
  logo?: string
  password?: string
  storageKey?: string
  comingSoon?: boolean
}

const projects: Project[] = [
  {
    title: 'Governance Policy workflow for IBM HashiCorp Vault',
    description: 'Shifting enterprise security rules into a seamless, intuitive experience for platform engineers.',
    category: 'Product Design',
    href: '/work/ibm-hashicorp',
    aspectClass: 'aspect-[16/9]',
    bgColor: 'bg-stone-100',
    image: '/ibm-hero-v2.png',
    imageClass: 'object-contain p-8 sm:p-12',
    heroBg: 'bg-stone-50',
    logo: '/ibm-logo.png',
    password: '1001',
    storageKey: 'unlock-ibm-hashicorp',
  },
  {
    title: 'Mosaic Companion App',
    description: "End to end app development for the world's first E-ink phone case.",
    category: 'Product Design',
    href: '/work/mosaic',
    aspectClass: 'aspect-[16/9]',
    bgColor: 'bg-stone-100',
    image: '/mosaic-header.png',
    imageClass: 'object-cover sm:object-contain sm:scale-[1.12] sm:translate-y-[20px]',
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
    comingSoon: false,
  },
]

export default function WorkSection() {
  const big = projects.slice(0, 2)
  const small = projects.slice(2)

  return (
    <section id="work" className="pb-32 pt-12">
      {/* Section header */}
      <FadeIn>
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 flex items-center gap-2">
            Case Studies
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

      {/* Big projects — full width, stacked */}
      {big.map((project, i) => (
        <FadeIn key={project.title} delay={i * 0.05}>
          <BigProjectCard
            title={project.title}
            description={project.description}
            category={project.category}
            href={project.href}
            image={project.image}
            imageClass={project.imageClass}
            heroBg={project.heroBg}
            logo={project.logo}
            password={project.password}
            storageKey={project.storageKey}
            className={i > 0 ? 'mt-10 sm:mt-16' : ''}
          />
        </FadeIn>
      ))}

      {/* Remaining projects — stacked on mobile, side by side on desktop */}
      <FadeIn delay={0.1}>
        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
          {small.map((project) => (
            <Link key={project.title} href={project.href} className="group block">
              <div className={`w-full ${project.aspectClass} ${project.bgColor} mb-6 overflow-hidden rounded-[40px] sm:rounded-[48px] relative`}>
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
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-[40px] sm:rounded-[48px]">
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
