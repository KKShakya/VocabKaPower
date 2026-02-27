
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
  characterHook?: string; // Pop culture or character reference
  hookWhy?: string; // Explanation for the character hook
}

export interface SavedWord extends WordAnalysis {
  imageUrl: string | null;
  createdAt: number;
}

export interface ReadingComprehension {
  title: string;
  passage: string;
  sourceTopic: string;
  mainIdea: string;
  inference: string;
  tone: string;
  vocab: {
    word: string;
    contextMeaning: string;
    synonyms: string[];
    antonyms: string[];
  }[];
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
  | { type: 'detailed'; data: WordAnalysis }
  | { type: 'root'; root: string; meaning: string; examples: string[]; trick: string };

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
  NOTEBOOK2 = 'notebook2',
  READING = 'reading',
  SILSILA = 'silsila',
  PRACTICE = 'practice',
  DESCRIPTIVE = 'descriptive',
}

export enum SilsilaCategory {
  MASTER_COLLECTION = 'The Master Collection', // New category for detailed cards
  PREVIOUS_YEAR = 'Previous Year / Frequent',
  CONFUSING = 'Commonly Confusing',
  TRENDING = 'Trending Words',
  IDIOMS = 'Idioms & Phrases',
  ROOT_WORDS = 'Root Words',
}

// --- NEW PRACTICE TYPES ---

export type PracticeLevel = 'level1' | 'level2' | 'level3';

export interface GrammarItem {
  id: number;
  sentence: string;
  isCorrect: boolean;
  explanation: string; // Why it is correct/incorrect
  topic: string; // e.g. "Redundancy", "Collocation"
}

// --- DESCRIPTIVE TEST TYPES ---

export type DescriptiveTaskType = 'essay' | 'precis' | 'letter';

export enum ExamCategory {
  NABARD = 'NABARD',
  RBI = 'RBI',
  SBI = 'SBI',
  IBPS = 'IBPS',
  SSC = 'SSC'
}

export interface DescriptiveTask {
  id: string;
  type: DescriptiveTaskType;
  title: string;
  prompt: string;
  wordLimit: { min: number; max: number };
  passage?: string; // For Precis
}

export interface DescriptiveEvaluation {
  score: number; // Out of 100
  feedback: string;
  strengths: string[];
  weaknesses: string[];
  grammarErrors: { error: string; correction: string; explanation: string }[];
  wordCount: number;
  structureScore: number; // 0-10
  contentScore: number; // 0-10
  grammarScore: number; // 0-10
  modelAnswer: string; // How a pro would have written it
}
