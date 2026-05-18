import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import Container from '@/components/Container'

export const metadata = {
  title: 'About — Grace Huh',
}

export default function AboutPage() {
  return (
    <main className="pt-32">
      <Container>
        <div className="mb-6">
          <FadeIn>
            <h1 className="text-5xl font-semibold tracking-tight">Meet Grace Huh</h1>
          </FadeIn>
        </div>
        <AboutSection />
      </Container>
      <Footer />
    </main>
  )
}
