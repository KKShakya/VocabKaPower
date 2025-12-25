
import { WordAnalysis } from "../types";

export const STATIC_NOTEBOOK_DATA: WordAnalysis[] = [
  {
    word: "Elation",
    partOfSpeech: "Noun",
    meaning: "Great happiness and exhilaration.",
    translation: "उत्साह / परम आनंद",
    sentence: "His elation was visible when he saw his exam results.",
    synonyms: ["Euphoria", "Ecstasy", "Delight"],
    antonyms: ["Despair", "Misery", "Sorrow"],
    trick: "Election -> Winning an election brings elation.",
    tone: "Positive (+)",
    collocation: "Sheer Elation",
    intensitySpectrum: [
      { word: "Happiness", level: "Mild" },
      { word: "Delight", level: "Medium" },
      { word: "Elation", level: "High" },
      { word: "Euphoria", level: "Extreme" }
    ]
  },
  {
    word: "Felicity",
    partOfSpeech: "Noun",
    meaning: "Intense happiness; also, the ability to find appropriate expression.",
    translation: "परम सुख / सौभाग्य",
    sentence: "Domestic felicity is essential for a happy life.",
    synonyms: ["Bliss", "Happiness", "Aptness"],
    antonyms: ["Unhappiness", "Misery", "Inappropriateness"],
    trick: "Fell in City -> If you fell in love in a city, you found felicity.",
    tone: "Positive (+)",
    collocation: "Domestic Felicity",
    intensitySpectrum: [
      { word: "Contentment", level: "Mild" },
      { word: "Happiness", level: "Medium" },
      { word: "Felicity", level: "High" },
      { word: "Bliss", level: "Extreme" }
    ]
  },
  {
    word: "Majestic",
    partOfSpeech: "Adjective",
    meaning: "Having or showing impressive beauty or dignity.",
    translation: "आलिशान / राजसी",
    sentence: "The majestic Himalayas are a sight to behold.",
    synonyms: ["Grand", "Magnificent", "Imperial"],
    antonyms: ["Modest", "Humble", "Shabby"],
    trick: "Magic -> Kings use magic to look majestic.",
    tone: "Positive (+)",
    collocation: "Majestic View",
    intensitySpectrum: [
      { word: "Nice", level: "Mild" },
      { word: "Impressive", level: "Medium" },
      { word: "Grand", level: "High" },
      { word: "Majestic", level: "Extreme" }
    ]
  },
  {
    word: "Euphoric",
    partOfSpeech: "Adjective",
    meaning: "Feeling intense excitement and happiness.",
    translation: "उत्साहपूर्ण",
    sentence: "The crowd was euphoric after the winning goal.",
    synonyms: ["Elated", "Ecstatic", "Joyful"],
    antonyms: ["Miserable", "Depressed", "Downcast"],
    trick: "U + For + Ic -> You are for Ice cream (makes you happy).",
    tone: "Positive (+)",
    collocation: "Euphoric Mood",
    intensitySpectrum: [
      { word: "Happy", level: "Mild" },
      { word: "Excited", level: "Medium" },
      { word: "Euphoric", level: "High" },
      { word: "Ecstatic", level: "Extreme" }
    ]
  },
  {
    word: "Rapturous",
    partOfSpeech: "Adjective",
    meaning: "Characterized by feeling or expressing great pleasure or enthusiasm.",
    translation: "भावविभोर / मंत्रमुग्ध",
    sentence: "The singer received a rapturous welcome from the fans.",
    synonyms: ["Ecstatic", "Enthusiastic", "Delighted"],
    antonyms: ["Bored", "Uninterested", "Apathetic"],
    trick: "Rap -> Good Rap music makes the crowd rapturous.",
    tone: "Positive (+)",
    collocation: "Rapturous Applause",
    intensitySpectrum: [
      { word: "Pleased", level: "Mild" },
      { word: "Delighted", level: "Medium" },
      { word: "Rapturous", level: "High" },
      { word: "Ecstatic", level: "Extreme" }
    ]
  },
  {
    word: "Salubrious",
    partOfSpeech: "Adjective",
    meaning: "Health-giving; healthy; pleasant; not run-down.",
    translation: "स्वास्थ्यप्रद",
    sentence: "The hill station has a salubrious climate.",
    synonyms: ["Healthy", "Beneficial", "Wholesome"],
    antonyms: ["Unhealthy", "Insalubrious", "Harmful"],
    trick: "Salu (Salman) + Brio -> Salu bhai is very healthy/fit.",
    tone: "Positive (+)",
    collocation: "Salubrious Climate"
  },
  {
    word: "Propitious",
    partOfSpeech: "Adjective",
    meaning: "Giving or indicating a good chance of success; favorable.",
    translation: "अनुकूल / शुभ",
    sentence: "It was a propitious time to start a new business.",
    synonyms: ["Favorable", "Auspicious", "Promising"],
    antonyms: ["Unfavorable", "Inauspicious", "Unlucky"],
    trick: "Proper + Profit -> A time that is proper for profit.",
    tone: "Positive (+)",
    collocation: "Propitious Moment"
  },
  {
    word: "Serene",
    partOfSpeech: "Adjective",
    meaning: "Calm, peaceful, and untroubled; tranquil.",
    translation: "निर्मल / शांत",
    sentence: "Her face remained serene despite the chaos around her.",
    synonyms: ["Calm", "Peaceful", "Placid"],
    antonyms: ["Agitated", "Turbulent", "Anxious"],
    trick: "Siren -> When the ambulance siren stops, it becomes serene.",
    tone: "Positive (+)",
    collocation: "Serene Smile",
    intensitySpectrum: [
      { word: "Quiet", level: "Mild" },
      { word: "Calm", level: "Medium" },
      { word: "Serene", level: "High" },
      { word: "Tranquil", level: "Extreme" }
    ]
  },
  {
    word: "Halcyon",
    partOfSpeech: "Adjective",
    meaning: "Denoting a period of time in the past that was idyllically happy and peaceful.",
    translation: "शांत / खुशहाल",
    sentence: "He recalled the halcyon days of his childhood.",
    synonyms: ["Peaceful", "Golden", "Prosperous"],
    antonyms: ["Stormy", "Turbulent", "Troubled"],
    trick: "Hall + Cyan -> A hall painted cyan (blue) feels peaceful.",
    tone: "Positive (+)",
    collocation: "Halcyon Days",
    intensitySpectrum: [
      { word: "Pleasant", level: "Mild" },
      { word: "Happy", level: "Medium" },
      { word: "Halcyon", level: "High" },
      { word: "Idyllic", level: "Extreme" }
    ]
  },
  {
    word: "Winsome",
    partOfSpeech: "Adjective",
    meaning: "Attractive or appealing in appearance or character.",
    translation: "मनोहर / आकर्षक",
    sentence: "She has a winsome smile that wins everyone's heart.",
    synonyms: ["Charming", "Engaging", "Appealing"],
    antonyms: ["Repulsive", "Unattractive", "Loathsome"],
    trick: "Win + Some -> You can win some hearts if you are winsome.",
    tone: "Positive (+)",
    collocation: "Winsome Smile"
  },
  {
    word: "Stoic",
    partOfSpeech: "Adjective",
    meaning: "Enduring pain and hardship without showing one's feelings or complaining.",
    translation: "भावहीन / उदासीन",
    sentence: "He remained stoic even after losing his job.",
    synonyms: ["Impassive", "Resigned", "Long-suffering"],
    antonyms: ["Emotional", "Passionate", "Complaining"],
    trick: "Stone -> Be like a stone; no feelings.",
    tone: "Neutral (0)",
    collocation: "Stoic Silence",
    intensitySpectrum: [
      { word: "Reserved", level: "Mild" },
      { word: "Unemotional", level: "Medium" },
      { word: "Stoic", level: "High" },
      { word: "Impassive", level: "Extreme" }
    ]
  },
  {
    word: "Impassive",
    partOfSpeech: "Adjective",
    meaning: "Not feeling or showing emotion.",
    translation: "आवेगहीन",
    sentence: "The judge kept an impassive face throughout the trial.",
    synonyms: ["Expressionless", "Poker-faced", "Stoic"],
    antonyms: ["Expressive", "Emotional", "Demonstrative"],
    trick: "I'm Passive -> I am not active with emotions; I am passive.",
    tone: "Neutral (0)",
    collocation: "Impassive Face",
    intensitySpectrum: [
      { word: "Blank", level: "Mild" },
      { word: "Expressionless", level: "Medium" },
      { word: "Impassive", level: "High" },
      { word: "Catatonic", level: "Extreme" }
    ]
  },
  {
    word: "Harrowing",
    partOfSpeech: "Adjective",
    meaning: "Acutely distressing.",
    translation: "खौफनाक / दिल दहलाने वाला",
    sentence: "The passengers told harrowing tales of the crash.",
    synonyms: ["Distressing", "Traumatic", "Agonizing"],
    antonyms: ["Calming", "Soothing", "Pleasant"],
    trick: "Arrow -> Getting hit by an arrow is a harrowing experience.",
    tone: "Negative (-)",
    collocation: "Harrowing Experience",
    intensitySpectrum: [
      { word: "Upsetting", level: "Mild" },
      { word: "Distressing", level: "Medium" },
      { word: "Harrowing", level: "High" },
      { word: "Traumatic", level: "Extreme" }
    ]
  },
  {
    word: "Sullen",
    partOfSpeech: "Adjective",
    meaning: "Bad-tempered and sulky; gloomy.",
    translation: "उदास / रूठा हुआ",
    sentence: "The sullen teenager refused to come out of his room.",
    synonyms: ["Morose", "Sulky", "Gloomy"],
    antonyms: ["Cheerful", "Sociable", "Friendly"],
    trick: "Swollen -> When you cry, your face gets swollen and you look sullen.",
    tone: "Negative (-)",
    collocation: "Sullen Silence",
    intensitySpectrum: [
      { word: "Upset", level: "Mild" },
      { word: "Sulky", level: "Medium" },
      { word: "Sullen", level: "High" },
      { word: "Morose", level: "Extreme" }
    ]
  },
  {
    word: "Trepidation",
    partOfSpeech: "Noun",
    meaning: "A feeling of fear or agitation about something that may happen.",
    translation: "घबराहट / थरथराहट",
    sentence: "He opened the letter with some trepidation.",
    synonyms: ["Apprehension", "Dread", "Anxiety"],
    antonyms: ["Composure", "Calm", "Confidence"],
    trick: "Trap -> Fear of getting caught in a trap.",
    tone: "Negative (-)",
    collocation: "With Trepidation",
    intensitySpectrum: [
      { word: "Nervousness", level: "Mild" },
      { word: "Anxiety", level: "Medium" },
      { word: "Trepidation", level: "High" },
      { word: "Terror", level: "Extreme" }
    ]
  },
  {
    word: "Dejected",
    partOfSpeech: "Adjective",
    meaning: "Sad and depressed; dispirited.",
    translation: "उदास / निराश",
    sentence: "The players looked dejected after losing the final match.",
    synonyms: ["Downcast", "Despondent", "Gloomy"],
    antonyms: ["Cheerful", "Happy", "Elated"],
    trick: "Rejected -> If you get rejected, you feel dejected.",
    tone: "Negative (-)",
    collocation: "Dejected Look",
    intensitySpectrum: [
      { word: "Sad", level: "Mild" },
      { word: "Disappointed", level: "Medium" },
      { word: "Dejected", level: "High" },
      { word: "Despondent", level: "Extreme" }
    ]
  },
  {
    word: "Forlorn",
    partOfSpeech: "Adjective",
    meaning: "Pitifully sad and abandoned or lonely.",
    translation: "लाचार / अनाथ",
    sentence: "The lost puppy looked forlorn sitting in the rain.",
    synonyms: ["Unhappy", "Sad", "Miserable"],
    antonyms: ["Happy", "Cheerful", "Cared for"],
    trick: "For + Loan -> If you ask for a loan and get no money, you feel forlorn.",
    tone: "Negative (-)",
    collocation: "Forlorn Hope",
    intensitySpectrum: [
      { word: "Lonely", level: "Mild" },
      { word: "Sad", level: "Medium" },
      { word: "Forlorn", level: "High" },
      { word: "Desolate", level: "Extreme" }
    ]
  },
  {
    word: "Wretched",
    partOfSpeech: "Adjective",
    meaning: "In a very unhappy or unfortunate state; of poor quality.",
    translation: "मनहूस / दयनीय",
    sentence: "The refugees were living in wretched conditions.",
    synonyms: ["Miserable", "Pitiable", "Abject"],
    antonyms: ["Comfortable", "Fortunate", "Excellent"],
    trick: "Retch -> Feeling so bad/sick that you want to retch (vomit).",
    tone: "Negative (-)",
    collocation: "Wretched Life",
    intensitySpectrum: [
      { word: "Uncomfortable", level: "Mild" },
      { word: "Miserable", level: "Medium" },
      { word: "Wretched", level: "High" },
      { word: "Abject", level: "Extreme" }
    ]
  },
  {
    word: "Callous",
    partOfSpeech: "Adjective",
    meaning: "Showing or having an insensitive and cruel disregard for others.",
    translation: "कठोर / संवेदनहीन",
    sentence: "His callous remark about the accident shocked everyone.",
    synonyms: ["Heartless", "Unfeeling", "Cold"],
    antonyms: ["Compassionate", "Sensitive", "Kind"],
    trick: "Call + Us -> He never calls us; he is callous (doesn't care).",
    tone: "Negative (-)",
    collocation: "Callous Attitude",
    intensitySpectrum: [
      { word: "Indifferent", level: "Mild" },
      { word: "Insensitive", level: "Medium" },
      { word: "Callous", level: "High" },
      { word: "Heartless", level: "Extreme" }
    ]
  },
  {
    word: "Rancid",
    partOfSpeech: "Adjective",
    meaning: "(Of foods containing fat or oil) smelling or tasting unpleasant as a result of being old and stale.",
    translation: "बासी / बदबूदार",
    sentence: "The butter had gone rancid after being left out in the sun.",
    synonyms: ["Sour", "Stale", "Rotten"],
    antonyms: ["Fresh", "Sweet", "Perfumed"],
    trick: "Rain + Acid -> Smells bad like acid rain.",
    tone: "Negative (-)",
    collocation: "Rancid Butter",
    intensitySpectrum: [
      { word: "Stale", level: "Mild" },
      { word: "Off", level: "Medium" },
      { word: "Rancid", level: "High" },
      { word: "Putrid", level: "Extreme" }
    ]
  },
  {
    word: "Melancholy",
    partOfSpeech: "Noun/Adj",
    meaning: "A feeling of pensive sadness, typically with no obvious cause.",
    translation: "उदासी / विषाद",
    sentence: "The gloomy weather filled him with melancholy.",
    synonyms: ["Sadness", "Sorrow", "Desolation"],
    antonyms: ["Happiness", "Cheerfulness", "Joy"],
    trick: "Melon + Colic -> Eating a bad melon gives you colic pain -> makes you sad.",
    tone: "Negative (-)",
    collocation: "Deep Melancholy",
    intensitySpectrum: [
      { word: "Sadness", level: "Mild" },
      { word: "Gloom", level: "Medium" },
      { word: "Melancholy", level: "High" },
      { word: "Despair", level: "Extreme" }
    ]
  },
  {
    word: "Ire",
    partOfSpeech: "Noun",
    meaning: "Anger.",
    translation: "क्रोध",
    sentence: "The manager faced the ire of the dissatisfied customers.",
    synonyms: ["Anger", "Rage", "Fury"],
    antonyms: ["Calmness", "Peace", "Pleasure"],
    trick: "Fire -> Ire sounds like Fire; burning with anger.",
    tone: "Negative (-)",
    collocation: "Draw the Ire",
    intensitySpectrum: [
      { word: "Annoyance", level: "Mild" },
      { word: "Anger", level: "Medium" },
      { word: "Ire", level: "High" },
      { word: "Fury", level: "Extreme" }
    ]
  },
  {
    word: "Flustered",
    partOfSpeech: "Adjective",
    meaning: "Agitated or confused, especially from being rushed.",
    translation: "घबराया हुआ",
    sentence: "He became flustered when he forgot his lines on stage.",
    synonyms: ["Agitated", "Unsettled", "Unnerved"],
    antonyms: ["Calm", "Composed", "Cool"],
    trick: "Flush -> Blood rushes to face (flush) when you are nervous/flustered.",
    tone: "Negative (-)",
    collocation: "Visibly Flustered",
    intensitySpectrum: [
      { word: "Unsettled", level: "Mild" },
      { word: "Confused", level: "Medium" },
      { word: "Flustered", level: "High" },
      { word: "Panicked", level: "Extreme" }
    ]
  },
  {
    word: "Envy",
    partOfSpeech: "Noun",
    meaning: "A feeling of discontented or resentful longing aroused by someone else's possessions, qualities, or luck.",
    translation: "ईर्ष्या",
    sentence: "He watched with envy as his friend drove away in a new car.",
    synonyms: ["Jealousy", "Covetousness", "Resentment"],
    antonyms: ["Goodwill", "Kindness", "Contentment"],
    trick: "Enemy -> You often feel envy towards an enemy's success.",
    tone: "Negative (-)",
    collocation: "Green with Envy",
    intensitySpectrum: [
      { word: "Longing", level: "Mild" },
      { word: "Jealousy", level: "Medium" },
      { word: "Envy", level: "High" },
      { word: "Resentment", level: "Extreme" }
    ]
  },
  {
    word: "Cheerful",
    partOfSpeech: "Adjective",
    meaning: "Light-hearted happiness, often in casual celebrations.",
    translation: "हंसमुख / आनंदित",
    sentence: "The cheerful music made everyone want to dance at the party.",
    synonyms: ["Joyful", "Buoyant", "Sunny"],
    antonyms: ["Gloomy", "Depressed", "Sullen"],
    trick: "Cheers! -> In a party, saying 'Cheers' makes everyone cheerful.",
    tone: "Positive (+)",
    collocation: "Cheerful Disposition",
    intensitySpectrum: [
      { word: "Glad", level: "Mild" },
      { word: "Cheerful", level: "Medium" },
      { word: "Joyful", level: "High" },
      { word: "Jubilant", level: "Extreme" }
    ]
  },
  {
    word: "Jubilant",
    partOfSpeech: "Adjective",
    meaning: "Extreme happiness following a victory or success.",
    translation: "उल्लसित / विजयोल्लास",
    sentence: "The fans were jubilant after their team won the World Cup.",
    synonyms: ["Triumphant", "Ecstatic", "Overjoyed"],
    antonyms: ["Despondent", "Defeated", "Sorrowful"],
    trick: "Jubilee -> Silver/Golden Jubilee celebrations make people jubilant.",
    tone: "Positive (+)",
    collocation: "Jubilant Mood",
    intensitySpectrum: [
      { word: "Happy", level: "Mild" },
      { word: "Thrilled", level: "Medium" },
      { word: "Jubilant", level: "High" },
      { word: "Triumphant", level: "Extreme" }
    ]
  },
  {
    word: "Delighted",
    partOfSpeech: "Adjective",
    meaning: "Feeling pleased or satisfied, often momentarily.",
    translation: "प्रसन्न",
    sentence: "She was delighted to receive the invitation to the gala.",
    synonyms: ["Thrilled", "Captivated", "Enchanted"],
    antonyms: ["Disappointed", "Dismayed"],
    trick: "De-Light -> When the light comes back after a power cut, we feel delighted.",
    tone: "Positive (+)",
    collocation: "Absolutely Delighted",
    intensitySpectrum: [
      { word: "Pleased", level: "Mild" },
      { word: "Happy", level: "Medium" },
      { word: "Delighted", level: "High" },
      { word: "Thrilled", level: "Extreme" }
    ]
  },
  {
    word: "Tranquil",
    partOfSpeech: "Adjective",
    meaning: "Calm and peaceful state, often long-lasting.",
    translation: "शांत",
    sentence: "The tranquil lake reflected the mountains perfectly.",
    synonyms: ["Serene", "Placid", "Calm", "Peaceful"],
    antonyms: ["Turbulent", "Chaotic", "Agitated"],
    trick: "Train + Quill -> Writing with a quill on a quiet train is a tranquil experience.",
    tone: "Positive (+)",
    collocation: "Tranquil Lake",
    intensitySpectrum: [
      { word: "Quiet", level: "Mild" },
      { word: "Calm", level: "Medium" },
      { word: "Tranquil", level: "High" },
      { word: "Serene", level: "Extreme" }
    ]
  },
  {
    word: "Sanguine",
    partOfSpeech: "Adjective",
    meaning: "Optimistic, hopeful attitude despite difficulties.",
    translation: "आशावादी",
    sentence: "He remained sanguine about the company's recovery despite the losses.",
    synonyms: ["Optimistic", "Buoyant", "Hopeful"],
    antonyms: ["Pessimistic", "Gloomy", "Cynical"],
    trick: "Sang + Win -> He sang because he was sure he would win (optimistic).",
    tone: "Positive (+)",
    collocation: "Sanguine Attitude",
    intensitySpectrum: [
      { word: "Hopeful", level: "Mild" },
      { word: "Optimistic", level: "Medium" },
      { word: "Sanguine", level: "High" },
      { word: "Confident", level: "Extreme" }
    ]
  },
  {
    word: "Beatific",
    partOfSpeech: "Adjective",
    meaning: "Spiritual joy and bliss.",
    translation: "परम सुखी / दिव्य",
    sentence: "The monk had a beatific smile on his face while meditating.",
    synonyms: ["Blissful", "Saintly", "Angelic"],
    antonyms: ["Demonic", "Miserable", "Wretched"],
    trick: "Beautiful + Terrific -> Divine happiness is beautiful and terrific.",
    tone: "Positive (+)",
    collocation: "Beatific Smile",
    intensitySpectrum: [
      { word: "Happy", level: "Mild" },
      { word: "Serene", level: "Medium" },
      { word: "Beatific", level: "High" },
      { word: "Divine", level: "Extreme" }
    ]
  },
  {
    word: "Exuberant",
    partOfSpeech: "Adjective",
    meaning: "Energetic and enthusiastic happiness.",
    translation: "ऊर्जावान / प्रफुल्लित",
    sentence: "The exuberant crowd cheered loudly for the rock star.",
    synonyms: ["Ebullient", "Spirited", "Energetic"],
    antonyms: ["Lethargic", "Apathetic", "Listless"],
    trick: "Ex + Uber -> You need extra energy to drive an Uber all day.",
    tone: "Positive (+)",
    collocation: "Exuberant Personality",
    intensitySpectrum: [
      { word: "Lively", level: "Mild" },
      { word: "Energetic", level: "Medium" },
      { word: "Exuberant", level: "High" },
      { word: "Manic", level: "Extreme" }
    ]
  },
  {
    word: "Mellifluous",
    partOfSpeech: "Adjective",
    meaning: "Sweet sounding, especially related to voice or music.",
    translation: "मधुर",
    sentence: "She has a rich, mellifluous voice that soothes the soul.",
    synonyms: ["Dulcet", "Melodious", "Euphonious"],
    antonyms: ["Cacophonous", "Harsh", "Grating"],
    trick: "Melody + Flow -> A melody that flows smoothly is mellifluous.",
    tone: "Positive (+)",
    collocation: "Mellifluous Voice"
  },
  {
    word: "Magnanimous",
    partOfSpeech: "Adjective",
    meaning: "Generous and noble-hearted.",
    translation: "उदार / महामना",
    sentence: "He was magnanimous in victory, praising his opponent's skill.",
    synonyms: ["Benevolent", "Generous", "Altruistic"],
    antonyms: ["Petty", "Vindictive", "Selfish"],
    trick: "Mega + Animus -> 'Mega' means big, 'Animus' means soul. Big-souled.",
    tone: "Positive (+)",
    collocation: "Magnanimous Gesture",
    intensitySpectrum: [
      { word: "Fair", level: "Mild" },
      { word: "Generous", level: "Medium" },
      { word: "Magnanimous", level: "High" },
      { word: "Altruistic", level: "Extreme" }
    ]
  },
  {
    word: "Benign",
    partOfSpeech: "Adjective",
    meaning: "Harmless, kind in nature.",
    translation: "सौम्य / अनुकूल",
    sentence: "The tumor turned out to be benign, much to the patient's relief.",
    synonyms: ["Gentle", "Harmless", "Kindly"],
    antonyms: ["Malignant", "Harmful", "Hostile"],
    trick: "Be Nine -> Be innocent and harmless like a nine-year-old.",
    tone: "Positive (+)",
    collocation: "Benign Tumor"
  },
  {
    word: "Vexed",
    partOfSpeech: "Adjective",
    meaning: "Irritated or annoyed.",
    translation: "तंग / खीझा हुआ",
    sentence: "The vexed customer demanded to speak to the manager immediately.",
    synonyms: ["Irked", "Annoyed", "Agitated"],
    antonyms: ["Pleased", "Soothed", "Delighted"],
    trick: "Wax -> Getting your hair waxed is painful and makes you vexed.",
    tone: "Negative (-)",
    collocation: "Vexed Question",
    intensitySpectrum: [
      { word: "Annoyed", level: "Mild" },
      { word: "Vexed", level: "Medium" },
      { word: "Irate", level: "High" },
      { word: "Incensed", level: "Extreme" }
    ]
  },
  {
    word: "Irate",
    partOfSpeech: "Adjective",
    meaning: "Very angry, often reacting sharply.",
    translation: "क्रद्ध",
    sentence: "He received an irate email from a dissatisfied client.",
    synonyms: ["Furious", "Enraged", "Incensed"],
    antonyms: ["Calm", "Composed", "Pacified"],
    trick: "Pirate -> Pirates are always fighting and irate.",
    tone: "Negative (-)",
    collocation: "Irate Customer",
    intensitySpectrum: [
      { word: "Annoyed", level: "Mild" },
      { word: "Vexed", level: "Medium" },
      { word: "Irate", level: "High" },
      { word: "Incensed", level: "Extreme" }
    ]
  },
  {
    word: "Morose",
    partOfSpeech: "Adjective",
    meaning: "Sullen, gloomy, showing silent displeasure or sadness.",
    translation: "उदास / चिड़चिड़ा",
    sentence: "He sat in the corner, silent and morose, refusing to talk.",
    synonyms: ["Sullen", "Gloomy", "Glum"],
    antonyms: ["Cheerful", "Genial", "Happy"],
    trick: "No Rose -> If you get no rose on Valentine's day, you feel morose.",
    tone: "Negative (-)",
    collocation: "Morose Silence",
    intensitySpectrum: [
      { word: "Gloomy", level: "Mild" },
      { word: "Glum", level: "Medium" },
      { word: "Morose", level: "High" },
      { word: "Depressed", level: "Extreme" }
    ]
  },
  {
    word: "Apprehension",
    partOfSpeech: "Noun",
    meaning: "Anxiety or fear about future events.",
    translation: "आशंका / डर",
    sentence: "She felt a wave of apprehension before the exam results were announced.",
    synonyms: ["Anxiety", "Dread", "Unease"],
    antonyms: ["Confidence", "Calmness"],
    trick: "Pre-Tension -> Tension before an event happens is apprehension.",
    tone: "Negative (-)",
    collocation: "Deep Apprehension",
    intensitySpectrum: [
      { word: "Worry", level: "Mild" },
      { word: "Anxiety", level: "Medium" },
      { word: "Apprehension", level: "High" },
      { word: "Dread", level: "Extreme" }
    ]
  },
  {
    word: "Skeptical",
    partOfSpeech: "Adjective",
    meaning: "Doubtful, questioning the truth or validity of something.",
    translation: "संशयवादी",
    sentence: "Investors were skeptical about the startup's ambitious claims.",
    synonyms: ["Dubious", "Cynical", "Unconvinced"],
    antonyms: ["Convinced", "Gullible", "Certain"],
    trick: "Skip it -> You want to skip the plan because you doubt it will work.",
    tone: "Neutral (0)",
    collocation: "Skeptical About",
    intensitySpectrum: [
      { word: "Unsure", level: "Mild" },
      { word: "Doubtful", level: "Medium" },
      { word: "Skeptical", level: "High" },
      { word: "Cynical", level: "Extreme" }
    ]
  },
  {
    word: "Repulsed",
    partOfSpeech: "Verb / Adj",
    meaning: "Filled with disgust.",
    translation: "घृणा करना",
    sentence: "She was repulsed by the smell of the rotting garbage.",
    synonyms: ["Disgusted", "Revolted", "Repelled"],
    antonyms: ["Attracted", "Enchanted", "Allured"],
    trick: "Pulse -> Seeing something so gross your pulse drops.",
    tone: "Negative (-)",
    collocation: "Utterly Repulsed",
    intensitySpectrum: [
      { word: "Disliked", level: "Mild" },
      { word: "Distaste", level: "Medium" },
      { word: "Repulsed", level: "High" },
      { word: "Disgusted", level: "Extreme" }
    ]
  },
  {
    word: "Perturb",
    partOfSpeech: "Verb",
    meaning: "To disturb or unsettle mentally or emotionally.",
    translation: "व्याकुल करना",
    sentence: "The loud noises outside perturbed his concentration.",
    synonyms: ["Unsettle", "Disturb", "Agitate"],
    antonyms: ["Calm", "Soothe", "Reassure"],
    trick: "Turbo -> Putting a car in turbo mode disturbs the silence.",
    tone: "Negative (-)",
    collocation: "Deeply Perturbed",
    intensitySpectrum: [
      { word: "Bother", level: "Mild" },
      { word: "Unsettle", level: "Medium" },
      { word: "Perturb", level: "High" },
      { word: "Agitate", level: "Extreme" }
    ]
  },
  {
    word: "Despondent",
    partOfSpeech: "Adjective",
    meaning: "Feeling hopeless or discouraged.",
    translation: "हताश / निराश",
    sentence: "After failing the interview, he became despondent.",
    synonyms: ["Disheartened", "Hopeless", "Dejected"],
    antonyms: ["Hopeful", "Cheerful", "Sanguine"],
    trick: "The Pond -> Feeling so sad you want to jump in the pond.",
    tone: "Negative (-)",
    collocation: "Despondent Mood",
    intensitySpectrum: [
      { word: "Sad", level: "Mild" },
      { word: "Hopeless", level: "Medium" },
      { word: "Despondent", level: "High" },
      { word: "Despairing", level: "Extreme" }
    ]
  },
  {
    word: "Woeful",
    partOfSpeech: "Adjective",
    meaning: "Extremely sad and sorrowful.",
    translation: "दुखी / खेदजनक",
    sentence: "The puppy gave a woeful look when I left for work.",
    synonyms: ["Miserable", "Sorrowful", "Wretched"],
    antonyms: ["Joyful", "Cheerful", "Delighted"],
    trick: "Woe -> Sounds like 'Oh no', expressing deep sadness.",
    tone: "Negative (-)",
    collocation: "Woeful Tale",
    intensitySpectrum: [
      { word: "Sad", level: "Mild" },
      { word: "Sorrowful", level: "Medium" },
      { word: "Woeful", level: "High" },
      { word: "Wretched", level: "Extreme" }
    ]
  },
  {
    word: "Lax",
    partOfSpeech: "Adjective",
    meaning: "Not sufficiently strict, severe, or careful.",
    translation: "ढीला / लापरवाह",
    sentence: "The security at the airport was lax, allowing people to enter easily.",
    synonyms: ["Slack", "Negligent", "Careless"],
    antonyms: ["Strict", "Stringent", "Careful"],
    trick: "Relax -> If you relax too much at work, you become lax.",
    tone: "Negative (-)",
    collocation: "Lax Security",
    intensitySpectrum: [
      { word: "Relaxed", level: "Mild" },
      { word: "Careless", level: "Medium" },
      { word: "Lax", level: "High" },
      { word: "Negligent", level: "Extreme" }
    ]
  },
  {
    word: "Solvency",
    partOfSpeech: "Noun",
    meaning: "The ability to pay all debts; financial stability.",
    translation: "ऋण शोधन क्षमता",
    sentence: "The bank had to prove its solvency to the regulators.",
    synonyms: ["Stability", "Soundness", "Wealth"],
    antonyms: ["Insolvency", "Bankruptcy", "Debt"],
    trick: "Solve + Currency -> Ability to solve problems with currency.",
    tone: "Positive (+)",
    collocation: "Financial Solvency"
  },
  {
    word: "Obtuse",
    partOfSpeech: "Adjective",
    meaning: "Annoyingly insensitive or slow to understand.",
    translation: "मंदबुद्धि",
    sentence: "He was being deliberately obtuse to avoid answering the question.",
    synonyms: ["Stupid", "Slow-witted", "Insensitive"],
    antonyms: ["Sharp", "Astute", "Clever"],
    trick: "Obtuse Angle -> An angle > 90° is blunt and wide, not sharp.",
    tone: "Negative (-)",
    collocation: "Deliberately Obtuse",
    intensitySpectrum: [
      { word: "Slow", level: "Mild" },
      { word: "Dull", level: "Medium" },
      { word: "Obtuse", level: "High" },
      { word: "Dense", level: "Extreme" }
    ]
  },
  {
    word: "Pragmatic",
    partOfSpeech: "Adjective",
    meaning: "Dealing with things sensibly and realistically.",
    translation: "व्यावहारिक",
    sentence: "We need a pragmatic solution, not just a theoretical one.",
    synonyms: ["Practical", "Realistic", "Sensible"],
    antonyms: ["Idealistic", "Impractical", "Dreamy"],
    trick: "Programmer -> Good programmers are practical (pragmatic), not emotional.",
    tone: "Positive (+)",
    collocation: "Pragmatic Approach"
  },
  {
    word: "Erudite",
    partOfSpeech: "Adjective",
    meaning: "Having or showing great knowledge or learning.",
    translation: "विद्वान / ज्ञानी",
    sentence: "The professor’s erudite lecture impressed the students.",
    synonyms: ["Learned", "Scholarly", "Knowledgeable"],
    antonyms: ["Ignorant", "Uneducated", "Illiterate"],
    trick: "Rude? -> No, he is not rude, he is educated (E-rudite).",
    tone: "Positive (+)",
    collocation: "Erudite Scholar"
  },
  {
    word: "Usurp",
    partOfSpeech: "Verb",
    meaning: "Take (a position of power) illegally or by force.",
    translation: "हड़पना",
    sentence: "The general tried to usurp the throne from the king.",
    synonyms: ["Seize", "Commandeer", "Hijack"],
    antonyms: ["Surrender", "Relinquish", "Give in"],
    trick: "U + Slurp -> You slurp (drink) someone else's drink illegally.",
    tone: "Negative (-)",
    collocation: "Usurp Power"
  },
  {
    word: "Riveting",
    partOfSpeech: "Adjective",
    meaning: "Completely engrossing; compelling.",
    translation: "दिलचस्प",
    sentence: "The movie was so riveting that I couldn't look away.",
    synonyms: ["Fascinating", "Gripping", "Absorbing"],
    antonyms: ["Boring", "Dull", "Tedious"],
    trick: "Rivet -> A metal pin that holds things tight. It holds your attention tight.",
    tone: "Positive (+)",
    collocation: "Riveting Story"
  },
  {
    word: "Insipid",
    partOfSpeech: "Adjective",
    meaning: "Lacking flavor; lacking vigor or interest.",
    translation: "फीका / नीरस",
    sentence: "The soup was insipid and tasted like hot water.",
    synonyms: ["Tasteless", "Bland", "Boring"],
    antonyms: ["Tasty", "Interesting", "Piquant"],
    trick: "In + Sip -> When you sip it, there is no taste in it.",
    tone: "Negative (-)",
    collocation: "Insipid Taste"
  },
  {
    word: "Sporadic",
    partOfSpeech: "Adjective",
    meaning: "Occurring at irregular intervals or only in a few places.",
    translation: "छिटपुट / अनियमित",
    sentence: "Sporadic gunfire was heard throughout the night.",
    synonyms: ["Occasional", "Infrequent", "Irregular"],
    antonyms: ["Constant", "Frequent", "Steady"],
    trick: "Spot -> Occurring in random spots, not everywhere.",
    tone: "Neutral (0)",
    collocation: "Sporadic Incidents"
  },
  {
    word: "Erratic",
    partOfSpeech: "Adjective",
    meaning: "Not even or regular in pattern or movement; unpredictable.",
    translation: "अनिश्चित / अस्थिर",
    sentence: "The stock market has been erratic due to global wars.",
    synonyms: ["Unpredictable", "Inconsistent", "Volatile"],
    antonyms: ["Consistent", "Stable", "Predictable"],
    trick: "Error -> Acting like a computer error or glitch.",
    tone: "Negative (-)",
    collocation: "Erratic Behavior"
  },
  {
    word: "Diabolical",
    partOfSpeech: "Adjective",
    meaning: "Disgracefully bad or unpleasant; characteristic of the Devil.",
    translation: "शैतानी / नृशंस",
    sentence: "The villain hatched a diabolical plot to destroy the city.",
    synonyms: ["Devilish", "Fiendish", "Wicked"],
    antonyms: ["Angelic", "Good", "Saintly"],
    trick: "Diablo -> Diablo means Devil in Spanish.",
    tone: "Negative (-)",
    collocation: "Diabolical Plot",
    intensitySpectrum: [
      { word: "Bad", level: "Mild" },
      { word: "Wicked", level: "Medium" },
      { word: "Evil", level: "High" },
      { word: "Diabolical", level: "Extreme" }
    ]
  },
  {
    word: "Heinous",
    partOfSpeech: "Adjective",
    meaning: "(Of a person or wrongful act) utterly odious or wicked.",
    translation: "जघन्य",
    sentence: "The judge sentenced him to life for the heinous crime.",
    synonyms: ["Atrocious", "Abominable", "Monstrous"],
    antonyms: ["Admirable", "Commendable", "Good"],
    trick: "Highness -> A crime of such 'highness' (magnitude) that it is evil.",
    tone: "Negative (-)",
    collocation: "Heinous Crime",
    intensitySpectrum: [
      { word: "Mean", level: "Mild" },
      { word: "Wicked", level: "Medium" },
      { word: "Heinous", level: "High" },
      { word: "Diabolical", level: "Extreme" }
    ]
  },
  {
    word: "Fiendish",
    partOfSpeech: "Adjective",
    meaning: "Extremely cruel or unpleasant; extremely complex.",
    translation: "पिशाच तुल्य / क्रूर",
    sentence: "The puzzle was fiendishly difficult to solve.",
    synonyms: ["Wicked", "Cruel", "Vicious"],
    antonyms: ["Kind", "Gentle", "Benevolent"],
    trick: "Friend -> Opposite of a Friend is a Fiend (Enemy/Devil).",
    tone: "Negative (-)",
    collocation: "Fiendishly Difficult",
    intensitySpectrum: [
      { word: "Unpleasant", level: "Mild" },
      { word: "Cruel", level: "Medium" },
      { word: "Fiendish", level: "High" },
      { word: "Evil", level: "Extreme" }
    ]
  },
  {
    word: "Atrocious",
    partOfSpeech: "Adjective",
    meaning: "Horrifyingly wicked; of a very poor quality.",
    translation: "अति दुष्ट / बहुत बुरा",
    sentence: "The weather has been atrocious all week.",
    synonyms: ["Appalling", "Dreadful", "Terrible"],
    antonyms: ["Excellent", "Superb", "Wonderful"],
    trick: "Atrocity -> Committing an atrocity makes you atrocious.",
    tone: "Negative (-)",
    collocation: "Atrocious Weather",
    intensitySpectrum: [
      { word: "Bad", level: "Mild" },
      { word: "Terrible", level: "Medium" },
      { word: "Atrocious", level: "High" },
      { word: "Horrific", level: "Extreme" }
    ]
  },
  {
    word: "Silos",
    partOfSpeech: "Noun",
    meaning: "A system/department causing isolation from others (Corporate Term).",
    translation: "एकांत / विभाग",
    sentence: "We need to break down the silos and encourage teamwork between departments.",
    synonyms: ["Isolation", "Separation", "Pockets"],
    antonyms: ["Integration", "Unity", "Collaboration"],
    trick: "Solo -> Working solo (alone) creates silos.",
    tone: "Negative (-)",
    collocation: "Organizational Silos"
  },
  {
    word: "Emulate",
    partOfSpeech: "Verb",
    meaning: "Match or surpass (a person or achievement), typically by imitation.",
    translation: "अनुकरण करना",
    sentence: "Young players try to emulate their sporting heroes.",
    synonyms: ["Imitate", "Copy", "Mirror"],
    antonyms: ["Neglect", "Reject", "Ignore"],
    trick: "Simulator -> A simulator tries to copy real life.",
    tone: "Positive (+)",
    collocation: "Emulate Success"
  },
  {
    word: "Virulent",
    partOfSpeech: "Adjective",
    meaning: "(of a disease) extremely severe/harmful; bitterly hostile.",
    translation: "विषैला / संक्रामक",
    sentence: "A virulent strain of the flu is spreading.",
    synonyms: ["Toxic", "Deadly", "Venomous"],
    antonyms: ["Harmless", "Benign", "Mild"],
    trick: "Virus -> Related to a dangerous virus.",
    tone: "Negative (-)",
    collocation: "Virulent Strain"
  },
  {
    word: "Hostile",
    partOfSpeech: "Adjective",
    meaning: "Unfriendly; antagonistic.",
    translation: "शत्रुतापूर्ण",
    sentence: "The audience was hostile towards the comedian.",
    synonyms: ["Aggressive", "Belligerent", "Unfriendly"],
    antonyms: ["Friendly", "Warm", "Welcoming"],
    trick: "Hostel -> Hostel wardens are often hostile (strict/unfriendly).",
    tone: "Negative (-)",
    collocation: "Hostile Takeover",
    intensitySpectrum: [
      { word: "Unfriendly", level: "Mild" },
      { word: "Aggressive", level: "Medium" },
      { word: "Hostile", level: "High" },
      { word: "Belligerent", level: "Extreme" }
    ]
  },
  {
    word: "Churlish",
    partOfSpeech: "Adjective",
    meaning: "Rude in a mean-spirited and surly way.",
    translation: "अभद्र / गंवार",
    sentence: "It would be churlish to refuse such a generous offer.",
    synonyms: ["Rude", "Impolite", "Boorish"],
    antonyms: ["Polite", "Gracious", "Courteous"],
    trick: "Childish -> Acting rude like a spoiled child.",
    tone: "Negative (-)",
    collocation: "Churlish Behavior",
    intensitySpectrum: [
      { word: "Impolite", level: "Mild" },
      { word: "Rude", level: "Medium" },
      { word: "Churlish", level: "High" },
      { word: "Boorish", level: "Extreme" }
    ]
  },
  {
    word: "Loutish",
    partOfSpeech: "Adjective",
    meaning: "Uncouth and aggressive.",
    translation: "गंवार / अशिष्ट",
    sentence: "His loutish behavior at the party embarrassed his wife.",
    synonyms: ["Thuggish", "Boorish", "Oafish"],
    antonyms: ["Refined", "Gentlemanly", "Polite"],
    trick: "Loud -> Loud and aggressive people are loutish.",
    tone: "Negative (-)",
    collocation: "Loutish Behavior",
    intensitySpectrum: [
      { word: "Uncouth", level: "Mild" },
      { word: "Aggressive", level: "Medium" },
      { word: "Loutish", level: "High" },
      { word: "Thuggish", level: "Extreme" }
    ]
  },
  {
    word: "Ebullient",
    partOfSpeech: "Adjective",
    meaning: "Cheerful and full of energy.",
    translation: "जोशीला",
    sentence: "The ebullient host kept the party alive all night.",
    synonyms: ["Buoyant", "Cheerful", "Joyful"],
    antonyms: ["Depressed", "Apathetic", "Sullen"],
    trick: "Bull -> Having the energy of a raging bull (happy energy).",
    tone: "Positive (+)",
    collocation: "Ebullient Mood",
    intensitySpectrum: [
      { word: "Cheerful", level: "Mild" },
      { word: "Lively", level: "Medium" },
      { word: "Ebullient", level: "High" },
      { word: "Ecstatic", level: "Extreme" }
    ]
  },
  {
    word: "Placid",
    partOfSpeech: "Adjective",
    meaning: "Not easily upset or excited; calm.",
    translation: "शांत",
    sentence: "The placid waters of the lake reflected the moon.",
    synonyms: ["Calm", "Tranquil", "Serene"],
    antonyms: ["Excitable", "Temperamental", "Angry"],
    trick: "Plastic -> Plastic doesn't move or react; it stays calm.",
    tone: "Positive (+)",
    collocation: "Placid Waters",
    intensitySpectrum: [
      { word: "Quiet", level: "Mild" },
      { word: "Calm", level: "Medium" },
      { word: "Placid", level: "High" },
      { word: "Serene", level: "Extreme" }
    ]
  },
  {
    word: "Lethargic",
    partOfSpeech: "Adjective",
    meaning: "Affected by lethargy; sluggish and apathetic.",
    translation: "सुस्त",
    sentence: "The hot weather made everyone feel lethargic.",
    synonyms: ["Sluggish", "Inert", "Torpid"],
    antonyms: ["Energetic", "Vigorous", "Active"],
    trick: "Leather -> Moving as if you are made of heavy leather.",
    tone: "Negative (-)",
    collocation: "Feeling Lethargic",
    intensitySpectrum: [
      { word: "Tired", level: "Mild" },
      { word: "Sluggish", level: "Medium" },
      { word: "Lethargic", level: "High" },
      { word: "Torpid", level: "Extreme" }
    ]
  },
  {
    word: "Adroit",
    partOfSpeech: "Adjective",
    meaning: "Clever or skillful in using the hands or mind.",
    translation: "निपुण / चतुर",
    sentence: "She was adroit at avoiding awkward questions.",
    synonyms: ["Skillful", "Adept", "Dexterous"],
    antonyms: ["Clumsy", "Incompetent", "Inept"],
    trick: "Android -> Androids (robots) are programmed to be skillful.",
    tone: "Positive (+)",
    collocation: "Adroit Handling"
  },
  {
    word: "Doctrine",
    partOfSpeech: "Noun",
    meaning: "A belief or set of beliefs held and taught by a Church, party, or group.",
    translation: "सिद्धांत",
    sentence: "The government is committed to the doctrine of free trade.",
    synonyms: ["Creed", "Dogma", "Principle"],
    antonyms: ["Skepticism", "Disbelief", "Doubt"],
    trick: "Doctor -> A doctor follows the rules of medicine strictly.",
    tone: "Neutral (0)",
    collocation: "Official Doctrine"
  },
  {
    word: "Dogma",
    partOfSpeech: "Noun",
    meaning: "A principle or set of principles laid down by an authority as incontrovertibly true.",
    translation: "हठधर्मिता / मत",
    sentence: "He challenged the political dogma of the party.",
    synonyms: ["Tenet", "Canon", "Belief"],
    antonyms: ["Open-mindedness", "Ambiguity", "Doubt"],
    trick: "Dog -> A dog follows its master's orders without questioning.",
    tone: "Neutral (0)",
    collocation: "Political Dogma"
  },
  {
    word: "Dexterous",
    partOfSpeech: "Adjective",
    meaning: "Showing or having skill, especially with the hands.",
    translation: "निपुण / कुशल",
    sentence: "The magician's dexterous hands amazed the audience.",
    synonyms: ["Deft", "Adept", "Agile"],
    antonyms: ["Clumsy", "Awkward", "Unskilled"],
    trick: "Dexter -> Dexter (from the cartoon) was a genius kid with machines.",
    tone: "Positive (+)",
    collocation: "Dexterous Movement"
  },
  {
    word: "Vagabond",
    partOfSpeech: "Noun/Adj",
    meaning: "A person who wanders from place to place without a home.",
    translation: "आवारा / घुमक्कड़",
    sentence: "He lived the life of a vagabond, traveling with just a backpack.",
    synonyms: ["Wanderer", "Nomad", "Drifter"],
    antonyms: ["Resident", "Settler", "Inhabitant"],
    trick: "James Bond -> James Bond is always traveling like a vagabond.",
    tone: "Neutral (0)",
    collocation: "Vagabond Life"
  },
  {
    word: "Peregrine",
    partOfSpeech: "Adjective",
    meaning: "Wandering, traveling, or migratory.",
    translation: "विदेशी / घुमंतू",
    sentence: "The peregrine falcon is known for its long migrations.",
    synonyms: ["Migratory", "Wandering", "Roving"],
    antonyms: ["Native", "Indigenous", "Resident"],
    trick: "Per + Agri -> Moving per (through) agri (fields/land).",
    tone: "Neutral (0)",
    collocation: "Peregrine Falcon"
  },
  {
    word: "Sedentary",
    partOfSpeech: "Adjective",
    meaning: "Tending to spend much time seated; somewhat inactive.",
    translation: "निष्क्रिय / बैठा रहने वाला",
    sentence: "A sedentary lifestyle can lead to health problems like obesity.",
    synonyms: ["Inactive", "Stationary", "Desk-bound"],
    antonyms: ["Active", "Mobile", "Energetic"],
    trick: "Sediment -> Sediment settles at the bottom and doesn't move.",
    tone: "Negative (-)",
    collocation: "Sedentary Lifestyle"
  },
  {
    word: "Endemic",
    partOfSpeech: "Adjective",
    meaning: "(Of a disease or condition) regularly found among particular people or in a certain area.",
    translation: "स्थानीय / विशेष क्षेत्र का",
    sentence: "Malaria is endemic to many tropical countries.",
    synonyms: ["Indigenous", "Native", "Local"],
    antonyms: ["Foreign", "Exotic", "Pandemic"],
    trick: "End + Mic -> The sound of the mic ends here; it is local to this room.",
    tone: "Neutral (0)",
    collocation: "Endemic Disease"
  },
  {
    word: "Prerogative",
    partOfSpeech: "Noun",
    meaning: "A right or privilege exclusive to a particular individual or class.",
    translation: "विशेषाधिकार",
    sentence: "Making executive decisions is the prerogative of the CEO.",
    synonyms: ["Privilege", "Right", "Entitlement"],
    antonyms: ["Duty", "Obligation", "Disqualification"],
    trick: "Pre-rogative -> A King's right before (Pre) anyone else questions (Interrogative).",
    tone: "Neutral (0)",
    collocation: "Royal Prerogative"
  },
  {
    word: "Perquisite",
    partOfSpeech: "Noun",
    meaning: "A benefit which one enjoys or is entitled to on account of one's job.",
    translation: "अनुलाभ / ऊपरी लाभ",
    sentence: "Free travel is a perquisite of working for an airline.",
    synonyms: ["Perk", "Bonus", "Benefit"],
    antonyms: ["Loss", "Penalty", "Disadvantage"],
    trick: "Perk -> The word 'Perk' is just a short form of Perquisite.",
    tone: "Positive (+)",
    collocation: "Job Perquisite"
  },
  {
    word: "Sanction",
    partOfSpeech: "Noun/Verb",
    meaning: "1. Official permission. 2. A penalty for disobeying a law.",
    translation: "1. मंजूरी 2. प्रतिबंध",
    sentence: "The project received official sanction. 2. Trade sanctions were imposed.",
    synonyms: ["Authorization", "Penalty"],
    antonyms: ["Prohibition", "Reward"],
    trick: "Sank -> If you get a sanction (penalty), your business sank.",
    tone: "Neutral (0)",
    collocation: "Official Sanction"
  },
  {
    word: "Indulgent",
    partOfSpeech: "Adjective",
    meaning: "Having or indicating a tendency to be overly generous to or lenient with someone.",
    translation: "उदार / पक्षपाती",
    sentence: "The indulgent grandmother gave the kids candy before dinner.",
    synonyms: ["Lenient", "Permissive", "Tolerant"],
    antonyms: ["Strict", "Severe", "Stern"],
    trick: "Indulge -> If you indulge in chocolate, you are being indulgent to yourself.",
    tone: "Negative (-)",
    collocation: "Indulgent Parent"
  },
  {
    word: "Leeway",
    partOfSpeech: "Noun",
    meaning: "The amount of freedom to move or act that is available.",
    translation: "छूट / गुंजाइश",
    sentence: "The manager gave us some leeway to finish the project late.",
    synonyms: ["Latitude", "Freedom", "Scope"],
    antonyms: ["Restriction", "Constraint", "Tightness"],
    trick: "Lee + Way -> Leaving a way open for movement.",
    tone: "Positive (+)",
    collocation: "Give Leeway"
  },
  {
    word: "Latitude",
    partOfSpeech: "Noun",
    meaning: "Scope for freedom of action or thought.",
    translation: "स्वतंत्रता / विस्तार",
    sentence: "Journalists should have considerable latitude in criticizing public officials.",
    synonyms: ["Freedom", "Liberty", "Leeway"],
    antonyms: ["Limitation", "Restriction", "Bondage"],
    trick: "Map Lines -> Latitude lines show how wide the world is (width/freedom).",
    tone: "Positive (+)",
    collocation: "Wide Latitude"
  },
  {
    word: "Deposition",
    partOfSpeech: "Noun",
    meaning: "1. The action of deposing someone, especially a monarch. 2. A formal legal statement.",
    translation: "1. पदच्युति 2. बयान",
    sentence: "The deposition of the dictator led to chaos. 2. He gave a deposition in court.",
    synonyms: ["Removal", "Testimony"],
    antonyms: ["Installation", "Coronation"],
    trick: "De-Position -> Removing someone from their Position.",
    tone: "Neutral (0)",
    collocation: "Legal Deposition"
  },
  {
    word: "Abdication",
    partOfSpeech: "Noun",
    meaning: "An act of renouncing the throne or authority.",
    translation: "त्याग",
    sentence: "The king's abdication shocked the nation.",
    synonyms: ["Resignation", "Renunciation", "Surrender"],
    antonyms: ["Coronation", "Accession", "Acceptance"],
    trick: "Ab-Dictation -> The Dictator leaves (Absent).",
    tone: "Neutral (0)",
    collocation: "Abdication of Duty"
  },
  {
    word: "Impeachment",
    partOfSpeech: "Noun",
    meaning: "A charge of misconduct made against the holder of a public office.",
    translation: "महाभियोग",
    sentence: "The president faced impeachment for corruption.",
    synonyms: ["Indictment", "Accusation", "Charge"],
    antonyms: ["Absolution", "Exoneration", "Praise"],
    trick: "Peach -> A peach bruises easily; impeachment bruises your reputation.",
    tone: "Negative (-)",
    collocation: "Face Impeachment"
  },
  {
    word: "Disavowal",
    partOfSpeech: "Noun",
    meaning: "The denial of any responsibility or support for something.",
    translation: "इनकार / अस्वीकृति",
    sentence: "The government issued a disavowal of the secret operation.",
    synonyms: ["Denial", "Rejection", "Repudiation"],
    antonyms: ["Admission", "Acknowledgment", "Confession"],
    trick: "Dis-Vow -> To break a vow or promise; to say you didn't do it.",
    tone: "Negative (-)",
    collocation: "Public Disavowal"
  },
  {
    word: "Credence",
    partOfSpeech: "Noun",
    meaning: "Belief in or acceptance of something as true.",
    translation: "विश्वास / साख",
    sentence: "The letters give credence to the theory that he was murdered.",
    synonyms: ["Credibility", "Belief", "Trust"],
    antonyms: ["Disbelief", "Distrust", "Skepticism"],
    trick: "Credit -> If you have credit, people give credence to you.",
    tone: "Positive (+)",
    collocation: "Give Credence"
  },
  {
    word: "Vain",
    partOfSpeech: "Adjective",
    meaning: "1. Having or showing an excessively high opinion of one's appearance. 2. Producing no result; useless.",
    translation: "1. अहंकारी 2. व्यर्थ",
    sentence: "He is so vain about his hair. 2. They made a vain attempt to escape.",
    synonyms: ["Conceited", "Futile"],
    antonyms: ["Modest", "Successful"],
    trick: "Vein -> Looking at your veins in the mirror (Self-obsessed) OR 'In vain' (useless).",
    tone: "Negative (-)",
    collocation: "In Vain"
  },
  {
    word: "Abortive",
    partOfSpeech: "Adjective",
    meaning: "Failing to produce the intended result.",
    translation: "निष्फल / अधूरा",
    sentence: "The rebels made an abortive attempt to seize power.",
    synonyms: ["Unsuccessful", "Failed", "Futile"],
    antonyms: ["Successful", "Fruitful", "Effective"],
    trick: "Abort -> To abort a mission means it failed.",
    tone: "Negative (-)",
    collocation: "Abortive Attempt"
  },
  {
    word: "Pompous",
    partOfSpeech: "Adjective",
    meaning: "Affectedly and irritatingly grand, solemn, or self-important.",
    translation: "आडंबरपूर्ण / घमंडी",
    sentence: "The pompous official refused to talk to the common people.",
    synonyms: ["Arrogant", "Pretentious", "Haughty"],
    antonyms: ["Humble", "Modest", "Unassuming"],
    trick: "Pomp -> 'Pomp and Show' -> Showing off too much.",
    tone: "Negative (-)",
    collocation: "Pompous Ass"
  },
  {
    word: "Efficacious",
    partOfSpeech: "Adjective",
    meaning: "(Typically of something inanimate or abstract) successful in producing a desired or intended result.",
    translation: "प्रभावकारी",
    sentence: "The vaccine proved to be highly efficacious against the virus.",
    synonyms: ["Effective", "Productive", "Potent"],
    antonyms: ["Ineffective", "Useless", "Weak"],
    trick: "Effect -> Something that produces a good effect.",
    tone: "Positive (+)",
    collocation: "Highly Efficacious"
  },
  {
    word: "Prolific",
    partOfSpeech: "Adjective",
    meaning: "(Of a plant, animal, or person) producing much fruit or foliage or many offspring.",
    translation: "उपजाऊ / बहुफलदायक",
    sentence: "Picasso was a prolific artist, creating thousands of works.",
    synonyms: ["Productive", "Creative", "Fertile"],
    antonyms: ["Unproductive", "Barren", "Sterile"],
    trick: "Pro-Life -> Creating a lot of life (or work).",
    tone: "Positive (+)",
    collocation: "Prolific Writer"
  },
  {
    word: "Advent",
    partOfSpeech: "Noun",
    meaning: "The arrival of a notable person, thing, or event.",
    translation: "आगमन",
    sentence: "The advent of the internet changed the world forever.",
    synonyms: ["Arrival", "Appearance", "Emergence"],
    antonyms: ["Departure", "Disappearance", "Exit"],
    trick: "Adventure -> Every adventure starts with an advent (arrival).",
    tone: "Neutral (0)",
    collocation: "Advent of Technology"
  },
  {
    word: "Inception",
    partOfSpeech: "Noun",
    meaning: "The establishment or starting point of an institution or activity.",
    translation: "आरंभ / शुरुआत",
    sentence: "Since its inception, the company has grown rapidly.",
    synonyms: ["Beginning", "Commencement", "Origin"],
    antonyms: ["Conclusion", "End", "Termination"],
    trick: "Incept -> Movie 'Inception' was about planting an idea (the start).",
    tone: "Neutral (0)",
    collocation: "Since Inception"
  },
  {
    word: "Cessation",
    partOfSpeech: "Noun",
    meaning: "The fact or process of ending or being brought to an end.",
    translation: "समाप्ति / विराम",
    sentence: "The treaty called for a cessation of hostilities.",
    synonyms: ["End", "Stoppage", "Halt"],
    antonyms: ["Commencement", "Start", "Continuation"],
    trick: "Cease -> Ceasefire means stopping the fire.",
    tone: "Neutral (0)",
    collocation: "Cessation of Hostilities"
  },
  {
    word: "Ratified",
    partOfSpeech: "Verb",
    meaning: "Sign or give formal consent to (a treaty, contract, or agreement), making it officially valid.",
    translation: "पुष्टि करना / मंजूर करना",
    sentence: "The parliament ratified the peace treaty.",
    synonyms: ["Approved", "Confirmed", "Endorsed"],
    antonyms: ["Rejected", "Vetoed", "Revoked"],
    trick: "Rate -> You rate something 5 stars to approve/validate it.",
    tone: "Positive (+)",
    collocation: "Ratified Treaty"
  },
  {
    word: "Repudiate",
    partOfSpeech: "Verb",
    meaning: "Refuse to accept or be associated with; deny the truth or validity of.",
    translation: "अस्वीकार करना",
    sentence: "The politician repudiated the allegations of corruption.",
    synonyms: ["Reject", "Deny", "Renounce"],
    antonyms: ["Accept", "Embrace", "Confirm"],
    trick: "Reputation -> To save your reputation, you reject (repudiate) bad claims.",
    tone: "Negative (-)",
    collocation: "Repudiate Claims"
  },
  {
    word: "Abrogate",
    partOfSpeech: "Verb",
    meaning: "Repeal or do away with (a law, right, or formal agreement).",
    translation: "रद्द करना",
    sentence: "The new government promised to abrogate the old tax laws.",
    synonyms: ["Repeal", "Revoke", "Annul"],
    antonyms: ["Enact", "Institute", "Establish"],
    trick: "Abe-Gate -> Close the gate on a law; cancel it.",
    tone: "Negative (-)",
    collocation: "Abrogate Treaty"
  },
  {
    word: "Concomitant",
    partOfSpeech: "Adjective",
    meaning: "Naturally accompanying or associated.",
    translation: "सहगामी / साथ में",
    sentence: "Inflation is a concomitant of rapid economic growth.",
    synonyms: ["Accompanying", "Associated", "Related"],
    antonyms: ["Unrelated", "Independent", "Separate"],
    trick: "Come + Commit -> Things that come together and are committed to each other.",
    tone: "Neutral (0)",
    collocation: "Concomitant Risk"
  },
  {
    word: "Profound",
    partOfSpeech: "Adjective",
    meaning: "Showing great knowledge, insight, or intensity; reaching to the depths of one's nature.",
    translation: "गहरा / गंभीर",
    sentence: "The speaker's words had a profound impact on the audience, changing their perspective forever.",
    synonyms: ["Deep", "Intense", "Insightful"],
    antonyms: ["Superficial", "Shallow", "Trivial"],
    trick: "Pro + Found -> A 'Pro' (professional) person has 'Found' deep knowledge that is not just on the surface.",
    tone: "Positive (+)",
    collocation: "Profound Impact"
  },
  {
    word: "Bleak",
    partOfSpeech: "Adjective",
    meaning: "Lacking in warmth, life, or hope; cold and miserable.",
    translation: "बेरंग / निराशाजनक",
    sentence: "The future of the company looks bleak unless they find a new investor soon.",
    synonyms: ["Gloomy", "Desolate", "Cheerless"],
    antonyms: ["Bright", "Cheerful", "Promising"],
    trick: "Leak -> If your roof has a leak during a cold, rainy winter night, the situation becomes bleak.",
    tone: "Negative (-)",
    collocation: "Bleak Future"
  }
];
