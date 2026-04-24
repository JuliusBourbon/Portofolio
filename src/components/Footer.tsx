import { ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon } from '../utils/Icons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <footer className="py-8 px-6 border-t border-gray-200 bg-background text-center relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-textGray text-sm">
          © {new Date().getFullYear()} Raihan. All rights reserved.
        </p>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-5">
            <a href="https://github.com/raihanfathir" target="_blank" rel="noopener noreferrer" className="text-textGray hover:text-textDark transition-colors" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://linkedin.com/in/raihanfathir" target="_blank" rel="noopener noreferrer" className="text-textGray hover:text-textDark transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href="https://twitter.com/raihanfathir" target="_blank" rel="noopener noreferrer" className="text-textGray hover:text-textDark transition-colors" aria-label="Twitter">
              <TwitterIcon size={18} />
            </a>
            <a href="https://dribbble.com/raihanfathir" target="_blank" rel="noopener noreferrer" className="text-textGray hover:text-textDark transition-colors" aria-label="Dribbble">
              <DribbbleIcon size={18} />
            </a>
          </div>
          <p className="text-textGray text-sm hidden md:block">
            Designed & Built with <span className="text-peach">Love</span>
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2 text-textGray hover:text-textDark transition-colors flex items-center gap-2 text-sm font-medium"
        >
          Back to top
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  )
}
