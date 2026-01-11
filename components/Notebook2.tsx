
import React, { useState } from 'react';
import { WordAnalysis } from '../types';
import { Search, Book, Sparkles, Clapperboard, X, Minus } from 'lucide-react';
import { WordCard } from './WordCard';
import { STATIC_NOTEBOOK_DATA_2 } from '../data/staticNotebookData2';

export const Notebook2: React.FC = () => {
  const [selectedWord, setSelectedWord] = useState<WordAnalysis | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWords = STATIC_NOTEBOOK_DATA_2.filter(w => 
    w.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    w.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRandomWord = () => {
    if (STATIC_NOTEBOOK_DATA_2.length === 0) return;
    const random = STATIC_NOTEBOOK_DATA_2[Math.floor(Math.random() * STATIC_NOTEBOOK_DATA_2.length)];
    setSelectedWord(random);
  };

  const getGradient = (tone?: string) => {
    if (!tone) return "from-brand-500 to-accent-600";
    const lower = tone.toLowerCase();
    if (lower.includes('positive') || lower.includes('+')) return "from-emerald-400 to-teal-600";
    if (lower.includes('negative') || lower.includes('-')) return "from-rose-400 to-red-600";
    if (lower.includes('neutral') || lower.includes('0')) return "from-slate-400 to-slate-600";
    return "from-brand-500 to-accent-600";
  };

  const getIcon = (_: string | undefined) => {
    return <Clapperboard size={18} />;
  };

  return (
    <div className="max-w-7xl mx-auto pb-12">
       <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
        <div>
            <h2 className="text-3xl font-bold text-slate-900">Notebook 2</h2>
            <p className="text-slate-500">Supplementary collection ({STATIC_NOTEBOOK_DATA_2.length} words)</p>
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
            <button 
                onClick={handleRandomWord}
                className="p-3 rounded-xl bg-brand-50 text-brand-600 hover:bg-brand-100 border border-brand-200 transition-colors shadow-sm"
                title="Surprise Me (Random Word)"
            >
                <Sparkles size={20} />
            </button>
            <div className="relative flex-1 md:w-72">
                <input 
                    type="text" 
                    placeholder="Search Notebook 2..." 
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-3.5 text-slate-400" size={18} />
            </div>
        </div>
      </div>

      {/* Grid */}
      {filteredWords.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 flex flex-col items-center">
            <div className="bg-slate-50 p-6 rounded-full mb-4">
                <Book size={48} className="text-slate-300" />
            </div>
            <h3 className="text-lg font-semibold text-slate-700 mb-2">No words found</h3>
            <p className="text-slate-500 max-w-sm">Try a different search term or add words to the data file.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWords.map((word, idx) => (
                <div 
                    key={`${word.word}-${idx}`} 
                    onClick={() => setSelectedWord(word)}
                    className={`relative w-full rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden bg-gradient-to-br ${getGradient(word.tone)} p-6 text-white cursor-pointer transform transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col justify-between border border-white/20`}
                >
                    <div>
                        {/* --- HEADER: Word & Part of Speech --- */}
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <h1 className="text-3xl font-extrabold tracking-tight drop-shadow-sm capitalize break-words leading-none">
                            {word.word}
                            </h1>
                            <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm border border-white/20 shadow-sm shrink-0">
                            {word.partOfSpeech}
                            </span>
                        </div>

                        {/* --- BODY: The "Hook" (Glassmorphism Style) --- */}
                        {word.characterHook && (
                            <div className="bg-white/95 text-slate-800 rounded-2xl p-4 shadow-lg mb-4 transform transition group-hover:scale-[1.02] duration-300 border border-white/50 relative z-10">
                                {/* Hook Title (Character Name) */}
                                <div className="flex items-center justify-center gap-2 mb-2 text-indigo-600 font-bold text-sm border-b border-indigo-100 pb-2">
                                    {getIcon(word.characterHook)}
                                    <span className="line-clamp-1">{word.characterHook}</span>
                                </div>

                                {/* Hook Description (The "Why") */}
                                <p className="text-center text-slate-600 italic font-medium text-xs leading-relaxed line-clamp-4">
                                    "{word.hookWhy}"
                                </p>
                            </div>
                        )}
                    </div>

                    {/* --- FOOTER: Meaning --- */}
                    <div className="text-center opacity-90 relative z-10 mt-auto">
                        <p className="text-sm font-medium leading-relaxed line-clamp-3 text-white/90">
                        {word.meaning}
                        </p>
                    </div>

                    {/* Optional: Decorative Background Circle */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-125"></div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-black/10 rounded-full blur-2xl pointer-events-none"></div>
                </div>
            ))}
        </div>
      )}

      {/* Detail Modal */}
      {selectedWord && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 bg-slate-900/60 backdrop-blur-md animate-fade-in" onClick={() => setSelectedWord(null)}>
            
            {/* Mobile Minimize Button - Floating Bottom Right */}
            <button 
                onClick={(e) => { e.stopPropagation(); setSelectedWord(null); }}
                className="md:hidden fixed bottom-10 right-4 z-[120] w-8 h-8 bg-white text-slate-800 rounded-full shadow-xl flex items-center justify-center active:scale-60 transition-all border border-slate-200 ring-4 ring-black/5"
                aria-label="Minimize"
            >
                <Minus size={10} strokeWidth={3} />
            </button>

            <div className="w-full max-w-md max-h-[85vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <WordCard 
                    data={selectedWord} 
                />
            </div>
        </div>
      )}
    </div>
  );
};
