import WorkSection from '@/components/WorkSection'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import Container from '@/components/Container'

export const metadata = {
  title: 'Work — Grace Huh',
}

export default function WorkPage() {
  return (
    <main className="pt-32">
      <Container>
        <div className="mb-16">
          <FadeIn>
            <h1 className="text-5xl font-black tracking-tight">Work</h1>
          </FadeIn>
        </div>
        <WorkSection />
      </Container>
      <Footer />
    </main>
  )
}
