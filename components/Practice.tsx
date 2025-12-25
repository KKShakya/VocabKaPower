
import React, { useState, useMemo } from 'react';
import { Brain, Trophy, ArrowRight, RotateCcw, CheckCircle2, XCircle, Lightbulb, Target, AlertTriangle, BookOpen } from 'lucide-react';
import { Button } from './Button';
import { STATIC_NOTEBOOK_DATA } from '../data/staticNotebookData';
import { STATIC_VOCAB_DATA } from '../data/vocabData';
import { STATIC_GRAMMAR_DATA } from '../data/grammarData';
import { SilsilaCategory, PracticeLevel } from '../types';

type GameState = 'menu' | 'playing' | 'finished';

interface GameQuestion {
  id: number;
  type: 'meaning' | 'cloze' | 'validation';
  prompt: string;
  answer: string | boolean;
  options?: string[];
  trick?: string;
  explanation?: string;
  topic?: string;
  context?: string;
  synonyms?: string[]; // Added for feedback
  antonyms?: string[]; // Added for feedback
}

interface WrongAnswer {
  prompt: string;
  correctAnswer: string;
  userAnswer?: string;
  explanation?: string;
}

export const Practice: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [currentLevel, setCurrentLevel] = useState<PracticeLevel>('level1');
  const [questions, setQuestions] = useState<GameQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | boolean | null>(null);
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswer[]>([]);

  // --- DATA PREPARATION ---

  const vocabSource = useMemo(() => {
    const combined: { 
        word: string; 
        meaning: string; 
        sentence: string; 
        trick?: string; 
        synonyms?: string[]; 
        antonyms?: string[];
    }[] = [];
    
    STATIC_NOTEBOOK_DATA.forEach(w => combined.push({ 
        word: w.word, 
        meaning: w.meaning, 
        sentence: w.sentence,
        trick: w.trick,
        synonyms: w.synonyms,
        antonyms: w.antonyms
    }));

    STATIC_VOCAB_DATA[SilsilaCategory.MASTER_COLLECTION].forEach(item => {
        if(item.type === 'detailed') combined.push({ 
            word: item.data.word, 
            meaning: item.data.meaning, 
            sentence: item.data.sentence,
            trick: item.data.trick,
            synonyms: item.data.synonyms,
            antonyms: item.data.antonyms
        });
    });
    
    return combined;
  }, []);

  const startGame = (level: PracticeLevel) => {
    setCurrentLevel(level);
    let newQuestions: GameQuestion[] = [];
    
    if (level === 'level1') {
        const shuffled = [...vocabSource].sort(() => Math.random() - 0.5).slice(0, 15);
        newQuestions = shuffled.map((item, idx) => {
            const distractors = vocabSource
                .filter(w => w.word !== item.word)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                .map(w => w.word);
            
            return {
                id: idx,
                type: 'meaning',
                prompt: item.meaning,
                answer: item.word,
                options: [item.word, ...distractors].sort(() => Math.random() - 0.5),
                trick: item.trick,
                synonyms: item.synonyms,
                antonyms: item.antonyms
            };
        });
    } else if (level === 'level2') {
        const validItems = vocabSource.filter(i => i.sentence && i.sentence.length > 10).sort(() => Math.random() - 0.5).slice(0, 15);
        
        newQuestions = validItems.map((item, idx) => {
            const regex = new RegExp(`\\b${item.word}\\w*`, 'gi');
            const maskedSentence = item.sentence.replace(regex, '_______');
            
            const distractors = vocabSource
                .filter(w => w.word !== item.word)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                .map(w => w.word);

            return {
                id: idx,
                type: 'cloze',
                prompt: maskedSentence,
                answer: item.word,
                options: [item.word, ...distractors].sort(() => Math.random() - 0.5),
                trick: item.trick,
                context: item.meaning,
                synonyms: item.synonyms,
                antonyms: item.antonyms
            };
        });
    } else {
        const shuffled = [...STATIC_GRAMMAR_DATA].sort(() => Math.random() - 0.5).slice(0, 15);
        newQuestions = shuffled.map((item, idx) => ({
            id: idx,
            type: 'validation',
            prompt: item.sentence,
            answer: item.isCorrect,
            explanation: item.explanation,
            topic: item.topic
        }));
    }

    if (newQuestions.length === 0) {
        alert("Not enough data to start this level.");
        return;
    }

    setQuestions(newQuestions);
    setGameState('playing');
    setCurrentIndex(0);
    setScore(0);
    setWrongAnswers([]);
    setSelectedOption(null);
  };

  const handleAnswer = (option: string | boolean) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(option);
    const currentQ = questions[currentIndex];
    
    if (option === currentQ.answer) {
        setScore(s => s + 1);
    } else {
        let explanation = "";
        if (currentQ.type === 'validation') explanation = currentQ.explanation || "";
        else if (currentQ.type === 'cloze') explanation = `Correct: ${currentQ.answer} (${currentQ.context})`;
        else explanation = `Correct: ${currentQ.answer}`;

        setWrongAnswers(prev => [...prev, { 
            prompt: currentQ.prompt,
            correctAnswer: String(currentQ.answer),
            userAnswer: String(option),
            explanation: currentQ.trick ? `${explanation} | Tip: ${currentQ.trick}` : explanation
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

  if (gameState === 'menu') {
    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-serif font-bold text-slate-900 mb-3">Practice Arena</h2>
                <p className="text-slate-500 max-w-xl mx-auto">Choose your difficulty level. Start with basic meaning matching and graduate to error detection.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer relative overflow-hidden" onClick={() => startGame('level1')}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 text-emerald-600 group-hover:scale-110 transition-transform">
                        <BookOpen size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Basic Drill</h3>
                    <p className="text-slate-500 text-sm mb-4">The classic flashcard method. Match the definition to the correct word.</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 w-fit px-2 py-1 rounded">
                        <Target size={12} /> Level 1
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer relative overflow-hidden" onClick={() => startGame('level2')}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                        <Brain size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Context Match</h3>
                    <p className="text-slate-500 text-sm mb-4">Fill in the blanks. Learn how words fit into actual sentences.</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 w-fit px-2 py-1 rounded">
                        <Target size={12} /> Level 2
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer relative overflow-hidden" onClick={() => startGame('level3')}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 text-purple-600 group-hover:scale-110 transition-transform">
                        <AlertTriangle size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Usage Validator</h3>
                    <p className="text-slate-500 text-sm mb-4">Detect errors in redundancy and collocations. True/False style.</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-purple-700 bg-purple-50 w-fit px-2 py-1 rounded">
                        <Target size={12} /> Level 3
                    </div>
                </div>
            </div>
        </div>
    );
  }

  if (gameState === 'finished') {
    return (
        <div className="max-w-3xl mx-auto py-8 animate-fade-in">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 text-center mb-8">
                <div className="inline-block p-4 rounded-full bg-yellow-50 mb-4">
                    <Trophy size={48} className="text-yellow-500" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Session Complete!</h2>
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 mb-2">
                    {score} / {questions.length}
                </div>
                
                <div className="mt-8 flex justify-center gap-4">
                    <Button onClick={() => setGameState('menu')} variant="secondary">
                         Menu
                    </Button>
                    <Button onClick={() => startGame(currentLevel)}>
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
                            <div key={idx} className="p-4 rounded-xl bg-red-50/50 border border-red-100 flex flex-col gap-2">
                                <div className="text-slate-900 font-medium">"{item.prompt}"</div>
                                <div className="flex items-center gap-4 text-sm">
                                    <span className="text-red-600 font-bold line-through">{String(item.userAnswer)}</span>
                                    <ArrowRight size={14} className="text-slate-400" />
                                    <span className="text-emerald-600 font-bold">{String(item.correctAnswer)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
  }

  const currentQ = questions[currentIndex];
  
  return (
    <div className="max-w-2xl mx-auto py-2 animate-fade-in">
      {/* CARD */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative flex flex-col">
         
         {/* Question Header */}
         <div className="px-6 pt-6 pb-2">
            <div className="flex justify-between items-start mb-3">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {currentLevel === 'level1' ? 'IDENTIFY THE WORD FOR' : 
                     currentLevel === 'level2' ? 'FILL IN THE BLANK' : 
                     'IDENTIFY VALIDITY'}
                </p>
                <div className="text-[10px] font-bold text-slate-300 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                    {currentIndex + 1} / {questions.length}
                </div>
            </div>

            <h3 className="font-serif font-bold text-2xl text-slate-900 leading-snug mb-5">
                {currentLevel === 'level2' ? (
                     currentQ.prompt.split('_______').map((part, i, arr) => (
                         <React.Fragment key={i}>
                             {part}
                             {i < arr.length - 1 && <span className="inline-block w-16 border-b-2 border-slate-300 mx-1"></span>}
                         </React.Fragment>
                     ))
                ) : (
                    `"${currentQ.prompt}"`
                )}
            </h3>

            {/* OPTIONS (Shown immediately) */}
            {(currentLevel === 'level1' || currentLevel === 'level2') && currentQ.options && (
                <div className="grid grid-cols-2 gap-3 mb-4">
                    {currentQ.options.map((opt) => {
                         let btnStyle = "px-4 py-3 rounded-xl border-2 text-left font-semibold transition-all duration-200 flex justify-between items-center text-sm ";
                         if (selectedOption !== null) {
                             if (opt === currentQ.answer) btnStyle += "bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm";
                             else if (opt === selectedOption) btnStyle += "bg-red-50 border-red-500 text-red-800 shadow-sm";
                             else btnStyle += "border-slate-50 text-slate-300 opacity-50";
                         } else {
                             btnStyle += "border-slate-200 bg-white hover:border-brand-300 hover:shadow-md text-slate-700";
                         }
 
                         return (
                             <button key={opt} onClick={() => handleAnswer(opt)} disabled={selectedOption !== null} className={btnStyle}>
                                 <span>{opt}</span>
                                 {selectedOption !== null && opt === currentQ.answer && <CheckCircle2 size={16} className="text-emerald-600" />}
                                 {selectedOption !== null && opt === selectedOption && opt !== currentQ.answer && <XCircle size={16} className="text-red-500" />}
                             </button>
                         )
                    })}
                </div>
            )}

            {currentLevel === 'level3' && (
                <div className="flex gap-3 mb-4">
                    <button 
                        onClick={() => handleAnswer(true)} 
                        disabled={selectedOption !== null}
                        className={`flex-1 py-3 rounded-xl border-2 font-bold text-base flex items-center justify-center gap-2 transition-all ${
                            selectedOption !== null 
                            ? (currentQ.answer === true ? "bg-emerald-100 border-emerald-500 text-emerald-800" : (selectedOption === true ? "bg-red-100 border-red-500 text-red-800" : "opacity-40 border-slate-100 text-slate-300"))
                            : "bg-white border-slate-200 hover:border-emerald-400 hover:bg-emerald-50 text-emerald-700"
                        }`}
                    >
                        <CheckCircle2 size={18} /> Correct
                    </button>
                    <button 
                        onClick={() => handleAnswer(false)} 
                        disabled={selectedOption !== null}
                        className={`flex-1 py-3 rounded-xl border-2 font-bold text-base flex items-center justify-center gap-2 transition-all ${
                            selectedOption !== null 
                            ? (currentQ.answer === false ? "bg-emerald-100 border-emerald-500 text-emerald-800" : (selectedOption === false ? "bg-red-100 border-red-500 text-red-800" : "opacity-40 border-slate-100 text-slate-300"))
                            : "bg-white border-slate-200 hover:border-rose-400 hover:bg-rose-50 text-rose-700"
                        }`}
                    >
                        <XCircle size={18} /> Incorrect
                    </button>
                </div>
            )}
         </div>

         {/* FEEDBACK AREA (Appears after selection) */}
         {selectedOption !== null && (
             <div className="bg-slate-50 border-t border-slate-100 p-4 animate-fade-in">
                
                {/* 1. Memory Hook (Trick) */}
                {(currentLevel === 'level1' || currentLevel === 'level2') && currentQ.trick && (
                    <div className="mb-3 bg-amber-50 border border-amber-100 rounded-lg p-2.5 flex gap-2 items-start">
                        <Lightbulb size={16} className="text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-amber-900 text-sm italic font-serif leading-snug">"{currentQ.trick}"</p>
                    </div>
                )}
                
                {/* 2. Synonyms & Antonyms (Grid Layout) */}
                {(currentLevel === 'level1' || currentLevel === 'level2') && (
                    <div className="grid grid-cols-2 gap-3 mb-3">
                        {currentQ.synonyms && currentQ.synonyms.length > 0 && (
                            <div>
                                <h4 className="text-[10px] font-bold text-emerald-600 uppercase mb-1.5 opacity-70">Synonyms</h4>
                                <div className="flex flex-wrap gap-1">
                                    {currentQ.synonyms.slice(0, 3).map((s, i) => (
                                        <span key={i} className="text-[11px] bg-white text-emerald-800 px-1.5 py-0.5 rounded-md font-medium border border-emerald-200/50 shadow-sm">{s}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                         {currentQ.antonyms && currentQ.antonyms.length > 0 && (
                            <div>
                                <h4 className="text-[10px] font-bold text-rose-600 uppercase mb-1.5 opacity-70">Antonyms</h4>
                                <div className="flex flex-wrap gap-1">
                                    {currentQ.antonyms.slice(0, 3).map((s, i) => (
                                        <span key={i} className="text-[11px] bg-white text-rose-800 px-1.5 py-0.5 rounded-md font-medium border border-rose-200/50 shadow-sm">{s}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
                
                {/* 3. Level 3 Explanation */}
                {currentLevel === 'level3' && currentQ.explanation && (
                    <div className="mb-3 p-3 bg-white rounded-xl border border-slate-200 text-slate-600 text-xs leading-relaxed">
                        <span className="font-bold text-slate-800 block mb-0.5">Explanation:</span>
                        {currentQ.explanation}
                    </div>
                )}

                {/* 4. Bottom Status Bar */}
                <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-2">
                        {selectedOption === currentQ.answer ? (
                            <span className="flex items-center gap-1.5 text-emerald-600 font-bold text-base">
                                <CheckCircle2 size={20} className="fill-current text-emerald-100" /> Correct!
                            </span>
                        ) : (
                             <span className="flex items-center gap-1.5 text-red-600 font-bold text-base">
                                <XCircle size={20} className="fill-current text-red-100" /> Incorrect
                                <span className="text-xs font-normal text-slate-500 ml-1.5 hidden sm:inline">Ans: {String(currentQ.answer)}</span>
                            </span>
                        )}
                    </div>
                    
                    <Button onClick={nextQuestion} className="shadow-lg px-5 h-10 rounded-full text-sm">
                        {currentIndex === questions.length - 1 ? 'Finish' : 'Next'} <ArrowRight size={16} />
                    </Button>
                </div>
             </div>
         )}
      </div>
    </div>
  );
};
