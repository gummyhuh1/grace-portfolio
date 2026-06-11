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
        <AboutSection />
      </Container>
      <Footer />
    </main>
  )
}
