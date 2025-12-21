import React, { useState } from 'react';
import { Brain, Trophy, ArrowRight } from 'lucide-react';
import { PracticeQuestion, SilsilaCategory } from '../types';
import { Button } from './Button';
import { getNotebookWords } from '../services/storageService';
import { STATIC_VOCAB_DATA } from '../data/vocabData';

export const Practice: React.FC = () => {
  const [question, setQuestion] = useState<PracticeQuestion | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [streak, setStreak] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const generateLocalQuestion = async (): Promise<PracticeQuestion> => {
    // 1. Gather all available words
    const notebookWords = await getNotebookWords();
    
    // Map notebook words
    const pool1 = notebookWords.map(w => ({ word: w.word, definition: w.meaning }));
    
    // Map static words
    const pool2: {word: string, definition: string}[] = [];
    
    // Process Trending (Simple types)
    STATIC_VOCAB_DATA[SilsilaCategory.TRENDING].forEach(item => {
        if(item.type === 'simple') {
            pool2.push({ word: item.word, definition: item.definition.split('\n')[0] });
        }
    });

    // Process Previous Year (Simple types)
    STATIC_VOCAB_DATA[SilsilaCategory.PREVIOUS_YEAR].forEach(item => {
        if(item.type === 'simple') {
            pool2.push({ word: item.word, definition: item.definition });
        }
    });

    // Process Master Collection (Detailed types)
    STATIC_VOCAB_DATA[SilsilaCategory.MASTER_COLLECTION].forEach(item => {
        if(item.type === 'detailed') {
            pool2.push({ word: item.data.word, definition: item.data.meaning });
        }
    });


    const fullPool = [...pool1, ...pool2];

    // Fallback if pool is too small
    if (fullPool.length < 4) {
        throw new Error("Not enough words to generate a question.");
    }

    // 2. Pick a correct answer
    const correctItem = fullPool[Math.floor(Math.random() * fullPool.length)];
    
    // 3. Pick 3 unique distractors
    const distractors: string[] = [];
    while (distractors.length < 3) {
        const randomItem = fullPool[Math.floor(Math.random() * fullPool.length)];
        if (randomItem.word !== correctItem.word && !distractors.includes(randomItem.word)) {
            distractors.push(randomItem.word);
        }
    }

    // 4. Shuffle options
    const options = [correctItem.word, ...distractors].sort(() => Math.random() - 0.5);

    return {
        type: 'meaning_to_word',
        prompt: correctItem.definition, // Display meaning
        answer: correctItem.word,       // User must pick word
        options: options
    };
  };

  const loadNext = async () => {
    setLoading(true);
    setQuestion(null);
    setSelectedOption(null);
    setIsCorrect(null);
    
    try {
      // Simulate slight delay for UX
      await new Promise(resolve => setTimeout(resolve, 600)); 
      const q = await generateLocalQuestion();
      setQuestion(q);
    } catch (e) {
      console.error(e);
      alert("Failed to load question. Make sure you have words in your notebook or use the static collections.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (option: string) => {
    if (selectedOption) return; // Prevent double answering
    setSelectedOption(option);
    
    if (question && option === question.answer) {
      setIsCorrect(true);
      setStreak(s => s + 1);
    } else {
      setIsCorrect(false);
      setStreak(0);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
           <h2 className="text-2xl font-bold text-slate-800">Quick Practice</h2>
           <p className="text-slate-500 text-sm">One Word Substitutions</p>
        </div>
        <div className="bg-brand-50 text-brand-700 px-4 py-2 rounded-full font-bold flex items-center gap-2 border border-brand-100">
            <Trophy size={18} className="text-brand-500" /> Streak: {streak}
        </div>
      </div>

      {!question ? (
        <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 text-center">
             <div className="bg-indigo-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="text-indigo-600" size={32} />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to test your knowledge?</h3>
             <p className="text-slate-500 mb-8">Questions generated from your Notebook and our curated "Hall of Fame" collections.</p>
             <Button onClick={loadNext} isLoading={loading} size="lg" className="w-full md:w-auto">
                {loading ? 'Shuffling Deck...' : 'Start Practice'}
             </Button>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden animate-fade-in">
            <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Identify the word for</p>
                <h3 className="text-lg md:text-xl font-medium text-slate-900 leading-relaxed italic">"{question.prompt}"</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.options.map((opt) => {
                    let btnClass = "p-4 rounded-xl border-2 text-left font-semibold transition-all ";
                    if (selectedOption) {
                        if (opt === question.answer) btnClass += "bg-emerald-100 border-emerald-500 text-emerald-800";
                        else if (opt === selectedOption) btnClass += "bg-red-100 border-red-500 text-red-800";
                        else btnClass += "border-slate-100 opacity-50";
                    } else {
                        btnClass += "border-slate-100 hover:border-brand-300 hover:bg-slate-50 text-slate-700";
                    }

                    return (
                        <button 
                            key={opt}
                            onClick={() => handleAnswer(opt)}
                            className={btnClass}
                            disabled={!!selectedOption}
                        >
                            {opt}
                        </button>
                    )
                })}
            </div>
            {selectedOption && (
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center animate-fade-in">
                    <p className={`font-bold ${isCorrect ? 'text-emerald-600' : 'text-slate-500'}`}>
                        {isCorrect ? 'Correct! Well done.' : `Incorrect. The answer is ${question.answer}.`}
                    </p>
                    <Button onClick={loadNext} variant="secondary" size="sm">
                        Next Question <ArrowRight size={16} />
                    </Button>
                </div>
            )}
        </div>
      )}
    </div>
  );
};