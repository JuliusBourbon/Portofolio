import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function CustomScrollbar() {
  const [activeSection, setActiveSection] = useState('home')
  const { scrollYProgress } = useScroll()
  
  // Membuat animasi scroll progress lebih mulus
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      // Trigger akan aktif ketika section menyentuh bagian tengah layar
      { rootMargin: '-40% 0px -40% 0px' }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6 py-4">
      {/* Track Background */}
      <div className="absolute top-4 bottom-4 right-2.75 w-0.5 bg-gray-500 rounded-full" />

      {/* Progress Line */}
      <motion.div
        className="absolute top-4 bottom-4 right-2.75 w-0.5 bg-textDark rounded-full origin-top"
        style={{ scaleY }}
      />

      {/* Dots Indicator */}
      {sections.map((section) => (
        <div
          key={section.id}
          className="relative group flex items-center justify-center w-6 h-6 cursor-pointer z-10"
          onClick={() => scrollTo(section.id)}
        >
          {/* Tooltip Label */}
          <span className="absolute right-8 px-2.5 py-1 rounded-md bg-textDark text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 shadow-sm whitespace-nowrap pointer-events-none">
            {section.label}
          </span>

          {/* Dot */}
          <div
            className={`rounded-full transition-all duration-300 border-2 border-white shadow-sm ${
              activeSection === section.id
                ? 'w-4 h-4 bg-textDark'
                : 'w-2.5 h-2.5 bg-gray-900 hover:bg-lavender hover:scale-125'
            }`}
          />
        </div>
      ))}
    </div>
  )
}