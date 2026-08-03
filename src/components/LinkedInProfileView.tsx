import React, { useState } from 'react';
import { 
  MapPin, 
  Linkedin, 
  Mail, 
  CheckCircle2, 
  Eye, 
  TrendingUp, 
  Search, 
  Lock, 
  Plus, 
  Sparkles, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Building2,
  GraduationCap,
  Award,
  Globe,
  HeartHandshake
} from 'lucide-react';
import { ProfileData } from '../data/profileData';
import { CompanyLogo } from './CompanyLogo';

interface Props {
  profile: ProfileData;
  onOpenContactModal: () => void;
  onOpenEditModal: () => void;
}

export const LinkedInProfileView: React.FC<Props> = ({
  profile,
  onOpenContactModal,
  onOpenEditModal
}) => {
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  return (
    <div className="w-full max-w-full mx-auto space-y-4 py-4 text-slate-100">
      
      {/* 1. Main Header Profile Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs">
        
        {/* Cover Image */}
        <div className="h-44 sm:h-52 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 relative">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-15"></div>
        </div>

        {/* Profile Info */}
        <div className="px-6 pb-6 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-16 sm:-mt-20 mb-4 gap-4">
            
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-900 bg-gradient-to-tr from-amber-500 to-orange-600 text-white font-black text-4xl flex items-center justify-center shadow-lg">
              AI
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={onOpenContactModal}
                className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm"
              >
                Open to
              </button>
              <button
                onClick={onOpenEditModal}
                className="px-4 py-1.5 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 font-semibold text-xs"
              >
                Enhance profile
              </button>
              <button
                onClick={onOpenEditModal}
                className="px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-xs"
              >
                Add section
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-2">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {profile.name}
                </h1>
                <span className="text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                  {profile.pronouns}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-snug font-normal">
                {profile.headline}
              </p>

              <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 pt-1">
                <p>{profile.location} · <span className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer" onClick={onOpenContactModal}>Contact info</span></p>
                <p className="font-medium text-slate-700 dark:text-slate-300">
                  {profile.followers.toLocaleString()} followers · <span className="text-blue-600 dark:text-blue-400">{profile.connections} connections</span>
                </p>
              </div>
            </div>

            {/* Right Stack */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                <CompanyLogo logoKey="amazon" size="sm" />
                <span>Amazon</span>
              </div>
              <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white pt-1">
                <CompanyLogo logoKey="cvr" size="sm" />
                <span>CVR College of Engineering, Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Verified Technical Proofs Box */}
          <div className="mt-5 p-4 rounded-xl bg-slate-900 text-white text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-blue-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                GATE Certified Ranks & Scores
              </span>
              <a href={profile.contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline flex items-center gap-1">
                GitHub @ADIIS007 <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-slate-300">
              GATE 2024 DA AIR 1955 (98.5%+ percentile) · GATE 2024 CS AIR 2534 · GATE 2025 CS AIR 2540
            </p>
          </div>

        </div>
      </div>

      {/* 2. Analytics Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Analytics</h2>
            <p className="text-xs text-slate-500 flex items-center gap-1">
              <Lock className="w-3.5 h-3.5" /> Private to you
            </p>
          </div>
          <span className="text-xs text-blue-600 font-semibold cursor-pointer hover:underline">Show all analytics</span>
        </div>

        <div className="grid grid-cols-3 gap-4 border-t border-slate-100 dark:border-slate-800 pt-4 text-xs">
          <div>
            <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-bold text-lg">
              <Eye className="w-4 h-4 text-slate-500" /> {profile.analytics.profileViews} profile views
            </div>
            <p className="text-slate-500 text-[11px]">Discover who’s viewed your profile.</p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-bold text-lg">
              <TrendingUp className="w-4 h-4 text-slate-500" /> {profile.analytics.postImpressions} post impression
            </div>
            <p className="text-slate-500 text-[11px]">Check out who’s engaging with your posts.</p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-bold text-lg">
              <Search className="w-4 h-4 text-slate-500" /> {profile.analytics.searchAppearances} search appearances
            </div>
            <p className="text-slate-500 text-[11px]">Past 7 days · See how often you appear in search.</p>
          </div>
        </div>
      </div>

      {/* 3. About Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">About</h2>
        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
          {aboutExpanded ? profile.about : `${profile.about.slice(0, 320)}...`}
        </p>
        <button
          onClick={() => setAboutExpanded(!aboutExpanded)}
          className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
        >
          {aboutExpanded ? 'Show less' : '...more'}
        </button>
      </div>

      {/* 4. Activity Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Activity</h2>
            <p className="text-xs text-blue-600 font-semibold">{profile.followers.toLocaleString()} followers</p>
          </div>
          <button className="px-3 py-1 rounded-full border border-blue-600 text-blue-600 font-semibold text-xs">
            Create a post
          </button>
        </div>

        <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-3 text-xs">
          {profile.activity.map((act, i) => (
            <div key={i} className="pb-2 border-b border-slate-50 dark:border-slate-800/50 last:border-0">
              <p className="font-medium text-slate-900 dark:text-white">{act.text}</p>
              <p className="text-slate-400 text-[11px]">• {act.time}</p>
              <p className="text-slate-600 dark:text-slate-400 mt-1">{act.target}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Experience Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-6">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Experience</h2>

        <div className="space-y-6">
          {profile.experiences.map((exp) => (
            <div key={exp.id} className="flex items-start gap-4 text-xs">
              <CompanyLogo logoKey={exp.companyLogoKey} size="md" />
              <div className="space-y-1 flex-1">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">{exp.role}</h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium">{exp.company} · {exp.type}</p>
                <p className="text-slate-500">{exp.duration}</p>
                <p className="text-slate-500">{exp.location} · {exp.workMode}</p>
                {exp.domain && <p className="text-slate-600 dark:text-slate-400 font-medium pt-1">{exp.domain}</p>}
                <p className="text-slate-700 dark:text-slate-300 pt-1 leading-relaxed">{exp.description}</p>
                
                {/* Sub-roles */}
                {exp.subRoles && (
                  <div className="pl-3 border-l-2 border-slate-200 dark:border-slate-700 mt-2 space-y-2">
                    {exp.subRoles.map((sr, idx) => (
                      <div key={idx}>
                        <p className="font-bold text-slate-900 dark:text-white">{sr.role}</p>
                        <p className="text-slate-500 text-[11px]">{sr.duration}</p>
                        <p className="text-slate-600 dark:text-slate-400 mt-0.5">{sr.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Education Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Education</h2>
        <div className="space-y-4">
          {profile.education.map((edu) => (
            <div key={edu.id} className="flex items-start gap-4 text-xs">
              <CompanyLogo logoKey={edu.logoKey} size="md" />
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">{edu.institution}</h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium">{edu.degree}, {edu.field}</p>
                <p className="text-slate-500">{edu.duration}</p>
                <p className="text-slate-600 dark:text-slate-400 pt-1">Skills: {edu.skills.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Connected Apps Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Connected apps</h2>
        <p className="text-xs text-slate-500">Add the products you use to stand out and get more profile views.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2">
          {profile.connectedApps.map((app, i) => (
            <div key={i} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                {app.name[0]}
              </span>
              {app.name}
            </div>
          ))}
        </div>
      </div>

      {/* 8. Licenses & Certifications */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Licenses & certifications ({profile.certifications.length})</h2>
        <div className="space-y-4">
          {profile.certifications.map((cert) => (
            <div key={cert.id} className="flex items-start gap-4 text-xs">
              <CompanyLogo logoKey={cert.logoKey} size="md" />
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">{cert.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium">{cert.issuer}</p>
                <p className="text-slate-500">Issued {cert.issuedDate}</p>
                <p className="text-slate-600 dark:text-slate-400 pt-1">Skills: {cert.skills.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 9. Skills Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Skills (34)</h2>
          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="text-xs font-semibold text-blue-600 cursor-pointer"
          >
            {showAllSkills ? 'Show less' : 'Show all 34 skills'}
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {profile.skills.flatMap(s => s.list).slice(0, showAllSkills ? 34 : 10).map((skill, i) => (
            <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* 10. Recommendations */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Recommendations</h2>
        <div className="flex gap-4 text-xs font-semibold text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-2">
          <span className="text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-white pb-2">Received (3)</span>
          <span>Given</span>
        </div>
        <p className="text-xs text-slate-500 italic pt-2">
          Recommendations visible to others will appear here.
        </p>
      </div>

    </div>
  );
};
