import Container from '@/components/Container'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import MosaicTimeline from '@/components/MosaicTimeline'
import MosaicPersona from '@/components/MosaicPersona'
import MosaicUserJourney from '@/components/MosaicUserJourney'

export const metadata = {
  title: 'Mosaic Companion App — Grace Huh',
}

const Placeholder = ({ aspect = 'aspect-video', label = 'Image' }: { aspect?: string; label?: string }) => (
  <div className={`w-full ${aspect} bg-neutral-800 rounded-[24px] flex items-center justify-center text-neutral-600 text-sm tracking-widest uppercase`}>
    {label}
  </div>
)

const Divider = () => <div className="border-t border-neutral-700 my-20" />

export default function MosaicPage() {
  return (
    <main className="pt-20 bg-neutral-900 min-h-screen">

      {/* Full-width hero image */}
      <FadeIn>
        <div className="w-full aspect-[21/9] bg-neutral-800 flex items-center justify-center text-neutral-600 text-sm tracking-widest uppercase">
          Hero Image
        </div>
      </FadeIn>

      <Container>

        {/* Project title */}
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight text-white mt-14 mb-8">Mosaic Companion App</h1>
        </FadeIn>

        {/* Project metadata — right below hero */}
        <FadeIn>
          <div className="grid grid-cols-4 gap-10 mb-[200px]">
            {[
              { label: 'Role', value: ['Senior Graphic Designer', 'Lead Designer'] },
              { label: 'Collaborators', value: ['Associate Marketing Manager', 'Project Engineer', 'Contractor Developer'] },
              { label: 'Company', value: ['Fellowes Mobile'] },
              { label: 'Duration', value: ['8 Weeks'] },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs text-neutral-500 uppercase tracking-widest mb-2">{label}</p>
                {value.map((line) => (
                  <p key={line} className="text-sm text-neutral-100 leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Typographic statement */}
        <FadeIn>
          <p className="text-4xl md:text-5xl lg:text-6xl font-thin leading-[1.25] tracking-tight text-white mb-[200px]">
            Mosaic is a <span className="font-semibold">phone case</span> that utilizes <span className="font-semibold">E-ink</span>{' '}
            technology to display <span className="font-semibold">personalized</span>{' '}
            images from the companion app
          </p>
        </FadeIn>

        {/* Overview images */}
        <FadeIn>
          <div className="flex justify-center gap-[200px] mt-[178px] mb-32">
            <div className="w-[350px] shrink-0 aspect-[1/2] bg-neutral-800 rounded-[24px] flex items-center justify-center">
              <span className="text-neutral-600 text-sm tracking-widest uppercase">Image</span>
            </div>
            <div className="w-[350px] shrink-0 aspect-[1/2] bg-neutral-800 rounded-[24px] flex items-center justify-center">
              <span className="text-neutral-600 text-sm tracking-widest uppercase">Image</span>
            </div>
          </div>
        </FadeIn>

        {/* Product description */}
        <FadeIn>
          <div className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">Overview</h2>
            <p className="text-base text-neutral-300 leading-6">
              Mosaic is a companion app for a phone case with E-ink display that enables users to personalize their case. As a lead designer, I led the end-to-end product design to create a companion mobile app that allows users to effortlessly pair their device, edit photos, and sync their visual stories.
            </p>
          </div>
        </FadeIn>

        {/* Key Design Challenges */}
        <FadeIn>
          <div className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">Key Design Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Card 1 — Pairing */}
              <div className="bg-neutral-800 rounded-[24px] p-10">
                <svg width="80" height="70" viewBox="0 0 100 88" fill="none" className="text-neutral-400 mb-6">
                  {/* PHONE CASE (lower, landscape tilted) — depth strips drawn first */}
                  <polygon points="86,57 86,61 75,80 75,76" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="#262626"/>
                  <polygon points="75,76 75,80 38,59 38,55" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="#262626"/>
                  <polygon points="49,36 86,57 75,76 38,55" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="#262626"/>
                  {/* Case inner hollow indicator (dashed) */}
                  <polygon points="55,42 80,56 73,68 48,54" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 2" strokeLinejoin="round" fill="none"/>

                  {/* UPPER PHONE (landscape tilted, floating above case) */}
                  <polygon points="62,29 62,33 51,52 51,48" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="#262626"/>
                  <polygon points="51,48 51,52 14,31 14,27" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="#262626"/>
                  <polygon points="25,8 62,29 51,48 14,27" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="#262626"/>
                  {/* Phone screen detail */}
                  <polygon points="30,13 58,29 48,42 20,26" stroke="currentColor" strokeWidth="0.75" strokeLinejoin="round" fill="none"/>
                </svg>
                <h3 className="text-lg font-bold mb-3 text-white">Seamless Onboarding and Pairing</h3>
                <p className="text-sm text-neutral-300 leading-7">A frictionless onboarding and pairing flow is critical. If setup feels complicated, users abandon before experiencing the value of Mosaic.</p>
              </div>

              {/* Card 2 — Design with Constraints */}
              <div className="bg-neutral-800 rounded-[24px] p-10">
                <svg width="70" height="70" viewBox="0 0 80 80" fill="none" className="text-neutral-400 mb-6">
                  {/* Outer artboard frame */}
                  <rect x="8" y="8" width="64" height="64" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  {/* Corner bracket — top left */}
                  <polyline points="8,22 8,8 22,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Corner bracket — top right */}
                  <polyline points="58,8 72,8 72,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Corner bracket — bottom left */}
                  <polyline points="8,58 8,72 22,72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Corner bracket — bottom right */}
                  <polyline points="72,58 72,72 58,72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Template grid lines inside */}
                  <line x1="20" y1="36" x2="60" y2="36" stroke="currentColor" strokeWidth="1"/>
                  <line x1="20" y1="46" x2="50" y2="46" stroke="currentColor" strokeWidth="1"/>
                  {/* Pen/stylus cursor drawing */}
                  <path d="M46 20L54 28L34 48L26 50L28 42Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <line x1="42" y1="24" x2="50" y2="32" stroke="currentColor" strokeWidth="1"/>
                </svg>
                <h3 className="text-lg font-bold mb-3 text-white">Design with Constraints</h3>
                <p className="text-sm text-neutral-300 leading-7">Designed within the technical constraints of a pre-built developer template, balancing creative vision with engineering realities.</p>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* Timeline */}
        <FadeIn>
          <div className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">Timeline</h2>
            <MosaicTimeline />
          </div>
        </FadeIn>


        {/* User Research Phase 1 */}
        <FadeIn>
          <div className="mb-[200px]">
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">Phase 01</p>
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">User Research</h2>
            <p className="text-base text-neutral-300 leading-6 mb-10">
              Conducted five user interviews with co-workers using qualitative and quantitative
              questions to understand behaviors, expectations, and pain points.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-5">Key Findings</h3>
                <ul className="space-y-4">
                  {[
                    'Users change phone cases every 4–6 months; interest in more frequent switching if affordable.',
                    '2 of 5 participants use photo editing apps beyond social media.',
                    'Desire for a pre-loaded stock image library.',
                    'App installation viewed as overwhelming — need for intuitive onboarding.',
                    'Users prioritize ease and seamless case-to-app pairing.',
                    'Preference for importing photos directly from social media and editing apps.',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-neutral-300 leading-relaxed">
                      <span className="text-neutral-600 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-5">Goals & Solutions</h3>
                <ul className="space-y-4">
                  {[
                    'Custom design solution',
                    'Enhance accessibility',
                    'Pre-loaded stock images',
                    'Seamless onboarding process',
                    'Engaging image editing features',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-neutral-300 leading-relaxed">
                      <span className="text-neutral-600 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Persona */}
        <FadeIn>
          <div className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">Persona</h2>
            <MosaicPersona />
          </div>
        </FadeIn>

        {/* User Journey */}
        <FadeIn>
          <div className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">User Journey</h2>
            <MosaicUserJourney />
          </div>
        </FadeIn>


        {/* User Flow */}
        <FadeIn>
          <div className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">User Flow</h2>
            <p className="text-base text-neutral-300 leading-6 mb-10">
              I mapped the user flow to architect the app's core structure, ensuring a frictionless journey from the initial device pairing to the final E-ink sync.
            </p>
            <Placeholder aspect="aspect-[16/9]" label="User Flow" />
          </div>
        </FadeIn>

        {/* Low Fidelity Wireframes */}
        <FadeIn>
          <div className="mb-[200px]">
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">Phase 02</p>
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">Low Fidelity Wireframes</h2>
            <p className="text-base text-neutral-300 leading-6 mb-10">
              Low-fidelity prototyping allowed me to validate the app's skeleton and navigational flow early in the process. By gathering feedback on the architecture, I was able to prioritize essential features and rapidly iterate on the text-editing experience to ensure it felt intuitive.
            </p>
            <Placeholder aspect="aspect-[16/14]" label="Wireframes" />
          </div>
        </FadeIn>

        {/* Key Insight */}
        <FadeIn>
          <div className="mb-[200px]">
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">Phase 05</p>
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">Key Insight</h2>
            <p className="text-base text-neutral-300 leading-6 mb-10">
              During internal reviews, it became clear that the physical constraints of the E-ink display clashed with the high-fidelity reality of mobile screens. To prevent a disjointed user experience, the digital interface needed to accurately communicate the hardware's limitations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-neutral-800 rounded-[24px] p-10">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-4">Problem</h3>
                <p className="text-sm text-neutral-300 leading-7">
                  The physical E-ink case lacks blue tones and cannot match the vibrancy of a modern phone screen. This creates a frustrating disparity between what the user edits in the app and what actually appears on the case.
                </p>
              </div>
              <div className="bg-neutral-800 rounded-[24px] p-10">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-4">Solution</h3>
                <p className="text-sm text-neutral-300 leading-7">
                  I engineered a dedicated preview state that renders a precisely dithered, color-constrained version of the user's artwork. This bridges the gap between screen and case, setting accurate visual expectations before the image is synced.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Placeholder aspect="aspect-[16/9]" label="E-ink Preview Feature" />
            </div>
          </div>
        </FadeIn>




        {/* Product Features */}
        <FadeIn>
          <div className="mb-[200px]">
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">Phase 04</p>
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">Product Features</h2>

            <div className="space-y-20">
              {[
                {
                  label: 'Pairing',
                  blocks: [
                    { title: 'Pairing', body: 'I designed an omnipresent pairing system. Users can seamlessly connect the case the moment they snap it on, navigate through settings, or initiate the handshake right before casting their first image. The technology adapts to their natural workflow, completely eliminating setup fatigue.' },
                  ],
                },
                {
                  label: 'Stock Photo Library',
                  blocks: [
                    { title: 'Stock Photo Library', body: 'A curated stock photo library allows users to easily browse and swap images within collections.' },
                    { title: 'My Collection', body: 'My Collection tab lets users see a library of previously created images or collages.' },
                  ],
                },
                {
                  label: 'Features',
                  blocks: [
                    { title: 'Features', body: 'Photo editing features and other features like filters and stickers were created for customization.' },
                  ],
                },
              ].map(({ label, blocks }, i) => (
                <div key={label} className={`flex gap-12 items-center ${i % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-[40%] shrink-0 space-y-8">
                    {blocks.map(({ title, body }) => (
                      <div key={title}>
                        <h3 className="text-xl font-bold tracking-tight mb-4 text-white">{title}</h3>
                        <p className="text-base text-neutral-300 leading-6">{body}</p>
                      </div>
                    ))}
                  </div>
                  <div className="w-[60%] shrink-0">
                    <Placeholder aspect="aspect-[3/4]" label={label} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>


        {/* Outcome & Impact */}
        <FadeIn>
          <div className="mb-[200px]">
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">Outcome</p>
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { stat: '2026', label: 'Launch Timeline' },
                { stat: '2', label: 'Enterprise Retailers Pitched' },
                { stat: '30,000+', label: 'Projected App Users' },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-neutral-800 rounded-[24px] p-10">
                  <p className="text-4xl font-black tracking-tight mb-2 text-white">{stat}</p>
                  <p className="text-sm text-neutral-400">{label}</p>
                </div>
              ))}
            </div>

            <p className="text-base text-neutral-300 leading-6 mb-4">
              Pitched to 2 enterprise retailers and received great feedback. Currently under
              development targeting a 2026 product launch.
            </p>
            <p className="text-base text-neutral-300 leading-6">
              We have developed additional product lines under the new "Mosaic" brand, providing
              further customizable solutions beyond the original E-ink phone case.
            </p>
          </div>
        </FadeIn>

        {/* Next Steps */}
        <FadeIn>
          <div className="mb-32">
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">Next Steps</h2>
            <p className="text-base text-neutral-300 leading-6">
              Post-launch intentions include gathering real user metrics, analyzing user
              interaction data, identifying pain points and drop-off moments, and iterating
              based on customer feedback and analytics.
            </p>
          </div>
        </FadeIn>

      </Container>
      <Footer />
    </main>
  )
}
