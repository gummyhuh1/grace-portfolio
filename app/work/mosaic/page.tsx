import Container from '@/components/Container'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import MosaicTimeline from '@/components/MosaicTimeline'
import MosaicPersona from '@/components/MosaicPersona'
import MosaicUserJourney from '@/components/MosaicUserJourney'
import ZoomableImage from '@/components/ZoomableImage'
import ScrollToTop from '@/components/ScrollToTop'
import MosaicSideNav from '@/components/MosaicSideNav'

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
      <MosaicSideNav />

      {/* Full-width hero image */}
      <FadeIn>
        <div className="w-full bg-neutral-900">
          <img
            src="/mosaic-hero.png"
            alt="Mosaic Companion App"
            className="w-full h-auto block max-h-[70vh] object-contain mx-auto"
          />
        </div>
      </FadeIn>

      <Container>

        {/* Project title */}
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight text-white mt-14 mb-8">Mosaic Companion App</h1>
        </FadeIn>

        {/* Project metadata — right below hero */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-[200px]">
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
            Mosaic is a <span className="font-semibold">phone case</span> that utilizes <span className="font-semibold whitespace-nowrap">E-ink</span>{' '}
            technology to display <span className="font-semibold">personalized</span>{' '}
            images from the companion app
          </p>
        </FadeIn>

        {/* Overview images */}
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-[200px] mt-[178px] mb-32">
            <div className="w-full max-w-[350px]">
              <img src="/mosaic-portrait-1.png" alt="Mosaic app screen 1" className="w-full h-auto block" />
            </div>
            <div className="w-full max-w-[350px]">
              <img src="/mosaic-portrait-2.png" alt="Mosaic app screen 2" className="w-full h-auto block" />
            </div>
          </div>
        </FadeIn>

        {/* Product description */}
        <FadeIn>
          <div id="overview" className="mb-[200px]">
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
                <div
                  aria-label="Pairing icon"
                  role="img"
                  className="w-28 h-28 mb-6"
                  style={{
                    backgroundColor: '#50DD50',
                    WebkitMaskImage: 'url(/mosaic-pairing-icon.png)',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: 'url(/mosaic-pairing-icon.png)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    filter: 'drop-shadow(0 0 0.4px #50DD50) drop-shadow(0 0 0.4px #50DD50) drop-shadow(0 0 0.4px #50DD50)',
                  }}
                />
                <h3 className="text-lg font-bold mb-3 text-white">Seamless Onboarding and Pairing</h3>
                <p className="text-sm text-neutral-300 leading-7">A frictionless onboarding and pairing flow is critical. If setup feels complicated, users abandon before experiencing the value of Mosaic.</p>
              </div>

              {/* Card 2 — Design with Constraints */}
              <div className="bg-neutral-800 rounded-[24px] p-10">
                <div className="h-28 flex items-center mb-6">
                <svg
                  width="90"
                  height="90"
                  viewBox="0 0 110 110"
                  fill="none"
                  stroke="#50DD50"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  aria-label="Chain link icon"
                  role="img"
                >
                  <defs>
                    {/* LEFT link mask — hidden where RIGHT link's ring covers it, BUT ONLY in the upper half (so left link wins lower crossing) */}
                    <mask id="leftMask">
                      <rect width="110" height="110" fill="white" />
                      <g transform="rotate(-23 66 60)">
                        <rect x="31" y="46" width="70" height="28" rx="14" fill="black" />
                        <rect x="39" y="54" width="54" height="12" rx="6" fill="white" />
                      </g>
                      {/* Re-expose lower half */}
                      <rect x="0" y="61" width="110" height="49" fill="white" />
                    </mask>

                    {/* RIGHT link mask — hidden where LEFT link's ring covers it, BUT ONLY in the lower half (so right link wins upper crossing) */}
                    <mask id="rightMask">
                      <rect width="110" height="110" fill="white" />
                      <g transform="rotate(-23 40 62)">
                        <rect x="5" y="48" width="70" height="28" rx="14" fill="black" />
                        <rect x="13" y="56" width="54" height="12" rx="6" fill="white" />
                      </g>
                      {/* Re-expose upper half */}
                      <rect x="0" y="0" width="110" height="61" fill="white" />
                    </mask>
                  </defs>

                  {/* Left link */}
                  <g mask="url(#leftMask)">
                    <g transform="rotate(-23 40 62)">
                      <rect x="5" y="48" width="70" height="28" rx="14" />
                      <rect x="13" y="56" width="54" height="12" rx="6" />
                    </g>
                  </g>

                  {/* Right link */}
                  <g mask="url(#rightMask)">
                    <g transform="rotate(-23 66 60)">
                      <rect x="31" y="46" width="70" height="28" rx="14" />
                      <rect x="39" y="54" width="54" height="12" rx="6" />
                    </g>
                  </g>

                  {/* Top sparkles — tight cluster above center of chains */}
                  <line x1="47" y1="22" x2="45" y2="12" />
                  <line x1="55" y1="20" x2="55" y2="10" />
                  <line x1="63" y1="22" x2="65" y2="12" />

                  {/* Bottom sparkles — tight cluster below center of chains */}
                  <line x1="47" y1="92" x2="45" y2="102" />
                  <line x1="55" y1="94" x2="55" y2="104" />
                  <line x1="63" y1="92" x2="65" y2="102" />
                </svg>
                </div>
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
          <div id="user-research" className="mb-[200px]">
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
                    'App installation viewed as overwhelming, requiring intuitive onboarding.',
                    'Users prioritize ease and seamless case-to-app pairing.',
                    'Preference for importing photos directly from social media and editing apps.',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-neutral-300 leading-relaxed">
                      <span className="text-neutral-600 mt-0.5">·</span>
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
                      <span className="text-neutral-600 mt-0.5">·</span>
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
            <div className="hidden md:block">
              <ZoomableImage src="/mosaic-userflow-desktop.png" alt="Mosaic User Flow" />
            </div>
            <img src="/mosaic-userflow-mobile.png" alt="Mosaic User Flow" className="md:hidden w-full h-auto" />
          </div>
        </FadeIn>

        {/* Low Fidelity Wireframes */}
        <FadeIn>
          <div id="low-fidelity" className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">Low Fidelity Wireframes</h2>
            <p className="text-base text-neutral-300 leading-6 mb-10">
              Low-fidelity prototyping allowed me to validate the app's skeleton and navigational flow early in the process. By gathering feedback on the architecture, I was able to prioritize essential features and rapidly iterate on the text-editing experience to ensure it felt intuitive.
            </p>
            <div className="space-y-16">
              {/* Image editing features — full width */}
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-widest mb-7 text-center">Image Editing Features</p>
                <div className="w-full md:h-[400px] md:flex md:items-center md:justify-center">
                  <img src="/mosaic-lf-editing-v2.png" alt="Image editing features wireframes" className="w-full h-auto md:h-full md:w-auto object-contain" />
                </div>
              </div>

              {/* Onboarding — full width */}
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-widest mb-7 text-center">Pairing Options — Onboarding</p>
                <div className="w-full md:h-[400px] md:flex md:items-center md:justify-center">
                  <img src="/mosaic-lf-onboarding.png" alt="Onboarding pairing wireframes" className="w-full h-auto md:h-full md:w-auto object-contain" />
                </div>
              </div>

              {/* Send & Complete — full width */}
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-widest mb-7 text-center">Pairing Options — Send &amp; Complete</p>
                <div className="w-full md:h-[400px] md:flex md:items-center md:justify-center">
                  <img src="/mosaic-lf-send.png" alt="Send and complete wireframes" className="w-full h-auto md:h-full md:w-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Key Insight */}
        <FadeIn>
          <div id="key-insight" className="mb-[200px]">
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
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-8 md:gap-16 items-center md:items-start">
              {/* Left — dither_1 with callout annotation */}
              <div className="w-full max-w-[340px]">
                <p className="text-center text-sm text-neutral-400 mb-2">Preview OFF</p>
                <div className="relative">
                  <img src="/mosaic-dither-1.png" alt="Mosaic preview — original" className="w-full h-auto" />
                  {/* SVG overlay — overflow visible so callout extends outside image */}
                  <svg
                    className="absolute inset-0 pointer-events-none"
                    style={{ overflow: 'visible', width: '100%', height: '100%' }}
                    viewBox="0 0 376 778"
                    preserveAspectRatio="xMidYMid meet"
                    fill="none"
                  >
                    <circle cx="186" cy="83" r="20" stroke="#50DD50" strokeWidth="2.5"/>
                    <line x1="188" y1="103" x2="188" y2="165" stroke="#50DD50" strokeWidth="1.5"/>
                    <line x1="188" y1="165" x2="-55" y2="165" stroke="#50DD50" strokeWidth="1.5"/>
                    <text x="-145" y="158" fill="#50DD50" fontSize="18" fontFamily="sans-serif">preview</text>
                    <text x="-145" y="180" fill="#50DD50" fontSize="18" fontFamily="sans-serif">function</text>
                  </svg>
                </div>
              </div>
              {/* Right — dither_2 */}
              <div className="w-full max-w-[340px]">
                <p className="text-center text-sm text-neutral-400 mb-2">Preview ON</p>
                <img src="/mosaic-dither-2.png" alt="Mosaic preview — dithered" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </FadeIn>




        {/* UI Development */}
        <FadeIn>
          <div id="ui-development" className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">UI Development</h2>
            <p className="text-base text-neutral-300 leading-6 mb-10">
              With the low-fidelity structure validated, I moved into high-fidelity UI development — translating wireframes into a polished visual system built for the constraints of E-ink hardware. Every interface element was designed to feel native and intuitive: a dark-mode-first aesthetic that mirrors the E-ink display, a clear navigation hierarchy between Stock Library and My Collection, and a category filter system that lets users quickly narrow down content. The result is a UI that feels familiar from day one, lowering the barrier to personalization.
            </p>
            <div className="w-full bg-neutral-700 rounded-[24px] p-10">
              <img
                src="/mosaic-ui-development.png"
                alt="Mosaic UI Development screens"
                className="w-full h-auto"
              />
            </div>
          </div>
        </FadeIn>

        {/* Product Features */}
        <FadeIn>
          <div id="product-features" className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">Product Features</h2>

            <div className="space-y-32">
              {[
                {
                  label: 'Pairing',
                  image: '/mosaic-pairing.png',
                  image2: undefined,
                  imageClass: 'w-[85%] mx-auto',
                  blocks: [
                    { title: 'Pairing', body: 'I designed an omnipresent pairing system. Users can seamlessly connect the case the moment they snap it on, navigate through settings, or initiate the handshake right before casting their first image. The technology adapts to their natural workflow, completely eliminating setup fatigue.' },
                  ],
                },
                {
                  label: 'Stock Photo Library',
                  image: '/mosaic-stock-library.png',
                  image2: '/mosaic-my-collection.png',
                  imageClass: '',
                  blocks: [
                    { title: 'Stock Photo Library', body: 'A curated stock photo library allows users to easily browse and swap images within collections.' },
                    { title: 'My Collection', body: 'My Collection tab lets users see a library of previously created images or collages.' },
                  ],
                },
                {
                  label: 'Features',
                  image: '/mosaic-features.png',
                  image2: undefined,
                  imageClass: 'w-full',
                  blocks: [
                    { title: 'Features', body: 'Photo editing features and other features like filters and stickers were created for customization.' },
                  ],
                },
              ].map(({ label, image, image2, imageClass, blocks }, i) => (
                <div key={label} className={`flex flex-col-reverse md:flex-row gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-[40%] md:shrink-0 space-y-8">
                    {blocks.map(({ title, body }) => (
                      <div key={title}>
                        <h3 className="text-xl font-bold tracking-tight mb-4 text-white">{title}</h3>
                        <p className="text-base text-neutral-300 leading-6">{body}</p>
                      </div>
                    ))}
                  </div>
                  <div className="w-full md:w-[60%] md:shrink-0">
                    {image
                      ? (
                        <div className={image2 ? 'flex gap-4 items-start' : ''}>
                          <img src={image} alt={label} className={`h-auto object-contain ${image2 ? 'w-1/2' : imageClass || 'w-full'}`} />
                          {image2 && <img src={image2} alt={label + ' 2'} className="w-1/2 h-auto object-contain" />}
                        </div>
                      )
                      : <Placeholder aspect="aspect-[3/4]" label={label} />
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>


        {/* Outcome & Impact */}
        <FadeIn>
          <div id="impact" className="mb-[200px]">
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
      <ScrollToTop />
      <Footer />
    </main>
  )
}
