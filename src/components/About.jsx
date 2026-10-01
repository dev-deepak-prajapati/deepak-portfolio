import React from 'react';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  Target,
  Code2
} from 'lucide-react';
import { profileData } from '../data/profile';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Badge } from './common/Badge';

export const About = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-900/40">
      <Container>
        <SectionHeading
          badge="Engineering Identity"
          title="About Deepak Prajapati"
          subtitle="Software developer focused on building reliable real-world applications with clean architecture and object-oriented design."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Developer Profile Card with User Photo */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 border border-slate-800 shadow-xl relative overflow-hidden group">
              
              {/* Photo Frame */}
              <div className="relative rounded-xl overflow-hidden mb-6 aspect-[4/5] border-2 border-slate-700/60 shadow-inner group-hover:border-cyan-500/50 transition-colors">
                <img
                  src={profileData.avatar}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to placeholder if image loading issue occurs
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-slate-900 items-center justify-center flex-col text-slate-500">
                  <User className="w-16 h-16 text-cyan-400 mb-2" />
                  <span className="font-mono text-sm">{profileData.name}</span>
                </div>

                {/* Glass Tag Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                    <span className="text-xs font-mono font-medium text-slate-200">
                      BCA 2026 Batch
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-cyan-400">
                    73.33% Score
                  </span>
                </div>
              </div>

              {/* Developer Metadata Summary */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-cyan-400" /> Institution:
                  </span>
                  <span className="text-slate-200 font-sans font-medium text-right">
                    Mahadev PG College
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-indigo-400" /> University:
                  </span>
                  <span className="text-slate-200 font-sans font-medium text-right">
                    MGKVP, Varanasi
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-400" /> Location:
                  </span>
                  <span className="text-slate-200 font-sans font-medium text-right">
                    Varanasi, UP, India
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Engineering Mindset & Quick Facts Grid */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Summary & Engineering Mindset */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold font-heading text-slate-100 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                Professional Summary & Mindset
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {profileData.about.summary}
              </p>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {profileData.about.mindset}
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" /> Academic & Background Quick Facts
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profileData.about.quickFacts.map((fact, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all group"
                  >
                    <div className="text-xs font-mono text-cyan-400 font-medium mb-1">
                      {fact.label}
                    </div>
                    <div className="text-slate-200 font-semibold text-sm group-hover:text-slate-100">
                      {fact.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Learning & Growth Direction */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800">
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-400" /> Active Technical Focus & Learning Roadmap
              </h4>

              <div className="flex flex-wrap gap-2.5">
                {profileData.about.currentFocus.map((focus, idx) => (
                  <div 
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-indigo-500/30 text-xs font-mono text-indigo-200 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{focus}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};
