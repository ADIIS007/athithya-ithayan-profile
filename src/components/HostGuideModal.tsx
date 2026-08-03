import React, { useState } from 'react';
import { Copy, Check, Terminal, Code2, Flame } from 'lucide-react';
import { ProfileData } from '../data/profileData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
}

export const HostGuideModal: React.FC<Props> = ({ isOpen, onClose, profile }) => {
  const [copiedConfig, setCopiedConfig] = useState(false);
  const [copiedBuildCmd, setCopiedBuildCmd] = useState(false);
  const [activeTab, setActiveTab] = useState<'firebase' | 'vercel' | 'github'>('firebase');

  if (!isOpen) return null;

  const handleCopyConfig = () => {
    navigator.clipboard.writeText(JSON.stringify(profile, null, 2));
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2000);
  };

  const handleCopyBuildCmd = () => {
    navigator.clipboard.writeText('npm run build && npx firebase-tools deploy');
    setCopiedBuildCmd(true);
    setTimeout(() => setCopiedBuildCmd(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 max-w-xl w-full p-6 shadow-2xl relative space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="font-mono text-xs font-bold uppercase text-amber-500 flex items-center gap-1.5 tracking-wider mb-1">
              <Flame className="w-4 h-4 fill-amber-500" />
              FIREBASE STATIC HOSTING
            </h3>
            <h4 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Deployment Instructions
            </h4>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-900 dark:hover:text-white font-mono text-xs font-bold px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800"
          >
            Close ✕
          </button>
        </div>

        {/* Platform Selector Tabs */}
        <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setActiveTab('firebase')}
            className={`flex-1 py-2 font-mono text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'firebase'
                ? 'bg-amber-500 text-slate-950 font-extrabold shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            Firebase Hosting
          </button>
          <button
            onClick={() => setActiveTab('vercel')}
            className={`flex-1 py-2 font-mono text-xs font-bold rounded-lg transition-all ${
              activeTab === 'vercel'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Vercel
          </button>
          <button
            onClick={() => setActiveTab('github')}
            className={`flex-1 py-2 font-mono text-xs font-bold rounded-lg transition-all ${
              activeTab === 'github'
                ? 'bg-slate-900 text-white dark:bg-slate-800 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            GitHub Pages
          </button>
        </div>

        {/* Tab Content Instructions */}
        <div className="space-y-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700/80 text-xs font-mono">
          {activeTab === 'firebase' && (
            <div className="space-y-2.5">
              <h4 className="font-bold text-xs uppercase text-amber-500 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                Step-by-step Firebase Static Hosting
              </h4>
              <ol className="list-decimal pl-4 space-y-1.5 text-slate-700 dark:text-slate-300">
                <li>Install Firebase CLI: <code className="bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded text-slate-900 dark:text-white">npm install -g firebase-tools</code></li>
                <li>Login to Firebase: <code className="bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded text-slate-900 dark:text-white">firebase login</code></li>
                <li>Initialize Hosting: <code className="bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded text-slate-900 dark:text-white">firebase init hosting</code> (Select <code className="text-amber-500 font-bold">dist</code> as public folder)</li>
                <li>Build static output: <code className="bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded text-slate-900 dark:text-white">npm run build</code></li>
                <li>Deploy to live production: <code className="bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded text-slate-900 dark:text-white">firebase deploy</code></li>
              </ol>
            </div>
          )}

          {activeTab === 'vercel' && (
            <div className="space-y-2">
              <h4 className="font-bold text-xs uppercase text-blue-600 dark:text-blue-400">
                Vercel Deployment
              </h4>
              <ol className="list-decimal pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                <li>Push repository to your GitHub account.</li>
                <li>Import on <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-blue-500 underline">vercel.com</a>.</li>
                <li>Select Vite default settings and click Deploy.</li>
              </ol>
            </div>
          )}

          {activeTab === 'github' && (
            <div className="space-y-2">
              <h4 className="font-bold text-xs uppercase text-slate-900 dark:text-white">
                GitHub Pages
              </h4>
              <ol className="list-decimal pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                <li>Push code to public GitHub repository.</li>
                <li>Run build step: <code className="bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded">npm run build</code></li>
                <li>Deploy <code className="text-blue-500">dist/</code> folder to <code className="text-blue-500">gh-pages</code> branch.</li>
              </ol>
            </div>
          )}
        </div>

        {/* Build Command Box */}
        <div className="flex items-center justify-between p-3.5 bg-slate-900 text-white rounded-xl font-mono text-xs border border-slate-800 shadow-inner">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Terminal className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-slate-200 font-semibold truncate">npm run build && firebase deploy</span>
          </div>
          <button
            onClick={handleCopyBuildCmd}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-[10px] font-bold uppercase flex items-center gap-1 border border-slate-700 shrink-0 transition-all"
          >
            {copiedBuildCmd ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            {copiedBuildCmd ? 'Copied' : 'Copy'}
          </button>
        </div>

        {/* Export JSON Profile Data */}
        <div className="pt-2 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 font-mono">
          <button
            onClick={handleCopyConfig}
            className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs uppercase flex items-center gap-1.5 border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
          >
            {copiedConfig ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Code2 className="w-3.5 h-3.5" />}
            {copiedConfig ? 'Copied Profile Data' : 'Export Profile JSON'}
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-md transition-all"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};

