import { ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../utils/Icons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800 bg-background dark:bg-gray-950 text-center relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-textGray dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Julius. All rights reserved.
        </p>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-5">
            <a href="https://github.com/JuliusBourbon" target="_blank" rel="noopener noreferrer" className="text-textGray dark:text-gray-400 hover:text-textDark dark:hover:text-white transition-colors" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://linkedin.com/in/naherr" target="_blank" rel="noopener noreferrer" className="text-textGray dark:text-gray-400 hover:text-textDark dark:hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href="https://twitter.com/juliusbourbonn" target="_blank" rel="noopener noreferrer" className="text-textGray dark:text-gray-400 hover:text-textDark dark:hover:text-white transition-colors" aria-label="Twitter">
              <TwitterIcon size={18} />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2 text-textGray dark:text-gray-400 hover:text-textDark dark:hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
        >
          Back to top
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  )
}
