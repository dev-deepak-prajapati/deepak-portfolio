import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Terminal, 
  CheckCircle2, 
  Layers, 
  Cpu 
} from 'lucide-react';
import { skillsData } from '../data/skills';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Badge } from './common/Badge';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categoryIcons = {
    "Core Languages": <Code2 className="w-5 h-5 text-cyan-400" />,
    "Frontend Development": <Layout className="w-5 h-5 text-indigo-400" />,
    "Backend & Web APIs": <Server className="w-5 h-5 text-emerald-400" />,
    "Databases": <Database className="w-5 h-5 text-amber-400" />,
    "Developer Tools & Workflow": <Wrench className="w-5 h-5 text-purple-400" />
  };

  const categories = ['All', ...skillsData.map(group => group.category)];

  const filteredGroups = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(group => group.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <Container>
        <SectionHeading
          badge="Technical Capability"
          title="Technical Skills & Competencies"
          subtitle="Factual skill inventory categorized by engineering domain. No arbitrary percentage bars—only real technical proficiencies."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900/80 text-slate-300 hover:text-slate-100 border border-slate-800 hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Group Header */}
                <div className="flex items-center gap-3 mb-3 pb-3 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                    {categoryIcons[group.category] || <Cpu className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-100 text-lg group-hover:text-cyan-400 transition-colors">
                      {group.category}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {group.skills.length} core items
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {group.description}
                </p>

                {/* Skills List */}
                <div className="space-y-3">
                  {group.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-900 text-cyan-400 border border-slate-800">
                          {skill.level}
                        </span>
                      </div>
                      
                      <p className="text-[11px] text-slate-400">
                        {skill.highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group Footer */}
              <div className="mt-6 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Confirmed Proficiency
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
