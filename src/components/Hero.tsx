import { ArrowRight } from 'lucide-react'
import { TechStack } from '../utils/TechStack.tsx'

const PROFILE_IMAGE =
  'https://res.cloudinary.com/dnn3mm02t/image/upload/v1777087440/hhe_o2lskm.jpg'

const STATS = [
  { num: '3+', label: 'Years Coding' },
  { num: '15+', label: 'Projects Done' },
  { num: '6+', label: 'Tech Stack' },
]

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col font-mono pt-[71px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 flex-1 border-b-3 border-black">

        <div className="flex flex-col justify-center gap-6 px-9 py-14 border-b-3 lg:border-b-0 lg:border-r-3 border-black bg-[#FFF9F0] dark:bg-[#1a1a1a]">

          <span className="inline-flex items-center gap-2 self-start border-2 border-black bg-[#FFE135] px-3 py-1.5 text-[11px] font-black dark:text-black uppercase tracking-widest shadow-[3px_3px_0_#000]">
            <span className="inline-block w-2 h-2 rounded-full bg-black" />
            Available for work
          </span>

          <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
            <span className="-rotate-1 inline-block bg-[#FF3F3F] text-white dark:text-white px-2">
              Raihan
            </span><br />
            Fathir{' '}
            Muhammad
          </h1>

          <p className="border-l-4 border-[#FF3F3F] pl-3 text-xs font-black uppercase tracking-[0.2em] text-black dark:text-white">
            Fullstack Developer
          </p>

          <p className="font-sans text-sm leading-relaxed text-gray-700 max-w-md dark:text-white">
            Informatics Engineering student at{' '}
            <strong className="text-black dark:text-white">Universitas Komputer Indonesia</strong>.
            Passionate about Web Development, Software Engineering, and Data
            Analytics. Proactive &amp; always up-to-date with the latest tech.
          </p>

          <div className="flex flex-wrap gap-2">
            {TechStack.map(tech => (
              <span
                key={tech.name}
                className="border-2 border-black bg-white px-3 py-1 text-[11px] font-black uppercase dark:text-black shadow-[2px_2px_0_#000] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_#000] transition-all cursor-default"
              >
                {tech.name}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border-3 border-black bg-[#FF3F3F] px-6 py-3 text-xs font-black uppercase tracking-wider text-white shadow-[4px_4px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_#000] transition-all"
            >
              View Projects <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center border-3 border-black bg-[#FFE135] px-6 py-3 text-xs font-black uppercase tracking-wider text-black shadow-[4px_4px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_#000] transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center bg-[#E8F5FF] dark:bg-[#363636] py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg,#000 0,#000 2px,transparent 2px,transparent 14px)',
            }}
          />

          <div className="relative">
            <div className="absolute top-3 left-3 w-64 h-80 border-3 border-black bg-[#FFE135]" />
            <div className="relative w-64 h-80 md:w-120 md:h-140 border-3 border-black overflow-hidden">
              <img
                src={PROFILE_IMAGE}
                alt="Raihan Fathir Muhammad"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 border-3 border-black bg-[#FF3F3F] px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-white z-10">
              Informatics '2X
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 bg-[#FFF9F0] dark:bg-[#000000]">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`px-8 py-5 border-t-3 dark:border-gray-300 border-black ${i < STATS.length - 1 ? 'border-r-3' : ''}`}
          >
            <p className="text-3xl font-black leading-none">
              {s.num.replace('+', '')}
              <span className="text-[#FF3F3F]">+</span>
            </p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-white">
              {s.label}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}