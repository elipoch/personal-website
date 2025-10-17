'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: '/about', label: 'ABOUT' },
    { href: '/contacts', label: 'CONTACT' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-palette-cream/90 backdrop-blur-sm border-b border-palette-soft-gray">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className={`text-lg font-mono font-normal transition-colors ${
            pathname === '/'
              ? 'text-palette-warm-brown underline decoration-1 underline-offset-4'
              : 'text-palette-warm-brown hover:text-palette-dark-brown'
          }`}>
            Eliza Pochinova
          </Link>
          <div className="flex items-center">
            {navItems.map((item, index) => (
              <div key={item.href} className="flex items-center">
                <Link
                  href={item.href}
                  className={`text-sm font-mono transition-colors px-6 py-2 ${
                    pathname === item.href
                      ? 'text-palette-warm-brown underline decoration-1 underline-offset-4'
                      : 'text-palette-soft-gray hover:text-palette-dark-brown'
                  }`}
                >
                  {item.label}
                </Link>
                {index < navItems.length - 1 && (
                  <div className="w-px h-6 bg-palette-soft-gray"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}