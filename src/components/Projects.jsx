import React, { useState } from 'react';
import { Filter, Layers, Code2 } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { FeaturedProject } from './FeaturedProject';
import { ProjectCard } from './ProjectCard';

export const Projects = ({ onSelectProject }) => {
  const [filter, setFilter] = useState('All');

  const filterCategories = [
    'All',
    'Full Stack',
    'Java / Backend',
    'React / Frontend',
    'Python'
  ];

  const filteredProjects = projectsData.filter(project => {
    if (filter === 'All') return true;
    if (filter === 'Full Stack') return project.category.includes('Full Stack');
    if (filter === 'Java / Backend') return project.category.includes('Java') || project.category.includes('Backend');
    if (filter === 'React / Frontend') return project.category.includes('React') || project.category.includes('Frontend');
    if (filter === 'Python') return project.category.includes('Python');
    return true;
  });

  return (
    <section id="projects" className="py-20 relative">
      <Container>
        <SectionHeading
          badge="Core Portfolio Work"
          title="Software Projects & Applications"
          subtitle="Production-grade web applications, capstone systems, database applications, and algorithmic tools."
        />

        {/* Featured Project Showcase */}
        <FeaturedProject onSelectProject={onSelectProject} />

        {/* Projects Filtering Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pt-6 border-t border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Filter className="w-4 h-4 text-cyan-400" />
            <span>Filter by Domain:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                    : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};
