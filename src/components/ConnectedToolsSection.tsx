import React from 'react';
import { CheckCircle } from 'lucide-react';
import { ProfileData } from '../data/profileData';

interface Props {
  profile: ProfileData;
}

export const ConnectedToolsSection: React.FC<Props> = ({ profile }) => {
  return (
    <section id="tools" className="bg-slate-900/90 border border-slate-700/80 rounded-2xl shadow-xl p-6 sm:p-8 my-6 text-slate-100 flex flex-col justify-between">
      <div>
        <div className="mb-6 pb-4 border-b border-slate-700/80">
          <h2 className="font-mono text-xs font-bold uppercase text-blue-400 tracking-wider mb-1">
            // INTEGRATIONS & TECH STACK
          </h2>
          <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-white tracking-tight">
            Connected Tools
          </h3>
        </div>

        <div className="space-y-3">
          {profile.connectedApps.map((app, i) => (
            <div
              key={i}
              className="p-4 bg-slate-800/80 border border-slate-700 rounded-xl flex items-center justify-between hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-700 text-blue-400 font-mono font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  {app.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase text-white flex items-center gap-2">
                    {app.name}
                  </h4>
                  <p className="text-xs font-mono text-slate-300 mt-0.5">
                    {app.desc}
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-600/80 flex items-center gap-1 shrink-0">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                ONLINE
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
