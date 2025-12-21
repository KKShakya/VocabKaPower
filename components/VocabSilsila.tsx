import React, { useState } from 'react';
import { History, GitCompare, TrendingUp, ChevronRight, GraduationCap } from 'lucide-react';
import { SilsilaCategory, SilsilaItem } from '../types';
import { STATIC_VOCAB_DATA } from '../data/vocabData';
import { WordCard } from './WordCard';

const CATEGORIES = [
  {
    id: SilsilaCategory.MASTER_COLLECTION,
    title: "Master Collection",
    description: "Detailed breakdown of high-frequency words. The ultimate read-only list.",
    icon: GraduationCap,
    color: "bg-emerald-600",
  },
  {
    id: SilsilaCategory.PREVIOUS_YEAR,
    title: "Previous Year / Frequent",
    description: "Words that appear repeatedly in major exams like GRE, UPSC, and CAT.",
    icon: History,
    color: "bg-blue-500",
  },
  {
    id: SilsilaCategory.CONFUSING,
    title: "Commonly Confusing",
    description: "Master tricky pairs like Affect/Effect, Implicit/Explicit.",
    icon: GitCompare,
    color: "bg-orange-500",
  },
  {
    id: SilsilaCategory.TRENDING,
    title: "Trending Words",
    description: "Sophisticated vocabulary from top editorials and current affairs.",
    icon: TrendingUp,
    color: "bg-purple-500",
  },
];

export const VocabSilsila: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SilsilaCategory | null>(null);
  const [items, setItems] = useState<SilsilaItem[]>([]);

  const handleSelect = (category: SilsilaCategory) => {
    setSelectedCategory(category);
    setItems(STATIC_VOCAB_DATA[category] || []);
  };

  const clearSelection = () => {
    setSelectedCategory(null);
    setItems([]);
  };

  if (selectedCategory) {
    return (
      <div className="max-w-4xl mx-auto">
        <button onClick={clearSelection} className="mb-6 text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium text-sm transition-colors">
          <ChevronRight className="rotate-180" size={16} /> Back to Collections
        </button>

        <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-slate-900">{selectedCategory}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, idx) => {
              if (item.type === 'detailed') {
                return (
                  <div key={idx} className="h-full">
                     <WordCard data={item.data} imageUrl={null} />
                  </div>
                );
              }
              
              // Simple Card
              return (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group h-full">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-brand-600 transition-colors">{item.word}</h3>
                        <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded uppercase tracking-wide">{item.context}</span>
                    </div>
                    <div className="text-slate-600 whitespace-pre-line leading-relaxed">
                        {item.definition}
                    </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Vocab Silsila</h2>
        <p className="text-slate-500">Curated collections to fast-track your learning. Read-only static data.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CATEGORIES.map((cat) => (
          <div 
            key={cat.id}
            onClick={() => handleSelect(cat.id)}
            className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden cursor-pointer group hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`${cat.color} h-2 w-full`}></div>
            <div className="p-8">
              <div className={`h-12 w-12 rounded-xl mb-6 flex items-center justify-center ${cat.color} bg-opacity-10 text-opacity-100`}>
                <cat.icon className={cat.color.replace('bg-', 'text-')} size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {cat.description}
              </p>
              <div className="flex items-center text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
                Open Collection <ChevronRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};