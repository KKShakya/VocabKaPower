import { SavedWord } from "../types";

const DB_NAME = 'LexiconDB';
const STORE_NAME = 'vocab';
const VERSION = 2; // Bumped version to ensure object store creation

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

    request.onerror = () => {
      console.error("IndexedDB Open Error:", request.error);
      reject(request.error);
    };

    request.onsuccess = () => {
      dbInstance = request.result;
      
      // Handle generic connection errors
      dbInstance.onerror = (event) => {
        console.error("Database error:", (event.target as any).error);
      };

      // Handle version change (e.g. another tab opened with newer version)
      dbInstance.onversionchange = () => {
        dbInstance?.close();
        dbInstance = null;
      };

      resolve(dbInstance);
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        console.log("Creating object store:", STORE_NAME);
        db.createObjectStore(STORE_NAME, { keyPath: 'word' });
      }
    };
  });
};

// Request Persistent Storage to prevent browser auto-cleanup
export const initStorage = async () => {
  if (navigator.storage && navigator.storage.persist) {
    try {
      const isPersisted = await navigator.storage.persist();
      console.log(`Storage Persisted: ${isPersisted}`);
    } catch (e) {
      console.warn("Storage persistence request failed", e);
    }
  }
};

export const saveWordToNotebook = async (item: SavedWord): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    try {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      store.put(item);
      
      // Use transaction.oncomplete to ensure data is committed
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    } catch (e) {
      reject(e);
    }
  });
};

export const getNotebookWords = async (): Promise<SavedWord[]> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    try {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();
      
      request.onsuccess = () => {
        const results = request.result as SavedWord[];
        // Sort by newest first safely
        resolve(results.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)));
      };
      request.onerror = () => reject(request.error);
    } catch (e) {
      reject(e);
    }
  });
};

export const deleteFromNotebook = async (word: string): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    try {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      store.delete(word);
      
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    } catch (e) {
      reject(e);
    }
  });
};

export const checkWordExists = async (word: string): Promise<boolean> => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        try {
          const transaction = db.transaction(STORE_NAME, 'readonly');
          const store = transaction.objectStore(STORE_NAME);
          const request = store.get(word);
          request.onsuccess = () => resolve(!!request.result);
          request.onerror = () => reject(request.error);
        } catch (e) {
          reject(e);
        }
    });
};

// Export all data as JSON string
export const exportNotebookData = async (): Promise<string> => {
    const words = await getNotebookWords();
    return JSON.stringify(words, null, 2);
};

// Import data from JSON string
export const importNotebookData = async (jsonString: string): Promise<number> => {
    try {
        const words = JSON.parse(jsonString) as SavedWord[];
        if (!Array.isArray(words)) throw new Error("Invalid backup format");
        
        const db = await openDB();
        
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(STORE_NAME, 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            
            let count = 0;
            words.forEach(word => {
                // Basic validation
                if (word.word && word.meaning) {
                    store.put(word);
                    count++;
                }
            });

            transaction.oncomplete = () => resolve(count);
            transaction.onerror = () => reject(transaction.error);
        });
    } catch (e) {
        throw new Error("Failed to parse or save backup data.");
    }
};