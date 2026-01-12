import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X, ChevronRight } from 'lucide-react';
import { Sparkles, Cpu, Briefcase, GraduationCap, Rocket, Mail, Zap } from 'lucide-react';

const Header = ({ 
  darkMode, 
  mobileMenuOpen, 
  activeSection, 
  toggleDarkMode, 
  setMobileMenuOpen, 
  handleNavClick 
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'about', label: 'Skills', icon: Cpu },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: Rocket },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="fixed w-full z-40 py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-30 animate-pulse" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              DevFolio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? darkMode ? 'text-white' : 'text-gray-900'
                      : darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 rounded-full ${
                        darkMode ? 'bg-white/10 backdrop-blur-sm' : 'bg-black/10 backdrop-blur-sm'
                      }`}
                    />
                  )}
                  <span className="relative flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-xl backdrop-blur-sm transition-colors ${
                darkMode 
                  ? 'bg-white/5 hover:bg-white/10 text-amber-300' 
                  : 'bg-black/5 hover:bg-black/10 text-gray-700'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="hidden md:block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow"
            >
              Let's Talk
            </motion.a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl backdrop-blur-sm ${
                darkMode ? 'bg-white/5' : 'bg-black/5'
              }`}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden mt-4 backdrop-blur-xl rounded-2xl p-4 border ${
              darkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-gray-200'
            }`}
          >
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${
                      activeSection === item.id
                        ? darkMode ? 'bg-white/10 text-white' : 'bg-black/10 text-gray-900'
                        : darkMode ? 'hover:bg-white/5' : 'hover:bg-black/5'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5" />
                      <span className={darkMode ? 'text-white' : 'text-gray-900'}>{item.label}</span>
                    </div>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;