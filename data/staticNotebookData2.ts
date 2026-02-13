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
    tone: "Neutral (0)",
    collocation: "Pay parity",
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
    collocation: "Onerous task",
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
    collocation: "Byzantine bureaucracy",
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
    collocation: "Esoteric knowledge",
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
    collocation: "Baroque architecture",
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
    collocation: "Prolix speech",
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
    collocation: "Arduous journey",
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
    collocation: "Unkempt hair",
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
    translation: "पेचीदा / घुवावदार",
    sentence: "The logic behind the new seating arrangement was so convoluted that no one knew where to sit.",
    synonyms: ["Intricate", "Complicated", "Tortuous"],
    antonyms: ["Simple", "Straightforward", "Direct"],
    trick: "Corn + Loop -> Like a maze made of corn loops; hard to find the way out.",
    tone: "Negative (-)",
    collocation: "Convoluted plot",
    intensitySpectrum: [
      { word: "Twisted", level: "Low" },
      { word: "Complex", level: "Medium" },
      { word: "Convoluted", level: "High" }
    ],
    characterHook: "Hera Pheri Plot",
    hookWhy: "The plan to exchange the ransom money in Hera Pheri was hilariously convoluted."
  },
  {
    word: "Intractable",
    partOfSpeech: "Adjective",
    meaning: "Hard to control or deal with; stubborn.",
    translation: "अड़ियल / जिसे काबू करना मुश्किल हो",
    sentence: "The unemployment problem in the country has become intractable despite several government schemes.",
    synonyms: ["Unmanageable", "Stubborn", "Obstinate"],
    antonyms: ["Manageable", "Compliant", "Docile"],
    trick: "In + Track + Able -> Not 'able' to bring back on the 'track'.",
    tone: "Negative (-)",
    collocation: "Intractable problem",
    intensitySpectrum: [
      { word: "Difficult", level: "Low" },
      { word: "Stubborn", level: "Medium" },
      { word: "Intractable", level: "High" }
    ],
    characterHook: "Betaal (Vikram & Betaal)",
    hookWhy: "Betaal was intractable; no matter how many times Vikram caught him, he would escape again."
  },
  {
    word: "Accost",
    partOfSpeech: "Verb",
    meaning: "To approach and address (someone) boldly or aggressively.",
    translation: "टोकना / आक्रामक रूप से जा कर बोलना",
    sentence: "Reporters accosted the minister as soon as he stepped out of his car.",
    synonyms: ["Confront", "Waylay", "Buttonhole"],
    antonyms: ["Avoid", "Evade", "Shun"],
    trick: "At + Cost -> To approach someone 'at any cost', even if they don't want to talk.",
    tone: "Negative (-)",
    collocation: "Accosted by a stranger",
    intensitySpectrum: [
      { word: "Approach", level: "Low" },
      { word: "Confront", level: "Medium" },
      { word: "Accost", level: "High" }
    ],
    characterHook: "Street Vendors / Salesmen",
    hookWhy: "They often accost passersby to sell their products aggressively."
  },
  {
    word: "Fervent",
    partOfSpeech: "Adjective",
    meaning: "Having or displaying a passionate intensity.",
    translation: "उत्साही / जोशि‍ला",
    sentence: "He is a fervent supporter of the cricket team and never misses a match.",
    synonyms: ["Passionate", "Intense", "Vehement", "Ardent"],
    antonyms: ["Apathetic", "Indifferent", "Cool"],
    trick: "Servant -> A loyal servant serves his master with 'fervent' devotion. (Also sounds like 'Fever' - heat/passion).",
    tone: "Positive (+)",
    collocation: "Fervent hope",
    intensitySpectrum: [
      { word: "Interested", level: "Low" },
      { word: "Enthusiastic", level: "Medium" },
      { word: "Fervent", level: "High" }
    ],
    characterHook: "Bhagat Singh",
    hookWhy: "His fervent patriotism and desire for freedom inspired the entire nation."
  },
  {
    word: "Burgeon",
    partOfSpeech: "Verb",
    meaning: "Begin to grow or increase rapidly; flourish.",
    translation: "तेजी से बढ़ना / फलना-फूलना",
    sentence: "The startup scene in India has burgeoned in the last decade.",
    synonyms: ["Flourish", "Thrive", "Proliferate", "Mushroom"],
    antonyms: ["Shrink", "Wither", "Diminish"],
    trick: "Burger -> If you eat too many burgers, your belly will 'burgeon' (expand).",
    tone: "Positive (+)",
    collocation: "Burgeoning population",
    intensitySpectrum: [
      { word: "Grow", level: "Low" },
      { word: "Expand", level: "Medium" },
      { word: "Burgeon", level: "High" }
    ],
    characterHook: "Share Market Graph",
    hookWhy: "A green candle in a bull market represents a burgeoning economy."
  },
  {
    word: "Recalcitrant",
    partOfSpeech: "Adjective",
    meaning: "Having an obstinately uncooperative attitude toward authority or discipline.",
    translation: "आज्ञा न मानने वाला / अड़ियल",
    sentence: "The recalcitrant student refused to follow the dress code despite multiple warnings.",
    synonyms: ["Uncooperative", "Intractable", "Truant", "Defiant"],
    antonyms: ["Compliant", "Amenable", "Obedient"],
    trick: "Re + Calci (Calculator) -> A student who refuses to use a calculator (technology) is recalcitrant (stubborn).",
    tone: "Negative (-)",
    collocation: "Recalcitrant child",
    intensitySpectrum: [
      { word: "Unwilling", level: "Low" },
      { word: "Disobedient", level: "Medium" },
      { word: "Recalcitrant", level: "High" }
    ],
    characterHook: "A Mule / Donkey",
    hookWhy: "Donkeys are famously recalcitrant; if they decide not to move, they won't."
  },
  {
    word: "Ardent",
    partOfSpeech: "Adjective",
    meaning: "Very enthusiastic or passionate.",
    translation: "प्रचंड / उत्सुक / उत्साही",
    sentence: "She is an ardent reader and finishes a novel every week.",
    synonyms: ["Avid", "Fervent", "Zealous", "Passionate"],
    antonyms: ["Half-hearted", "Indifferent", "Apathetic"],
    trick: "Hard + Dent -> You need 'ardent' (passionate) energy to make a 'hard dent' in the universe.",
    tone: "Positive (+)",
    collocation: "Ardent fan",
    intensitySpectrum: [
      { word: "Keen", level: "Low" },
      { word: "Eager", level: "Medium" },
      { word: "Ardent", level: "High" }
    ],
    characterHook: "Meera Bai",
    hookWhy: "Meera Bai was an ardent devotee of Lord Krishna."
  },
  {
    word: "Slipshod",
    partOfSpeech: "Adjective",
    meaning: "(typically of a person or method of work) characterized by a lack of care, thought, or organization.",
    translation: "लापरवाह / बेतरतीब",
    sentence: "The construction work was slipshod, leading to leaks in the roof within a month.",
    synonyms: ["Careless", "Slapdash", "Sloppy", "Shoddy"],
    antonyms: ["Meticulous", "Painstaking", "Careful"],
    trick: "Slip + Shoe -> Wearing shoes that 'slip' off because you were too careless to tie them properly.",
    tone: "Negative (-)",
    collocation: "Slipshod work",
    intensitySpectrum: [
      { word: "Messy", level: "Low" },
      { word: "Careless", level: "Medium" },
      { word: "Slipshod", level: "High" }
    ],
    characterHook: "Local Contractor (stereotypical)",
    hookWhy: "Doing a 'jugaad' job that falls apart the next day is an example of slipshod work."
  },
  {
    word: "Buttonhole",
    partOfSpeech: "Verb",
    meaning: "Attract the attention of and detain (someone) in conversation, typically against their will.",
    translation: "रोक कर रखना (बातचीत के लिए)",
    sentence: "He buttonholed me at the party and talked about his insurance plans for an hour.",
    synonyms: ["Accost", "Detain", "Corner", "Waylay"],
    antonyms: ["Release", "Ignore", "Let go"],
    trick: "Button + Hole -> Imagine holding someone by their shirt button/hole so they cannot run away while you talk.",
    tone: "Negative (-)",
    collocation: "Buttonholed by a stranger",
    intensitySpectrum: [
      { word: "Chat with", level: "Low" },
      { word: "Hold up", level: "Medium" },
      { word: "Buttonhole", level: "High" }
    ],
    characterHook: "LIC Agent / Relative at Wedding",
    hookWhy: "That one uncle who catches you and won't let you leave until he tells his whole life story."
  },
  {
    word: "Circumvent",
    partOfSpeech: "Verb",
    meaning: "Find a way around (an obstacle).",
    translation: "गतिरोध हटाना / बचना / धोखा देना",
    sentence: "Tech-savvy students often find ways to circumvent the school's internet firewall.",
    synonyms: ["Bypass", "Evade", "Sidestep", "Dodge"],
    antonyms: ["Confront", "Face", "Follow", "Obey"],
    trick: "Circle + Vent -> The thief had to go in a 'circle' to find a 'vent' to bypass the security door.",
    tone: "Neutral (0)",
    collocation: "Circumvent the rules",
    intensitySpectrum: [
      { word: "Avoid", level: "Low" },
      { word: "Bypass", level: "Medium" },
      { word: "Circumvent", level: "High" }
    ],
    characterHook: "Jack Sparrow (Pirates of the Caribbean)",
    hookWhy: "He always finds a clever way to circumvent the law and escape difficult situations."
  },
  {
    word: "Corpulent",
    partOfSpeech: "Adjective",
    meaning: "(of a person) fat.",
    translation: "मोटा / स्थूलकाय",
    sentence: "The corpulent king struggled to fit into his royal carriage.",
    synonyms: ["Obese", "Overweight", "Portly", "Stout"],
    antonyms: ["Thin", "Slender", "Skinny", "Gaunt"],
    trick: "Car + Pull -> He is so heavy (corpulent) that we need a 'Car' to 'Pull' him.",
    tone: "Neutral (0)",
    collocation: "Corpulent figure",
    intensitySpectrum: [
      { word: "Chubby", level: "Low" },
      { word: "Fat", level: "Medium" },
      { word: "Corpulent", level: "High" }
    ],
    characterHook: "Motu (Motu Patlu)",
    hookWhy: "Motu is the classic example of a corpulent character who loves samosas."
  },
  {
    word: "Ossify",
    partOfSpeech: "Verb",
    meaning: "Turn into bone or bony tissue; become rigid or fixed in attitude or position.",
    translation: "हड्डी बन जाना / कठोर हो जाना (विचारों में)",
    sentence: "If an organization doesn't innovate, its methods will ossify and it will fail.",
    synonyms: ["Harden", "Solidify", "Fossilize", "Rigidify"],
    antonyms: ["Soften", "Flex", "Change", "Adapt"],
    trick: "Fossil -> 'Ossify' sounds like 'Fossil'. Bones become fossils; ideas become rigid like fossils.",
    tone: "Negative (-)",
    collocation: "Ossified beliefs",
    intensitySpectrum: [
      { word: "Stiffen", level: "Low" },
      { word: "Harden", level: "Medium" },
      { word: "Ossify", level: "High" }
    ],
    characterHook: "Dolores Umbridge (Harry Potter)",
    hookWhy: "Her rules and mindset were completely ossified; she refused to accept any change or truth."
  },
  {
    word: "Risible",
    partOfSpeech: "Adjective",
    meaning: "Such as to provoke laughter.",
    translation: "हसने योग्य / मज़ाकिया",
    sentence: "The proposal was so risible that even the serious investors started laughing.",
    synonyms: ["Laughable", "Ridiculous", "Comic", "Amusing"],
    antonyms: ["Serious", "Solemn", "Grave"],
    trick: "Rise + Able -> A joke so funny that laughter is 'able' to 'rise' from your belly.",
    tone: "Neutral (0)",
    collocation: "Risible suggestion",
    intensitySpectrum: [
      { word: "Funny", level: "Low" },
      { word: "Amusing", level: "Medium" },
      { word: "Risible", level: "High" }
    ],
    characterHook: "Mr. Bean",
    hookWhy: "Everything Mr. Bean does is inherently risible (laughable)."
  },
  {
    word: "Eschew",
    partOfSpeech: "Verb",
    meaning: "Deliberately avoid using; abstain from.",
    translation: "त्याग करना / परहेज़ करना",
    sentence: "Vegetarians eschew meat, fish, and poultry.",
    synonyms: ["Abstain from", "Refrain from", "Shun", "Renounce"],
    antonyms: ["Indulge in", "Embrace", "Use", "Seek"],
    trick: "Ah-Choo (Sneeze) -> If someone sneezes 'Ah-Choo', you 'eschew' (avoid) them to stay healthy.",
    tone: "Neutral (0)",
    collocation: "Eschew violence",
    intensitySpectrum: [
      { word: "Avoid", level: "Low" },
      { word: "Abstain", level: "Medium" },
      { word: "Eschew", level: "High" }
    ],
    characterHook: "Mahatma Gandhi",
    hookWhy: "He famously eschewed violence (Ahimsa) and material possessions."
  },
  {
    word: "Twiddle",
    partOfSpeech: "Verb",
    meaning: "Twist or move or fiddle with something idly.",
    translation: "उंगलियों से खेलना / समय बर्बाद करना",
    sentence: "Stop twiddling your pen and focus on the exam!",
    synonyms: ["Fiddle", "Twist", "Play", "Jiggle"],
    antonyms: ["Work", "Focus", "Stay still"],
    trick: "Thumb + Middle -> Twisting your 'Thumb' and 'Middle' finger when you are bored.",
    tone: "Neutral (0)",
    collocation: "Twiddle thumbs",
    intensitySpectrum: [
      { word: "Touch", level: "Low" },
      { word: "Fiddle", level: "Medium" },
      { word: "Twiddle", level: "High" }
    ],
    characterHook: "Student in Exam Hall",
    hookWhy: "When you don't know the answer, you just sit there and twiddle your thumbs/pen."
  },
  {
    word: "Adumbrate",
    partOfSpeech: "Verb",
    meaning: "Report or represent in outline; indicate faintly.",
    translation: "धुंधला आभास देना / रूपरेखा प्रस्तुत करना",
    sentence: "The architect adumbrated his plans for the new building on a napkin.",
    synonyms: ["Outline", "Sketch", "Overshadow", "Suggest"],
    antonyms: ["Detail", "Clarify", "Expand", "Explain"],
    trick: "Add + Umbrella -> When you 'add' an 'umbrella', it casts a shadow (outline) on the ground.",
    tone: "Neutral (0)",
    collocation: "Adumbrate a plan",
    intensitySpectrum: [
      { word: "Hint", level: "Low" },
      { word: "Outline", level: "Medium" },
      { word: "Adumbrate", level: "High" }
    ],
    characterHook: "Sherlock Holmes",
    hookWhy: "Holmes often adumbrates the solution early in the story before revealing the full details at the end."
  },
  {
    word: "Ludicrous",
    partOfSpeech: "Adjective",
    meaning: "So foolish, unreasonable, or out of place as to be amusing; ridiculous.",
    translation: "ऊटपटांग / हास्यास्पद",
    sentence: "Paying $50 for a bottle of water is absolutely ludicrous.",
    synonyms: ["Absurd", "Ridiculous", "Preposterous", "Farcical"],
    antonyms: ["Reasonable", "Sensible", "Logical", "Serious"],
    trick: "Ludo + Crush -> Getting angry and 'crushing' the 'Ludo' board because you lost is ludicrous behavior.",
    tone: "Negative (-)",
    collocation: "Ludicrous price",
    intensitySpectrum: [
      { word: "Silly", level: "Low" },
      { word: "Ridiculous", level: "Medium" },
      { word: "Ludicrous", level: "High" }
    ],
    characterHook: "Jethalal (Taarak Mehta Ka Ooltah Chashmah)",
    hookWhy: "Jethalal often finds himself in ludicrous situations due to his own misunderstandings."
  },
  {
    word: "Grotesque",
    partOfSpeech: "Adjective",
    meaning: "Comically or repulsively ugly or distorted.",
    translation: "विकृत / भद्दा / अजीब",
    sentence: "The gargoyles on the old church were grotesque figures meant to scare away evil spirits.",
    synonyms: ["Malformed", "Distorted", "Monstrous", "Ugly"],
    antonyms: ["Beautiful", "Normal", "Aesthetic", "Graceful"],
    trick: "Grow + Tusk -> If a human face starts to 'Grow' a 'Tusk', it would look grotesque.",
    tone: "Negative (-)",
    collocation: "Grotesque figure",
    intensitySpectrum: [
      { word: "Ugly", level: "Low" },
      { word: "Deformed", level: "Medium" },
      { word: "Grotesque", level: "High" }
    ],
    characterHook: "Gollum (Lord of the Rings)",
    hookWhy: "Gollum's appearance is grotesque due to centuries of corruption by the Ring."
  },
  {
    word: "Piquant",
    partOfSpeech: "Adjective",
    meaning: "Having a pleasantly sharp taste or appetizing flavor; also, pleasantly stimulating or exciting to the mind.",
    translation: "चटपटा / दिलचस्प",
    sentence: "The chef added a piquant sauce that made the bland chicken taste amazing.",
    synonyms: ["Spicy", "Tangy", "Zesty", "Intriguing", "Stimulating"],
    antonyms: ["Bland", "Dull", "Insipid", "Boring"],
    trick: "Pick + Ant -> If you 'pick' an 'ant' and eat it, it will have a sharp (piquant) taste.",
    tone: "Positive (+)",
    collocation: "Piquant sauce",
    intensitySpectrum: [
      { word: "Tasty", level: "Low" },
      { word: "Spicy", level: "Medium" },
      { word: "Piquant", level: "High" }
    ],
    characterHook: "Ratatouille (Remy)",
    hookWhy: "Remy the rat was always looking for piquant flavors to create the perfect dish."
  },
  {
    word: "Rebarbative",
    partOfSpeech: "Adjective",
    meaning: "Unattractive and objectionable.",
    translation: "अप्रिय / घिनौना",
    sentence: "The rebarbative behavior of the manager made all the employees quit.",
    synonyms: ["Repellent", "Repulsive", "Unpleasant", "Disagreeable"],
    antonyms: ["Attractive", "Appealing", "Pleasant", "Charming"],
    trick: "Re + Barb (Barbed Wire) -> Like 'Barbed wire'; if you touch it, it is unpleasant and repels you.",
    tone: "Negative (-)",
    collocation: "Rebarbative nature",
    intensitySpectrum: [
      { word: "Unpleasant", level: "Low" },
      { word: "Offensive", level: "Medium" },
      { word: "Rebarbative", level: "High" }
    ],
    characterHook: "Miss Trunchbull (Matilda)",
    hookWhy: "Her personality and appearance were completely rebarbative to the children."
  },
  {
    word: "Mar",
    partOfSpeech: "Verb",
    meaning: "Impair the quality or appearance of; spoil.",
    translation: "बिगाड़ना / खराब करना",
    sentence: "A large scar marred his otherwise handsome face.",
    synonyms: ["Spoil", "Ruin", "Impair", "Disfigure", "Blemish"],
    antonyms: ["Enhance", "Improve", "Embellish", "Restore"],
    trick: "Maar (Hindi) -> 'Maar' (beating). If you beat someone, you 'mar' (spoil) their face.",
    tone: "Negative (-)",
    collocation: "Mar the beauty",
    intensitySpectrum: [
      { word: "Scratch", level: "Low" },
      { word: "Damage", level: "Medium" },
      { word: "Mar", level: "High" }
    ],
    characterHook: "Harvey Dent (Two-Face)",
    hookWhy: "Half of his face was severely marred by acid/fire."
  },
  {
    word: "Bolster",
    partOfSpeech: "Verb",
    meaning: "Support or strengthen; prop up.",
    translation: "सहारा देना / मजबूत करना",
    sentence: "More evidence is needed to bolster the prosecution's case.",
    synonyms: ["Strengthen", "Reinforce", "Boost", "Fortify"],
    antonyms: ["Undermine", "Weaken", "Hinder"],
    trick: "Booster -> Sounds like 'Booster'. A booster shot strengthens (bolsters) your immunity.",
    tone: "Positive (+)",
    collocation: "Bolster confidence",
    intensitySpectrum: [
      { word: "Help", level: "Low" },
      { word: "Support", level: "Medium" },
      { word: "Bolster", level: "High" }
    ],
    characterHook: "Samwise Gamgee (Lord of the Rings)",
    hookWhy: "He constantly bolstered Frodo's spirit when he wanted to give up."
  },
  {
    word: "Scathe",
    partOfSpeech: "Verb",
    meaning: "Harm, injure, or criticize severely (often used as 'Scathing').",
    translation: "हानि पहुँचाना / तीखी आलोचना करना",
    sentence: "The movie received a scathing review from the critics.",
    synonyms: ["Harm", "Injure", "Scorch", "Criticize"],
    antonyms: ["Heal", "Protect", "Praise"],
    trick: "Scar -> If you get 'scathed' (injured/burned), you are left with a 'scar'.",
    tone: "Negative (-)",
    collocation: "Scathing review",
    intensitySpectrum: [
      { word: "Criticize", level: "Low" },
      { word: "Attack", level: "Medium" },
      { word: "Scathe", level: "High" }
    ],
    characterHook: "Gordon Ramsay",
    hookWhy: "He is famous for his scathing remarks to chefs who cook badly."
  },
  {
    word: "Paradigm",
    partOfSpeech: "Noun",
    meaning: "A typical example or pattern of something; a model.",
    translation: "मिसाल / प्रतिमान",
    sentence: "He is seen as the paradigm of the successful entrepreneur.",
    synonyms: ["Model", "Exemplar", "Prototype", "Archetype"],
    antonyms: ["Anomaly", "Exception", "Deviation"],
    trick: "Parade + Diagram -> A 'Diagram' shown in a 'Parade' as the perfect model for everyone to follow.",
    tone: "Formal/Academic",
    collocation: "Paradigm shift",
    intensitySpectrum: [
      { word: "Example", level: "Low" },
      { word: "Pattern", level: "Medium" },
      { word: "Paradigm", level: "High" }
    ],
    characterHook: "Mary Poppins",
    hookWhy: "She is the paradigm of the perfect nanny—practically perfect in every way."
  },
  {
    word: "Quash",
    partOfSpeech: "Verb",
    meaning: "Reject as invalid, especially by legal procedure; put an end to.",
    translation: "रद्द करना / कुचल देना",
    sentence: "The High Court quashed the lower court's verdict due to lack of evidence.",
    synonyms: ["Annul", "Nullify", "Suppress", "Crush"],
    antonyms: ["Validate", "Support", "Encourage", "Permit"],
    trick: "Squash -> To 'Squash' a rebellion or a legal order so it cannot stand.",
    tone: "Legal/Formal",
    collocation: "Quash the verdict",
    intensitySpectrum: [
      { word: "Cancel", level: "Low" },
      { word: "Reject", level: "Medium" },
      { word: "Quash", level: "High" }
    ],
    characterHook: "Judge Dredd",
    hookWhy: "He has the power to quash judgments and rebellions instantly on the street."
  },
  {
    word: "Coagulate",
    partOfSpeech: "Verb",
    meaning: "(of a fluid, especially blood) change to a solid or semi-solid state.",
    translation: "जमना / गाढ़ा होना",
    sentence: "The blood began to coagulate around the wound, stopping the bleeding.",
    synonyms: ["Congeal", "Clot", "Thicken", "Solidify"],
    antonyms: ["Liquefy", "Melt", "Thin", "Dissolve"],
    trick: "Colgate -> Toothpaste (Colgate) is thick and semi-solid, just like coagulated blood.",
    tone: "Scientific/Medical",
    collocation: "Blood coagulates",
    intensitySpectrum: [
      { word: "Thicken", level: "Low" },
      { word: "Congeal", level: "Medium" },
      { word: "Coagulate", level: "High" }
    ],
    characterHook: "Wolverine (X-Men)",
    hookWhy: "His blood coagulates instantly to heal wounds."
  },
  {
    word: "Amalgamation",
    partOfSpeech: "Noun",
    meaning: "The action, process, or result of combining or uniting.",
    translation: "मिश्रण / एकीकरण",
    sentence: "The new company is an amalgamation of three smaller startups.",
    synonyms: ["Combination", "Union", "Merger", "Blend"],
    antonyms: ["Separation", "Division", "Segregation"],
    trick: "Amul + Game -> Amul is a successful 'amalgamation' of many small dairy farmers playing the business game.",
    tone: "Formal/Business",
    collocation: "Amalgamation of cultures",
    intensitySpectrum: [
      { word: "Mix", level: "Low" },
      { word: "Blend", level: "Medium" },
      { word: "Amalgamation", level: "High" }
    ],
    characterHook: "Power Rangers (Megazord)",
    hookWhy: "The Megazord is an amalgamation of all the individual Zords joining together."
  },
  {
    word: "Foil",
    partOfSpeech: "Verb",
    meaning: "Prevent (something considered wrong or undesirable) from succeeding.",
    translation: "विफल करना / हरा देना",
    sentence: "The police foiled the bank robbery attempt just in time.",
    synonyms: ["Thwart", "Frustrate", "Counter", "Obstruct"],
    antonyms: ["Assist", "Facilitate", "Aid", "Promote"],
    trick: "Aluminum Foil -> We wrap food in foil to 'stop' (foil) it from rotting. Also, fencing swords are called foils.",
    tone: "Dramatic",
    collocation: "Foil a plot",
    intensitySpectrum: [
      { word: "Stop", level: "Low" },
      { word: "Block", level: "Medium" },
      { word: "Foil", level: "High" }
    ],
    characterHook: "Perry the Platypus",
    hookWhy: "He always foils Dr. Doofenshmirtz's evil plans at the last minute."
  },
  {
    word: "Stymie",
    partOfSpeech: "Verb",
    meaning: "Prevent or hinder the progress of.",
    translation: "बाधा डालना / रोक लगाना",
    sentence: "Lack of funds stymied the research project for months.",
    synonyms: ["Impede", "Hinder", "Hamper", "Obstruct"],
    antonyms: ["Assist", "Help", "Facilitate", "Advance"],
    trick: "Stop + Me -> Sounds like 'Tie Me'. If you tie me up, you 'stymie' (stop) my progress.",
    tone: "Negative (-)",
    collocation: "Stymie progress",
    intensitySpectrum: [
      { word: "Slow down", level: "Low" },
      { word: "Hinder", level: "Medium" },
      { word: "Stymie", level: "High" }
    ],
    characterHook: "Gandalf",
    hookWhy: "Standing on the bridge yelling 'You Shall Not Pass!'—he stymied the Balrog."
  },
  {
    word: "Flout",
    partOfSpeech: "Verb",
    meaning: "Openly disregard (a rule, law or convention).",
    translation: "उल्लंघन करना (खुलेआम)",
    sentence: "Many motorcyclists flout the law by not wearing helmets.",
    synonyms: ["Defy", "Disregard", "Scorn", "Violate"],
    antonyms: ["Obey", "Observe", "Respect", "Abide by"],
    trick: "Fly + Out -> To 'Fly' 'Out' of the rules and ignore them completely.",
    tone: "Negative/Rebellious",
    collocation: "Flout the rules",
    intensitySpectrum: [
      { word: "Ignore", level: "Low" },
      { word: "Disobey", level: "Medium" },
      { word: "Flout", level: "High" }
    ],
    characterHook: "Captain Jack Sparrow",
    hookWhy: "He constantly flouts the laws of the British Navy and acts as he pleases."
  },
  {
    word: "Contravene",
    partOfSpeech: "Verb",
    meaning: "Violate the prohibition or order of (a law, treaty, or code of conduct).",
    translation: "अवहेलना करना / नियम तोड़ना",
    sentence: "The company's actions contravened the Environmental Protection Act.",
    synonyms: ["Violate", "Breach", "Infringe", "Transgress"],
    antonyms: ["Uphold", "Comply", "Obey"],
    trick: "Contra (Against) + Venue -> Going 'Against' the rules of the 'Venue'.",
    tone: "Formal/Legal",
    collocation: "Contravene the law",
    intensitySpectrum: [
      { word: "Break", level: "Low" },
      { word: "Violate", level: "Medium" },
      { word: "Contravene", level: "High" }
    ],
    characterHook: "Antigone (Greek Mythology)",
    hookWhy: "She famously contravened the King's order to bury her brother."
  },
  {
    word: "Impecunious",
    partOfSpeech: "Adjective",
    meaning: "Having little or no money.",
    translation: "निर्धन / गरीब",
    sentence: "As an impecunious student, he relied on instant noodles for dinner.",
    synonyms: ["Penniless", "Indigent", "Insolvent", "Poor"],
    antonyms: ["Wealthy", "Affluent", "Rich", "Prosperous"],
    trick: "Im (Not) + Pecunia (Money related) -> No money. (Think: 'Pack' is empty).",
    tone: "Formal",
    collocation: "Impecunious student",
    intensitySpectrum: [
      { word: "Broke", level: "Low" },
      { word: "Poor", level: "Medium" },
      { word: "Impecunious", level: "High" }
    ],
    characterHook: "Peter Parker (Spider-Man)",
    hookWhy: "Despite being a superhero, he is famously impecunious and struggles to pay rent."
  },
  {
    word: "Destitute",
    partOfSpeech: "Adjective",
    meaning: "Without the basic necessities of life.",
    translation: "निराश्रित / बेसहारा",
    sentence: "The floods left thousands of villagers destitute and homeless.",
    synonyms: ["Penniless", "Impoverished", "Indigent", "Needy"],
    antonyms: ["Rich", "Prosperous", "Secure"],
    trick: "Dust + Statue -> Standing like a 'Statue' covered in 'Dust' because you have no home or money.",
    tone: "Serious/Tragic",
    collocation: "Left destitute",
    intensitySpectrum: [
      { word: "Needy", level: "Low" },
      { word: "Poor", level: "Medium" },
      { word: "Destitute", level: "High" }
    ],
    characterHook: "The Little Match Girl",
    hookWhy: "She froze in the cold because she was completely destitute."
  },
  {
    word: "Threadbare",
    partOfSpeech: "Adjective",
    meaning: "(of cloth, clothing, or furniture) becoming thin and tattered with age.",
    translation: "घिसा-पिटा / जर्जर",
    sentence: "He wore a threadbare coat that had seen better days.",
    synonyms: ["Worn", "Tattered", "Ragged", "Shabby"],
    antonyms: ["New", "Pristine", "Luxurious"],
    trick: "Thread + Bare -> The cloth is so old that the 'threads' are 'bare' and visible.",
    tone: "Descriptive/Negative",
    collocation: "Threadbare hair",
    intensitySpectrum: [
      { word: "Old", level: "Low" },
      { word: "Worn out", level: "Medium" },
      { word: "Threadbare", level: "High" }
    ],
    characterHook: "Remus Lupin (Harry Potter)",
    hookWhy: "His robes are always described as threadbare, reflecting his poverty."
  },
  {
    word: "Pauperized",
    partOfSpeech: "Adjective",
    meaning: "Made poor; reduced to beggary.",
    translation: "कंगाल बना दिया गया",
    sentence: "The war pauperized the once-wealthy nation.",
    synonyms: ["Impoverished", "Bankrupted", "Ruined"],
    antonyms: ["Enriched", "Prosperous"],
    trick: "Paper -> Reducing someone to selling waste 'paper' because they are now 'pauperized'.",
    tone: "Serious",
    collocation: "Pauperized population",
    intensitySpectrum: [
      { word: "Poorer", level: "Low" },
      { word: "Impoverished", level: "Medium" },
      { word: "Pauperized", level: "High" }
    ],
    characterHook: "The Prince and the Pauper",
    hookWhy: "The story contrasts a royal with a pauper (someone who is pauperized)."
  },
  {
    word: "Penurious",
    partOfSpeech: "Adjective",
    meaning: "Extremely poor; poverty-stricken. (Can also mean stingy).",
    translation: "दरिद्र / कंजूस",
    sentence: "His penurious childhood made him very careful with money as an adult.",
    synonyms: ["Destitute", "Indigent", "Parsimonious", "Miserly"],
    antonyms: ["Wealthy", "Generous", "Lavish"],
    trick: "Penny -> Someone who has to count every single 'Penny' to survive.",
    tone: "Formal/Negative",
    collocation: "Penurious existence",
    intensitySpectrum: [
      { word: "Thrifty", level: "Low" },
      { word: "Stingy/Poor", level: "Medium" },
      { word: "Penurious", level: "High" }
    ],
    characterHook: "Charlie Bucket's Family",
    hookWhy: "They lived a penurious life, sharing cabbage soup and sleeping in one bed."
  },
  {
    word: "Languish",
    partOfSpeech: "Verb",
    meaning: "Lose or lack vitality; grow weak or feeble. (Often used for being stuck in a bad place).",
    translation: "मुरझाना / पड़े रहना (दुख में)",
    sentence: "The innocent man languished in prison for ten years before being proven innocent.",
    synonyms: ["Weaken", "Deteriorate", "Wither", "Rot"],
    antonyms: ["Thrive", "Flourish", "Prosper"],
    trick: "Anguish -> Lying in 'anguish' (mental pain) causes you to 'languish' (weaken).",
    tone: "Sad/Serious",
    collocation: "Languish in jail",
    intensitySpectrum: [
      { word: "Wait", level: "Low" },
      { word: "Suffer", level: "Medium" },
      { word: "Languish", level: "High" }
    ],
    characterHook: "Rapunzel",
    hookWhy: "She languished in the tower for years waiting for her life to begin."
  },
  {
    word: "Reinvigorate",
    partOfSpeech: "Verb",
    meaning: "Give new energy or strength to.",
    translation: "नई जान डालना / पुनर्जीवित करना",
    sentence: "A short nap can reinvigorate you for the rest of the workday.",
    synonyms: ["Revitalize", "Rejuvenate", "Refresh", "Revive"],
    antonyms: ["Exhaust", "Drain", "Debilitate"],
    trick: "Re + Vigor -> 'Vigor' means energy. To add energy 'again' (Re).",
    tone: "Positive (+)",
    collocation: "Reinvigorate the economy",
    intensitySpectrum: [
      { word: "Refresh", level: "Low" },
      { word: "Revive", level: "Medium" },
      { word: "Reinvigorate", level: "High" }
    ],
    characterHook: "Popeye",
    hookWhy: "Eating spinach immediately reinvigorates him to fight Bluto."
  },
  {
    word: "Scuttle",
    partOfSpeech: "Verb",
    meaning: "1. Run hurriedly with short quick steps. 2. Deliberately cause a scheme or plan to fail.",
    translation: "जल्दी में दौड़ना / योजना पर पानी फेरना",
    sentence: "The sudden heavy rain scuttled our plans for a weekend picnic.",
    synonyms: ["Scurry", "Scramble", "Dash", "Thwart", "Sabotage"],
    antonyms: ["Stroll", "Amble", "Facilitate", "Aid"],
    trick: "Scooter -> When strict dad arrives on his 'Scooter', the naughty kids 'scuttle' away to their rooms.",
    tone: "Neutral (0)",
    collocation: "Scuttle a plan",
    intensitySpectrum: [
      { word: "Run", level: "Low" },
      { word: "Scurry", level: "Medium" },
      { word: "Scuttle", level: "High" }
    ],
    characterHook: "Scrat (Ice Age)",
    hookWhy: "He is always scuttling frantically after his acorn, and his clumsiness often scuttles (ruins) the entire landscape."
  },
  {
    word: "Fraught",
    partOfSpeech: "Adjective",
    meaning: "(of a situation or course of action) filled with or destined to result in (something undesirable); causing or affected by great anxiety or stress.",
    translation: "भरा हुआ / तनावपूर्ण",
    sentence: "The journey through the dense jungle was fraught with danger.",
    synonyms: ["Filled", "Replete", "Anxious", "Stressed"],
    antonyms: ["Empty", "Calm", "Tranquil", "Peaceful"],
    trick: "Fraud + Caught -> When a 'Fraud' is 'Caught', the situation becomes very fraught (tense).",
    tone: "Negative (-)",
    collocation: "Fraught with danger, Fraught situation, Fraught with difficulties",
    intensitySpectrum: [
      { word: "Tense", level: "Low" },
      { word: "Anxious", level: "Medium" },
      { word: "Fraught", level: "High" }
    ],
    characterHook: "Frodo Baggins (Lord of the Rings)",
    hookWhy: "His journey to Mount Doom was fraught with constant peril and anxiety."
  },
  {
    word: "Perpetuate",
    partOfSpeech: "Verb",
    meaning: "Make (something, typically an undesirable situation or an unfounded belief) continue indefinitely.",
    translation: "बनाए रखना / निरंतर करना",
    sentence: "If you do not correct him, you will only perpetuate his bad behavior.",
    synonyms: ["Maintain", "Preserve", "Sustain", "Continue"],
    antonyms: ["End", "Stop", "Halt", "Prevent"],
    trick: "Per (Every) + Pet + Eat -> If you let your 'Pet' 'Eat' 'Every' time it cries, you perpetuate a bad habit.",
    tone: "Negative (-)",
    collocation: "Perpetuate a myth, Perpetuate inequality, Perpetuate a cycle",
    intensitySpectrum: [
      { word: "Continue", level: "Low" },
      { word: "Maintain", level: "Medium" },
      { word: "Perpetuate", level: "High" }
    ],
    characterHook: "Emperor Palpatine (Star Wars)",
    hookWhy: "He sought to perpetuate the rule of the Sith indefinitely."
  },
  {
    word: "Esurient",
    partOfSpeech: "Adjective",
    meaning: "Hungry or greedy.",
    translation: "भुक्खड़ / लालची",
    sentence: "The esurient investors grabbed all the available shares in the new startup.",
    synonyms: ["Ravenous", "Starving", "Gluttonous", "Voracious", "Greedy"],
    antonyms: ["Sated", "Full", "Satisfied", "Generous"],
    trick: "E (He) + Surient (Sounds like Restaurant) -> He runs to the 'Restaurant' because he is extremely esurient (hungry/greedy).",
    tone: "Negative (-)",
    collocation: "Esurient appetite, Esurient gaze, Esurient corporations",
    intensitySpectrum: [
      { word: "Hungry", level: "Low" },
      { word: "Ravenous", level: "Medium" },
      { word: "Esurient", level: "High" }
    ],
    characterHook: "Obelix (Asterix & Obelix)",
    hookWhy: "He has an esurient appetite for wild boar and is almost always hungry."
  },
  {
    word: "Ramification",
    partOfSpeech: "Noun",
    meaning: "A consequence of an action or event, especially when complex or unwelcome.",
    translation: "परिणाम / जटिल नतीजा",
    sentence: "Have you considered all the legal ramifications of signing this contract?",
    synonyms: ["Consequence", "Result", "Aftermath", "Outcome", "Effect"],
    antonyms: ["Cause", "Origin", "Source", "Inception"],
    trick: "Ram (Lord Ram) + Fication (Vacation) -> Lord Ram going on a 14-year 'vacation' (exile) had massive ramifications for Ayodhya.",
    tone: "Neutral (0)",
    collocation: "Legal ramifications, Political ramifications, Severe ramifications",
    intensitySpectrum: [
      { word: "Result", level: "Low" },
      { word: "Consequence", level: "Medium" },
      { word: "Ramification", level: "High" }
    ],
    characterHook: "The Butterfly Effect (Time Travel Trope)",
    hookWhy: "Stepping on a single bug in the past has massive, unpredictable ramifications on the future."
  },
  {
    word: "Internecine",
    partOfSpeech: "Adjective",
    meaning: "Destructive to both sides in a conflict; relating to conflict within a group or organization.",
    translation: "परस्पर विनाशकारी / आपसी झगड़ा",
    sentence: "The political party tore itself apart during the internecine struggle for leadership.",
    synonyms: ["Mutually destructive", "Deadly", "Ruinous", "Bloody", "Internal"],
    antonyms: ["Peaceful", "Harmonious", "Cooperative"],
    trick: "Inter (Between) + Nec (Neck) -> Cutting each other's 'Necks' from the 'Inside' (Inter), destroying both sides.",
    tone: "Negative (-)",
    collocation: "Internecine warfare, Internecine conflict, Internecine struggle",
    intensitySpectrum: [
      { word: "Internal", level: "Low" },
      { word: "Damaging", level: "Medium" },
      { word: "Internecine", level: "High" }
    ],
    characterHook: "The Targaryen Civil War (House of the Dragon)",
    hookWhy: "The 'Dance of the Dragons' was a brutal internecine war that nearly destroyed their own family from within."
  },
  {
    word: "Fratricidal",
    partOfSpeech: "Adjective",
    meaning: "Relating to or denoting conflict within a single family or organization; the killing of one's brother or sister.",
    translation: "भ्रातृघाती / भाई की हत्या से संबंधित",
    sentence: "The country was devastated by a long, fratricidal civil war.",
    synonyms: ["Murderous", "Internecine", "Kin-killing"],
    antonyms: ["Peaceful", "Fraternal"],
    trick: "Fratri (Brother) + Cide (Kill) -> Suicide is killing self, Fratricide is killing a brother.",
    tone: "Negative (-)",
    collocation: "Fratricidal war, Fratricidal conflict, Fratricidal bloodshed",
    intensitySpectrum: [
      { word: "Unfriendly", level: "Low" },
      { word: "Hostile", level: "Medium" },
      { word: "Fratricidal", level: "High" }
    ],
    characterHook: "Bhallaladeva (Baahubali)",
    hookWhy: "His intense jealousy led to a fratricidal conflict to eliminate his brother, Amarendra Baahubali."
  },
  {
    word: "Bloviate",
    partOfSpeech: "Verb",
    meaning: "Talk at length, especially in an inflated or empty way.",
    translation: "बड़बोलापन / लंबी-चौड़ी बात करना",
    sentence: "Politicians often bloviate for hours without actually saying anything important.",
    synonyms: ["Rant", "Declaim", "Bluster", "Orate"],
    antonyms: ["Be quiet", "Summarize", "Condense"],
    trick: "Blow + Air -> Blowing hot air from the mouth; talking nonsense pompously.",
    tone: "Negative (-)",
    collocation: "Bloviate about politics, Bloviate on television",
    intensitySpectrum: [
      { word: "Talk", level: "Low" },
      { word: "Lecture", level: "Medium" },
      { word: "Bloviate", level: "High" }
    ],
    characterHook: "Gilderoy Lockhart (Harry Potter)",
    hookWhy: "He would bloviate endlessly about his fake achievements."
  },
  {
    word: "Orate",
    partOfSpeech: "Verb",
    meaning: "Make a speech, especially pompously or at length.",
    translation: "भाषण देना",
    sentence: "He loves to stand on the stage and orate about his philosophy of life.",
    synonyms: ["Speak", "Declaim", "Preach", "Sermonize"],
    antonyms: ["Listen", "Mumble"],
    trick: "Oral + Rate -> Giving an 'Oral' speech at a high 'Rate'.",
    tone: "Neutral (0)",
    collocation: "Orate to the crowd, Orate on a topic",
    intensitySpectrum: [
      { word: "Talk", level: "Low" },
      { word: "Speak", level: "Medium" },
      { word: "Orate", level: "High" }
    ],
    characterHook: "Mark Antony (Julius Caesar)",
    hookWhy: "His famous 'Friends, Romans, Countrymen' speech is a classic example of orating."
  },
  {
    word: "Usher",
    partOfSpeech: "Verb",
    meaning: "Show or guide (someone) somewhere.",
    translation: "राह दिखाना / ले जाना",
    sentence: "The host ushered the guests into the dining hall.",
    synonyms: ["Guide", "Escort", "Lead", "Conduct"],
    antonyms: ["Follow", "Trail", "Mislead"],
    trick: "Push -> You don't 'Push' guests, you 'Usher' (guide) them gently.",
    tone: "Positive (+)",
    collocation: "Usher in a new era, Usher guests, Usher to seats",
    intensitySpectrum: [
      { word: "Point", level: "Low" },
      { word: "Guide", level: "Medium" },
      { word: "Usher", level: "High" }
    ],
    characterHook: "Cinema Hall Guy",
    hookWhy: "The person with the torch who shows you your seat is literally called an Usher."
  },
  {
    word: "Execrable",
    partOfSpeech: "Adjective",
    meaning: "Extremely bad or unpleasant.",
    translation: "घिनौना / बहुत खराब",
    sentence: "The food at that hotel was execrable; we couldn't even eat it.",
    synonyms: ["Appalling", "Atrocious", "Abominable", "Disgusting"],
    antonyms: ["Excellent", "Admirable", "Wonderful"],
    trick: "Ex + Crab -> If your 'Ex' serves you a rotten 'Crab', the taste is execrable.",
    tone: "Negative (-)",
    collocation: "Execrable taste, Execrable crime, Execrable performance",
    intensitySpectrum: [
      { word: "Bad", level: "Low" },
      { word: "Terrible", level: "Medium" },
      { word: "Execrable", level: "High" }
    ],
    characterHook: "Vogon Poetry (Hitchhiker's Guide)",
    hookWhy: "Described as the third worst poetry in the universe—truly execrable."
  },
  {
    word: "Impugn",
    partOfSpeech: "Verb",
    meaning: "Dispute the truth, validity, or honesty of (a statement or motive); call into question.",
    translation: "चुनौती देना / संदेह करना",
    sentence: "Are you trying to impugn my integrity by accusing me of theft?",
    synonyms: ["Challenge", "Question", "Dispute", "Attack"],
    antonyms: ["Support", "Validate", "Uphold", "Endorse"],
    trick: "Im (Not) + Punga (Fight/Hindi) -> Don't take a 'punga' (fight) by questioning my honesty.",
    tone: "Negative (-)",
    collocation: "Impugn character, Impugn motives, Impugn reputation",
    intensitySpectrum: [
      { word: "Doubt", level: "Low" },
      { word: "Question", level: "Medium" },
      { word: "Impugn", level: "High" }
    ],
    characterHook: "Phoenix Wright (Ace Attorney)",
    hookWhy: "He shouts 'Objection!' to impugn the witness's false testimony."
  },
  {
    word: "Emasculate",
    partOfSpeech: "Verb",
    meaning: "Deprive (a man) of his male role or identity; make weaker or less effective.",
    translation: "पौरुषहीन करना / कमजोर करना",
    sentence: "The strict laws have emasculated the power of the local police.",
    synonyms: ["Weaken", "Enfeeble", "Debilitate", "Castrate"],
    antonyms: ["Strengthen", "Empower", "Invigorate"],
    trick: "E (Exit) + Masculine -> To take the 'masculine' power out of someone.",
    tone: "Negative (-)",
    collocation: "Emasculate the opposition, Feeling emasculated",
    intensitySpectrum: [
      { word: "Discourage", level: "Low" },
      { word: "Weaken", level: "Medium" },
      { word: "Emasculate", level: "High" }
    ],
    characterHook: "Theon Greyjoy (Game of Thrones)",
    hookWhy: "He was literally and metaphorically emasculated by Ramsay Bolton, becoming 'Reek'."
  },
  {
    word: "Lopsided",
    partOfSpeech: "Adjective",
    meaning: "With one side lower or smaller than the other.",
    translation: "तिरछा / एकतरफा",
    sentence: "The football match was a lopsided victory, with one team winning 10-0.",
    synonyms: ["Uneven", "Unbalanced", "Asymmetrical", "Skewed"],
    antonyms: ["Balanced", "Even", "Symmetrical"],
    trick: "Laptop + Side -> If you keep your 'Laptop' on one 'Side' of your lap, your posture becomes lopsided.",
    tone: "Neutral (0)",
    collocation: "Lopsided grin, Lopsided victory, Lopsided deal",
    intensitySpectrum: [
      { word: "Uneven", level: "Low" },
      { word: "Tilting", level: "Medium" },
      { word: "Lopsided", level: "High" }
    ],
    characterHook: "The Hunchback of Notre Dame",
    hookWhy: "Quasimodo's physical appearance and gait were lopsided."
  },
  {
    word: "Calumniate",
    partOfSpeech: "Verb",
    meaning: "Make false and defamatory statements about (someone).",
    translation: "कलंक लगाना / चुगली करना",
    sentence: "The rivals tried to calumniate the candidate to ruin his chances in the election.",
    synonyms: ["Slander", "Defame", "Malign", "Vilify"],
    antonyms: ["Praise", "Acclaim", "Honor"],
    trick: "Column + Hate -> Writing 'Hateful' lies in a newspaper 'Column' to ruin someone's image.",
    tone: "Negative (-)",
    collocation: "Calumniate a rival, Calumniate the innocent",
    intensitySpectrum: [
      { word: "Criticize", level: "Low" },
      { word: "Slander", level: "Medium" },
      { word: "Calumniate", level: "High" }
    ],
    characterHook: "Rita Skeeter (Harry Potter)",
    hookWhy: "She used her Quick-Quotes Quill to calumniate Harry and Hermione in the Daily Prophet."
  },
  {
    word: "Folly",
    partOfSpeech: "Noun",
    meaning: "Lack of good sense; foolishness.",
    translation: "मूर्खता / नासमझी",
    sentence: "It would be sheer folly to quit your job without having another one lined up.",
    synonyms: ["Foolishness", "Stupidity", "Idiocy", "Imprudence"],
    antonyms: ["Wisdom", "Prudence", "Sense"],
    trick: "Fall -> Foolish people often 'Fall' into traps due to their 'Folly'.",
    tone: "Negative (-)",
    collocation: "Sheer folly, Act of folly, Human folly",
    intensitySpectrum: [
      { word: "Mistake", level: "Low" },
      { word: "Silliness", level: "Medium" },
      { word: "Folly", level: "High" }
    ],
    characterHook: "King Lear",
    hookWhy: "His decision to banish his only honest daughter was an act of tragic folly."
  },
  {
    word: "Redolent",
    partOfSpeech: "Adjective",
    meaning: "Strongly reminiscent or suggestive of (something). Also, fragrant.",
    translation: "याद दिलाने वाला / सुगंधित",
    sentence: "The room was redolent of old books and tobacco.",
    synonyms: ["Reminiscent", "Suggestive", "Fragrant", "Aromatic"],
    antonyms: ["Odorless", "Forgetful"],
    trick: "Red + Rose + Scent -> A 'Red' rose has a 'Scent' that is redolent of romance.",
    tone: "Positive (+)",
    collocation: "Redolent of the past, Redolent with spice",
    intensitySpectrum: [
      { word: "Smelling", level: "Low" },
      { word: "Suggestive", level: "Medium" },
      { word: "Redolent", level: "High" }
    ],
    characterHook: "Perfume (Movie/Book)",
    hookWhy: "The main character is obsessed with scents that are redolent of specific things."
  },
  {
    word: "Crescendo",
    partOfSpeech: "Noun",
    meaning: "The loudest point reached in a gradually increasing sound.",
    translation: "स्वरोत्कर्ष / धीरे-धीरे बढ़ती आवाज़",
    sentence: "The applause rose to a crescendo as the winner walked onto the stage.",
    synonyms: ["Climax", "Peak", "Apex", "Swell"],
    antonyms: ["Decrease", "Fade", "Bottom"],
    trick: "Crescent -> Like the 'Crescent' moon that grows bigger and brighter (louder).",
    tone: "Neutral (0)",
    collocation: "Reached a crescendo, Rising to a crescendo",
    intensitySpectrum: [
      { word: "Increase", level: "Low" },
      { word: "Swell", level: "Medium" },
      { word: "Crescendo", level: "High" }
    ],
    characterHook: "Hans Zimmer Soundtrack",
    hookWhy: "His music always builds up slowly to a massive, epic crescendo."
  },
  {
    word: "Suffused",
    partOfSpeech: "Verb",
    meaning: "Gradually spread through or over.",
    translation: "छा जाना / भर जाना (रंग या भावना)",
    sentence: "Her face was suffused with color when she realized her mistake.",
    synonyms: ["Permeated", "Covered", "Imbued", "Saturated"],
    antonyms: ["Empty", "Drain", "Clear"],
    trick: "Surface + Fuse -> When a liquid hits the 'surface', it 'fuses' and spreads everywhere.",
    tone: "Neutral (0)",
    collocation: "Suffused with light, Suffused with happiness, Cheeks suffused",
    intensitySpectrum: [
      { word: "Spread", level: "Low" },
      { word: "Cover", level: "Medium" },
      { word: "Suffuse", level: "High" }
    ],
    characterHook: "Inside Out (Emotions)",
    hookWhy: "When Riley feels Sadness, her memories are suffused with a blue color."
  },
  {
    word: "Wistful",
    partOfSpeech: "Adjective",
    meaning: "Having or showing a feeling of vague or regretful longing.",
    translation: "उदास / पुरानी यादों में खोया हुआ",
    sentence: "He looked at the old photo with a wistful smile.",
    synonyms: ["Nostalgic", "Yearning", "Longing", "Melancholy"],
    antonyms: ["Cheerful", "Happy", "Content"],
    trick: "Wish-ful -> Full of 'wishes' for the past that can't come true.",
    tone: "Negative (-)",
    collocation: "Wistful smile, Wistful glance, Wistful sigh",
    intensitySpectrum: [
      { word: "Thoughtful", level: "Low" },
      { word: "Nostalgic", level: "Medium" },
      { word: "Wistful", level: "High" }
    ],
    characterHook: "Severus Snape",
    hookWhy: "His 'Always' line represents a wistful, lifelong longing for Lily Potter."
  },
  {
    word: "Absolve",
    partOfSpeech: "Verb",
    meaning: "Declare (someone) free from guilt, obligation, or punishment.",
    translation: "दोषमुक्त करना / पाप से मुक्त करना",
    sentence: "The priest absolved the man of his sins after confession.",
    synonyms: ["Exonerate", "Acquit", "Forgive", "Pardon"],
    antonyms: ["Blame", "Condemn", "Convict", "Punish"],
    trick: "Ab + Solve -> Now that the case is 'Solved', we can 'Absolve' (free) the innocent suspect.",
    tone: "Positive (+)",
    collocation: "Absolve from guilt, Absolve of sin, Absolve responsibility",
    intensitySpectrum: [
      { word: "Forgive", level: "Low" },
      { word: "Pardon", level: "Medium" },
      { word: "Absolve", level: "High" }
    ],
    characterHook: "Thanos (Endgame)",
    hookWhy: "He believed his plan would save the universe, absolving him of the guilt of killing half of it."
  },
  {
    word: "Supplant",
    partOfSpeech: "Verb",
    meaning: "Supersede and replace.",
    translation: "स्थान लेना / हटा कर जगह लेना",
    sentence: "DVDs were quickly supplanted by streaming services.",
    synonyms: ["Replace", "Supersede", "Displace", "Oust"],
    antonyms: ["Keep", "Retain", "Surrender"],
    trick: "Plant -> Uproot one 'Plant' and put another in its place.",
    tone: "Neutral (0)",
    collocation: "Supplant the old, Technolgy supplants",
    intensitySpectrum: [
      { word: "Change", level: "Low" },
      { word: "Replace", level: "Medium" },
      { word: "Supplant", level: "High" }
    ],
    characterHook: "Scar (The Lion King)",
    hookWhy: "He killed Mufasa to supplant him as the King of Pride Rock."
  },
  {
    word: "Defenestrate",
    partOfSpeech: "Verb",
    meaning: "Throw (someone) out of a window.",
    translation: "खिड़की से बाहर फेंकना",
    sentence: "In a fit of rage, the villain threatened to defenestrate his henchman.",
    synonyms: ["Eject", "Throw out", "Discard"],
    antonyms: ["Welcome in", "Admit"],
    trick: "Defence + Frustrate -> He was so 'Frustrated' by the 'Defence' that he threw him out the window.",
    tone: "Negative (-)",
    collocation: "Defenestrate the enemy, Act of defenestration",
    intensitySpectrum: [
      { word: "Push", level: "Low" },
      { word: "Throw", level: "Medium" },
      { word: "Defenestrate", level: "High" }
    ],
    characterHook: "Jaime Lannister",
    hookWhy: "He famously defenestrated Bran Stark from the tower window ('The things I do for love')."
  },
  {
    word: "Lull",
    partOfSpeech: "Verb",
    meaning: "Calm or send to sleep, typically with soothing sounds or movements.",
    translation: "सुलना / शांत करना / ठहराव",
    sentence: "The sound of the rain lulled the baby to sleep.",
    synonyms: ["Soothe", "Calm", "Quieten", "Hush"],
    antonyms: ["Agitate", "Disturb", "Awaken"],
    trick: "Lullaby -> A 'Lullaby' is sung to 'Lull' a baby to sleep.",
    tone: "Positive (+)",
    collocation: "Lull to sleep, Lull in the storm, False sense of security",
    intensitySpectrum: [
      { word: "Quiet", level: "Low" },
      { word: "Calm", level: "Medium" },
      { word: "Lull", level: "High" }
    ],
    characterHook: "Jigglypuff",
    hookWhy: "Her song instantly lulls everyone to sleep (so she can draw on their faces)."
  },
  {
    word: "Grim",
    partOfSpeech: "Adjective",
    meaning: "Forbidding or uninviting; depressing or worrying.",
    translation: "भयानक / विकट / कठोर",
    sentence: "The doctor came out with a grim expression on his face.",
    synonyms: ["Stern", "Gloomy", "Bleak", "Dreadful"],
    antonyms: ["Cheerful", "Bright", "Pleasant"],
    trick: "Grim Reaper -> The personification of death is 'Grim' (scary and serious).",
    tone: "Negative (-)",
    collocation: "Grim reality, Grim reaper, Grim future",
    intensitySpectrum: [
      { word: "Serious", level: "Low" },
      { word: "Gloomy", level: "Medium" },
      { word: "Grim", level: "High" }
    ],
    characterHook: "Batman",
    hookWhy: "He is the 'Dark Knight' who maintains a grim demeanor to scare criminals."
  },
  {
    word: "Cadaverous",
    partOfSpeech: "Adjective",
    meaning: "Resembling a corpse in being very pale, thin, or bony.",
    translation: "शव जैसा / बहुत दुबला-पतला",
    sentence: "After the long illness, he looked absolutely cadaverous.",
    synonyms: ["Pale", "Gaunt", "Emaciated", "Ghastly"],
    antonyms: ["Healthy", "Rosy", "Plump"],
    trick: "Cadaver (Corpse) -> Looking like a 'Cadaver'.",
    tone: "Negative (-)",
    collocation: "Cadaverous appearance, Cadaverous face",
    intensitySpectrum: [
      { word: "Thin", level: "Low" },
      { word: "Gaunt", level: "Medium" },
      { word: "Cadaverous", level: "High" }
    ],
    characterHook: "Brook (One Piece)",
    hookWhy: "He is literally a skeleton, the ultimate cadaverous figure."
  },
  {
    word: "Surmise",
    partOfSpeech: "Verb",
    meaning: "Suppose that something is true without having evidence to confirm it.",
    translation: "अनुमान लगाना / शंका करना",
    sentence: "From his guilty expression, I surmised that he had broken the vase.",
    synonyms: ["Guess", "Conjecture", "Suspect", "Deduce"],
    antonyms: ["Know", "Verify", "Prove"],
    trick: "Sir + Prize -> 'Sir', I guess (surmise) there is a 'Prize' in this box.",
    tone: "Neutral (0)",
    collocation: "Surmise the truth, Mere surmise",
    intensitySpectrum: [
      { word: "Guess", level: "Low" },
      { word: "Suspect", level: "Medium" },
      { word: "Surmise", level: "High" }
    ],
    characterHook: "Sherlock Holmes",
    hookWhy: "He can surmise a person's entire history just by looking at their shoes."
  },
  {
    word: "Elusive",
    partOfSpeech: "Adjective",
    meaning: "Difficult to find, catch, or achieve.",
    translation: "हाथ न आने वाला / पकड़ से बाहर",
    sentence: "Success remained elusive for him despite years of hard work.",
    synonyms: ["Slippery", "Evasive", "Fugitive", "Intangible"],
    antonyms: ["Accessible", "Available", "Stable"],
    trick: "Illusion -> Something that is an 'Illusion' is hard to catch, hence 'Elusive'.",
    tone: "Neutral (0)",
    collocation: "Elusive criminal, Elusive goal, Elusive memory",
    intensitySpectrum: [
      { word: "Hard to find", level: "Low" },
      { word: "Tricky", level: "Medium" },
      { word: "Elusive", level: "High" }
    ],
    characterHook: "The Golden Snitch (Harry Potter)",
    hookWhy: "It is small, fast, and incredibly elusive for the Seeker to catch."
  }
];