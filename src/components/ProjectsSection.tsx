import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ProfileData, ProjectItem } from '../data/profileData';

interface Props {
  profile: ProfileData;
}

export const ProjectsSection: React.FC<Props> = ({ profile }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Security', 'DSA', 'Backend', 'Mobile'];

  const filteredProjects = profile.projects.filter((p) =>
    activeCategory === 'All' ? true : p.category === activeCategory
  );

  return (
    <section id="projects" className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6 sm:p-8 my-6 text-slate-100">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <h2 className="font-mono text-xs font-bold uppercase text-blue-400 tracking-tighter mb-1">
            // FEATURED PROJECTS & ENGINEERING WORK
          </h2>
          <h3 className="text-xl font-black uppercase text-white tracking-tight">
            Enterprise Automation & Microservices
          </h3>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-800 border border-slate-700 rounded-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 font-mono text-xs font-bold uppercase transition-all rounded-md ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => setSelectedProject(proj)}
            className="p-5 bg-slate-800/80 border border-slate-700/90 rounded-xl flex flex-col justify-between hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all cursor-pointer group shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase bg-blue-600 text-white rounded">
                  {proj.category}
                </span>
                {proj.featured && (
                  <span className="text-[10px] font-mono font-bold text-amber-400 uppercase flex items-center gap-1">
                    ★ FEATURED
                  </span>
                )}
              </div>

              <h3 className="text-base font-black uppercase text-white group-hover:text-blue-400 transition-colors tracking-tight">
                {proj.title}
              </h3>

              <p className="text-xs text-slate-200 mt-2 line-clamp-2 font-sans leading-relaxed">
                {proj.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-700/80 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {proj.tags.slice(0, 4).map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-slate-950 text-blue-300 border border-slate-700/80 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs font-mono font-bold uppercase text-blue-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                SPECS <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border-2 border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 relative text-slate-100">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="px-2.5 py-1 text-xs font-mono font-bold uppercase bg-blue-600 text-white rounded">
                // {selectedProject.category}
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-300 hover:text-white font-mono text-xs font-bold px-2 py-1 bg-slate-800 rounded border border-slate-700 transition-colors"
              >
                [CLOSE X]
              </button>
            </div>

            <h3 className="text-xl font-black uppercase tracking-tight text-white">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-slate-200 leading-relaxed font-sans">
              {selectedProject.longDescription}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-blue-400">// TECH STACK:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs font-mono font-bold uppercase bg-slate-950 text-blue-300 border border-slate-700 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-mono font-bold uppercase bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition-colors"
              >
                Close
              </button>
              <a
                href={profile.contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-mono font-bold uppercase bg-blue-600 hover:bg-blue-500 text-white rounded-lg flex items-center gap-1.5 transition-all shadow-md"
              >
                <Github className="w-3.5 h-3.5" /> View GitHub Repository
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
