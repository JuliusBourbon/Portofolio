import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, type ProjectsItem } from '../utils/Projects.tsx'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectsItem | null>(null)

  return (
    <>
      <section id="projects" className="py-24 px-6 bg-white dark:bg-gray-900 relative transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-textDark dark:text-white mb-4">
              Selected Work
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
              A collection of my recent projects, ranging from web applications to
              mobile experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-800 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-left group/title"
                  >
                    <h3 className="cursor-pointer text-xl font-serif font-bold text-textDark dark:text-white mb-2 group-hover/title:underline decoration-2 underline-offset-2 transition-all">
                      {project.title}
                    </h3>
                  </button>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">{project.description}</p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.detail.stack.slice(0,3).map((tag) => (
                        <span
                          key={tag.name}
                          className="px-3 py-1 bg-background dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600"
                        >
                          {tag.name}
                        </span>
                      ))}
                      {project.detail.stack.length > 3 && (
                        <span
                          className="px-3 py-1 bg-background dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600"
                        >
                          +{project.detail.stack.length - 3} more
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer shrink-0 ml-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline underline-offset-2 transition-colors"
                    >
                      View detail →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}