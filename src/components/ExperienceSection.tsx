import React from 'react';
import { MapPin, Calendar, ChevronRight, Building2 } from 'lucide-react';
import { ProfileData, ExperienceItem } from '../data/profileData';

interface Props {
  profile: ProfileData;
}

export const ExperienceSection: React.FC<Props> = ({ profile }) => {
  return (
    <section id="experience" className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 my-6 text-slate-100">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8 pb-4 border-b border-slate-800">
        <div>
          <h2 className="font-mono text-xs font-bold uppercase text-blue-400 tracking-wider mb-1">
            // WORK HISTORY & CONTRIBUTIONS
          </h2>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h3>
        </div>
        <span className="font-mono text-xs font-semibold bg-slate-800 text-slate-300 px-3 py-1.5 rounded-full border border-slate-700 self-start sm:self-center">
          {profile.keyStats.experienceYears} Years Total
        </span>
      </div>

      <div className="space-y-8">
        {profile.experiences.map((exp: ExperienceItem) => (
          <div key={exp.id} className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-3">
            
            {/* Timeline Bullet */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-slate-900 bg-blue-500"></div>

            {/* Header Title & Duration */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-extrabold text-lg text-white flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
                    {exp.company}
                  </span>
                  <span className="text-slate-500 font-normal">|</span>
                  <span className="text-slate-300 font-semibold">{exp.role}</span>
                </h4>
                <div className="text-xs font-mono text-slate-400 mt-1 flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">{exp.type}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-blue-400" /> {exp.location}</span>
                </div>
              </div>
              <span className="font-mono text-xs font-semibold bg-slate-800 text-slate-300 px-3 py-1 rounded-lg border border-slate-700/80 self-start sm:self-center shrink-0">
                <Calendar className="w-3 h-3 inline mr-1 text-blue-400" />
                {exp.duration}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {exp.description}
            </p>

            {/* Nested Sub-Roles */}
            {exp.subRoles && exp.subRoles.length > 0 && (
              <div className="my-3 space-y-3 pl-4 border-l-2 border-blue-500/40 bg-slate-800/50 p-3.5 rounded-xl">
                {exp.subRoles.map((sub, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono font-bold uppercase text-white">
                      <span>{sub.role} ({sub.type})</span>
                      <span className="text-slate-400">{sub.duration}</span>
                    </div>
                    <p className="text-xs text-slate-300 font-sans">{sub.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {sub.skills.map((st, i) => (
                        <span key={i} className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded bg-slate-900 text-slate-200 border border-slate-700">
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Highlights Bullet List */}
            {exp.highlights && exp.highlights.length > 0 && (
              <ul className="space-y-1.5 my-3">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 font-sans">
                    <ChevronRight className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Skill Badges */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              {exp.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-800/80 rounded-md text-[10px] font-mono font-semibold text-slate-300 border border-slate-700/80"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

