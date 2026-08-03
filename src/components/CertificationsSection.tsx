import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { ProfileData } from '../data/profileData';

interface Props {
  profile: ProfileData;
}

export const CertificationsSection: React.FC<Props> = ({ profile }) => {
  return (
    <section id="certifications" className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 my-6 shadow-xl">
      
      <div className="mb-6 pb-4 border-b border-slate-800">
        <h2 className="font-mono text-xs font-bold uppercase text-blue-400 tracking-wider mb-1">
          // CERTIFICATIONS & QUALIFICATIONS ({profile.certifications.length})
        </h2>
        <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-white tracking-tight">
          Verified Academic & Industry Proofs
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profile.certifications.map((cert, index) => (
          <div
            key={cert.id}
            className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between hover:border-slate-600 transition-all space-y-3"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-blue-400">
                  [{String(index + 1).padStart(2, '0')}]
                </span>
                <span className="font-mono text-[11px] text-slate-400 uppercase">
                  {cert.issuedDate}
                </span>
              </div>
              <h4 className="font-bold text-base text-white flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-400 shrink-0" />
                {cert.title}
              </h4>
              <p className="text-xs font-mono text-slate-400 mt-1 uppercase">
                {cert.issuer}
              </p>

              {(cert.rank || cert.percentile) && (
                <div className="mt-2.5 inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700 text-xs font-mono">
                  {cert.rank && <span className="text-white font-bold">{cert.rank}</span>}
                  {cert.rank && cert.percentile && <span className="text-slate-600">•</span>}
                  {cert.percentile && <span className="text-emerald-400 font-semibold">{cert.percentile}</span>}
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-700/60">
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase rounded-md bg-slate-900 text-slate-300 border border-slate-700"
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

