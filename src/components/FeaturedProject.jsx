import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Database, 
  Users, 
  FileText, 
  Sparkles,
  Code2,
  Server,
  ArrowRight
} from 'lucide-react';
import { Github } from './common/SocialIcons';
import { projectsData } from '../data/projects';
import { Badge } from './common/Badge';
import { Button } from './common/Button';

export const FeaturedProject = ({ onSelectProject }) => {
  const featured = projectsData.find(p => p.featured) || projectsData[0];
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="mb-16">
      <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-cyan-500/30 shadow-2xl relative overflow-hidden group">
        
        {/* Top Featured Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
            FEATURED CAPSTONE PROJECT
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
              {featured.status}
            </span>
          </div>
        </div>

        {/* Project Header Title */}
        <div className="mb-8">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-100 group-hover:text-cyan-400 transition-colors">
            {featured.title}
          </h3>
          <p className="mt-2 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {featured.subtitle}
          </p>
        </div>

        {/* Grid: Interactive Visual Preview & Technical Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Left Visual Architecture & Screenshot Representation */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-950 p-6 border border-slate-800/90 shadow-2xl space-y-6 relative overflow-hidden">
            
            {/* Visual Schema / Web Portal Wireframe Mockup */}
            <div className="bg-slate-900 rounded-xl border border-slate-800 p-4 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-slate-400 text-[11px]">institute-portal.org/dashboard</span>
              </div>

              {/* Simulated Portal Layout */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-center">
                  <Users className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                  <span className="text-[10px] text-cyan-200">Student Portal</span>
                </div>
                <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-center">
                  <ShieldCheck className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
                  <span className="text-[10px] text-indigo-200">Faculty Hub</span>
                </div>
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-center">
                  <Database className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                  <span className="text-[10px] text-emerald-200">Fee & Ledger</span>
                </div>
              </div>

              {/* Data Flow Architecture Snippet */}
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 text-[11px] space-y-1 text-slate-300">
                <div className="text-cyan-400 font-semibold">// MVC Architectural Flow</div>
                <div>HTTP Request → Servlet Controller → JDBC DAO → MySQL Database</div>
                <div className="text-slate-500">// Response rendered via JSP views</div>
              </div>
            </div>

            {/* Architectural Tags */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="cyan" size="xs">Java JSP / Servlets</Badge>
              <Badge variant="indigo" size="xs">MySQL Relational DB</Badge>
              <Badge variant="emerald" size="xs">JDBC DAO Layer</Badge>
              <Badge variant="default" size="xs">Role-Based Auth</Badge>
            </div>

          </div>

          {/* Right Column: Problem, Solution & Key Features */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tabs for Problem vs Solution vs Features */}
            <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-950 border border-slate-800">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeTab === 'overview' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Problem & Solution
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeTab === 'features' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Key Features
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeTab === 'architecture' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Architecture
              </button>
            </div>

            {/* Tab Content Display */}
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 mb-1">
                    Problem Statement
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {featured.problemStatement}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-1">
                    Engineered Solution
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {featured.solution}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  System Modules & Features
                </h4>
                {featured.keyFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/60 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Technical Architecture Highlights
                </h4>
                {featured.architecture.map((arch, aIdx) => (
                  <div key={aIdx} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 font-mono">
                    <span className="text-cyan-400 font-bold mr-2">0{aIdx + 1}.</span> {arch}
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* Technologies Badges */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-1">Tech Stack:</span>
            {featured.technologies.map((tech, idx) => (
              <Badge key={idx} variant="default" size="xs">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              icon={Github}
              href={featured.github}
              target="_blank"
            >
              Source Code
            </Button>

            <Button
              variant="primary"
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => onSelectProject(featured)}
            >
              Full Architecture & Details
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
