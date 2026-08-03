import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { ProfileData } from '../data/profileData';

interface Props {
  profile: ProfileData;
}

export const SkillsSection: React.FC<Props> = ({ profile }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allCategories = ['All', ...profile.skills.map((s) => s.category)];

  // Flatten all skills with category
  const allSkillsList = profile.skills.flatMap((catGroup) =>
    catGroup.list.map((skill) => ({
      name: skill,
      category: catGroup.category
    }))
  );

  const filteredSkills = allSkillsList.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6 sm:p-8 my-6 text-slate-100">
      
      {/* Header & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <h2 className="font-mono text-xs font-bold uppercase text-blue-400 tracking-tighter mb-1">
            // TECHNICAL PROFICIENCIES
          </h2>
          <h3 className="text-xl font-black uppercase text-white tracking-tight">
            Skills & Technical Stack ({allSkillsList.length})
          </h3>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="FILTER SKILLS..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 text-xs font-mono bg-slate-800 border border-slate-700 text-white placeholder-slate-400 uppercase focus:outline-none focus:border-blue-500 rounded-lg"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-800 pb-3">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 text-[11px] font-mono font-bold uppercase transition-all rounded-md ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-300 border border-slate-700 hover:text-white'
            }`}
          >
            {cat} {cat === 'All' && `(${allSkillsList.length})`}
          </button>
        ))}
      </div>

      {/* Skills Badges Grid */}
      <div className="flex flex-wrap gap-2">
        {filteredSkills.map((item, index) => {
          const isFeatured = [
            'Java', 'Spring Boot', 'Microservices Architecture', 'Low-Level Design',
            'Identity and Access Management (IAM)', 'Dart', 'Flutter',
            'Data Structures & Algorithms', 'LeetCode (Rating 1725)'
          ].includes(item.name);

          return (
            <span
              key={index}
              className={`px-3 py-1.5 text-[11px] font-mono font-bold uppercase border rounded-md ${
                isFeatured
                  ? 'bg-blue-600/90 text-white border-blue-500 shadow-xs'
                  : 'bg-slate-800/80 text-slate-200 border-slate-700 hover:border-slate-600'
              }`}
            >
              {item.name}
            </span>
          );
        })}

        {filteredSkills.length === 0 && (
          <p className="text-xs font-mono text-slate-400 py-4 uppercase">No matching skills found for "{searchQuery}".</p>
        )}
      </div>

    </section>
  );
};
