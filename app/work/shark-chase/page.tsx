import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import Container from '@/components/Container'
import ScrollToTop from '@/components/ScrollToTop'
import SharkChaseSketch from '@/components/SharkChaseSketch'
import Link from 'next/link'

export const metadata = {
  title: 'Interactive Shark Chase — Grace Huh',
}

const features = [
  'A school of fish (100) moves across the width of the canvas from left to right.',
  'Waves (40) that move left and right.',
  'Crabs (3) that stay in the bottom section and move across the width of the canvas from right to left.',
  'Shark fin = mouse movement.',
  'Background color changes as you move the mouse from top to bottom — light blue surface color at the top, dark deep-ocean color at the bottom.',
]

export default function SharkChasePage() {
  return (
    <main className="pt-32">
      <Container className="mb-8">
        <FadeIn>
          <p className="text-sm text-gray-400 mb-4">
            <Link href="/work" className="hover:opacity-60 transition-opacity">
              ← Work
            </Link>
          </p>
          <div className="flex items-end justify-between gap-8 mb-8">
            <h1 className="text-5xl font-black tracking-tight">Interactive Shark Chase</h1>
            <span className="text-sm text-gray-400 whitespace-nowrap mb-1">Side Project</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-sm text-gray-500 mb-4">
            Move your mouse over the canvas to steer the shark fin — waves, fish, and crabs dodge out of the way.
          </p>
          <div className="mb-16">
            <SharkChaseSketch />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mb-16">
            <p className="text-lg leading-8 text-gray-600">
              This project is an interactive, typographic digital sea ecosystem built in{' '}
              <a
                href="https://p5js.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-60 transition-opacity"
              >
                p5.js
              </a>{' '}
              that transforms raw keyboard characters into a responsive, interactive ocean. As the user moves around the &apos;shark fin&apos; across the canvas, collision logic creates a dynamic &quot;spring&quot; effect, forcing characters to dodge the shark fin, which is the cursor. To deepen the immersion effect, the background color reacts to the user&apos;s vertical mouse movement to mimic the transition from light blue surface color to dark deep ocean color at the bottom.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div>
            <h2 className="text-xl font-bold tracking-tight mb-6">Features</h2>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex gap-3 text-base text-gray-600 leading-relaxed">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>

      <div className="mt-32">
        <ScrollToTop dark={false} />
        <Footer />
      </div>
    </main>
  )
}
