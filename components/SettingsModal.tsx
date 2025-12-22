
import React, { useState, useEffect } from 'react';
import { X, Server, Wifi, WifiOff, Save, AlertCircle, Upload, Loader2, CheckCircle2, RefreshCw } from 'lucide-react';
import { Button } from './Button';
import { getApiSettings, saveApiSettings, migrateLocalToCloud, validateApiConnection, ConnectionTestResult } from '../services/storageService';
import { ApiSettings } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, onSave }) => {
  const [settings, setSettings] = useState<ApiSettings>({
    baseUrl: '',
    authToken: '',
    enabled: false
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'failed'>('idle');
  const [testResult, setTestResult] = useState<ConnectionTestResult | null>(null);
  
  // Migration State
  const [migrationStatus, setMigrationStatus] = useState<'idle' | 'processing' | 'done'>('idle');
  const [migrationProgress, setMigrationProgress] = useState({ current: 0, total: 0 });

  useEffect(() => {
    if (isOpen) {
      setSettings(getApiSettings());
      setStatus('idle');
      setTestStatus('idle');
      setTestResult(null);
      setMigrationStatus('idle');
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Reset test status if URL changes
    if (name === 'baseUrl') {
        setTestStatus('idle');
        setTestResult(null);
    }
  };

  const handleTestConnection = async () => {
      if (!settings.baseUrl) return;
      setTestStatus('testing');
      setTestResult(null);
      const result = await validateApiConnection(settings);
      setTestResult(result);
      setTestStatus(result.success ? 'success' : 'failed');
  };

  const handleSave = () => {
    if (settings.enabled && !settings.baseUrl) {
        setStatus('error');
        return;
    }
    saveApiSettings(settings);
    setStatus('success');
    setTimeout(() => {
        onSave();
        onClose();
    }, 800);
  };

  const handleMigration = async () => {
    if (!settings.enabled || !settings.baseUrl) {
        alert("Please enable Cloud Sync and enter a valid URL first.");
        return;
    }
    
    // Save settings first to ensure the migration tool picks up the latest URL
    saveApiSettings(settings);

    if (!window.confirm("This will upload all words from your Local Storage to your Backend API. Continue?")) {
        return;
    }

    setMigrationStatus('processing');
    try {
        await migrateLocalToCloud((current, total) => {
            setMigrationProgress({ current, total });
        });
        setMigrationStatus('done');
    } catch (e) {
        console.error(e);
        alert("Migration failed. Check console for details.");
        setMigrationStatus('idle');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-2 text-slate-800">
                <Server size={20} className="text-brand-500" />
                <h3 className="font-bold text-lg">Backend Connection</h3>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
                <X size={20} />
            </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            
            <p className="text-sm text-slate-500 leading-relaxed">
                Connect Lexicon to your own backend API. We will append <code>/vocab</code> to the URL automatically.
            </p>

            {/* Toggle */}
            <label className="flex items-center justify-between p-4 rounded-xl border border-slate-200 cursor-pointer hover:border-brand-300 transition-colors bg-slate-50/50">
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${settings.enabled ? 'bg-brand-100 text-brand-600' : 'bg-slate-200 text-slate-500'}`}>
                        {settings.enabled ? <Wifi size={20} /> : <WifiOff size={20} />}
                    </div>
                    <div>
                        <div className="font-semibold text-slate-700">Cloud Sync</div>
                        <div className="text-xs text-slate-500">{settings.enabled ? 'Active' : 'Disabled'}</div>
                    </div>
                </div>
                <div className="relative">
                    <input 
                        type="checkbox" 
                        name="enabled" 
                        checked={settings.enabled} 
                        onChange={handleChange} 
                        className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-500"></div>
                </div>
            </label>

            {/* Fields */}
            <div className={`space-y-4 transition-all duration-300 ${settings.enabled ? 'opacity-100' : 'opacity-50 pointer-events-none grayscale'}`}>
                <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5 ml-1">Server Base URL</label>
                    <div className="flex gap-2 items-start">
                        <input 
                            type="text" 
                            name="baseUrl"
                            value={settings.baseUrl}
                            onChange={handleChange}
                            placeholder="http://localhost:3000"
                            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-400 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all text-sm font-mono shadow-sm"
                        />
                         <button 
                            onClick={handleTestConnection}
                            disabled={!settings.baseUrl || testStatus === 'testing'}
                            className={`px-3 py-2.5 rounded-xl border text-sm font-medium transition-colors shadow-sm ${
                                testStatus === 'success' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                                testStatus === 'failed' ? 'bg-red-50 text-red-600 border-red-200' :
                                'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                            title="Test Connection"
                         >
                            {testStatus === 'testing' ? <Loader2 size={16} className="animate-spin" /> : 
                             testStatus === 'success' ? <CheckCircle2 size={16} /> :
                             testStatus === 'failed' ? <AlertCircle size={16} /> :
                             <RefreshCw size={16} />
                            }
                         </button>
                    </div>
                    
                    {/* Detailed Diagnostics */}
                    {testStatus === 'failed' && testResult && (
                        <div className="mt-2 p-3 bg-red-50 rounded-lg border border-red-100 text-[11px] text-red-700 leading-relaxed font-mono">
                            <p className="font-bold mb-1 flex items-center gap-1"><AlertCircle size={12}/> Connection Failed</p>
                            <div className="mb-2 opacity-90 pl-4 border-l-2 border-red-200">
                                <div className="font-bold">{testResult.message}</div>
                                <div className="text-[10px] text-slate-500 break-all mt-0.5">Attempted: {testResult.url}</div>
                                {testResult.code === 404 && (
                                    <div className="text-orange-600 mt-1 font-bold font-sans">
                                        Tip: We received a 404. Did you accidentally add `/vocab` to your input?
                                    </div>
                                )}
                            </div>
                            
                            <p className="font-bold font-sans mt-2 mb-1 text-red-800">Checklist:</p>
                            <ul className="list-disc pl-4 space-y-0.5 opacity-90 font-sans">
                                <li><strong>CORS:</strong> Does your server allow Origin <code>*</code>?</li>
                                <li><strong>Preflight:</strong> Auth Tokens add complexity. Try removing the token to see if it connects.</li>
                                <li><strong>Vercel/Cloud:</strong> Ensure your project is deployed and public.</li>
                            </ul>
                        </div>
                    )}
                    
                    {testStatus === 'success' && (
                        <p className="text-[10px] text-emerald-600 font-medium mt-1 ml-1 flex items-center gap-1">
                            <CheckCircle2 size={12} /> Successfully connected to /vocab
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5 ml-1">Auth Token <span className="text-slate-300 font-normal">(Optional)</span></label>
                    <input 
                        type="password" 
                        name="authToken"
                        value={settings.authToken}
                        onChange={handleChange}
                        placeholder="Bearer token or API Key"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-400 focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all text-sm font-mono shadow-sm"
                    />
                </div>
            </div>

            {/* Migration Tool */}
            {settings.enabled && (
                <div className="pt-4 border-t border-slate-100 animate-fade-in">
                    <h4 className="text-xs font-bold uppercase text-slate-500 mb-3 ml-1">Data Migration</h4>
                    {migrationStatus === 'idle' && (
                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                             <div className="flex items-start gap-3">
                                <Upload className="text-blue-500 mt-1" size={20} />
                                <div>
                                    <h5 className="font-semibold text-blue-900 text-sm">Upload Local Data</h5>
                                    <p className="text-xs text-blue-700 mt-1 mb-3">Push all existing words from this browser to your connected cloud API.</p>
                                    <button 
                                        onClick={handleMigration}
                                        className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg transition-colors font-medium"
                                    >
                                        Start Upload
                                    </button>
                                </div>
                             </div>
                        </div>
                    )}

                    {migrationStatus === 'processing' && (
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                            <Loader2 className="animate-spin text-brand-500 mx-auto mb-2" size={24} />
                            <div className="text-sm font-bold text-slate-700">Uploading...</div>
                            <div className="text-xs text-slate-500 mt-1">{migrationProgress.current} / {migrationProgress.total} words</div>
                        </div>
                    )}

                    {migrationStatus === 'done' && (
                        <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 flex items-center gap-3">
                            <CheckCircle2 className="text-emerald-500" size={24} />
                            <div>
                                <div className="text-sm font-bold text-emerald-800">Migration Complete</div>
                                <div className="text-xs text-emerald-600">All local words have been sent to the cloud.</div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg animate-fade-in">
                    <AlertCircle size={16} /> <span>API URL is required when enabled.</span>
                </div>
            )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 flex justify-end">
            <Button onClick={handleSave} className="w-full sm:w-auto">
                {status === 'success' ? 'Saved!' : <><Save size={16} /> Save Configuration</>}
            </Button>
        </div>

      </div>
    </div>
  );
};
