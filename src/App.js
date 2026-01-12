import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true');
    }
  }, []);

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Data
  const skills = [
    { name: 'React/Next.js', level: 95, icon: 'Code', color: 'from-cyan-500 to-blue-500' },
    { name: 'TypeScript', level: 90, icon: 'Code', color: 'from-blue-500 to-indigo-500' },
    { name: 'Tailwind CSS', level: 92, icon: 'Palette', color: 'from-emerald-500 to-teal-500' },
    { name: 'Node.js', level: 88, icon: 'Database', color: 'from-green-500 to-emerald-500' },
    { name: 'React Native', level: 85, icon: 'Smartphone', color: 'from-violet-500 to-purple-500' },
    { name: 'AWS/Azure', level: 82, icon: 'Cloud', color: 'from-orange-500 to-amber-500' },
  ];

  const experience = [
    {
      id: 1,
      company: 'Tech Innovations Inc.',
      position: 'Senior Full Stack Developer',
      duration: '2021 - Present',
      location: 'San Francisco, CA',
      description: 'Led development of enterprise-scale web applications using React, Node.js, and microservices architecture. Improved application performance by 40% through code optimization.',
      achievements: [
        'Architected and deployed 3 major product features serving 50k+ users',
        'Mentored 4 junior developers and established coding best practices',
        'Reduced server costs by 25% through infrastructure optimization'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker']
    },
    {
      id: 2,
      company: 'Digital Solutions LLC',
      position: 'Frontend Developer',
      duration: '2019 - 2021',
      location: 'Austin, TX',
      description: 'Developed responsive web applications and collaborated with UX designers to implement pixel-perfect interfaces.',
      achievements: [
        'Built 15+ reusable component libraries used across multiple projects',
        'Improved website performance scores by 35%',
        'Implemented accessibility features reaching WCAG 2.1 AA standards'
      ],
      technologies: ['React', 'JavaScript', 'SCSS', 'Webpack', 'Jest']
    },
    {
      id: 3,
      company: 'WebDev Studio',
      position: 'Junior Web Developer',
      duration: '2018 - 2019',
      location: 'Remote',
      description: 'Created responsive websites and web applications for small to medium-sized businesses.',
      achievements: [
        'Delivered 20+ client projects with 100% satisfaction rate',
        'Implemented SEO best practices improving client website rankings',
        'Automated deployment processes reducing deployment time by 60%'
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'WordPress', 'PHP', 'MySQL']
    }
  ];

  const education = [
    {
      id: 1,
      institution: 'Stanford University',
      degree: 'Master of Science in Computer Science',
      duration: '2016 - 2018',
      location: 'Stanford, CA',
      gpa: '3.9/4.0',
      description: 'Specialized in Artificial Intelligence and Human-Computer Interaction. Published research on machine learning applications in UX design.',
      achievements: [
        'Graduated with Distinction',
        'Research Assistant in Human-Computer Interaction Lab',
        'Published 2 research papers in peer-reviewed journals'
      ],
      courses: ['Advanced Algorithms', 'Machine Learning', 'Cloud Computing', 'UX Research']
    },
    {
      id: 2,
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science in Software Engineering',
      duration: '2012 - 2016',
      location: 'Berkeley, CA',
      gpa: '3.8/4.0',
      description: 'Focused on software development methodologies and system architecture. President of Computer Science Club.',
      achievements: [
        'Summa Cum Laude Graduate',
        'Dean\'s List all semesters',
        'First Place in University Hackathon 2015'
      ],
      courses: ['Data Structures', 'Software Engineering', 'Database Systems', 'Web Development']
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Nexus AI Platform',
      description: 'Enterprise AI solution with real-time data processing and predictive analytics',
      technologies: ['Next.js 14', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
      link: '#',
      github: '#',
      category: 'AI/ML',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Dashboard',
      description: 'Real-time analytics dashboard with interactive visualizations',
      technologies: ['React 18', 'D3.js', 'WebSockets', 'Redis'],
      link: '#',
      github: '#',
      category: 'Data Visualization'
    },
    {
      id: 3,
      title: 'Aurora Design System',
      description: 'Component library with auto-dark mode and accessibility features',
      technologies: ['TypeScript', 'Storybook', 'Figma', 'Jest'],
      link: '#',
      github: '#',
      category: 'Design System'
    },
  ];

  const stats = [
    { label: 'Projects Completed', value: '42+', suffix: '' },
    { label: 'Happy Clients', value: '28', suffix: '+' },
    { label: 'Years Experience', value: '5', suffix: '+' },
    { label: 'Open Source', value: '15', suffix: ' repos' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Background darkMode={darkMode} mousePosition={mousePosition} />
      
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 z-50 origin-left"
        style={{ scaleX }}
      />

      <Header
        darkMode={darkMode}
        mobileMenuOpen={mobileMenuOpen}
        activeSection={activeSection}
        toggleDarkMode={toggleDarkMode}
        setMobileMenuOpen={setMobileMenuOpen}
        handleNavClick={handleNavClick}
      />

      <main className="relative">
        <Hero darkMode={darkMode} stats={stats} />
        <Skills darkMode={darkMode} skills={skills} />
        <Experience darkMode={darkMode} experience={experience} />
        <Education darkMode={darkMode} education={education} />
        <Projects darkMode={darkMode} projects={projects} />
        <Contact darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;