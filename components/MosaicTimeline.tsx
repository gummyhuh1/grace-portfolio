const COLS = 8
const pct = (n: number) => `${(n / COLS) * 100}%`

const TASK_H = 36
const ROW_GAP = 10
const rowTop = (r: number) => r * (TASK_H + ROW_GAP)
const TOTAL_ROWS = 7
const WEEK_OFFSET = 48
const TASK_AREA_H = TOTAL_ROWS * TASK_H + (TOTAL_ROWS - 1) * ROW_GAP + WEEK_OFFSET
const PAD = 3

const phases = [
  { label: 'Brainstorming', col: 0, span: 2 },
  { label: 'Design',        col: 2, span: 5 },
  { label: 'Delivery',      col: 7, span: 1 },
]

const tasks = [
  { label: 'Project Kickoff',    col: 0, span: 1, r: 0 },
  { label: 'Market Research',    col: 0, span: 2, r: 1 },
  { label: 'User Flows',         col: 1, span: 2, r: 2 },
  { label: 'Low Fidelity',       col: 2, span: 1, r: 3 },
  { label: 'High Fidelity',      col: 3, span: 3, r: 4 },
  { label: 'High Fidelity',      col: 5, span: 1, r: 5 },
  { label: 'Developer Handoff',  col: 6, span: 1, r: 5 },
  { label: 'Test Flight App V1', col: 5, span: 1, r: 6 },
  { label: 'Test Flight App V2', col: 6, span: 1, r: 6 },
  { label: 'Test Flight App V3', col: 7, span: 1, r: 6 },
]

const dashCols   = [1, 2, 5, 6]
const reviewCols = [3, 5, 6]
const weeks      = ['week 1', 'week 2', 'week 3', 'week 4', 'week 5', 'week 6', 'week 7', '']
const pitches    = [
  { label: 'Client A Pitch', pos: 5.5 },
  { label: 'Client B Pitch', pos: 7.1 },
]

export default function MosaicTimeline() {
  return (
    <div className="w-full overflow-x-auto rounded-[24px] bg-neutral-800 p-8">
      <div style={{ minWidth: 640 }}>

        {/* Phase headers */}
        <div className="relative h-11 mb-6">
          {phases.map(({ label, col, span }) => (
            <div
              key={label}
              className="absolute flex items-center justify-center bg-neutral-700 rounded-lg text-neutral-200 text-sm"
              style={{
                left:   `calc(${pct(col)} + 4px)`,
                width:  `calc(${pct(span)} - 8px)`,
                top:    0,
                bottom: 0,
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Task area */}
        <div className="relative" style={{ height: TASK_AREA_H }}>

          {/* Dashed vertical separator lines */}
          {dashCols.map(col => (
            <div
              key={col}
              className="absolute top-0 bottom-0 border-l border-dashed border-neutral-600"
              style={{ left: pct(col) }}
            />
          ))}

          {/* "Internal Review" labels — float in empty column space at row-1 height */}
          {reviewCols.map(col => (
            <div
              key={col}
              className="absolute text-[11px] text-neutral-400 leading-none"
              style={{ left: `calc(${pct(col)} + 6px)`, top: rowTop(1) + (TASK_H - 12) / 2 }}
            >
              Internal Review
            </div>
          ))}

          {/* Task bars */}
          {tasks.map(({ label, col, span, r }) => (
            <div
              key={`${label}-${r}-${col}`}
              className="absolute flex items-center justify-center bg-neutral-800 border border-neutral-500 rounded-lg text-neutral-300 text-[11px] text-center leading-tight px-1"
              style={{
                left:   `calc(${pct(col)} + ${PAD}px)`,
                width:  `calc(${pct(span)} - ${PAD * 2}px)`,
                top:    rowTop(r),
                height: TASK_H,
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Week labels — sit just below the task area / dashed lines stop above here */}
        <div className="relative h-7">
          {weeks.map((w, i) => (
            <span
              key={i}
              className="absolute text-[11px] text-neutral-500"
              style={{ left: pct(i) }}
            >
              {w}
            </span>
          ))}
        </div>

        {/* Client pitches */}
        <div className="relative h-10">
          {pitches.map(({ label, pos }) => (
            <div
              key={label}
              className="absolute flex flex-col items-center gap-1"
              style={{ left: pct(pos), transform: 'translateX(-50%)' }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
              <span className="text-[11px] text-neutral-400 whitespace-nowrap">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
