
import React from 'react';
import { Volume2, Heart, Plus, Minus, Circle, Link as LinkIcon, Thermometer, Tv, Lightbulb } from 'lucide-react';
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
      return { icon: Plus, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', label: 'Positive' };
    }
    if (lower.includes('negative') || lower.includes('-')) {
      return { icon: Minus, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100', label: 'Negative' };
    }
    return { icon: Circle, color: 'text-slate-500', bg: 'bg-slate-100', border: 'border-slate-200', label: 'Neutral' };
  };

  const toneConfig = data.tone ? getToneConfig(data.tone) : null;
  const ToneIcon = toneConfig ? toneConfig.icon : Circle;
  
  // Handle Mnemonic (Legacy support for 'trick')
  const mnemonicText = data.trick;

  return (
    <div className="glass-card bg-white/80 rounded-3xl overflow-hidden max-w-md mx-auto h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-brand-900/10 border border-white/60">
      {/* Visual Header - Reduced height for compactness */}
      {displayImage ? (
        <div className="w-full h-44 bg-slate-100 relative group shrink-0">
          <img src={displayImage} alt={data.word} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-5">
             <div className="flex justify-between items-end mb-2">
                 <h2 className="text-3xl font-serif font-bold capitalize tracking-tight text-white drop-shadow-sm">{data.word}</h2>
                 <span className="text-white/90 font-bold tracking-wider text-[10px] uppercase bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20 mb-1">
                    {data.partOfSpeech}
                </span>
             </div>
             
             <div className="flex flex-wrap items-center gap-2">
                {toneConfig && (
                    <span className={`flex items-center gap-1 text-[10px] font-bold uppercase px-2 py-0.5 rounded border backdrop-blur-md bg-white/10 text-white/90 border-white/20`}>
                        <ToneIcon size={10} strokeWidth={3} /> {toneConfig.label}
                    </span>
                )}

                {data.collocation && (
                    <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-amber-100 bg-amber-900/40 px-2 py-0.5 rounded border border-amber-500/30 backdrop-blur-md">
                        <LinkIcon size={10} /> {data.collocation}
                    </span>
                )}
             </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-36 bg-gradient-to-br from-slate-800 to-slate-900 p-5 text-white relative overflow-hidden flex flex-col justify-end shrink-0">
           <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           
           <div className="relative z-10">
             <div className="flex justify-between items-end mb-2 border-b border-white/10 pb-2">
                 <h2 className="text-3xl font-serif font-bold capitalize tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-200">{data.word}</h2>
                 <span className="inline-block bg-white/10 px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm border border-white/10 text-white/80 mb-1">
                    {data.partOfSpeech}
                 </span>
             </div>
             
             <div className="flex flex-wrap items-center gap-2">
                 {toneConfig && (
                    <span className={`flex items-center gap-1.5 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border backdrop-blur-sm bg-white/10 border-white/10 text-white/90`}>
                        <ToneIcon size={10} strokeWidth={3} /> {toneConfig.label}
                    </span>
                )}
             </div>
           </div>
        </div>
      )}

      {/* Action Bar */}
      <div className="px-5 py-2.5 flex items-center justify-between border-b border-slate-100 bg-white/60 backdrop-blur-sm shrink-0">
        <button onClick={speak} className="text-slate-500 hover:text-brand-600 transition-colors flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider group">
             <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-brand-300 group-hover:text-brand-600 transition-colors shadow-sm">
                <Volume2 size={12} /> 
             </div>
             Pronounce
        </button>
        
        {onSave && (
            <button onClick={onSave} className={`transition-all p-1.5 rounded-full hover:bg-red-50 group border border-transparent hover:border-red-100 ${isSaved ? 'text-red-500 bg-red-50 border-red-100' : 'text-slate-300 hover:text-red-500'}`} title={isSaved ? "Saved" : "Save to Notebook"}>
                <Heart size={18} className={`${isSaved ? 'fill-current' : 'group-hover:scale-110 transition-transform'}`} />
            </button>
        )}
      </div>

      {/* Content - Improved vertical rhythm */}
      <div className="p-5 flex-1 overflow-y-auto bg-white/40 backdrop-blur-sm space-y-5">
        
        {/* Definition - Smoother font weight and relaxed leading */}
        <div className="text-left space-y-1.5">
            <p className="text-slate-700 text-[1.1rem] leading-relaxed font-normal font-serif antialiased">
                {data.meaning}
            </p>
            {data.translation && (
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    Translation: <span className="text-slate-600 font-serif normal-case text-sm ml-1">{data.translation}</span>
                </p>
            )}
        </div>

        {/* Mnemonic Section */}
        {data.characterHook ? (
            <div className="bg-gradient-to-br from-orange-50/80 to-amber-50/80 rounded-xl border border-orange-100/80 overflow-hidden relative shadow-sm">
                <div className="bg-orange-100/50 px-4 py-1.5 flex items-center justify-between border-b border-orange-200/50">
                     <div className="flex items-center gap-1.5">
                        <Tv size={14} className="text-orange-600" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-orange-800">Desi Hook</span>
                     </div>
                     <span className="text-[10px] font-bold bg-white/60 px-2 py-0.5 rounded text-orange-700 border border-orange-100">{data.characterHook}</span>
                </div>
                
                <div className="p-3.5 space-y-3">
                    <p className="text-slate-700 font-medium leading-relaxed text-sm">
                        {data.hookWhy}
                    </p>
                    {mnemonicText && (
                        <div className="bg-white/60 rounded-lg p-2.5 text-xs text-slate-600 border border-orange-100/50 flex gap-2 items-start leading-relaxed">
                             <Lightbulb size={14} className="text-amber-500 shrink-0 mt-0.5" />
                             <span className="italic">{mnemonicText}</span>
                        </div>
                    )}
                </div>
            </div>
        ) : (
            /* Standard Mnemonic Box */
            mnemonicText && (
                <div className="bg-amber-50/80 rounded-xl p-3.5 border border-amber-100 relative shadow-sm flex gap-3 items-start group hover:bg-amber-50 transition-colors">
                    <div className="bg-white text-amber-500 p-1.5 rounded-lg shrink-0 mt-0.5 shadow-sm ring-1 ring-amber-100">
                        <Lightbulb size={16} />
                    </div>
                    <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-amber-800/50 block mb-1">Memory Hook</span>
                        <p className="text-slate-800 font-medium italic relative text-[0.95rem] leading-relaxed">
                            {mnemonicText}
                        </p>
                    </div>
                </div>
            )
        )}

        {/* Intensity Spectrum */}
        {data.intensitySpectrum && data.intensitySpectrum.length > 0 && (
            <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-100">
                <div className="flex items-center gap-2 mb-2.5">
                    <Thermometer size={14} className="text-brand-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Intensity Spectrum</span>
                </div>
                <div className="flex flex-col gap-0 relative pl-3.5">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-slate-200 via-brand-300 to-rose-300 opacity-50"></div>
                    
                    {data.intensitySpectrum.map((level, idx) => {
                        const isCurrent = level.word.toLowerCase() === data.word.toLowerCase();
                        
                        return (
                            <div key={idx} className={`relative flex items-center gap-3 py-1 ${isCurrent ? 'scale-100 origin-left' : 'opacity-60 grayscale-[0.5]'}`}>
                                <div className={`w-2.5 h-2.5 rounded-full z-10 border-[1.5px] transition-all duration-300 ${
                                    isCurrent ? 'bg-brand-500 border-white ring-2 ring-brand-100' : 'bg-slate-200 border-white'
                                }`}></div>
                                <div className={`flex-1 flex justify-between items-center rounded-lg px-2 py-1 transition-all ${
                                    isCurrent ? 'bg-white shadow-sm border border-slate-100' : ''
                                }`}>
                                    <span className={`font-semibold text-xs ${isCurrent ? 'text-slate-800' : 'text-slate-500'}`}>{level.word}</span>
                                    <span className={`text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded ${isCurrent ? 'text-brand-600 bg-brand-50' : 'text-slate-400 bg-slate-100'}`}>{level.level}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )}

        {/* Example & Vocab Grid */}
        <div className="grid gap-4">
            <div className="bg-white/60 p-3.5 rounded-xl border border-white/60 shadow-sm">
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-400"></span> Context
                </h3>
                <p className="text-slate-600 italic text-[0.95rem] leading-relaxed font-serif">
                    "{data.sentence}"
                </p>
            </div>

            {/* Synonyms/Antonyms */}
            <div className="grid grid-cols-2 gap-2">
                {data.synonyms && data.synonyms.length > 0 && (
                    <div className="bg-emerald-50/40 rounded-xl p-3 border border-emerald-100/50">
                        <h3 className="text-emerald-700 text-[9px] font-bold uppercase mb-2 opacity-80 tracking-wider">Synonyms</h3>
                        <div className="flex flex-wrap gap-1.5">
                        {data.synonyms.slice(0, 3).map(s => <span key={s} className="text-[10px] font-medium bg-white text-emerald-800 px-2 py-1 rounded border border-emerald-100/50 shadow-sm">{s}</span>)}
                        </div>
                    </div>
                )}
                {data.antonyms && data.antonyms.length > 0 && (
                    <div className="bg-rose-50/40 rounded-xl p-3 border border-rose-100/50">
                        <h3 className="text-rose-700 text-[9px] font-bold uppercase mb-2 opacity-80 tracking-wider">Antonyms</h3>
                        <div className="flex flex-wrap gap-1.5">
                        {data.antonyms.slice(0, 3).map(s => <span key={s} className="text-[10px] font-medium bg-white text-rose-800 px-2 py-1 rounded border border-rose-100/50 shadow-sm">{s}</span>)}
                        </div>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};
