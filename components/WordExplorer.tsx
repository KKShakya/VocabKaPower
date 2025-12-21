import React, { useState } from 'react';
import { Search, Image as ImageIcon, ImageOff } from 'lucide-react';
import { generateWordAnalysis, generateWordImage } from '../services/geminiService';
import { saveWordToNotebook, checkWordExists } from '../services/storageService';
import { WordAnalysis } from '../types';
import { Button } from './Button';
import { WordCard } from './WordCard';

export const WordExplorer: React.FC = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState<WordAnalysis | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [generateImage, setGenerateImage] = useState(true);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setData(null);
    setImageUrl(null);
    setIsSaved(false);

    try {
      // Step 1: Text Analysis
      const analysis = await generateWordAnalysis(query);
      setData(analysis);
      
      const exists = await checkWordExists(analysis.word);
      setIsSaved(exists);

      // Step 2: Image Generation (Optional)
      if (generateImage) {
          generateWordImage(analysis.word).then(url => {
            if (url) setImageUrl(url);
          });
      }

    } catch (err) {
      setError('Could not analyze the word. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!data) return;
    try {
      await saveWordToNotebook({
        ...data,
        imageUrl: generateImage ? imageUrl : null,
        createdAt: Date.now()
      });
      setIsSaved(true);
    } catch (e) {
      console.error("Failed to save", e);
      alert("Failed to save word. Storage might be full.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-800">Word Explorer</h2>
        <p className="text-slate-500">Analyze words instantly. Toggle images to save data & storage.</p>
        
        <form onSubmit={handleSearch} className="max-w-lg mx-auto space-y-4">
          <div className="relative">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter a word (e.g., Callow)"
                className="w-full px-6 py-4 rounded-full border-2 border-slate-200 shadow-sm focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 outline-none text-lg transition-all pr-32"
            />
            <div className="absolute right-2 top-2 bottom-2">
                <Button type="submit" isLoading={loading} className="h-full rounded-full px-6">
                {!loading && <Search size={20} />}
                Explore
                </Button>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
             <button 
                type="button"
                onClick={() => setGenerateImage(!generateImage)}
                className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-colors border ${generateImage ? 'bg-brand-50 text-brand-700 border-brand-200' : 'bg-slate-50 text-slate-500 border-slate-200'}`}
             >
                {generateImage ? <ImageIcon size={16} /> : <ImageOff size={16} />}
                {generateImage ? 'AI Visuals On' : 'Text Only Mode'}
             </button>
          </div>
        </form>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      {data && (
        <div className="flex justify-center animate-fade-in py-4">
          <div className="w-full max-w-md">
            <WordCard 
                data={data} 
                imageUrl={imageUrl} 
                onSave={handleSave} 
                isSaved={isSaved} 
            />
          </div>
        </div>
      )}
    </div>
  );
};