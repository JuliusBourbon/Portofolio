import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../utils/Icons'

const SOCIAL_LINKS = [
  { icon: <GithubIcon size={16} />, href: 'https://github.com/JuliusBourbon', label: 'GitHub' },
  { icon: <LinkedinIcon size={16} />, href: 'https://linkedin.com/in/naherr', label: 'LinkedIn' },
  { icon: <TwitterIcon size={16} />, href: 'https://twitter.com/juliusbourbonn', label: 'Twitter' },
  { icon: <Mail size={16} />, href: 'naherrrrr@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t-3 border-black bg-black font-mono">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch">

        <div className="flex items-center gap-3 px-8 py-5 border-b-3 md:border-b-0 md:border-r-3 border-black flex-1">
          <span className="inline-block bg-[#FF3F3F] text-white border-2 border-white px-2 py-0.5 text-sm font-black shadow-[2px_2px_0_#fff]">
            JULIUS WORKSPACE
          </span>
          <span className="text-[11px] font-black uppercase tracking-widest text-gray-400">
            © {new Date().getFullYear()} — All rights reserved.
          </span>
        </div>

        <div className="flex items-center justify-center gap-0 border-b-3 md:border-b-0 md:border-r-3 border-black">
          {SOCIAL_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`flex items-center gap-2 px-5 py-5 text-[11px] font-black uppercase tracking-widest text-gray-400 hover:bg-[#FFE135] hover:text-black transition-colors
                ${i < SOCIAL_LINKS.length - 1 ? 'border-r border-gray-700' : ''}`}
            >
              {link.icon}
              <span className="hidden sm:inline">{link.label}</span>
            </a>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center justify-center gap-2 px-8 py-5 text-[11px] font-black uppercase tracking-widest text-gray-400 hover:bg-[#FFE135] hover:text-black transition-colors cursor-pointer group"
        >
          Back to top
          <ArrowUp
            size={14}
            className="group-hover:-translate-y-0.5 transition-transform"
          />
        </button>
      </div>

      <div className="border-t border-gray-800 overflow-hidden py-2">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="text-[11px] font-black uppercase tracking-widest text-white px-6">
              Fullstack Developer · Web Development · Software Engineering · Data Analytics · Open to Internship ·
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}