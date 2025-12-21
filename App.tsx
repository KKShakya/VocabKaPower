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

  useEffect(() => {
    // Request persistent storage on app load
    initStorage().catch(console.error);
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
    { id: AppTab.EXPLORER, label: 'Word Explorer', icon: Compass },
    { id: AppTab.NOTEBOOK, label: 'Notebook', icon: Bookmark },
    { id: AppTab.READING, label: 'Reading Comp', icon: Book },
    { id: AppTab.SILSILA, label: 'Vocab Silsila', icon: Layers },
    { id: AppTab.PRACTICE, label: 'Practice', icon: Zap },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentTab(AppTab.EXPLORER)}>
            <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-accent-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand-500/30">
              L
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
              Lexicon AI
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2
                    ${isActive 
                      ? 'bg-slate-900 text-white shadow-md' 
                      : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                >
                  <item.icon size={16} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Mobile Nav (Bottom) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 px-6 py-3 flex justify-between items-center safe-area-bottom">
        {navItems.map((item) => {
           const isActive = currentTab === item.id;
           return (
             <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className={`flex flex-col items-center gap-1 ${isActive ? 'text-brand-600' : 'text-slate-400'}`}
             >
               <item.icon size={20} className={isActive ? 'fill-current' : ''} />
               <span className="text-[10px] font-medium">{item.label.split(' ')[0]}</span>
             </button>
           )
        })}
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full mb-20 md:mb-0">
        {renderContent()}
      </main>

    </div>
  );
};

export default App;