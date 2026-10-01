import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2, Building2, Landmark } from 'lucide-react';
import { educationData } from '../data/education';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Badge } from './common/Badge';

export const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <Container>
        <SectionHeading
          badge="Academic Qualifications"
          title="Education & Academic Background"
          subtitle="Degree program, institutional affiliation, academic performance, and core computer science coursework."
        />

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden group shadow-xl"
            >
              {/* Background Accent Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-all" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-800">
                
                {/* Left: Degree & Institution */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      {edu.status}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {edu.scoreType}: {edu.score}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold font-heading text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {edu.degree}
                  </h3>

                  <div className="space-y-1 font-mono text-xs text-slate-300">
                    <p className="flex items-center gap-2 text-slate-200 font-sans font-semibold">
                      <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      {edu.institution}
                    </p>
                    <p className="flex items-center gap-2 text-slate-400 font-sans">
                      <Landmark className="w-4 h-4 text-indigo-400 shrink-0" />
                      University: {edu.university}
                    </p>
                  </div>
                </div>

                {/* Right: Year / Graduation Timeline */}
                <div className="flex flex-col items-start md:items-end gap-2 shrink-0 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 shadow-inner">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>Duration: {edu.period}</span>
                  </div>
                </div>

              </div>

              {/* Coursework & Focus Areas */}
              <div className="pt-6 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" /> Core Computer Science Coursework
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {edu.keyCoursework.map((course, cIdx) => (
                    <div 
                      key={cIdx}
                      className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-300 hover:border-slate-700 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
