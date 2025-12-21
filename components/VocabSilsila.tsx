import React, { useState } from 'react';
import { History, GitCompare, TrendingUp, ChevronRight, GraduationCap, ArrowLeft } from 'lucide-react';
import { SilsilaCategory, SilsilaItem } from '../types';
import { STATIC_VOCAB_DATA } from '../data/vocabData';
import { WordCard } from './WordCard';

const CATEGORIES = [
  {
    id: SilsilaCategory.MASTER_COLLECTION,
    title: "Master Collection",
    description: "Detailed breakdown of high-frequency words. The ultimate read-only list.",
    icon: GraduationCap,
    gradient: "from-emerald-400 to-emerald-600",
    bg: "bg-emerald-50",
    text: "text-emerald-700"
  },
  {
    id: SilsilaCategory.PREVIOUS_YEAR,
    title: "Frequent Hits",
    description: "Words that appear repeatedly in major exams like GRE, UPSC, and CAT.",
    icon: History,
    gradient: "from-blue-400 to-blue-600",
    bg: "bg-blue-50",
    text: "text-blue-700"
  },
  {
    id: SilsilaCategory.CONFUSING,
    title: "Tricky Pairs",
    description: "Master tricky pairs like Affect/Effect, Implicit/Explicit.",
    icon: GitCompare,
    gradient: "from-orange-400 to-orange-600",
    bg: "bg-orange-50",
    text: "text-orange-700"
  },
  {
    id: SilsilaCategory.TRENDING,
    title: "Trending Now",
    description: "Sophisticated vocabulary from top editorials and current affairs.",
    icon: TrendingUp,
    gradient: "from-purple-400 to-purple-600",
    bg: "bg-purple-50",
    text: "text-purple-700"
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
      <div className="max-w-5xl mx-auto pb-12">
        <button 
            onClick={clearSelection} 
            className="mb-8 group flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-white text-slate-600 hover:text-slate-900 transition-all shadow-sm"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          <span className="font-medium text-sm">Back to Collections</span>
        </button>

        <div className="mb-8 pl-2">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-2">{selectedCategory}</h2>
            <p className="text-slate-500">Curated list of {items.length} words</p>
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
              
              // Simple Glass Card
              return (
                <div key={idx} className="glass-card rounded-2xl p-6 hover:shadow-xl hover:bg-white/80 transition-all duration-300 group border border-white/60 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-400 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-2xl font-serif font-bold text-slate-800 group-hover:text-brand-700 transition-colors">{item.word}</h3>
                        <span className="text-[10px] font-bold px-2 py-1 bg-slate-900/5 text-slate-600 rounded-full uppercase tracking-wide border border-slate-200/50">{item.context}</span>
                    </div>
                    <div className="text-slate-600 whitespace-pre-line leading-relaxed text-sm font-medium">
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
    <div className="max-w-5xl mx-auto pb-12">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-5xl font-serif font-bold text-slate-900">Vocab Silsila</h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Curated collections to fast-track your learning. 
            <br className="hidden md:block"/>Explore frequent hits, tricky pairs, and trending words.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
        {CATEGORIES.map((cat) => (
          <div 
            key={cat.id}
            onClick={() => handleSelect(cat.id)}
            className="group relative bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 cursor-pointer hover:bg-white/70 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-900/5 overflow-hidden hover:-translate-y-1"
          >
            {/* Background Gradient Blob */}
            <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${cat.gradient} rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`}></div>
            
            <div className="relative z-10 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${cat.bg} ${cat.text}`}>
                    <cat.icon size={28} />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-brand-900 transition-colors">{cat.title}</h3>
                
                <p className="text-slate-500 leading-relaxed mb-8 flex-1">
                    {cat.description}
                </p>
                
                <div className="flex items-center text-sm font-bold text-slate-900 group-hover:gap-3 gap-1 transition-all">
                    Open Collection <ChevronRight size={16} className="text-brand-500" />
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};