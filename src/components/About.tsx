import React from 'react';
import { useInView } from '../hooks/useInView';
import { Code2, Lightbulb, Target, Users } from 'lucide-react';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const highlights = [
    {
      icon: Code2,
      title: 'Technical Excellence',
      description: 'Passionate about clean code, best practices, and staying current with emerging technologies.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Creative approach to complex challenges with focus on innovative and efficient solutions.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Dedicated to delivering high-quality results that exceed expectations and drive success.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong communicator who thrives in team environments and values knowledge sharing.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-25"></div>
                <div className="relative bg-gray-800 p-8 rounded-lg">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    I'm a passionate software developer with a strong foundation in modern web technologies 
                    and a keen eye for creating exceptional user experiences. My journey in technology has been 
                    driven by curiosity and a desire to solve complex problems through innovative solutions.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                    projects, or sharing knowledge with the developer community. I believe in continuous learning 
                    and staying ahead of the curve in this ever-evolving field.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={item.title}
                  className={`bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 ${
                    isInView ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mr-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;