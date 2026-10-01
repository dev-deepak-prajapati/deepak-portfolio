import React, { useState, useEffect } from 'react';
import { Code, ExternalLink, Activity, Terminal, CheckCircle2, UserCheck } from 'lucide-react';
import { Github, Linkedin } from './common/SocialIcons';
import { profileData } from '../data/profile';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Badge } from './common/Badge';

export const CodingProfiles = () => {
  const [githubStats, setGithubStats] = useState({
    publicRepos: 12,
    followers: "Active",
    status: "Fetched Live"
  });

  // Optional graceful GitHub API fetch with silent fallback
  useEffect(() => {
    fetch('https://api.github.com/users/dev-deepak-prajapati')
      ? fetch('https://api.github.com/users/dev-deepak-prajapati')
          .then(res => res.json())
          .then(data => {
            if (data && data.public_repos !== undefined) {
              setGithubStats({
                publicRepos: data.public_repos,
                followers: data.followers || 0,
                status: "Live Sync"
              });
            }
          })
          .catch(() => {
            // Keep factual defaults gracefully
          })
      : null;
  }, []);

  const profiles = [
    {
      platform: "GitHub",
      username: "dev-deepak-prajapati",
      url: profileData.contact.github,
      icon: <Github className="w-6 h-6 text-slate-100" />,
      description: "Primary repository host for Java backend systems, React apps, and open-source utilities.",
      highlight: `${githubStats.publicRepos}+ Public Repositories`
    },
    {
      platform: "LinkedIn",
      username: "deepak-prajapati",
      url: profileData.contact.linkedin,
      icon: <Linkedin className="w-6 h-6 text-indigo-400" />,
      description: "Professional networking profile highlighting engineering projects, degree milestones, and collaboration.",
      highlight: "Software Engineering Profile"
    },
    {
      platform: "LeetCode",
      username: "dev-deepak-prajapati",
      url: profileData.contact.leetcode,
      icon: <Code className="w-6 h-6 text-amber-400" />,
      description: "Algorithmic problem-solving practice in Data Structures, Array transformations, and Logic.",
      highlight: "DSA Problem Solving"
    },
    {
      platform: "GeeksforGeeks",
      username: "dev_deepak_prajapati",
      url: profileData.contact.geeksforgeeks,
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
      description: "Core computer science fundamentals, OOP concepts, Java language specifications, and SQL querying.",
      highlight: "CS Core Practice"
    }
  ];

  return (
    <section id="profiles" className="py-20 relative">
      <Container>
        <SectionHeading
          badge="Developer Footprint"
          title="GitHub & Coding Profiles"
          subtitle="Explore public code repositories, algorithm practice profiles, and professional network."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p, idx) => (
            <a
              key={idx}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <h3 className="font-heading font-bold text-slate-100 text-lg group-hover:text-cyan-400 transition-colors">
                  {p.platform}
                </h3>
                
                <p className="font-mono text-xs text-slate-400 mb-3">
                  @{p.username}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {p.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-cyan-400">
                <span className="flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {p.highlight}
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};
