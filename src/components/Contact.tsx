import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon} from '../utils/Icons'
import toast from 'react-hot-toast'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formEndpoint = 'https://formspree.io/f/xpqknpzd'

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Pesan berhasil dikirim!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        toast.error('Gagal mengirim pesan. Pastikan ID Formspree sudah benar.')
      }
    } catch (error) {
      toast.error('Terjadi kesalahan jaringan saat mengirim pesan.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const socialLinks = [
    {
      icon: <GithubIcon size={20} />,
      href: 'https://github.com/JuliusBourbon',
      label: 'GitHub',
    },
    {
      icon: <LinkedinIcon size={20} />,
      href: 'https://linkedin.com/in/naherr',
      label: 'LinkedIn',
    },
    {
      icon: <TwitterIcon size={20} />,
      href: 'https://twitter.com/juliusbourbonn',
      label: 'Twitter',
    },
  ]
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-linear-to-b from-lavender/5 to-transparent pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-textDark mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-textGray">
            Have a project in mind or just want to say hi? I'd love to hear from
            you.
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="bg-background p-8 md:p-10 rounded-3xl shadow-soft border border-gray-100"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-textDark"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-lavender/50 focus:border-lavender transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-textDark"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-lavender/50 focus:border-lavender transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-textDark"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-lavender/50 focus:border-lavender transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 hover:bg-gray-100 border border-gray-300 text-black cursor-pointer font-medium rounded-xl hover:bg-textDark/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="mt-12 flex justify-center gap-4"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="p-4 bg-white rounded-full text-textGray hover:text-lavender hover:shadow-soft hover:-translate-y-1 transition-all"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
