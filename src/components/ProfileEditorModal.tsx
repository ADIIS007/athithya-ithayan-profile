import React, { useState } from 'react';
import { Save, RotateCcw, Check } from 'lucide-react';
import { ProfileData } from '../data/profileData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onUpdateProfile: (updated: ProfileData) => void;
  onResetDefaults: () => void;
}

export const ProfileEditorModal: React.FC<Props> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  onResetDefaults
}) => {
  const [formData, setFormData] = useState<ProfileData>(profile);
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(formData);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border-2 border-slate-900 max-w-xl w-full p-6 shadow-2xl relative space-y-4 max-h-[90vh] overflow-y-auto font-mono">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="text-xs font-bold uppercase text-blue-600 dark:text-blue-400 tracking-tighter mb-1">
              // DATA MANAGEMENT
            </h3>
            <h4 className="text-xl font-black uppercase text-slate-900 dark:text-white tracking-tight">
              Edit Profile Attributes
            </h4>
          </div>
          <button
            onClick={onClose}
            className="text-slate-900 dark:text-slate-100 hover:text-blue-600 text-sm font-bold"
          >
            [CLOSE X]
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">// FULL NAME</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white uppercase focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label className="block font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">// PRONOUNS</label>
              <input
                type="text"
                value={formData.pronouns}
                onChange={(e) => setFormData({ ...formData, pronouns: e.target.value })}
                className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white uppercase focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">// HEADLINE</label>
            <textarea
              rows={2}
              value={formData.headline}
              onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
              className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white uppercase focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">// LOCATION</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white uppercase focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label className="block font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">// LEETCODE RATING</label>
              <input
                type="number"
                value={formData.keyStats.leetCodeRating}
                onChange={(e) => setFormData({
                  ...formData,
                  keyStats: { ...formData.keyStats, leetCodeRating: Number(e.target.value) }
                })}
                className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">// EXECUTIVE SUMMARY / BIO</label>
            <textarea
              rows={4}
              value={formData.about}
              onChange={(e) => setFormData({ ...formData, about: e.target.value })}
              className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 font-sans"
            />
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                onResetDefaults();
                onClose();
              }}
              className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs uppercase flex items-center gap-1 border border-slate-300 dark:border-slate-700 hover:border-red-500"
            >
              <RotateCcw className="w-3.5 h-3.5" /> RESET DEFAULTS
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold uppercase border border-slate-300 dark:border-slate-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white font-bold uppercase flex items-center gap-1.5 border border-blue-700"
              >
                {saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                {saved ? 'SAVED!' : 'SAVE CHANGES'}
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
