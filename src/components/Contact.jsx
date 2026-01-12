import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = ({ darkMode }) => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Let's Build Something
              </span>
              <span className={`block bg-clip-text text-transparent ${
                darkMode 
                  ? 'bg-gradient-to-r from-white to-gray-400' 
                  : 'bg-gradient-to-r from-gray-900 to-gray-600'
              }`}>
                Amazing Together
              </span>
            </h2>
            <p className={`text-xl mb-8 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Have a project in mind? Let's discuss how we can transform your ideas into reality.
            </p>

            <div className="space-y-6">
              <div className={`flex items-center space-x-4 p-4 backdrop-blur-sm rounded-2xl border ${
                darkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
              }`}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Email</div>
                  <div className={`text-lg font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>hello@devfolio.com</div>
                </div>
              </div>

              <div className={`flex items-center space-x-4 p-4 backdrop-blur-sm rounded-2xl border ${
                darkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
              }`}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Phone</div>
                  <div className={`text-lg font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>+1 (555) 123-4567</div>
                </div>
              </div>

              <div className={`flex items-center space-x-4 p-4 backdrop-blur-sm rounded-2xl border ${
                darkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
              }`}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Location</div>
                  <div className={`text-lg font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>San Francisco, CA</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`backdrop-blur-xl rounded-3xl p-8 border ${
              darkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
            }`}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>First Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                      darkMode 
                        ? 'bg-white/5 border-white/10 text-white' 
                        : 'bg-gray-50 border-gray-200 text-gray-900'
                    }`}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Last Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                      darkMode 
                        ? 'bg-white/5 border-white/10 text-white' 
                        : 'bg-gray-50 border-gray-200 text-gray-900'
                    }`}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Email</label>
                <input
                  type="email"
                  className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                    darkMode 
                      ? 'bg-white/5 border-white/10 text-white' 
                      : 'bg-gray-50 border-gray-200 text-gray-900'
                  }`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Project Type</label>
                <select className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                  darkMode 
                    ? 'bg-white/5 border-white/10 text-white' 
                    : 'bg-gray-50 border-gray-200 text-gray-900'
                }`}>
                  <option>Web Application</option>
                  <option>Mobile App</option>
                  <option>UI/UX Design</option>
                  <option>Consultation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Message</label>
                <textarea
                  rows="4"
                  className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none ${
                    darkMode 
                      ? 'bg-white/5 border-white/10 text-white' 
                      : 'bg-gray-50 border-gray-200 text-gray-900'
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;