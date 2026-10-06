import { IBM_Plex_Sans } from 'next/font/google'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import IBMHashiCorpGate from '@/components/IBMHashiCorpGate'

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Governance Policy workflow for IBM HashiCorp Vault — Grace Huh',
}

export default function IBMHashiCorpPage() {
  return (
    <main className={`${plexSans.className} pt-32`}>
      <IBMHashiCorpGate />

      <div className="mt-32">
        <ScrollToTop dark={false} />
        <Footer />
      </div>
    </main>
  )
}
