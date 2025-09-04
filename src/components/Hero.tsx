import { useState, useEffect } from 'react'
import { ChevronDown, Download, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const roles = [
  'Full Stack Developer',
  'Software Engineer',
  'Problem Solver',
  'Tech Enthusiast',
] as const

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // typewriter
  useEffect(() => {
    const currentRole = roles[currentIndex]
    const shouldDelete = displayText === currentRole && !isDeleting
    const shouldType = displayText !== currentRole && !isDeleting
    const shouldMoveNext = displayText === '' && isDeleting

    if (shouldDelete) {
      const t = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(t)
    }
    if (shouldMoveNext) {
      setIsDeleting(false)
      setCurrentIndex(prev => (prev + 1) % roles.length)
      return
    }
    if (shouldType) {
      const t = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1))
      }, 100)
      return () => clearTimeout(t)
    }
    if (isDeleting) {
      const t = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1))
      }, 50)
      return () => clearTimeout(t)
    }
  }, [displayText, currentIndex, isDeleting])

  const handleScrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8 md:px-20 relative overflow-hidden"
    >
      {/* NEW: grid wrapper to center text & image in the middle */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl w-full">
        {/* Left side (text content) */}
        <div className="text-left z-10 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up animation-delay-200">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hi, I&apos;m
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Amr Kamoun
            </span>
          </h1>

          <div className="h-12 mb-8 animate-fade-in-up animation-delay-400">
            <p className="text-xl md:text-2xl text-gray-300">
              I&apos;m a{' '}
              <span className="text-cyan-400 font-semibold">
                {displayText}
                <span className="animate-blink">|</span>
              </span>
            </p>
          </div>

          <p className="text-gray-400 text-lg mb-8 max-w-2xl animate-fade-in-up animation-delay-600">
            Passionate about creating innovative solutions and building amazing user
            experiences with modern technologies. Let&apos;s build something great
            together.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 animate-fade-in-up animation-delay-800">
            {/* Download Resume as a direct file download from /public */}
            <a
              href={"/resume/Amr%20Kamoun%27s%20RESUME.pdf"}  // URL-encoded apostrophe
              download="Amr-Kamoun-Resume.pdf"
              className="inline-flex px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 items-center gap-2"
              aria-label="Download Resume PDF"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Amr-Kamoun"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <FaGithub
                  size={24}
                  className="text-gray-300 group-hover:text-cyan-400 transition-colors"
                />
              </a>
              <a
                href="https://linkedin.com/in/amr-kamoun-025258244"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <FaLinkedin
                  size={24}
                  className="text-gray-300 group-hover:text-cyan-400 transition-colors"
                />
              </a>
              <a
                href="#contact"
                aria-label="Contact"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <Mail className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>

          <button
            onClick={handleScrollDown}
            className="animate-bounce animate-fade-in-up animation-delay-1000"
          >
            <ChevronDown className="w-8 h-8 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer" />
          </button>
        </div>

        {/* Right side (your picture) */}
        <div className="mt-12 md:mt-0 flex justify-center md:justify-start w-full md:w-full pl-0 md:pl-12">
          <img
            src="/images/PicturePortfolio.jpg"
            alt="Amr Kamoun"
            className="w-[26rem] h-[26rem] md:w-[30rem] md:h-[30rem] object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
          />
        </div>
      </div>

      {/* Background Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float-delayed" />
    </section>
  )
}

export default Hero
