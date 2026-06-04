import { useState, useEffect } from 'react'
import { stats, skills } from '../utils/Abouts.tsx'

const images = [
  'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087438/about_image_4_owgilx.jpg',
  'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087437/about_image_3_cuxanu.jpg',
  'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087434/about_image_5_vqfv4b.jpg',
  'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087435/about_image_2_bopy89.jpg',
  'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087432/about_image_1_htzyhx.jpg',
]

const SKILL_COLORS = [
  'bg-[#FFE135]',
  'bg-[#E8F5FF]',
  'bg-[#F0FFE8]',
  'bg-[#F5E8FF]',
  'bg-[#FFF0E8]',
]

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    Promise.all(
      images.map(src => new Promise<void>(res => {
        const img = new Image()
        img.src = src
        img.onload = () => res()
        img.onerror = () => res()
      }))
    ).then(() => setImagesLoaded(true))
  }, [])

  useEffect(() => {
    if (!imagesLoaded) return
    const t = setInterval(() => setCurrentIndex(i => (i + 1) % images.length), 4000)
    return () => clearInterval(t)
  }, [imagesLoaded])

  return (
    <section
      id="about"
      className="py-24 px-6 bg-white dark:bg-[#111] border-t-3 border-black font-mono"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-3 border-black shadow-[6px_6px_0_#000]">

          {/* ── Left: Image block ── */}
          <div className="relative border-b-3 lg:border-b-0 lg:border-r-3 border-black">

            {/* Slideshow */}
            <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-200 dark:bg-[#222]">
              {!imagesLoaded ? (
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#e5e5e5_0,#e5e5e5_4px,#f5f5f5_4px,#f5f5f5_16px)] animate-pulse" />
              ) : (
                <img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`About me ${currentIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                />
              )}

              {/* Counter badge */}
              <span className="absolute top-4 left-4 bg-black text-white text-[10px] font-black px-2 py-1 uppercase tracking-widest z-10">
                {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </span>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 border border-black transition-all duration-300 cursor-pointer
                      ${i === currentIndex ? 'w-6 bg-[#FFE135]' : 'w-2 bg-white hover:bg-[#FFE135]/60'}`}
                  />
                ))}
              </div>
            </div>

            {/* Stats grid pinned below image */}
            <div className="grid grid-cols-2 border-t-3 border-black">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`px-6 py-5 ${i % 2 === 0 ? 'border-r-3 border-black' : ''} ${i < 2 ? 'border-b-3 border-black' : ''}`}
                >
                  <p className="text-2xl font-black text-black dark:text-white leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Content block ── */}
          <div className="flex flex-col bg-[#FFF9F0] dark:bg-[#1a1a1a]">

            {/* Header */}
            <div className="px-8 pt-8 pb-6 border-b-3 border-black">
              <span className="inline-block border-2 text-black border-black bg-[#FFE135] px-3 py-1 text-[11px] font-black uppercase tracking-widest shadow-[2px_2px_0_#000] mb-4">
                Who am I
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-black dark:text-white">
                About<br />
                <span className="inline-block bg-[#FF3F3F] text-white px-2 -rotate-1">
                  Me.
                </span>
              </h2>
            </div>

            {/* Bio */}
            <div className="px-8 py-6 border-b-3 border-black">
              <p className="font-sans text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                Through various hands-on academic projects, I have developed strong fundamentals in programming logic and data processing. I thrive on turning complex challenges into clean, efficient, and user-friendly solutions. Currently looking for an{' '}
                <strong className="text-black dark:text-white font-black">internship opportunity</strong>{' '}
                where I can bring my technical expertise to a professional team and solve real-industry problems.
              </p>
            </div>

            {/* Skills */}
            <div className="px-8 py-6 flex flex-col gap-6 flex-1">
              {skills.map((group, gi) => (
                <div key={group.category}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`inline-block w-3 h-3 border-2 border-black ${SKILL_COLORS[gi % SKILL_COLORS.length]}`} />
                    <h3 className="text-[11px] font-black uppercase tracking-widest text-black dark:text-white">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(skill => (
                      <span
                        key={skill}
                        className="border-2 border-black bg-white dark:bg-[#222] text-black dark:text-white text-[11px] font-black uppercase px-3 py-1 shadow-[1px_1px_0_#000] hover:-translate-x-px hover:-translate-y-px hover:shadow-[2px_2px_0_#000] transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer strip */}
            <div className="border-t-3 border-black px-8 py-4 bg-black">
              <p className="text-[11px] font-black uppercase tracking-widest text-[#FFE135]">
                Open to internship · Based in Bandung, ID
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}