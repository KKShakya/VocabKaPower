import React, { useEffect, useState, useRef } from 'react';
import { getNotebookWords, deleteFromNotebook, exportNotebookData, importNotebookData, saveWordToNotebook } from '../services/storageService';
import { generateWordAnalysis, generateWordImage } from '../services/geminiService';
import { SavedWord } from '../types';
import { Trash2, X, Image as ImageIcon, Search, Download, Upload, PlusCircle, Loader2, ImageOff, CheckCircle } from 'lucide-react';
import { Button } from './Button';
import { WordCard } from './WordCard';

export const Notebook: React.FC = () => {
  const [words, setWords] = useState<SavedWord[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedWord, setSelectedWord] = useState<SavedWord | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [importing, setImporting] = useState(false);
  
  // Bulk Add State
  const [showBulkAdd, setShowBulkAdd] = useState(false);
  const [bulkInput, setBulkInput] = useState('');
  const [bulkProcessing, setBulkProcessing] = useState(false);
  const [bulkProgress, setBulkProgress] = useState('');
  const [bulkGenerateImages, setBulkGenerateImages] = useState(true);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadWords();
  }, []);

  const loadWords = async () => {
    setLoading(true);
    try {
      const data = await getNotebookWords();
      setWords(data);
    } catch (e) {
      console.error("Failed to load notebook", e);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (e: React.MouseEvent, word: string) => {
    e.stopPropagation();
    if (!window.confirm(`Delete "${word}" from your notebook?`)) return;
    
    await deleteFromNotebook(word);
    setWords(words.filter(w => w.word !== word));
    if (selectedWord?.word === word) setSelectedWord(null);
  };

  const handleExport = async () => {
    try {
        const json = await exportNotebookData();
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const date = new Date().toISOString().split('T')[0];
        a.download = `lexicon-backup-${date}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (e) {
        alert("Failed to create backup");
    }
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!window.confirm("Importing a backup will merge words into your current notebook. Existing words with the same name will be updated. Continue?")) {
        e.target.value = '';
        return;
    }

    setImporting(true);
    const reader = new FileReader();
    reader.onload = async (event) => {
        try {
            const json = event.target?.result as string;
            const count = await importNotebookData(json);
            alert(`Successfully restored ${count} words!`);
            loadWords(); // Reload UI
        } catch (err) {
            alert("Failed to restore data. Invalid file format.");
        } finally {
            setImporting(false);
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };
    reader.readAsText(file);
  };

  const handleBulkGenerate = async () => {
    if (!bulkInput.trim()) return;
    
    // Split by comma or newline and clean up
    const rawList = bulkInput.split(/[\n,]+/).map(s => s.trim()).filter(s => s.length > 0);
    if (rawList.length === 0) return;

    setBulkProcessing(true);
    const total = rawList.length;
    let completed = 0;

    for (const word of rawList) {
        setBulkProgress(`Processing "${word}" (${completed + 1}/${total})...`);
        try {
            // Step 1: Analyze
            const analysis = await generateWordAnalysis(word);
            
            // Step 2: Image (Optional)
            let imageUrl = null;
            if (bulkGenerateImages) {
                try {
                    imageUrl = await generateWordImage(word);
                } catch(err) {
                    console.warn(`Failed to generate image for ${word}`);
                }
            }
            
            // Step 3: Save
            await saveWordToNotebook({
                ...analysis,
                imageUrl,
                createdAt: Date.now()
            });
            completed++;
        } catch (e) {
            console.error(`Failed to process ${word}`, e);
        }
    }

    setBulkProgress(`Completed! Added ${completed} words.`);
    setBulkInput('');
    await loadWords(); // Refresh list
    setBulkProcessing(false);
    setTimeout(() => {
        setShowBulkAdd(false);
        setBulkProgress('');
    }, 1500);
  };

  const filteredWords = words.filter(w => 
    w.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    w.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">
       <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-8 gap-4">
        <div>
            <h2 className="text-3xl font-bold text-slate-900">My Notebook</h2>
            <p className="text-slate-500">Your personal collection of vocabulary ({words.length} words)</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto items-start sm:items-center">
             <div className="relative flex-1 sm:w-64 w-full">
                <input 
                    type="text" 
                    placeholder="Search your words..." 
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:border-brand-500 outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
            </div>
            
            <div className="flex gap-2 flex-wrap w-full sm:w-auto">
                <Button onClick={() => setShowBulkAdd(true)} className="flex-1 whitespace-nowrap bg-slate-900 hover:bg-slate-800">
                    <PlusCircle size={16} /> Add Words
                </Button>
                <Button onClick={handleExport} variant="outline" className="flex-1 whitespace-nowrap" title="Download Backup">
                    <Download size={16} />
                </Button>
                <Button onClick={handleImportClick} variant="outline" className="flex-1 whitespace-nowrap" isLoading={importing} title="Restore Backup">
                    <Upload size={16} />
                </Button>
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    accept=".json" 
                    className="hidden" 
                />
            </div>
        </div>
      </div>

      {/* Bulk Add Modal */}
      {showBulkAdd && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" onClick={() => !bulkProcessing && setShowBulkAdd(false)}>
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl p-6" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-slate-800">Bulk Generator</h3>
                    {!bulkProcessing && <button onClick={() => setShowBulkAdd(false)}><X className="text-slate-400 hover:text-slate-600" /></button>}
                </div>
                
                {!bulkProcessing ? (
                    <>
                        <p className="text-slate-600 mb-4 text-sm">Paste a list of words. AI will generate cards and save them to your notebook.</p>
                        <textarea 
                            className="w-full h-40 p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none mb-4 resize-none"
                            placeholder="e.g. Callow, Abate, Cacophony..."
                            value={bulkInput}
                            onChange={(e) => setBulkInput(e.target.value)}
                        ></textarea>
                        
                        <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => setBulkGenerateImages(!bulkGenerateImages)}>
                             <div className={`w-10 h-6 rounded-full p-1 transition-colors ${bulkGenerateImages ? 'bg-brand-500' : 'bg-slate-300'}`}>
                                 <div className={`w-4 h-4 bg-white rounded-full transition-transform ${bulkGenerateImages ? 'translate-x-4' : ''}`}></div>
                             </div>
                             <span className="text-sm text-slate-700 font-medium">Generate Images (High Storage)</span>
                        </div>

                        <div className="flex justify-end gap-3">
                            <Button variant="ghost" onClick={() => setShowBulkAdd(false)}>Cancel</Button>
                            <Button onClick={handleBulkGenerate} disabled={!bulkInput.trim()}>
                                <Loader2 size={16} className="animate-spin hidden" /> Generate
                            </Button>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-8 space-y-4">
                        <div className="animate-spin h-10 w-10 border-4 border-brand-500 border-t-transparent rounded-full mx-auto"></div>
                        <p className="text-slate-700 font-medium">{bulkProgress}</p>
                    </div>
                )}
            </div>
          </div>
      )}

      {/* Grid */}
      {loading ? (
        <div className="text-center py-20"><div className="animate-spin h-8 w-8 border-4 border-brand-500 border-t-transparent rounded-full mx-auto"></div></div>
      ) : words.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 flex flex-col items-center">
            <div className="bg-slate-50 p-6 rounded-full mb-4">
                <ImageIcon size={48} className="text-slate-300" />
            </div>
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Your notebook is empty</h3>
            <p className="text-slate-500 max-w-sm mb-6">Click "Add Words" to bulk generate cards.</p>
            <Button onClick={() => setShowBulkAdd(true)}>
                <PlusCircle size={16} /> Start Generating
            </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredWords.map(word => (
                <div 
                    key={word.word} 
                    onClick={() => setSelectedWord(word)}
                    className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden cursor-pointer hover:shadow-md hover:border-brand-200 transition-all group flex flex-col relative"
                >
                    <div className={`h-40 relative overflow-hidden flex items-center justify-center ${word.imageUrl ? 'bg-slate-100' : 'bg-gradient-to-br from-brand-500 to-accent-600'}`}>
                        {word.imageUrl ? (
                            <img src={word.imageUrl} alt={word.word} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        ) : (
                            <div className="text-white text-center p-4">
                                <h3 className="text-2xl font-bold capitalize mb-1">{word.word}</h3>
                                <p className="text-white/80 text-xs uppercase tracking-wider">{word.partOfSpeech}</p>
                            </div>
                        )}
                        
                        {/* Overlay Controls */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                            <button 
                                onClick={(e) => handleDelete(e, word.word)}
                                className="bg-white/90 p-2 rounded-full text-red-500 hover:text-red-600 hover:bg-white shadow-sm"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                         {word.imageUrl && (
                            <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                <p className="text-xs font-bold uppercase tracking-wider bg-black/30 px-2 py-1 rounded backdrop-blur-sm">{word.partOfSpeech}</p>
                            </div>
                         )}
                    </div>
                    <div className="p-4 flex-1 flex flex-col bg-white">
                        {word.imageUrl && <h3 className="text-xl font-bold text-slate-900 capitalize mb-1">{word.word}</h3>}
                        <p className="text-slate-500 text-sm line-clamp-3">{word.meaning}</p>
                    </div>
                </div>
            ))}
        </div>
      )}

      {/* Detail Modal */}
      {selectedWord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" onClick={() => setSelectedWord(null)}>
            <div className="w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <WordCard 
                    data={selectedWord} 
                    onSave={() => handleDelete({ stopPropagation: () => {} } as any, selectedWord.word)} 
                    isSaved={true} 
                />
                 <div className="mt-4 text-center">
                    <button onClick={() => setSelectedWord(null)} className="text-white/80 hover:text-white text-sm bg-white/10 px-4 py-2 rounded-full">Close</button>
                 </div>
            </div>
        </div>
      )}
    </div>
  );
};