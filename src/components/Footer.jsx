import React from 'react';
import { ArrowUp, Mail, Code2, Heart } from 'lucide-react';
import { Github, Linkedin } from './common/SocialIcons';
import { profileData } from '../data/profile';
import { Container } from './common/Container';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 relative z-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Developer Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-slate-950 font-mono font-bold">
              <Code2 className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <p className="font-heading font-bold text-slate-100 text-sm">
                {profileData.name}
              </p>
              <p className="font-mono text-xs text-slate-400">
                Software Developer (Java · React · SQL)
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-400 text-xs font-mono">
            <a 
              href={profileData.contact.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
            <span>·</span>
            <a 
              href={profileData.contact.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <span>·</span>
            <a 
              href={`mailto:${profileData.contact.email}`}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
          </div>

          {/* Copyright & Back to top button */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span>© 2026 {profileData.name}. Built with React + Tailwind CSS</span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </Container>
    </footer>
  );
};
