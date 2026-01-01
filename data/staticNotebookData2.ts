
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
  },
  {
    word: "Farce",
    partOfSpeech: "Noun",
    meaning: "A comic dramatic work using buffoonery and horseplay; an absurd event.",
    translation: "स्वांग / तमाशा",
    sentence: "The meeting turned into a farce when everyone started shouting.",
    synonyms: ["Mockery", "Travesty", "Sham"],
    antonyms: ["Tragedy", "Solemnity", "Seriousness"],
    trick: "Face -> Making funny faces in a comedy.",
    tone: "Negative (-)",
    collocation: "Complete farce",
    intensitySpectrum: [
      { word: "Joke", level: "Mild" },
      { word: "Comedy", level: "Medium" },
      { word: "Farce", level: "High" },
      { word: "Absurdity", level: "Extreme" }
    ],
    characterHook: "Hera Pheri (Star Garage Scene)",
    hookWhy: "The chaos, confusion, and stupidity of Baburao, Raju, and Shyam is a perfect farce."
  },
  {
    word: "Travesty",
    partOfSpeech: "Noun",
    meaning: "A false, absurd, or distorted representation of something.",
    translation: "विडंबना / भद्दा मज़ाक",
    sentence: "The trial was a travesty of justice.",
    synonyms: ["Mockery", "Perversion", "Caricature"],
    antonyms: ["Model", "Paragon", "Tribute"],
    trick: "Travel + Nasty -> A nasty/bad journey is a travesty of a trip.",
    tone: "Negative (-)",
    collocation: "Travesty of justice",
    intensitySpectrum: [
      { word: "Distortion", level: "Mild" },
      { word: "Parody", level: "Medium" },
      { word: "Travesty", level: "High" },
      { word: "Perversion", level: "Extreme" }
    ],
    characterHook: "Adipurush (The Movie)",
    hookWhy: "People called it a travesty of the Ramayana due to the bad VFX and dialogues."
  },
  {
    word: "Pantomime",
    partOfSpeech: "Noun",
    meaning: "Expressing meaning through gestures accompanied by music.",
    translation: "मूक अभिनय",
    sentence: "He acted out the story in pantomime.",
    synonyms: ["Mime", "Dumb show", "Gesture"],
    antonyms: ["Speech", "Dialogue", "Oratory"],
    trick: "Pan + Mime -> Mime artists acting across the panorama.",
    tone: "Neutral (0)",
    collocation: "In pantomime",
    intensitySpectrum: [
      { word: "Gesture", level: "Mild" },
      { word: "Acting", level: "Medium" },
      { word: "Pantomime", level: "High" },
      { word: "Silent Movie", level: "Extreme" }
    ],
    characterHook: "Tusshar Kapoor (Golmaal)",
    hookWhy: "His character 'Lucky' communicates entirely through sounds and gestures (A-a-a-o-o!)."
  },
  {
    word: "Pandemonium",
    partOfSpeech: "Noun",
    meaning: "Wild and noisy disorder or confusion; uproar.",
    translation: "भारी हंगामा / कोलाहल",
    sentence: "Pandemonium broke out when the fire alarm rang.",
    synonyms: ["Bedlam", "Chaos", "Turmoil"],
    antonyms: ["Peace", "Calm", "Order"],
    trick: "Panda + Demon -> If a Panda acts like a Demon, there will be chaos.",
    tone: "Negative (-)",
    collocation: "Utter pandemonium",
    intensitySpectrum: [
      { word: "Noise", level: "Mild" },
      { word: "Confusion", level: "Medium" },
      { word: "Pandemonium", level: "High" },
      { word: "Anarchy", level: "Extreme" }
    ],
    characterHook: "Indian Parliament (Monsoon Session)",
    hookWhy: "Chairs being thrown, mics broken, shouting matches—total disorder."
  },
  {
    word: "Unctuous",
    partOfSpeech: "Adjective",
    meaning: "Excessively flattering, oily, or ingratiating.",
    translation: "चापलूसी भरा / चिकनी-चुपड़ी",
    sentence: "His unctuous manner made everyone suspicious of his motives.",
    synonyms: ["Sycophantic", "Ingratiating", "Oily"],
    antonyms: ["Blunt", "Genuine", "Sincere"],
    trick: "Uncle + Chewing -> That creepy uncle chewing gum and talking sweetly.",
    tone: "Negative (-)",
    collocation: "Unctuous smile",
    intensitySpectrum: [
      { word: "Polite", level: "Mild" },
      { word: "Flattering", level: "Medium" },
      { word: "Unctuous", level: "High" },
      { word: "Slimy", level: "Extreme" }
    ],
    characterHook: "The 'Chamcha' Employee",
    hookWhy: "The guy who brings coffee for the boss and laughs too hard at bad jokes."
  },
  {
    word: "Pharisaical",
    partOfSpeech: "Adjective",
    meaning: "Self-righteous or hypocritical.",
    translation: "पाखंडी / ढोंगी",
    sentence: "She ignored the pharisaical comments of her neighbors.",
    synonyms: ["Sanctimonious", "Hypocritical", "Piestic"],
    antonyms: ["Sincere", "Humble", "Genuine"],
    trick: "Pharis (Paris) -> Acting like you are too good for everyone because you went to Paris.",
    tone: "Negative (-)",
    collocation: "Pharisaical attitude",
    intensitySpectrum: [
      { word: "Critical", level: "Mild" },
      { word: "Judgmental", level: "Medium" },
      { word: "Pharisaical", level: "High" },
      { word: "Holier-than-thou", level: "Extreme" }
    ],
    characterHook: "Fake Babas / Godmen",
    hookWhy: "Preaching simplicity to followers while driving imported luxury cars."
  },
  {
    word: "Haughty",
    partOfSpeech: "Adjective",
    meaning: "Arrogantly superior and disdainful.",
    translation: "घमंडी / अभिमानी",
    sentence: "The rich actress gave a haughty look to the waiter.",
    synonyms: ["Arrogant", "Conceited", "Snobbish"],
    antonyms: ["Humble", "Modest", "Meek"],
    trick: "Height -> Someone looking down from a height (High horse).",
    tone: "Negative (-)",
    collocation: "Haughty demeanor",
    intensitySpectrum: [
      { word: "Proud", level: "Mild" },
      { word: "Superior", level: "Medium" },
      { word: "Haughty", level: "High" },
      { word: "Narcissistic", level: "Extreme" }
    ],
    characterHook: "Maya Sarabhai (Sarabhai vs Sarabhai)",
    hookWhy: "Always looking down on Monisha for being 'Middle Class'."
  },
  {
    word: "Supercilious",
    partOfSpeech: "Adjective",
    meaning: "Behaving as though one is superior to others.",
    translation: "मगरूर / घमंडी",
    sentence: "The supercilious clerk ignored the customer's question.",
    synonyms: ["Arrogant", "Haughty", "Pompous"],
    antonyms: ["Humble", "Modest", "Unassuming"],
    trick: "Super + Silly -> Acting SUPERior makes you look Silly.",
    tone: "Negative (-)",
    collocation: "Supercilious smile",
    intensitySpectrum: [
      { word: "Confident", level: "Mild" },
      { word: "Arrogant", level: "Medium" },
      { word: "Supercilious", level: "High" },
      { word: "Disdainful", level: "Extreme" }
    ],
    characterHook: "Karan Johar (Stereotype)",
    hookWhy: "Often portrayed as judging people's fashion sense with a raised eyebrow."
  },
  {
    word: "Sanctimonious",
    partOfSpeech: "Adjective",
    meaning: "Making a show of being morally superior to others.",
    translation: "पाखंडी / बगला भगत",
    sentence: "I can't stand his sanctimonious lectures on morality.",
    synonyms: ["Self-righteous", "Holier-than-thou", "Pharisaical"],
    antonyms: ["Humble", "Sincere", "Modest"],
    trick: "Saint + Money -> Acts like a Saint but cares about Money.",
    tone: "Negative (-)",
    collocation: "Sanctimonious speech",
    intensitySpectrum: [
      { word: "Moral", level: "Mild" },
      { word: "Preachy", level: "Medium" },
      { word: "Sanctimonious", level: "High" },
      { word: "Hypocritical", level: "Extreme" }
    ],
    characterHook: "Alok Nath (Sanskaari Babuji)",
    hookWhy: "The memes about him being overly moral and 'Sanskaari' fit this perfectly."
  },
  {
    word: "Furore",
    partOfSpeech: "Noun",
    meaning: "An outbreak of public anger or excitement.",
    translation: "उत्तेजना / कोप",
    sentence: "The scandal caused a furore in the media.",
    synonyms: ["Uproar", "Outcry", "Commotion"],
    antonyms: ["Calm", "Peace", "Silence"],
    trick: "Fury -> Public fury creates a furore.",
    tone: "Negative (-)",
    collocation: "Public furore",
    intensitySpectrum: [
      { word: "Buzz", level: "Mild" },
      { word: "Stir", level: "Medium" },
      { word: "Furore", level: "High" },
      { word: "Riot", level: "Extreme" }
    ],
    characterHook: "Pathaan 'Besharam Rang' Controversy",
    hookWhy: "The massive public anger and media debate over the color of a bikini."
  },
  {
    word: "Hullabaloo",
    partOfSpeech: "Noun",
    meaning: "A commotion; a fuss.",
    translation: "हल्ला-गुल्ला / कोलाहल",
    sentence: "What is all this hullabaloo about?",
    synonyms: ["Uproar", "Pandemonium", "Clamour"],
    antonyms: ["Silence", "Tranquility", "Calm"],
    trick: "Halla Bol -> Resembles the Hindi phrase 'Halla Bol' (Make noise).",
    tone: "Negative (-)",
    collocation: "Great hullabaloo",
    intensitySpectrum: [
      { word: "Noise", level: "Mild" },
      { word: "Fuss", level: "Medium" },
      { word: "Hullabaloo", level: "High" },
      { word: "Bedlam", level: "Extreme" }
    ],
    characterHook: "Arnab Goswami's News Hour",
    hookWhy: "Multiple panelists screaming at once creates a massive hullabaloo."
  },
  {
    word: "Quiescence",
    partOfSpeech: "Noun",
    meaning: "A state or period of inactivity or dormancy.",
    translation: "निष्कियता / शांति",
    sentence: "The volcano is in a state of quiescence.",
    synonyms: ["Inactivity", "Dormancy", "Calm"],
    antonyms: ["Activity", "Action", "Turbulence"],
    trick: "Quiet + Essence -> The essence of being quiet.",
    tone: "Neutral (0)",
    collocation: "Period of quiescence",
    intensitySpectrum: [
      { word: "Rest", level: "Mild" },
      { word: "Stillness", level: "Medium" },
      { word: "Quiescence", level: "High" },
      { word: "Death", level: "Extreme" }
    ],
    characterHook: "Lockdown 2020",
    hookWhy: "The streets were empty and silent; total inactivity."
  },
  {
    word: "Debility",
    partOfSpeech: "Noun",
    meaning: "Physical weakness, especially as a result of illness.",
    translation: "दुर्बलता / कमज़ोरी",
    sentence: "After the surgery, he suffered from general debility.",
    synonyms: ["Frailty", "Infirmity", "Weakness"],
    antonyms: ["Strength", "Vigor", "Robustness"],
    trick: "De-ability -> Loss of ability/strength.",
    tone: "Negative (-)",
    collocation: "Physical debility",
    intensitySpectrum: [
      { word: "Tiredness", level: "Mild" },
      { word: "Weakness", level: "Medium" },
      { word: "Debility", level: "High" },
      { word: "Paralysis", level: "Extreme" }
    ],
    characterHook: "Patient in ICU (Munna Bhai MBBS)",
    hookWhy: "Anand Bhai (the patient) couldn't move or speak due to extreme debility."
  },
  {
    word: "Inanition",
    partOfSpeech: "Noun",
    meaning: "Exhaustion caused by lack of nourishment.",
    translation: "भुखमरी / शिथिलता",
    sentence: "The rescued hikers were suffering from inanition.",
    synonyms: ["Starvation", "Exhaustion", "Lethargy"],
    antonyms: ["Energy", "Vitality", "Fullness"],
    trick: "In + Animation -> No animation (movement) due to lack of food.",
    tone: "Negative (-)",
    collocation: "State of inanition",
    intensitySpectrum: [
      { word: "Hunger", level: "Mild" },
      { word: "Fatigue", level: "Medium" },
      { word: "Inanition", level: "High" },
      { word: "Starvation", level: "Extreme" }
    ],
    characterHook: "Karva Chauth (Evening)",
    hookWhy: "Wives waiting for the moon, completely drained of energy."
  },
  {
    word: "Enfeeblement",
    partOfSpeech: "Noun",
    meaning: "The state of being made weak or feeble.",
    translation: "कमज़ोरी / क्षीणता",
    sentence: "The enfeeblement of the economy is a major concern.",
    synonyms: ["Weakening", "Debilitation", "Frailty"],
    antonyms: ["Strengthening", "Fortification", "Invigoration"],
    trick: "Feeble -> Making someone feeble (weak).",
    tone: "Negative (-)",
    collocation: "Gradual enfeeblement",
    intensitySpectrum: [
      { word: "Tiring", level: "Mild" },
      { word: "Weakening", level: "Medium" },
      { word: "Enfeeblement", level: "High" },
      { word: "Collapse", level: "Extreme" }
    ],
    characterHook: "Superman & Kryptonite",
    hookWhy: "When Superman gets near Kryptonite, he suffers instant enfeeblement."
  },
  {
    word: "Excoriate",
    partOfSpeech: "Verb",
    meaning: "Damage or remove part of the surface of (the skin); criticize severely.",
    translation: "खाल उधेड़ना / कड़ी आलोचना करना",
    sentence: "The critics excoriated the new movie.",
    synonyms: ["Lambaste", "Criticize", "Flay"],
    antonyms: ["Praise", "Laud", "Acclaim"],
    trick: "Ex (Out) + Cori (Core/Skin) -> To rip the skin off (brutal criticism).",
    tone: "Negative (-)",
    collocation: "Excoriate the government",
    intensitySpectrum: [
      { word: "Scold", level: "Mild" },
      { word: "Criticize", level: "Medium" },
      { word: "Excoriate", level: "High" },
      { word: "Destroy", level: "Extreme" }
    ],
    characterHook: "Gordon Ramsay / Roadies Judges",
    hookWhy: "They don't just scold; they verbally rip the person apart."
  },
  {
    word: "Lambaste",
    partOfSpeech: "Verb",
    meaning: "Criticize (someone or something) harshly.",
    translation: "फटकारना / बुरी तरह पीटना",
    sentence: "The coach lambasted the players for their laziness.",
    synonyms: ["Castigate", "Chastise", "Criticize"],
    antonyms: ["Praise", "Commend", "Applaud"],
    trick: "Lamba (Long) + Baste (Beat) -> To give a long beating (verbal).",
    tone: "Negative (-)",
    collocation: "Lambaste the decision",
    intensitySpectrum: [
      { word: "Disapprove", level: "Mild" },
      { word: "Scold", level: "Medium" },
      { word: "Lambaste", level: "High" },
      { word: "Vilify", level: "Extreme" }
    ],
    characterHook: "Indian Media after Cricket Loss",
    hookWhy: "If India loses to Pakistan, the media lambastes the players mercilessly."
  },
  {
    word: "Vituperate",
    partOfSpeech: "Verb",
    meaning: "Blame or insult (someone) in strong or violent language.",
    translation: "गाली-गलौज करना / निंदा करना",
    sentence: "He vituperated against all the politicians.",
    synonyms: ["Revile", "Rail", "Abuse"],
    antonyms: ["Praise", "Compliment", "Honor"],
    trick: "Vitu (Vatu/Mouth) + Operate -> Operating mouth to abuse.",
    tone: "Negative (-)",
    collocation: "Vituperative attack",
    intensitySpectrum: [
      { word: "Insult", level: "Mild" },
      { word: "Abuse", level: "Medium" },
      { word: "Vituperate", level: "High" },
      { word: "Curse", level: "Extreme" }
    ],
    characterHook: "Delhi Road Rage",
    hookWhy: "The standard 'Tu jaanta nahi mera baap kaun hai' screaming match."
  },
  {
    word: "Castigate",
    partOfSpeech: "Verb",
    meaning: "Reprimand (someone) severely.",
    translation: "डांटना / फटकारना",
    sentence: "The teacher castigated the student for cheating.",
    synonyms: ["Reprimand", "Rebuke", "Admonish"],
    antonyms: ["Praise", "Reward", "Forgive"],
    trick: "Caste + Gate -> Scolding someone for entering the wrong caste gate (Old context).",
    tone: "Negative (-)",
    collocation: "Severely castigate",
    intensitySpectrum: [
      { word: "Correct", level: "Mild" },
      { word: "Scold", level: "Medium" },
      { word: "Castigate", level: "High" },
      { word: "Punish", level: "Extreme" }
    ],
    characterHook: "Indian Dad looking at Report Card",
    hookWhy: "If you get 98/100, you get praised. If you get 60/100, you get castigated."
  },
  {
    word: "Extol",
    partOfSpeech: "Verb",
    meaning: "Praise enthusiastically.",
    translation: "प्रशंसा करना / सराहना",
    sentence: "The health benefits of exercise are widely extolled.",
    synonyms: ["Acclaim", "Exalt", "Laud"],
    antonyms: ["Criticize", "Condemn", "Disparage"],
    trick: "Ex (Extra) + Tall -> Making someone look extra tall with praise.",
    tone: "Positive (+)",
    collocation: "Extol the virtues",
    intensitySpectrum: [
      { word: "Like", level: "Mild" },
      { word: "Admire", level: "Medium" },
      { word: "Extol", level: "High" },
      { word: "Worship", level: "Extreme" }
    ],
    characterHook: "Ravi Shastri (Commentary)",
    hookWhy: "He extols every boundary with 'That went like a tracer bullet!'"
  }
];
