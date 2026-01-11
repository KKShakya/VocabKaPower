
import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, XCircle, RefreshCw, Feather, Target, HelpCircle, FileText, ArrowRight, Timer } from 'lucide-react';
import { generateReadingComprehension } from '../services/geminiService';
import { ReadingComprehension as RCData } from '../types';
import { Button } from './Button';

export const ReadingComprehension: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [data, setData] = useState<RCData | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(210); // 3 minutes 30 seconds

  const fetchPassage = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setData(null);
    setSelectedAnswers({});
    setShowResults(false);
    setTimeLeft(210); // Reset timer to 3m 30s
    try {
      const result = await generateReadingComprehension(topic);
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
    // Smooth scroll to analysis
    setTimeout(() => {
        document.getElementById('analysis-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    if (!data || showResults) return;

    if (timeLeft === 0) {
      checkAnswers();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [data, showResults, timeLeft]);

  const score = data ? data.questions.reduce((acc, q) => {
    return acc + (selectedAnswers[q.id] === q.correctAnswer ? 1 : 0);
  }, 0) : 0;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="max-w-4xl mx-auto pb-12 relative">
      
      {/* Search Header */}
      <div className={`transition-all duration-500 ${!data ? 'min-h-[60vh] flex flex-col justify-center' : 'mb-8'}`}>
          <div className="text-center space-y-6 bg-white/60 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-xl shadow-brand-900/5">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 mb-2">
                <BookOpen size={32} />
            </div>
            <h2 className="text-4xl font-serif font-bold text-slate-900">Editorial Reading</h2>
            <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
                Enter a topic (e.g. "Climate Policy", "Indian Economy") and we will generate a high-level editorial in the style of 
                <span className="font-bold text-slate-800"> "The Hindu"</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto pt-4">
                <input 
                    type="text" 
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter topic (e.g. Artificial Intelligence)"
                    className="flex-1 px-6 py-4 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all shadow-sm"
                    onKeyDown={(e) => e.key === 'Enter' && fetchPassage()}
                />
                <Button onClick={fetchPassage} isLoading={loading} size="lg" className="shadow-lg">
                    Generate
                </Button>
            </div>
          </div>
      </div>

      {data && (
        <div className="space-y-8 animate-fade-in relative">
          
          {/* Timer Sticky Header */}
          {!showResults && (
            <div className="sticky top-24 z-30 flex justify-center pointer-events-none">
                <div className={`pointer-events-auto flex items-center gap-3 px-6 py-2 rounded-full shadow-lg border backdrop-blur-md transition-colors duration-500 ${
                    timeLeft < 30 ? 'bg-red-500 text-white border-red-400 animate-pulse' : 
                    timeLeft < 60 ? 'bg-amber-100 text-amber-800 border-amber-200' : 
                    'bg-slate-900 text-white border-slate-700'
                }`}>
                    <Timer size={18} className={timeLeft < 30 ? 'animate-spin' : ''} />
                    <span className="font-mono font-bold text-lg">{formatTime(timeLeft)}</span>
                    <span className="text-xs opacity-80 uppercase font-bold tracking-wider border-l pl-3 ml-1 border-white/20">Time Remaining</span>
                </div>
            </div>
          )}

          {/* Main Passage */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-500 to-accent-600"></div>
            <div className="mb-6 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded">Editorial</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-2 py-1 rounded">{data.sourceTopic}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">{data.title}</h2>
            </div>
            
            <div className="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed font-serif">
              {data.passage.split('\n').map((para, idx) => {
                  if(!para.trim()) return null;
                  return <p key={idx} className="mb-4 first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-1 first-letter:float-left">{para}</p>
              })}
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <HelpCircle size={20} className="text-brand-500" />
                Comprehension Check
            </h3>
            <div className="grid gap-6">
                {data.questions.map((q, idx) => (
                <div key={q.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
                    <p className="font-bold text-slate-900 mb-4 text-lg flex gap-3">
                        <span className="text-slate-300 font-serif text-2xl">0{idx + 1}.</span>
                        {q.question}
                    </p>
                    <div className="space-y-3 pl-0 sm:pl-9">
                    {q.options.map((opt) => {
                        const isSelected = selectedAnswers[q.id] === opt;
                        const isCorrect = q.correctAnswer === opt;
                        
                        let className = "w-full text-left p-4 rounded-xl border-2 transition-all text-sm font-medium flex items-center justify-between group ";
                        
                        if (showResults) {
                        if (isCorrect) className += "bg-emerald-50 border-emerald-500 text-emerald-800";
                        else if (isSelected && !isCorrect) className += "bg-red-50 border-red-500 text-red-800 opacity-80";
                        else className += "bg-white border-slate-100 opacity-50";
                        } else {
                        if (isSelected) className += "bg-brand-50 border-brand-500 text-brand-800 shadow-sm";
                        else className += "bg-white border-slate-100 hover:border-brand-200 hover:bg-slate-50 text-slate-600";
                        }

                        return (
                        <button
                            key={opt}
                            onClick={() => handleOptionSelect(q.id, opt)}
                            className={className}
                            disabled={showResults}
                        >
                            <span className="flex-1">{opt}</span>
                            {showResults && isCorrect && <CheckCircle size={18} className="text-emerald-600 ml-2 shrink-0" />}
                            {showResults && isSelected && !isCorrect && <XCircle size={18} className="text-red-600 ml-2 shrink-0" />}
                            {!showResults && <div className={`w-4 h-4 rounded-full border-2 ${isSelected ? 'border-brand-500 bg-brand-500' : 'border-slate-300 group-hover:border-brand-300'} ml-2 transition-colors`}></div>}
                        </button>
                        );
                    })}
                    </div>
                </div>
                ))}
            </div>
          </div>

          {/* Submit / Score */}
          <div className="sticky bottom-6 flex justify-center z-40">
            {!showResults ? (
              <Button 
                onClick={checkAnswers} 
                className="shadow-2xl scale-110"
                size="lg"
                disabled={Object.keys(selectedAnswers).length < data.questions.length && timeLeft > 0}
              >
                Submit Answers <ArrowRight size={18} />
              </Button>
            ) : (
              <div className="bg-slate-900 text-white px-8 py-3 rounded-full shadow-2xl flex items-center gap-6 animate-float">
                <span className="font-bold text-xl flex items-center gap-2">
                    <Target className="text-brand-400" />
                    Score: {score}/{data.questions.length}
                </span>
                <div className="h-6 w-px bg-slate-700"></div>
                <button onClick={fetchPassage} className="text-sm font-bold text-brand-300 hover:text-white flex items-center gap-2 transition-colors">
                  <RefreshCw size={16} /> New Topic
                </button>
              </div>
            )}
          </div>

          {/* Deep Analysis (Revealed after submission) */}
          {showResults && (
              <div id="analysis-section" className="pt-8 border-t-2 border-slate-100/50 space-y-8 animate-fade-in">
                  <div className="text-center">
                      <h3 className="text-2xl font-serif font-bold text-slate-900">Editorial Analysis</h3>
                      <p className="text-slate-500">Deep dive into the text's structure and vocabulary</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                      {/* Main Idea */}
                      <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                          <div className="flex items-center gap-2 mb-3 text-amber-800 font-bold uppercase tracking-wider text-xs">
                              <Target size={16} /> Main Idea
                          </div>
                          <p className="text-amber-900 font-medium leading-relaxed">
                              {data.mainIdea}
                          </p>
                      </div>

                      {/* Inference */}
                      <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                          <div className="flex items-center gap-2 mb-3 text-indigo-800 font-bold uppercase tracking-wider text-xs">
                              <Feather size={16} /> Inference
                          </div>
                          <p className="text-indigo-900 font-medium leading-relaxed">
                              {data.inference}
                          </p>
                      </div>
                  </div>

                  {/* Tone */}
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                          <FileText size={24} className="text-slate-700" />
                      </div>
                      <div>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Author's Tone</span>
                          <p className="text-lg font-bold text-slate-800">{data.tone}</p>
                      </div>
                  </div>

                  {/* Vocab Analysis */}
                  <div>
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <Target size={20} className="text-brand-500" /> Unique Vocabulary
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4">
                          {data.vocab.map((v, i) => (
                              <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                                  <div className="flex justify-between items-start mb-2">
                                      <h5 className="text-lg font-bold text-slate-800 capitalize">{v.word}</h5>
                                  </div>
                                  <p className="text-sm text-slate-600 mb-3 italic">"{v.contextMeaning}"</p>
                                  
                                  <div className="space-y-2">
                                      <div>
                                          <span className="text-[10px] font-bold text-emerald-600 uppercase">Synonyms</span>
                                          <div className="flex flex-wrap gap-1 mt-1">
                                              {v.synonyms.slice(0, 2).map(s => <span key={s} className="text-xs bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded">{s}</span>)}
                                          </div>
                                      </div>
                                      <div>
                                          <span className="text-[10px] font-bold text-rose-600 uppercase">Antonyms</span>
                                          <div className="flex flex-wrap gap-1 mt-1">
                                              {v.antonyms.slice(0, 2).map(s => <span key={s} className="text-xs bg-rose-50 text-rose-700 px-1.5 py-0.5 rounded">{s}</span>)}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          )}
        </div>
      )}
    </div>
  );
};
