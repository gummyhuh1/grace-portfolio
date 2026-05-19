'use client'

import { useEffect, useState } from 'react'

const sections = [
  { id: 'overview',          label: 'Overview' },
  { id: 'user-research',     label: 'User Research' },
  { id: 'low-fidelity',      label: 'Low Fidelity Wireframes' },
  { id: 'key-insight',       label: 'Key Insight' },
  { id: 'product-features',  label: 'Product Features' },
  { id: 'impact',            label: 'Impact' },
]

export default function MosaicSideNav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <nav className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-30 flex-col gap-4">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
          className={`text-left text-[14px] tracking-wide transition-all duration-200 ${
            active === id
              ? 'text-white font-medium'
              : 'text-neutral-600 hover:text-neutral-300'
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}
