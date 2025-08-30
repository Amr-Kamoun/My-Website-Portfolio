import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ['Full Stack Developer', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const shouldDelete = displayText === currentRole && !isDeleting;
    const shouldType = displayText !== currentRole && !isDeleting;
    const shouldMoveNext = displayText === '' && isDeleting;

    if (shouldDelete) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (shouldMoveNext) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    if (shouldType) {
      const timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      const timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentIndex, isDeleting, roles]);

  const handleScrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-4">
        <div className="mb-8 animate-fade-in-up">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-1 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                AK
              </span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up animation-delay-200">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Hi, I'm
          </span>
          <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Amr Kamoun
          </span>
        </h1>

        <div className="h-12 mb-8 animate-fade-in-up animation-delay-400">
          <p className="text-xl md:text-2xl text-gray-300">
            I'm a{' '}
            <span className="text-cyan-400 font-semibold">
              {displayText}
              <span className="animate-blink">|</span>
            </span>
          </p>
        </div>

        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
          Passionate about creating innovative solutions and building amazing user experiences 
          with modern technologies. Let's build something great together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-800">
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Resume
          </button>
          
          <div className="flex items-center gap-4">
            <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group">
              <Github className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group">
              <Linkedin className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a href="#contact" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group">
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

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float-delayed"></div>
    </section>
  );
};

export default Hero;