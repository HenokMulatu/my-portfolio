import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, Award } from 'lucide-react';

const Experience = ({ darkMode, experience }) => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                            Professional Experience
                        </span>
                    </h2>
                    <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        A track record of delivering exceptional results across diverse tech roles
                    </p>
                </motion.div>
                <div className="relative">
                    {/* Center decorative line */}
                    <div
                        className={`hidden md:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 
    ${darkMode
                                ? 'bg-gradient-to-b from-orange-500/40 via-red-500/40 to-transparent'
                                : 'bg-gradient-to-b from-orange-400/40 via-red-400/40 to-transparent'
                            }`}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`backdrop-blur-sm rounded-2xl p-6 border ${darkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
                                    }`}
                            >
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            {exp.position}
                                        </h3>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <Building className={`w-4 h-4 ${darkMode ? 'text-orange-400' : 'text-orange-500'}`} />
                                            <span className={`font-medium ${darkMode ? 'text-orange-400' : 'text-orange-500'}`}>
                                                {exp.company}
                                            </span>
                                        </div>
                                    </div>

                                    <div className={`flex items-center space-x-2 mt-2 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        <Calendar className="w-4 h-4" />
                                        <span>{exp.duration}</span>
                                        <MapPin className="w-4 h-4 ml-2" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {exp.description}
                                </p>

                                {/* Achievements */}
                                <div className="mb-4">
                                    <h4 className={`font-semibold mb-2 flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        <Award className={`w-4 h-4 mr-2 ${darkMode ? 'text-orange-400' : 'text-orange-500'}`} />
                                        Key Achievements
                                    </h4>
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, idx) => (
                                            <li
                                                key={idx}
                                                className={`flex items-start ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                                            >
                                                <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 ${darkMode ? 'bg-orange-400' : 'bg-orange-500'
                                                    }`} />
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className={`px-3 py-1 rounded-full text-sm ${darkMode
                                                ? 'bg-orange-500/10 text-orange-300 border border-orange-500/20'
                                                : 'bg-orange-100 text-orange-700 border border-orange-200'
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;