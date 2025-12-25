
import React, { useState } from 'react';
import { WordAnalysis } from '../types';
import { Search, Book, Sparkles } from 'lucide-react';
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

  return (
    <div className="max-w-6xl mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredWords.map((word, idx) => (
                <div 
                    key={`${word.word}-${idx}`} 
                    onClick={() => setSelectedWord(word)}
                    className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden cursor-pointer hover:shadow-md hover:border-brand-200 transition-all group flex flex-col relative h-full"
                >
                    <div className={`h-32 relative overflow-hidden flex items-center justify-center bg-gradient-to-br ${getGradient(word.tone)}`}>
                        <div className="text-white text-center p-4">
                            <h3 className="text-2xl font-bold capitalize mb-1">{word.word}</h3>
                            <p className="text-white/80 text-xs uppercase tracking-wider">{word.partOfSpeech}</p>
                        </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col bg-white">
                        <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed">{word.meaning}</p>
                    </div>
                </div>
            ))}
        </div>
      )}

      {/* Detail Modal */}
      {selectedWord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" onClick={() => setSelectedWord(null)}>
            <div className="w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <WordCard 
                    data={selectedWord} 
                    // No onSave prop passed, so it's read-only
                />
                 <div className="mt-4 text-center">
                    <button onClick={() => setSelectedWord(null)} className="text-white/80 hover:text-white text-sm bg-white/10 px-4 py-2 rounded-full backdrop-blur-md transition-colors">Close Card</button>
                 </div>
            </div>
        </div>
      )}
    </div>
  );
};
