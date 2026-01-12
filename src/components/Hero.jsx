import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Hero = ({ darkMode, stats }) => {
    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={`inline-flex items-center px-4 py-2 rounded-full border mb-6 ${darkMode
                            ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20'
                            : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/30'
                            }`}>
                            <Sparkles className={`w-4 h-4 mr-2 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'
                                }`} />
                            <span className={`text-sm font-medium ${darkMode ? 'text-cyan-400' : 'text-cyan-600'
                                }`}>Senior Full Stack Developer</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Crafting Digital
                            </span>
                            <span className={`block bg-clip-text text-transparent ${darkMode
                                ? 'bg-gradient-to-r from-white to-gray-400'
                                : 'bg-gradient-to-r from-gray-900 to-gray-600'
                                }`}>
                                Experiences
                            </span>
                        </h1>

                        <p className={`text-xl mb-8 max-w-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                            I build cutting-edge web applications with React, Next.js, and modern cloud technologies.
                            Passionate about performance, accessibility, and exceptional user experiences.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-full hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
                            >
                                View Projects
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className={`px-8 py-4 backdrop-blur-sm border font-medium rounded-full hover:shadow-xl transition-all duration-300 ${darkMode
                                    ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                                    : 'bg-black/5 border-gray-200 text-gray-900 hover:bg-black/10'
                                    }`}
                            >
                                Get In Touch
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative w-fit">

                                {/* Image */}
                                <div className={`relative w-64 h-64 md:w-96 md:h-96 rounded-3xl overflow-hidden border shadow-2xl ${darkMode ? 'border-white/10' : 'border-gray-200'
                                    }`}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Stats */}
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        className={`absolute backdrop-blur-xl rounded-2xl p-4 shadow-xl
      ${darkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}
      ${index === 0
                                                ? '-top-10 -left-10 -translate-x-1 -translate-y-1'
                                                : index === 1
                                                    ? '-top-10 -right-10 translate-x-1 -translate-y-1'
                                                    : index === 2
                                                        ? '-bottom-10 -left-10 -translate-x-1 translate-y-1'
                                                        : '-bottom-10 -right-10 translate-x-1 translate-y-1'
                                            }`}
                                    >
                                        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                            {stat.value}
                                        </div>
                                        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}

                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;