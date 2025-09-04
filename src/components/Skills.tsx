import { useInView } from '../hooks/useInView';

const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'TypeScript', level: 85, color: 'from-blue-500 to-blue-700' },
        { name: 'Vue.js', level: 80, color: 'from-green-400 to-green-600' },
        { name: 'CSS/SCSS', level: 88, color: 'from-pink-400 to-pink-600' },
        { name: 'Tailwind CSS', level: 92, color: 'from-teal-400 to-teal-600' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 87, color: 'from-green-500 to-green-700' },
        { name: 'Python', level: 83, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Express.js', level: 85, color: 'from-gray-400 to-gray-600' },
        { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-800' },
        { name: 'PostgreSQL', level: 82, color: 'from-indigo-400 to-indigo-600' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 90, color: 'from-orange-400 to-orange-600' },
        { name: 'Docker', level: 78, color: 'from-blue-500 to-blue-700' },
        { name: 'AWS', level: 75, color: 'from-yellow-500 to-yellow-700' },
        { name: 'GraphQL', level: 80, color: 'from-pink-500 to-pink-700' },
        { name: 'Jest', level: 85, color: 'from-red-400 to-red-600' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here are the technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className={`bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left ${
                            isInView ? 'scale-x-100' : 'scale-x-0'
                          }`}
                          style={{ 
                            width: `${skill.level}%`,
                            transitionDelay: `${(categoryIndex * 200) + (index * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;