import React, { useState } from 'react';
import { BookOpen, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { generateReadingComprehension } from '../services/geminiService';
import { ReadingComprehension as RCData } from '../types';
import { Button } from './Button';

export const ReadingComprehension: React.FC = () => {
  const [data, setData] = useState<RCData | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const fetchPassage = async () => {
    setLoading(true);
    setData(null);
    setSelectedAnswers({});
    setShowResults(false);
    try {
      const result = await generateReadingComprehension();
      setData(result);
    } catch (e) {
      console.error(e);
      alert("Failed to generate reading comprehension. Ensure API key is set.");
    } finally {
      setLoading(false);
    }
  };

  const handleOptionSelect = (qId: number, option: string) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const score = data ? data.questions.reduce((acc, q) => {
    return acc + (selectedAnswers[q.id] === q.correctAnswer ? 1 : 0);
  }, 0) : 0;

  return (
    <div className="max-w-3xl mx-auto">
      {!data && (
        <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
          <BookOpen size={64} className="mx-auto text-brand-200 mb-6" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Reading Comprehension</h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">Practice with AI-generated passages on viral and trending topics to improve your speed and accuracy.</p>
          <Button onClick={fetchPassage} isLoading={loading} size="lg">
            {loading ? 'Generating Passage...' : 'Start New Session'}
          </Button>
        </div>
      )}

      {data && (
        <div className="space-y-8 animate-fade-in">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{data.title}</h2>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-lg">
              {data.passage.split('\n').map((para, idx) => <p key={idx} className="mb-4">{para}</p>)}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-800">Questions</h3>
            {data.questions.map((q, idx) => (
              <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <p className="font-semibold text-slate-900 mb-4">{idx + 1}. {q.question}</p>
                <div className="space-y-3">
                  {q.options.map((opt) => {
                    const isSelected = selectedAnswers[q.id] === opt;
                    const isCorrect = q.correctAnswer === opt;
                    
                    let className = "w-full text-left p-3 rounded-lg border transition-all text-sm ";
                    
                    if (showResults) {
                      if (isCorrect) className += "bg-emerald-50 border-emerald-500 text-emerald-800 font-medium";
                      else if (isSelected && !isCorrect) className += "bg-red-50 border-red-500 text-red-800";
                      else className += "bg-white border-slate-200 opacity-60";
                    } else {
                      if (isSelected) className += "bg-brand-50 border-brand-500 text-brand-800";
                      else className += "bg-white border-slate-200 hover:bg-slate-50";
                    }

                    return (
                      <button
                        key={opt}
                        onClick={() => handleOptionSelect(q.id, opt)}
                        className={className}
                        disabled={showResults}
                      >
                        <div className="flex items-center justify-between">
                          <span>{opt}</span>
                          {showResults && isCorrect && <CheckCircle size={16} className="text-emerald-600" />}
                          {showResults && isSelected && !isCorrect && <XCircle size={16} className="text-red-600" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="sticky bottom-6 flex justify-center">
            {!showResults ? (
              <Button 
                onClick={checkAnswers} 
                className="shadow-xl"
                disabled={Object.keys(selectedAnswers).length < data.questions.length}
              >
                Submit Answers
              </Button>
            ) : (
              <div className="bg-slate-900 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-4">
                <span className="font-bold">Score: {score}/{data.questions.length}</span>
                <div className="h-4 w-px bg-slate-700"></div>
                <button onClick={fetchPassage} className="text-sm font-medium hover:text-brand-300 flex items-center gap-1">
                  <RefreshCw size={14} /> Next Passage
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};