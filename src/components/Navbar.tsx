import React, { useState } from 'react';
import { 
  Linkedin, 
  Flame, 
  Edit3, 
  Menu, 
  X,
  Sparkles,
  Mail
} from 'lucide-react';

interface Props {
  viewMode: 'executive' | 'linkedin';
  setViewMode: (mode: 'executive' | 'linkedin') => void;
  onOpenHostModal: () => void;
  onOpenEditModal: () => void;
  onOpenContactModal: () => void;
  linkedinUrl: string;
}

export const Navbar: React.FC<Props> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-colors">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand Name */}
          <div className="flex items-center gap-3">
            <a href="#top" className="flex items-center gap-2.5 group">
              <div className="w-8.5 h-8.5 rounded-lg bg-blue-600 flex items-center justify-center text-white font-mono font-black text-sm tracking-tighter group-hover:bg-blue-500 transition-colors shadow-sm">
                AI
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-base tracking-tight group-hover:text-blue-400 transition-colors">
                  Athithya Ithayan
                </span>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Building in stealth
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-800 bg-slate-900 px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col gap-2 py-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-xs font-mono uppercase font-bold text-slate-300 hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

