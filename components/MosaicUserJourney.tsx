import type { ReactNode } from 'react'

const stages = [
  {
    name: 'DISCOVER',
    touchpoints: [
      'Sees Mosaic case in the store — a display featuring the case and a "try me" model',
      'Sees Mosaic ad online',
    ],
    emotion: 'Curious & excited 🙂',
    quotes: ['This would be so cute with Teddy!', 'Now I can show off my recent vacation photos'],
  },
  {
    name: 'ACQUIRE',
    touchpoints: [
      'She buys it and opens the packaging',
      'She downloads the Mosaic app',
    ],
    emotion: 'Cautious (tech concern) 🤔',
    quotes: [
      "Hope this isn't complicated…",
      'Do I really have to download an app for a phone case?',
    ],
  },
  {
    name: 'ASSIMILATE',
    touchpoints: [
      'She pairs the case to the phone',
      'She chooses a photo and tries sending it to the case',
      'She takes a look at the image editing features',
    ],
    emotion: 'Delighted, validated 😄',
    quotes: [
      "I'll try putting up Teddy's photo first",
      "I'll try a quick photo edit",
    ],
  },
  {
    name: 'ACCELERATE',
    touchpoints: [
      'She frequently updates the case screen',
      'She creates several layouts with her favorite photos using photo editing features such as templates, stickers and texts',
    ],
    emotion: 'Empowered, proud 😍',
    quotes: [
      "I can't wait to swap out the looks whenever I take new pictures!",
    ],
  },
]

function ChevronBox({ label, first = false }: { label: string; first?: boolean }) {
  return (
    <div className="relative h-16 flex-1">
      <svg viewBox="0 0 200 64" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <polygon
          points={first ? "2,2 184,2 198,32 184,62 2,62" : "2,2 184,2 198,32 184,62 2,62 16,32"}
          fill="none"
          stroke="#50DD50"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-wider">{label}</span>
      </div>
    </div>
  )
}

const LABEL_W = 90

// Shared row wrapper — no gap between stage columns so SVG dividers align perfectly
function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex border-t border-neutral-700">
      <div style={{ width: LABEL_W }} className="shrink-0 pr-4 flex items-center">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 leading-tight">
          {label.split(' ').map((w, i) => <span key={i} className="block">{w}</span>)}
        </p>
      </div>
      <div className="flex flex-1">
        {children}
      </div>
    </div>
  )
}

function Cell({ children, first = false }: { children: ReactNode; first?: boolean }) {
  return (
    <div className={`flex-1 py-5 px-4 ${!first ? 'border-l border-neutral-700' : ''}`}>
      {children}
    </div>
  )
}

export default function MosaicUserJourney() {
  return (
    <div className="bg-neutral-800 rounded-[24px] p-10 w-full overflow-x-auto">
      <div style={{ minWidth: 640 }}>

        {/* Stage headers */}
        <div className="flex mb-0">
          <div style={{ width: LABEL_W }} className="shrink-0 flex items-center">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500">Stages</p>
          </div>
          <div className="flex flex-1 items-center gap-3">
            {stages.map((s, i) => (
              <ChevronBox key={s.name} label={s.name} first={i === 0} />
            ))}
          </div>
        </div>

        {/* High-level touchpoints */}
        <Row label="High-level touchpoints">
          {stages.map((s, i) => (
            <Cell key={s.name} first={i === 0}>
              <ul className="space-y-2">
                {s.touchpoints.map((t) => (
                  <li key={t} className="text-sm text-neutral-300 leading-relaxed">{t}</li>
                ))}
              </ul>
            </Cell>
          ))}
        </Row>

        {/* User emotional journey */}
        <Row label="User emotional journey">
          {stages.map((s, i) => (
            <Cell key={s.name} first={i === 0}>
              <p className="text-sm text-neutral-300">{s.emotion}</p>
            </Cell>
          ))}
        </Row>

        {/* Example quotes */}
        <Row label="Example quotes">
          {stages.map((s, i) => (
            <Cell key={s.name} first={i === 0}>
              <div className="space-y-2">
                {s.quotes.map((q) => (
                  <p key={q} className="text-sm text-neutral-400 leading-relaxed">{q}</p>
                ))}
              </div>
            </Cell>
          ))}
        </Row>

        {/* Emotional curve — SVG spans all 4 columns, dividers at 25/50/75% */}
        <div className="flex border-t border-neutral-700">
          <div style={{ width: LABEL_W }} className="shrink-0 pr-4 flex items-center">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 leading-tight">
              <span className="block">Emotional</span>
              <span className="block">Curve</span>
            </p>
          </div>
          <div className="flex-1">
            {/* viewBox 0 0 800 100 — each column = 200 units wide, matches actual aspect */}
            <svg viewBox="0 0 800 100" className="w-full" style={{ height: 120 }} preserveAspectRatio="none">

              {/* Vertical column dividers at 200, 400, 600 */}
              <line x1="200" y1="0" x2="200" y2="100" stroke="#525252" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="400" y1="0" x2="400" y2="100" stroke="#525252" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="600" y1="0" x2="600" y2="100" stroke="#525252" strokeWidth="1" vectorEffect="non-scaling-stroke" />

              {/* positive / negative labels in DISCOVER column */}
              <text x="10" y="14" fill="#a3a3a3" fontSize="8" fontFamily="Inter, sans-serif">positive</text>
              <text x="10" y="94" fill="#a3a3a3" fontSize="8" fontFamily="Inter, sans-serif">negative</text>

              {/* Filled "ribbon" between curve and midline (y=55) */}
              <path
                d="M 0,55
                   C 30,55 60,32 100,32
                   C 140,32 170,55 200,55
                   C 230,55 270,78 300,78
                   C 330,78 370,55 400,55
                   C 430,55 470,42 500,42
                   C 530,42 570,50 600,50
                   C 640,35 720,15 800,12
                   L 800,55
                   L 0,55
                   Z"
                fill="#50DD50"
                fillOpacity="0.28"
              />

              {/* Emotional curve line */}
              <path
                d="M 0,55
                   C 30,55 60,32 100,32
                   C 140,32 170,55 200,55
                   C 230,55 270,78 300,78
                   C 330,78 370,55 400,55
                   C 430,55 470,42 500,42
                   C 530,42 570,50 600,50
                   C 640,35 720,15 800,12"
                fill="none"
                stroke="#50DD50"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>

      </div>
    </div>
  )
}
