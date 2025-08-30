import React from 'react';
import { useInView } from '../hooks/useInView';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovation Co.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Lead development of scalable web applications using React, Node.js, and AWS',
        'Mentored junior developers and established coding best practices',
        'Improved application performance by 40% through optimization techniques',
        'Collaborated with cross-functional teams to deliver high-quality products'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions LLC',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: [
        'Developed and maintained multiple client projects using modern web technologies',
        'Implemented responsive designs and optimized user experiences',
        'Built RESTful APIs and integrated third-party services',
        'Participated in agile development processes and code reviews'
      ],
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Docker', 'GraphQL']
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Web Studio',
      location: 'Austin, TX',
      period: '2018 - 2020',
      description: [
        'Created engaging user interfaces for various web applications',
        'Worked closely with designers to implement pixel-perfect designs',
        'Optimized web applications for maximum speed and scalability',
        'Maintained and updated legacy codebases'
      ],
      technologies: ['JavaScript', 'CSS3', 'HTML5', 'jQuery', 'Webpack']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              My professional journey and the exciting projects I've worked on
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 font-medium">{exp.period}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className={`flex items-center gap-2 mb-4 text-gray-400 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span>{exp.company}</span>
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>

                      <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-300 leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for timeline */}
                  <div className="hidden md:block w-2/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;