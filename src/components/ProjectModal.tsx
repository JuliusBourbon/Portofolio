import { useState, useEffect, useRef } from 'react'
import { ExternalLink, X, ArrowLeft, ArrowRight, Clock, Calendar, User } from 'lucide-react'
import { type ProjectsItem } from '../utils/Projects.tsx'

export default function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectsItem
  onClose: () => void
}) {
  const [activeImage, setActiveImage] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const prevImage = () =>
    setActiveImage(i => (i - 1 + project.detail.gallery.length) % project.detail.gallery.length)
  const nextImage = () =>
    setActiveImage(i => (i + 1) % project.detail.gallery.length)

  const stackByCategory = project.detail.stack.reduce<Record<string, string[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item.name)
    return acc
  }, {})

  const meta = [
    { icon: User, label: 'Role', value: project.detail.role },
    { icon: Calendar, label: 'Year', value: project.detail.year },
    { icon: Clock, label: 'Duration', value: project.detail.duration },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 font-mono">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 bg-[#FFF9F0] dark:bg-[#1a1a1a] border-3 border-black shadow-[8px_8px_0_#000] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-30 p-1.5 border-2 border-black bg-[#FF3F3F] text-white shadow-[2px_2px_0_#000] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_#000] active:translate-x-px active:translate-y-px transition-all cursor-pointer"
        >
          <X size={16} />
        </button>

        {/* Scrollable body */}
        <div
          ref={containerRef}
          className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:bg-black"
        >
          {/* Gallery */}
          <div className="relative aspect-video bg-black overflow-hidden border-b-3 border-black">
            <img
              key={activeImage}
              src={project.detail.gallery[activeImage]}
              alt={`${project.title} screenshot ${activeImage + 1}`}
              className="w-full h-full object-cover"
            />

            {project.detail.gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 border-2 border-black bg-white text-black shadow-[2px_2px_0_#000] hover:bg-[#FFE135] transition-colors cursor-pointer"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 border-2 border-black bg-white text-black shadow-[2px_2px_0_#000] hover:bg-[#FFE135] transition-colors cursor-pointer"
                >
                  <ArrowRight size={16} />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.detail.gallery.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`h-2 border border-black transition-all duration-200 cursor-pointer
                        ${i === activeImage ? 'w-6 bg-[#FFE135]' : 'w-2 bg-white hover:bg-[#FFE135]/60'}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Image counter */}
            <span className="absolute top-4 left-4 bg-black text-white text-[10px] font-black px-2 py-1 uppercase tracking-widest">
              {activeImage + 1} / {project.detail.gallery.length}
            </span>
          </div>

          <div className="p-8 md:p-10">
            {/* Title + links */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8 pb-6 border-b-3 border-black">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black dark:text-white leading-tight">
                {project.title}
              </h2>
              <div className="flex gap-2 shrink-0">
                {project.detail.githubUrl !== '#' && (
                  <a
                    href={project.detail.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-black bg-white dark:bg-[#222] text-black dark:text-white text-[11px] font-black uppercase px-4 py-2 shadow-[2px_2px_0_#000] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_#000] transition-all"
                  >
                    <ExternalLink size={13} /> GitHub
                  </a>
                )}
                {project.detail.liveUrl !== '#' && (
                  <a
                    href={project.detail.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-black bg-[#FF3F3F] text-white text-[11px] font-black uppercase px-4 py-2 shadow-[2px_2px_0_#000] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_#000] transition-all"
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Meta bar */}
            <div className="grid grid-cols-3 border-2 border-black mb-8 bg-white dark:bg-[#111]">
              {meta.map(({ icon: Icon, label, value }, i) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 px-5 py-4 ${i < meta.length - 1 ? 'border-r-2 border-black' : ''}`}
                >
                  <Icon size={16} className="text-[#FF3F3F] shrink-0" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">{label}</p>
                    <p className="text-sm font-black text-black dark:text-white leading-tight">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3 space-y-8">
                <div>
                  <h3 className="text-[11px] font-black uppercase tracking-widest text-black dark:text-white border-l-4 border-[#FF3F3F] pl-3 mb-3">
                    Overview
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {project.detail.overview}
                  </p>
                </div>

                <div>
                  <h3 className="text-[11px] font-black uppercase tracking-widest text-black dark:text-white border-l-4 border-[#FF3F3F] pl-3 mb-4">
                    Key Highlights
                  </h3>
                  <ul className="space-y-2">
                    {project.detail.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 font-sans text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        <span className="mt-1.5 w-2 h-2 border-2 border-black bg-[#FFE135] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-[11px] font-black uppercase tracking-widest text-black dark:text-white border-l-4 border-[#FF3F3F] pl-3 mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-col gap-4">
                  {Object.entries(stackByCategory).map(([category, names]) => (
                    <div key={category}>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">{category}</p>
                      <div className="flex flex-wrap gap-2">
                        {names.map(name => (
                          <span
                            key={name}
                            className="border-2 border-black bg-white dark:bg-[#222] text-black dark:text-white text-[11px] font-black uppercase px-3 py-1 shadow-[1px_1px_0_#000]"
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
      </div>
    </div>
  )
}