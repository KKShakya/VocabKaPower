
import React, { useState } from 'react';
import { WordAnalysis } from '../types';
import { Search, Book, Sparkles, Clapperboard } from 'lucide-react';
import { WordCard } from './WordCard';
import { STATIC_NOTEBOOK_DATA } from '../data/staticNotebookData';

export const Notebook: React.FC = () => {
  const [selectedWord, setSelectedWord] = useState<WordAnalysis | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWords = STATIC_NOTEBOOK_DATA.filter(w => 
    w.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    w.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRandomWord = () => {
    const random = STATIC_NOTEBOOK_DATA[Math.floor(Math.random() * STATIC_NOTEBOOK_DATA.length)];
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

  const getIcon = (hook: string | undefined) => {
    return <Clapperboard size={18} />;
  };

  return (
    <div className="max-w-7xl mx-auto pb-12">
       <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
        <div>
            <h2 className="text-3xl font-bold text-slate-900">My Notebook</h2>
            <p className="text-slate-500">Permanent collection of vocabulary ({STATIC_NOTEBOOK_DATA.length} words)</p>
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
                    placeholder="Search your collection..." 
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
            <p className="text-slate-500 max-w-sm">Try a different search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWords.map((word, idx) => (
                <div 
                    key={`${word.word}-${idx}`} 
                    onClick={() => setSelectedWord(word)}
                    className={`relative w-full rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden bg-gradient-to-br ${getGradient(word.tone)} p-8 text-white cursor-pointer transform transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col justify-between border border-white/20`}
                >
                    <div>
                        {/* --- HEADER: Word & Part of Speech --- */}
                        <div className="text-center mb-6">
                            <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-sm mb-2 capitalize break-words">
                            {word.word}
                            </h1>
                            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm border border-white/20 shadow-sm">
                            {word.partOfSpeech}
                            </span>
                        </div>

                        {/* --- BODY: The "Hook" (Glassmorphism Style) --- */}
                        {word.characterHook && (
                            <div className="bg-white/95 text-slate-800 rounded-2xl p-5 shadow-lg mb-6 transform transition group-hover:scale-[1.02] duration-300 border border-white/50 relative z-10">
                                {/* Hook Title (Character Name) */}
                                <div className="flex items-center justify-center gap-2 mb-3 text-indigo-600 font-bold text-sm border-b border-indigo-100 pb-2">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in" onClick={() => setSelectedWord(null)}>
            <div className="w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <WordCard 
                    data={selectedWord} 
                />
                 <div className="mt-4 text-center">
                    <button onClick={() => setSelectedWord(null)} className="text-white/80 hover:text-white text-sm bg-white/10 px-4 py-2 rounded-full backdrop-blur-md transition-colors border border-white/10 shadow-lg">Close Card</button>
                 </div>
            </div>
        </div>
      )}
    </div>
  );
};
