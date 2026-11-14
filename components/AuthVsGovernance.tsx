import Image from 'next/image'

const panels = [
  {
    key: 'auth',
    label: 'Authorization answers',
    question: 'Who can perform this action?',
    example: 'i.e. Can X have a 1024-bit encryption key?',
    src: '/ibm-auth.png',
    alt: 'Authorization answers who can perform an action — one user approved, others denied',
    ratio: 'aspect-[478/227]',
    maxW: 'max-w-xs',
  },
  {
    key: 'governance',
    label: 'Governance controls answer',
    question: 'Should anyone be allowed to perform this action?',
    example: 'i.e. Should anyone be allowed to have a 1024-bit encryption key in the system?',
    src: '/ibm-governance-box.png',
    alt: 'Governance controls box with cubes representing allowed configurations',
    ratio: 'aspect-square',
    maxW: 'max-w-[220px]',
  },
]

export default function AuthVsGovernance() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {panels.map(({ key, label, question, example, src, alt, ratio, maxW }) => (
        <div key={key} className="bg-[#f4f4f4] border-t-4 border-[#0f62fe] px-8 py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32px] text-[#0f62fe] mb-4">
            {label}
          </p>
          <p className="text-xl font-medium text-[#161616] mb-2">{question}</p>
          <p className="text-sm text-[#6f6f6f] mb-10">{example}</p>
          <div className={`relative w-full ${maxW} mx-auto ${ratio}`}>
            <Image src={src} alt={alt} fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      ))}
    </div>
  )
}
