import Image from 'next/image'
import FadeIn from './FadeIn'

const timelineEvents = [
  {
    src: 'https://static.wixstatic.com/media/2f5b7e_8c93d2436dcc4850aa9d848ca3ce2c57~mv2.png',
    caption: 'Born & raised in Korea',
    color: '#FCA5A5', // rose
  },
  {
    src: 'https://static.wixstatic.com/media/2f5b7e_ab40570e4cae42c680408ce2aebb977c~mv2.png',
    caption: 'Moved to Seattle in high school',
    color: '#FDBA74', // orange
  },
  {
    src: 'https://static.wixstatic.com/media/2f5b7e_e61cba91456040f9a24e4502c8163db0~mv2.png',
    caption: 'Moved to Chicago for college',
    color: '#FCD34D', // amber
  },
  {
    src: 'https://static.wixstatic.com/media/2f5b7e_b24bf9ca770f4eb0845627c561d06a4e~mv2.png',
    caption: 'Started working as an industrial designer',
    color: '#BEF264', // lime
  },
  {
    src: 'https://static.wixstatic.com/media/2f5b7e_8684d1248bad4c49a5b0610b06208fb0~mv2.png',
    caption: 'Transitioned to working as a graphic designer',
    color: '#6EE7B7', // emerald
  },
  {
    src: 'https://static.wixstatic.com/media/2f5b7e_be740c1240044a43bf020d3119c19918~mv2.png',
    caption: "Gained hands-on UX training at General Assembly's UX design bootcamp",
    color: '#67E8F9', // cyan
  },
  {
    src: 'https://static.wixstatic.com/media/2f5b7e_9d299ff3d61447b888545b1fef69fed0~mv2.png',
    caption: 'Created a YouTube channel for my dog',
    color: '#93C5FD', // blue
  },
  {
    src: 'https://static.wixstatic.com/media/2f5b7e_eaaf8f56a29c444db14294a246afddbf~mv2.png',
    caption: 'Launched my own brand on Amazon (FBA)',
    color: '#C4B5FD', // violet
  },
  {
    src: 'https://static.wixstatic.com/media/2f5b7e_89482a9d1be34afba8e7b1561a206f84~mv2.png',
    caption: 'Moved back to Seattle for the MS HCDE program at UW to develop into a product designer',
    color: '#F0ABFC', // fuchsia
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="pt-6 pb-32">

      {/* Mobile: stacked layout */}
      <div className="flex flex-col gap-10 md:hidden">
        <FadeIn>
          <div className="relative w-full aspect-square overflow-hidden rounded-[32px]">
            <Image
              src="/grace-photo.jpg"
              alt="Grace Huh"
              fill
              className="object-cover object-[55%_30%]"
              sizes="100vw"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-base leading-7 text-gray-600 mb-6">
            I&apos;m a multidisciplinary product designer who bridges industrial, visual, and UX
            design to craft compelling narratives. Currently completing my MS in HCDE at the
            University of Washington, my process is heavily driven by rapid prototyping. I design
            elegant, customer focused products turning complex research into clean, minimalist
            interfaces. I love building the logic and interactions that make digital experiences
            feel truly intuitive.
          </p>
          <p className="text-base leading-7 text-gray-600 mb-6">
            I thrive on collaboration. I love partnering with researchers, engineers, and PMs,
            and I strive to make the people around me better. I am here to create impactful
            change and help build meaningful digital experiences.
          </p>
          <p className="text-base leading-7 text-gray-600">
            When I&apos;m not designing, you&apos;ll likely find me hiking a new trail, hunting
            for the next great boba spot, or experimenting in the kitchen trying out a new recipe.
          </p>
        </FadeIn>
      </div>

      {/* Desktop: four-quadrant layout */}
      <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-0 min-h-[80vh]">
        {/* Top Left — photo */}
        <FadeIn className="h-full overflow-hidden">
          <div className="relative w-full h-full rounded-[32px] overflow-hidden">
            <Image
              src="/grace-photo.jpg"
              alt="Grace Huh"
              fill
              className="object-cover object-[55%_30%]"
              sizes="50vw"
            />
          </div>
        </FadeIn>

        {/* Top Right — empty */}
        <div />

        {/* Bottom Left — empty */}
        <div />

        {/* Bottom Right — bio */}
        <FadeIn delay={0.15} className="pl-4 pr-2 py-12 flex flex-col justify-center">
          <p className="text-base leading-8 text-gray-600 mb-6">
            I&apos;m a multidisciplinary product designer who bridges industrial, visual, and UX
            design to craft compelling narratives. Currently completing my MS in HCDE at the
            University of Washington, my process is heavily driven by rapid prototyping. I design
            elegant, customer focused products turning complex research into clean, minimalist
            interfaces. I love building the logic and interactions that make digital experiences
            feel truly intuitive.
          </p>
          <p className="text-base leading-8 text-gray-600 mb-6">
            I thrive on collaboration. I love partnering with researchers, engineers, and PMs,
            and I strive to make the people around me better. I am here to create impactful
            change and help build meaningful digital experiences.
          </p>
          <p className="text-base leading-8 text-gray-600">
            When I&apos;m not designing, you&apos;ll likely find me hiking a new trail, hunting
            for the next great boba spot, or experimenting in the kitchen trying out a new recipe.
          </p>
        </FadeIn>
      </div>

      {/* A Little More About Me — timeline */}
      <div className="mt-32 md:mt-40">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-3 text-center">
            A little more about me
          </h2>
          <p className="text-base leading-7 text-gray-500 mb-20 max-w-2xl text-center mx-auto">
            A few moments and milestones that have shaped who I am today.
          </p>
        </FadeIn>

        {/* Desktop — vertical timeline with center bar and alternating cards */}
        <div className="hidden md:block relative">
          {/* Center vertical gradient bar */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-3 rounded-full"
            style={{
              background: `linear-gradient(to bottom, ${timelineEvents
                .map((e) => e.color)
                .join(', ')})`,
            }}
          />

          <div className="relative flex flex-col -space-y-24">
            {timelineEvents.map((event, i) => {
              const isLeft = i % 2 === 0
              return (
                <FadeIn key={event.caption} delay={i * 0.05}>
                  <div className="relative grid grid-cols-2 items-center gap-12">
                    {/* Dot on the bar */}
                    <div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full z-10"
                      style={{
                        backgroundColor: event.color,
                        boxShadow: '0 0 0 5px white',
                      }}
                    />
                    {/* Dotted connector line from dot to card */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 h-0 z-0"
                      style={{
                        ...(isLeft
                          ? { right: 'calc(50% - 1px)', width: '150px' }
                          : { left: 'calc(50% - 1px)', width: '150px' }),
                        borderTopWidth: '2px',
                        borderTopStyle: 'dashed',
                        borderTopColor: event.color,
                      }}
                    />
                    {/* Card */}
                    <div
                      className={`flex flex-col ${
                        isLeft
                          ? 'col-start-1 items-center text-center pr-12'
                          : 'col-start-2 items-center text-center pl-12'
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={event.src}
                        alt={event.caption}
                        className={`w-[358px] object-contain ${i === 5 ? 'mb-[-10px]' : 'mb-[0px]'}`}
                      />
                      <p className="text-base text-gray-600 leading-6 max-w-[280px]">
                        {event.caption}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>

        {/* Mobile — vertical timeline with left bar */}
        <div className="md:hidden">
          <div className="relative pl-16">
            {/* Vertical gradient bar */}
            <div
              className="absolute left-3 top-3 bottom-3 w-2 rounded-full"
              style={{
                background: `linear-gradient(to bottom, ${timelineEvents
                  .map((e) => e.color)
                  .join(', ')})`,
              }}
            />
            <div className="flex flex-col -space-y-12">
              {timelineEvents.map((event, i) => (
                <FadeIn key={event.caption} delay={i * 0.05}>
                  <div className="relative flex flex-col items-start">
                    {/* Dot on the bar */}
                    <div
                      className="absolute -left-[52px] top-6 w-5 h-5 rounded-full"
                      style={{
                        backgroundColor: event.color,
                        boxShadow: '0 0 0 4px white',
                      }}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={event.src}
                      alt={event.caption}
                      className="w-56 object-contain mb-[10px]"
                    />
                    <p className="text-sm text-gray-600 leading-6">
                      {event.caption}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
