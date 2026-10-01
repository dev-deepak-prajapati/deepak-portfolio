import React, { useState } from 'react';
import { 
  Mail, 
  FileText, 
  ArrowRight, 
  Terminal as TerminalIcon, 
  Code2, 
  Sparkles, 
  Check, 
  Copy, 
  ChevronRight,
  Database,
  Cpu,
  Layers
} from 'lucide-react';
import { Github, Linkedin } from './common/SocialIcons';
import { profileData } from '../data/profile';
import { Button } from './common/Button';
import { Badge } from './common/Badge';

export const Hero = ({ onOpenResume, onShowToast }) => {
  const [activeTab, setActiveTab] = useState('java');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { text: "System initialized. Welcome to Deepak's Developer Workspace.", type: "system" },
    { text: "Type 'help' to see available interactive commands.", type: "info" }
  ]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopiedEmail(true);
    onShowToast("Email address copied to clipboard!", "success");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...terminalLogs, { text: `$ ${terminalInput}`, type: "command" }];

    if (cmd === 'help') {
      newLogs.push({ text: "Commands: skills, projects, education, contact, status, clear", type: "response" });
    } else if (cmd === 'skills') {
      newLogs.push({ text: "Core Stack: Java SE, Servlets, JDBC, MySQL, React.js, Tailwind CSS, Python, Git", type: "response" });
    } else if (cmd === 'projects') {
      newLogs.push({ text: "Featured: Institute Management System (JSP, Servlet, MySQL)", type: "response" });
    } else if (cmd === 'education') {
      newLogs.push({ text: "Degree: BCA — Mahadev PG College, Varanasi | Score: 73.33%", type: "response" });
    } else if (cmd === 'contact') {
      newLogs.push({ text: `Email: ${profileData.contact.email}`, type: "response" });
    } else if (cmd === 'status') {
      newLogs.push({ text: "Ready for full-time software developer opportunities.", type: "success" });
    } else if (cmd === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    } else {
      newLogs.push({ text: `Command not recognized: '${cmd}'. Type 'help' for options.`, type: "error" });
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex items-center bg-tech-grid overflow-hidden">
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                Available for Software Engineering Roles
              </span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-slate-100 dark:text-slate-100 leading-[1.1]">
                Hello, I'm <br />
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-indigo-500 bg-clip-text text-transparent">
                  {profileData.name}
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-xl sm:text-2xl font-mono text-cyan-400 font-bold">
                  Software Developer
                </span>
                <span className="text-slate-600 hidden sm:inline">|</span>
                <span className="text-base sm:text-xl text-slate-400 font-medium">
                  {profileData.headline}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {profileData.subheading}
            </p>

            {/* Floating Tech Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <Badge variant="cyan" size="sm">
                <Code2 className="w-3 h-3 mr-1 inline" /> Java SE & Servlets
              </Badge>
              <Badge variant="indigo" size="sm">
                <Database className="w-3 h-3 mr-1 inline" /> MySQL & JDBC
              </Badge>
              <Badge variant="default" size="sm">
                <Layers className="w-3 h-3 mr-1 inline" /> React.js & Tailwind
              </Badge>
              <Badge variant="emerald" size="sm">
                <Cpu className="w-3 h-3 mr-1 inline" /> Python Scripting
              </Badge>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Featured Projects
              </Button>

              <Button
                variant="glass"
                size="lg"
                icon={FileText}
                onClick={onOpenResume}
              >
                View Resume
              </Button>
            </div>

            {/* Contact & Social Links */}
            <div className="flex items-center gap-4 pt-3 border-t border-slate-800/80 w-full">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition-all"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition-all"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/80 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 text-xs font-mono transition-all cursor-pointer"
                title="Click to copy email address"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">{profileData.contact.email}</span>
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Developer Terminal / Code Sandbox */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-card rounded-xl overflow-hidden shadow-2xl border border-slate-800/90 glow-subtle">
              
              {/* Terminal Window Header Bar */}
              <div className="bg-slate-900/90 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                    deepak-prajapati-dev.sh
                  </span>
                </div>

                {/* Tab Controls */}
                <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-md border border-slate-800">
                  <button
                    onClick={() => setActiveTab('java')}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'java' ? 'bg-cyan-500/20 text-cyan-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Developer.java
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'terminal' ? 'bg-cyan-500/20 text-cyan-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Terminal
                  </button>
                </div>
              </div>

              {/* Code Tab Content */}
              {activeTab === 'java' ? (
                <div className="p-5 font-mono text-xs leading-relaxed bg-slate-950/90 text-slate-300 overflow-x-auto min-h-[300px]">
                  <div className="text-slate-500 mb-2">// Software Developer Profile Object</div>
                  <div className="text-purple-400">public class <span className="text-amber-300">Developer</span> &#123;</div>
                  <div className="pl-4">
                    <span className="text-purple-400">private String</span> name = <span className="text-emerald-400">"{profileData.name}"</span>;
                    <br />
                    <span className="text-purple-400">private String</span> degree = <span className="text-emerald-400">"BCA (MGKVP, 2026)"</span>;
                    <br />
                    <span className="text-purple-400">private double</span> bcaScore = <span className="text-cyan-400">73.33</span>;
                    <br />
                    <span className="text-purple-400">private String[]</span> stack = &#123;
                    <br />
                    <span className="pl-4 text-emerald-400">"Java"</span>, <span className="text-emerald-400">"JSP/Servlets"</span>, <span className="text-emerald-400">"MySQL"</span>,
                    <br />
                    <span className="pl-4 text-emerald-400">"React.js"</span>, <span className="text-emerald-400">"Tailwind CSS"</span>, <span className="text-emerald-400">"Python"</span>
                    <br />
                    &#125;;
                  </div>
                  <br />
                  <div className="pl-4">
                    <span className="text-purple-400">public void</span> <span className="text-cyan-300">buildReliableSoftware</span>() &#123;
                    <br />
                    <span className="pl-4 text-slate-400">System.out.println(</span>
                    <br />
                    <span className="pl-8 text-emerald-400">"Delivering clean code & scalable systems."</span>
                    <br />
                    <span className="pl-4 text-slate-400">);</span>
                    <br />
                    &#125;
                  </div>
                  <div className="text-purple-400">&#125;</div>
                </div>
              ) : (
                /* Interactive Terminal CLI */
                <div className="p-4 font-mono text-xs bg-slate-950/95 min-h-[300px] flex flex-col justify-between">
                  <div className="space-y-2 overflow-y-auto max-h-[240px] pr-1">
                    {terminalLogs.map((log, index) => (
                      <div 
                        key={index}
                        className={
                          log.type === 'command' ? 'text-cyan-300 font-bold' :
                          log.type === 'success' ? 'text-emerald-400' :
                          log.type === 'error' ? 'text-rose-400' :
                          log.type === 'info' ? 'text-indigo-300' :
                          'text-slate-400'
                        }
                      >
                        {log.text}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleTerminalSubmit} className="mt-3 pt-2 border-t border-slate-800 flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="Type 'help'..."
                      className="bg-transparent text-slate-200 border-none outline-none focus:ring-0 text-xs font-mono w-full"
                    />
                    <button type="submit" className="text-cyan-400 hover:text-cyan-300 cursor-pointer">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              )}

              {/* Terminal Footer Info */}
              <div className="bg-slate-900/80 px-4 py-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Varanasi, UP, India
                </span>
                <span>BCA aggregate: 73.33%</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
