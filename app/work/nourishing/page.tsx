import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import Container from '@/components/Container'
import Link from 'next/link'

export const metadata = {
  title: 'Nourishing Networks — Grace Huh',
}

export default function NourishingPage() {
  return (
    <main className="pt-32">
      <Container className="mb-8">
        <FadeIn>
          <p className="text-sm text-gray-400 mb-4">
            <Link href="/work" className="hover:opacity-60 transition-opacity">
              ← Work
            </Link>
          </p>
          <div className="flex items-end justify-between gap-8 mb-16">
            <h1 className="text-5xl font-black tracking-tight">Nourishing Networks App</h1>
            <span className="text-sm text-gray-400 whitespace-nowrap mb-1">Product Design</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="w-full aspect-[16/7] bg-slate-100 flex items-center justify-center text-slate-300 text-sm tracking-widest uppercase mb-16">
            Case Study Images
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-gray-600 mb-6">
              Connecting community members in need with local donors and volunteers.
            </p>
            <p className="text-base leading-8 text-gray-500">
              Case study content coming soon.
            </p>
          </div>
        </FadeIn>
      </Container>

      <div className="mt-32">
        <Footer />
      </div>
    </main>
  )
}
