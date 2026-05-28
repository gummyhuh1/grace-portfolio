// Childproof lock section: air fryer image with baby photo clipped to circle
// and callout circles on the two bottom down-arrow buttons

export default function ChildproofCallout() {
  const ln = { stroke: 'white' as const, strokeWidth: 0.8, opacity: 0.6 }

  return (
    <svg
      viewBox="0 0 520 480"
      width="100%"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="babyCircle">
          <circle cx="80" cy="95" r="85" />
        </clipPath>
      </defs>

      {/* Air fryer main screen */}
      <image href="/airfryer-main-screen.png" x="120" y="10" width="400" height="400" />

      {/* Baby photo clipped to circle — top-left corner of screen image */}
      <image
        href="/airfryer-baby.jpg"
        x="-35" y="-20"
        width="230" height="230"
        clipPath="url(#babyCircle)"
        preserveAspectRatio="xMidYMid slice"
      />
      {/* Subtle circle border */}
      <circle cx="80" cy="95" r="85"
        fill="none" stroke="white" strokeWidth={1} opacity={0.25} />

      {/* Circle callouts on the two bottom down-arrow buttons */}
      {/* Thermometer down arrow — shifted left to align with first arrow */}
      <circle cx="180" cy="338" r="18"
        fill="white" fillOpacity={0.15} stroke="white" strokeWidth={1} opacity={0.75} />
      {/* Clock down arrow */}
      <circle cx="264" cy="338" r="18"
        fill="white" fillOpacity={0.15} stroke="white" strokeWidth={1} opacity={0.75} />

      {/* Bracket: legs down, horizontal connector, single line to label */}
      <line x1="180" y1="356" x2="180" y2="374" {...ln} />
      <line x1="264" y1="356" x2="264" y2="374" {...ln} />
      <line x1="180" y1="374" x2="264" y2="374" {...ln} />
      <line x1="222" y1="374" x2="222" y2="416" {...ln} />

      {/* Label */}
      <text fill="white" fontSize={13} fontFamily="inherit" opacity={0.8} textAnchor="middle">
        <tspan x="222" y="434">pressing these two buttons</tspan>
        <tspan x="222" dy="18">simultaneously will activate the child proof lock</tspan>
      </text>
    </svg>
  )
}
