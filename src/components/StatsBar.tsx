import React from 'react';
import { ProfileData } from '../data/profileData';

interface Props {
  profile: ProfileData;
}

export const StatsBar: React.FC<Props> = ({ profile }) => {
  const stats = [
    {
      label: 'CURRENT STATUS',
      value: 'STEALTH BUILDER',
      subtext: 'Ex - SDE I @ Amazon',
      bg: 'bg-slate-900 text-white border-slate-800',
      labelColor: 'text-emerald-400'
    },
    {
      label: 'GATE PERCENTILES',
      value: 'TOP 98.5%+',
      subtext: 'CS & DA Qualified (3x/2x)',
      bg: 'bg-slate-900 text-white border-slate-800',
      labelColor: 'text-blue-400'
    },
    {
      label: 'LEETCODE RATING',
      value: profile.keyStats.leetCodeRating.toString(),
      subtext: 'Algorithmic Problem Solving',
      bg: 'bg-blue-600 text-white border-blue-500',
      labelColor: 'text-blue-100'
    },
    {
      label: 'EX-PWC IAM',
      value: 'IAM DEVELOPER',
      subtext: 'Cyber Risk & Governance',
      bg: 'bg-slate-900 text-white border-slate-800',
      labelColor: 'text-slate-400'
    },
    {
      label: 'CORE TECH',
      value: 'JAVA · KOTLIN · FLUTTER',
      subtext: 'Spring Boot & Microservices',
      bg: 'bg-slate-900 text-white border-slate-800',
      labelColor: 'text-blue-400'
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 my-6">
      {stats.map((stat, i) => {
        return (
          <div
            key={i}
            className={`p-4 rounded-xl border ${stat.bg} shadow-xs flex flex-col justify-between transition-all`}
          >
            <p className={`text-[10px] font-mono font-bold uppercase tracking-wider ${stat.labelColor}`}>
              // {stat.label}
            </p>
            <div className="text-lg font-black uppercase tracking-tight my-1">
              {stat.value}
            </div>
            <div className="text-[10px] font-mono opacity-80 uppercase">
              {stat.subtext}
            </div>
          </div>
        );
      })}
    </div>
  );
};

