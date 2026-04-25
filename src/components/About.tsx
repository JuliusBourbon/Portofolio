import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stats, skills } from '../utils/Abouts.tsx'

const about_image_1 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087432/about_image_1_htzyhx.jpg'
const about_image_2 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087435/about_image_2_bopy89.jpg'
const about_image_3 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087437/about_image_3_cuxanu.jpg'
const about_image_4 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087438/about_image_4_owgilx.jpg'
const about_image_5 = 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087434/about_image_5_vqfv4b.jpg'
const images = [about_image_4, about_image_3, about_image_5, about_image_2, about_image_1]

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 4000)
      
      return () => clearInterval(timer)
    }, [])
  
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-soft-lg z-10 bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`About me ${currentIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
              </AnimatePresence>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
                      idx === currentIndex ? 'bg-white w-6' : 'bg-white/50 w-2 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-mint/30 rounded-full mix-blend-multiply filter blur-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-peach/30 rounded-full mix-blend-multiply filter blur-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-textDark mb-6">
              About Me
            </h2>

            <div className="space-y-4 text-lg text-textGray mb-10">
              <p>
                Through various hands-on academic projects, I have developed a strong fundamentals in programming logic and data processing. I thrive on turning complex challenges into clean, efficient, and user-friendly technological solutions. I am currently looking for an internship opportunity where I can bring my technical expertise to a professional team and solve real-industry problems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl ${stat.color} text-center`}
                >
                  <div className="text-2xl md:text-3xl font-serif font-bold text-textDark mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-textGray font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h3 className="text-sm font-bold text-textDark uppercase tracking-wider mb-3">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-white shadow-sm rounded-full text-sm font-medium text-textGray border border-gray-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
