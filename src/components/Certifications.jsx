import React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/certifications';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Badge } from './common/Badge';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative bg-slate-900/40">
      <Container>
        <SectionHeading
          badge="Verified Competencies"
          title="Certifications & Technical Training"
          subtitle="Specialized course completion, technical training credentials, and skill certifications."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificationsData.map((cert, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Header Icon & Year */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="flex items-center gap-1 font-mono text-xs text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    {cert.year}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-heading font-bold text-slate-100 text-lg group-hover:text-cyan-400 transition-colors mb-2">
                  {cert.title}
                </h3>
                
                <p className="text-xs font-mono text-indigo-400 mb-4">
                  {cert.issuer}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill, sIdx) => (
                    <Badge key={sIdx} variant="default" size="xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Footer Credential ID & Link */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400 truncate max-w-[160px]" title={cert.credentialId}>
                  ID: {cert.credentialId}
                </span>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    Verify <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
