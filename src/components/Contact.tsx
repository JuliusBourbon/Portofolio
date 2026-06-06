import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon, } from '../utils/Icons'
import toast from 'react-hot-toast'

const SOCIAL_LINKS = [
  { icon: <GithubIcon size={18} />, href: 'https://github.com/JuliusBourbon', label: 'GitHub' },
  { icon: <LinkedinIcon size={18} />, href: 'https://linkedin.com/in/naherr', label: 'LinkedIn' },
  { icon: <TwitterIcon size={18} />, href: 'https://twitter.com/juliusbourbonn', label: 'Twitter' },
  { icon: <Mail size={18} />, href: 'naherrrrr@gmail.com', label: 'Email' },
]

const FORM_ENDPOINT = 'https://formspree.io/f/xpqknpzd'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        toast.success('Pesan berhasil dikirim!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        toast.error('Gagal mengirim pesan. Pastikan ID Formspree sudah benar.')
      }
    } catch {
      toast.error('Terjadi kesalahan jaringan saat mengirim pesan.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = `
    w-full px-4 py-3 border-2 border-black bg-white dark:bg-[#222]
    text-black dark:text-white text-sm font-mono
    placeholder:text-gray-400 dark:placeholder:text-gray-600
    focus:outline-none focus:ring-0 focus:border-[#FF3F3F]
    shadow-[2px_2px_0_#000] focus:shadow-[3px_3px_0_#FF3F3F]
    transition-all duration-150
  `

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#FFF9F0] dark:bg-[#1a1a1a] border-t-3 border-black font-mono"
    >
      <div className="max-w-3xl mx-auto">

        <div className="mb-12">
          <span className="inline-block border-2 text-black border-black bg-[#FFE135] px-3 py-1 text-[11px] font-black uppercase tracking-widest shadow-[2px_2px_0_#000] mb-4">
            Get in Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-black dark:text-white mb-4">
            Let's Work<br />
            <span className="inline-block bg-[#FF3F3F] text-white px-2 -rotate-1">
              Together.
            </span>
          </h2>
          <p className="font-sans text-sm text-gray-600 dark:text-gray-400 max-w-md">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="border-3 border-black bg-white dark:bg-[#111] shadow-[6px_6px_0_#000]">

          <div className="border-b-3 border-black px-8 py-4 flex items-center gap-3 bg-black">
            <span className="w-3 h-3 border-2 border-[#FF3F3F] bg-[#FF3F3F]" />
            <span className="w-3 h-3 border-2 border-[#FFE135] bg-[#FFE135]" />
            <span className="w-3 h-3 border-2 border-[#4ADE80] bg-[#4ADE80]" />
            <span className="ml-auto text-[11px] font-black uppercase tracking-widest text-gray-400">
              new_message.txt
            </span>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[11px] font-black uppercase tracking-widest text-black dark:text-white">
                  Name <span className="text-[#FF3F3F]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-[11px] font-black uppercase tracking-widest text-black dark:text-white">
                  Email <span className="text-[#FF3F3F]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-[11px] font-black uppercase tracking-widest text-black dark:text-white">
                Message <span className="text-[#FF3F3F]">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 border-3 border-black bg-[#FF3F3F] text-white font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-[4px_4px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_#000] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0_#000]"
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block w-3 h-3 border-2 border-white border-t-transparent animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={15} />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-0 border-l-3 border-r-3 border-b-3 border-black flex flex-col md:flex-row items-center justify-between px-8 py-5 bg-[#FFF9F0] dark:bg-[#1a1a1a]">
          <p className="text-[11px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Find me on
          </p>
          <div className="flex gap-2 flex-col md:flex-row">
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex items-center gap-2 border-2 border-black bg-white dark:bg-[#222] text-black dark:text-white px-3 py-2 text-[11px] font-black uppercase shadow-[2px_2px_0_#000] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_#000] hover:bg-[#FFE135] dark:hover:bg-[#FFE135] dark:hover:text-black transition-all"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}