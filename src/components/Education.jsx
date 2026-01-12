import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = ({ darkMode, education }) => {
  const certifications = [
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2022' },
    { name: 'React Professional Certification', issuer: 'Meta', year: '2021' },
    { name: 'Google UX Design Certificate', issuer: 'Google', year: '2020' },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Academic background and professional certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`backdrop-blur-sm rounded-2xl p-6 border ${
                darkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
              }`}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0`}>
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {edu.degree}
                  </h3>
                  <div className={`flex items-center space-x-2 mt-1 ${darkMode ? 'text-emerald-400' : 'text-emerald-500'}`}>
                    <Building className="w-4 h-4" />
                    <span className="font-medium">{edu.institution}</span>
                  </div>
                </div>
              </div>

              <div className={`flex items-center justify-between mb-4 p-3 rounded-lg ${
                darkMode ? 'bg-white/5' : 'bg-gray-50'
              }`}>
                <div className="flex items-center space-x-2">
                  <Calendar className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{edu.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{edu.location}</span>
                </div>
                <div className={`px-3 py-1 rounded-full ${darkMode ? 'bg-emerald-500/10 text-emerald-300' : 'bg-emerald-100 text-emerald-700'}`}>
                  GPA: {edu.gpa}
                </div>
              </div>

              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {edu.description}
              </p>

              <div className="mb-4">
                <h4 className={`font-semibold mb-2 flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Award className={`w-4 h-4 mr-2 ${darkMode ? 'text-emerald-400' : 'text-emerald-500'}`} />
                  Achievements
                </h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className={`flex items-start ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 ${darkMode ? 'bg-emerald-400' : 'bg-emerald-500'}`} />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className={`font-semibold mb-2 flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <BookOpen className={`w-4 h-4 mr-2 ${darkMode ? 'text-emerald-400' : 'text-emerald-500'}`} />
                  Relevant Courses
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode 
                          ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' 
                          : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                      }`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`mt-12 backdrop-blur-sm rounded-2xl p-6 border ${
            darkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <Award className={`w-6 h-6 mr-3 ${darkMode ? 'text-emerald-400' : 'text-emerald-500'}`} />
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl ${
                  darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'
                } transition-colors`}
              >
                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {cert.name}
                </h4>
                <div className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {cert.issuer} • {cert.year}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;