import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'amr.kamoun@email.com',
      link: 'mailto:amr.kamoun@email.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'San Francisco, CA',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's connect and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className={`space-y-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's talk about your project</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Whether you have a question about development, need help with a project, 
                  or just want to say hello, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-gray-400">{item.details}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="text-white font-medium mb-4">Connect with me</h4>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-25"></div>
                <div className="relative bg-gray-800 p-8 rounded-lg">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white font-medium mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-white font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-white font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                        placeholder="Project Discussion"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    {submitMessage && (
                      <div className="p-4 bg-green-500/20 text-green-400 rounded-lg border border-green-500/30 animate-fade-in">
                        {submitMessage}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Contact;