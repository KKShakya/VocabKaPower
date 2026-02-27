import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  RotateCcw, 
  Trophy, 
  FileText, 
  MessageSquare,
  BarChart3,
  Sparkles,
  Zap,
  Building2,
  Landmark,
  Wallet,
  Globe
} from 'lucide-react';
import Markdown from 'react-markdown';
import { DescriptiveTask, DescriptiveEvaluation, DescriptiveTaskType, ExamCategory } from '../types';
import { evaluateDescriptiveTask, generateDescriptiveTask } from '../services/geminiService';
import { Button } from './Button';

const DescriptiveTest: React.FC = () => {
  const [step, setStep] = useState<'selection' | 'generating' | 'writing' | 'evaluation' | 'timeup'>('selection');
  const [selectedType, setSelectedType] = useState<DescriptiveTaskType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ExamCategory | null>(null);
  const [task, setTask] = useState<DescriptiveTask | null>(null);
  const [response, setResponse] = useState<string>("");
  const [evaluation, setEvaluation] = useState<DescriptiveEvaluation | null>(null);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isTimerRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      setStep('timeup');
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartGeneration = async () => {
    if (!selectedType || !selectedCategory) return;
    
    setStep('generating');
    setError(null);
    try {
      const generatedTask = await generateDescriptiveTask(selectedType, selectedCategory);
      setTask(generatedTask);
      setStep('writing');
      setTimeLeft(15 * 60);
      setIsTimerRunning(true);
    } catch (err) {
      console.error("Generation failed:", err);
      setError("Failed to generate task. Please try again.");
      setStep('selection');
    }
  };

  const handleResponseChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResponse(e.target.value);
  };

  const handleSubmit = async () => {
    if (!task) return;
    setIsTimerRunning(false);
    setIsEvaluating(true);
    setStep('evaluation');

    try {
      const result = await evaluateDescriptiveTask(task.type, task.prompt, response, task.passage);
      setEvaluation(result);
    } catch (err) {
      console.error("Evaluation failed:", err);
      setError("Evaluation failed. Please try again.");
    } finally {
      setIsEvaluating(false);
    }
  };

  const getWordCount = (text: string) => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  const renderSelection = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">Descriptive Test Practice</h2>
        <p className="text-slate-600">Choose your exam category and task type. AI will generate a unique topic for you.</p>
      </div>

      <div className="space-y-10">
        {/* Exam Category Selection */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 px-2">1. Select Exam Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { id: ExamCategory.NABARD, icon: Landmark, label: 'NABARD', desc: 'Agriculture' },
              { id: ExamCategory.RBI, icon: Building2, label: 'RBI', desc: 'Finance' },
              { id: ExamCategory.SBI, icon: Wallet, label: 'SBI', desc: 'Banking' },
              { id: ExamCategory.IBPS, icon: Landmark, label: 'IBPS', desc: 'Banking' },
              { id: ExamCategory.SSC, icon: Globe, label: 'SSC', desc: 'General' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all ${
                  selectedCategory === cat.id 
                    ? 'border-brand-500 bg-brand-50 shadow-lg' 
                    : 'border-white bg-white/60 hover:border-slate-200'
                }`}
              >
                <cat.icon size={24} className={selectedCategory === cat.id ? 'text-brand-600' : 'text-slate-400'} />
                <span className="text-sm font-bold mt-2 text-slate-800">{cat.label}</span>
                <span className="text-[10px] text-slate-400 uppercase font-medium">{cat.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Task Type Selection */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 px-2">2. Select Task Type</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 'essay', label: 'Essay Writing', desc: '250-300 Words', icon: FileText },
              { id: 'precis', label: 'Precis Writing', desc: '60-90 Words', icon: Zap },
              { id: 'letter', label: 'Letter Writing', desc: '150-200 Words', icon: MessageSquare },
            ].map(type => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id as DescriptiveTaskType)}
                className={`flex items-center gap-4 p-6 rounded-2xl border-2 transition-all text-left ${
                  selectedType === type.id 
                    ? 'border-brand-500 bg-brand-50 shadow-lg' 
                    : 'border-white bg-white/60 hover:border-slate-200'
                }`}
              >
                <div className={`p-3 rounded-xl ${selectedType === type.id ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                  <type.icon size={24} />
                </div>
                <div>
                  <span className="block text-lg font-bold text-slate-800">{type.label}</span>
                  <span className="text-xs text-slate-500">{type.desc}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-8 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm">
          <AlertCircle size={18} />
          {error}
        </div>
      )}

      <div className="mt-12 flex justify-center">
        <Button 
          onClick={handleStartGeneration} 
          disabled={!selectedType || !selectedCategory}
          className="px-12 py-4 rounded-full text-lg shadow-xl shadow-brand-500/20 flex items-center gap-2"
        >
          <Sparkles size={20} /> Generate My Task
        </Button>
      </div>
    </div>
  );

  const renderGenerating = () => (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-4 border-brand-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-brand-500 rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="text-brand-500 animate-pulse" size={32} />
        </div>
      </div>
      <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">Generating Your Task...</h2>
      <p className="text-slate-500 text-center max-w-md">Creating a unique {selectedType} topic for {selectedCategory} exam standards.</p>
    </div>
  );

  const renderWriting = () => {
    if (!task) return null;
    const wordCount = getWordCount(response);
    const isWithinLimit = wordCount >= task.wordLimit.min && wordCount <= task.wordLimit.max;

    return (
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-slate-900 text-white px-6 py-3 rounded-2xl flex items-center gap-3 font-mono text-2xl shadow-xl border border-white/10">
              <Clock size={24} className={timeLeft < 180 ? 'text-red-400 animate-pulse' : 'text-brand-400'} />
              {formatTime(timeLeft)}
            </div>
            <div className="px-4 py-2 bg-white/60 backdrop-blur-md rounded-xl border border-white/80 text-xs font-bold text-slate-500 uppercase tracking-widest">
              {selectedCategory} • {selectedType}
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={handleSubmit}
            className="rounded-full border-slate-300 hover:bg-slate-900 hover:text-white px-8"
          >
            Submit for Evaluation
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Prompt Side */}
          <div className="glass-card p-8 rounded-3xl h-fit sticky top-28">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="text-brand-500" size={20} />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Assignment</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">{task.title}</h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
              <p className="text-slate-700 leading-relaxed italic">"{task.prompt}"</p>
            </div>
            
            {task.passage && (
              <div className="mt-6">
                <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <MessageSquare size={16} /> Reading Passage
                </h4>
                <div className="bg-white/50 p-6 rounded-2xl border border-white/80 text-sm text-slate-600 leading-relaxed max-h-[400px] overflow-y-auto custom-scrollbar">
                  {task.passage}
                </div>
              </div>
            )}

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white/40 p-4 rounded-2xl border border-white/60">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Target Limit</span>
                <span className="text-lg font-bold text-slate-800">{task.wordLimit.min}-{task.wordLimit.max}</span>
              </div>
              <div className="bg-white/40 p-4 rounded-2xl border border-white/60">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Current Count</span>
                <span className={`text-lg font-bold ${isWithinLimit ? 'text-brand-600' : 'text-amber-500'}`}>
                  {wordCount}
                </span>
              </div>
            </div>
          </div>

          {/* Editor Side */}
          <div className="flex flex-col gap-4">
            <textarea
              value={response}
              onChange={handleResponseChange}
              placeholder="Start typing your response here..."
              className="w-full h-[600px] p-8 rounded-3xl bg-white border-2 border-transparent focus:border-brand-500 shadow-2xl outline-none resize-none font-sans text-lg leading-relaxed transition-all"
            />
            <div className="flex justify-between items-center px-2">
              <p className="text-xs text-slate-400 italic">Timer is running. Stay focused.</p>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${timeLeft < 60 ? 'bg-red-500 animate-ping' : 'bg-brand-500'}`}></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Live Session</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTimeUp = () => (
    <div className="max-w-md mx-auto text-center py-20">
      <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <Clock size={40} />
      </div>
      <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Time is Up!</h2>
      <p className="text-slate-600 mb-8">You couldn't complete the task within the 15-minute limit. In a real exam, this would be a critical failure.</p>
      <div className="flex flex-col gap-4">
        <Button onClick={handleSubmit} className="w-full">Evaluate Partial Work</Button>
        <Button variant="outline" onClick={() => setStep('selection')} className="w-full">Restart New Test</Button>
      </div>
    </div>
  );

  const renderEvaluation = () => {
    if (isEvaluating) {
      return (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="relative w-24 h-24 mb-8">
            <div className="absolute inset-0 border-4 border-brand-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-brand-500 rounded-full border-t-transparent animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <BarChart3 className="text-brand-500 animate-pulse" size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">Analyzing Your Performance...</h2>
          <p className="text-slate-500 text-center max-w-md">Checking against {selectedCategory} standards and {selectedType} guidelines.</p>
        </div>
      );
    }

    if (!evaluation || !task) return null;

    return (
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-slate-900">Performance Report</h2>
          <Button 
            variant="outline" 
            onClick={() => {
              setStep('selection');
              setResponse("");
              setEvaluation(null);
              setTask(null);
              setTimeLeft(15 * 60);
            }}
            className="rounded-full flex items-center gap-2"
          >
            <RotateCcw size={18} /> New Test
          </Button>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden border border-white/80 shadow-2xl">
          {/* Header Section */}
          <div className="bg-slate-900 p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-brand-500 text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
                  {task.type}
                </span>
                <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">{selectedCategory} EXAM</span>
              </div>
              <h3 className="text-2xl font-serif font-bold">{task.title}</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-3xl font-bold text-brand-400">{evaluation.score}/100</div>
                <div className="text-xs text-slate-400 uppercase font-bold tracking-widest">Overall Score</div>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <Trophy className="text-brand-400" size={32} />
              </div>
            </div>
          </div>

          <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Scores & Stats */}
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <BarChart3 size={16} className="text-brand-500" /> Scoring Breakdown
                </h4>
                <div className="space-y-4">
                  {[
                    { label: 'Structure', score: evaluation.structureScore },
                    { label: 'Content', score: evaluation.contentScore },
                    { label: 'Grammar', score: evaluation.grammarScore },
                  ].map(stat => (
                    <div key={stat.label}>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-slate-500">{stat.label}</span>
                        <span className="text-slate-900">{stat.score}/10</span>
                      </div>
                      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-brand-500 rounded-full" 
                          style={{ width: `${(stat.score / 10) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-sm font-bold text-slate-900 mb-3">Word Count Analysis</h4>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-800">{evaluation.wordCount}</span>
                  <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                    evaluation.wordCount >= task.wordLimit.min && evaluation.wordCount <= task.wordLimit.max
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {evaluation.wordCount < task.wordLimit.min ? 'Too Short' : 
                     evaluation.wordCount > task.wordLimit.max ? 'Too Long' : 'Perfect'}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 mt-2 italic">Target: {task.wordLimit.min}-{task.wordLimit.max} words</p>
              </div>
            </div>

            {/* Middle: Feedback & Strengths */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-brand-50/30 p-6 rounded-2xl border border-brand-100">
                <h4 className="text-sm font-bold text-slate-900 mb-3">Examiner's Feedback</h4>
                <div className="markdown-body text-slate-700 leading-relaxed">
                  <Markdown>{evaluation.feedback}</Markdown>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                  <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3">Strengths</h4>
                  <ul className="space-y-2">
                    {evaluation.strengths.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={14} className="text-emerald-500 mt-1 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                  <h4 className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-3">Areas for Improvement</h4>
                  <ul className="space-y-2">
                    {evaluation.weaknesses.map((w, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <AlertCircle size={14} className="text-amber-500 mt-1 flex-shrink-0" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom: Grammar Corrections */}
            {evaluation.grammarErrors.length > 0 && (
              <div className="lg:col-span-3">
                <h4 className="text-sm font-bold text-slate-900 mb-4 px-2">Grammar & Punctuation Corrections</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {evaluation.grammarErrors.map((err, i) => (
                    <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">Error</span>
                        <span className="text-sm text-slate-400 line-through">"{err.error}"</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded">Correction</span>
                        <span className="text-sm font-bold text-slate-800">"{err.correction}"</span>
                      </div>
                      <p className="text-xs text-slate-500 italic">{err.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Model Answer Section */}
            <div className="lg:col-span-3 mt-6">
              <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Trophy size={120} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="text-brand-400" size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-400">Model Answer (85-90 Marks)</span>
                  </div>
                  <h4 className="text-2xl font-serif font-bold mb-6">How a Pro would have written it:</h4>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-slate-200 leading-relaxed whitespace-pre-wrap font-sans">
                    {evaluation.modelAnswer}
                  </div>
                  <p className="mt-4 text-xs text-slate-400 italic">
                    Note: This version demonstrates ideal structure, vocabulary, and content depth for {selectedCategory} standards.
                  </p>
                </div>
              </div>
            </div>

            {/* User's Original Text */}
            <div className="lg:col-span-3 mt-4">
              <button 
                onClick={() => {
                  const el = document.getElementById(`original-text-view`);
                  if (el) el.classList.toggle('hidden');
                }}
                className="text-xs font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1 mb-2"
              >
                View Your Submission <ChevronRight size={14} />
              </button>
              <div id={`original-text-view`} className="hidden bg-slate-50 p-6 rounded-2xl border border-slate-100 text-sm text-slate-600 whitespace-pre-wrap leading-relaxed">
                {response}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {step === 'selection' && renderSelection()}
          {step === 'generating' && renderGenerating()}
          {step === 'writing' && renderWriting()}
          {step === 'timeup' && renderTimeUp()}
          {step === 'evaluation' && renderEvaluation()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DescriptiveTest;
