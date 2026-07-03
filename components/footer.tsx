"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const nav = [
    { href: "#about", label: "About" },
    { href: "#creator", label: "Creator" },
    { href: "#projects", label: "Projects" },
    { href: "#awards", label: "Awards" },
    { href: "#activities", label: "Activities" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 mb-8">
          <div>
            <p className="font-serif font-bold text-lg mb-1">김정민 · MIN_s_ing</p>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              심리학과 미디어, AI헬스케어를 바탕으로 사람에게 닿는 콘텐츠를 기획합니다.
            </p>
          </div>
          <nav aria-label="푸터 메뉴">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-1"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
          <p>&copy; {currentYear} 김정민. All rights reserved.</p>
          <p>Crafted with care</p>
        </div>
      </div>
    </footer>
  )
}
