// Callout diagram — air fryer UI annotated
// Image: 400×400px source, displayed at 480×480 in SVG (x:460–940, y:30–510)
// Button % positions estimated from pixel layout of main screen.png

export default function AirFryerCallout() {
  const ln = { stroke: 'white' as const, strokeWidth: 0.8, opacity: 0.55 }
  const tx = { fill: 'white' as const, fontSize: 17, fontFamily: 'inherit', opacity: 0.8 }

  return (
    <svg viewBox="0 0 1400 660" width="100%" xmlns="http://www.w3.org/2000/svg">

      {/* ── Rendering ── */}
      <image href="/airfryer-main-screen.png" x="460" y="30" width="480" height="480" />

      {/* ── LEFT: display panel ── */}
      <line x1="498" y1="168" x2="382" y2="168" {...ln} />
      <text x="372" y="173" textAnchor="end" {...tx}>display panel</text>

      {/* ── LEFT: time sensitive temperature & time buttons (bracket) ── */}
      <rect x="500" y="268" width="175" height="195"
        fill="none" stroke="white" strokeWidth={0.8} opacity={0.4} rx={4} />
      <line x1="500" y1="349" x2="382" y2="349" {...ln} />
      <text textAnchor="end" {...tx}>
        <tspan x="372" y="334">time sensitive</tspan>
        <tspan x="372" dy="18">temperature &amp;</tspan>
        <tspan x="372" dy="18">time buttons</tspan>
      </text>

      {/* ── RIGHT: ON/OFF button ── */}
      <line x1="902" y1="163" x2="975" y2="163" {...ln} />
      <text x="985" y="168" textAnchor="start" {...tx}>ON/OFF button</text>

      {/* ── BOTTOM: REHEAT button (center x ≈ 64% of image) ── */}
      <line x1="745" y1="428" x2="745" y2="547" {...ln} />
      <text x="745" y="567" textAnchor="middle" {...tx}>REHEAT button</text>

      {/* ── BOTTOM: START/PAUSE button (center x ≈ 81% of image) ── */}
      {/* staggered lower to prevent overlap with REHEAT label */}
      <line x1="849" y1="428" x2="849" y2="610" {...ln} />
      <text x="849" y="630" textAnchor="middle" {...tx}>START/PAUSE button</text>

    </svg>
  )
}
