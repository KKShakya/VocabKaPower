
import { SavedWord, ApiSettings } from "../types";
import LZString from 'lz-string';

// --- API CONFIGURATION MANAGEMENT ---
const API_CONFIG_KEY = 'lexicon_api_config';

export const getApiSettings = (): ApiSettings => {
  const stored = localStorage.getItem(API_CONFIG_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return { baseUrl: '', authToken: '', enabled: false };
};

export const saveApiSettings = (settings: ApiSettings) => {
  localStorage.setItem(API_CONFIG_KEY, JSON.stringify(settings));
};

// --- API IMPLEMENTATION ---

// Updated to only send Content-Type when a body exists. 
// This prevents unnecessary OPTIONS preflight requests on GET/DELETE.
const getHeaders = (token: string, hasBody: boolean = false) => {
  const headers: Record<string, string> = {};
  if (hasBody) {
    headers['Content-Type'] = 'application/json';
  }
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

// Helper to remove trailing slash from URL if present to prevent //vocab
const cleanUrl = (url: string) => url.replace(/\/$/, "");

export interface ConnectionTestResult {
  success: boolean;
  message: string;
  code?: number;
  url?: string;
}

export const validateApiConnection = async (settings: ApiSettings): Promise<ConnectionTestResult> => {
    if (!settings.baseUrl) return { success: false, message: "URL is empty" };
    
    const targetUrl = `${cleanUrl(settings.baseUrl)}/vocab`;
    
    try {
        // Try to fetch vocab list with minimal headers
        const response = await fetch(targetUrl, {
            method: 'GET',
            headers: getHeaders(settings.authToken, false) 
        });
        
        if (response.ok) {
            return { success: true, message: "Connected successfully", url: targetUrl };
        } else {
            return { 
                success: false, 
                message: `${response.status} ${response.statusText}`, 
                code: response.status,
                url: targetUrl 
            };
        }
    } catch (e: any) {
        console.error("Connection Test Failed:", e);
        return { 
            success: false, 
            message: e.message || "Network Error (CORS or Offline)", 
            url: targetUrl 
        };
    }
};

const apiGetWords = async (config: ApiSettings): Promise<SavedWord[]> => {
  try {
    const response = await fetch(`${cleanUrl(config.baseUrl)}/vocab`, {
      method: 'GET',
      headers: getHeaders(config.authToken, false)
    });
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    return await response.json();
  } catch (e) {
    console.error("API Fetch Error", e);
    throw e;
  }
};

const apiSaveWord = async (config: ApiSettings, item: SavedWord): Promise<void> => {
  try {
    const response = await fetch(`${cleanUrl(config.baseUrl)}/vocab`, {
      method: 'POST',
      headers: getHeaders(config.authToken, true), // True: Has Body
      body: JSON.stringify(item)
    });
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
  } catch (e) {
    console.error("API Save Error", e);
    throw e;
  }
};

const apiDeleteWord = async (config: ApiSettings, word: string): Promise<void> => {
  try {
    const response = await fetch(`${cleanUrl(config.baseUrl)}/vocab/${encodeURIComponent(word)}`, {
      method: 'DELETE',
      headers: getHeaders(config.authToken, false)
    });
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
  } catch (e) {
    console.error("API Delete Error", e);
    throw e;
  }
};


// --- LOCAL INDEXEDDB IMPLEMENTATION ---
const DB_NAME = 'LexiconDB';
const STORE_NAME = 'vocab';
const VERSION = 2; 

let dbInstance: IDBDatabase | null = null;

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (dbInstance) {
      resolve(dbInstance);
      return;
    }
    if (!window.indexedDB) {
      reject("IndexedDB not supported");
      return;
    }
    const request = indexedDB.open(DB_NAME, VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      dbInstance = request.result;
      dbInstance.onversionchange = () => { dbInstance?.close(); dbInstance = null; };
      resolve(dbInstance);
    };
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'word' });
      }
    };
  });
};

export const initStorage = async () => {
  if (navigator.storage && navigator.storage.persist) {
    try { await navigator.storage.persist(); } catch (e) { console.warn(e); }
  }
};

// Internal helper to get local words regardless of API setting
const getLocalNotebookWords = async (): Promise<SavedWord[]> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const req = tx.objectStore(STORE_NAME).getAll();
    req.onsuccess = () => {
      const results = req.result as SavedWord[];
      resolve(results);
    };
    req.onerror = () => reject(req.error);
  });
};

// --- MIGRATION UTILITY ---

export const migrateLocalToCloud = async (onProgress: (current: number, total: number) => void): Promise<number> => {
    const config = getApiSettings();
    if (!config.enabled || !config.baseUrl) {
        throw new Error("Cloud sync is not enabled");
    }

    const localWords = await getLocalNotebookWords();
    if (localWords.length === 0) return 0;

    let successCount = 0;
    
    // Process sequentially to avoid overwhelming the API
    for (let i = 0; i < localWords.length; i++) {
        try {
            await apiSaveWord(config, localWords[i]);
            successCount++;
        } catch (e) {
            console.error(`Failed to migrate word: ${localWords[i].word}`, e);
        }
        onProgress(i + 1, localWords.length);
    }
    
    return successCount;
};

// --- UNIFIED PUBLIC API ---

export const saveWordToNotebook = async (item: SavedWord): Promise<void> => {
  const config = getApiSettings();
  
  if (config.enabled && config.baseUrl) {
    return apiSaveWord(config, item);
  }

  // Local Fallback
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(item);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};

export const getNotebookWords = async (): Promise<SavedWord[]> => {
  const config = getApiSettings();

  if (config.enabled && config.baseUrl) {
    return apiGetWords(config);
  }

  // Local Fallback
  return getLocalNotebookWords().then(words => 
      words.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
  );
};

export const deleteFromNotebook = async (word: string): Promise<void> => {
  const config = getApiSettings();

  if (config.enabled && config.baseUrl) {
    return apiDeleteWord(config, word);
  }

  // Local Fallback
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(word);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};

export const checkWordExists = async (word: string): Promise<boolean> => {
    const words = await getNotebookWords();
    return words.some(w => w.word.toLowerCase() === word.toLowerCase());
};

// --- BACKUP UTILITIES (Local Only for now, unless API supports bulk) ---

const getLZ = () => {
    if (LZString && typeof LZString.compressToEncodedURIComponent === 'function') return LZString;
    // @ts-ignore
    if (LZString && LZString.default) return LZString.default;
    return LZString;
}

export const exportNotebookData = async (): Promise<string> => {
    const words = await getNotebookWords();
    const jsonString = JSON.stringify(words);
    const lz = getLZ();
    try { return lz.compressToEncodedURIComponent(jsonString); } 
    catch (e) { return jsonString; }
};

export const importNotebookData = async (dataString: string): Promise<number> => {
    const lz = getLZ();
    const trimmed = dataString.trim();
    let words: SavedWord[] | null = null;

    try {
        const decompressed = lz.decompressFromEncodedURIComponent(trimmed);
        if (decompressed && decompressed.startsWith('[')) words = JSON.parse(decompressed);
    } catch (e) { }

    if (!words) words = JSON.parse(trimmed);
    if (!Array.isArray(words)) throw new Error("Invalid format");
    
    let count = 0;
    for (const word of words) {
        if (word && word.word) {
            await saveWordToNotebook({
                ...word,
                imageUrl: word.imageUrl || null,
                createdAt: word.createdAt || Date.now()
            });
            count++;
        }
    }
    return count;
};
