import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal, Code2 } from 'lucide-react';
import { experienceData } from '../data/experience';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Badge } from './common/Badge';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative bg-slate-900/40">
      <Container>
        <SectionHeading
          badge="Practical Experience"
          title="Engineering Journey & Practical Work"
          subtitle="Hands-on capstone engineering, full-stack practical lab projects, and software development training."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12">
            
            {experienceData.map((item, index) => (
              <div key={index} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline Dot Icon */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all shadow-md">
                  <Code2 className="w-4 h-4" />
                </div>

                {/* Timeline Content Card */}
                <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300">
                  
                  {/* Role Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-800/40 mb-2">
                        {item.type}
                      </div>
                      <h3 className="text-xl font-bold font-heading text-slate-100 group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-indigo-400 font-mono">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1 font-mono text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 bg-slate-950 px-3 py-1 rounded-md border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-400">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Role Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-5">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-2">Technologies Used:</span>
                    {item.skills.map((tech, tIdx) => (
                      <Badge key={tIdx} variant="default" size="xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>
      </Container>
    </section>
  );
};
