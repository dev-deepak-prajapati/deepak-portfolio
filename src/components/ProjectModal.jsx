import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, ShieldCheck, Code2, Database, Cpu } from 'lucide-react';
import { Github } from './common/SocialIcons';
import { Badge } from './common/Badge';
import { Button } from './common/Button';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div 
        className="glass-card w-full max-w-4xl max-h-[90vh] rounded-3xl border border-slate-700 shadow-2xl overflow-y-auto flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-slate-950/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-cyan-950 text-cyan-400 border border-cyan-800">
              {project.category}
            </span>
            <h3 className="text-xl font-bold font-heading text-slate-100 truncate">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Subtitle & Status */}
          <div>
            <p className="text-base text-slate-300 font-sans leading-relaxed">
              {project.subtitle}
            </p>
            <p className="mt-2 text-xs font-mono text-cyan-400">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 mb-2">
                Problem Statement
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Engineered Solution
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features Modules */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Key Features & Functionality
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, fIdx) => (
                <div key={fIdx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Breakdown */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" /> Architectural Highlights
              </h4>

              <div className="space-y-2">
                {project.architecture.map((arch, aIdx) => (
                  <div key={aIdx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs font-mono text-slate-300">
                    <span className="text-cyan-400 font-bold mr-2">[{aIdx + 1}]</span>
                    {arch}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 mb-3">
              Tech Stack & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, tIdx) => (
                <Badge key={tIdx} variant="cyan" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="sticky bottom-0 bg-slate-950 px-6 py-4 border-t border-slate-800 flex items-center justify-between gap-4 z-10">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>

          <div className="flex items-center gap-3">
            {project.github && project.github !== "#" && (
              <Button
                variant="outline"
                size="sm"
                icon={Github}
                href={project.github}
                target="_blank"
              >
                GitHub Repository
              </Button>
            )}

            {project.live && project.live !== "#" && (
              <Button
                variant="primary"
                size="sm"
                icon={ExternalLink}
                iconPosition="right"
                href={project.live}
                target="_blank"
              >
                Live Application
              </Button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
