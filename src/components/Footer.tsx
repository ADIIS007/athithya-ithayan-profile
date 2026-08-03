import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { ProfileData } from '../data/profileData';

interface Props {
  profile: ProfileData;
  onOpenContactModal: () => void;
}

export const Footer: React.FC<Props> = ({ profile, onOpenContactModal }) => {
  return (
    <footer className="mt-12 border-t border-slate-800 bg-slate-950 text-white py-8 font-mono text-xs">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-black flex items-center justify-center text-xs uppercase shadow-sm">
              AI
            </div>
            <div>
              <p className="font-bold uppercase tracking-tight text-white">
                Athithya Ithayan
              </p>
              <p className="text-[10px] text-slate-300 uppercase font-semibold">
                Software Development Engineer @ Amazon
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 font-bold uppercase text-slate-200">
            <button onClick={onOpenContactModal} className="hover:text-blue-400 flex items-center gap-1.5 transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-400" /> Contact
            </button>
            <span className="text-slate-700">•</span>
            <a href={profile.contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 flex items-center gap-1.5 transition-colors">
              <Linkedin className="w-3.5 h-3.5 text-blue-400" /> LinkedIn
            </a>
          </div>

          <p className="text-[10px] text-slate-400 uppercase font-semibold">
            © {new Date().getFullYear()} ATHITHYA ITHAYAN. ALL RIGHTS RESERVED.
          </p>

        </div>
      </div>
    </footer>
  );
};
