import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';

const Projects = ({ darkMode, projects }) => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Cutting-edge solutions built with modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : 'bg-white border-gray-200 hover:shadow-lg'
              } ${project.featured ? 'lg:col-span-2' : ''}`}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className={`inline-flex items-center px-4 py-1 rounded-full border mb-2 ${
                      darkMode 
                        ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20' 
                        : 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30'
                    }`}>
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-purple-400' : 'text-purple-600'
                      }`}>{project.category}</span>
                    </div>
                    <h3 className={`text-2xl font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>{project.title}</h3>
                  </div>
                  <div className="flex items-center space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.github}
                      className={`p-2 rounded-xl ${
                        darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      <Github className={`w-5 h-5 ${
                        darkMode ? 'text-white' : 'text-gray-700'
                      }`} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.link}
                      className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>
                </div>
                <p className={`mb-6 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm border ${
                        darkMode 
                          ? 'bg-white/5 border-white/10 text-gray-300' 
                          : 'bg-gray-100 border-gray-200 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  whileHover={{ x: 5 }}
                  href={project.link}
                  className="inline-flex items-center text-cyan-400 font-medium"
                >
                  View Case Study
                  <ChevronRight className="w-5 h-5 ml-2" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;