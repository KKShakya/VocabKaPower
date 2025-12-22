
import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { generateWordAnalysis } from '../services/geminiService';
import { WordAnalysis } from '../types';
import { Button } from './Button';
import { WordCard } from './WordCard';

export const WordExplorer: React.FC = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState<WordAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setData(null);

    try {
      const analysis = await generateWordAnalysis(query);
      setData(analysis);
    } catch (err) {
      setError('Could not analyze the word. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12">
      <div className="text-center space-y-6 pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 border border-white/50 backdrop-blur-md shadow-sm text-sm font-medium text-brand-700 animate-fade-in">
           <Sparkles size={14} className="text-brand-500" /> AI-Powered Vocabulary Builder
        </div>
        
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
          Master words with <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">Crystal Clarity</span>
        </h2>
        
        <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          Type any word below to get instant definitions, visual mnemonics, and detailed context.
        </p>
        
        <form onSubmit={handleSearch} className="max-w-xl mx-auto relative z-10">
            {/* Glass Search Capsule */}
            <div className="relative group transition-all duration-300 transform hover:scale-[1.01]">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-accent-400 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative flex items-center bg-white/70 backdrop-blur-xl border border-white/80 rounded-full p-2 shadow-2xl shadow-slate-200/50">
                    <div className="pl-6 text-slate-400">
                        <Search size={22} />
                    </div>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="e.g. Serendipity..."
                        className="w-full bg-transparent border-none focus:ring-0 text-xl text-slate-800 placeholder-slate-400/80 h-14 px-4 font-serif"
                    />
                    <Button 
                        type="submit" 
                        isLoading={loading} 
                        className="rounded-full h-12 px-8 shadow-none"
                    >
                        {!loading && "Explore"}
                    </Button>
                </div>
            </div>
        </form>
        {error && <p className="text-red-500 bg-red-50 inline-block px-4 py-2 rounded-lg text-sm">{error}</p>}
      </div>

      {data && (
        <div className="flex justify-center animate-fade-in py-4">
          <div className="w-full max-w-md perspective-1000">
            <WordCard 
                data={data} 
                imageUrl={null} 
                // No save functionality in static mode
            />
          </div>
        </div>
      )}
    </div>
  );
};
