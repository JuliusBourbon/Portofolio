import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { ExternalLink, X, ArrowLeft, ArrowRight, Clock, Calendar, User } from 'lucide-react'
import { type ProjectsItem } from '../utils/Projects.tsx'

export default function ProjectModal({
  project,
  onClose,
} : {
  project: ProjectsItem
  onClose: () => void
}) {
  const [activeImage, setActiveImage] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const prevImage = () =>
    setActiveImage((i) => (i - 1 + project.detail.gallery.length) % project.detail.gallery.length)
  const nextImage = () =>
    setActiveImage((i) => (i + 1) % project.detail.gallery.length)

  const stackByCategory = project.detail.stack.reduce<Record<string, string[]>>(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = []
      acc[item.category].push(item.name)
      return acc
    },
    {}
  )

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        <motion.div
      className="relative z-10 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        >
          <button
            onClick={onClose}
        className="absolute top-5 right-5 z-30 p-2 bg-white/90 dark:bg-gray-700/90 backdrop-blur rounded-full shadow-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            aria-label="Close"
          >
          <X size={20} className="text-gray-600 dark:text-gray-300" />
          </button>

        {/* Scrollable Area */}
        <div 
          ref={containerRef}
          className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
        <div className="relative aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden rounded-t-3xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={project.detail.gallery[activeImage]}
                alt={`${project.title} screenshot ${activeImage + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>

            {project.detail.gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-full shadow hover:bg-white dark:hover:bg-gray-700 transition-colors"
                >
                <ArrowLeft size={18} className="text-gray-700 dark:text-gray-300" />
                </button>
                <button
                  onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-full shadow hover:bg-white dark:hover:bg-gray-700 transition-colors"
                >
                <ArrowRight size={18} className="text-gray-700 dark:text-gray-300" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.detail.gallery.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === activeImage
                          ? 'bg-white w-5'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-textDark dark:text-white">
                  {project.title}
                </h2>
              </div>

              <div className="flex gap-3 shrink-0">
                {project.detail.githubUrl != '#' && (
                  <a
                    href={project.detail.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors hover:underline"
                  >
                    <ExternalLink size={20} />
                    GitHub Link
                  </a>
                )}
                {project.detail.liveUrl != '#' && (
                  <a
                    href={project.detail.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors hover:underline"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

          <div className="grid grid-cols-3 gap-4 p-5 bg-background dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 mb-8">
              <div className="flex items-center gap-2">
              <User size={16} className="text-gray-700 dark:text-gray-400 shrink-0" />
                <div>
                <p className="text-xs text-gray-700 dark:text-gray-400">Role</p>
                <p className="text-sm font-medium text-textDark dark:text-gray-200 leading-tight">{project.detail.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
              <Calendar size={16} className="text-gray-700 dark:text-gray-400 shrink-0" />
                <div>
                <p className="text-xs text-gray-700 dark:text-gray-400">Year</p>
                <p className="text-sm font-medium text-textDark dark:text-gray-200">{project.detail.year}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
              <Clock size={16} className="text-gray-700 dark:text-gray-400 shrink-0" />
                <div>
                <p className="text-xs text-gray-700 dark:text-gray-400">Duration</p>
                <p className="text-sm font-medium text-textDark dark:text-gray-200">{project.detail.duration}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3 space-y-8">
                <div>
                <h3 className="text-sm font-semibold text-black dark:text-white uppercase tracking-widest mb-3">
                    Overview
                  </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.detail.overview}
                  </p>
                </div>

                <div>
                <h3 className="text-sm font-semibold text-black dark:text-white uppercase tracking-widest mb-4">
                    Key Highlights
                  </h3>
                  <ul className="space-y-3">
                    {project.detail.highlights.map((h, i) => (
                    <li key={i} className="flex text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-textDark dark:bg-gray-300 shrink-0" />
                        • {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:col-span-2">
              <h3 className="text-sm font-semibold text-black dark:text-white uppercase tracking-widest mb-4">
                  Tech Stack
                </h3>
                <div className="flex gap-4 flex-wrap">
                  {Object.entries(stackByCategory).map(([category, names]) => (
                    <div key={category}>
                      <div className="flex flex-wrap gap-2">
                        {names.map((name) => (
                          <span
                            key={name}
                          className="px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-textDark dark:text-gray-200 text-xs font-medium rounded-lg shadow-sm"
                          >
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Scrollbar */}
        <div className="absolute right-2 top-20 bottom-6 w-1.5 bg-gray-300 rounded-full z-20 pointer-events-none overflow-hidden">
          <motion.div
          className="w-full bg-gray-500 dark:bg-gray-600 rounded-full origin-top"
            style={{ scaleY, height: '100%' }}
          />
        </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}