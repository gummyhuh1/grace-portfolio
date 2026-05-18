export default function Container({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`max-w-[1440px] mx-auto px-8 md:px-20 lg:px-32 ${className}`}>
      {children}
    </div>
  )
}
