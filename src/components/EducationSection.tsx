import React from 'react';
import { Calendar } from 'lucide-react';
import { ProfileData } from '../data/profileData';

interface Props {
  profile: ProfileData;
}

export const EducationSection: React.FC<Props> = ({ profile }) => {
  return (
    <section id="education" className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6 sm:p-8 my-6 text-slate-100">
      
      <div className="mb-6 pb-4 border-b border-slate-800">
        <h2 className="font-mono text-xs font-bold uppercase text-blue-400 tracking-tighter mb-1">
          // EDUCATION
        </h2>
        <h3 className="text-xl font-black uppercase text-white tracking-tight">
          Academic Qualifications
        </h3>
      </div>

      <div className="space-y-4">
        {profile.education.map((edu) => (
          <div
            key={edu.id}
            className="p-5 bg-slate-800/60 border border-slate-700/80 rounded-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="font-black text-base uppercase text-white">
                  {edu.institution}
                </h3>
                <span className="font-mono text-xs font-bold bg-slate-800 text-slate-300 px-2 py-1 border border-slate-700 rounded-md self-start sm:self-center">
                  <Calendar className="w-3 h-3 inline mr-1 text-blue-400" />
                  {edu.duration}
                </span>
              </div>
              <p className="text-xs font-mono font-bold uppercase text-slate-300">
                {edu.degree} — {edu.field}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-700/80">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1">
                COURSEWORK & SKILLS:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {edu.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-slate-800 text-slate-200 border border-slate-700 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
