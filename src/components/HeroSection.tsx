import React from 'react';
import { 
  MapPin, 
  Linkedin, 
  Mail, 
  Award, 
  Code2, 
  Github,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { ProfileData } from '../data/profileData';

interface Props {
  profile: ProfileData;
  viewMode: 'executive' | 'linkedin';
  onOpenContactModal: () => void;
  onOpenEditModal: () => void;
}

export const HeroSection: React.FC<Props> = ({
  profile,
  onOpenContactModal
}) => {
  return (
    <section className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl relative overflow-hidden transition-all">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 space-y-6">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-800">
          
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                BUILDING IN STEALTH
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono">
                Ex - SDE I @ Amazon
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
              {profile.name}
            </h1>

            {/* Single Headline Banner Section */}
            <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-700/80 text-white font-mono text-xs sm:text-sm font-semibold flex items-center gap-2.5 shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span className="text-blue-400 font-bold shrink-0">&gt;</span>
              <span className="text-slate-100 font-bold tracking-tight">{profile.headline}</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                {profile.location}
              </span>
              <span>•</span>
              <span className="text-slate-300">
                {profile.exRoles}
              </span>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap sm:flex-col gap-2.5 shrink-0 self-start">
            <button
              onClick={onOpenContactModal}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold flex items-center gap-2 transition-all shadow-md"
            >
              <Mail className="w-4 h-4" />
              Contact Info
            </button>

            <a
              href={profile.contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-mono text-xs font-bold flex items-center gap-2 transition-all"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              LinkedIn Profile
            </a>

            <a
              href={profile.contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-mono text-xs font-bold flex items-center gap-2 transition-all"
            >
              <Github className="w-4 h-4 text-slate-300" />
              GitHub @ADIIS007
            </a>

            <a
              href={profile.contactInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-mono text-xs font-bold flex items-center justify-between gap-3 transition-all group"
            >
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span>LeetCode Profile</span>
                    <span className="px-1.5 py-0.5 text-[10px] bg-amber-500/20 text-amber-300 rounded font-bold">1725 Rating</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-normal">
                    Algorithmic Problem Solving
                  </div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 transition-colors shrink-0" />
            </a>
          </div>

        </div>

        {/* Verification & Key Academic Stats Row */}
        <div className="pt-2">
          {/* GATE Achievements */}
          <div className="space-y-2.5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-400" />
              GATE Examination Percentiles (Nationwide)
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-mono">
                <span className="text-slate-400 block text-[10px]">GATE 2024 DA</span>
                <span className="font-bold text-white text-sm">AIR 1955</span>
                <span className="text-emerald-400 font-semibold ml-2 text-xs">(Top 98.5%+ Percentile)</span>
              </div>

              <div className="px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-mono">
                <span className="text-slate-400 block text-[10px]">GATE 2024 CS</span>
                <span className="font-bold text-white text-sm">AIR 2534</span>
                <span className="text-emerald-400 font-semibold ml-2 text-xs">(Top 98.2%+ Percentile)</span>
              </div>

              <div className="px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-mono">
                <span className="text-slate-400 block text-[10px]">GATE 2025 CS</span>
                <span className="font-bold text-white text-sm">AIR 2540</span>
                <span className="text-emerald-400 font-semibold ml-2 text-xs">(Top 98.2%+ Percentile)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Verification Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          
          <div className="bg-slate-800/90 text-white p-4 rounded-xl border border-slate-700 font-mono text-xs space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-slate-700">
              <span className="font-bold uppercase text-blue-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                GATE QUALIFICATION PERCENTILES
              </span>
              <span className="text-[10px] text-slate-400">IIT CONDUCTED</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
              <div>
                <span className="text-slate-400 block text-[10px]">GATE 2024 DA</span>
                <p className="font-bold text-white">AIR 1955</p>
                <p className="text-emerald-400 text-[10px]">98.5%+ Percentile</p>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">GATE 2024 CS</span>
                <p className="font-bold text-white">AIR 2534</p>
                <p className="text-emerald-400 text-[10px]">98.2%+ Percentile</p>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">GATE 2025 CS</span>
                <p className="font-bold text-white">AIR 2540</p>
                <p className="text-emerald-400 text-[10px]">98.2%+ Percentile</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/90 text-white p-4 rounded-xl border border-slate-700 font-mono text-xs space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-slate-700">
              <span className="font-bold uppercase text-white flex items-center gap-1.5">
                <Github className="w-4 h-4 text-blue-400" />
                VERIFIED CODE REPOSITORIES (@ADIIS007)
              </span>
              <a href="https://github.com/ADIIS007" target="_blank" rel="noopener noreferrer" className="text-[10px] text-blue-400 uppercase font-bold flex items-center gap-0.5">
                Explore <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-[11px] text-slate-300">
              Showcasing backend microservices (Spring Boot, Java), mobile clients (Flutter/Dart), and Smart India Hackathon repositories.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};


