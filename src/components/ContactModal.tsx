import React, { useState } from 'react';
import { Mail, Linkedin, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { ProfileData } from '../data/profileData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
}

export const ContactModal: React.FC<Props> = ({ isOpen, onClose, profile }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border-2 border-slate-900 max-w-lg w-full p-6 shadow-2xl relative space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="font-mono text-xs font-bold uppercase text-blue-600 dark:text-blue-400 tracking-tighter mb-1">
              // DIRECT INQUIRY
            </h3>
            <h4 className="text-xl font-black uppercase text-slate-900 dark:text-white tracking-tight">
              Contact Athithya Ithayan
            </h4>
          </div>
          <button
            onClick={onClose}
            className="text-slate-900 dark:text-slate-100 hover:text-blue-600 font-mono text-sm font-bold"
          >
            [CLOSE X]
          </button>
        </div>

        {/* Contact Info Quick Badges */}
        <div className="space-y-2 bg-slate-50 dark:bg-slate-800/50 p-3.5 border border-slate-200 dark:border-slate-700 text-xs">
          
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-mono text-slate-800 dark:text-slate-200 font-bold uppercase">
              <Mail className="w-4 h-4 text-blue-600 shrink-0" />
              {profile.contactInfo.email}
            </span>
            <button
              onClick={handleCopyEmail}
              className="px-2.5 py-1 font-mono text-[10px] font-bold uppercase bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 flex items-center gap-1 hover:border-blue-600"
            >
              {copiedEmail ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
              {copiedEmail ? 'Copied' : 'Copy'}
            </button>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-700">
            <span className="flex items-center gap-2 font-mono text-slate-800 dark:text-slate-200 font-bold uppercase truncate text-[11px]">
              <Linkedin className="w-4 h-4 text-blue-600 shrink-0" />
              linkedin.com/in/athithya-ithayan-4891151bb
            </span>
            <a
              href={profile.contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 font-mono text-[10px] font-bold uppercase bg-blue-600 text-white flex items-center gap-1 shrink-0"
            >
              <ExternalLink className="w-3 h-3" /> Visit
            </a>
          </div>

        </div>

        {/* Message Form */}
        {sentSuccess ? (
          <div className="p-4 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-center space-y-1 font-mono">
            <Check className="w-8 h-8 text-blue-600 mx-auto" />
            <p className="font-black text-xs uppercase text-slate-900 dark:text-white">Message Transmitted Successfully</p>
            <p className="text-[10px] uppercase text-slate-500">Athithya will respond via email shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 font-mono">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">// YOUR NAME</label>
                <input
                  type="text"
                  required
                  placeholder="NAME..."
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white uppercase focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">// YOUR EMAIL</label>
                <input
                  type="email"
                  required
                  placeholder="EMAIL..."
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white uppercase focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-600 dark:text-slate-400 mb-1">// MESSAGE CONTENT</label>
              <textarea
                required
                rows={3}
                placeholder="TYPE MESSAGE..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white uppercase focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold uppercase bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-xs font-bold uppercase bg-blue-600 text-white flex items-center gap-1.5 border border-blue-700"
              >
                <Send className="w-3.5 h-3.5" /> Send Message
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
