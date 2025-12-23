
import React, { useState, useMemo } from 'react';
import { Brain, Trophy, ArrowRight, RotateCcw, Play, CheckCircle2, XCircle, Lightbulb } from 'lucide-react';
import { Button } from './Button';
import { STATIC_NOTEBOOK_DATA } from '../data/staticNotebookData';
import { STATIC_VOCAB_DATA } from '../data/vocabData';
import { SilsilaCategory } from '../types';

type GameState = 'start' | 'playing' | 'finished';

interface GameQuestion {
  id: number;
  prompt: string;
  answer: string;
  options: string[];
  trick?: string;
  meaning: string;
  synonyms?: string[];
  antonyms?: string[];
}

interface WrongAnswer {
  word: string;
  meaning: string;
  trick?: string;
}

export const Practice: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [questions, setQuestions] = useState<GameQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswer[]>([]);
  
  // Combine all data sources
  const allWords = useMemo(() => {
    const combined: { word: string; meaning: string; trick?: string; synonyms?: string[]; antonyms?: string[] }[] = [];
    
    // 1. From Notebook
    STATIC_NOTEBOOK_DATA.forEach(w => combined.push({ 
        word: w.word, 
        meaning: w.meaning, 
        trick: w.trick,
        synonyms: w.synonyms,
        antonyms: w.antonyms
    }));

    // 2. From Silsila
    STATIC_VOCAB_DATA[SilsilaCategory.MASTER_COLLECTION].forEach(item => {
        if(item.type === 'detailed') combined.push({ 
            word: item.data.word, 
            meaning: item.data.meaning, 
            trick: item.data.trick,
            synonyms: item.data.synonyms,
            antonyms: item.data.antonyms
        });
    });
    STATIC_VOCAB_DATA[SilsilaCategory.PREVIOUS_YEAR].forEach(item => {
         if(item.type === 'simple') combined.push({ 
             word: item.word, 
             meaning: item.definition, 
             trick: "Practice often to remember!",
             synonyms: [],
             antonyms: []
         });
    });
    
    return combined;
  }, []);

  const startGame = () => {
    const QUESTIONS_COUNT = 20;
    const count = Math.min(QUESTIONS_COUNT, allWords.length);
    
    if (count < 4) {
        alert("Not enough words to start practice.");
        return;
    }

    // Shuffle and pick 20
    const shuffled = [...allWords].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, count);
    
    // Generate Options
    const newQuestions: GameQuestion[] = selected.map((item, index) => {
        const distractors: string[] = [];
        while(distractors.length < 3) {
            const random = allWords[Math.floor(Math.random() * allWords.length)];
            if (random.word !== item.word && !distractors.includes(random.word)) {
                distractors.push(random.word);
            }
        }
        const options = [item.word, ...distractors].sort(() => Math.random() - 0.5);
        
        return {
            id: index,
            prompt: item.meaning,
            answer: item.word,
            options,
            trick: item.trick,
            meaning: item.meaning,
            synonyms: item.synonyms,
            antonyms: item.antonyms
        };
    });

    setQuestions(newQuestions);
    setGameState('playing');
    setCurrentIndex(0);
    setScore(0);
    setWrongAnswers([]);
    setSelectedOption(null);
  };

  const handleAnswer = (option: string) => {
    if (selectedOption) return;
    
    setSelectedOption(option);
    const currentQ = questions[currentIndex];
    
    if (option === currentQ.answer) {
        setScore(s => s + 1);
    } else {
        setWrongAnswers(prev => [...prev, { 
            word: currentQ.answer, 
            meaning: currentQ.meaning, 
            trick: currentQ.trick 
        }]);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
        setCurrentIndex(c => c + 1);
        setSelectedOption(null);
    } else {
        setGameState('finished');
    }
  };

  // --- RENDERERS ---

  if (gameState === 'start') {
    return (
        <div className="max-w-2xl mx-auto py-8">
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-400 to-accent-500"></div>
                
                <div className="bg-brand-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <Brain className="text-brand-600" size={36} />
                </div>
                
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">Vocabulary Challenge</h2>
                <p className="text-slate-500 mb-8 text-base max-w-md mx-auto leading-relaxed">
                    Test yourself with <span className="font-bold text-slate-800">20 random questions</span> from your notebook and collections.
                </p>
                
                <div className="flex justify-center">
                    <Button onClick={startGame} size="lg" className="pl-8 pr-10 py-3 text-lg shadow-brand-500/20 shadow-xl">
                        Start Quiz <Play size={20} className="ml-2 fill-current" />
                    </Button>
                </div>
            </div>
        </div>
    );
  }

  if (gameState === 'finished') {
    return (
        <div className="max-w-3xl mx-auto py-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 text-center mb-8">
                <div className="inline-block p-4 rounded-full bg-yellow-50 mb-4">
                    <Trophy size={48} className="text-yellow-500" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Session Complete!</h2>
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 mb-2">
                    {score} / {questions.length}
                </div>
                <p className="text-slate-500">Accuracy: {Math.round((score / questions.length) * 100)}%</p>
                
                <div className="mt-8 flex justify-center">
                    <Button onClick={startGame} variant="secondary">
                        <RotateCcw size={18} /> Play Again
                    </Button>
                </div>
            </div>

            {wrongAnswers.length > 0 && (
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <div className="w-2 h-6 bg-red-500 rounded-full"></div>
                        Review Mistakes ({wrongAnswers.length})
                    </h3>
                    <div className="grid gap-4">
                        {wrongAnswers.map((item, idx) => (
                            <div key={idx} className="p-4 rounded-xl bg-red-50/50 border border-red-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900">{item.word}</h4>
                                    <p className="text-slate-600 text-sm">{item.meaning}</p>
                                </div>
                                {item.trick && (
                                    <div className="text-xs font-medium text-orange-700 bg-orange-100 px-3 py-2 rounded-lg border border-orange-200 sm:max-w-xs italic">
                                        Tip: {item.trick}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
  }

  const currentQ = questions[currentIndex];
  const isCorrect = selectedOption === currentQ.answer;

  return (
    <div className="max-w-3xl mx-auto py-2 md:py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 px-2">
        <div className="text-slate-500 font-medium text-xs md:text-sm">
           Question <span className="text-slate-900 font-bold">{currentIndex + 1}</span> / {questions.length}
        </div>
        <div className="h-1.5 w-24 md:w-32 bg-slate-200 rounded-full overflow-hidden">
            <div 
                className="h-full bg-brand-500 transition-all duration-500" 
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            ></div>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden relative">
         <div className="px-6 pt-5 pb-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Identify the word for</p>
            <h3 className="text-lg md:text-xl font-sans font-semibold text-slate-900 leading-snug min-h-[3rem] flex items-center">
                "{currentQ.prompt}"
            </h3>
         </div>

         {/* Options Grid - Compact 2x2 */}
         <div className="px-5 py-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQ.options.map((opt) => {
                let btnStyle = "px-4 py-3 rounded-xl border-2 text-left font-semibold transition-all duration-200 flex justify-between items-center group relative overflow-hidden text-sm md:text-base ";
                
                if (selectedOption) {
                    if (opt === currentQ.answer) {
                        btnStyle += "bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm";
                    } else if (opt === selectedOption) {
                        btnStyle += "bg-red-50 border-red-500 text-red-800 shadow-sm";
                    } else {
                        btnStyle += "border-slate-100 text-slate-400 opacity-40 grayscale";
                    }
                } else {
                    btnStyle += "border-slate-100 bg-slate-50/50 hover:border-brand-200 hover:bg-white hover:shadow-md text-slate-700";
                }

                return (
                    <button 
                        key={opt}
                        onClick={() => handleAnswer(opt)}
                        disabled={!!selectedOption}
                        className={btnStyle}
                    >
                        <span className="relative z-10 truncate mr-2">{opt}</span>
                        {selectedOption && opt === currentQ.answer && <CheckCircle2 size={18} className="text-emerald-600 relative z-10 shrink-0" />}
                        {selectedOption && opt === selectedOption && opt !== currentQ.answer && <XCircle size={18} className="text-red-500 relative z-10 shrink-0" />}
                        
                        {/* Hover Effect Background */}
                        {!selectedOption && (
                             <div className="absolute inset-0 bg-gradient-to-r from-brand-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        )}
                    </button>
                )
            })}
         </div>

         {/* Feedback / Next Section */}
         {selectedOption && (
            <div className="bg-slate-50 border-t border-slate-100 p-4 animate-fade-in">
                
                {/* Memory Hook */}
                {currentQ.trick && (
                    <div className="mb-3 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-3 flex gap-3 items-center shadow-sm">
                        <div className="bg-orange-100 p-1 rounded-full shrink-0">
                             <Lightbulb size={14} className="text-orange-600" />
                        </div>
                        <div className="flex-1">
                            <p className="text-orange-900 text-sm font-medium italic font-serif leading-tight">"{currentQ.trick}"</p>
                        </div>
                    </div>
                )}

                {/* Synonyms & Antonyms (Visible on Answer) */}
                {((currentQ.synonyms && currentQ.synonyms.length > 0) || (currentQ.antonyms && currentQ.antonyms.length > 0)) && (
                    <div className="flex flex-wrap gap-4 mb-4 pb-4 border-b border-slate-200/50">
                        {currentQ.synonyms && currentQ.synonyms.length > 0 && (
                            <div className="flex-1 min-w-[120px]">
                                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block mb-1">Synonyms</span>
                                <div className="flex flex-wrap gap-1">
                                    {currentQ.synonyms.slice(0, 3).map(s => (
                                        <span key={s} className="text-xs bg-emerald-100/50 text-emerald-800 px-1.5 py-0.5 rounded border border-emerald-100">{s}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {currentQ.antonyms && currentQ.antonyms.length > 0 && (
                            <div className="flex-1 min-w-[120px]">
                                <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider block mb-1">Antonyms</span>
                                <div className="flex flex-wrap gap-1">
                                    {currentQ.antonyms.slice(0, 3).map(s => (
                                        <span key={s} className="text-xs bg-rose-100/50 text-rose-800 px-1.5 py-0.5 rounded border border-rose-100">{s}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center justify-between gap-2">
                    <div className="flex-1">
                        {isCorrect ? (
                             <p className="text-emerald-700 font-bold text-sm md:text-base flex items-center gap-1.5">
                                <CheckCircle2 size={16} className="fill-emerald-100" /> Correct!
                             </p>
                        ) : (
                             <p className="text-red-600 font-bold text-sm md:text-base flex items-center gap-1.5">
                                <XCircle size={16} className="fill-red-100" /> Incorrect
                             </p>
                        )}
                        <p className="text-slate-500 text-xs ml-6 truncate">
                            {isCorrect ? 'Keep it up!' : `Answer: ${currentQ.answer}`}
                        </p>
                    </div>
                    <Button onClick={nextQuestion} size="sm" className="shadow-md px-6 py-2 h-10">
                        {currentIndex === questions.length - 1 ? 'Finish' : 'Next'} <ArrowRight size={16} />
                    </Button>
                </div>
            </div>
         )}
      </div>
    </div>
  );
};
