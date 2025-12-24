
import React, { useState, useMemo } from 'react';
import { History, GitCompare, TrendingUp, ChevronRight, GraduationCap, ArrowLeft, Smile, CloudRain, Flame, Shield, Skull, HelpCircle, Zap, Coffee, Quote, Gavel, Timer } from 'lucide-react';
import { SilsilaCategory, SilsilaItem } from '../types';
import { STATIC_VOCAB_DATA } from '../data/vocabData';
import { STATIC_NOTEBOOK_DATA } from '../data/staticNotebookData';
import { WordCard } from './WordCard';

// Define Categories for Master Collection
const EMOTION_MAP: Record<string, string[]> = {
    "Joy & Bliss": ["Elation", "Felicity", "Euphoric", "Rapturous", "Winsome", "Cheerful", "Jubilant", "Delighted", "Beatific", "Exuberant", "Ebullient"],
    "Gloom & Despair": ["Harrowing", "Sullen", "Dejected", "Forlorn", "Wretched", "Melancholy", "Despondent", "Woeful", "Morose", "Bleak"],
    "Calm & Composed": ["Serene", "Halcyon", "Stoic", "Impassive", "Tranquil", "Salubrious", "Placid"],
    "Fury & Irritation": ["Ire", "Flustered", "Vexed", "Irate", "Hostile", "Churlish", "Loutish"],
    "Smart & Sharp": ["Erudite", "Adroit", "Dexterous", "Pragmatic", "Riveting", "Solvency", "Emulate", "Efficacious", "Prolific", "Profound"],
    "Weak & Dull": ["Lax", "Lethargic", "Insipid", "Obtuse", "Sedentary", "Abortive", "Vagabond"],
    "Fear & Doubt": ["Trepidation", "Apprehension", "Skeptical", "Perturb"],
    "Noble & Good": ["Majestic", "Propitious", "Magnanimous", "Benign", "Sanguine", "Mellifluous"],
    "Dark & Negative": ["Callous", "Rancid", "Envy", "Repulsed", "Diabolical", "Heinous", "Fiendish", "Atrocious", "Virulent", "Usurp", "Silos", "Dogma", "Doctrine", "Vain", "Pompous", "Indulgent"],
    "Power & Politics": ["Prerogative", "Perquisite", "Sanction", "Leeway", "Latitude", "Deposition", "Abdication", "Impeachment", "Disavowal", "Ratified", "Repudiate", "Abrogate", "Concomitant", "Credence"],
    "Time & Motion": ["Advent", "Inception", "Cessation", "Peregrine", "Endemic", "Sporadic", "Erratic"]
};

const EMOTION_CONFIG: Record<string, { icon: React.ElementType, color: string, bg: string }> = {
    "Joy & Bliss": { icon: Smile, color: "text-amber-600", bg: "bg-amber-100" },
    "Gloom & Despair": { icon: CloudRain, color: "text-slate-600", bg: "bg-slate-200" },
    "Calm & Composed": { icon: Shield, color: "text-cyan-600", bg: "bg-cyan-100" },
    "Fury & Irritation": { icon: Flame, color: "text-red-600", bg: "bg-red-100" },
    "Smart & Sharp": { icon: Zap, color: "text-indigo-600", bg: "bg-indigo-100" },
    "Weak & Dull": { icon: Coffee, color: "text-stone-600", bg: "bg-stone-200" },
    "Fear & Doubt": { icon: HelpCircle, color: "text-violet-600", bg: "bg-violet-100" },
    "Noble & Good": { icon: GraduationCap, color: "text-emerald-600", bg: "bg-emerald-100" },
    "Dark & Negative": { icon: Skull, color: "text-rose-900", bg: "bg-rose-200" },
    "Power & Politics": { icon: Gavel, color: "text-blue-800", bg: "bg-blue-200" },
    "Time & Motion": { icon: Timer, color: "text-teal-700", bg: "bg-teal-200" }
};

const CATEGORIES = [
  {
    id: SilsilaCategory.MASTER_COLLECTION,
    title: "Master Collection",
    description: "Detailed breakdown categorized by emotions (Happy, Sad, Calm, etc).",
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
  {
    id: SilsilaCategory.IDIOMS,
    title: "Idioms & Phrases",
    description: "Unlock the figurative meaning of common expressions.",
    icon: Quote,
    gradient: "from-pink-400 to-pink-600",
    bg: "bg-pink-50",
    text: "text-pink-700"
  },
];

export const VocabSilsila: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SilsilaCategory | null>(null);
  const [activeEmotion, setActiveEmotion] = useState<string>("Joy & Bliss");
  const [items, setItems] = useState<SilsilaItem[]>([]);

  const handleSelect = (category: SilsilaCategory) => {
    setSelectedCategory(category);
    if (category !== SilsilaCategory.MASTER_COLLECTION) {
        setItems(STATIC_VOCAB_DATA[category] || []);
    }
  };

  const clearSelection = () => {
    setSelectedCategory(null);
    setItems([]);
  };

  // Filter items for Master Collection based on active emotion
  const masterCollectionItems = useMemo(() => {
     if (selectedCategory !== SilsilaCategory.MASTER_COLLECTION) return [];
     
     const targetWords = EMOTION_MAP[activeEmotion] || [];
     return STATIC_NOTEBOOK_DATA.filter(word => targetWords.includes(word.word));
  }, [selectedCategory, activeEmotion]);

  if (selectedCategory) {
    // --- MASTER COLLECTION VIEW ---
    if (selectedCategory === SilsilaCategory.MASTER_COLLECTION) {
        return (
            <div className="max-w-4xl mx-auto pb-12">
                <button 
                    onClick={clearSelection} 
                    className="mb-6 group flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-white text-slate-600 hover:text-slate-900 transition-all shadow-sm"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
                    <span className="font-medium text-sm">Back to Collections</span>
                </button>

                <div className="mb-8 text-center md:text-left">
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-2">Master Collection</h2>
                    <p className="text-slate-500">Explore vocabulary through feelings and traits.</p>
                </div>

                {/* Emotion Tabs */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start">
                    {Object.keys(EMOTION_MAP).map((emotion) => {
                        const config = EMOTION_CONFIG[emotion];
                        const Icon = config.icon;
                        const isActive = activeEmotion === emotion;
                        
                        return (
                            <button
                                key={emotion}
                                onClick={() => setActiveEmotion(emotion)}
                                className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 border ${
                                    isActive 
                                    ? 'bg-white shadow-md border-brand-200 ring-2 ring-brand-100 scale-105' 
                                    : 'bg-white/40 hover:bg-white/70 border-transparent hover:shadow-sm'
                                }`}
                            >
                                <div className={`p-1.5 rounded-lg ${config.bg} ${config.color}`}>
                                    <Icon size={16} />
                                </div>
                                <span className={`font-semibold text-sm ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                                    {emotion}
                                </span>
                            </button>
                        )
                    })}
                </div>

                {/* List View */}
                <div className="flex flex-col gap-3 animate-fade-in">
                    {masterCollectionItems.map((item, idx) => (
                        <div key={idx} className="bg-white/70 hover:bg-white backdrop-blur-sm border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all shadow-sm hover:shadow-md group">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-1 bg-gradient-to-b from-brand-400 to-accent-500 rounded-full"></div>
                                <div>
                                    <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                                        {item.word}
                                    </h3>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 inline-block mt-1">
                                        {item.partOfSpeech}
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 sm:text-right pl-5 sm:pl-0 border-l-2 sm:border-l-0 border-slate-100">
                                <p className="text-slate-700 font-medium leading-relaxed">{item.meaning}</p>
                            </div>
                        </div>
                    ))}
                    {masterCollectionItems.length === 0 && (
                        <div className="text-center py-12 text-slate-400">
                            No words found for this category.
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // --- OTHER COLLECTIONS VIEW ---
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
