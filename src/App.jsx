import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { CodingProfiles } from './components/CodingProfiles';
import { Services } from './components/Services';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/common/Toast';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  
  const [toast, setToast] = useState({
    message: null,
    type: 'success'
  });

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast({ message: null, type: 'success' });
  };

  // Synchronize theme class on document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      
    //   root.classList.remove('light');
    // } else {
    //   root.classList.add('light');
    //   root.classList.remove('dark');

    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Scroll section observer
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'profiles', 'services', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          if (scrollPosition >= section.offsetTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Sticky Navbar */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Single Page Content */}
      <main>
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onShowToast={showToast}
        />
        
        <About />
        
        <Skills />
        
        <Experience />
        
        <Education />
        
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />
        
        <Certifications />
        
        <CodingProfiles />
        
        <Services />
        
        <ResumeCTA
          onOpenResume={() => setIsResumeOpen(true)}
        />
        
        <Contact
          onShowToast={showToast}
        />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Toast Notification Container */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={hideToast}
      />

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Resume Preview & Download Modal */}
      {isResumeOpen && (
        <ResumeModal
          onClose={() => setIsResumeOpen(false)}
          onShowToast={showToast}
        />
      )}

    </div>
  );
}

export default App;
