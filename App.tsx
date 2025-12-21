import React, { useState, useEffect } from 'react';
import { WordExplorer } from './components/WordExplorer';
import { ReadingComprehension } from './components/ReadingComprehension';
import { VocabSilsila } from './components/VocabSilsila';
import { Practice } from './components/Practice';
import { Notebook } from './components/Notebook';
import { initStorage } from './services/storageService';
import { AppTab } from './types';
import { Compass, Book, Layers, Zap, Bookmark } from 'lucide-react';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<AppTab>(AppTab.EXPLORER);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    initStorage().catch(console.error);
    
    const handleScroll = () => {
        setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => {
    switch (currentTab) {
      case AppTab.EXPLORER: return <WordExplorer />;
      case AppTab.NOTEBOOK: return <Notebook />;
      case AppTab.READING: return <ReadingComprehension />;
      case AppTab.SILSILA: return <VocabSilsila />;
      case AppTab.PRACTICE: return <Practice />;
      default: return <WordExplorer />;
    }
  };

  const navItems = [
    { id: AppTab.EXPLORER, label: 'Explorer', icon: Compass },
    { id: AppTab.SILSILA, label: 'Silsila', icon: Layers },
    { id: AppTab.NOTEBOOK, label: 'Notebook', icon: Bookmark },
    { id: AppTab.READING, label: 'Reading', icon: Book },
    { id: AppTab.PRACTICE, label: 'Practice', icon: Zap },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 overflow-x-hidden selection:bg-brand-200 selection:text-brand-900">
      
      {/* Floating Glass Header */}
      <div className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-center pointer-events-none">
        <header className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between px-2 sm:px-4 py-2 rounded-full border border-white/50 shadow-xl backdrop-blur-xl bg-white/70 max-w-5xl w-full ${scrolled ? 'shadow-slate-200/50 bg-white/80' : 'shadow-sm'}`}>
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer pl-2 group" onClick={() => setCurrentTab(AppTab.EXPLORER)}>
            <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-400 to-accent-500 rounded-xl rotate-6 group-hover:rotate-12 transition-transform opacity-80"></div>
                <div className="absolute inset-0 bg-white rounded-xl flex items-center justify-center border border-white/50 shadow-sm">
                    <span className="font-serif font-bold text-xl text-transparent bg-clip-text bg-gradient-to-tr from-brand-600 to-accent-600">L</span>
                </div>
            </div>
            <div className="hidden sm:block">
                <span className="text-lg font-serif font-bold text-slate-800 tracking-tight">Lexicon</span>
                <span className="text-xs font-semibold text-brand-600 block -mt-1 tracking-wider uppercase">AI</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-white/50">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 relative overflow-hidden
                    ${isActive 
                      ? 'text-white shadow-lg' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-white/60'
                    }`}
                >
                  {isActive && (
                      <div className="absolute inset-0 bg-slate-900 rounded-full -z-10 animate-fade-in"></div>
                  )}
                  <item.icon size={16} className={isActive ? 'text-brand-200' : ''} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Profile/Menu Placeholder */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-white border border-white flex items-center justify-center text-slate-400 shadow-inner">
             <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
          </div>

        </header>
      </div>

      {/* Spacer for Fixed Header */}
      <div className="h-28"></div>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-24 md:mb-12 relative z-0">
        {renderContent()}
      </main>

      {/* Mobile Nav (Bottom Glass) */}
      <nav className="md:hidden fixed bottom-6 left-4 right-4 bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl shadow-2xl z-50 p-2 flex justify-around items-center">
        {navItems.map((item) => {
           const isActive = currentTab === item.id;
           return (
             <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className={`flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all ${isActive ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-110' : 'text-slate-400 hover:bg-slate-50'}`}
             >
               <item.icon size={20} className={isActive ? 'text-brand-300' : ''} />
             </button>
           )
        })}
      </nav>

    </div>
  );
};

export default App;