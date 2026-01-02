
import { SilsilaCategory, SilsilaItem } from "../types";

export const STATIC_VOCAB_DATA: Record<SilsilaCategory, SilsilaItem[]> = {
  [SilsilaCategory.MASTER_COLLECTION]: [
    {
      type: 'detailed',
      data: {
        word: "Adduce",
        partOfSpeech: "Verb",
        meaning: "To cite as evidence or proof.",
        translation: "प्रमाण प्रस्तुत करना",
        sentence: "The lawyer failed to adduce enough evidence to support his argument.",
        synonyms: ["Cite", "Quote", "Present", "Proffer", "Mention"],
        antonyms: ["Hide", "Conceal", "Withdraw", "Retract", "Obscure"],
        trick: "Add + Use = To ADD facts to USE as proof.",
        tone: "Neutral (0)",
        collocation: "Adduce evidence",
        intensitySpectrum: []
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Armistice",
        partOfSpeech: "Noun",
        meaning: "An agreement made by opposing sides in a war to stop fighting for a certain time; a truce.",
        translation: "युद्धविराम",
        sentence: "The armistice was signed on November 11, ending the hostilities.",
        synonyms: ["Truce", "Ceasefire", "Peace"],
        antonyms: ["War", "Hostility", "Conflict"],
        trick: "Arm + Is + Ice -> Arms (Weapons) are put on Ice (Frozen/Stopped).",
        tone: "Positive (+)",
        collocation: "Sign an armistice",
        intensitySpectrum: [
          { word: "Pause", level: "Mild" },
          { word: "Ceasefire", level: "Medium" },
          { word: "Armistice", level: "High" },
          { word: "Treaty", level: "Extreme" }
        ],
        characterHook: "Wagah Border Ceremony",
        hookWhy: "Soldiers from both sides meet, shake hands (or show aggression), but there is no shooting. It is a controlled armistice."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Ruckus",
        partOfSpeech: "Noun",
        meaning: "A disturbance or commotion.",
        translation: "हंगामा / शोरगुल",
        sentence: "The protesters caused a ruckus outside the city hall.",
        synonyms: ["Commotion", "Uproar", "Fracas"],
        antonyms: ["Calm", "Peace", "Order"],
        trick: "Raavan + Kus (Kushti) -> Like a wrestling match causing noise.",
        tone: "Negative (-)",
        collocation: "Cause a ruckus",
        intensitySpectrum: [
          { word: "Noise", level: "Mild" },
          { word: "Disturbance", level: "Medium" },
          { word: "Ruckus", level: "High" },
          { word: "Riot", level: "Extreme" }
        ],
        characterHook: "Fish Market (Machli Bazaar)",
        hookWhy: "The ultimate Indian metaphor for noise and confusion."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Fracas",
        partOfSpeech: "Noun",
        meaning: "A noisy disturbance or quarrel.",
        translation: "कलह / दंगा",
        sentence: "He was injured in a drunken fracas at the bar.",
        synonyms: ["Brawl", "Scuffle", "Melee"],
        antonyms: ["Harmony", "Agreement", "Peace"],
        trick: "Fracture -> A fight that causes fractures.",
        tone: "Negative (-)",
        collocation: "Drunken fracas",
        intensitySpectrum: [
          { word: "Argument", level: "Mild" },
          { word: "Scuffle", level: "Medium" },
          { word: "Fracas", level: "High" },
          { word: "Mayhem", level: "Extreme" }
        ],
        characterHook: "Indian Parliament (Monsoon Session)",
        hookWhy: "Chairs thrown, papers torn, shouting matches - a political fracas."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Rebarbative",
        partOfSpeech: "Adjective",
        meaning: "Unattractive and objectionable.",
        translation: "अरुचिकर / अप्रिय",
        sentence: "I found his rebarbative attitude impossible to deal with.",
        synonyms: ["Repellent", "Repulsive", "Unpleasant"],
        antonyms: ["Attractive", "Pleasant", "Appealing"],
        trick: "Barbed Wire -> Something prickly and repellent like barbed wire.",
        tone: "Negative (-)",
        collocation: "Rebarbative nature",
        intensitySpectrum: [
          { word: "Unpleasant", level: "Mild" },
          { word: "Off-putting", level: "Medium" },
          { word: "Rebarbative", level: "High" },
          { word: "Abhorrent", level: "Extreme" }
        ],
        characterHook: "Kachra Seth (Hera Pheri)",
        hookWhy: "His attitude, his look, his voice - everything was unpleasant."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Ineluctable",
        partOfSpeech: "Adjective",
        meaning: "Unable to be resisted or avoided; inescapable.",
        translation: "अनिवार्य / अपरिहार्य",
        sentence: "The ineluctable conclusion was that the company had to close.",
        synonyms: ["Unavoidable", "Inevitable", "Inescapable"],
        antonyms: ["Avoidable", "Preventable", "Uncertain"],
        trick: "In (Not) + Elect (Choose) -> You cannot choose to avoid it.",
        tone: "Neutral (0)",
        collocation: "Ineluctable fate",
        intensitySpectrum: [
          { word: "Likely", level: "Mild" },
          { word: "Probable", level: "Medium" },
          { word: "Ineluctable", level: "High" },
          { word: "Destined", level: "Extreme" }
        ],
        characterHook: "Thanos",
        hookWhy: "'I am Inevitable' (Ineluctable). You cannot stop him."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Stifle",
        partOfSpeech: "Verb",
        meaning: "1. Make (someone) unable to breathe properly. 2. Restrain (a reaction) or stop oneself acting.",
        translation: "दबाना / दम घोंटना",
        sentence: "She tried to stifle a yawn during the meeting.",
        synonyms: ["Suppress", "Smother", "Choke"],
        antonyms: ["Encourage", "Release", "Vent"],
        trick: "Stiff -> Make something stiff/stop moving.",
        tone: "Negative (-)",
        collocation: "Stifle dissent/yawn",
        intensitySpectrum: [
          { word: "Hide", level: "Mild" },
          { word: "Restrain", level: "Medium" },
          { word: "Stifle", level: "High" },
          { word: "Suffocate", level: "Extreme" }
        ],
        characterHook: "Students in Morning Assembly",
        hookWhy: "Trying to stop laughing (stifle) when the Principal is shouting."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Apoplectic",
        partOfSpeech: "Adjective",
        meaning: "Overcome with anger; extremely indignant.",
        translation: "आग बबूला / अत्यंत क्रुद्ध",
        sentence: "He was apoplectic with rage when he saw the damage.",
        synonyms: ["Furious", "Enraged", "Incensed"],
        antonyms: ["Calm", "Pleased", "Delighted"],
        trick: "Pop -> So angry a vein is about to 'pop'.",
        tone: "Negative (-)",
        collocation: "Apoplectic with rage",
        intensitySpectrum: [
          { word: "Angry", level: "Mild" },
          { word: "Furious", level: "Medium" },
          { word: "Apoplectic", level: "High" },
          { word: "Homicidal", level: "Extreme" }
        ],
        characterHook: "Sunny Deol (Ghatak)",
        hookWhy: "'Saato ko saath maarunga!' - Shaking with rage."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Lachrymose",
        partOfSpeech: "Adjective",
        meaning: "Tearful or given to weeping.",
        translation: "रोनेवाला / अश्रुपूर्ण",
        sentence: "The funeral was a lachrymose affair.",
        synonyms: ["Tearful", "Weepy", "Sentimental"],
        antonyms: ["Cheerful", "Beaming", "Laughing"],
        trick: "Lac (Lake) + Cry -> Crying a lake of tears.",
        tone: "Negative (-)",
        collocation: "Lachrymose drama",
        intensitySpectrum: [
          { word: "Sad", level: "Mild" },
          { word: "Weepy", level: "Medium" },
          { word: "Lachrymose", level: "High" },
          { word: "Inconsolable", level: "Extreme" }
        ],
        characterHook: "Nirupa Roy (The Mother)",
        hookWhy: "Always crying in old Bollywood movies."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Incandescent",
        partOfSpeech: "Adjective",
        meaning: "1. Emitting light as a result of being heated. 2. Full of strong emotion; passionate or angry.",
        translation: "तप्त / अत्यंत क्रुद्ध",
        sentence: "She was incandescent with rage at the accusation.",
        synonyms: ["Burning", "Furious", "Radiant"],
        antonyms: ["Dark", "Calm", "Cool"],
        trick: "Candle -> Burning bright and hot like a candle.",
        tone: "Negative (-)",
        collocation: "Incandescent with rage",
        intensitySpectrum: [
          { word: "Hot", level: "Mild" },
          { word: "Glowing", level: "Medium" },
          { word: "Incandescent", level: "High" },
          { word: "Blinding", level: "Extreme" }
        ],
        characterHook: "Angry Shiva (Rudra)",
        hookWhy: "Glowing with power and anger."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Frenzied",
        partOfSpeech: "Adjective",
        meaning: "Wildly excited or uncontrolled.",
        translation: "उन्मत्त / पागलपन भरा",
        sentence: "The rock star was greeted by frenzied screaming from fans.",
        synonyms: ["Frantic", "Wild", "Hysterical"],
        antonyms: ["Calm", "Composed", "Tranquil"],
        trick: "Friend + Z (Zombie) -> Running like crazy from a zombie friend.",
        tone: "Negative (-)",
        collocation: "Frenzied attack",
        intensitySpectrum: [
          { word: "Excited", level: "Mild" },
          { word: "Manic", level: "Medium" },
          { word: "Frenzied", level: "High" },
          { word: "Berserk", level: "Extreme" }
        ],
        characterHook: "Stock Market Traders (Scam 1992)",
        hookWhy: "Shouting 'Buy! Buy!' in the ring - total frenzy."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Rabid",
        partOfSpeech: "Adjective",
        meaning: "1. Having extreme or fanatical support or belief. 2. Affected with rabies.",
        translation: "कट्टर / पागल",
        sentence: "He is a rabid supporter of the football team.",
        synonyms: ["Fanatical", "Extreme", "Maniacal"],
        antonyms: ["Moderate", "Indifferent", "Sane"],
        trick: "Rabbit -> A mad rabbit biting people (Rabies).",
        tone: "Negative (-)",
        collocation: "Rabid fan",
        intensitySpectrum: [
          { word: "Keen", level: "Mild" },
          { word: "Obsessed", level: "Medium" },
          { word: "Rabid", level: "High" },
          { word: "Psychotic", level: "Extreme" }
        ],
        characterHook: "Salman Khan Fans",
        hookWhy: "Will fight anyone who says a bad word about 'Bhai'."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Quell",
        partOfSpeech: "Verb",
        meaning: "Put an end to (a rebellion or other disorder), typically by the use of force.",
        translation: "कुचलना / शांत करना",
        sentence: "Police were sent to quell the riots.",
        synonyms: ["Suppress", "Crush", "Subdue"],
        antonyms: ["Incite", "Provoke", "Agitate"],
        trick: "Well -> Throw them in a well to stop the noise.",
        tone: "Negative (-)",
        collocation: "Quell the uprising",
        intensitySpectrum: [
          { word: "Calm", level: "Mild" },
          { word: "Subdue", level: "Medium" },
          { word: "Quell", level: "High" },
          { word: "Annihilate", level: "Extreme" }
        ],
        characterHook: "Baahubali",
        hookWhy: "Stopping the enemy army alone."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Smother",
        partOfSpeech: "Verb",
        meaning: "1. Kill by covering the nose and mouth. 2. Suppress (a feeling or action).",
        translation: "दम घोंटना / छिपाना",
        sentence: "She tried to smother her laughter in the library.",
        synonyms: ["Suffocate", "Stifle", "Muffle"],
        antonyms: ["Breathe", "Express", "Vent"],
        trick: "Mother -> An overprotective mother smothers you with too much care.",
        tone: "Negative (-)",
        collocation: "Smother a fire",
        intensitySpectrum: [
          { word: "Cover", level: "Mild" },
          { word: "Suppress", level: "Medium" },
          { word: "Smother", level: "High" },
          { word: "Asphyxiate", level: "Extreme" }
        ],
        characterHook: "Overprotective Indian Mom",
        hookWhy: "Smothers you with kisses, food, and questions."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Dolorous",
        partOfSpeech: "Adjective",
        meaning: "Feeling or expressing great sorrow or distress.",
        translation: "दर्दनाक / शोकपूर्ण",
        sentence: "She let out a dolorous cry when she heard the news.",
        synonyms: ["Mournful", "Sorrowful", "Woeful"],
        antonyms: ["Joyful", "Happy", "Cheer"],
        trick: "Dole -> To give out 'dole' (charity) to sad/poor people. Also 'Dolor' means pain.",
        tone: "Negative (-)",
        collocation: "Dolorous ballad",
        intensitySpectrum: [
          { word: "Sad", level: "Mild" },
          { word: "Mournful", level: "Medium" },
          { word: "Dolorous", level: "High" },
          { word: "Heartbroken", level: "Extreme" }
        ],
        characterHook: "Widows in old movies (White Saree)",
        hookWhy: "Singing sad songs of separation."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Maudlin",
        partOfSpeech: "Adjective",
        meaning: "Self-pityingly or tearfully sentimental, often through drunkenness.",
        translation: "भावुक (शराब के नशे में)",
        sentence: "He gets maudlin and starts talking about his ex-wife after a few drinks.",
        synonyms: ["Sentimental", "Weepy", "Mushy"],
        antonyms: ["Pragmatic", "Stoic", "Unemotional"],
        trick: "Modeling -> Models crying dramatically for attention.",
        tone: "Negative (-)",
        collocation: "Maudlin self-pity",
        intensitySpectrum: [
          { word: "Emotional", level: "Mild" },
          { word: "Sentimental", level: "Medium" },
          { word: "Maudlin", level: "High" },
          { word: "Melodramatic", level: "Extreme" }
        ],
        characterHook: "Aditya Roy Kapur (Aashiqui 2)",
        hookWhy: "Drunk, crying on stage, blaming himself."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Lugubrious",
        partOfSpeech: "Adjective",
        meaning: "Looking or sounding sad and dismal.",
        translation: "विषादपूर्ण / उदास",
        sentence: "The lugubrious music set a somber mood for the movie.",
        synonyms: ["Mournful", "Gloomy", "Dismal"],
        antonyms: ["Cheerful", "Sunny", "Optimistic"],
        trick: "Luggage -> Dragging heavy luggage makes you look sad/tired.",
        tone: "Negative (-)",
        collocation: "Lugubrious face",
        intensitySpectrum: [
          { word: "Serious", level: "Mild" },
          { word: "Gloomy", level: "Medium" },
          { word: "Lugubrious", level: "High" },
          { word: "Funereal", level: "Extreme" }
        ],
        characterHook: "Eeyore (Winnie the Pooh)",
        hookWhy: "The donkey who is always depressed."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Jovial",
        partOfSpeech: "Adjective",
        meaning: "Cheerful and friendly.",
        translation: "उल्लासपूर्ण / हंसमुख",
        sentence: "He was in a jovial mood at the party.",
        synonyms: ["Merry", "Jolly", "Convivial"],
        antonyms: ["Miserable", "Gloomy", "Morose"],
        trick: "Joy -> Full of Joy.",
        tone: "Positive (+)",
        collocation: "Jovial host",
        intensitySpectrum: [
          { word: "Happy", level: "Mild" },
          { word: "Cheerful", level: "Medium" },
          { word: "Jovial", level: "High" },
          { word: "Ecstatic", level: "Extreme" }
        ],
        characterHook: "Santa Claus / Sidhu Paaji",
        hookWhy: "Always laughing loudly 'Thoko Taali!'"
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Insouciant",
        partOfSpeech: "Adjective",
        meaning: "Showing a casual lack of concern; indifferent.",
        translation: "बेपरवाह / चिंतामुक्त",
        sentence: "She wandered into the meeting with an insouciant air.",
        synonyms: ["Nonchalant", "Unconcerned", "Carefree"],
        antonyms: ["Anxious", "Concerned", "Worried"],
        trick: "Soup -> Drinking soup slowly without a care in the world.",
        tone: "Neutral (0)",
        collocation: "Insouciant shrug",
        intensitySpectrum: [
          { word: "Relaxed", level: "Mild" },
          { word: "Unconcerned", level: "Medium" },
          { word: "Insouciant", level: "High" },
          { word: "Negligent", level: "Extreme" }
        ],
        characterHook: "Rancho (3 Idiots)",
        hookWhy: "Exams? No tension. Life? All is well."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Nonchalant",
        partOfSpeech: "Adjective",
        meaning: "(of a person or manner) feeling or appearing casually calm and relaxed.",
        translation: "बेपरवाह / उदासीन",
        sentence: "He was surprisingly nonchalant about winning the lottery.",
        synonyms: ["Calm", "Cool", "Unconcerned"],
        antonyms: ["Anxious", "Excited", "Agitated"],
        trick: "No + Challan -> No traffic fine (challan), so I am relaxed.",
        tone: "Neutral (0)",
        collocation: "Nonchalant attitude",
        intensitySpectrum: [
          { word: "Calm", level: "Mild" },
          { word: "Relaxed", level: "Medium" },
          { word: "Nonchalant", level: "High" },
          { word: "Indifferent", level: "Extreme" }
        ],
        characterHook: "James Bond / Don (SRK)",
        hookWhy: "Bullets flying, but he fixes his tie calmly."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Phlegmatic",
        partOfSpeech: "Adjective",
        meaning: "(Of a person) having an unemotional and stolidly calm disposition.",
        translation: "सुस्त / आवेगहीन",
        sentence: "The phlegmatic British character is a stereotype.",
        synonyms: ["Calm", "Stolid", "Impassive"],
        antonyms: ["Excitable", "Emotional", "Demonstrative"],
        trick: "Phlegm -> Mucus is slow and sticky; implies a slow/calm person.",
        tone: "Neutral (0)",
        collocation: "Phlegmatic temperament",
        intensitySpectrum: [
          { word: "Calm", level: "Mild" },
          { word: "Unemotional", level: "Medium" },
          { word: "Phlegmatic", level: "High" },
          { word: "Comatose", level: "Extreme" }
        ],
        characterHook: "Kumbhakarna",
        hookWhy: "Sleeps for 6 months, nothing bothers him."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Cavalier",
        partOfSpeech: "Adjective",
        meaning: "Showing a lack of proper concern; offhand.",
        translation: "अभिमानपूर्ण / लापरवाह",
        sentence: "He has a cavalier attitude towards safety regulations.",
        synonyms: ["Dismissive", "Indifferent", "Arrogant"],
        antonyms: ["Thoughtful", "Careful", "Concerned"],
        trick: "Cavalry -> A soldier on a horse looking down on others.",
        tone: "Negative (-)",
        collocation: "Cavalier dismissal",
        intensitySpectrum: [
          { word: "Casual", level: "Mild" },
          { word: "Dismissive", level: "Medium" },
          { word: "Cavalier", level: "High" },
          { word: "Scornful", level: "Extreme" }
        ],
        characterHook: "Rich Brat in Daddy's Car",
        hookWhy: "Drives rashly, doesn't care about others."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Obtrusive",
        partOfSpeech: "Adjective",
        meaning: "Noticeable or prominent in an unwelcome or intrusive way.",
        translation: "बाधा डालनेवाला / जो जबरदस्ती दिखे",
        sentence: "The waiter was attentive without being obtrusive.",
        synonyms: ["Conspicuous", "Intrusive", "Bold"],
        antonyms: ["Unobtrusive", "Subtle", "Discreet"],
        trick: "Obstruction -> Something that obstructs your view/peace.",
        tone: "Negative (-)",
        collocation: "Obtrusive behavior",
        intensitySpectrum: [
          { word: "Visible", level: "Mild" },
          { word: "Noticeable", level: "Medium" },
          { word: "Obtrusive", level: "High" },
          { word: "Blatant", level: "Extreme" }
        ],
        characterHook: "Pop-up Ads",
        hookWhy: "They jump in your face when you don't want them."
      }
    },
    {
      type: 'detailed',
      data: {
        word: "Prying",
        partOfSpeech: "Adjective",
        meaning: "Excessively interested in a person's private affairs.",
        translation: "तांक-झांक करनेवाला",
        sentence: "I hate prying neighbors who watch everything I do.",
        synonyms: ["Inquisitive", "Meddling", "Nosy"],
        antonyms: ["Discreet", "Uninterested", "Respectful"],
        trick: "Prise -> To 'prise' (force) open a box/secret.",
        tone: "Negative (-)",
        collocation: "Prying eyes",
        intensitySpectrum: [
          { word: "Curious", level: "Mild" },
          { word: "Inquisitive", level: "Medium" },
          { word: "Prying", level: "High" },
          { word: "Intrusive", level: "Extreme" }
        ],
        characterHook: "Neighbourhood Aunties",
        hookWhy: "Watching who visits your house at 10 PM."
      }
    }
  ],
  [SilsilaCategory.CONFUSING]: [
    {
      type: 'simple',
      word: "Appraise vs Apprise",
      context: "Similar Sounding",
      definition: "Appraise: To assess value/quality.\n(e.g. The bank appraised the house.)\n\nApprise: To inform or tell.\n(e.g. Please apprise me of the situation.)\n\nMemory Hook: Appraise = Praise value; Apprise = Rise and tell."
    },
    {
      type: 'simple',
      word: "Adverse vs Averse",
      context: "Spelling Trap",
      definition: "Adverse: Unfavorable/Bad.\n(e.g. Adverse weather conditions.)\n\nAverse: Reluctant/Dislike.\n(e.g. He is averse to taking risks.)\n\nMemory Hook: Adverse = Adversity (Bad luck); Averse = Against the Verse."
    },
    {
      type: 'simple',
      word: "Censure vs Censor",
      context: "Meaning Trap",
      definition: "Censure: To criticize harshly.\n(e.g. The MP was censured for bad behavior.)\n\nCensor: To suppress or cut.\n(e.g. The movie was censored before release.)\n\nMemory Hook: Censure = Sure he did wrong; Censor = Scissor (Cut)."
    },
    {
      type: 'simple',
      word: "Compliment vs Complement",
      context: "Spelling Trap",
      definition: "Compliment: Praise.\n(e.g. She received a compliment.)\n\nComplement: To complete/enhance.\n(e.g. The red tie complements his suit.)\n\nMemory Hook: Compliment = 'I' like praise; Complement = Complete."
    },
    {
      type: 'simple',
      word: "Discreet vs Discrete",
      context: "Spelling Trap",
      definition: "Discreet: Careful/Secretive.\n(e.g. We must be discreet about the merger.)\n\nDiscrete: Separate/Distinct.\n(e.g. Data is broken into discrete categories.)\n\nMemory Hook: Discrete = 'E's are separate; Discreet = 'E's are hiding together."
    },
    {
      type: 'simple',
      word: "Elicit vs Illicit",
      context: "Sound Trap",
      definition: "Elicit: To draw out info.\n(e.g. Police elicited the truth.)\n\nIllicit: Illegal.\n(e.g. Illicit trade in gold.)\n\nMemory Hook: Elicit = Exit (Bring out); Illicit = Illegal (Ill)."
    },
    {
      type: 'simple',
      word: "Eminent vs Imminent",
      context: "Spelling Trap",
      definition: "Eminent: Famous/Respected.\n(e.g. An eminent scientist.)\n\nImminent: About to happen.\n(e.g. A storm is imminent.)\n\nMemory Hook: Eminent = Eminem (Famous); Imminent = Immediate."
    },
    {
      type: 'simple',
      word: "Exalt vs Exult",
      context: "Meaning Trap",
      definition: "Exalt: To praise highly.\n(e.g. The poem exalts nature.)\n\nExult: To rejoice/celebrate.\n(e.g. The team exulted in victory.)\n\nMemory Hook: Exalt = Altitude (High praise); Exult = Result (Win)."
    },
    {
      type: 'simple',
      word: "Ingenious vs Ingenuous",
      context: "Tricky Pair",
      definition: "Ingenious: Clever/Inventive.\n(e.g. An ingenious solution.)\n\nIngenuous: Innocent/Unsuspecting.\n(e.g. An ingenuous smile.)\n\nMemory Hook: Ingenious = Genius; Ingenuous = Genuine (Innocent)."
    },
    {
      type: 'simple',
      word: "Persecute vs Prosecute",
      context: "Legal vs Personal",
      definition: "Persecute: To ill-treat/harass.\n(e.g. Minorities were persecuted.)\n\nProsecute: To take legal action.\n(e.g. Shoplifters will be prosecuted.)\n\nMemory Hook: Persecute = Personal attack; Prosecute = Pro Legal action."
    },
    {
      type: 'simple',
      word: "Prescribe vs Proscribe",
      context: "Opposites",
      definition: "Prescribe: To recommend/authorize.\n(e.g. Doctor prescribed rest.)\n\nProscribe: To forbid/ban.\n(e.g. The school proscribed cell phones.)\n\nMemory Hook: Prescribe = Pre-health; Proscribe = Prohibit."
    },
    {
      type: 'simple',
      word: "Principal vs Principle",
      context: "Classic Trap",
      definition: "Principal: Head/Main person.\n(e.g. The School Principal.)\n\nPrinciple: Rule/Truth.\n(e.g. Man of high principles.)\n\nMemory Hook: Principal = Pal (Person); Principle = Rule (ends in le)."
    },
    {
      type: 'simple',
      word: "Stationary vs Stationery",
      context: "Spelling Trap",
      definition: "Stationary: Not moving.\n(e.g. A stationary car.)\n\nStationery: Writing materials.\n(e.g. Pens and stationery.)\n\nMemory Hook: Stationary = Parked (Ary); Stationery = Letter (E)."
    },
    {
      type: 'simple',
      word: "Allude vs Elude",
      context: "Sound Trap",
      definition: "Allude: To hint indirectly.\n(e.g. He alluded to the problem.)\n\nElude: To escape.\n(e.g. The thief eluded police.)\n\nMemory Hook: Allude = Address indirectly; Elude = Escape."
    },
    {
      type: 'simple',
      word: "Emigrate vs Immigrate",
      context: "Direction Trap",
      definition: "Emigrate: To leave a country.\n(e.g. Emigrated from India.)\n\nImmigrate: To enter a country.\n(e.g. Immigrated to USA.)\n\nMemory Hook: Emigrate = Exit; Immigrate = In."
    },
    {
      type: 'simple',
      word: "Loath vs Loathe",
      context: "Spelling Trap",
      definition: "Loath: Reluctant/Unwilling.\n(e.g. I was loath to admit it.)\n\nLoathe: To hate intensely.\n(e.g. I loathe waking up early.)\n\nMemory Hook: Loath = Oath (not to do); Loathe = Hate (ends in e)."
    }
  ],
  [SilsilaCategory.TRENDING]: [
    {
      type: 'simple',
      word: "Exacerbate",
      context: "Editorial Favorite",
      definition: "To make a bad situation worse.\nUsage: 'The new tax policy will exacerbate the inflation.'"
    },
    {
      type: 'simple',
      word: "Mitigate",
      context: "Editorial Favorite",
      definition: "To make something less severe (Opposite of Exacerbate).\nUsage: 'Steps were taken to mitigate the risk.'"
    },
    {
      type: 'simple',
      word: "Stringent",
      context: "Editorial Favorite",
      definition: "Very strict (usually laws/rules).\nUsage: 'The bank applied stringent checks on loans.'"
    },
    {
      type: 'simple',
      word: "Pragmatic",
      context: "Editorial Favorite",
      definition: "Practical (not theoretical).\nUsage: 'We need a pragmatic solution, not a dream.'"
    },
    {
      type: 'simple',
      word: "Unprecedented",
      context: "Editorial Favorite",
      definition: "Never happened before.\nUsage: 'The market saw an unprecedented crash.'"
    },
    {
      type: 'simple',
      word: "Alleviate",
      context: "Editorial Favorite",
      definition: "To provide relief (pain/poverty).\nUsage: 'Schemes to alleviate poverty.'"
    }
  ],
  [SilsilaCategory.PREVIOUS_YEAR]: [
    {
      type: 'simple',
      word: "Ephemeral",
      context: "Most Repeated",
      definition: "Lasting for a very short time."
    },
    {
      type: 'simple',
      word: "Ubiquitous",
      context: "Most Repeated",
      definition: "Present everywhere (like God or Mobile phones)."
    },
    {
      type: 'simple',
      word: "Magnanimous",
      context: "Most Repeated",
      definition: "Generous or forgiving (especially towards a rival)."
    },
    {
      type: 'simple',
      word: "Laconic",
      context: "Most Repeated",
      definition: "Using very few words (Brief)."
    },
    {
      type: 'simple',
      word: "Articulate",
      context: "Most Repeated",
      definition: "Able to speak clearly and effectively."
    },
    {
      type: 'simple',
      word: "Bolster",
      context: "Most Repeated",
      definition: "To support or strengthen. (e.g., 'Bolster the economy')."
    }
  ],
  [SilsilaCategory.IDIOMS]: [
    {
      type: 'simple',
      word: "Bite the Bullet",
      context: "Common Idiom",
      definition: "To force yourself to do something difficult or unpleasant that you have been avoiding.\nUsage: 'I hate going to the dentist, but I'll just have to bite the bullet.'"
    },
    {
      type: 'simple',
      word: "Devil's Advocate",
      context: "Common Idiom",
      definition: "To pretend to disagree with someone in order to have a good discussion about something.\nUsage: 'I don't really disagree, I'm just playing devil's advocate.'"
    },
    {
      type: 'simple',
      word: "Miss the Boat",
      context: "Common Idiom",
      definition: "To be too slow to take an opportunity.\nUsage: 'There were tickets available last week, but you missed the boat.'"
    },
    {
      type: 'simple',
      word: "The Best of Both Worlds",
      context: "Common Idiom",
      definition: "A situation in which you can enjoy the advantages of two very different things at the same time.\nUsage: 'Working from home is the best of both worlds.'"
    },
    {
      type: 'simple',
      word: "Sit on the Fence",
      context: "Common Idiom",
      definition: "To delay making a decision.\nUsage: 'You can't sit on the fence forever; you need to choose a side.'"
    },
    {
      type: 'simple',
      word: "Blessing in Disguise",
      context: "Common Idiom",
      definition: "Something that seems bad or unlucky at first, but results in something good happening later.\nUsage: 'Losing that job was a blessing in disguise.'"
    },
    {
      type: 'simple',
      word: "Once in a Blue Moon",
      context: "Common Idiom",
      definition: "Happening very rarely.\nUsage: 'I visit my hometown once in a blue moon.'"
    },
    {
      type: 'simple',
      word: "Beat Around the Bush",
      context: "Common Idiom",
      definition: "Avoiding the main topic; not speaking directly about the issue.\nUsage: 'Stop beating around the bush and tell me what happened.'"
    },
    {
      type: 'simple',
      word: "Red Herring",
      context: "Common Idiom",
      definition: "Something that distracts attention from the real issue.\nUsage: 'The clues were just a red herring to keep us from finding the real culprit.'"
    },
    {
      type: 'simple',
      word: "Silver Lining",
      context: "Common Idiom",
      definition: "A positive aspect in an otherwise negative situation.\nUsage: 'The silver lining of losing my job was that I finally started my own business.'"
    },
    {
      type: 'simple',
      word: "Flesh Out",
      context: "Common Idiom",
      definition: "To add more details or develop.\nUsage: 'You need to flesh out your essay with more examples.'"
    },
    {
      type: 'simple',
      word: "Play Out",
      context: "Common Idiom",
      definition: "To unfold over time.\nUsage: 'We have to wait and see how the situation plays out.'"
    },
    {
      type: 'simple',
      word: "Acid Test",
      context: "Common Idiom",
      definition: "A decisive test that proves true worth or quality.\nUsage: 'The next match will be the acid test for the new team.'"
    },
    {
      type: 'simple',
      word: "Wind Down",
      context: "Common Idiom",
      definition: "Bring something to an end or relax.\nUsage: 'The party began to wind down around midnight.'"
    },
    {
      type: 'simple',
      word: "Draw a Line in the Sand",
      context: "Common Idiom",
      definition: "Limit beyond which no compromise is possible.\nUsage: 'The manager drew a line in the sand regarding budget cuts.'"
    },
    {
      type: 'simple',
      word: "In the Offing",
      context: "Common Idiom",
      definition: "Likely to happen soon.\nUsage: 'Major changes are in the offing for the company.'"
    },
    {
      type: 'simple',
      word: "At the Helm of",
      context: "Common Idiom",
      definition: "In charge of.\nUsage: 'With the new CEO at the helm of the company, profits are rising.'"
    },
    {
      type: 'simple',
      word: "By Leaps and Bounds",
      context: "Common Idiom",
      definition: "Very rapidly or quickly.\nUsage: 'Her English is improving by leaps and bounds.'"
    },
    {
      type: 'simple',
      word: "On the Back of",
      context: "Common Idiom",
      definition: "Because of, as a direct result of.\nUsage: 'Profits rose on the back of strong sales in Asia.'"
    },
    {
      type: 'simple',
      word: "The Writing on the Wall",
      context: "Common Idiom",
      definition: "Clear signs that something bad is going to happen.\nUsage: 'He saw the writing on the wall and resigned before he was fired.'"
    },
    {
      type: 'simple',
      word: "Edge Out",
      context: "Common Idiom",
      definition: "To defeat or surpass someone by a small margin.\nUsage: 'She edged out her rival for the gold medal.'"
    },
    {
      type: 'simple',
      word: "Throw Cold Water On",
      context: "Common Idiom",
      definition: "To discourage or dampen enthusiasm.\nUsage: 'He threw cold water on my plans to travel Europe.'"
    },
    {
      type: 'simple',
      word: "Hold One's Feet to the Fire",
      context: "Common Idiom",
      definition: "To put strong pressure on someone to act or explain.\nUsage: 'The reporters held the politician feet to the fire regarding the scandal.'"
    },
    {
      type: 'simple',
      word: "Bear Out",
      context: "Common Idiom",
      definition: "To confirm or support a claim.\nUsage: 'The evidence bears out his testimony.'"
    },
    {
      type: 'simple',
      word: "Zero Out",
      context: "Common Idiom",
      definition: "To reduce something to nothing.\nUsage: 'We need to zero out our debt by next year.'"
    },
    {
      type: 'simple',
      word: "At Loggerheads",
      context: "Common Idiom",
      definition: "In strong disagreement.\nUsage: 'The management and the union have been at loggerheads for weeks.'"
    },
    {
      type: 'simple',
      word: "Carry the Day",
      context: "Common Idiom",
      definition: "To win support or succeed after debate or struggle.\nUsage: 'Despite strong opposition, his proposal carried the day.'"
    },
    {
      type: 'simple',
      word: "Keep One's Powder Dry",
      context: "Common Idiom",
      definition: "To remain cautious and prepared for the future.\nUsage: 'We should invest some now, but keep our powder dry for better opportunities.'"
    },
    {
      type: 'simple',
      word: "Hammer Out",
      context: "Common Idiom",
      definition: "To negotiate and finalize after discussion.\nUsage: 'They managed to hammer out a deal by midnight.'"
    },
    {
      type: 'simple',
      word: "Call Someone's Bluff",
      context: "Common Idiom",
      definition: "To challenge a threat or claim believed to be empty.\nUsage: 'He threatened to quit, so I called his bluff and accepted his resignation.'"
    },
    {
      type: 'simple',
      word: "Sour the Mood",
      context: "Common Idiom",
      definition: "To spoil the atmosphere.\nUsage: 'His rude comment soured the mood of the party.'"
    }
  ],
  [SilsilaCategory.ROOT_WORDS]: [
    {
      type: 'root',
      root: "Anim",
      meaning: "Life / Spirit / Mind",
      examples: ["Animal", "Animated", "Unanimous", "Animosity", "Equanimity"],
      trick: "Animation -> Bringing drawings to 'life'."
    },
    {
      type: 'root',
      root: "Culp",
      meaning: "Blame / Fault",
      examples: ["Culprit", "Culpable", "Exculpate", "Mea Culpa"],
      trick: "Culprit -> The person who is to 'blame'."
    },
    {
      type: 'root',
      root: "Doc / Doct",
      meaning: "Teach",
      examples: ["Doctor", "Doctrine", "Docile", "Document"],
      trick: "Document -> A paper that 'teaches' or proves something."
    },
    {
      type: 'root',
      root: "Err",
      meaning: "Wander / Mistake",
      examples: ["Error", "Erratic", "Aberration", "Erroneous"],
      trick: "Error -> A 'mistake' made by wandering off the right path."
    },
    {
      type: 'root',
      root: "Flu / Flux",
      meaning: "Flow",
      examples: ["Fluid", "Fluent", "Influx", "Superfluous", "Confluence"],
      trick: "Flu -> When you have the flu, your nose 'flows'."
    },
    {
      type: 'root',
      root: "Gen",
      meaning: "Birth / Race / Kind",
      examples: ["Generation", "Genesis", "Genocide", "Progeny", "Congenital"],
      trick: "Gene -> Your genes determine your 'birth' and characteristics."
    },
    {
      type: 'root',
      root: "Ject",
      meaning: "Throw",
      examples: ["Eject", "Reject", "Inject", "Conjecture", "Projectile"],
      trick: "Eject -> To 'throw' something out."
    },
    {
      type: 'root',
      root: "Jur / Jus",
      meaning: "Law / Right",
      examples: ["Jury", "Justice", "Perjury", "Jurisdiction"],
      trick: "Jury -> A group sworn to uphold the 'law'."
    },
    {
      type: 'root',
      root: "Mis / Mit",
      meaning: "Send",
      examples: ["Mission", "Transmit", "Remit", "Dismiss", "Missile"],
      trick: "Missile -> A weapon 'sent' to a target."
    },
    {
      type: 'root',
      root: "Mut",
      meaning: "Change",
      examples: ["Mutation", "Commute", "Immutable", "Transmute"],
      trick: "Mutant -> Someone whose DNA has 'changed'."
    },
    {
      type: 'root',
      root: "Nov",
      meaning: "New",
      examples: ["Novel", "Innovate", "Novice", "Renovate"],
      trick: "Renovate -> To make a house look 'new' again."
    },
    {
      type: 'root',
      root: "Port",
      meaning: "Carry",
      examples: ["Portable", "Export", "Transport", "Deport", "Porter"],
      trick: "Porter -> A person who 'carries' luggage at the station."
    },
    {
      type: 'root',
      root: "Rupt",
      meaning: "Break / Burst",
      examples: ["Eruption", "Interrupt", "Bankrupt", "Corrupt", "Rupture"],
      trick: "Rip -> To 'break' or tear something apart."
    },
    {
      type: 'root',
      root: "Sci",
      meaning: "Know",
      examples: ["Science", "Conscience", "Omniscient", "Prescient"],
      trick: "Science -> The systematic study to 'know' the world."
    },
    {
      type: 'root',
      root: "Scrib / Script",
      meaning: "Write",
      examples: ["Scripture", "Describe", "Manuscript", "Inscribe", "Scribble"],
      trick: "Scribble -> To 'write' carelessly."
    },
    {
      type: 'root',
      root: "Sol",
      meaning: "Alone",
      examples: ["Solo", "Solitary", "Desolate", "Soliloquy"],
      trick: "Solo -> Performing 'alone'."
    },
    {
      type: 'root',
      root: "Tact / Tang",
      meaning: "Touch",
      examples: ["Contact", "Tactile", "Tangible", "Intact", "Contagious"],
      trick: "Contact -> To be in 'touch' with someone."
    },
    {
      type: 'root',
      root: "Ten / Tin / Tain",
      meaning: "Hold",
      examples: ["Contain", "Retain", "Tenacious", "Tenure", "Sustain"],
      trick: "Container -> An object that 'holds' things."
    },
    {
      type: 'root',
      root: "Vid / Vis",
      meaning: "See",
      examples: ["Video", "Vision", "Invisible", "Evident", "Supervise"],
      trick: "Visual -> Something related to 'seeing'."
    },
    {
      type: 'root',
      root: "Viv / Vit",
      meaning: "Life",
      examples: ["Vivid", "Vital", "Revive", "Vivacious", "Vitamin"],
      trick: "Vitamin -> Essential nutrients for 'life'."
    },
    {
      type: 'root',
      root: "Spect",
      meaning: "Look / See",
      examples: ["Spectator", "Inspect", "Spectacle", "Retrospect"],
      trick: "Spectacles -> You need specs to 'see' clearly."
    },
    {
      type: 'root',
      root: "Voc / Vok",
      meaning: "Voice / Call",
      examples: ["Vocal", "Provoke", "Advocate", "Evoke"],
      trick: "Vocal -> Using your voice loudly."
    },
    {
      type: 'root',
      root: "Vert / Vers",
      meaning: "Turn",
      examples: ["Introvert", "Convert", "Revert", "Controversy"],
      trick: "Reverse -> To 'turn' the car back."
    },
    {
      type: 'root',
      root: "Dict",
      meaning: "Speak / Say",
      examples: ["Dictator", "Verdict", "Predict", "Contradict"],
      trick: "Dictionary -> A book full of 'words/sayings'."
    },
    {
      type: 'root',
      root: "Gress / Grad",
      meaning: "Step / Go",
      examples: ["Progress", "Aggressive", "Graduate", "Digress"],
      trick: "Grade -> You go a 'step' up when you pass a grade."
    },
    {
      type: 'root',
      root: "Duc / Duct",
      meaning: "Lead / Pull",
      examples: ["Conduct", "Educate", "Induct", "Abduct"],
      trick: "Conductor -> The person who 'leads' the bus passengers."
    },
    {
      type: 'root',
      root: "Tract",
      meaning: "Pull / Drag",
      examples: ["Tractor", "Attract", "Distract", "Contract"],
      trick: "Tractor -> A vehicle used to 'pull' heavy loads."
    },
    {
      type: 'root',
      root: "Omni",
      meaning: "All",
      examples: ["Omnipresent", "Omnipotent", "Omnivore"],
      trick: "Omni Van -> The van that fits 'ALL' the family members."
    },
    {
      type: 'root',
      root: "Mort",
      meaning: "Death",
      examples: ["Mortal", "Immortal", "Mortuary", "Postmortem"],
      trick: "Mortein -> The spray that causes 'death' to mosquitoes."
    },
    {
      type: 'root',
      root: "Phil",
      meaning: "Love",
      examples: ["Philanthropy", "Philosophy", "Bibliophile"],
      trick: "Feel -> Love is a 'feeling'."
    },
    {
      type: 'root',
      root: "Somn",
      meaning: "Sleep",
      examples: ["Insomnia", "Somnambulist", "Somnolent"],
      trick: "Sound -> Sleeping 'soundly'."
    },
    {
      type: 'root',
      root: "Luc / Lum",
      meaning: "Light",
      examples: ["Lucid", "Illuminate", "Translucent", "Luminary"],
      trick: "Luminous -> Giving off light (like a battery/bulb)."
    },
    {
      type: 'root',
      root: "Derm",
      meaning: "Skin",
      examples: ["Dermatologist", "Epidermis", "Pachyderm"],
      trick: "Dermi Cool -> Powder for the 'skin'."
    },
    {
      type: 'root',
      root: "Crat / Cracy",
      meaning: "Rule / Power",
      examples: ["Democracy", "Bureaucrat", "Aristocrat", "Autocracy"],
      trick: "Create -> Those who 'create' the rules."
    },
    {
      type: 'root',
      root: "Theo",
      meaning: "God",
      examples: ["Theist", "Atheist", "Theology", "Monotheism"],
      trick: "The -> The God."
    }
  ]
};
