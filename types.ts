
export interface WordAnalysis {
  word: string;
  partOfSpeech: string;
  meaning: string;
  translation: string; // e.g. Hindi meaning
  sentence: string;
  synonyms: string[];
  antonyms: string[];
  trick: string; // Mnemonic
  tone?: string; // e.g. "Negative (-)" or "Positive (+)"
  collocation?: string; // e.g. "Heinous Crime" (The "Best Friend" word)
  intensitySpectrum?: { word: string; level: string }[]; // The Intensity Training Spectrum
}

export interface SavedWord extends WordAnalysis {
  imageUrl: string | null;
  createdAt: number;
}

export interface ReadingComprehension {
  title: string;
  passage: string;
  questions: {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
}

// Discriminated Union for Silsila Items
export type SilsilaItem = 
  | { type: 'simple'; word: string; context: string; definition: string }
  | { type: 'detailed'; data: WordAnalysis };

export interface PracticeQuestion {
  type: 'meaning_to_word' | 'word_to_meaning';
  prompt: string;
  answer: string;
  options: string[];
}

export interface ApiSettings {
  baseUrl: string;
  authToken: string;
  enabled: boolean;
}

export enum AppTab {
  EXPLORER = 'explorer',
  NOTEBOOK = 'notebook',
  READING = 'reading',
  SILSILA = 'silsila',
  PRACTICE = 'practice',
}

export enum SilsilaCategory {
  MASTER_COLLECTION = 'The Master Collection', // New category for detailed cards
  PREVIOUS_YEAR = 'Previous Year / Frequent',
  CONFUSING = 'Commonly Confusing',
  TRENDING = 'Trending Words',
  IDIOMS = 'Idioms & Phrases',
}
