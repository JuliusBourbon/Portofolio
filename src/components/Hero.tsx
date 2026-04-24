import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import profile_image from '../assets/hhe.jpeg'
import { TechStack } from '../utils/TechStack.tsx';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 px-6 flex items-center relative overflow-hidden"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-lavender/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 -right-20 w-96 h-96 bg-peach/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
          className="flex flex-col items-start"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-textDark leading-[1.1] mb-6">
            Hi, I'm <br />
            <span className="relative inline-block">
              Raihan Fathir Muhammad
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-lavender"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                />
              </svg>
            </span>
          </h1>

          <h2 className="text-xl md:text-3xl text-textGray mb-6 font-medium">
            Fullstack Developer
          </h2>

          <p className="text-lg text-textGray mb-8 max-w-lg leading-relaxed">
            I am an Informatics Engineering student at <b>Universitas Komputer Indonesia</b> with a strong passion for Web Development, Software Engineering and Data Analytics. I am a proactive individual who consistently stays updated with the latest technological advancements and trends.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {TechStack.map((tech, index) => (
              <motion.span
                key={tech.name}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.4 + index * 0.1,
                }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium ${tech.color} ${tech.textColor}`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-lavender text-textDark font-medium rounded-full hover:bg-lavender/90 transition-all hover:shadow-soft-lg hover:-translate-y-1"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-textDark/10 text-textDark font-medium rounded-full hover:border-textDark/30 transition-all hover:shadow-soft hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: 'easeOut',
          }}
          className="relative mx-auto lg:ml-auto w-full max-w-md"
        >
          <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-soft-lg z-10">
            <img
              src={profile_image}
              alt="Image Portrait"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements behind image */}
          <div className="absolute -inset-4 bg-linear-to-tr from-lavender/40 to-peach/40 rounded-3xl -z-10 transform rotate-3"></div>
          <div className="absolute -inset-4 bg-white rounded-3xl -z-20 transform -rotate-2 shadow-soft"></div>
        </motion.div>
      </div>
    </section>
  )
}
