import React from 'react';
import { FileText, Download, Sparkles, ArrowRight } from 'lucide-react';
import { Container } from './common/Container';
import { Button } from './common/Button';

export const ResumeCTA = ({ onOpenResume }) => {
  return (
    <section className="py-16 relative">
      <Container max-w-5xl>
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-cyan-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 group">
          
          {/* Background Decorative Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-all" />

          {/* Left Content */}
          <div className="space-y-3 max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              RECRUITER & HIRING CTA
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-100">
              Interested in working together?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore my technical background, degree achievements, project architecture, and core competencies in a clean ATS-friendly resume format.
            </p>
          </div>

          {/* Right Action Trigger */}
          <div className="shrink-0 relative z-10">
            <Button
              variant="primary"
              size="lg"
              icon={FileText}
              onClick={onOpenResume}
              className="shadow-xl"
            >
              View & Download Resume
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
};
