const stats = [
  { label: 'Study Type', value: 'Moderated, task-based usability test' },
  { label: 'Prototype', value: 'AI-generated Figma prototype' },
  { label: 'Participants', value: '5 Engineers, 1 Project Manager' },
  { label: 'Session Length', value: '45–60 minutes per session' },
]

const participants = [
  { id: 'P1', role: 'Solutions Engineer' },
  { id: 'P2', role: 'Software Engineer, Vault Crypto' },
  { id: 'P3', role: 'Product Manager, Vault ADP' },
  { id: 'P4', role: 'Software Engineer, Vault Current' },
  { id: 'P5', role: 'Software Engineer, Secrets team' },
  { id: 'P6', role: 'Tech Lead, Platform' },
]

export default function UsabilityStudyOverview() {
  return (
    <div className="bg-[#f4f4f4] border-t-4 border-[#0f62fe] p-8 md:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.32px] text-[#0f62fe] mb-6">Study Overview</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 mb-10">
        {stats.map(({ label, value }) => (
          <div key={label}>
            <p className="text-[13px] text-[#6f6f6f] uppercase tracking-widest mb-1.5">{label}</p>
            <p className="text-base font-medium text-[#161616] leading-snug">{value}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-[#e0e0e0] pt-8">
        <p className="text-[13px] text-[#6f6f6f] uppercase tracking-widest mb-4">Participants</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
          {participants.map(({ id, role }) => (
            <div key={id} className="flex items-baseline gap-3">
              <span className="text-sm font-semibold text-[#0f62fe] w-7 shrink-0">{id}</span>
              <span className="text-sm text-[#161616]">{role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
