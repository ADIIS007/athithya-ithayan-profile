import React from 'react';
import { Code, Terminal, Target } from 'lucide-react';
import { ProfileData } from '../data/profileData';

interface Props {
  profile: ProfileData;
}

export const AboutSection: React.FC<Props> = ({ profile }) => {
  return (
    <section id="about" className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-6 sm:p-8 my-6 text-slate-100">
      <div className="mb-4">
        <h2 className="font-mono text-xs font-bold uppercase text-blue-400 tracking-wider mb-1">
          // ABOUT & CURRENT FOCUS
        </h2>
        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          Building in Stealth
        </h3>
      </div>

      <div className="text-base leading-relaxed text-slate-300 font-sans">
        <p className="font-medium text-slate-200">
          {profile.about}
        </p>
      </div>

      {/* Core Technical Highlights */}
      <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 flex items-start gap-3">
          <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-mono text-xs font-bold uppercase text-white">Competitive Coding</h4>
            <p className="text-xs text-slate-400 mt-0.5">LeetCode 1725 Rating (Top Percentile)</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 flex items-start gap-3">
          <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-mono text-xs font-bold uppercase text-white">GATE CS & DA</h4>
            <p className="text-xs text-slate-400 mt-0.5">Top 98.5%+ Percentile Nationwide in GATE CS & DA</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 flex items-start gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
            <Code className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-mono text-xs font-bold uppercase text-white">Backend & IAM</h4>
            <p className="text-xs text-slate-400 mt-0.5">Distributed Microservices & IAM Automation</p>
          </div>
        </div>

      </div>
    </section>
  );
};

