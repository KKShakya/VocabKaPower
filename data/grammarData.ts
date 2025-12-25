
import { GrammarItem } from "../types";

export const STATIC_GRAMMAR_DATA: GrammarItem[] = [
  {
    id: 1,
    sentence: "He returned back from the US last night.",
    isCorrect: false,
    explanation: "Redundancy Error: 'Return' already implies going back. Use 'He returned from the US'.",
    topic: "Redundancy"
  },
  {
    id: 2,
    sentence: "After the heavy medicine, the pain finally abated.",
    isCorrect: false,
    explanation: "Collocation Error: Storms 'abate', but pain 'alleviates' or 'subsides'.",
    topic: "Collocation"
  },
  {
    id: 3,
    sentence: "The storm abated after causing massive destruction.",
    isCorrect: true,
    explanation: "Correct Usage: 'Abate' is the perfect word for storms, winds, or hostilities reducing in intensity.",
    topic: "Collocation"
  },
  {
    id: 4,
    sentence: "She is my cousin sister.",
    isCorrect: false,
    explanation: "Superfluous Error: In English, we just say 'She is my cousin'. The gender is implied by 'She'.",
    topic: "Redundancy"
  },
  {
    id: 5,
    sentence: "The government took steps to alleviate poverty.",
    isCorrect: true,
    explanation: "Correct Usage: 'Alleviate' is used for suffering, pain, or problems (like poverty).",
    topic: "Collocation"
  },
  {
    id: 6,
    sentence: "He committed a heinous crime.",
    isCorrect: true,
    explanation: "Correct Usage: 'Heinous' pairs perfectly with crime/act.",
    topic: "Collocation"
  },
  {
    id: 7,
    sentence: "The annoying noise was heinous.",
    isCorrect: false,
    explanation: "Intensity Mismatch: 'Heinous' is too strong for just noise. Use 'Irritating' or 'Incessant'. Heinous is for evil acts.",
    topic: "Intensity"
  },
  {
    id: 8,
    sentence: "Kindly repeat the question again.",
    isCorrect: false,
    explanation: "Redundancy Error: 'Repeat' means to say again. Drop 'again'.",
    topic: "Redundancy"
  },
  {
    id: 9,
    sentence: "The judge was uninterested in the boring case.",
    isCorrect: false,
    explanation: "Usage Error: A judge must be 'Disinterested' (Unbiased/Impartial), not 'Uninterested' (Bored).",
    topic: "Confusing Words"
  },
  {
    id: 10,
    sentence: "The judge was disinterested, ensuring a fair trial.",
    isCorrect: true,
    explanation: "Correct Usage: 'Disinterested' means impartial or neutral.",
    topic: "Confusing Words"
  },
  {
    id: 11,
    sentence: "He agreed to the mutual consensus.",
    isCorrect: false,
    explanation: "Redundancy Error: 'Consensus' means mutual agreement. 'Mutual' is redundant.",
    topic: "Redundancy"
  },
  {
    id: 12,
    sentence: "The police elicited the truth from the suspect.",
    isCorrect: true,
    explanation: "Correct Usage: 'Elicit' means to draw out information.",
    topic: "Confusing Words"
  },
  {
    id: 13,
    sentence: "He was arrested for selling elicit liquor.",
    isCorrect: false,
    explanation: "Spelling Trap: It should be 'Illicit' (Illegal), not 'Elicit' (To draw out).",
    topic: "Spelling"
  },
  {
    id: 14,
    sentence: "She has a mellifluous voice.",
    isCorrect: true,
    explanation: "Correct Usage: 'Mellifluous' (sweet-sounding) matches perfectly with voice/music.",
    topic: "Collocation"
  },
  {
    id: 15,
    sentence: "The food tasted insipid.",
    isCorrect: true,
    explanation: "Correct Usage: 'Insipid' means lacking flavor.",
    topic: "Definitions"
  }
];
