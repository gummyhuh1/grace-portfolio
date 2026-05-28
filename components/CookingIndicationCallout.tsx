// GIF at 85% centered; callout extends left with overflow:visible, overlapping the text column

export default function CookingIndicationCallout() {
  return (
    <svg
      viewBox="0 0 423 428"
      width="85%"
      style={{ display: 'block', margin: '0 auto', overflow: 'visible' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* GIF at natural size */}
      <image href="/airfryer-cooking-indication.gif" x="0" y="0" width="423" height="428" />

      {/* Circle around blinking fan icon */}
      <circle cx="57" cy="155" r="22"
        fill="none" stroke="white" strokeWidth={1} opacity={0.7} />

      {/* Line extending left outside the SVG bounds */}
      <line x1="35" y1="155" x2="-20" y2="155"
        stroke="white" strokeWidth={0.8} opacity={0.55} />

      {/* Label — sits to the left of the image */}
      <text fill="white" fontSize={16} fontFamily="inherit" opacity={0.8} textAnchor="end">
        <tspan x="-25" y="149">active cooking</tspan>
        <tspan x="-25" dy="17">indication</tspan>
      </text>

    </svg>
  )
}
