import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Eye, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

/* ------------ Types ------------ */
export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
};

/* ------------ Card (moved out to avoid nested component warning) ------------ */
type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  onOpen: (p: Project) => void;
};

const ProjectCard = ({ project, featured = false, onOpen }: ProjectCardProps) => (
  <div
    className={`group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
      featured ? 'col-span-full lg:col-span-2' : ''
    }`}
  >
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => onOpen(project)}
          className="p-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors mr-2"
          aria-label={`Preview ${project.title}`}
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
        {project.title}
      </h3>

      <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech: string) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href={project.github || '#'}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group/link"
          aria-label={`${project.title} GitHub`}
        >
          <FaGithub className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
          <span>Code</span>
        </a>
        <a
          href={project.demo || '#'}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group/link"
          aria-label={`${project.title} live demo`}
        >
          <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
          <span>Demo</span>
        </a>
      </div>
    </div>
  </div>
);

/* ------------ Page Component ------------ */
const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.',
      longDescription:
        'This comprehensive e-commerce platform features a responsive React frontend with a robust Node.js backend. It includes user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and an admin panel for inventory management. The application uses MongoDB for data storage and implements real-time notifications.',
      image:
        'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'Collaborative task management application with real-time updates and team features.',
      longDescription:
        'A sophisticated task management application built with Vue.js and Express.js. Features include project creation, task assignment, progress tracking, team collaboration, real-time updates via WebSocket, file attachments, and comprehensive reporting. The app includes role-based access control and integrates with popular calendar applications.',
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL', 'JWT'],
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Analytics Dashboard',
      description:
        'Interactive dashboard displaying weather data with charts and predictions.',
      longDescription:
        'An interactive weather analytics dashboard that provides comprehensive weather insights. Built with React and D3.js for data visualization, it features real-time weather data, historical trends, forecasting, interactive maps, and customizable alerts. The dashboard integrates multiple weather APIs and includes advanced filtering and comparison tools.',
      image:
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Node.js', 'Weather API', 'Chart.js'],
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description:
        'Analytics dashboard for social media management with scheduling features.',
      longDescription:
        'A comprehensive social media management platform that helps businesses manage their online presence. Features include post scheduling across multiple platforms, engagement analytics, competitor analysis, content calendar, automated responses, and detailed performance reporting. Built with modern technologies for scalability and real-time data processing.',
      image:
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Python', 'FastAPI', 'Redis', 'Social APIs'],
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations and interactive elements.',
      longDescription:
        'A cutting-edge portfolio website showcasing modern web development techniques. Features include smooth animations, particle systems, interactive elements, responsive design, optimized performance, and SEO-friendly structure. Built with React and modern CSS techniques, it demonstrates proficiency in frontend development and user experience design.',
      image:
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI integration and smart responses.',
      longDescription:
        'An advanced chat application that combines real-time messaging with AI capabilities. Features include intelligent chat responses, sentiment analysis, language translation, file sharing, group chats, message encryption, and bot integration. The application uses WebSocket for real-time communication and integrates with various AI services for enhanced user experience.',
      image:
        'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Socket.io', 'OpenAI API', 'MongoDB'],
      github: '#',
      demo: '#',
      featured: true,
    },
  ];

  const featuredProjects: Project[] = projects.filter((p) => p.featured);
  const otherProjects: Project[] = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I love working with
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProjectCard project={project} featured onOpen={setSelectedProject} />
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">
              Other Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${(index + featuredProjects.length) * 150}ms` }}
                >
                  <ProjectCard project={project} onOpen={setSelectedProject} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-gray-900/80 text-white rounded-full hover:bg-gray-900 transition-colors"
                aria-label="Close project details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>

              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                {selectedProject.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 rounded-full border border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <a
                  href={selectedProject.github || '#'}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  aria-label="View code on GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                  View Code
                </a>
                <a
                  href={selectedProject.demo || '#'}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                  aria-label="Open live demo"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
