
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
      collocation: { type: Type.STRING, description: "The 'Best Friend' word that naturally pairs with this word." },
      intensitySpectrum: { 
        type: Type.ARRAY, 
        items: { 
            type: Type.OBJECT,
            properties: {
                word: { type: Type.STRING },
                level: { type: Type.STRING, description: "e.g. Mild, Medium, High, Extreme" }
            },
            required: ["word", "level"]
        },
        description: "A list of 3-5 related words sorted by intensity (Mild to Extreme), including the main word." 
      }
    },
    required: ["word", "partOfSpeech", "meaning", "translation", "sentence", "synonyms", "antonyms", "trick", "tone", "collocation", "intensitySpectrum"],
  };

  const response = await ai.models.generateContent({
    model,
    contents: `Analyze the word "${word}" for a competitive exam student (Banking/GRE). 
    Provide:
    1. Basics: Part of speech, meaning, Hindi translation, sentence.
    2. Vocab: 5 synonyms, 5 antonyms.
    3. Memory: A clever mnemonic trick.
    4. Nuance: 
       - Tone: Positive/Negative/Neutral.
       - Collocation: The word that naturally sits next to it.
       - Intensity Spectrum: Create a scale of 3-5 words related to this concept ranging from Mild to Extreme intensity. Place the requested word "${word}" correctly within this scale.
       Example for "Irate": [{word: "Annoyed", level: "Mild"}, {word: "Vexed", level: "Medium"}, {word: "Irate", level: "High"}, {word: "Incensed", level: "Extreme"}]`,
    config: {
      responseMimeType: "application/json",
      responseSchema: schema,
    },
  });

  const text = response.text;
  if (!text) throw new Error("No response from Gemini");
  return JSON.parse(text) as WordAnalysis;
};

export const generateReadingComprehension = async (topic: string): Promise<ReadingComprehension> => {
  checkApiKey();
  // Using gemini-3-flash-preview for speed and creative writing capability
  const model = "gemini-3-flash-preview";

  const schema: Schema = {
    type: Type.OBJECT,
    properties: {
      title: { type: Type.STRING },
      sourceTopic: { type: Type.STRING },
      passage: { type: Type.STRING },
      mainIdea: { type: Type.STRING, description: "The central thesis of the editorial in 1-2 sentences." },
      inference: { type: Type.STRING, description: "What can be inferred about the author's stance or the future implications?" },
      tone: { type: Type.STRING, description: "e.g. Critical, Optimistic, Cautionary, Satirical" },
      vocab: {
        type: Type.ARRAY,
        items: {
            type: Type.OBJECT,
            properties: {
                word: { type: Type.STRING },
                contextMeaning: { type: Type.STRING, description: "Meaning of the word specifically in this context." },
                synonyms: { type: Type.ARRAY, items: { type: Type.STRING } },
                antonyms: { type: Type.ARRAY, items: { type: Type.STRING } },
            },
            required: ["word", "contextMeaning", "synonyms", "antonyms"]
        }
      },
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
    required: ["title", "sourceTopic", "passage", "mainIdea", "inference", "tone", "vocab", "questions"],
  };

  const response = await ai.models.generateContent({
    model,
    contents: `Write a high-quality Editorial passage (approx 350-400 words) based on the topic: "${topic}".
    
    STYLE GUIDE:
    - Imitate the writing style of "The Hindu" or "The Indian Express" editorials.
    - Use sophisticated vocabulary, complex sentence structures, and a critical/analytical tone.
    - The content should feel like a genuine analysis of recent events related to the topic.

    AFTER WRITING THE PASSAGE, GENERATE:
    1. 5 Multiple Choice Questions (Mix of factual, inference-based, and vocabulary-based).
    2. The Main Idea (Central Thesis).
    3. A key Inference (What is suggested but not explicitly stated?).
    4. The overall Tone of the passage.
    5. Analysis of 3 unique/difficult words used in the passage (Synonyms/Antonyms).`,
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
    [SilsilaCategory.ROOT_WORDS]: "List 5 common English root words with their meanings and examples.",
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
