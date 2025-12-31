
import { WordAnalysis } from "../types";

export const STATIC_NOTEBOOK_DATA_2: WordAnalysis[] = [
  {
    word: "Serendipity",
    partOfSpeech: "Noun",
    meaning: "The occurrence and development of events by chance in a happy or beneficial way.",
    translation: "संयोग",
    sentence: "It was pure serendipity that we met right before the rain started.",
    synonyms: ["Chance", "Fate", "Luck"],
    antonyms: ["Misfortune", "Bad luck"],
    trick: "Serene + Pity -> A happy accident.",
    tone: "Positive (+)",
    collocation: "Pure serendipity",
    intensitySpectrum: [{ word: "Luck", level: "Mild" }, { word: "Chance", level: "Medium" }, { word: "Serendipity", level: "High" }, { word: "Miracle", level: "Extreme" }],
    characterHook: "DDLJ Train Scene",
    hookWhy: "Raj pulling Simran onto the train - a happy accident that changed their lives."
  },
  {
    word: "Petrichor",
    partOfSpeech: "Noun",
    meaning: "A pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather.",
    translation: "सौंधी खुशबू",
    sentence: "I love the petrichor of the first monsoon rain.",
    synonyms: ["Earthy smell", "Rain smell"],
    antonyms: [],
    trick: "Petri (Rock) + Ichor (Fluid) -> Smell of rain on rocks.",
    tone: "Positive (+)",
    collocation: "Smell of petrichor",
    intensitySpectrum: [],
    characterHook: "Lagaan (Ghanan Ghanan)",
    hookWhy: "The villagers smelling the rain coming."
  },
  {
    word: "Sonder",
    partOfSpeech: "Noun",
    meaning: "The realization that each random passerby is living a life as vivid and complex as your own.",
    translation: "गहरा अहसास",
    sentence: "Watching the crowd, he felt a deep sense of sonder.",
    synonyms: ["Realization", "Epiphany"],
    antonyms: ["Solipsism"],
    trick: "Wonder -> Wondering about others' lives.",
    tone: "Neutral (0)",
    collocation: "Feeling of sonder",
    intensitySpectrum: [],
    characterHook: "Train Journeys",
    hookWhy: "Looking out the window at people in houses and realizing they all have stories."
  }
];
