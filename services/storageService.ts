
import { SavedWord, ApiSettings } from "../types";
import LZString from 'lz-string';

// --- LOCAL STORAGE IMPLEMENTATION ---
const STORAGE_KEY = 'lexicon_vocab_notebook_v1';
const SETTINGS_KEY = 'lexicon_api_settings';

// --- VOCABULARY FUNCTIONS ---

export const getNotebookWords = async (): Promise<SavedWord[]> => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to parse notebook data", e);
    return [];
  }
};

export const saveWordToNotebook = async (item: SavedWord): Promise<void> => {
  try {
    const words = await getNotebookWords();
    const existingIndex = words.findIndex(w => w.word.toLowerCase() === item.word.toLowerCase());
    
    if (existingIndex >= 0) {
      // Update existing, preserve created timestamp
      words[existingIndex] = { ...item, createdAt: words[existingIndex].createdAt };
    } else {
      // Add new
      words.unshift({ ...item, createdAt: Date.now() });
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
  } catch (e) {
    console.error("Failed to save word", e);
    throw new Error("Storage quota exceeded or error saving.");
  }
};

export const deleteFromNotebook = async (word: string): Promise<void> => {
  try {
    const words = await getNotebookWords();
    const filtered = words.filter(w => w.word.toLowerCase() !== word.toLowerCase());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (e) {
    console.error("Failed to delete word", e);
  }
};

export const checkWordExists = async (word: string): Promise<boolean> => {
    const words = await getNotebookWords();
    return words.some(w => w.word.toLowerCase() === word.toLowerCase());
};

export const initStorage = async () => {
    // LocalStorage doesn't need init, but we keep this for interface compatibility
    return Promise.resolve();
};

// --- BACKUP UTILITIES ---

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

// --- API SETTINGS STUBS (To prevent build errors) ---

export const getApiSettings = (): ApiSettings => {
  try {
    const stored = localStorage.getItem(SETTINGS_KEY);
    return stored ? JSON.parse(stored) : { baseUrl: '', authToken: '', enabled: false };
  } catch {
    return { baseUrl: '', authToken: '', enabled: false };
  }
};

export const saveApiSettings = (settings: ApiSettings) => {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
};

export interface ConnectionTestResult {
  success: boolean;
  message?: string;
  code?: number;
  url?: string;
}

export const validateApiConnection = async (settings: ApiSettings): Promise<ConnectionTestResult> => {
  return { success: false, message: "Backend is disabled in this version." };
};

export const migrateLocalToCloud = async (onProgress: (current: number, total: number) => void): Promise<void> => {
    throw new Error("Cloud sync is disabled.");
};
