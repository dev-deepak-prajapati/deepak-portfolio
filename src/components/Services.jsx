import React from 'react';
import { Globe, Server, Database, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Badge } from './common/Badge';

export const Services = () => {
  const serviceIcons = {
    "web-dev": <Globe className="w-6 h-6 text-cyan-400" />,
    "java-backend": <Server className="w-6 h-6 text-indigo-400" />,
    "database-design": <Database className="w-6 h-6 text-emerald-400" />,
    "api-integration": <Cpu className="w-6 h-6 text-amber-400" />
  };

  return (
    <section id="services" className="py-20 relative bg-slate-900/40">
      <Container>
        <SectionHeading
          badge="Core Capabilities"
          title="Technical Services & Expertise"
          subtitle="Software development and technical engineering capabilities offered for production software systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 w-fit mb-5 group-hover:scale-110 transition-transform">
                  {serviceIcons[service.id] || <Globe className="w-6 h-6 text-cyan-400" />}
                </div>

                <h3 className="text-xl font-bold font-heading text-slate-100 group-hover:text-cyan-400 transition-colors mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, tIdx) => (
                    <Badge key={tIdx} variant="default" size="xs">
                      {tech}
                    </Badge>
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
