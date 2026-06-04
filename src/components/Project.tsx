import { useState, useEffect } from 'react'
import { projects, type ProjectsItem } from '../utils/Projects.tsx'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectsItem | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 768
  )

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const limit = isMobile ? 3 : 6
  const visibleProjects = isExpanded ? projects : projects.slice(0, limit)

  return (
    <>
      <section
        id="projects"
        className="py-24 px-6 bg-[#FFF9F0] dark:bg-[#1a1a1a] border-t-3 border-black font-mono"
      >
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="inline-block border-2 text-black border-black bg-[#FFE135] px-3 py-1 text-[11px] font-black uppercase tracking-widest shadow-[2px_2px_0_#000] mb-4">
                My Work
              </span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-black dark:text-white">
                Selected<br />
                <span className="inline-block bg-[#FF3F3F] text-white px-2 -rotate-1">Work.</span>
              </h2>
            </div>
            <p className="font-sans text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs md:text-right">
              A collection of recent projects ranging from web apps to mobile experiences.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l-3 border-t-3 border-black">
            {visibleProjects.map((project, i) => (
              <div
                key={project.id}
                className="border-r-3 border-b-3 border-black flex flex-col group bg-white dark:bg-[#111] hover:bg-[#FFF9F0] dark:hover:bg-[#1f1f1f] transition-colors duration-150"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden border-b-3 border-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Index badge */}
                  <span className="absolute top-3 left-3 bg-black text-white text-[10px] font-black px-2 py-1 uppercase tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-left mb-2"
                  >
                    <h3 className="text-lg font-black text-black dark:text-white uppercase tracking-tight hover:underline underline-offset-4 decoration-[#FF3F3F] decoration-2">
                      {project.title}
                    </h3>
                  </button>

                  <p className="font-sans text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.detail.stack.slice(0, 3).map((tag) => (
                      <span
                        key={tag.name}
                        className="border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase shadow-[1px_1px_0_#000] bg-white dark:bg-[#222] text-black dark:text-white"
                      >
                        {tag.name}
                      </span>
                    ))}
                    {project.detail.stack.length > 3 && (
                      <span className="border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase shadow-[1px_1px_0_#000] bg-[#FFE135] text-black">
                        +{project.detail.stack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="self-start border-2 border-black bg-black text-white text-[11px] font-black uppercase tracking-widest px-4 py-2 shadow-[2px_2px_0_#555] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_#555] active:translate-x-px active:translate-y-px active:shadow-none transition-all cursor-pointer"
                  >
                    View Detail →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Show more/less */}
          {projects.length > limit && (
            <div className="mt-0 border-l-3 border-r-3 border-b-3 border-black flex justify-center py-6 bg-white dark:bg-[#111]">
              <button
                onClick={() => setIsExpanded(e => !e)}
                className="border-3 border-black bg-[#FFE135] text-black font-black text-xs uppercase tracking-widest px-8 py-3 shadow-[4px_4px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_#000] transition-all cursor-pointer"
              >
                {isExpanded ? '↑ Show Less' : '↓ Show More'}
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  )
}