
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
  },
  {
    word: "Protract",
    partOfSpeech: "Verb",
    meaning: "Prolong or extend the duration of something.",
    translation: "लंबा खींचना / बढ़ाना",
    sentence: "The legal battle was protracted for over a decade.",
    synonyms: ["Prolong", "Elongate", "Draw out"],
    antonyms: ["Shorten", "Curtail", "Abridge"],
    trick: "Pro + Tract -> Traction makes things drag on longer.",
    tone: "Negative (-)",
    collocation: "Protracted negotiation",
    intensitySpectrum: [
      { word: "Delay", level: "Mild" },
      { word: "Extend", level: "Medium" },
      { word: "Protract", level: "High" },
      { word: "Drag on", level: "Extreme" }
    ],
    characterHook: "Indian Court Cases (Tarikh pe Tarikh)",
    hookWhy: "Cases drag on (protract) for 20-30 years without a verdict."
  },
  {
    word: "Impunity",
    partOfSpeech: "Noun",
    meaning: "Exemption from punishment or freedom from the injurious consequences of an action.",
    translation: "दंड मुक्ति",
    sentence: "The rich brat broke the law with impunity.",
    synonyms: ["Immunity", "Exemption", "Freedom"],
    antonyms: ["Liability", "Accountability", "Culpability"],
    trick: "Im (No) + Punish -> No punishment.",
    tone: "Negative (-)",
    collocation: "Act with impunity",
    intensitySpectrum: [
      { word: "Freedom", level: "Mild" },
      { word: "Privilege", level: "Medium" },
      { word: "Impunity", level: "High" },
      { word: "Invincibility", level: "Extreme" }
    ],
    characterHook: "Politician's Son",
    hookWhy: "Believes he can do anything because 'Chacha Vidhayak Hain' (No fear of punishment)."
  },
  {
    word: "Unassailable",
    partOfSpeech: "Adjective",
    meaning: "Unable to be attacked, questioned, or defeated.",
    translation: "अभेद्य / अकाट्य",
    sentence: "Sachin's record of 100 centuries seemed unassailable for a long time.",
    synonyms: ["Invincible", "Indisputable", "Impregnable"],
    antonyms: ["Vulnerable", "Defenseless", "Weak"],
    trick: "Un + Assail (Attack) -> Cannot be attacked.",
    tone: "Positive (+)",
    collocation: "Unassailable lead",
    intensitySpectrum: [
      { word: "Strong", level: "Mild" },
      { word: "Secure", level: "Medium" },
      { word: "Unassailable", level: "High" },
      { word: "Invincible", level: "Extreme" }
    ],
    characterHook: "The Great Wall of China / Gabba Fortress",
    hookWhy: "A defense or record that nobody can break or question."
  },
  {
    word: "Pliable",
    partOfSpeech: "Adjective",
    meaning: "Easily bent; flexible. Also, easily influenced.",
    translation: "लचीला / मानने योग्य",
    sentence: "The manager wanted pliable employees who wouldn't ask questions.",
    synonyms: ["Flexible", "Malleable", "Compliant"],
    antonyms: ["Rigid", "Stubborn", "Inflexible"],
    trick: "Ply -> Like plywood, it can be bent/shaped.",
    tone: "Neutral (0)",
    collocation: "Pliable clay",
    intensitySpectrum: [
      { word: "Soft", level: "Mild" },
      { word: "Flexible", level: "Medium" },
      { word: "Pliable", level: "High" },
      { word: "Weak", level: "Extreme" }
    ],
    characterHook: "Chapati Dough (Atta)",
    hookWhy: "You can mold it into any shape you want easily."
  },
  {
    word: "Expedite",
    partOfSpeech: "Verb",
    meaning: "Make (an action or process) happen sooner or be accomplished more quickly.",
    translation: "शीघ्र निपाटना / तेज़ करना",
    sentence: "Please expedite the delivery of my passport.",
    synonyms: ["Accelerate", "Hasten", "Speed up"],
    antonyms: ["Delay", "Hinder", "Retard"],
    trick: "Ex (Out) + Ped (Foot) -> Getting the foot out of the trap fast.",
    tone: "Positive (+)",
    collocation: "Expedite the process",
    intensitySpectrum: [
      { word: "Quick", level: "Mild" },
      { word: "Fast", level: "Medium" },
      { word: "Expedite", level: "High" },
      { word: "Rush", level: "Extreme" }
    ],
    characterHook: "Tatkal Ticket Scheme",
    hookWhy: "You pay extra money just to speed up (expedite) the booking process."
  },
  {
    word: "Dilate",
    partOfSpeech: "Verb",
    meaning: "Make or become wider, larger, or more open.",
    translation: "फैलाना / चौड़ा करना",
    sentence: "The doctor put drops in my eyes to dilate the pupils.",
    synonyms: ["Enlarge", "Expand", "Widen"],
    antonyms: ["Contract", "Constrict", "Shrink"],
    trick: "Die + Late -> If you die late, your life expands (dilates). (Stretch logic)",
    tone: "Neutral (0)",
    collocation: "Dilate pupils",
    intensitySpectrum: [
      { word: "Open", level: "Mild" },
      { word: "Widen", level: "Medium" },
      { word: "Dilate", level: "High" },
      { word: "Expand", level: "Extreme" }
    ],
    characterHook: "Eye Checkup Drops",
    hookWhy: "The drops that make your pupils huge and vision blurry."
  },
  {
    word: "Inimical",
    partOfSpeech: "Adjective",
    meaning: "Tending to obstruct or harm; unfriendly/hostile.",
    translation: "विरोधी / हानिकारक",
    sentence: "High inflation is inimical to economic growth.",
    synonyms: ["Harmful", "Hostile", "Detrimental"],
    antonyms: ["Friendly", "Helpful", "Conducive"],
    trick: "Enemy -> Inimical sounds like Enemy-cal.",
    tone: "Negative (-)",
    collocation: "Inimical to interests",
    intensitySpectrum: [
      { word: "Unfriendly", level: "Mild" },
      { word: "Harmful", level: "Medium" },
      { word: "Inimical", level: "High" },
      { word: "Destructive", level: "Extreme" }
    ],
    characterHook: "Sugar for Diabetics",
    hookWhy: "Sugar acts like an enemy (inimical) to their health."
  },
  {
    word: "Indemnity",
    partOfSpeech: "Noun",
    meaning: "Security or protection against a loss or other financial burden.",
    translation: "हर्जाना / क्षतिपूर्ति",
    sentence: "The insurance policy provides indemnity against theft.",
    synonyms: ["Insurance", "Protection", "Compensation"],
    antonyms: ["Liability", "Risk", "Exposure"],
    trick: "In + Damn + Ity -> If something gets 'Damned' (damaged), you get money.",
    tone: "Positive (+)",
    collocation: "Seek indemnity",
    intensitySpectrum: [
      { word: "Refund", level: "Mild" },
      { word: "Compensation", level: "Medium" },
      { word: "Indemnity", level: "High" },
      { word: "Guarantee", level: "Extreme" }
    ],
    characterHook: "LIC Policy (Jeevan Anand)",
    hookWhy: "Paying for protection against future loss (Indemnity)."
  },
  {
    word: "Amnesty",
    partOfSpeech: "Noun",
    meaning: "An official pardon for people who have been convicted of political offenses.",
    translation: "आम माफ़ी / राजक्षमा",
    sentence: "The government declared an amnesty for tax evaders.",
    synonyms: ["Pardon", "Forgiveness", "Reprieve"],
    antonyms: ["Punishment", "Conviction", "Penalty"],
    trick: "Amnesia -> The government gets 'Amnesia' and forgets your crimes.",
    tone: "Positive (+)",
    collocation: "Grant amnesty",
    intensitySpectrum: [
      { word: "Forgive", level: "Mild" },
      { word: "Pardon", level: "Medium" },
      { word: "Amnesty", level: "High" },
      { word: "Absolution", level: "Extreme" }
    ],
    characterHook: "Black Money Scheme",
    hookWhy: "Government telling people: 'Just declare your cash now, we won't arrest you' (Amnesty)."
  },
  {
    word: "Expedient",
    partOfSpeech: "Adjective",
    meaning: "Convenient and practical although possibly improper or immoral.",
    translation: "फायदेमंद / कामचलाऊ",
    sentence: "It was politically expedient to ignore the scandal.",
    synonyms: ["Convenient", "Advantageous", "Pragmatic"],
    antonyms: ["Principled", "Ethical", "Right"],
    trick: "Expedite -> Doing something fast/convenient just to get it done.",
    tone: "Neutral (0)",
    collocation: "Politically expedient",
    intensitySpectrum: [
      { word: "Useful", level: "Mild" },
      { word: "Practical", level: "Medium" },
      { word: "Expedient", level: "High" },
      { word: "Opportunistic", level: "Extreme" }
    ],
    characterHook: "Jugaad",
    hookWhy: "Fixing a broken fan with tape—it's not the 'correct' way, but it works right now."
  },
  {
    word: "Utilitarian",
    partOfSpeech: "Adjective",
    meaning: "Designed to be useful or practical rather than attractive.",
    translation: "उपयोगी / व्यवहारिक",
    sentence: "The office building was strictly utilitarian with no decorations.",
    synonyms: ["Functional", "Practical", "Pragmatic"],
    antonyms: ["Decorative", "Ornamental", "Aesthetic"],
    trick: "Utility -> Using something for its utility only.",
    tone: "Neutral (0)",
    collocation: "Utilitarian design",
    intensitySpectrum: [
      { word: "Plain", level: "Mild" },
      { word: "Useful", level: "Medium" },
      { word: "Utilitarian", level: "High" },
      { word: "Spartan", level: "Extreme" }
    ],
    characterHook: "Bata School Shoes / Steel Thali",
    hookWhy: "Zero fashion, zero design, but lasts for 10 years (Purely functional)."
  },
  {
    word: "Epistemic",
    partOfSpeech: "Adjective",
    meaning: "Relating to knowledge or to the degree of its validation.",
    translation: "ज्ञान-संबंधी",
    sentence: "There is an epistemic gap between what we know and what we assume.",
    synonyms: ["Cognitive", "Intellectual", "Conceptual"],
    antonyms: ["Ignorant", "Unfounded", "Baseless"],
    trick: "Epistemology -> Study of knowledge.",
    tone: "Neutral (0)",
    collocation: "Epistemic uncertainty",
    intensitySpectrum: [
      { word: "Mental", level: "Mild" },
      { word: "Knowledgeable", level: "Medium" },
      { word: "Epistemic", level: "High" },
      { word: "Philosophical", level: "Extreme" }
    ],
    characterHook: "The 'Vedas' / Ancient Scholars",
    hookWhy: "Focusing purely on the nature of knowledge and truth."
  },
  {
    word: "Culpability",
    partOfSpeech: "Noun",
    meaning: "Responsibility for a fault or wrong; blame.",
    translation: "दोष / अपराधिता",
    sentence: "The court determined the degree of his culpability in the accident.",
    synonyms: ["Guilt", "Blame", "Liability"],
    antonyms: ["Innocence", "Immunity", "Exoneration"],
    trick: "Culprit -> The ability to be a culprit.",
    tone: "Negative (-)",
    collocation: "Admit culpability",
    intensitySpectrum: [
      { word: "Fault", level: "Mild" },
      { word: "Blame", level: "Medium" },
      { word: "Culpability", level: "High" },
      { word: "Guilt", level: "Extreme" }
    ],
    characterHook: "Hit and Run Driver",
    hookWhy: "The main question in court: Was he driving? Does he hold culpability?"
  },
  {
    word: "Parity",
    partOfSpeech: "Noun",
    meaning: "The state or condition of being equal, especially regarding status or pay.",
    translation: "समानता / बराबरी",
    sentence: "The bank employees union is demanding pay parity with central government officers.",
    synonyms: ["Equality", "Equivalence", "Uniformity"],
    antonyms: ["Disparity", "Inequality", "Divergence"],
    trick: "Pari (Fairy) + Tea -> A fairy having tea with a human shows equality (parity).",
    tone: "Neutral/Formal",
    collocation: "Purchasing power parity, Gender parity, Pay parity",
    intensitySpectrum: [
      { word: "Similarity", level: "Low" },
      { word: "Equality", level: "Medium" },
      { word: "Parity", level: "High" }
    ],
    characterHook: "Raju Rastogi (3 Idiots)",
    hookWhy: "Raju always wanted parity (equality) in treatment, not just to be judged by grades."
  },
  {
    word: "Onerous",
    partOfSpeech: "Adjective",
    meaning: "(of a task, duty, or responsibility) involving an amount of effort and difficulty that is oppressively burdensome.",
    translation: "कष्टदायक / भारी / दुर्वह",
    sentence: "The new KYC norms have made the account opening process quite onerous for customers.",
    synonyms: ["Burdensome", "Arduous", "Taxing"],
    antonyms: ["Easy", "Effortless", "Light"],
    trick: "One + Rous (sounds like 'rocks') -> One person carrying heavy rocks is onerous.",
    tone: "Negative (-)",
    collocation: "Onerous task, Onerous duty, Onerous contract",
    intensitySpectrum: [
      { word: "Difficult", level: "Low" },
      { word: "Demanding", level: "Medium" },
      { word: "Onerous", level: "High" }
    ],
    characterHook: "Bahubali (carrying the Shivalinga)",
    hookWhy: "Carrying the massive Shivalinga was an onerous task that only Bahubali could do effortlessly."
  },
  {
    word: "Byzantine",
    partOfSpeech: "Adjective",
    meaning: "Excessively complicated, and typically involving a great deal of administrative detail.",
    translation: "जटिल / पेचीदा",
    sentence: "The byzantine rules of the tax department confuse even the most experienced CAs.",
    synonyms: ["Complicated", "Labyrinthine", "Convoluted"],
    antonyms: ["Streamlined", "Simple", "Straightforward"],
    trick: "Busy + Time -> This system is so complex, it will keep you busy for a very long time.",
    tone: "Negative (-)",
    collocation: "Byzantine bureaucracy, Byzantine complexity, Byzantine rules",
    intensitySpectrum: [
      { word: "Complex", level: "Low" },
      { word: "Intricate", level: "Medium" },
      { word: "Byzantine", level: "High" }
    ],
    characterHook: "SBI Clerk (Meme version)",
    hookWhy: "The stereotypical SBI process ('Lunch ke baad aana', form A then form B) is often byzantine."
  },
  {
    word: "Esoteric",
    partOfSpeech: "Adjective",
    meaning: "Intended for or likely to be understood by only a small number of people with a specialized knowledge or interest.",
    translation: "गुप्त / रहस्यमय",
    sentence: "The RBI governor's speech was full of esoteric economic terms that the layman couldn't grasp.",
    synonyms: ["Obscure", "Arcane", "Abstruse"],
    antonyms: ["Common", "Familiar", "Exoteric"],
    trick: "Eso (Aisa - like this) + Trick -> A trick done 'like this' is only known to a few magicians (esoteric).",
    tone: "Neutral (0)",
    collocation: "Esoteric knowledge, Esoteric interests, Esoteric philosophy",
    intensitySpectrum: [
      { word: "Uncommon", level: "Low" },
      { word: "Specialized", level: "Medium" },
      { word: "Esoteric", level: "High" }
    ],
    characterHook: "Chatur Ramalingam (Silencer)",
    hookWhy: "Chatur used esoteric words (that he didn't understand) in his speech to sound smart."
  },
  {
    word: "Baroque",
    partOfSpeech: "Adjective",
    meaning: "Highly ornate and extravagant in style.",
    translation: "सजावटी / विचित्र / अलंकृत",
    sentence: "The baroque architecture of the old palace featured intricate carvings on every pillar.",
    synonyms: ["Ornate", "Florid", "Elaborate"],
    antonyms: ["Plain", "Minimalist", "Simple"],
    trick: "Bar + Rock -> A rock carved with so many details it looks like a decoration in a fancy bar.",
    tone: "Neutral (0)",
    collocation: "Baroque style, Baroque architecture, Baroque details",
    intensitySpectrum: [
      { word: "Decorative", level: "Low" },
      { word: "Elaborate", level: "Medium" },
      { word: "Baroque", level: "High" }
    ],
    characterHook: "Sanjay Leela Bhansali Movies",
    hookWhy: "Bhansali's sets (like in Devdas or Padmavat) are famous for their baroque, highly detailed style."
  },
  {
    word: "Prolix",
    partOfSpeech: "Adjective",
    meaning: "(of speech or writing) using or containing too many words; tediously lengthy.",
    translation: "शब्दबहुल / विस्तृत / उबाऊ",
    sentence: "The legal document was so prolix that it took three lawyers to interpret it.",
    synonyms: ["Verbose", "Long-winded", "Wordy"],
    antonyms: ["Concise", "Laconic", "Terse"],
    trick: "Pro + Licks -> A 'Pro' who 'Licks' (speaks) too much without stopping.",
    tone: "Negative (-)",
    collocation: "Prolix speech, Prolix writer, Prolix explanation",
    intensitySpectrum: [
      { word: "Talkative", level: "Low" },
      { word: "Verbose", level: "Medium" },
      { word: "Prolix", level: "High" }
    ],
    characterHook: "Basanti (Sholay)",
    hookWhy: "Basanti's non-stop talking is the perfect example of a prolix style."
  },
  {
    word: "Arduous",
    partOfSpeech: "Adjective",
    meaning: "Involving or requiring strenuous effort; difficult and tiring.",
    translation: "कठिन / श्रमसाध्य",
    sentence: "Preparing for bank PO exams is an arduous journey requiring months of dedication.",
    synonyms: ["Laborious", "Strenuous", "Grueling"],
    antonyms: ["Easy", "Effortless", "Facile"],
    trick: "Hard + us -> It is very 'hard' for 'us' to climb this mountain.",
    tone: "Negative (-)",
    collocation: "Arduous journey, Arduous task, Arduous climb",
    intensitySpectrum: [
      { word: "Hard", level: "Low" },
      { word: "Tough", level: "Medium" },
      { word: "Arduous", level: "High" }
    ],
    characterHook: "Dashrath Manjhi (The Mountain Man)",
    hookWhy: "Cutting a mountain with a hammer was the most arduous task imaginable."
  },
  {
    word: "Unkempt",
    partOfSpeech: "Adjective",
    meaning: "(especially of a person) having an untidy or disheveled appearance.",
    translation: "अव्यवस्थित / मैला-कुचैला",
    sentence: "He showed up to the interview in unkempt clothes, which left a bad impression.",
    synonyms: ["Disheveled", "Messy", "Scruffy"],
    antonyms: ["Neat", "Tidy", "Groomed"],
    trick: "Un + Kept -> Not kept or maintained properly, leading to a messy look.",
    tone: "Negative (-)",
    collocation: "Unkempt hair, Unkempt appearance, Unkempt lawn",
    intensitySpectrum: [
      { word: "Messy", level: "Low" },
      { word: "Untidy", level: "Medium" },
      { word: "Unkempt", level: "High" }
    ],
    characterHook: "Kabir Singh (Post-breakup)",
    hookWhy: "Kabir Singh's beard and hair after his heartbreak is the definition of unkempt."
  },
  {
    word: "Convoluted",
    partOfSpeech: "Adjective",
    meaning: "(especially of an argument, story, or sentence) extremely complex and difficult to follow.",
    translation: "पेचीदा / घुमावदार",
    sentence: "The logic behind the new seating arrangement was so convoluted that no one knew where to sit.",
    synonyms: ["Intricate", "Complicated", "Tortuous"],
    antonyms: ["Simple", "Straightforward", "Direct"],
    trick: "Corn + Loop -> Like a maze made of corn loops; hard to find the way out.",
    tone: "Negative (-)",
    collocation: "Convoluted plot, Convoluted argument, Convoluted path",
    intensitySpectrum: [
      { word: "Twisted", level: "Low" },
      { word: "Complex", level: "Medium" },
      { word: "Convoluted", level: "High" }
    ],
    characterHook: "Hera Pheri Plot",
    hookWhy: "The plan to exchange the ransom money in Hera Pheri was hilariously convoluted."
  }
];
