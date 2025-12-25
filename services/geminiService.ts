
import { GoogleGenAI, Type, Schema } from "@google/genai";
import { WordAnalysis, ReadingComprehension, SilsilaItem, PracticeQuestion, SilsilaCategory } from "../types";

// Polyfill process for TS environment if unused imports are causing issues
declare const process: { env: { API_KEY: string } };

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Helper to validate API key
const checkApiKey = () => {
  if (!apiKey) throw new Error("API Key is missing in environment variables.");
};

export const generateWordAnalysis = async (word: string): Promise<WordAnalysis> => {
  checkApiKey();
  const model = "gemini-3-flash-preview";
  
  const schema: Schema = {
    type: Type.OBJECT,
    properties: {
      word: { type: Type.STRING },
      partOfSpeech: { type: Type.STRING, description: "e.g. Adjective, Noun" },
      meaning: { type: Type.STRING },
      translation: { type: Type.STRING, description: "Meaning in Hindi (or common local language for context)" },
      sentence: { type: Type.STRING },
      synonyms: { type: Type.ARRAY, items: { type: Type.STRING } },
      antonyms: { type: Type.ARRAY, items: { type: Type.STRING } },
      trick: { type: Type.STRING, description: "A memorable mnemonic or trick to remember the word." },
      tone: { type: Type.STRING, description: "The sentiment tone: 'Positive (+)', 'Negative (-)', or 'Neutral (0)'" },
      collocation: { type: Type.STRING, description: "The 'Best Friend' word that naturally pairs with this word (e.g., for 'Heinous', return 'Heinous Crime')." },
    },
    required: ["word", "partOfSpeech", "meaning", "translation", "sentence", "synonyms", "antonyms", "trick", "tone", "collocation"],
  };

  const response = await ai.models.generateContent({
    model,
    contents: `Analyze the word "${word}" for a competitive exam student (Banking/GRE). 
    Provide:
    1. The part of speech.
    2. A simple English meaning.
    3. A Hindi translation.
    4. A usage sentence.
    5. 5 common synonyms.
    6. 5 common antonyms.
    7. A clever "Trick" or mnemonic.
    8. The "Tone" of the word. Is it Positive (+), Negative (-), or Neutral (0)?
    9. A "Collocation" (Best Friend): The word that most naturally appears next to it (e.g., if word is "Alleviate", collocation is "Pain" or "Poverty").`,
    config: {
      responseMimeType: "application/json",
      responseSchema: schema,
    },
  });

  const text = response.text;
  if (!text) throw new Error("No response from Gemini");
  return JSON.parse(text) as WordAnalysis;
};

export const generateReadingComprehension = async (): Promise<ReadingComprehension> => {
  checkApiKey();
  const model = "gemini-3-flash-preview";

  const schema: Schema = {
    type: Type.OBJECT,
    properties: {
      title: { type: Type.STRING },
      passage: { type: Type.STRING },
      questions: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.INTEGER },
            question: { type: Type.STRING },
            options: { type: Type.ARRAY, items: { type: Type.STRING } },
            correctAnswer: { type: Type.STRING },
          },
          required: ["id", "question", "options", "correctAnswer"],
        },
      },
    },
    required: ["title", "passage", "questions"],
  };

  const response = await ai.models.generateContent({
    model,
    contents: "Write a reading comprehension passage (approx 200 words) based on a recent viral or vital news topic (e.g., technology, environment, economy). Create 3 multiple choice questions based on it.",
    config: {
      responseMimeType: "application/json",
      responseSchema: schema,
    },
  });

  const text = response.text;
  if (!text) throw new Error("No response");
  return JSON.parse(text) as ReadingComprehension;
};

export const generateSilsila = async (category: SilsilaCategory): Promise<SilsilaItem[]> => {
  checkApiKey();
  const model = "gemini-3-flash-preview";

  const promptMap = {
    [SilsilaCategory.PREVIOUS_YEAR]: "List 5 vocabulary words frequently asked in GRE/GMAT/CAT exams in previous years.",
    [SilsilaCategory.CONFUSING]: "List 3 pairs of commonly confusing words (e.g., adverse/averse). Treat each pair as a distinct item in the list.",
    [SilsilaCategory.TRENDING]: "List 5 trending or sophisticated English words used in top editorial columns recently (like 'starkly', 'expatriate').",
    [SilsilaCategory.MASTER_COLLECTION]: "List 5 essential master vocabulary words for advanced learners.",
    [SilsilaCategory.IDIOMS]: "List 5 common English idioms or phrases useful for competitive exams, with their meanings and an example sentence.",
  };

  const schema: Schema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        word: { type: Type.STRING, description: "The word, word pair, or idiom" },
        context: { type: Type.STRING, description: "A brief tag like 'Idiom', '2022 GMAT' or 'Confusing Pair'" },
        definition: { type: Type.STRING },
      },
      required: ["word", "context", "definition"],
    },
  };

  const response = await ai.models.generateContent({
    model,
    contents: promptMap[category],
    config: {
      responseMimeType: "application/json",
      responseSchema: schema,
    },
  });

  const text = response.text;
  if (!text) throw new Error("No response");
  return JSON.parse(text) as SilsilaItem[];
};

export const generatePracticeQuestion = async (): Promise<PracticeQuestion> => {
  checkApiKey();
  const model = "gemini-3-flash-preview";

  const schema: Schema = {
    type: Type.OBJECT,
    properties: {
      type: { type: Type.STRING, enum: ["meaning_to_word"] },
      prompt: { type: Type.STRING },
      answer: { type: Type.STRING },
      options: { type: Type.ARRAY, items: { type: Type.STRING } },
    },
    required: ["type", "prompt", "answer", "options"],
  };

  const response = await ai.models.generateContent({
    model,
    contents: "Create a 'One Word Substitution' practice question. Give a definition and ask for the word. Provide 4 options including the correct one.",
    config: {
      responseMimeType: "application/json",
      responseSchema: schema,
    },
  });

  const text = response.text;
  if (!text) throw new Error("No response");
  return JSON.parse(text) as PracticeQuestion;
};
