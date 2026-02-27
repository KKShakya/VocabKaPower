
import { GoogleGenAI, Type, Schema } from "@google/genai";
import { WordAnalysis, ReadingComprehension, SilsilaItem, PracticeQuestion, SilsilaCategory, DescriptiveEvaluation, DescriptiveTaskType, ExamCategory, DescriptiveTask } from "../types";

// Polyfill process for TS environment
declare const process: { env: { API_KEY?: string; GEMINI_API_KEY?: string } };

const getApiKey = () => {
  const key = process.env.GEMINI_API_KEY || process.env.API_KEY || '';
  if (!key) {
    console.warn("Gemini API Key is missing. Please ensure GEMINI_API_KEY is set in your environment.");
  }
  return key;
};

const getAiClient = () => {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error("API Key is missing. Please configure it in the settings or environment.");
  return new GoogleGenAI({ apiKey });
};

export const generateWordAnalysis = async (word: string): Promise<WordAnalysis> => {
  const ai = getAiClient();
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
  const ai = getAiClient();
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
  const ai = getAiClient();
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
  const ai = getAiClient();
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

export const evaluateDescriptiveTask = async (
  type: DescriptiveTaskType,
  prompt: string,
  content: string,
  passage?: string
): Promise<DescriptiveEvaluation> => {
  const ai = getAiClient();
  const model = "gemini-3-flash-preview";

  const schema: Schema = {
    type: Type.OBJECT,
    properties: {
      score: { type: Type.NUMBER },
      feedback: { type: Type.STRING },
      strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
      weaknesses: { type: Type.ARRAY, items: { type: Type.STRING } },
      grammarErrors: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            error: { type: Type.STRING },
            correction: { type: Type.STRING },
            explanation: { type: Type.STRING },
          },
          required: ["error", "correction", "explanation"],
        },
      },
      wordCount: { type: Type.NUMBER },
      structureScore: { type: Type.NUMBER },
      contentScore: { type: Type.NUMBER },
      grammarScore: { type: Type.NUMBER },
      modelAnswer: { type: Type.STRING, description: "A high-scoring (85-90 marks) version of the response for the same prompt." },
    },
    required: ["score", "feedback", "strengths", "weaknesses", "grammarErrors", "wordCount", "structureScore", "contentScore", "grammarScore", "modelAnswer"],
  };

  let systemInstruction = "";
  if (type === 'essay') {
    systemInstruction = `You are an expert examiner for banking exams (like NABARD/RBI). 
    Evaluate the following essay based on:
    1. Structure: 4-paragraph rule (Intro, Core Problem, Impact/Govt Schemes, Conclusion).
    2. Content: Use of data points, relevant schemes, and logical flow.
    3. Language: Use of connectors (Furthermore, Consequently, etc.), short sentences, and grammatical accuracy.
    4. Word Count: Should be around 250-300 words.
    
    Also, provide a 'modelAnswer' that would score 85-90 marks, demonstrating perfect structure and content.`;
  } else if (type === 'precis') {
    systemInstruction = `You are an expert examiner for banking exams. 
    Evaluate the following Precis based on:
    1. Length: Must be exactly 1/3rd of the original passage.
    2. Content: Must capture the core theme (Who, What, Why, Result) without examples or quotes.
    3. Format: Must be a single paragraph with a suitable title.
    4. Rules: No copy-pasting, no personal opinions.
    
    Also, provide a 'modelAnswer' that would score 85-90 marks, demonstrating a perfect summary.`;
  } else {
    systemInstruction = `You are an expert examiner for banking exams. 
    Evaluate the following Letter/Report based on:
    1. Format: Correct formal/informal structure.
    2. Tone: Appropriate for the recipient.
    3. Content: Clarity of purpose and relevant details.
    
    Also, provide a 'modelAnswer' that would score 85-90 marks, demonstrating perfect format and tone.`;
  }

  const response = await ai.models.generateContent({
    model,
    contents: `
      Task Type: ${type}
      Prompt: ${prompt}
      ${passage ? `Original Passage: ${passage}` : ""}
      User Submission: ${content}
    `,
    config: {
      systemInstruction,
      responseMimeType: "application/json",
      responseSchema: schema,
    },
  });

  const text = response.text;
  if (!text) throw new Error("No response");
  return JSON.parse(text) as DescriptiveEvaluation;
};

export const generateDescriptiveTask = async (
  type: DescriptiveTaskType,
  category: ExamCategory
): Promise<DescriptiveTask> => {
  const ai = getAiClient();
  const model = "gemini-3-flash-preview";

  const schema: Schema = {
    type: Type.OBJECT,
    properties: {
      id: { type: Type.STRING },
      type: { type: Type.STRING },
      title: { type: Type.STRING },
      prompt: { type: Type.STRING },
      wordLimit: {
        type: Type.OBJECT,
        properties: {
          min: { type: Type.NUMBER },
          max: { type: Type.NUMBER },
        },
        required: ["min", "max"],
      },
      passage: { type: Type.STRING, description: "Only for Precis. A 300-400 word passage to summarize." },
    },
    required: ["id", "type", "title", "prompt", "wordLimit"],
  };

  const subTopics: Record<ExamCategory, string[]> = {
    [ExamCategory.NABARD]: [
      "Climate Resilient Agriculture & Sustainable Farming",
      "Rural Infrastructure & Connectivity Challenges",
      "Role of SHGs and Microfinance in Rural Empowerment",
      "Irrigation, Water Management & Ground Water Depletion",
      "Organic Farming: Prospects and Challenges in India",
      "Animal Husbandry & Dairy Sector as a secondary income",
      "Impact of Social Issues (Education/Health) on Rural Development",
      "Doubling Farmers' Income: Progress and Roadblocks"
    ],
    [ExamCategory.RBI]: [
      "Monetary Policy: Balancing Inflation and Growth",
      "Central Bank Digital Currency (CBDC): The Future of Money",
      "Financial Inclusion & The Role of Technology",
      "Corporate Governance & Ethics in Financial Institutions",
      "Global Economic Volatility & Its Impact on Indian Economy",
      "Fintech Regulation: Innovation vs. Stability",
      "Management of Bad Loans (NPAs) and Asset Reconstruction",
      "The Evolution of Payment Systems in India"
    ],
    [ExamCategory.SBI]: [
      "Customer Experience in the Era of Digital Banking",
      "Cybersecurity Challenges in Retail Banking",
      "The Shift from Traditional to Neo-Banking",
      "Priority Sector Lending: Impact on Grassroot Economy",
      "Financial Literacy: A Tool for Economic Empowerment",
      "Mergers and Acquisitions in the Indian Banking Sector",
      "The Role of Public Sector Banks in Nation Building",
      "Green Banking and Sustainable Finance Initiatives"
    ],
    [ExamCategory.IBPS]: [
      "Customer Experience in the Era of Digital Banking",
      "Cybersecurity Challenges in Retail Banking",
      "The Shift from Traditional to Neo-Banking",
      "Priority Sector Lending: Impact on Grassroot Economy",
      "Financial Literacy: A Tool for Economic Empowerment",
      "Mergers and Acquisitions in the Indian Banking Sector",
      "The Role of Public Sector Banks in Nation Building",
      "Green Banking and Sustainable Finance Initiatives"
    ],
    [ExamCategory.SSC]: [
      "Governance Reforms and Digital India Mission",
      "Social Justice and Inclusive Growth Policies",
      "Environmental Conservation and Climate Change Action",
      "The Role of Youth in Nation Building",
      "Urbanization Challenges and Smart City Initiatives",
      "Public Health Infrastructure: Lessons from the Pandemic",
      "Education Policy and Skill Development in India",
      "Women Empowerment and Gender Equality in Workforce"
    ]
  };

  const selectedSubTopics = subTopics[category];
  const randomSubTopic = selectedSubTopics[Math.floor(Math.random() * selectedSubTopics.length)];

  const response = await ai.models.generateContent({
    model,
    contents: `Generate a unique and highly specific ${type} task for a ${category} exam. 
    Current Timestamp for Randomness: ${Date.now()}
    
    Primary Theme: ${randomSubTopic}
    
    Requirements:
    - Ensure the topic is NOT generic. It should feel like a real exam question from recent years.
    - If type is 'essay', word limit should be 250-300.
    - If type is 'precis', word limit should be 60-90. You MUST provide a 'passage' of about 250-300 words that is dense, informative, and requires careful summarization.
    - If type is 'letter', word limit should be 150-200. Specify a clear scenario (Formal/Informal).
    - The prompt should be clear, professional, and challenging.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: schema,
    },
  });

  const text = response.text;
  if (!text) throw new Error("No response");
  const task = JSON.parse(text) as DescriptiveTask;
  task.type = type; // Ensure type matches
  return task;
};
