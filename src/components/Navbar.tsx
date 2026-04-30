import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const navLinks = [
    {
      name: 'Projects',
      href: '#projects',
    },
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ]

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      localStorage.theme = 'dark'
    } else {
      localStorage.theme = 'light'
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-serif font-bold text-textDark dark:text-white tracking-tight"
        >
          Portfolio<span className="text-lavender"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-textGray dark:text-gray-300 hover:text-textDark dark:hover:text-white transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="p-2 cursor-pointer text-textGray dark:text-gray-300 hover:text-textDark dark:hover:text-white transition-colors" aria-label="Toggle Theme">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={toggleTheme} className="p-2 text-textDark dark:text-white transition-colors" aria-label="Toggle Theme">
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            className="p-2 text-textDark dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
          className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-soft-lg py-4 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              className="text-textGray dark:text-gray-300 hover:text-textDark dark:hover:text-white font-medium py-2"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
