export default function Footer() {
  const links = [
    { label: 'Email', href: 'mailto:ehuh@uw.edu' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/grace-huh-80a3491a' },
  ]

  return (
    <footer className="bg-black">
      <div className="max-w-[1440px] mx-auto px-8 md:px-20 lg:px-32 pt-[50px] pb-[156px]">
        <div className="flex items-center gap-12">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-gray-400 text-base tracking-tight hover:text-white transition-colors duration-200"
            >
              {label} →
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
