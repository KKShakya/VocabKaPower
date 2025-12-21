import React from 'react';
import { Volume2, Heart, Image as ImageIcon, BookOpen } from 'lucide-react';
import { WordAnalysis, SavedWord } from '../types';

interface WordCardProps {
  data: WordAnalysis | SavedWord;
  imageUrl?: string | null;
  onSave?: () => void;
  isSaved?: boolean;
}

export const WordCard: React.FC<WordCardProps> = ({ data, imageUrl, onSave, isSaved }) => {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(data.word);
    window.speechSynthesis.speak(utterance);
  };

  // Determine if we have an image
  const displayImage = imageUrl !== undefined ? imageUrl : (data as SavedWord).imageUrl;
  
  // If imageUrl is explicitly null (not undefined), it means we skipped generation or have no image.
  // We only show the "Generating..." placeholder if imageUrl is undefined (loading state) AND we aren't a saved word.
  // Actually, for SavedWord, imageUrl is string | null.
  // Let's simplify: Show image section if displayImage exists. If it's explicitly null, show a text header.

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 max-w-md mx-auto h-full flex flex-col transition-all hover:shadow-2xl">
      {/* Visual Header - Image or Pattern */}
      {displayImage ? (
        <div className="w-full h-56 bg-slate-100 relative">
          <img src={displayImage} alt={data.word} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
          <div className="absolute bottom-4 left-6 text-white">
             <h2 className="text-3xl font-bold capitalize tracking-tight">{data.word}</h2>
             <p className="text-white/90 font-medium opacity-90">{data.partOfSpeech}</p>
          </div>
        </div>
      ) : (
        <div className="w-full bg-gradient-to-br from-brand-600 to-accent-600 p-6 text-white relative overflow-hidden">
           <div className="absolute -right-6 -top-6 text-white/10">
              <BookOpen size={120} />
           </div>
           <div className="relative z-10 pt-4 pb-2">
             <h2 className="text-4xl font-bold capitalize tracking-tight mb-2">{data.word}</h2>
             <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
                {data.partOfSpeech}
             </span>
           </div>
        </div>
      )}

      {/* Action Bar */}
      <div className="px-6 py-3 flex items-center justify-between border-b border-slate-50 bg-slate-50/50">
        <div className="flex gap-4">
             <button onClick={speak} className="text-slate-500 hover:text-brand-600 transition-colors flex items-center gap-1 text-sm font-medium">
                <Volume2 size={18} /> Pronounce
             </button>
        </div>
        <div>
            {onSave && (
                <button onClick={onSave} className={`transition-all p-2 rounded-full hover:bg-slate-100 ${isSaved ? 'text-red-500' : 'text-slate-400 hover:text-red-500'}`} title={isSaved ? "Saved" : "Save to Notebook"}>
                    <Heart size={20} className={isSaved ? 'fill-current' : ''} />
                </button>
            )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 flex-1 overflow-y-auto bg-white">
        
        {/* Definition */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="h-px flex-1 bg-slate-100"></span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Meaning</span>
            <span className="h-px flex-1 bg-slate-100"></span>
          </div>
          <p className="text-slate-800 text-lg leading-relaxed text-center font-medium">
            {data.meaning}
          </p>
          {data.translation && (
             <p className="text-center text-slate-500 font-hindi">{data.translation}</p>
          )}
        </div>

        {/* Trick */}
        <div className="bg-amber-50 p-5 rounded-xl border border-amber-100 relative mt-4">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-700 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-amber-200">
                Memory Trick
            </div>
            <p className="text-amber-900 text-center font-medium italic">
                "{data.trick}"
            </p>
        </div>

        {/* Example */}
        <div>
           <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Usage</h3>
           <blockquote className="border-l-4 border-brand-200 pl-4 py-1 text-slate-600 italic">
            "{data.sentence}"
           </blockquote>
        </div>

        {/* Synonyms/Antonyms Grid */}
        <div className="grid grid-cols-2 gap-4 pt-2">
            {data.synonyms && data.synonyms.length > 0 && (
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100">
                    <h3 className="text-emerald-800 text-xs font-bold uppercase mb-2 opacity-70">Synonyms</h3>
                    <div className="flex flex-wrap gap-1">
                        {data.synonyms.slice(0, 3).map((s, i) => (
                            <span key={i} className="text-emerald-700 text-sm bg-white/50 px-1.5 py-0.5 rounded">{s}</span>
                        ))}
                    </div>
                </div>
            )}
            {data.antonyms && data.antonyms.length > 0 && (
                <div className="bg-rose-50 rounded-lg p-3 border border-rose-100">
                    <h3 className="text-rose-800 text-xs font-bold uppercase mb-2 opacity-70">Antonyms</h3>
                     <div className="flex flex-wrap gap-1">
                        {data.antonyms.slice(0, 3).map((s, i) => (
                            <span key={i} className="text-rose-700 text-sm bg-white/50 px-1.5 py-0.5 rounded">{s}</span>
                        ))}
                    </div>
                </div>
            )}
        </div>

      </div>
    </div>
  );
};