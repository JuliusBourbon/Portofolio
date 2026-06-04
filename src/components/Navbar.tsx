import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const NAV_LINKS = [
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() =>
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = !isDarkMode
    setIsDarkMode(next)
    localStorage.theme = next ? 'dark' : 'light'
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 font-mono transition-all duration-150 border-b-3 border-black
        ${isScrolled
          ? 'bg-[#FFF9F0] dark:bg-[#1a1a1a] shadow-[0_3px_0_#000]'
          : 'bg-[#FFF9F0] dark:bg-[#1a1a1a]'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="inline-block bg-[#FF3F3F] text-white border-2 border-black px-2 py-0.5 text-sm font-black shadow-[2px_2px_0_#000] group-hover:-translate-x-px group-hover:-translate-y-px group-hover:shadow-[3px_3px_0_#000] transition-all">
            JULIUS WORKSPACE
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-xs font-black uppercase tracking-widest text-black dark:text-white border-2 border-transparent hover:border-black hover:bg-[#FFE135] dark:hover:bg-[#FFE135] dark:hover:text-black hover:shadow-[2px_2px_0_#000] transition-all"
            >
              {link.name}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-3 p-2 border-2 border-black bg-white dark:bg-[#2a2a2a] text-black dark:text-white shadow-[2px_2px_0_#000] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_#000] active:translate-x-px active:translate-y-px active:shadow-[1px_1px_0_#000] transition-all cursor-pointer"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 border-2 border-black bg-white dark:bg-[#2a2a2a] text-black dark:text-white shadow-[2px_2px_0_#000] transition-all cursor-pointer"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label="Toggle menu"
            className="p-2 border-2 border-black bg-[#FFE135] text-black shadow-[2px_2px_0_#000] transition-all cursor-pointer"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="border-t-3 border-black bg-[#FFF9F0] dark:bg-[#1a1a1a] flex flex-col md:hidden">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-6 py-4 text-xs font-black uppercase tracking-widest text-black dark:text-white hover:bg-[#FFE135] dark:hover:bg-[#FFE135] dark:hover:text-black transition-colors
                ${i < NAV_LINKS.length - 1 ? 'border-b-2 border-black' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}