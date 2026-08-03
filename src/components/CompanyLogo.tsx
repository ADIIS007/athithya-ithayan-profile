import React from 'react';
import { Building2, ShieldCheck, Code2, GraduationCap, Award, Cpu, BookOpen } from 'lucide-react';

interface Props {
  logoKey: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CompanyLogo: React.FC<Props> = ({ logoKey, className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-20 h-20 text-lg'
  }[size];

  switch (logoKey.toLowerCase()) {
    case 'amazon':
      return (
        <div className={`${sizeClasses} rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center font-bold tracking-wider shrink-0 shadow-sm ${className}`}>
          <span className="font-extrabold tracking-tighter text-amber-600 dark:text-amber-400">amzn</span>
        </div>
      );
    case 'pwc':
      return (
        <div className={`${sizeClasses} rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold shrink-0 shadow-sm ${className}`}>
          <ShieldCheck className="w-1/2 h-1/2" />
        </div>
      );
    case 'chaturait':
      return (
        <div className={`${sizeClasses} rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold shrink-0 shadow-sm ${className}`}>
          <Code2 className="w-1/2 h-1/2" />
        </div>
      );
    case 'cvr':
      return (
        <div className={`${sizeClasses} rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0 shadow-sm ${className}`}>
          <GraduationCap className="w-1/2 h-1/2" />
        </div>
      );
    case 'kv':
      return (
        <div className={`${sizeClasses} rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold shrink-0 shadow-sm ${className}`}>
          <BookOpen className="w-1/2 h-1/2" />
        </div>
      );
    case 'wipro':
      return (
        <div className={`${sizeClasses} rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold shrink-0 shadow-sm ${className}`}>
          <Award className="w-1/2 h-1/2" />
        </div>
      );
    case 'gfg':
      return (
        <div className={`${sizeClasses} rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 flex items-center justify-center font-bold shrink-0 shadow-sm ${className}`}>
          <Code2 className="w-1/2 h-1/2" />
        </div>
      );
    case 'gate':
      return (
        <div className={`${sizeClasses} rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold shrink-0 shadow-sm ${className}`}>
          <Cpu className="w-1/2 h-1/2" />
        </div>
      );
    default:
      return (
        <div className={`${sizeClasses} rounded-xl bg-slate-500/10 border border-slate-500/20 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold shrink-0 shadow-sm ${className}`}>
          <Building2 className="w-1/2 h-1/2" />
        </div>
      );
  }
};
