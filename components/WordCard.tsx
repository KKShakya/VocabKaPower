
import React from 'react';
import { Volume2, Heart, Plus, Minus, Circle, Link as LinkIcon } from 'lucide-react';
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

  const displayImage = imageUrl !== undefined ? imageUrl : (data as SavedWord).imageUrl;

  // Helper to determine tone styling
  const getToneConfig = (tone: string) => {
    const lower = tone.toLowerCase();
    if (lower.includes('positive') || lower.includes('+')) {
      return { icon: Plus, color: 'text-emerald-300', bg: 'bg-emerald-900/30', border: 'border-emerald-500/30', label: 'Positive' };
    }
    if (lower.includes('negative') || lower.includes('-')) {
      return { icon: Minus, color: 'text-rose-300', bg: 'bg-rose-900/30', border: 'border-rose-500/30', label: 'Negative' };
    }
    return { icon: Circle, color: 'text-slate-300', bg: 'bg-slate-900/30', border: 'border-slate-500/30', label: 'Neutral' };
  };

  const toneConfig = data.tone ? getToneConfig(data.tone) : null;
  const ToneIcon = toneConfig ? toneConfig.icon : Circle;
  
  return (
    <div className="glass-card bg-white/70 rounded-3xl overflow-hidden max-w-md mx-auto h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-brand-900/10 border border-white/60">
      {/* Visual Header */}
      {displayImage ? (
        <div className="w-full h-64 bg-slate-100 relative group">
          <img src={displayImage} alt={data.word} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90"></div>
          
          <div className="absolute bottom-5 left-6 text-white w-full pr-6">
             <h2 className="text-4xl font-serif font-bold capitalize tracking-tight drop-shadow-md">{data.word}</h2>
             
             <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="text-white/90 font-bold tracking-wider text-[10px] uppercase bg-white/20 backdrop-blur-md px-2 py-0.5 rounded border border-white/20">
                    {data.partOfSpeech}
                </span>

                {toneConfig && (
                    <span className={`flex items-center gap-1 text-[10px] font-bold uppercase px-2 py-0.5 rounded border backdrop-blur-md ${toneConfig.bg} ${toneConfig.color} ${toneConfig.border}`}>
                        <ToneIcon size={10} strokeWidth={4} /> {toneConfig.label}
                    </span>
                )}

                {data.collocation && (
                    <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-amber-200 bg-amber-900/30 px-2 py-0.5 rounded border border-amber-500/30 backdrop-blur-md">
                        <LinkIcon size={10} /> Friend: {data.collocation}
                    </span>
                )}
             </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white relative overflow-hidden flex flex-col justify-end pb-6">
           <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
           
           <div className="relative z-10">
             <h2 className="text-4xl font-serif font-bold capitalize tracking-tight mb-2">{data.word}</h2>
             
             <div className="flex flex-wrap items-center gap-2">
                 <span className="inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm border border-white/10 text-white/80">
                    {data.partOfSpeech}
                 </span>

                 {toneConfig && (
                    <span className={`flex items-center gap-1.5 text-xs font-bold uppercase px-3 py-1 rounded-full border backdrop-blur-sm ${toneConfig.bg} ${toneConfig.color} ${toneConfig.border}`}>
                        <ToneIcon size={10} strokeWidth={4} /> {toneConfig.label}
                    </span>
                )}
             </div>
             
             {data.collocation && (
                <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-amber-100 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                    <LinkIcon size={12} className="text-amber-300" /> 
                    <span className="opacity-70 uppercase tracking-wider text-[10px]">Best Friend:</span> 
                    <span className="text-amber-200 tracking-wide">{data.collocation}</span>
                </div>
             )}
           </div>
        </div>
      )}

      {/* Action Bar */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100/50 bg-white/40 backdrop-blur-sm">
        <button onClick={speak} className="text-slate-500 hover:text-brand-600 transition-colors flex items-center gap-2 text-sm font-semibold group">
             <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-brand-300 group-hover:text-brand-600 transition-colors">
                <Volume2 size={16} /> 
             </div>
             Listen
        </button>
        
        {onSave && (
            <button onClick={onSave} className={`transition-all p-2 rounded-full hover:bg-red-50 group border border-transparent hover:border-red-100 ${isSaved ? 'text-red-500 bg-red-50 border-red-100' : 'text-slate-400 hover:text-red-500'}`} title={isSaved ? "Saved" : "Save to Notebook"}>
                <Heart size={20} className={`${isSaved ? 'fill-current' : 'group-hover:scale-110 transition-transform'}`} />
            </button>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 flex-1 overflow-y-auto bg-white/50 backdrop-blur-sm">
        
        {/* Definition */}
        <div className="text-center space-y-2">
            <p className="text-slate-800 text-lg leading-relaxed font-medium font-serif">
                {data.meaning}
            </p>
            {data.translation && (
                <p className="text-sm text-slate-500 font-medium">{data.translation}</p>
            )}
        </div>

        {/* Trick */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-2xl border border-amber-100/50 relative mx-2">
            <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800/60">Memory Hook</span>
            </div>
            <p className="text-amber-900 text-center font-medium italic font-serif text-lg">
                "{data.trick}"
            </p>
        </div>

        {/* Example */}
        <div className="px-2">
           <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 pl-2">Context Usage</h3>
           <p className="text-slate-600 italic bg-white/60 p-4 rounded-xl border border-white/60 shadow-sm text-sm leading-relaxed">
            "{data.sentence}"
           </p>
        </div>

        {/* Synonyms/Antonyms Grid */}
        <div className="grid grid-cols-2 gap-3">
            {data.synonyms && data.synonyms.length > 0 && (
                <div className="bg-emerald-50/50 rounded-xl p-3 border border-emerald-100/50">
                    <h3 className="text-emerald-800 text-[10px] font-bold uppercase mb-2 opacity-70 tracking-wider">Synonyms</h3>
                    <div className="flex flex-wrap gap-1.5">
                        {data.synonyms.slice(0, 3).map((s, i) => (
                            <span key={i} className="text-emerald-700 text-xs font-medium bg-white/80 px-2 py-1 rounded-md shadow-sm border border-emerald-100/50">{s}</span>
                        ))}
                    </div>
                </div>
            )}
            {data.antonyms && data.antonyms.length > 0 && (
                <div className="bg-rose-50/50 rounded-xl p-3 border border-rose-100/50">
                    <h3 className="text-rose-800 text-[10px] font-bold uppercase mb-2 opacity-70 tracking-wider">Antonyms</h3>
                     <div className="flex flex-wrap gap-1.5">
                        {data.antonyms.slice(0, 3).map((s, i) => (
                            <span key={i} className="text-rose-700 text-xs font-medium bg-white/80 px-2 py-1 rounded-md shadow-sm border border-rose-100/50">{s}</span>
                        ))}
                    </div>
                </div>
            )}
        </div>

      </div>
    </div>
  );
};
