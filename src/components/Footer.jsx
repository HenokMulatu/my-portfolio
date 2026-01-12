import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Github, Linkedin } from 'lucide-react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`relative border-t ${
      darkMode ? 'border-white/10 bg-gray-900/50' : 'border-gray-200 bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className={`text-xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>DevFolio</span>
            </div>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Crafting exceptional digital experiences since 2019
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <motion.a
              whileHover={{ y: -3 }}
              href="#"
              className={`p-3 rounded-xl transition-colors ${
                darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'
              }`}
            >
              <Github className={`w-5 h-5 ${
                darkMode ? 'text-white' : 'text-gray-700'
              }`} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="#"
              className={`p-3 rounded-xl transition-colors ${
                darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'
              }`}
            >
              <Linkedin className={`w-5 h-5 ${
                darkMode ? 'text-white' : 'text-gray-700'
              }`} />
            </motion.a>
          </div>
        </div>

        <div className={`mt-12 pt-8 border-t text-center text-sm ${
          darkMode ? 'border-white/10 text-gray-400' : 'border-gray-200 text-gray-600'
        }`}>
          <p>© {new Date().getFullYear()} DevFolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;