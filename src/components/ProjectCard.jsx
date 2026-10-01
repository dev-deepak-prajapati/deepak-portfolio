import React from 'react';
import { ExternalLink, ArrowRight, Code2, Layers, CheckCircle2 } from 'lucide-react';
import { Github } from './common/SocialIcons';
import { Badge } from './common/Badge';
import { Button } from './common/Button';

export const ProjectCard = ({ project, onSelectProject }) => {
  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg">
      <div>
        {/* Card Header & Category Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-1 rounded text-[11px] font-mono font-medium bg-slate-950 text-cyan-400 border border-slate-800">
            {project.badge || project.category}
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            {project.status}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold font-heading text-slate-100 group-hover:text-cyan-400 transition-colors mb-2">
          {project.title}
        </h3>
        
        <p className="text-xs text-slate-400 mb-4 leading-relaxed font-sans line-clamp-2">
          {project.subtitle}
        </p>

        {/* Problem & Solution Teaser */}
        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-4 text-xs space-y-2">
          <div className="text-slate-300 line-clamp-3">
            <span className="text-cyan-400 font-semibold font-mono">Overview: </span>
            {project.problemStatement}
          </div>
        </div>

        {/* Key Features Highlights (First 2) */}
        <div className="space-y-1.5 mb-5">
          {project.keyFeatures.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-800/80">
          {project.technologies.slice(0, 5).map((tech, tIdx) => (
            <Badge key={tIdx} variant="default" size="xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[10px] font-mono text-slate-400 flex items-center">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        {/* Card Footer Action Buttons */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-900">
          <div className="flex items-center gap-2">
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
                title="View GitHub Repository"
                aria-label="View GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
                title="View Live Application"
                aria-label="View Live Application"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <Button
            variant="ghost"
            size="sm"
            icon={ArrowRight}
            iconPosition="right"
            onClick={() => onSelectProject(project)}
            className="text-xs text-cyan-400 hover:text-cyan-300"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};
