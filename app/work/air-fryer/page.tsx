import Container from '@/components/Container'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import ScrollToTop from '@/components/ScrollToTop'
import ImageLightbox from '@/components/ImageLightbox'
import AirFryerCallout from '@/components/AirFryerCallout'
import CookingIndicationCallout from '@/components/CookingIndicationCallout'
import ChildproofCallout from '@/components/ChildproofCallout'

export const metadata = {
  title: 'Air Fryer UI',
}

const Placeholder = ({ aspect = 'aspect-video', label = 'Image' }: { aspect?: string; label?: string }) => (
  <div className={`w-full ${aspect} bg-neutral-800 rounded-[24px] flex items-center justify-center text-neutral-600 text-sm tracking-widest uppercase`}>
    {label}
  </div>
)

export default function AirFryerPage() {
  return (
    <main className="pt-20 bg-neutral-900 min-h-screen">

      {/* Hero image — full-width white strip, bottom 10% cropped, rendered at 90% width */}
      <FadeIn>
        <div className="w-full bg-white py-6">
          <div className="max-w-[1440px] mx-auto px-8 md:px-20 lg:px-32">
            <div
              className="w-[90%] mx-auto overflow-hidden"
              style={{ aspectRatio: '2000 / 1648' }}
            >
              <img
                src="/airfryer-hero.jpg"
                alt="Nuwave air fryer with touchscreen interface"
                className="w-full h-full object-cover object-top block"
              />
            </div>
          </div>
        </div>
      </FadeIn>

      <Container>

        {/* Project title */}
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight text-white mt-14 mb-8">Air Fryer UI</h1>
        </FadeIn>

        {/* Project metadata */}
        <FadeIn>
          <div className="grid grid-cols-4 gap-10 mb-[200px]">
            {[
              { label: 'Role', value: ['Industrial Designer'] },
              { label: 'Collaborators', value: ['Mechanical Engineer', 'Project Engineer', 'Marketing Manager'] },
              { label: 'Company', value: ['Nuwave'] },
              { label: 'Duration', value: ['3 Months'] },
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
          <p className="text-4xl md:text-5xl lg:text-6xl font-thin leading-[1.25] tracking-tight text-white mb-16">
            Designing an <span className="font-semibold">intuitive</span> interface that ensures a <span className="font-semibold">seamless</span> and <span className="font-semibold">effortless</span> cooking experience
          </p>
        </FadeIn>

        {/* Full-width image below statement */}
        <FadeIn>
          <div className="mb-[200px]">
            <img
              src="/airfryer-cooking.jpg"
              alt="Women cooking together with an air fryer"
              className="w-full h-auto block rounded-[24px]"
            />
          </div>
        </FadeIn>

        {/* Overview */}
        <FadeIn>
          <div id="overview" className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">Overview</h2>
            <p className="text-base text-neutral-300 leading-6">
              The goal of this project was to design an intuitive and user-friendly air fryer control interface that ensures a seamless and effortless cooking experience. The interface was designed with accessibility and simplicity in mind, catering to busy households who need quick, reliable controls without a steep learning curve.
            </p>
          </div>
        </FadeIn>

        {/* User Research */}
        <FadeIn>
          <div id="user-research" className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">User Research</h2>
            <p className="text-base text-neutral-300 leading-6 mb-10">
              Demographic data drawn from customer registries revealed a clear picture of the primary air fryer user base, directly informing decisions around simplicity, safety, and family-friendly features.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { num: '68', label: 'Women' },
                { num: '57', label: 'Ages 30–50' },
                { num: '72', label: 'Has children' },
                { num: '65', label: 'Employed full or part-time' },
              ].map(({ num, label }) => (
                <div key={label} className="bg-neutral-800 rounded-[24px] px-8 pt-8 pb-12 text-center">
                  <p className="flex justify-center items-baseline tracking-tight mb-0 text-[#00BFFF]">
                    <span className="text-[1.9rem] opacity-0 select-none">%</span>
                    <span className="text-[5.85rem] font-thin">{num}</span>
                    <span className="text-[1.9rem]">%</span>
                  </p>
                  <p className="text-sm text-[#00BFFF] -mt-3">{label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-5">Key Findings</h3>
                <ul className="space-y-4">
                  {[
                    'Primary users are working parents aged 30–50 who prioritize convenience.',
                    'Most users skip instruction manuals — interfaces must be self-explanatory.',
                    'Childproof features are a strong safety priority for households with children.',
                    'Users want quick-start functionality without lengthy setup.',
                    'Simple, minimal controls reduce friction during meal preparation.',
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
                    'Intuitive, self-explanatory controls',
                    'Quick-start single-press interactions',
                    'Reheat functionality for convenience',
                    'Dual-button childproof lock',
                    'Clear cooking status indication',
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
          <div id="persona" className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">Persona</h2>
            <div className="bg-neutral-800 rounded-[24px] p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Photo + basic info */}
                <div className="flex flex-col gap-6">
                  <div className="w-full aspect-square rounded-[16px] overflow-hidden">
                    <img
                      src="/airfryer-persona.jpg"
                      alt="Mary Mangold"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Mary Mangold</h3>
                    <p className="text-sm text-neutral-400">Age 49 · Marketing Manager · Married, 2 children</p>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    {
                      label: 'About',
                      items: [
                        'Cooks daily with a focus on nutrition',
                        'Frequently purchases kitchen gadgets',
                        'Skips instruction manuals',
                        'Balances full-time work and family life',
                      ],
                    },
                    {
                      label: 'Goals',
                      items: [
                        'More quality family time',
                        'Meet personal fitness targets',
                        'Save time during meal prep',
                        'Reliable, easy-to-use kitchen tools',
                      ],
                    },
                    {
                      label: 'Device Preferences',
                      items: ['Desktop', 'Mobile', 'Social media'],
                    },
                    {
                      label: 'Needs',
                      items: [
                        'Quick-start functionality',
                        'Childproofing controls',
                        'Simple, clear navigation',
                      ],
                    },
                  ].map(({ label, items }) => (
                    <div key={label}>
                      <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">{label}</p>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-neutral-300 leading-relaxed">
                            <span className="text-neutral-600 mt-0.5">·</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Ideation */}
        <FadeIn>
          <div id="ideation" className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">Ideation</h2>
            <p className="text-base text-neutral-300 leading-6 mb-10">
              Early ideation focused on sketching the core interface layout and breaking down the screen into functional zones — controls, status indicators, and safety features.
            </p>
            <img
              src="/airfryer-ideation.jpg"
              alt="Air fryer UI sketches and user flow diagrams"
              className="w-full h-auto block rounded-[24px]"
            />
          </div>
        </FadeIn>

        {/* User Flow */}
        <FadeIn>
          <div id="user-flow" className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">User Flow</h2>
            <p className="text-base text-neutral-300 leading-6 mb-10">
              Mapping the user flow ensured every interaction — from powering on to completing a cook cycle — was logical and required minimal steps.
            </p>
            <ImageLightbox
              src="/airfryer-userflow.jpg"
              alt="Air fryer user flow diagram"
              className="w-full h-auto block rounded-[24px]"
            />
          </div>
        </FadeIn>

        {/* Interface Design */}
        <FadeIn>
          <div id="interface-design" className="mb-[200px]">
            <h2 className="text-2xl font-bold tracking-tight mb-10 text-white">Interface Design</h2>

            <div className="mb-16">
              <AirFryerCallout />
            </div>

            <div className="space-y-32">

              {/* Time & Temperature Controls — text above, two images side by side */}
              <div>
                <h3 className="text-xl font-bold tracking-tight mb-4 text-white">Time &amp; Temperature Controls</h3>
                <p className="text-base text-neutral-300 leading-6 mb-10">
                  Single-press interactions adjust time and temperature quickly. Continuous press enables rapid value changes, giving users fine control without navigating menus.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <img src="/airfryer-single-press.gif" alt="Single press interaction" className="w-[85%] h-auto block rounded-[24px] mx-auto" />
                    <p className="text-sm text-neutral-400 text-center mt-4 tracking-wide">Single Press</p>
                  </div>
                  <div>
                    <img src="/airfryer-continuous-press.gif" alt="Continuous press interaction" className="w-[85%] h-auto block rounded-[24px] mx-auto" />
                    <p className="text-sm text-neutral-400 text-center mt-4 tracking-wide">Continuous Press</p>
                  </div>
                </div>
              </div>

              {/* Cooking Indication — text left, image right */}
              <div className="grid grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-4 text-white">Cooking Indication</h3>
                  <p className="text-base text-neutral-300 leading-6">
                    Clear visual feedback communicates the current cooking state at a glance, reducing the need to monitor the appliance closely during use.
                  </p>
                </div>
                <CookingIndicationCallout />
              </div>

              {/* Reheat Function — text left, image right (same grid-cols-2 sizing) */}
              <div className="grid grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-4 text-white">Reheat Function</h3>
                  <p className="text-base text-neutral-300 leading-6">
                    A dedicated reheat button adds 5 minutes at 400°F with a single press — designed for the common use case of warming leftovers without manual input.
                  </p>
                </div>
                <img src="/airfryer-reheat.gif" alt="Reheat function" className="w-[85%] h-auto block rounded-[24px] mx-auto" />
              </div>

              {/* Childproof Lock — text left, image right */}
              <div className="grid grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-4 text-white">Childproof Lock</h3>
                  <p className="text-base text-neutral-300 leading-6">
                    A dual-button activation system prevents accidental operation by children, requiring a deliberate two-button press to engage or disengage the lock.
                  </p>
                </div>
                <ChildproofCallout />
              </div>

            </div>
          </div>
        </FadeIn>

        {/* Impact */}
        <FadeIn>
          <div id="impact" className="mb-[200px]">
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">Outcome</p>
            <h2 className="text-2xl font-bold tracking-tight mb-3 text-white">Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-neutral-800 rounded-[24px] p-10 text-center">
                <p className="text-[5.85rem] font-light tracking-tight mb-2 text-[#00BFFF]">1M+</p>
                <p className="text-sm text-[#00BFFF]">Units Sold</p>
              </div>
              <div className="bg-neutral-800 rounded-[24px] p-10 text-center">
                <p className="text-[2.25rem] font-normal tracking-tight mb-2 text-[#00BFFF]">Costco · Best Buy · Walmart</p>
                <p className="text-sm text-[#00BFFF]">Major Retailers</p>
              </div>
            </div>

            <p className="text-base text-neutral-300 leading-6 mb-4">
              The air fryer interface shipped to over 1 million units, with customers consistently praising how easy the controls are to use.
            </p>
            <p className="text-base text-neutral-300 leading-6">
              A recurring theme in customer reviews:{' '}
              <span className="text-white font-medium">&ldquo;Love the quick start and quick reheat functions.&rdquo;</span>
            </p>
          </div>
        </FadeIn>

      </Container>

      <ScrollToTop dark={true} />
      <Footer />
    </main>
  )
}
