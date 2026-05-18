'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import IntroSequence from '@/components/IntroSequence'
import WorkSection from '@/components/WorkSection'
import ProjectsSection from '@/components/ProjectsSection'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import Container from '@/components/Container'

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      <IntroSequence onComplete={() => setIntroComplete(true)} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Container>
          {/* Hero — tagline sits just below the header; h-screen hides everything below the fold */}
          <section className="h-screen flex flex-col justify-center pt-20">
            <FadeIn>
              <p className="text-3xl sm:text-[2.925rem] md:text-[3.9rem] lg:text-[4.875rem] font-normal leading-[1.2] sm:leading-[1.15] tracking-tight">
                I am a <span className="font-semibold">multidisciplinary</span> designer who embraces <span className="font-semibold">ambiguity</span> to build meticulously
                crafted, minimalist visual experiences at scale.<br className="hidden sm:block" />I thrive on <span className="font-semibold">collaboration</span> and{' '}
                <span className="font-semibold">complex</span> environments.
              </p>
              <p className="mt-6 sm:mt-[30px] text-base sm:text-lg tracking-tight">
                <span className="text-black">Based in Seattle, WA —</span>{' '}
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-black transition-colors"
                >
                  More about me ↗
                </Link>
              </p>
            </FadeIn>
          </section>

          {/* Work */}
          <WorkSection />

          {/* Projects */}
          <ProjectsSection />

        </Container>

        <Footer />
      </motion.main>
    </>
  )
}
