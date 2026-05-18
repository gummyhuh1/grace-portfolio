const attributes = [
  { label: 'Age', value: '34' },
  { label: 'Occupation', value: 'Marketing Coordinator' },
  { label: 'Household', value: 'Lives with her husband and their 4-year-old golden retriever, "Teddy"' },
  { label: 'Tech Comfort', value: 'Confident using social media & photo apps but prefers straightforward interfaces' },
  { label: 'Shopping Behavior', value: 'Frequently shops at Walmart for convenience and affordability' },
  { label: 'Lifestyle', value: 'Expressive, trend-aware, values personalization and aesthetics' },
]

const SectionHeader = ({ children }: { children: string }) => (
  <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-neutral-400 mb-5">
    {children}
  </p>
)

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="text-sm text-neutral-300 leading-relaxed flex gap-2">
        <span className="text-neutral-500 shrink-0">·</span>{item}
      </li>
    ))}
  </ul>
)

export default function MosaicPersona() {
  return (
    <div className="flex w-full">

      {/* Profile column */}
      <div className="w-[320px] shrink-0 pr-10">
        <div className="w-[100px] h-[100px] rounded-full bg-neutral-700 mb-5 flex items-center justify-center text-neutral-500 text-[10px] tracking-widest uppercase overflow-hidden">
          Photo
        </div>
        <p className="text-white text-base mb-6">Emily Jones</p>
        <div className="space-y-3">
          {attributes.map(({ label, value }) => (
            <p key={label} className="text-sm text-neutral-300 leading-relaxed">
              <span className="font-bold text-white">{label}: </span>{value}
            </p>
          ))}
        </div>
      </div>

      {/* Vertical divider */}
      <div className="w-px bg-neutral-700 shrink-0" />

      {/* Content area */}
      <div className="flex-1 pl-10">

        {/* Top row: SCENARIO | BEHAVIORS | ASSUMPTIONS */}
        <div className="grid grid-cols-3 gap-10 pb-10">
          <div>
            <SectionHeader>Scenario</SectionHeader>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Emily just got a new phone and bought the Mosaic customizable E-ink case from Walmart.
              She wants to display a cute photo of her dog Teddy for the holiday season. She opens the
              Mosaic app expecting it to work like Instagram or Canva. She uploads a photo, adds a
              simple text overlay "Teddy". Ideally, she expects to do this in under 5 minutes.
            </p>
          </div>
          <div>
            <SectionHeader>Behaviors</SectionHeader>
            <Bullets items={[
              'She likes to share and show off her recent vacations to friends and coworkers',
              'Regularly refresh the look of her phone case to match her mood, outfit, or season.',
            ]} />
          </div>
          <div>
            <SectionHeader>Assumptions</SectionHeader>
            <Bullets items={[
              'She is willing to try a new tech product if it enhances her self-expression',
              'She prefers simplicity over customization depth',
              'She may abandon the experience if the setup process takes too long',
              'She values guidance: tooltips, and ready-to-use templates',
              'Likely to share and recommend the product on social media if positive',
            ]} />
          </div>
        </div>

        {/* Horizontal divider */}
        <div className="border-t border-neutral-700 mb-10" />

        {/* Bottom row: FRUSTRATIONS | GOALS | (empty) */}
        <div className="grid grid-cols-3 gap-10">
          <div>
            <SectionHeader>Frustrations</SectionHeader>
            <Bullets items={[
              'Gets overwhelmed when tech products are complex or require setup steps',
              'Finds traditional phone case buying limiting: only pre-designed looks',
            ]} />
          </div>
          <div>
            <SectionHeader>Goals</SectionHeader>
            <Bullets items={[
              'Show personality through digital and physical accessories',
            ]} />
          </div>
          <div />
        </div>

      </div>
    </div>
  )
}
