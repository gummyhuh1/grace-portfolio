function ShieldCheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5l7 3v5.5c0 5-3 8.5-7 10c-4-1.5-7-5-7-10V5.5l7-3z" />
      <polyline points="8.5 12 11 14.5 15.5 9.5" />
    </svg>
  )
}

function ClusterStackIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="4.5" rx="1" />
      <rect x="4" y="10" width="16" height="4.5" rx="1" />
      <rect x="4" y="16" width="16" height="4.5" rx="1" />
      <circle cx="7" cy="6.25" r="0.6" fill="white" stroke="none" />
      <circle cx="7" cy="12.25" r="0.6" fill="white" stroke="none" />
      <circle cx="7" cy="18.25" r="0.6" fill="white" stroke="none" />
    </svg>
  )
}

const personas = [
  {
    key: 'compliance',
    eyebrow: 'Defines Policy',
    role: 'Compliance Officer',
    personaName: 'Futuristic Freya',
    description: 'Compliance/security-policy officer who enforces company security policy org-wide.',
    Icon: ShieldCheckIcon,
  },
  {
    key: 'engineer',
    eyebrow: 'Executes Policy',
    role: 'Platform Engineer',
    personaName: null,
    description: 'Operates and secures Vault across the enterprise.',
    relationship: 'Also acts on behalf of the Compliance Officer.',
    Icon: ClusterStackIcon,
  },
]

export default function UserPersonas() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {personas.map(({ key, eyebrow, role, personaName, description, relationship, Icon }) => (
        <div key={key} className="bg-[#f4f4f4] border-t-4 border-[#0f62fe] px-8 py-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#0f62fe] flex items-center justify-center shrink-0">
              <Icon />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32px] text-[#0f62fe] mb-1">
                {eyebrow}
              </p>
              <p className="text-lg font-semibold text-[#161616] leading-tight">{role}</p>
              {personaName && (
                <p className="text-sm italic text-[#6f6f6f] mt-0.5">Persona: &ldquo;{personaName}&rdquo;</p>
              )}
            </div>
          </div>

          <p className="text-[17.3px] leading-[1.5] text-[#525252]">{description}</p>

          {relationship && (
            <div className="mt-5 pt-5 border-t border-[#e0e0e0] flex items-start gap-2">
              <span className="text-[#0f62fe] text-sm leading-[1.5]">↳</span>
              <p className="text-sm leading-[1.5] text-[#525252]">{relationship}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
