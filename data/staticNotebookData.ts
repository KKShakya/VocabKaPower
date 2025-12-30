
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
  },
  {
    word: "Vitiate",
    partOfSpeech: "Verb",
    meaning: "To spoil or impair the quality or efficiency of something.",
    translation: "दूषित करना / भ्रष्ट करना",
    sentence: "A single technical error can vitiate the entire contract.",
    synonyms: ["Spoil", "Impair", "Mar"],
    antonyms: ["Purify", "Validate", "Strengthen"],
    trick: "Wish + Ate -> If you 'ate' a wish, you spoiled it.",
    tone: "Negative (-)",
    collocation: "Vitiate the atmosphere",
    intensitySpectrum: [
      { word: "Damage", level: "Mild" },
      { word: "Spoil", level: "Medium" },
      { word: "Vitiate", level: "High" },
      { word: "Destroy", level: "Extreme" }
    ]
  },
  {
    word: "Detrimental",
    partOfSpeech: "Adjective",
    meaning: "Tending to cause harm.",
    translation: "हानिकारक",
    sentence: "Smoking is detrimental to your health.",
    synonyms: ["Harmful", "Damaging", "Injurious"],
    antonyms: ["Beneficial", "Advantageous", "Helpful"],
    trick: "De-trim -> If you trim a plant too much, it is detrimental.",
    tone: "Negative (-)",
    collocation: "Detrimental Effect",
    intensitySpectrum: [
      { word: "Unfavorable", level: "Mild" },
      { word: "Harmful", level: "Medium" },
      { word: "Detrimental", level: "High" },
      { word: "Fatal", level: "Extreme" }
    ]
  },
  {
    word: "Antagonize",
    partOfSpeech: "Verb",
    meaning: "To cause someone to become hostile.",
    translation: "विरोध करना / दुश्मन बनाना",
    sentence: "He managed to antagonize his coworkers with his rude comments.",
    synonyms: ["Alienate", "Provoke", "Annoy"],
    antonyms: ["Pacify", "Placate", "Befriend"],
    trick: "Anti + Gone -> Going anti (against) someone makes them gone (hostile).",
    tone: "Negative (-)",
    collocation: "Antagonize the voters",
    intensitySpectrum: [
      { word: "Annoy", level: "Mild" },
      { word: "Provoke", level: "Medium" },
      { word: "Antagonize", level: "High" },
      { word: "Enrage", level: "Extreme" }
    ]
  },
  {
    word: "Conducive",
    partOfSpeech: "Adjective",
    meaning: "Making a certain situation or outcome likely or possible.",
    translation: "सहायक / अनुकूल",
    sentence: "A quiet room is conducive to studying.",
    synonyms: ["Favorable", "Beneficial", "Helpful"],
    antonyms: ["Unfavorable", "Hindering", "Detrimental"],
    trick: "Conduct -> Good conduct is conducive to success.",
    tone: "Positive (+)",
    collocation: "Conducive Environment",
    intensitySpectrum: [
      { word: "Helpful", level: "Mild" },
      { word: "Useful", level: "Medium" },
      { word: "Conducive", level: "High" },
      { word: "Essential", level: "Extreme" }
    ]
  },
  {
    word: "Deleterious",
    partOfSpeech: "Adjective",
    meaning: "Causing harm or damage.",
    translation: "हानिकारक / घातक",
    sentence: "The chemical has deleterious effects on the nervous system.",
    synonyms: ["Harmful", "Injurious", "Detrimental"],
    antonyms: ["Beneficial", "Safe", "Innocuous"],
    trick: "Delete -> It 'deletes' your health.",
    tone: "Negative (-)",
    collocation: "Deleterious Consequences",
    intensitySpectrum: [
      { word: "Bad", level: "Mild" },
      { word: "Harmful", level: "Medium" },
      { word: "Deleterious", level: "High" },
      { word: "Lethal", level: "Extreme" }
    ]
  },
  {
    word: "Rampant",
    partOfSpeech: "Adjective",
    meaning: "Flourishing or spreading unchecked.",
    translation: "अनियंत्रित / व्याप्त",
    sentence: "Corruption was rampant in the local government.",
    synonyms: ["Uncontrolled", "Widespread", "Unchecked"],
    antonyms: ["Controlled", "Restrained", "Limited"],
    trick: "Ramp -> Walking up a ramp without brakes (Uncontrolled).",
    tone: "Negative (-)",
    collocation: "Rampant Corruption",
    intensitySpectrum: [
      { word: "Growing", level: "Mild" },
      { word: "Spreading", level: "Medium" },
      { word: "Rampant", level: "High" },
      { word: "Ubiquitous", level: "Extreme" }
    ]
  },
  {
    word: "Pervasive",
    partOfSpeech: "Adjective",
    meaning: "Spreading widely throughout an area or a group of people.",
    translation: "व्यापक / सर्वत्र",
    sentence: "The pervasive smell of coffee filled the office.",
    synonyms: ["Prevalent", "Penetrating", "Ubiquitous"],
    antonyms: ["Rare", "Scarce", "Localized"],
    trick: "Per + Vase -> Water in a vase spreads everywhere (pervasively).",
    tone: "Neutral (0)",
    collocation: "Pervasive Influence",
    intensitySpectrum: [
      { word: "Common", level: "Mild" },
      { word: "Widespread", level: "Medium" },
      { word: "Pervasive", level: "High" },
      { word: "Omnipresent", level: "Extreme" }
    ]
  },
  {
    word: "Curbed",
    partOfSpeech: "Verb/Adj",
    meaning: "Restrained or kept in check.",
    translation: "नियंत्रित किया गया",
    sentence: "Strict measures were taken to curb the rising inflation.",
    synonyms: ["Restrained", "Suppressed", "Checked"],
    antonyms: ["Released", "Unleashed", "Encouraged"],
    trick: "Curve -> You slow down (curb speed) at a curve.",
    tone: "Neutral (0)",
    collocation: "Curb the spread",
    intensitySpectrum: [
      { word: "Slowed", level: "Mild" },
      { word: "Limited", level: "Medium" },
      { word: "Curbed", level: "High" },
      { word: "Halted", level: "Extreme" }
    ]
  },
  {
    word: "Conundrum",
    partOfSpeech: "Noun",
    meaning: "A confusing and difficult problem or question.",
    translation: "पहेली / जटिल समस्या",
    sentence: "The physics problem was a conundrum even for the professor.",
    synonyms: ["Dilemma", "Puzzle", "Riddle"],
    antonyms: ["Solution", "Clarification", "Answer"],
    trick: "Drum -> Beating a drum in confusion.",
    tone: "Negative (-)",
    collocation: "Ethical Conundrum",
    intensitySpectrum: [
      { word: "Question", level: "Mild" },
      { word: "Problem", level: "Medium" },
      { word: "Conundrum", level: "High" },
      { word: "Impossibility", level: "Extreme" }
    ]
  },
  {
    word: "Enigma",
    partOfSpeech: "Noun",
    meaning: "A person or thing that is mysterious or difficult to understand.",
    translation: "रहस्य / पहेली",
    sentence: "His motives remain an enigma to everyone.",
    synonyms: ["Mystery", "Puzzle", "Riddle"],
    antonyms: ["Open book", "Known fact", "Clarity"],
    trick: "Nig (Night) + Ma -> Dark/mysterious like night.",
    tone: "Neutral (0)",
    collocation: "Remain an enigma",
    intensitySpectrum: [
      { word: "Secret", level: "Mild" },
      { word: "Mystery", level: "Medium" },
      { word: "Enigma", level: "High" },
      { word: "Incomprehensibility", level: "Extreme" }
    ]
  },
  {
    word: "Quandary",
    partOfSpeech: "Noun",
    meaning: "A state of perplexity or uncertainty over what to do in a difficult situation.",
    translation: "असमंजस / दुविधा",
    sentence: "He was in a quandary about which job offer to accept.",
    synonyms: ["Dilemma", "Predicament", "Plight"],
    antonyms: ["Certainty", "Resolution", "Confidence"],
    trick: "Wander -> Mind wandering because you don't know what to do.",
    tone: "Negative (-)",
    collocation: "In a quandary",
    intensitySpectrum: [
      { word: "Doubt", level: "Mild" },
      { word: "Confusion", level: "Medium" },
      { word: "Quandary", level: "High" },
      { word: "Paralysis", level: "Extreme" }
    ]
  },
  {
    word: "Protract",
    partOfSpeech: "Verb",
    meaning: "Prolong.",
    translation: "लंबा करना / खींचना",
    sentence: "They tried to protract the discussion to delay the vote.",
    synonyms: ["Prolong", "Extend", "Lengthen"],
    antonyms: ["Curtail", "Shorten", "Abridge"],
    trick: "Pro + Tractor -> A tractor moves slowly and pulls things long.",
    tone: "Negative (-)",
    collocation: "Protracted Negotiation",
    intensitySpectrum: [
      { word: "Continue", level: "Mild" },
      { word: "Extend", level: "Medium" },
      { word: "Protract", level: "High" },
      { word: "Drag on", "level": "Extreme" }
    ]
  },
  {
    word: "Deferred",
    partOfSpeech: "Verb/Adj",
    meaning: "Put off (an action or event) to a later time; postpone.",
    translation: "स्थगित",
    sentence: "The decision was deferred until the next meeting.",
    synonyms: ["Postponed", "Delayed", "Shelved"],
    antonyms: ["Expedited", "Hastened", "Advanced"],
    trick: "De-Fare -> Do the fare (payment) later.",
    tone: "Neutral (0)",
    collocation: "Deferred Payment",
    intensitySpectrum: [
      { word: "Paused", level: "Mild" },
      { word: "Delayed", level: "Medium" },
      { word: "Deferred", level: "High" },
      { word: "Cancelled", level: "Extreme" }
    ]
  },
  {
    word: "Redacted",
    partOfSpeech: "Verb/Adj",
    meaning: "Censored or obscured for legal or security reasons.",
    translation: "संपादित (हटाया गया)",
    sentence: "The sensitive names were redacted from the public report.",
    synonyms: ["Censored", "Obscured", "Edited"],
    antonyms: ["Revealed", "Exposed", "Published"],
    trick: "Red Act -> Paint it red/black to hide the act.",
    tone: "Neutral (0)",
    collocation: "Redacted Document",
    intensitySpectrum: [
      { word: "Edited", level: "Mild" },
      { word: "Censored", level: "Medium" },
      { word: "Redacted", level: "High" },
      { word: "Erased", level: "Extreme" }
    ]
  },
  {
    word: "Expurgate",
    partOfSpeech: "Verb",
    meaning: "Remove matter thought to be objectionable or unsuitable from a book or account.",
    translation: "शुद्ध करना / छांटना",
    sentence: "The movie was expurgated to make it suitable for children.",
    synonyms: ["Censor", "Bowdlerize", "Clean up"],
    antonyms: ["Include", "Permit", "Uncensor"],
    trick: "Purge -> To purge (remove) the bad parts.",
    tone: "Neutral (0)",
    collocation: "Expurgated Version",
    intensitySpectrum: [
      { word: "Edit", level: "Mild" },
      { word: "Clean", level: "Medium" },
      { word: "Expurgate", level: "High" },
      { word: "Sterilize", level: "Extreme" }
    ]
  },
  {
    word: "Placate",
    partOfSpeech: "Verb",
    meaning: "Make (someone) less angry or hostile.",
    translation: "शांत करना",
    sentence: "He tried to placate the angry customer with a refund.",
    synonyms: ["Pacify", "Appease", "Mollify"],
    antonyms: ["Provoke", "Antagonize", "Enrage"],
    trick: "Plate + Cake -> Give a plate of cake to calm them down.",
    tone: "Positive (+)",
    collocation: "Placate the crowd",
    intensitySpectrum: [
      { word: "Calm", level: "Mild" },
      { word: "Soothe", level: "Medium" },
      { word: "Placate", level: "High" },
      { word: "Grovel", level: "Extreme" }
    ]
  },
  {
    word: "Assuage",
    partOfSpeech: "Verb",
    meaning: "Make (an unpleasant feeling) less intense.",
    translation: "कम करना / शांत करना",
    sentence: "The letter failed to assuage her fears.",
    synonyms: ["Relieve", "Ease", "Alleviate"],
    antonyms: ["Aggravate", "Intensify", "Worsen"],
    trick: "Sausage -> Eating a sausage assuages hunger.",
    tone: "Positive (+)",
    collocation: "Assuage guilt/grief",
    intensitySpectrum: [
      { word: "Ease", level: "Mild" },
      { word: "Relieve", level: "Medium" },
      { word: "Assuage", level: "High" },
      { word: "Eliminate", level: "Extreme" }
    ]
  },
  {
    word: "Mollify",
    partOfSpeech: "Verb",
    meaning: "Appease the anger or anxiety of (someone).",
    translation: "मुलायम करना / शांत करना",
    sentence: "The manager tried to mollify the critics with promises of change.",
    synonyms: ["Appease", "Placate", "Pacify"],
    antonyms: ["Inflame", "Irritate", "Vex"],
    trick: "Molly (Soft) -> Make someone soft (calm).",
    tone: "Positive (+)",
    collocation: "Mollify the investors",
    intensitySpectrum: [
      { word: "Calm", level: "Mild" },
      { word: "Mollify", level: "Medium" },
      { word: "Pacify", level: "High" },
      { word: "Seduce", level: "Extreme" }
    ]
  },
  {
    word: "Banality",
    partOfSpeech: "Noun",
    meaning: "Unoriginality; the condition of being banal.",
    translation: "तुच्छता / घिसा-पिटापन",
    sentence: "The movie was criticized for the banality of its script.",
    synonyms: ["Cliché", "Truism", "Commonplace"],
    antonyms: ["Originality", "Novelty", "Freshness"],
    trick: "Ban All -> Ban all these boring/common ideas.",
    tone: "Negative (-)",
    collocation: "Sheer Banality",
    intensitySpectrum: [
      { word: "Commonness", level: "Mild" },
      { word: "Dullness", level: "Medium" },
      { word: "Banality", level: "High" },
      { word: "Insipidity", level: "Extreme" }
    ]
  },
  {
    word: "Platitude",
    partOfSpeech: "Noun",
    meaning: "A remark or statement, especially one with a moral content, that has been used too often to be interesting or thoughtful.",
    translation: "सामान्य बात / तुच्छ उक्ति",
    sentence: "He ended his speech with a few empty platitudes about hard work.",
    synonyms: ["Cliché", "Banality", "Truism"],
    antonyms: ["Profundity", "Insight", "Wisdom"],
    trick: "Flat -> A flat attitude/statement with no depth.",
    tone: "Negative (-)",
    collocation: "Empty Platitudes",
    intensitySpectrum: [
      { word: "Saying", level: "Mild" },
      { word: "Cliché", level: "Medium" },
      { word: "Platitude", level: "High" },
      { word: "Nonsense", level: "Extreme" }
    ]
  },
  {
    word: "Profoundness",
    partOfSpeech: "Noun",
    meaning: "Great depth of insight or quality (More commonly 'Profundity').",
    translation: "गहराई / गंभीरता",
    sentence: "She was struck by the profoundness of his silence.",
    synonyms: ["Depth", "Wisdom", "Insight"],
    antonyms: ["Superficiality", "Shallowness", "Triviality"],
    trick: "Pro + Found -> Professionals found deep meaning.",
    tone: "Positive (+)",
    collocation: "Profoundness of thought",
    intensitySpectrum: [
      { word: "Insight", level: "Mild" },
      { word: "Depth", level: "Medium" },
      { word: "Profoundness", level: "High" },
      { word: "Enlightenment", level: "Extreme" }
    ]
  },
  {
    word: "Adorn",
    partOfSpeech: "Verb",
    meaning: "Make more beautiful or attractive.",
    translation: "सजाना",
    sentence: "Paintings adorned the walls of the palace.",
    synonyms: ["Decorate", "Embellish", "Ornament"],
    antonyms: ["Disfigure", "Mar", "Strip"],
    trick: "Add + Ornament -> To add ornaments.",
    tone: "Positive (+)",
    collocation: "Adorn with jewels",
    intensitySpectrum: [
      { word: "Decorate", level: "Mild" },
      { word: "Adorn", level: "Medium" },
      { word: "Beautify", level: "High" },
      { word: "Gild", level: "Extreme" }
    ]
  },
  {
    word: "Exacerbate",
    partOfSpeech: "Verb",
    meaning: "Make (a problem, bad situation, or negative feeling) worse.",
    translation: "बिगाड़ना / भड़काना",
    sentence: "The loud music only exacerbated his headache.",
    synonyms: ["Aggravate", "Worsen", "Intensify"],
    antonyms: ["Alleviate", "Improve", "Mitigate"],
    trick: "Extra + Acerb (Bitter) -> Make it extra bitter.",
    tone: "Negative (-)",
    collocation: "Exacerbate the crisis",
    intensitySpectrum: [
      { word: "Worsen", level: "Mild" },
      { word: "Aggravate", level: "Medium" },
      { word: "Exacerbate", level: "High" },
      { word: "Inflame", level: "Extreme" }
    ]
  },
  {
    word: "Embellish",
    partOfSpeech: "Verb",
    meaning: "1. Make more attractive. 2. Make a story more interesting by adding extra details (often untrue).",
    translation: "सजाना / नमक-मिर्च लगाना",
    sentence: "He embellished the story of his trip to make it sound more dangerous.",
    synonyms: ["Decorate", "Exaggerate", "Elaborate"],
    antonyms: ["Simplify", "Deface", "Understate"],
    trick: "Bell -> Put bells on it to make it fancy.",
    tone: "Neutral (0)",
    collocation: "Embellish the truth",
    intensitySpectrum: [
      { word: "Add detail", level: "Mild" },
      { word: "Enhance", level: "Medium" },
      { word: "Embellish", level: "High" },
      { word: "Fabricate", level: "Extreme" }
    ]
  },
  {
    word: "Malaise",
    partOfSpeech: "Noun",
    meaning: "A general feeling of discomfort, illness, or uneasiness whose exact cause is difficult to identify.",
    translation: "बेचैनी / अस्वस्थता",
    sentence: "An economic malaise is affecting the entire country.",
    synonyms: ["Unease", "Discomfort", "Lassitude"],
    antonyms: ["Well-being", "Health", "Vigor"],
    trick: "Mal (Bad) + Ease -> Bad ease (No ease).",
    tone: "Negative (-)",
    collocation: "Economic Malaise",
    intensitySpectrum: [
      { word: "Unease", level: "Mild" },
      { word: "Discomfort", level: "Medium" },
      { word: "Malaise", level: "High" },
      { word: "Depression", level: "Extreme" }
    ]
  },
  {
    word: "Stagnation",
    partOfSpeech: "Noun",
    meaning: "The state of not flowing or moving; lack of activity/growth.",
    translation: "स्थिरता / जड़ता",
    sentence: "The policy led to economic stagnation and high unemployment.",
    synonyms: ["Inactivity", "Dormancy", "Stasis"],
    antonyms: ["Growth", "Flow", "Progress"],
    trick: "Stay + Nation -> A nation that stays in one place (no growth).",
    tone: "Negative (-)",
    collocation: "Market Stagnation",
    intensitySpectrum: [
      { word: "Slowness", level: "Mild" },
      { word: "Standstill", level: "Medium" },
      { word: "Stagnation", level: "High" },
      { word: "Decay", level: "Extreme" }
    ]
  },
  {
    word: "Lassitude",
    partOfSpeech: "Noun",
    meaning: "A state of physical or mental weariness; lack of energy.",
    translation: "सुस्ती / थकान",
    sentence: "She was overcome by lassitude and refused to get out of bed.",
    synonyms: ["Lethargy", "Fatigue", "Weariness"],
    antonyms: ["Vigor", "Energy", "Vitality"],
    trick: "Lassi -> Drinking Lassi makes you sleepy and lazy.",
    tone: "Negative (-)",
    collocation: "Overcome by lassitude",
    intensitySpectrum: [
      { word: "Tiredness", level: "Mild" },
      { word: "Lethargy", level: "Medium" },
      { word: "Lassitude", level: "High" },
      { word: "Exhaustion", level: "Extreme" }
    ]
  },
  {
    word: "Stasis",
    partOfSpeech: "Noun",
    meaning: "A period or state of inactivity or equilibrium.",
    translation: "संतुलन / ठहराव",
    sentence: "The company entered a period of stasis with no new products.",
    synonyms: ["Equilibrium", "Standstill", "Inactivity"],
    antonyms: ["Flux", "Change", "Movement"],
    trick: "Stay + Sis -> Sister, stay there. Don't move.",
    tone: "Neutral (0)",
    collocation: "Political Stasis",
    intensitySpectrum: [
      { word: "Pause", level: "Mild" },
      { word: "Stability", level: "Medium" },
      { word: "Stasis", level: "High" },
      { word: "Paralysis", level: "Extreme" }
    ]
  },
  {
    word: "Atrophy",
    partOfSpeech: "Verb/Noun",
    meaning: "Waste away, typically due to the degeneration of cells; decline in effectiveness.",
    translation: "क्षय होना / सूखना",
    sentence: "Muscles atrophy when they are not used for a long time.",
    synonyms: ["Wither", "Shrink", "Decay"],
    antonyms: ["Grow", "Strengthen", "Flourish"],
    trick: "A (No) + Trophy -> If you don't win trophies, your skills atrophy.",
    tone: "Negative (-)",
    collocation: "Muscle Atrophy",
    intensitySpectrum: [
      { word: "Weaken", level: "Mild" },
      { word: "Shrink", level: "Medium" },
      { word: "Atrophy", level: "High" },
      { word: "Die", level: "Extreme" }
    ]
  },
  {
    word: "Proclivity",
    partOfSpeech: "Noun",
    meaning: "A tendency to choose or do something regularly; an inclination.",
    translation: "झुकाव / प्रवृत्ति",
    sentence: "He has a proclivity for arriving late.",
    synonyms: ["Inclination", "Tendency", "Propensity"],
    antonyms: ["Aversion", "Dislike", "Antipathy"],
    trick: "Pro + Cliff -> Inclined towards the cliff (leaning forward).",
    tone: "Neutral (0)",
    collocation: "Proclivity for violence",
    intensitySpectrum: [
      { word: "Liking", level: "Mild" },
      { word: "Inclination", level: "Medium" },
      { word: "Proclivity", level: "High" },
      { word: "Addiction", level: "Extreme" }
    ]
  },
  {
    word: "Malapropism",
    partOfSpeech: "Noun",
    meaning: "The mistaken use of a word in place of a similar-sounding one, often with unintentionally amusing effect.",
    translation: "शब्द का हास्यास्पद प्रयोग",
    sentence: "Saying 'dance a flamingo' instead of 'dance a flamenco' is a malapropism.",
    synonyms: ["Misusage", "Blunder", "Solecism"],
    antonyms: ["Correctness", "Accuracy", "Precision"],
    trick: "Mal (Bad) + Proper -> Not using the proper word.",
    tone: "Neutral (0)",
    collocation: "Amusing Malapropism",
    intensitySpectrum: [
      { word: "Slip", level: "Mild" },
      { word: "Error", level: "Medium" },
      { word: "Malapropism", level: "High" },
      { word: "Absurdity", level: "Extreme" }
    ]
  },
  {
    word: "Abet",
    partOfSpeech: "Verb",
    meaning: "Encourage or assist (someone) to do something wrong, in particular, to commit a crime.",
    translation: "दुष्प्रेरित करना / साथ देना (अपराध में)",
    sentence: "He was charged with aiding and abetting the robbery.",
    synonyms: ["Assist", "Encourage", "Incite"],
    antonyms: ["Hinder", "Discourage", "Prevent"],
    trick: "A Bet -> Encouraging someone to take a bad bet.",
    tone: "Negative (-)",
    collocation: "Aid and Abet",
    intensitySpectrum: [
      { word: "Help", level: "Mild" },
      { word: "Support", level: "Medium" },
      { word: "Abet", level: "High" },
      { word: "Conspire", level: "Extreme" }
    ]
  },
  {
    word: "Suborn",
    partOfSpeech: "Verb",
    meaning: "Bribe or otherwise induce (someone) to commit an unlawful act such as perjury.",
    translation: "घूस देकर अपराध कराना",
    sentence: "The lawyer attempted to suborn the witness to lie in court.",
    synonyms: ["Bribe", "Corrupt", "Instigate"],
    antonyms: ["Deter", "Prevent", "Discourage"],
    trick: "Sub (Under) + Born -> Created (born) under the table (illegal).",
    tone: "Negative (-)",
    collocation: "Suborn perjury",
    intensitySpectrum: [
      { word: "Persuade", level: "Mild" },
      { word: "Bribe", level: "Medium" },
      { word: "Suborn", level: "High" },
      { word: "Blackmail", level: "Extreme" }
    ]
  },
  {
    word: "Deter",
    partOfSpeech: "Verb",
    meaning: "Discourage (someone) from doing something by instilling doubt or fear of the consequences.",
    translation: "रोकना / डराना",
    sentence: "Higher fines are meant to deter careless driving.",
    synonyms: ["Discourage", "Prevent", "Dissuade"],
    antonyms: ["Encourage", "Incentivize", "Promote"],
    trick: "Detour -> Making them take a detour away from the crime.",
    tone: "Neutral (0)",
    collocation: "Nuclear Deterrent",
    intensitySpectrum: [
      { word: "Warn", level: "Mild" },
      { word: "Discourage", level: "Medium" },
      { word: "Deter", level: "High" },
      { word: "Prohibit", level: "Extreme" }
    ]
  },
  {
    word: "Assimilation",
    partOfSpeech: "Noun",
    meaning: "The process of taking in and fully understanding information or ideas; becoming part of a wider group.",
    translation: "समावेश / आत्मसात",
    sentence: "The assimilation of immigrants into the local culture takes time.",
    synonyms: ["Absorption", "Integration", "Incorporation"],
    antonyms: ["Segregation", "Exclusion", "Rejection"],
    trick: "Similar -> Making things similar to the main group.",
    tone: "Neutral (0)",
    collocation: "Cultural Assimilation",
    intensitySpectrum: [
      { word: "Learning", level: "Mild" },
      { word: "Integration", level: "Medium" },
      { word: "Assimilation", level: "High" },
      { word: "Homogeneity", level: "Extreme" }
    ]
  },
  {
    word: "Acculturation",
    partOfSpeech: "Noun",
    meaning: "Assimilation to a different culture, typically the dominant one.",
    translation: "परसंस्कृतिग्रहण",
    sentence: "Acculturation often results in the loss of traditional customs.",
    synonyms: ["Assimilation", "Socialization", "Adaptation"],
    antonyms: ["Isolation", "Separation", "Segregation"],
    trick: "Add + Culture -> Adding a new culture.",
    tone: "Neutral (0)",
    collocation: "Process of acculturation",
    intensitySpectrum: [
      { word: "Contact", level: "Mild" },
      { word: "Adaptation", level: "Medium" },
      { word: "Acculturation", level: "High" },
      { word: "Conversion", level: "Extreme" }
    ]
  },
  {
    word: "Alienation",
    partOfSpeech: "Noun",
    meaning: "The state or experience of being isolated from a group or an activity to which one should belong.",
    translation: "अलगाव / बेगानापन",
    sentence: "Technology can sometimes lead to the alienation of individuals from society.",
    synonyms: ["Isolation", "Estrangement", "Detachment"],
    antonyms: ["Integration", "Belonging", "Connection"],
    trick: "Alien -> Feeling like an alien among humans.",
    tone: "Negative (-)",
    collocation: "Social Alienation",
    intensitySpectrum: [
      { word: "Distance", level: "Mild" },
      { word: "Isolation", level: "Medium" },
      { word: "Alienation", level: "High" },
      { word: "Exile", level: "Extreme" }
    ]
  },
  {
    word: "Hegemonic",
    partOfSpeech: "Adjective",
    meaning: "Ruling or dominant in a political or social context.",
    translation: "आधिपत्य / प्रधान",
    sentence: "The hegemonic power of the empire was challenged by the rebels.",
    synonyms: ["Dominant", "Supreme", "Paramount"],
    antonyms: ["Subordinate", "Weak", "Dependent"],
    trick: "Huge Money -> Who has huge money? The ruler/dominant one.",
    tone: "Neutral (0)",
    collocation: "Hegemonic Masculinity",
    intensitySpectrum: [
      { word: "Influential", level: "Mild" },
      { word: "Dominant", level: "Medium" },
      { word: "Hegemonic", level: "High" },
      { word: "Totalitarian", level: "Extreme" }
    ]
  },
  {
    word: "Ostracize",
    partOfSpeech: "Verb",
    meaning: "Exclude (someone) from a society or group.",
    translation: "बहिष्कृत करना / हुक्का-पानी बंद करना",
    sentence: "He was ostracized by the village for violating their traditions.",
    synonyms: ["Shun", "Exclude", "Ban"],
    antonyms: ["Welcome", "Accept", "Include"],
    trick: "Ostrich -> Like an ostrich hiding its head, people ignore you.",
    tone: "Negative (-)",
    collocation: "Socially Ostracized",
    intensitySpectrum: [
      { word: "Ignore", level: "Mild" },
      { word: "Reject", level: "Medium" },
      { word: "Ostracize", level: "High" },
      { word: "Banish", level: "Extreme" }
    ]
  },
  {
    word: "Pariah",
    partOfSpeech: "Noun",
    meaning: "An outcast.",
    translation: "अछूत / बहिष्कृत व्यक्ति",
    sentence: "His scandal made him a pariah in the business community.",
    synonyms: ["Outcast", "Leper", "Undesirable"],
    antonyms: ["Icon", "Insider", "Member"],
    trick: "Paraya (Hindi) -> Paraya means not ours/outsider.",
    tone: "Negative (-)",
    collocation: "Social Pariah",
    intensitySpectrum: [
      { word: "Outsider", level: "Mild" },
      { word: "Reject", level: "Medium" },
      { word: "Pariah", level: "High" },
      { word: "Enemy", level: "Extreme" }
    ]
  },
  {
    word: "Sequester",
    partOfSpeech: "Verb",
    meaning: "Isolate or hide away.",
    translation: "एकांत में रखना / जब्त करना",
    sentence: "The jury was sequestered to prevent outside influence.",
    synonyms: ["Isolate", "Seclude", "Segregate"],
    antonyms: ["Reveal", "Integrate", "Uncover"],
    trick: "Seek West -> Go west to hide away.",
    tone: "Neutral (0)",
    collocation: "Sequester Carbon",
    intensitySpectrum: [
      { word: "Separate", level: "Mild" },
      { word: "Hide", level: "Medium" },
      { word: "Sequester", level: "High" },
      { word: "Imprison", level: "Extreme" }
    ]
  },
  {
    word: "Shun",
    partOfSpeech: "Verb",
    meaning: "Persistently avoid, ignore, or reject (someone or something).",
    translation: "किनारा करना / त्यागना",
    sentence: "After the argument, she shunned him at parties.",
    synonyms: ["Avoid", "Evade", "Eschew"],
    antonyms: ["Seek", "Embrace", "Welcome"],
    trick: "Sun -> Stay out of the sun (avoid it).",
    tone: "Negative (-)",
    collocation: "Shun publicity",
    intensitySpectrum: [
      { word: "Avoid", level: "Mild" },
      { word: "Ignore", level: "Medium" },
      { word: "Shun", level: "High" },
      { word: "Boycott", level: "Extreme" }
    ]
  },
  {
    word: "Disenchanted",
    partOfSpeech: "Adjective",
    meaning: "Disappointed by someone or something previously respected or admired.",
    translation: "मोहभंग",
    sentence: "Voters are becoming disenchanted with the current government.",
    synonyms: ["Disillusioned", "Disappointed", "Cynical"],
    antonyms: ["Enchanted", "Enthusiastic", "Captivated"],
    trick: "Dis + Chant -> The magic spell (chant) is broken.",
    tone: "Negative (-)",
    collocation: "Disenchanted voters",
    intensitySpectrum: [
      { word: "Bored", level: "Mild" },
      { word: "Disappointed", level: "Medium" },
      { word: "Disenchanted", level: "High" },
      { word: "Embittered", level: "Extreme" }
    ]
  },
  {
    word: "Cynical",
    partOfSpeech: "Adjective",
    meaning: "Believing that people are motivated by self-interest; distrustful of human sincerity.",
    translation: "कुटिल / निंदक / संशयवादी",
    sentence: "He is cynical about politicians' promises.",
    synonyms: ["Skeptical", "Distrustful", "Pessimistic"],
    antonyms: ["Optimistic", "Trusting", "Idealistic"],
    trick: "Sin -> Seeing 'sin' in everyone's actions.",
    tone: "Negative (-)",
    collocation: "Cynical attitude",
    intensitySpectrum: [
      { word: "Doubtful", level: "Mild" },
      { word: "Skeptical", level: "Medium" },
      { word: "Cynical", level: "High" },
      { word: "Misanthropic", level: "Extreme" }
    ]
  },
  {
    word: "Jaded",
    partOfSpeech: "Adjective",
    meaning: "Tired, bored, or lacking enthusiasm, typically after having had too much of something.",
    translation: "थका हुआ / उबा हुआ",
    sentence: "The jaded travelers were not impressed by the scenery.",
    synonyms: ["Sated", "Weary", "Blasé"],
    antonyms: ["Fresh", "Enthusiastic", "Keen"],
    trick: "Faded -> Energy has faded away.",
    tone: "Negative (-)",
    collocation: "Jaded palate",
    intensitySpectrum: [
      { word: "Bored", level: "Mild" },
      { word: "Tired", level: "Medium" },
      { word: "Jaded", level: "High" },
      { word: "Burned out", level: "Extreme" }
    ]
  },
  {
    word: "Zealous",
    partOfSpeech: "Adjective",
    meaning: "Having or showing great energy or enthusiasm in pursuit of a cause or an objective.",
    translation: "उत्साही / कट्टर",
    sentence: "The detective was zealous in his pursuit of the truth.",
    synonyms: ["Fervent", "Passionate", "Fanatical"],
    antonyms: ["Apathetic", "Indifferent", "Lethargic"],
    trick: "Jealous? No, Zealous -> Not envious, but energetic.",
    tone: "Positive (+)",
    collocation: "Zealous supporter",
    intensitySpectrum: [
      { word: "Keen", level: "Mild" },
      { word: "Enthusiastic", level: "Medium" },
      { word: "Zealous", level: "High" },
      { word: "Fanatical", level: "Extreme" }
    ]
  },
  {
    word: "Fallacious",
    partOfSpeech: "Adjective",
    meaning: "Based on a mistaken belief.",
    translation: "भ्रामक / तर्कहीन",
    sentence: "His argument was based on fallacious reasoning.",
    synonyms: ["False", "Erroneous", "Misleading"],
    antonyms: ["True", "Correct", "Valid"],
    trick: "False -> Fallacious sounds like False.",
    tone: "Negative (-)",
    collocation: "Fallacious Argument",
    intensitySpectrum: [
      { word: "Incorrect", level: "Mild" },
      { word: "Wrong", level: "Medium" },
      { word: "Fallacious", level: "High" },
      { word: "Delusional", level: "Extreme" }
    ]
  },
  {
    word: "Spurious",
    partOfSpeech: "Adjective",
    meaning: "Not being what it purports to be; false or fake.",
    translation: "जाली / बनावटी",
    sentence: "He made spurious claims about his military service.",
    synonyms: ["Bogus", "Fake", "Counterfeit"],
    antonyms: ["Genuine", "Authentic", "Valid"],
    trick: "Spur -> Like a spur-of-the-moment lie (fake).",
    tone: "Negative (-)",
    collocation: "Spurious Allegations",
    intensitySpectrum: [
      { word: "Dubious", level: "Mild" },
      { word: "False", level: "Medium" },
      { word: "Spurious", level: "High" },
      { word: "Fraudulent", level: "Extreme" }
    ]
  },
  {
    word: "Mendacious",
    partOfSpeech: "Adjective",
    meaning: "Not telling the truth; lying.",
    translation: "झूठा / मिथ्यावादी",
    sentence: "The propaganda was dismissed as mendacious nonsense.",
    synonyms: ["Dishonest", "Deceitful", "Untruthful"],
    antonyms: ["Truthful", "Honest", "Veracious"],
    trick: "Mend -> Someone who has to 'mend' (fix) their story constantly.",
    tone: "Negative (-)",
    collocation: "Mendacious Press",
    intensitySpectrum: [
      { word: "Insincere", level: "Mild" },
      { word: "Dishonest", level: "Medium" },
      { word: "Mendacious", level: "High" },
      { word: "Perfidious", level: "Extreme" }
    ]
  },
  {
    word: "Forthright",
    partOfSpeech: "Adjective",
    meaning: "Direct and outspoken; straightforward and honest.",
    translation: "स्पष्टवादी",
    sentence: "She was forthright about her objections to the plan.",
    synonyms: ["Frank", "Direct", "Candid"],
    antonyms: ["Secretive", "Evasive", "Dishonest"],
    trick: "Forth + Right -> Coming forth and being right (honest).",
    tone: "Positive (+)",
    collocation: "Forthright Answer",
    intensitySpectrum: [
      { word: "Open", level: "Mild" },
      { word: "Direct", level: "Medium" },
      { word: "Forthright", level: "High" },
      { word: "Blunt", level: "Extreme" }
    ]
  },
  {
    word: "Impede",
    partOfSpeech: "Verb",
    meaning: "Delay or prevent (someone or something) by obstructing them.",
    translation: "बाधा डालना",
    sentence: "Fallen trees impeded the flow of traffic.",
    synonyms: ["Hinder", "Obstruct", "Hamper"],
    antonyms: ["Facilitate", "Assist", "Expedite"],
    trick: "Im + Ped (Foot) -> Putting shackles on feet to stop walking.",
    tone: "Negative (-)",
    collocation: "Impede progress",
    intensitySpectrum: [
      { word: "Slow", level: "Mild" },
      { word: "Hinder", level: "Medium" },
      { word: "Impede", level: "High" },
      { word: "Block", level: "Extreme" }
    ]
  },
  {
    word: "Deterrents",
    partOfSpeech: "Noun",
    meaning: "A thing that discourages or is intended to discourage someone from doing something.",
    translation: "निवारक / रोकनेवाला",
    sentence: "Cameras operate as a deterrent to crime.",
    synonyms: ["Disincentive", "Obstacle", "Damper"],
    antonyms: ["Incentive", "Encouragement", "Stimulus"],
    trick: "Deter -> Agent that deters.",
    tone: "Neutral (0)",
    collocation: "Effective Deterrent",
    intensitySpectrum: [
      { word: "Warning", level: "Mild" },
      { word: "Obstacle", level: "Medium" },
      { word: "Deterrent", level: "High" },
      { word: "Barrier", level: "Extreme" }
    ]
  },
  {
    word: "Runaway",
    partOfSpeech: "Adjective",
    meaning: "Becoming uncontrollable.",
    translation: "बेकाबू",
    sentence: "Runaway inflation destroyed the economy.",
    synonyms: ["Uncontrolled", "Rampant", "Unchecked"],
    antonyms: ["Controlled", "Stable", "Moderate"],
    trick: "Run Away -> It ran away and you can't catch it.",
    tone: "Negative (-)",
    collocation: "Runaway Inflation/Victory",
    intensitySpectrum: [
      { word: "Fast", level: "Mild" },
      { word: "Unchecked", level: "Medium" },
      { word: "Runaway", level: "High" },
      { word: "Catastrophic", level: "Extreme" }
    ]
  },
  {
    word: "Predicament",
    partOfSpeech: "Noun",
    meaning: "A difficult, unpleasant, or embarrassing situation.",
    translation: "विकट स्थिति",
    sentence: "He found himself in a predicament when he lost his wallet abroad.",
    synonyms: ["Dilemma", "Plight", "Quagmire"],
    antonyms: ["Solution", "Blessing", "Benefit"],
    trick: "Predict -> You didn't predict this bad situation.",
    tone: "Negative (-)",
    collocation: "Financial Predicament",
    intensitySpectrum: [
      { word: "Issue", level: "Mild" },
      { word: "Problem", level: "Medium" },
      { word: "Predicament", level: "High" },
      { word: "Crisis", level: "Extreme" }
    ]
  },
  {
    word: "Juxtapose",
    partOfSpeech: "Verb",
    meaning: "Place or deal with close together for contrasting effect.",
    translation: "पास-पास रखना (तुलना के लिए)",
    sentence: "The exhibition juxtaposes Picasso's early drawings with his later works.",
    synonyms: ["Contrast", "Collocate", "Compare"],
    antonyms: ["Separate", "Disconnect", "Isolate"],
    trick: "Just + Pose -> Just pose them next to each other.",
    tone: "Neutral (0)",
    collocation: "Juxtapose images",
    intensitySpectrum: [
      { word: "Place", level: "Mild" },
      { word: "Pair", level: "Medium" },
      { word: "Juxtapose", level: "High" },
      { word: "Clash", level: "Extreme" }
    ]
  },
  {
    word: "Stride",
    partOfSpeech: "Noun/Verb",
    meaning: "1. Walk with long steps. 2. Progress toward a goal.",
    translation: "लंबी चाल / प्रगति",
    sentence: "We have made great strides in cancer research.",
    synonyms: ["Progress", "Advance", "Headway"],
    antonyms: ["Regression", "Retreat", "Step back"],
    trick: "Ride -> Walk so fast it's like a ride.",
    tone: "Positive (+)",
    collocation: "Make strides",
    intensitySpectrum: [
      { word: "Step", level: "Mild" },
      { word: "Walk", level: "Medium" },
      { word: "Stride", level: "High" },
      { word: "Sprint", level: "Extreme" }
    ]
  },
  {
    word: "Headway",
    partOfSpeech: "Noun",
    meaning: "Forward movement or progress, especially in difficult circumstances.",
    translation: "प्रगति",
    sentence: "We are making little headway against the strong wind.",
    synonyms: ["Progress", "Advance", "Inroads"],
    antonyms: ["Regression", "Setback", "Stagnation"],
    trick: "Head + Way -> Moving your head forward along the way.",
    tone: "Positive (+)",
    collocation: "Make headway",
    intensitySpectrum: [
      { word: "Movement", level: "Mild" },
      { word: "Progress", level: "Medium" },
      { word: "Headway", level: "High" },
      { word: "Breakthrough", level: "Extreme" }
    ]
  },
  {
    word: "Dwindle",
    partOfSpeech: "Verb",
    meaning: "Diminish gradually in size, amount, or strength.",
    translation: "घटना / क्षीण होना",
    sentence: "His savings dwindled after he lost his job.",
    synonyms: ["Diminish", "Decrease", "Shrink"],
    antonyms: ["Increase", "Grow", "Flourish"],
    trick: "Wind -> Like sand blowing away in the wind.",
    tone: "Negative (-)",
    collocation: "Supplies dwindled",
    intensitySpectrum: [
      { word: "Drop", level: "Mild" },
      { word: "Decrease", level: "Medium" },
      { word: "Dwindle", level: "High" },
      { word: "Vanish", level: "Extreme" }
    ]
  },
  {
    word: "Wither",
    partOfSpeech: "Verb",
    meaning: "Become dry and shriveled; lose vitality.",
    translation: "मुरझाना",
    sentence: "The plants withered in the intense heat.",
    synonyms: ["Shrivel", "Fade", "Wilt"],
    antonyms: ["Bloom", "Flourish", "Thrive"],
    trick: "Weather -> Bad weather makes plants wither.",
    tone: "Negative (-)",
    collocation: "Wither on the vine",
    intensitySpectrum: [
      { word: "Fade", level: "Mild" },
      { word: "Wilt", level: "Medium" },
      { word: "Wither", level: "High" },
      { word: "Perish", level: "Extreme" }
    ]
  },
  {
    word: "Wane",
    partOfSpeech: "Verb",
    meaning: "Decrease in vigor, power, or extent; become weaker.",
    translation: "पतन होना / कम होना",
    sentence: "His influence began to wane as he got older.",
    synonyms: ["Decline", "Diminish", "Decrease"],
    antonyms: ["Wax", "Grow", "Increase"],
    trick: "Rain -> Like rain stopping slowly.",
    tone: "Negative (-)",
    collocation: "Moon wanes",
    intensitySpectrum: [
      { word: "Dip", level: "Mild" },
      { word: "Decline", level: "Medium" },
      { word: "Wane", level: "High" },
      { word: "Fade out", level: "Extreme" }
    ]
  },
  {
    word: "Ebb",
    partOfSpeech: "Verb",
    meaning: "Move away from the land; recede; gradually lessen.",
    translation: "भाटा / उतार",
    sentence: "His confidence began to ebb as the interview progressed.",
    synonyms: ["Recede", "Retreat", "Subside"],
    antonyms: ["Flow", "Surge", "Increase"],
    trick: "Web -> A spider web is thin/weak.",
    tone: "Negative (-)",
    collocation: "Ebb and flow",
    intensitySpectrum: [
      { word: "Recede", level: "Mild" },
      { word: "Lessen", level: "Medium" },
      { word: "Ebb", level: "High" },
      { word: "Disappear", level: "Extreme" }
    ]
  },
  {
    word: "Diatribe",
    partOfSpeech: "Noun",
    meaning: "A forceful and bitter verbal attack.",
    translation: "कठोर निंदा",
    sentence: "He launched into a long diatribe against the government.",
    synonyms: ["Tirade", "Harangue", "Invective"],
    antonyms: ["Praise", "Eulogy", "Tribute"],
    trick: "Die + Tribe -> A speech wishing a whole tribe would die.",
    tone: "Negative (-)",
    collocation: "Bitter Diatribe",
    intensitySpectrum: [
      { word: "Criticism", level: "Mild" },
      { word: "Rant", level: "Medium" },
      { word: "Diatribe", level: "High" },
      { word: "Vitriol", level: "Extreme" }
    ]
  },
  {
    word: "Invective",
    partOfSpeech: "Noun",
    meaning: "Insulting, abusive, or highly critical language.",
    translation: "गाली-गलौज / फटकार",
    sentence: "The debate turned into a stream of invective and insults.",
    synonyms: ["Abuse", "Insults", "Vitriol"],
    antonyms: ["Praise", "Compliment", "Flattery"],
    trick: "Infect -> Words that infect the mind like poison.",
    tone: "Negative (-)",
    collocation: "Stream of Invective",
    intensitySpectrum: [
      { word: "Insult", level: "Mild" },
      { word: "Abuse", level: "Medium" },
      { word: "Invective", level: "High" },
      { word: "Obscenity", level: "Extreme" }
    ]
  },
  {
    word: "Philippic",
    partOfSpeech: "Noun",
    meaning: "A bitter attack or denunciation, especially a verbal one.",
    translation: "निंदात्मक भाषण",
    sentence: "The senator delivered a scathing philippic against the corruption bill.",
    synonyms: ["Tirade", "Diatribe", "Broadside"],
    antonyms: ["Encomium", "Eulogy", "Praise"],
    trick: "Philip -> Ancient speeches attacking King Philip of Macedon.",
    tone: "Negative (-)",
    collocation: "Launch a philippic",
    intensitySpectrum: [
      { word: "Critique", level: "Mild" },
      { word: "Denunciation", level: "Medium" },
      { word: "Philippic", level: "High" },
      { word: "Anathema", level: "Extreme" }
    ]
  },
  {
    word: "Jeremiad",
    partOfSpeech: "Noun",
    meaning: "A long, mournful complaint or lamentation; a list of woes.",
    translation: "विलाप / शोकगीत",
    sentence: "His book is basically a jeremiad about the decline of modern society.",
    synonyms: ["Lament", "Complaint", "Tirade"],
    antonyms: ["Celebration", "Rejoicing", "Praise"],
    trick: "Jeremiah -> The Prophet Jeremiah wrote the book of Lamentations (sadness).",
    tone: "Negative (-)",
    collocation: "Long Jeremiad",
    intensitySpectrum: [
      { word: "Complaint", level: "Mild" },
      { word: "Gripe", level: "Medium" },
      { word: "Jeremiad", level: "High" },
      { word: "Wailing", level: "Extreme" }
    ]
  },
  {
    word: "Harangue",
    partOfSpeech: "Noun/Verb",
    meaning: "A lengthy and aggressive speech.",
    translation: "उग्र भाषण",
    sentence: "He delivered a violent harangue to his followers.",
    synonyms: ["Lecture", "Berate", "Rant"],
    antonyms: ["Chat", "Whisper", "Discussion"],
    trick: "Harass -> A speech that harasses the audience.",
    tone: "Negative (-)",
    collocation: "Harangue the crowd",
    intensitySpectrum: [
      { word: "Speech", level: "Mild" },
      { word: "Lecture", level: "Medium" },
      { word: "Harangue", level: "High" },
      { word: "Assault", level: "Extreme" }
    ]
  },
  {
    word: "Screed",
    partOfSpeech: "Noun",
    meaning: "A long speech or piece of writing, typically one regarded as tedious.",
    translation: "लंबा-चौड़ा भाषण / लेख",
    sentence: "He published a ranting screed against the media.",
    synonyms: ["Tirade", "Rant", "Monologue"],
    antonyms: ["Summary", "Brief", "Note"],
    trick: "Scroll + Read -> A scroll you have to read forever.",
    tone: "Negative (-)",
    collocation: "Angry Screed",
    intensitySpectrum: [
      { word: "Article", level: "Mild" },
      { word: "Essay", level: "Medium" },
      { word: "Screed", level: "High" },
      { word: "Manifesto", level: "Extreme" }
    ]
  },
  {
    word: "Prodigious",
    partOfSpeech: "Adjective",
    meaning: "Remarkably or impressively great in extent, size, or degree.",
    translation: "विशाल / अद्भुत",
    sentence: "He had a prodigious appetite for both food and knowledge.",
    synonyms: ["Enormous", "Huge", "Immense"],
    antonyms: ["Small", "Tiny", "Insignificant"],
    trick: "Prodigy -> A child prodigy has prodigious talent.",
    tone: "Positive (+)",
    collocation: "Prodigious Talent",
    intensitySpectrum: [
      { word: "Big", level: "Mild" },
      { word: "Huge", level: "Medium" },
      { word: "Prodigious", level: "High" },
      { word: "Colossal", level: "Extreme" }
    ]
  },
  {
    word: "Stupendous",
    partOfSpeech: "Adjective",
    meaning: "Extremely impressive.",
    translation: "अतिविशाल / शानदार",
    sentence: "The team achieved a stupendous victory.",
    synonyms: ["Amazing", "Astounding", "Phenomenal"],
    antonyms: ["Ordinary", "Average", "Unimpressive"],
    trick: "Stupidly Good -> So good it makes you look stupid (stunned).",
    tone: "Positive (+)",
    collocation: "Stupendous Achievement",
    intensitySpectrum: [
      { word: "Good", level: "Mild" },
      { word: "Great", level: "Medium" },
      { word: "Stupendous", level: "High" },
      { word: "Miraculous", level: "Extreme" }
    ]
  },
  {
    word: "Paltry",
    partOfSpeech: "Adjective",
    meaning: "Small or meager.",
    translation: "तुच्छ / नगण्य",
    sentence: "He received a paltry sum for his hard work.",
    synonyms: ["Measly", "Trivial", "Insignificant"],
    antonyms: ["Substantial", "Considerable", "Generous"],
    trick: "Poultry -> Chicken feed (very small amount).",
    tone: "Negative (-)",
    collocation: "Paltry sum",
    intensitySpectrum: [
      { word: "Small", level: "Mild" },
      { word: "Meager", level: "Medium" },
      { word: "Paltry", level: "High" },
      { word: "Worthless", level: "Extreme" }
    ]
  },
  {
    word: "Quixotic",
    partOfSpeech: "Adjective",
    meaning: "Exceedingly idealistic; unrealistic and impractical.",
    translation: "अवास्तविक / कल्पनाशील",
    sentence: "His quixotic plan to end all war was doomed to fail.",
    synonyms: ["Idealistic", "Romantic", "Impractical"],
    antonyms: ["Pragmatic", "Realistic", "Practical"],
    trick: "Don Quixote -> Character who fought windmills thinking they were giants.",
    tone: "Neutral (0)",
    collocation: "Quixotic quest",
    intensitySpectrum: [
      { word: "Dreamy", level: "Mild" },
      { word: "Idealistic", level: "Medium" },
      { word: "Quixotic", level: "High" },
      { word: "Delusional", level: "Extreme" }
    ]
  },
  {
    word: "Utopian",
    partOfSpeech: "Adjective",
    meaning: "Modeled on or aiming for a state in which everything is perfect; idealistic.",
    translation: "आदर्शलोक / रामराज्य",
    sentence: "The socialist vision was dismissed as a utopian dream.",
    synonyms: ["Idealistic", "Visionary", "Perfect"],
    antonyms: ["Dystopian", "Realistic", "Cynical"],
    trick: "Top -> A world at the 'top' level of perfection.",
    tone: "Positive (+)",
    collocation: "Utopian Society",
    intensitySpectrum: [
      { word: "Hopeful", level: "Mild" },
      { word: "Ideal", level: "Medium" },
      { word: "Utopian", level: "High" },
      { word: "Impossible", level: "Extreme" }
    ]
  },
  {
    word: "Chimerical",
    partOfSpeech: "Adjective",
    meaning: "Existing only as the product of unchecked imagination; fantastically improbable.",
    translation: "काल्पनिक / असंभव",
    sentence: "His schemes for making money were purely chimerical.",
    synonyms: ["Illusionary", "Fanciful", "Imaginary"],
    antonyms: ["Real", "Tangible", "Probable"],
    trick: "Chimera -> Mythical monster (Lion+Goat+Snake). Impossible to exist.",
    tone: "Negative (-)",
    collocation: "Chimerical idea",
    intensitySpectrum: [
      { word: "Unlikely", level: "Mild" },
      { word: "Fanciful", level: "Medium" },
      { word: "Chimerical", level: "High" },
      { word: "Absurd", level: "Extreme" }
    ]
  },
  {
    word: "Sagacious",
    partOfSpeech: "Adjective",
    meaning: "Having or showing keen mental discernment and good judgment.",
    translation: "बुद्धिमान / दूरदर्शी",
    sentence: "The sagacious leader guided the country through the crisis.",
    synonyms: ["Wise", "Shrewd", "Insightful"],
    antonyms: ["Foolish", "Ignorant", "Stupid"],
    trick: "Sage -> A sage (saint) is wise.",
    tone: "Positive (+)",
    collocation: "Sagacious advice",
    intensitySpectrum: [
      { word: "Smart", level: "Mild" },
      { word: "Wise", level: "Medium" },
      { word: "Sagacious", level: "High" },
      { word: "Omniscient", level: "Extreme" }
    ]
  },
  {
    word: "Clandestine",
    partOfSpeech: "Adjective",
    meaning: "Kept secret or done secretively, especially because illicit.",
    translation: "गुप्त / अवैध",
    sentence: "They held a clandestine meeting to plan the coup.",
    synonyms: ["Secret", "Covert", "Stealthy"],
    antonyms: ["Open", "Public", "Overt"],
    trick: "Clan + Destiny -> The clan's destiny is a secret.",
    tone: "Neutral (0)",
    collocation: "Clandestine operation",
    intensitySpectrum: [
      { word: "Private", level: "Mild" },
      { word: "Secret", level: "Medium" },
      { word: "Clandestine", level: "High" },
      { word: "Top Secret", level: "Extreme" }
    ]
  },
  {
    word: "Furtive",
    partOfSpeech: "Adjective",
    meaning: "Attempting to avoid notice or attention, typically because of guilt.",
    translation: "चोरी-छिपे / संदिग्ध",
    sentence: "He cast a furtive glance at the clock during the boring meeting.",
    synonyms: ["Secretive", "Surreptitious", "Sneaky"],
    antonyms: ["Open", "Honest", "Direct"],
    trick: "Fugitive -> A fugitive has to be furtive (sneaky).",
    tone: "Negative (-)",
    collocation: "Furtive glance",
    intensitySpectrum: [
      { word: "Shy", level: "Mild" },
      { word: "Secretive", level: "Medium" },
      { word: "Furtive", level: "High" },
      { word: "Paranoid", level: "Extreme" }
    ]
  },
  {
    word: "Vicarious",
    partOfSpeech: "Adjective",
    meaning: "Experienced in the imagination through the feelings or actions of another person.",
    translation: "प्रतिनिधिक / परोक्ष",
    sentence: "He gets a vicarious thrill from watching horror movies.",
    synonyms: ["Indirect", "Second-hand", "Surrogate"],
    antonyms: ["Direct", "First-hand", "Personal"],
    trick: "Vice-Captain -> The Vice-Captain acts for the Captain (Second-hand).",
    tone: "Neutral (0)",
    collocation: "Vicarious pleasure",
    intensitySpectrum: [
      { word: "Observant", level: "Mild" },
      { word: "Sympathetic", level: "Medium" },
      { word: "Vicarious", level: "High" },
      { word: "Identical", level: "Extreme" }
    ]
  },
  {
    word: "Arcane",
    partOfSpeech: "Adjective",
    meaning: "Understood by few; mysterious or secret.",
    translation: "गुप्त / रहस्यमयी",
    sentence: "The professor specialized in arcane rituals of ancient civilizations.",
    synonyms: ["Esoteric", "Obscure", "Recondite"],
    antonyms: ["Common", "Known", "Exoteric"],
    trick: "Are + Cane -> Walking with a cane implies an old, mysterious wizard.",
    tone: "Neutral (0)",
    collocation: "Arcane knowledge",
    intensitySpectrum: [
      { word: "Unknown", level: "Mild" },
      { word: "Secret", level: "Medium" },
      { word: "Arcane", level: "High" },
      { word: "Occult", level: "Extreme" }
    ]
  },
  {
    word: "Rancor",
    partOfSpeech: "Noun",
    meaning: "Bitterness or resentfulness, especially when long-standing.",
    translation: "विद्वेष / शत्रुता",
    sentence: "He spoke without rancor despite the insults thrown at him.",
    synonyms: ["Bitterness", "Spite", "Malice"],
    antonyms: ["Amity", "Goodwill", "Friendliness"],
    trick: "Rank -> A rank (rotten) smell creates bitterness.",
    tone: "Negative (-)",
    collocation: "Deep-seated rancor",
    intensitySpectrum: [
      { word: "Dislike", level: "Mild" },
      { word: "Resentment", level: "Medium" },
      { word: "Rancor", level: "High" },
      { word: "Hatred", level: "Extreme" }
    ]
  },
  {
    word: "Facade",
    partOfSpeech: "Noun",
    meaning: "1. The face of a building. 2. A deceptive outward appearance.",
    translation: "मुखौटा / बाहरी दिखावा",
    sentence: "Behind her cheerful facade, she was deeply unhappy.",
    synonyms: ["Exterior", "Front", "Pretense"],
    antonyms: ["Reality", "Interior", "Truth"],
    trick: "Face + Aid -> A fake face to aid in hiding the truth.",
    tone: "Neutral (0)",
    collocation: "Crumbling facade",
    intensitySpectrum: [
      { word: "Look", level: "Mild" },
      { word: "Front", level: "Medium" },
      { word: "Facade", level: "High" },
      { word: "Deception", level: "Extreme" }
    ]
  },
  {
    word: "Abash",
    partOfSpeech: "Verb",
    meaning: "Make (someone) feel embarrassed, disconcerted, or ashamed.",
    translation: "लज्जित करना",
    sentence: "He was not abashed by the criticism.",
    synonyms: ["Embarrass", "Ashamed", "Humiliate"],
    antonyms: ["Encourage", "Embolden", "Reassure"],
    trick: "Bash -> If you get bashed (hit) publicly, you feel abashed.",
    tone: "Negative (-)",
    collocation: "Stand abashed",
    intensitySpectrum: [
      { word: "Shy", level: "Mild" },
      { word: "Embarrass", level: "Medium" },
      { word: "Abash", level: "High" },
      { word: "Mortify", level: "Extreme" }
    ]
  },
  {
    word: "Conspicuous",
    partOfSpeech: "Adjective",
    meaning: "Standing out so as to be clearly visible.",
    translation: "सुस्पष्ट / विशिष्ट",
    sentence: "She felt conspicuous in her bright red dress.",
    synonyms: ["Noticeable", "Prominent", "Striking"],
    antonyms: ["Inconspicuous", "Hidden", "Obscure"],
    trick: "Can See Pic -> You 'Can See the Pic' clearly because it stands out.",
    tone: "Neutral (0)",
    collocation: "Conspicuous consumption",
    intensitySpectrum: [
      { word: "Visible", level: "Mild" },
      { word: "Noticeable", level: "Medium" },
      { word: "Conspicuous", level: "High" },
      { word: "Glaring", level: "Extreme" }
    ]
  },
  {
    word: "Panacea",
    partOfSpeech: "Noun",
    meaning: "A solution or remedy for all difficulties or diseases.",
    translation: "रामबाण / सर्वरोगहर",
    sentence: "Technology is not a panacea for all our educational problems.",
    synonyms: ["Cure-all", "Universal remedy", "Elixir"],
    antonyms: ["Poison", "Toxin", "Problem"],
    trick: "Pan (All) + Ace -> An Ace card that wins 'all' games.",
    tone: "Positive (+)",
    collocation: "Universal panacea",
    intensitySpectrum: [
      { word: "Help", level: "Mild" },
      { word: "Remedy", level: "Medium" },
      { word: "Cure", level: "High" },
      { word: "Panacea", level: "Extreme" }
    ]
  },
  {
    word: "Modicum",
    partOfSpeech: "Noun",
    meaning: "A small quantity of a particular thing, especially something considered desirable or valuable.",
    translation: "अल्प मात्रा",
    sentence: "He didn't even have a modicum of common sense.",
    synonyms: ["Particle", "Speck", "Fragment"],
    antonyms: ["Abundance", "Lot", "Excess"],
    trick: "Moderate -> A moderate/small amount.",
    tone: "Neutral (0)",
    collocation: "Modicum of truth",
    intensitySpectrum: [
      { word: "Drop", level: "Mild" },
      { word: "Bit", level: "Medium" },
      { word: "Modicum", level: "High" },
      { word: "Trace", level: "Extreme" }
    ]
  },
  {
    word: "Frugal",
    partOfSpeech: "Adjective",
    meaning: "Sparing or economical with regard to money or food.",
    translation: "किफायती / मितव्ययी",
    sentence: "He led a frugal life, saving every penny.",
    synonyms: ["Thrifty", "Economical", "Prudent"],
    antonyms: ["Extravagant", "Wasteful", "Lavish"],
    trick: "Fruit + Gal -> A girl who eats only fruits to save money.",
    tone: "Positive (+)",
    collocation: "Frugal lifestyle",
    intensitySpectrum: [
      { word: "Careful", level: "Mild" },
      { word: "Economical", level: "Medium" },
      { word: "Frugal", level: "High" },
      { word: "Miserly", level: "Extreme" }
    ]
  },
  {
    word: "Quintessential",
    partOfSpeech: "Adjective",
    meaning: "Representing the most perfect or typical example of a quality or class.",
    translation: "सर्वोत्कृष्ट / ठेठ",
    sentence: "He is the quintessential gentleman.",
    synonyms: ["Typical", "Archetypal", "Classic"],
    antonyms: ["Atypical", "Substandard", "Inferior"],
    trick: "Queen + Essential -> Essential qualities of a Queen (Perfect).",
    tone: "Positive (+)",
    collocation: "Quintessential example",
    intensitySpectrum: [
      { word: "Good", level: "Mild" },
      { word: "Typical", level: "Medium" },
      { word: "Quintessential", level: "High" },
      { word: "Perfect", level: "Extreme" }
    ]
  },
  {
    word: "Aver",
    partOfSpeech: "Verb",
    meaning: "State or assert to be the case.",
    translation: "दृढ़ता से कहना",
    sentence: "He averred that he was innocent of the allegations.",
    synonyms: ["Assert", "Declare", "Claim"],
    antonyms: ["Deny", "Disclaim", "Refute"],
    trick: "Ver (Truth) -> To state as verify/truth.",
    tone: "Neutral (0)",
    collocation: "Averred that",
    intensitySpectrum: [
      { word: "Say", level: "Mild" },
      { word: "State", level: "Medium" },
      { word: "Aver", "level": "High" },
      { word: "Swear", "level": "Extreme" }
    ]
  },
  {
    word: "Fetid",
    partOfSpeech: "Adjective",
    meaning: "Smelling extremely unpleasant.",
    translation: "बदबूदार",
    sentence: "The fetid smell of the swamp made us nauseous.",
    synonyms: ["Stinking", "Malodorous", "Rank"],
    antonyms: ["Fragrant", "Aromatic", "Perfumed"],
    trick: "Feet -> Smelly feet are fetid.",
    tone: "Negative (-)",
    collocation: "Fetid odor",
    intensitySpectrum: [
      { word: "Smelly", level: "Mild" },
      { word: "Stinky", level: "Medium" },
      { word: "Fetid", level: "High" },
      { word: "Noxious", level: "Extreme" }
    ]
  },
  {
    word: "Dulcet",
    partOfSpeech: "Adjective",
    meaning: "(Especially of sound) sweet and soothing.",
    translation: "मधुर / आनंदमय",
    sentence: "The dulcet tones of the cello calmed the baby.",
    synonyms: ["Sweet", "Melodious", "Soothing"],
    antonyms: ["Harsh", "Grating", "Cacophonous"],
    trick: "Dil (Heart) + Set -> Sets the heart at ease.",
    tone: "Positive (+)",
    collocation: "Dulcet tones",
    intensitySpectrum: [
      { word: "Pleasant", level: "Mild" },
      { word: "Sweet", level: "Medium" },
      { word: "Dulcet", level: "High" },
      { word: "Angelic", level: "Extreme" }
    ]
  },
  {
    word: "Remission",
    partOfSpeech: "Noun",
    meaning: "1. Cancellation of a debt/penalty. 2. Diminution of disease symptoms.",
    translation: "छूट / रोगमुक्ति",
    sentence: "The cancer has gone into remission.",
    synonyms: ["Cancellation", "Reduction", "Suspension"],
    antonyms: ["Increase", "Aggravation", "Imposition"],
    trick: "Re-Mission -> Mission cancelled/paused.",
    tone: "Positive (+)",
    collocation: "Cancer remission",
    intensitySpectrum: [
      { word: "Pause", level: "Mild" },
      { word: "Reduction", level: "Medium" },
      { word: "Remission", level: "High" },
      { word: "Cure", level: "Extreme" }
    ]
  },
  {
    word: "Skirmish",
    partOfSpeech: "Noun",
    meaning: "A minor fight or battle.",
    translation: "झड़प",
    sentence: "Border skirmishes were reported between the two countries.",
    synonyms: ["Clash", "Conflict", "Scuffle"],
    antonyms: ["Peace", "Accord", "War"],
    trick: "Skirt -> Fighting over the skirt (boundary) of a territory.",
    tone: "Negative (-)",
    collocation: "Border skirmish",
    intensitySpectrum: [
      { word: "Argument", level: "Mild" },
      { word: "Scuffle", level: "Medium" },
      { word: "Skirmish", level: "High" },
      { word: "Battle", level: "Extreme" }
    ]
  },
  {
    word: "Mercurial",
    partOfSpeech: "Adjective",
    meaning: "Subject to sudden or unpredictable changes of mood or mind.",
    translation: "अस्थिर / चंचल",
    sentence: "His mercurial temperament made him difficult to work with.",
    synonyms: ["Volatile", "Capricious", "Temperamental"],
    antonyms: ["Stable", "Steady", "Constant"],
    trick: "Mercury -> Liquid metal that moves fast and changes shape.",
    tone: "Negative (-)",
    collocation: "Mercurial nature",
    intensitySpectrum: [
      { word: "Moody", level: "Mild" },
      { word: "Changeable", level: "Medium" },
      { word: "Mercurial", level: "High" },
      { word: "Bipolar", level: "Extreme" }
    ]
  },
  {
    word: "Indolent",
    partOfSpeech: "Adjective",
    meaning: "Wanting to avoid activity or exertion; lazy.",
    translation: "आलसी / अकर्मण्य",
    sentence: "The indolent employee was fired for sleeping on the job.",
    synonyms: ["Lazy", "Slothful", "Lethargic"],
    antonyms: ["Industrious", "Energetic", "Active"],
    trick: "In + Dole -> Someone who lives on 'dole' (unemployment money) and doesn't work.",
    tone: "Negative (-)",
    collocation: "Indolent lifestyle",
    intensitySpectrum: [
      { word: "Relaxed", level: "Mild" },
      { word: "Lazy", level: "Medium" },
      { word: "Indolent", level: "High" },
      { word: "Slothful", level: "Extreme" }
    ]
  },
  {
    word: "Mantle",
    partOfSpeech: "Noun",
    meaning: "1. A cloak/covering. 2. An important role or responsibility.",
    translation: "लबादा / उत्तरदायित्व",
    sentence: "He assumed the mantle of leadership after his father died.",
    synonyms: ["Role", "Responsibility", "Cloak"],
    antonyms: ["None"],
    trick: "Man + Tall -> A tall man wearing a long cloak (mantle).",
    tone: "Neutral (0)",
    collocation: "Assume the mantle",
    intensitySpectrum: [
      { word: "Cover", "level": "Mild" },
      { "word": "Cloak", "level": "Medium" },
      { "word": "Mantle", "level": "High" },
      { "word": "Burden", "level": "Extreme" }
    ]
  },
  {
    word: "Obdurate",
    partOfSpeech: "Adjective",
    meaning: "Stubbornly refusing to change one's opinion or course of action.",
    translation: "हठी / जिद्दी",
    sentence: "Despite the evidence, he remained obdurate in his denial.",
    synonyms: ["Stubborn", "Obstinate", "Intransigent"],
    antonyms: ["Compliant", "Flexible", "Yielding"],
    trick: "Dura (Hard) -> Hard headed and durable in opinion.",
    tone: "Negative (-)",
    collocation: "Obdurate refusal",
    intensitySpectrum: [
      { word: "Firm", "level": "Mild" },
      { word: "Stubborn", "level": "Medium" },
      { word: "Obdurate", "level": "High" },
      { word: "Pig-headed", "level": "Extreme" }
    ]
  },
  {
    word: "Doyen",
    partOfSpeech: "Noun",
    meaning: "The most respected or prominent person in a particular field.",
    translation: "वरिष्ठ सदस्य",
    sentence: "He is considered the doyen of political journalism.",
    synonyms: ["Veteran", "Master", "Dean"],
    antonyms: ["Novice", "Beginner", "Amateur"],
    trick: "Do + Yen -> Someone who has to 'Doing' it for 'Yens' (Years).",
    tone: "Positive (+)",
    collocation: "Doyen of industry",
    intensitySpectrum: [
      { word: "Senior", "level": "Mild" },
      { word: "Expert", "level": "Medium" },
      { word: "Doyen", "level": "High" },
      { word: "Legend", "level": "Extreme" }
    ]
  },
  {
    word: "Recondite",
    partOfSpeech: "Adjective",
    meaning: "(Of a subject or knowledge) little known; abstruse.",
    translation: "गूढ़ / गंभीर",
    sentence: "The book is full of recondite information.",
    synonyms: ["Obscure", "Arcane", "Esoteric"],
    antonyms: ["Simple", "Common", "Obvious"],
    trick: "Re-conduct -> Research that is hard to conduct again.",
    tone: "Neutral (0)",
    collocation: "Recondite subject",
    intensitySpectrum: [
      { word: "Hard", "level": "Mild" },
      { word: "Complex", "level": "Medium" },
      { word: "Recondite", "level": "High" },
      { word: "Incomprehensible", "level": "Extreme" }
    ]
  },
  {
    word: "Hamlet",
    partOfSpeech: "Noun",
    meaning: "A small settlement, generally smaller than a village.",
    translation: "छोटा गाँव / पुरवा",
    sentence: "They lived in a quiet hamlet in the hills.",
    synonyms: ["Village", "Settlement", "Community"],
    antonyms: ["City", "Metropolis", "Town"],
    trick: "Helmet -> A small covering; a small village.",
    tone: "Neutral (0)",
    collocation: "Rural hamlet",
    intensitySpectrum: [
      { word: "House", "level": "Mild" },
      { word: "Hamlet", "level": "Medium" },
      { word: "Village", "level": "High" },
      { word: "Town", "level": "Extreme" }
    ]
  },
  {
    word: "Creche",
    partOfSpeech: "Noun",
    meaning: "A nursery where babies and young children are cared for during the working day.",
    translation: "शिशु-गृह",
    sentence: "The company provides a creche for employees' children.",
    synonyms: ["Nursery", "Daycare", "Playgroup"],
    antonyms: ["None"],
    trick: "Crash -> A place where kids 'crash' (sleep/play) while parents work.",
    tone: "Neutral (0)",
    collocation: "Office creche",
    intensitySpectrum: [
      { word: "Babysitter", "level": "Mild" },
      { word: "Nursery", "level": "Medium" },
      { word: "Creche", "level": "High" },
      { word: "School", "level": "Extreme" }
    ]
  },
  {
    word: "Esoteric",
    partOfSpeech: "Adjective",
    meaning: "Intended for or likely to be understood by only a small number of people with specialized knowledge.",
    translation: "गुह्य / गोपनीय",
    sentence: "He has an esoteric collection of antique stamps.",
    synonyms: ["Arcane", "Obscure", "Private"],
    antonyms: ["Common", "Public", "Familiar"],
    trick: "Iso -> Isolated knowledge for few people.",
    tone: "Neutral (0)",
    collocation: "Esoteric rituals",
    intensitySpectrum: [
      { word: "Niche", "level": "Mild" },
      { word: "Specialized", "level": "Medium" },
      { word: "Esoteric", "level": "High" },
      { word: "Secret", "level": "Extreme" }
    ]
  },
  {
    word: "Maestro",
    partOfSpeech: "Noun",
    meaning: "A distinguished musician, especially a conductor of classical music.",
    translation: "उस्ताद / संगीत-ज्ञ",
    sentence: "The maestro conducted the orchestra with passion.",
    synonyms: ["Master", "Conductor", "Virtuoso"],
    antonyms: ["Amateur", "Novice", "Student"],
    trick: "Master -> Maestro sounds like Master.",
    tone: "Positive (+)",
    collocation: "Musical maestro",
    intensitySpectrum: [
      { word: "Musician", "level": "Mild" },
      { word: "Expert", "level": "Medium" },
      { word: "Virtuoso", "level": "High" },
      { word: "Maestro", "level": "Extreme" }
    ]
  },
  {
    word: "Fawning",
    partOfSpeech: "Adjective",
    meaning: "Displaying exaggerated flattery or affection.",
    translation: "चापलूसी करना",
    sentence: "The fawning waiter annoyed the customers.",
    synonyms: ["Sycophantic", "Obsequious", "Flattering"],
    antonyms: ["Critical", "Domineering", "Aloof"],
    trick: "Fan -> A fan acting like a servant to a star.",
    tone: "Negative (-)",
    collocation: "Fawning attention",
    intensitySpectrum: [
      { word: "Nice", "level": "Mild" },
      { word: "Complimentary", "level": "Medium" },
      { word: "Fawning", "level": "High" },
      { word: "Groveling", "level": "Extreme" }
    ]
  },
  {
    word: "Shoal",
    partOfSpeech: "Noun",
    meaning: "A large number of fish swimming together.",
    translation: "मछलियों का झुंड",
    sentence: "A shoal of fish darted through the water.",
    synonyms: ["School", "Group", "Mass"],
    antonyms: ["Individual", "Solitary"],
    trick: "Shore -> Fish gather in shoals near the shore.",
    tone: "Neutral (0)",
    collocation: "Shoal of herring",
    intensitySpectrum: [
      { word: "Couple", "level": "Mild" },
      { word: "Group", "level": "Medium" },
      { word: "Shoal", "level": "High" },
      { word: "Swarm", "level": "Extreme" }
    ]
  },
  {
    word: "Bevy",
    partOfSpeech: "Noun",
    meaning: "A large group of people or things of a particular kind (often women/birds).",
    translation: "झुंड / मंडली",
    sentence: "A bevy of reporters waited outside the court.",
    synonyms: ["Group", "Crowd", "Cluster"],
    antonyms: ["Individual", "One"],
    trick: "Heavy -> A heavy crowd of people.",
    tone: "Neutral (0)",
    collocation: "Bevy of beauties",
    intensitySpectrum: [
      { word: "Few", "level": "Mild" },
      { word: "Bunch", "level": "Medium" },
      { word: "Bevy", "level": "High" },
      { word: "Horde", "level": "Extreme" }
    ]
  },
  {
    word: "Facsimile",
    partOfSpeech: "Noun",
    meaning: "An exact copy, especially of written or printed material.",
    translation: "हूबहू नकल",
    sentence: "He produced a facsimile of the original manuscript.",
    synonyms: ["Copy", "Replica", "Reproduction"],
    antonyms: ["Original", "Prototype", "Master"],
    trick: "Fax -> Fax machines send facsimiles.",
    tone: "Neutral (0)",
    collocation: "Digital facsimile",
    intensitySpectrum: [
      { word: "Likeness", "level": "Mild" },
      { word: "Copy", "level": "Medium" },
      { word: "Facsimile", "level": "High" },
      { word: "Clone", "level": "Extreme" }
    ]
  },
  {
    word: "Caucus",
    partOfSpeech: "Noun",
    meaning: "A meeting of the members of a legislative body who are members of a particular political party.",
    translation: "दल की बैठक",
    sentence: "The party held a caucus to select their candidate.",
    synonyms: ["Meeting", "Assembly", "Convention"],
    antonyms: ["None"],
    trick: "Discuss -> They 'Discuss' in a Cau-'cus'.",
    tone: "Neutral (0)",
    collocation: "Party caucus",
    intensitySpectrum: [
      { word: "Gathering", "level": "Mild" },
      { word: "Meeting", "level": "Medium" },
      { word: "Caucus", "level": "High" },
      { word: "Congress", "level": "Extreme" }
    ]
  },
  {
    word: "Cortege",
    partOfSpeech: "Noun",
    meaning: "A solemn procession, especially for a funeral.",
    translation: "जुलूस (शव यात्रा)",
    sentence: "The funeral cortege moved slowly through the streets.",
    synonyms: ["Procession", "Retinue", "Entourage"],
    antonyms: ["Dispersal"],
    trick: "Cart -> A cart carrying a body in a procession.",
    tone: "Negative (-)",
    collocation: "Funeral cortege",
    intensitySpectrum: [
      { word: "Line", "level": "Mild" },
      { word: "Procession", "level": "Medium" },
      { word: "Cortege", "level": "High" },
      { word: "Parade", "level": "Extreme" }
    ]
  },
  {
    word: "Facile",
    partOfSpeech: "Adjective",
    meaning: "1. Appearing neat and comprehensive only by ignoring the true complexities of an issue; superficial. 2. Easily achieved.",
    translation: "सुगम / सतही",
    sentence: "He offered a facile solution to a complex problem.",
    synonyms: ["Simplistic", "Superficial", "Shallow"],
    antonyms: ["Profound", "Thorough", "Complex"],
    trick: "Face -> Only looking at the face (surface), ignoring the depth.",
    tone: "Negative (-)",
    collocation: "Facile argument",
    intensitySpectrum: [
      { word: "Easy", "level": "Mild" },
      { word: "Simple", "level": "Medium" },
      { word: "Facile", "level": "High" },
      { word: "Mindless", "level": "Extreme" }
    ]
  },
  {
    word: "Polyglot",
    partOfSpeech: "Adjective/Noun",
    meaning: "Knowing or using several languages.",
    translation: "बहुभाषी",
    sentence: "As a polyglot, she could travel anywhere in Europe easily.",
    synonyms: ["Multilingual", "Linguist"],
    antonyms: ["Monolingual"],
    trick: "Poly (Many) + Glot (Throat/Tongue) -> Many tongues.",
    tone: "Positive (+)",
    collocation: "Polyglot society",
    intensitySpectrum: [
      { word: "Bilingual", "level": "Mild" },
      { word: "Trilingual", "level": "Medium" },
      { word: "Polyglot", "level": "High" },
      { word: "Hyperpolyglot", "level": "Extreme" }
    ]
  },
  {
    word: "Debonair",
    partOfSpeech: "Adjective",
    meaning: "(Of a man) confident, stylish, and charming.",
    translation: "खुशमिजाज / आकर्षक",
    sentence: "The debonair actor waved to his fans.",
    synonyms: ["Suave", "Urbane", "Charming"],
    antonyms: ["Unsophisticated", "Awkward", "Clumsy"],
    trick: "De + Bone + Air -> Good posture (bone) and an air of confidence.",
    tone: "Positive (+)",
    collocation: "Debonair gentleman",
    intensitySpectrum: [
      { word: "Polite", "level": "Mild" },
      { word: "Charming", "level": "Medium" },
      { word: "Debonair", "level": "High" },
      { word: "Dashing", "level": "Extreme" }
    ]
  },
  {
    word: "Tantamount",
    partOfSpeech: "Adjective",
    meaning: "Equivalent in seriousness to; virtually the same as.",
    translation: "समान / बराबर",
    sentence: "His silence was tantamount to a confession.",
    synonyms: ["Equivalent", "Synonymous", "Equal"],
    antonyms: ["Different", "Opposite", "Unrelated"],
    trick: "Amount -> The same amount (Equal).",
    tone: "Neutral (0)",
    collocation: "Tantamount to treason",
    intensitySpectrum: [
      { word: "Like", "level": "Mild" },
      { word: "Similar", "level": "Medium" },
      { word: "Tantamount", "level": "High" },
      { word: "Identical", "level": "Extreme" }
    ]
  },
  {
    word: "Odium",
    partOfSpeech: "Noun",
    meaning: "General or widespread hatred or disgust directed toward someone as a result of their actions.",
    translation: "घृणा / बदनामी",
    sentence: "He faced the odium of the public after the scandal.",
    synonyms: ["Hatred", "Disgust", "Repugnance"],
    antonyms: ["Admiration", "Affection", "Approval"],
    trick: "Odor -> A bad odor makes people hate/disgust you.",
    tone: "Negative (-)",
    collocation: "Public odium",
    intensitySpectrum: [
      { word: "Dislike", "level": "Mild" },
      { word: "Contempt", "level": "Medium" },
      { word: "Odium", "level": "High" },
      { word: "Abhorrence", "level": "Extreme" }
    ]
  },
  {
    word: "Avowed",
    partOfSpeech: "Adjective",
    meaning: "That has been asserted, admitted, or stated publicly.",
    translation: "स्वीकृत / घोषित",
    sentence: "He is an avowed vegetarian.",
    synonyms: ["Declared", "Admitted", "Self-confessed"],
    antonyms: ["Secret", "Denyed", "Closeted"],
    trick: "Vow -> Took a vow publicly.",
    tone: "Neutral (0)",
    collocation: "Avowed enemy",
    intensitySpectrum: [
      { word: "Open", "level": "Mild" },
      { word: "Stated", "level": "Medium" },
      { word: "Avowed", "level": "High" },
      { word: "Sworn", "level": "Extreme" }
    ]
  },
  {
    word: "Querulous",
    partOfSpeech: "Adjective",
    meaning: "Complaining in a petulant or whining manner.",
    translation: "विलापी / शिकायती",
    sentence: "He became querulous and demanding in his old age.",
    synonyms: ["Whining", "Cantankerous", "Peevish"],
    antonyms: ["Cheerful", "Patient", "Stoic"],
    trick: "Query -> Always raising a 'query' or complaint about everything.",
    tone: "Negative (-)",
    collocation: "Querulous voice",
    intensitySpectrum: [
      { word: "Unhappy", level: "Mild" },
      { word: "Complaining", level: "Medium" },
      { word: "Querulous", level: "High" },
      { word: "Unbearable", level: "Extreme" }
    ]
  },
  {
    word: "Equable",
    partOfSpeech: "Adjective",
    meaning: "Not easily disturbed or angered; calm and even-tempered.",
    translation: "शांत / एक समान",
    sentence: "Her equable temperament made her a perfect mediator.",
    synonyms: ["Calm", "Composed", "Placid"],
    antonyms: ["Temperamental", "Moody", "Excitable"],
    trick: "Equal -> Mood stays 'equal' (stable) in all situations.",
    tone: "Positive (+)",
    collocation: "Equable climate/temperament",
    intensitySpectrum: [
      { word: "Steady", level: "Mild" },
      { word: "Calm", level: "Medium" },
      { word: "Equable", level: "High" },
      { word: "Unflappable", level: "Extreme" }
    ]
  },
  {
    word: "Irascible",
    partOfSpeech: "Adjective",
    meaning: "Having or showing a tendency to be easily angered.",
    translation: "चिड़चिड़ा / क्रोधी",
    sentence: "The irascible old man shouted at the kids playing on his lawn.",
    synonyms: ["Irritable", "Short-tempered", "Testy"],
    antonyms: ["Good-natured", "Affable", "Placid"],
    trick: "Rascal -> A rascal makes you irascible (angry).",
    tone: "Negative (-)",
    collocation: "Irascible nature",
    intensitySpectrum: [
      { word: "Grumpy", level: "Mild" },
      { word: "Irritable", level: "Medium" },
      { word: "Irascible", level: "High" },
      { word: "Volatile", level: "Extreme" }
    ]
  },
  {
    word: "Peevish",
    partOfSpeech: "Adjective",
    meaning: "Easily irritated, especially by unimportant things.",
    translation: "चिड़चिड़ा / तुनकमिज़ाज",
    sentence: "Lack of sleep made him peevish and impatient.",
    synonyms: ["Fretful", "Petulant", "Crabby"],
    antonyms: ["Agreeable", "Friendly", "Patient"],
    trick: "Pea -> Getting annoyed by a small 'pea' under the mattress.",
    tone: "Negative (-)",
    collocation: "Peevish complaint",
    intensitySpectrum: [
      { word: "Annoyed", level: "Mild" },
      { word: "Peevish", level: "Medium" },
      { word: "Cranky", level: "High" },
      { word: "Furious", level: "Extreme" }
    ]
  },
  {
    word: "Fretful",
    partOfSpeech: "Adjective",
    meaning: "Feeling or expressing distress or irritation.",
    translation: "बेचैन / झुँझलाया हुआ",
    sentence: "The baby was tired and fretful.",
    synonyms: ["Restless", "Uneasy", "Agitated"],
    antonyms: ["Calm", "Content", "Peaceful"],
    trick: "Fret -> Don't fret (worry); fretting makes you fretful.",
    tone: "Negative (-)",
    collocation: "Fretful sleep",
    intensitySpectrum: [
      { word: "Concerned", level: "Mild" },
      { word: "Worried", level: "Medium" },
      { word: "Fretful", level: "High" },
      { word: "Distraught", level: "Extreme" }
    ]
  },
  {
    word: "Fractious",
    partOfSpeech: "Adjective",
    meaning: "(Typically of children) irritable and quarrelsome.",
    translation: "झगड़ालू / चिड़चिड़ा",
    sentence: "The long journey made the children fractious.",
    synonyms: ["Grumpy", "Grouchy", "Unruly"],
    antonyms: ["Obedient", "Affable", "Happy"],
    trick: "Fracture -> Relationships 'fracture' easily when you are quarrelsome.",
    tone: "Negative (-)",
    collocation: "Fractious crowd",
    intensitySpectrum: [
      { word: "Restless", level: "Mild" },
      { word: "Irritable", level: "Medium" },
      { word: "Fractious", level: "High" },
      { word: "Uncontrollable", "level": "Extreme" }
    ]
  },
  {
    word: "Petulant",
    partOfSpeech: "Adjective",
    meaning: "(Of a person or their manner) childishly sulky or bad-tempered.",
    translation: "ढीठ / तुनकमिज़ाज",
    sentence: "He stormed out of the room like a petulant child.",
    synonyms: ["Sulky", "Moody", "Peevish"],
    antonyms: ["Good-humored", "Mature", "Resilient"],
    trick: "Pet -> Acting like a spoiled 'pet' or child who didn't get a treat.",
    tone: "Negative (-)",
    collocation: "Petulant behavior",
    intensitySpectrum: [
      { word: "Upset", level: "Mild" },
      { word: "Sulky", level: "Medium" },
      { word: "Petulant", level: "High" },
      { word: "Tantrum-throwing", "level": "Extreme" }
    ]
  },
  {
    word: "Amenable",
    partOfSpeech: "Adjective",
    meaning: "Open and responsive to suggestion; easily persuaded or controlled.",
    translation: "आज्ञाकारी / जिम्मेदार",
    sentence: "They are usually amenable to our advice.",
    synonyms: ["Compliant", "Manageable", "Agreeable"],
    antonyms: ["Stubborn", "Recalcitrant", "Defiant"],
    trick: "Amen -> Someone who says 'Amen' (Yes) to everything.",
    tone: "Positive (+)",
    collocation: "Amenable to reason",
    intensitySpectrum: [
      { word: "Open", level: "Mild" },
      { word: "Willing", level: "Medium" },
      { word: "Amenable", level: "High" },
      { word: "Submissive", level: "Extreme" }
    ]
  },
  {
    word: "Temerity",
    partOfSpeech: "Noun",
    meaning: "Excessive confidence or boldness; audacity.",
    translation: "दुस्साहस",
    sentence: "No one had the temerity to question his decision.",
    synonyms: ["Audacity", "Boldness", "Nerve"],
    antonyms: ["Shyness", "Bashfulness", "Caution"],
    trick: "Team -> It takes 'temerity' to lead a team into a fire.",
    tone: "Negative (-)",
    collocation: "Have the temerity",
    intensitySpectrum: [
      { word: "Confidence", level: "Mild" },
      { word: "Boldness", level: "Medium" },
      { word: "Temerity", level: "High" },
      { word: "Recklessness", "level": "Extreme" }
    ]
  },
  {
    word: "Prudence",
    partOfSpeech: "Noun",
    meaning: "The quality of being prudent; cautiousness.",
    translation: "विवेक / सावधानी",
    sentence: "We need to exercise prudence in our financial planning.",
    synonyms: ["Wisdom", "Caution", "Foresight"],
    antonyms: ["Recklessness", "Folly", "Impulsiveness"],
    trick: "Prude -> A 'prude' person is very careful and avoids risks/scandals.",
    tone: "Positive (+)",
    collocation: "Financial prudence",
    intensitySpectrum: [
      { word: "Care", level: "Mild" },
      { word: "Caution", level: "Medium" },
      { word: "Prudence", level: "High" },
      { word: "Wisdom", "level": "Extreme" }
    ]
  },
  {
    word: "Insolent",
    partOfSpeech: "Adjective",
    meaning: "Showing a rude and arrogant lack of respect.",
    translation: "बदतमीज़ / धृष्ट",
    sentence: "The student was suspended for his insolent behavior towards the teacher.",
    synonyms: ["Impertinent", "Impudent", "Cheeky"],
    antonyms: ["Polite", "Respectful", "Courteous"],
    trick: "Insult -> An insolent person 'insults' everyone.",
    tone: "Negative (-)",
    collocation: "Insolent tone",
    intensitySpectrum: [
      { word: "Rude", level: "Mild" },
      { word: "Disrespectful", level: "Medium" },
      { word: "Insolent", level: "High" },
      { word: "Abusive", level: "Extreme" }
    ]
  },
  {
    word: "Contumacious",
    partOfSpeech: "Adjective",
    meaning: "(Especially of a defendant's behavior) stubbornly or willfully disobedient to authority.",
    translation: "अवज्ञाकारी / ढीठ",
    sentence: "The judge punished the contumacious witness for refusing to answer.",
    synonyms: ["Rebellious", "Defiant", "Recalcitrant"],
    antonyms: ["Obedient", "Submissive", "Compliant"],
    trick: "Continue -> Continuing to argue with the judge.",
    tone: "Negative (-)",
    collocation: "Contumacious conduct",
    intensitySpectrum: [
      { word: "Stubborn", level: "Mild" },
      { word: "Disobedient", level: "Medium" },
      { word: "Contumacious", level: "High" },
      { word: "Mutinous", level: "Extreme" }
    ]
  },
  {
    word: "Obsequious",
    partOfSpeech: "Adjective",
    meaning: "Obedient or attentive to an excessive or servile degree.",
    translation: "चापलूसी करनेवाला / जी-हुज़ूरिया",
    sentence: "The obsequious assistant agreed with everything the boss said.",
    synonyms: ["Servile", "Fawning", "Sycophantic"],
    antonyms: ["Domineering", "Assertive", "Independent"],
    trick: "Sequence -> Follows the 'sequence' of orders blindly like a robot.",
    tone: "Negative (-)",
    collocation: "Obsequious bow",
    intensitySpectrum: [
      { word: "Helpful", level: "Mild" },
      { word: "Compliant", level: "Medium" },
      { word: "Obsequious", level: "High" },
      { word: "Groveling", level: "Extreme" }
    ]
  },
  {
    word: "Abysmal",
    partOfSpeech: "Adjective",
    meaning: "Extremely bad; appalling.",
    translation: "बेहद खराब / रसातल",
    sentence: "The quality of service at the hotel was abysmal.",
    synonyms: ["Dreadful", "Awful", "Terrible"],
    antonyms: ["Superb", "Excellent", "Outstanding"],
    trick: "Abyss -> Like falling into a bottomless pit (Abyss).",
    tone: "Negative (-)",
    collocation: "Abysmal performance",
    intensitySpectrum: [
      { word: "Poor", level: "Mild" },
      { word: "Bad", level: "Medium" },
      { word: "Abysmal", level: "High" },
      { word: "Catastrophic", level: "Extreme" }
    ]
  },
  {
    word: "Preponderance",
    partOfSpeech: "Noun",
    meaning: "The quality or fact of being greater in number, quantity, or importance.",
    translation: "प्रधानता / बाहुल्य",
    sentence: "There is a preponderance of female students in the class.",
    synonyms: ["Majority", "Prevalence", "Dominance"],
    antonyms: ["Minority", "Scarcity", "Paucity"],
    trick: "Ponder -> Ponderous means heavy. Preponderance means heavier/greater weight.",
    tone: "Neutral (0)",
    collocation: "Preponderance of evidence",
    intensitySpectrum: [
      { word: "More", level: "Mild" },
      { word: "Majority", level: "Medium" },
      { word: "Preponderance", level: "High" },
      { word: "Monopoly", level: "Extreme" }
    ]
  },
  {
    word: "Prevalence",
    partOfSpeech: "Noun",
    meaning: "The fact or condition of being prevalent; commonness.",
    translation: "प्रसार / व्यापकता",
    sentence: "The prevalence of obesity is a major health concern.",
    synonyms: ["Commonness", "Frequency", "Ubiquity"],
    antonyms: ["Rarity", "Uncommonness", "Infrequency"],
    trick: "Prevail -> To win/spread everywhere. If it prevails, it has prevalence.",
    tone: "Neutral (0)",
    collocation: "High prevalence",
    intensitySpectrum: [
      { word: "Presence", level: "Mild" },
      { word: "Frequency", level: "Medium" },
      { word: "Prevalence", level: "High" },
      { word: "Ubiquity", level: "Extreme" }
    ]
  },
  {
    word: "Ascendancy",
    partOfSpeech: "Noun",
    meaning: "Occupation of a position of dominant power or influence.",
    translation: "प्रभुत्व / चढ़ाई",
    sentence: "The party is slowly gaining ascendancy in the region.",
    synonyms: ["Dominance", "Supremacy", "Sovereignty"],
    antonyms: ["Subordination", "Decline", "Fall"],
    trick: "Ascend -> Going up to the top position.",
    tone: "Positive (+)",
    collocation: "Gain ascendancy",
    intensitySpectrum: [
      { word: "Influence", level: "Mild" },
      { word: "Control", level: "Medium" },
      { word: "Ascendancy", level: "High" },
      { word: "Supremacy", level: "Extreme" }
    ]
  },
  {
    word: "Pugnacious",
    partOfSpeech: "Adjective",
    meaning: "Eager or quick to argue, quarrel, or fight.",
    translation: "झगड़ालू / लड़ाकू",
    sentence: "The pugnacious little boy was always getting into fights.",
    synonyms: ["Combative", "Aggressive", "Belligerent"],
    antonyms: ["Peaceable", "Friendly", "Conciliatory"],
    trick: "Pug -> A Pug dog might look small but can be pugnacious (fighter).",
    tone: "Negative (-)",
    collocation: "Pugnacious mood",
    intensitySpectrum: [
      { word: "Assertive", level: "Mild" },
      { word: "Aggressive", level: "Medium" },
      { word: "Pugnacious", level: "High" },
      { word: "Belligerent", level: "Extreme" }
    ]
  },

  {
    "word": "Armistice",
    "partOfSpeech": "Noun",
    "meaning": "An agreement made by opposing sides in a war to stop fighting for a certain time; a truce.",
    "translation": "युद्धविराम",
    "sentence": "The armistice was signed on November 11, ending the hostilities.",
    "synonyms": [
      "Truce",
      "Ceasefire",
      "Peace"
    ],
    "antonyms": [
      "War",
      "Hostility",
      "Conflict"
    ],
    "trick": "Arm + Is + Ice -> Arms (Weapons) are put on Ice (Frozen/Stopped).",
    "tone": "Positive (+)",
    "collocation": "Sign an armistice",
    "intensitySpectrum": [
      {
        "word": "Pause",
        "level": "Mild"
      },
      {
        "word": "Ceasefire",
        "level": "Medium"
      },
      {
        "word": "Armistice",
        "level": "High"
      },
      {
        "word": "Treaty",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Ruckus",
    "partOfSpeech": "Noun",
    "meaning": "A disturbance or commotion.",
    "translation": "हंगामा / शोरगुल",
    "sentence": "The protesters caused a ruckus outside the city hall.",
    "synonyms": [
      "Commotion",
      "Uproar",
      "Fracas"
    ],
    "antonyms": [
      "Calm",
      "Peace",
      "Order"
    ],
    "trick": "Raavan + Kus (Kushti) -> Like a wrestling match causing noise.",
    "tone": "Negative (-)",
    "collocation": "Cause a ruckus",
    "intensitySpectrum": [
      {
        "word": "Noise",
        "level": "Mild"
      },
      {
        "word": "Disturbance",
        "level": "Medium"
      },
      {
        "word": "Ruckus",
        "level": "High"
      },
      {
        "word": "Riot",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Fracas",
    "partOfSpeech": "Noun",
    "meaning": "A noisy disturbance or quarrel.",
    "translation": "कलह / दंगा",
    "sentence": "He was injured in a drunken fracas at the bar.",
    "synonyms": [
      "Brawl",
      "Scuffle",
      "Melee"
    ],
    "antonyms": [
      "Harmony",
      "Agreement",
      "Peace"
    ],
    "trick": "Fracture -> A fight that causes fractures.",
    "tone": "Negative (-)",
    "collocation": "Drunken fracas",
    "intensitySpectrum": [
      {
        "word": "Argument",
        "level": "Mild"
      },
      {
        "word": "Scuffle",
        "level": "Medium"
      },
      {
        "word": "Fracas",
        "level": "High"
      },
      {
        "word": "Mayhem",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Rebarbative",
    "partOfSpeech": "Adjective",
    "meaning": "Unattractive and objectionable.",
    "translation": "अरुचिकर / अप्रिय",
    "sentence": "I found his rebarbative attitude impossible to deal with.",
    "synonyms": [
      "Repellent",
      "Repulsive",
      "Unpleasant"
    ],
    "antonyms": [
      "Attractive",
      "Pleasant",
      "Appealing"
    ],
    "trick": "Barbed Wire -> Something prickly and repellent like barbed wire.",
    "tone": "Negative (-)",
    "collocation": "Rebarbative nature",
    "intensitySpectrum": [
      {
        "word": "Unpleasant",
        "level": "Mild"
      },
      {
        "word": "Off-putting",
        "level": "Medium"
      },
      {
        "word": "Rebarbative",
        "level": "High"
      },
      {
        "word": "Abhorrent",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Ineluctable",
    "partOfSpeech": "Adjective",
    "meaning": "Unable to be resisted or avoided; inescapable.",
    "translation": "अनिवार्य / अपरिहार्य",
    "sentence": "The ineluctable conclusion was that the company had to close.",
    "synonyms": [
      "Unavoidable",
      "Inevitable",
      "Inescapable"
    ],
    "antonyms": [
      "Avoidable",
      "Preventable",
      "Uncertain"
    ],
    "trick": "In (Not) + Elect (Choose) -> You cannot choose to avoid it.",
    "tone": "Neutral (0)",
    "collocation": "Ineluctable fate",
    "intensitySpectrum": [
      {
        "word": "Likely",
        "level": "Mild"
      },
      {
        "word": "Probable",
        "level": "Medium"
      },
      {
        "word": "Ineluctable",
        "level": "High"
      },
      {
        "word": "Destined",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Stifle",
    "partOfSpeech": "Verb",
    "meaning": "1. Make (someone) unable to breathe properly. 2. Restrain (a reaction) or stop oneself acting.",
    "translation": "दबाना / दम घोंटना",
    "sentence": "She tried to stifle a yawn during the meeting.",
    "synonyms": [
      "Suppress",
      "Smother",
      "Choke"
    ],
    "antonyms": [
      "Encourage",
      "Release",
      "Vent"
    ],
    "trick": "Stiff -> Make something stiff/stop moving.",
    "tone": "Negative (-)",
    "collocation": "Stifle dissent/yawn",
    "intensitySpectrum": [
      {
        "word": "Hide",
        "level": "Mild"
      },
      {
        "word": "Restrain",
        "level": "Medium"
      },
      {
        "word": "Stifle",
        "level": "High"
      },
      {
        "word": "Suffocate",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Apoplectic",
    "partOfSpeech": "Adjective",
    "meaning": "Overcome with anger; extremely indignant.",
    "translation": "आग बबूला / अत्यंत क्रुद्ध",
    "sentence": "He was apoplectic with rage when he saw the damage.",
    "synonyms": [
      "Furious",
      "Enraged",
      "Incensed"
    ],
    "antonyms": [
      "Calm",
      "Pleased",
      "Delighted"
    ],
    "trick": "Pop -> So angry a vein is about to 'pop'.",
    "tone": "Negative (-)",
    "collocation": "Apoplectic with rage",
    "intensitySpectrum": [
      {
        "word": "Angry",
        "level": "Mild"
      },
      {
        "word": "Furious",
        "level": "Medium"
      },
      {
        "word": "Apoplectic",
        "level": "High"
      },
      {
        "word": "Homicidal",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Lachrymose",
    "partOfSpeech": "Adjective",
    "meaning": "Tearful or given to weeping.",
    "translation": "रोनेवाला / अश्रुपूर्ण",
    "sentence": "The funeral was a lachrymose affair.",
    "synonyms": [
      "Tearful",
      "Weepy",
      "Sentimental"
    ],
    "antonyms": [
      "Cheerful",
      "Beaming",
      "Laughing"
    ],
    "trick": "Lac (Lake) + Cry -> Crying a lake of tears.",
    "tone": "Negative (-)",
    "collocation": "Lachrymose drama",
    "intensitySpectrum": [
      {
        "word": "Sad",
        "level": "Mild"
      },
      {
        "word": "Weepy",
        "level": "Medium"
      },
      {
        "word": "Lachrymose",
        "level": "High"
      },
      {
        "word": "Inconsolable",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Incandescent",
    "partOfSpeech": "Adjective",
    "meaning": "1. Emitting light as a result of being heated. 2. Full of strong emotion; passionate or angry.",
    "translation": "तप्त / अत्यंत क्रुद्ध",
    "sentence": "She was incandescent with rage at the accusation.",
    "synonyms": [
      "Burning",
      "Furious",
      "Radiant"
    ],
    "antonyms": [
      "Dark",
      "Calm",
      "Cool"
    ],
    "trick": "Candle -> Burning bright and hot like a candle.",
    "tone": "Negative (-)",
    "collocation": "Incandescent with rage",
    "intensitySpectrum": [
      {
        "word": "Hot",
        "level": "Mild"
      },
      {
        "word": "Glowing",
        "level": "Medium"
      },
      {
        "word": "Incandescent",
        "level": "High"
      },
      {
        "word": "Blinding",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Frenzied",
    "partOfSpeech": "Adjective",
    "meaning": "Wildly excited or uncontrolled.",
    "translation": "उन्मत्त / पागलपन भरा",
    "sentence": "The rock star was greeted by frenzied screaming from fans.",
    "synonyms": [
      "Frantic",
      "Wild",
      "Hysterical"
    ],
    "antonyms": [
      "Calm",
      "Composed",
      "Tranquil"
    ],
    "trick": "Friend + Z (Zombie) -> Running like crazy from a zombie friend.",
    "tone": "Negative (-)",
    "collocation": "Frenzied attack",
    "intensitySpectrum": [
      {
        "word": "Excited",
        "level": "Mild"
      },
      {
        "word": "Manic",
        "level": "Medium"
      },
      {
        "word": "Frenzied",
        "level": "High"
      },
      {
        "word": "Berserk",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Rabid",
    "partOfSpeech": "Adjective",
    "meaning": "1. Having extreme or fanatical support or belief. 2. Affected with rabies.",
    "translation": "कट्टर / पागल",
    "sentence": "He is a rabid supporter of the football team.",
    "synonyms": [
      "Fanatical",
      "Extreme",
      "Maniacal"
    ],
    "antonyms": [
      "Moderate",
      "Indifferent",
      "Sane"
    ],
    "trick": "Rabbit -> A mad rabbit biting people (Rabies).",
    "tone": "Negative (-)",
    "collocation": "Rabid fan",
    "intensitySpectrum": [
      {
        "word": "Keen",
        "level": "Mild"
      },
      {
        "word": "Obsessed",
        "level": "Medium"
      },
      {
        "word": "Rabid",
        "level": "High"
      },
      {
        "word": "Psychotic",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Quell",
    "partOfSpeech": "Verb",
    "meaning": "Put an end to (a rebellion or other disorder), typically by the use of force.",
    "translation": "कुचलना / शांत करना",
    "sentence": "Police were sent to quell the riots.",
    "synonyms": [
      "Suppress",
      "Crush",
      "Subdue"
    ],
    "antonyms": [
      "Incite",
      "Provoke",
      "Agitate"
    ],
    "trick": "Well -> Throw them in a well to stop the noise.",
    "tone": "Negative (-)",
    "collocation": "Quell the uprising",
    "intensitySpectrum": [
      {
        "word": "Calm",
        "level": "Mild"
      },
      {
        "word": "Subdue",
        "level": "Medium"
      },
      {
        "word": "Quell",
        "level": "High"
      },
      {
        "word": "Annihilate",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Smother",
    "partOfSpeech": "Verb",
    "meaning": "1. Kill by covering the nose and mouth. 2. Suppress (a feeling or action).",
    "translation": "दम घोंटना / छिपाना",
    "sentence": "She tried to smother her laughter in the library.",
    "synonyms": [
      "Suffocate",
      "Stifle",
      "Muffle"
    ],
    "antonyms": [
      "Breathe",
      "Express",
      "Vent"
    ],
    "trick": "Mother -> An overprotective mother smothers you with too much care.",
    "tone": "Negative (-)",
    "collocation": "Smother a fire",
    "intensitySpectrum": [
      {
        "word": "Cover",
        "level": "Mild"
      },
      {
        "word": "Suppress",
        "level": "Medium"
      },
      {
        "word": "Smother",
        "level": "High"
      },
      {
        "word": "Asphyxiate",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Dolorous",
    "partOfSpeech": "Adjective",
    "meaning": "Feeling or expressing great sorrow or distress.",
    "translation": "दर्दनाक / शोकपूर्ण",
    "sentence": "She let out a dolorous cry when she heard the news.",
    "synonyms": [
      "Mournful",
      "Sorrowful",
      "Woeful"
    ],
    "antonyms": [
      "Joyful",
      "Happy",
      "Cheer"
    ],
    "trick": "Dole -> To give out 'dole' (charity) to sad/poor people. Also 'Dolor' means pain.",
    "tone": "Negative (-)",
    "collocation": "Dolorous ballad",
    "intensitySpectrum": [
      {
        "word": "Sad",
        "level": "Mild"
      },
      {
        "word": "Mournful",
        "level": "Medium"
      },
      {
        "word": "Dolorous",
        "level": "High"
      },
      {
        "word": "Heartbroken",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Maudlin",
    "partOfSpeech": "Adjective",
    "meaning": "Self-pityingly or tearfully sentimental, often through drunkenness.",
    "translation": "भावुक (शराब के नशे में)",
    "sentence": "He gets maudlin and starts talking about his ex-wife after a few drinks.",
    "synonyms": [
      "Sentimental",
      "Weepy",
      "Mushy"
    ],
    "antonyms": [
      "Pragmatic",
      "Stoic",
      "Unemotional"
    ],
    "trick": "Modeling -> Models crying dramatically for attention.",
    "tone": "Negative (-)",
    "collocation": "Maudlin self-pity",
    "intensitySpectrum": [
      {
        "word": "Emotional",
        "level": "Mild"
      },
      {
        "word": "Sentimental",
        "level": "Medium"
      },
      {
        "word": "Maudlin",
        "level": "High"
      },
      {
        "word": "Melodramatic",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Lugubrious",
    "partOfSpeech": "Adjective",
    "meaning": "Looking or sounding sad and dismal.",
    "translation": "विषादपूर्ण / उदास",
    "sentence": "The lugubrious music set a somber mood for the movie.",
    "synonyms": [
      "Mournful",
      "Gloomy",
      "Dismal"
    ],
    "antonyms": [
      "Cheerful",
      "Sunny",
      "Optimistic"
    ],
    "trick": "Luggage -> Dragging heavy luggage makes you look sad/tired.",
    "tone": "Negative (-)",
    "collocation": "Lugubrious face",
    "intensitySpectrum": [
      {
        "word": "Serious",
        "level": "Mild"
      },
      {
        "word": "Gloomy",
        "level": "Medium"
      },
      {
        "word": "Lugubrious",
        "level": "High"
      },
      {
        "word": "Funereal",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Jovial",
    "partOfSpeech": "Adjective",
    "meaning": "Cheerful and friendly.",
    "translation": "उल्लासपूर्ण / हंसमुख",
    "sentence": "He was in a jovial mood at the party.",
    "synonyms": [
      "Merry",
      "Jolly",
      "Convivial"
    ],
    "antonyms": [
      "Miserable",
      "Gloomy",
      "Morose"
    ],
    "trick": "Joy -> Full of Joy.",
    "tone": "Positive (+)",
    "collocation": "Jovial host",
    "intensitySpectrum": [
      {
        "word": "Happy",
        "level": "Mild"
      },
      {
        "word": "Cheerful",
        "level": "Medium"
      },
      {
        "word": "Jovial",
        "level": "High"
      },
      {
        "word": "Ecstatic",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Insouciant",
    "partOfSpeech": "Adjective",
    "meaning": "Showing a casual lack of concern; indifferent.",
    "translation": "बेपरवाह / चिंतामुक्त",
    "sentence": "She wandered into the meeting with an insouciant air.",
    "synonyms": [
      "Nonchalant",
      "Unconcerned",
      "Carefree"
    ],
    "antonyms": [
      "Anxious",
      "Concerned",
      "Worried"
    ],
    "trick": "Soup -> Drinking soup slowly without a care in the world.",
    "tone": "Neutral (0)",
    "collocation": "Insouciant shrug",
    "intensitySpectrum": [
      {
        "word": "Relaxed",
        "level": "Mild"
      },
      {
        "word": "Unconcerned",
        "level": "Medium"
      },
      {
        "word": "Insouciant",
        "level": "High"
      },
      {
        "word": "Negligent",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Nonchalant",
    "partOfSpeech": "Adjective",
    "meaning": "(of a person or manner) feeling or appearing casually calm and relaxed.",
    "translation": "बेपरवाह / उदासीन",
    "sentence": "He was surprisingly nonchalant about winning the lottery.",
    "synonyms": [
      "Calm",
      "Cool",
      "Unconcerned"
    ],
    "antonyms": [
      "Anxious",
      "Excited",
      "Agitated"
    ],
    "trick": "No + Challan -> No traffic fine (challan), so I am relaxed.",
    "tone": "Neutral (0)",
    "collocation": "Nonchalant attitude",
    "intensitySpectrum": [
      {
        "word": "Calm",
        "level": "Mild"
      },
      {
        "word": "Relaxed", "level": "Medium"
      },
      {
        "word": "Nonchalant",
        "level": "High"
      },
      {
        "word": "Indifferent",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Phlegmatic",
    "partOfSpeech": "Adjective",
    "meaning": "(Of a person) having an unemotional and stolidly calm disposition.",
    "translation": "सुस्त / आवेगहीन",
    "sentence": "The phlegmatic British character is a stereotype.",
    "synonyms": [
      "Calm",
      "Stolid",
      "Impassive"
    ],
    "antonyms": [
      "Excitable",
      "Emotional",
      "Demonstrative"
    ],
    "trick": "Phlegm -> Mucus is slow and sticky; implies a slow/calm person.",
    "tone": "Neutral (0)",
    "collocation": "Phlegmatic temperament",
    "intensitySpectrum": [
      {
        "word": "Calm",
        "level": "Mild"
      },
      {
        "word": "Unemotional",
        "level": "Medium"
      },
      {
        "word": "Phlegmatic",
        "level": "High"
      },
      {
        "word": "Comatose",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Cavalier",
    "partOfSpeech": "Adjective",
    "meaning": "Showing a lack of proper concern; offhand.",
    "translation": "अभिमानपूर्ण / लापरवाह",
    "sentence": "He has a cavalier attitude towards safety regulations.",
    "synonyms": [
      "Dismissive",
      "Indifferent",
      "Arrogant"
    ],
    "antonyms": [
      "Thoughtful",
      "Careful",
      "Concerned"
    ],
    "trick": "Cavalry -> A soldier on a horse looking down on others.",
    "tone": "Negative (-)",
    "collocation": "Cavalier dismissal",
    "intensitySpectrum": [
      {
        "word": "Casual",
        "level": "Mild"
      },
      {
        "word": "Dismissive",
        "level": "Medium"
      },
      {
        "word": "Cavalier",
        "level": "High"
      },
      {
        "word": "Scornful",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Obtrusive",
    "partOfSpeech": "Adjective",
    "meaning": "Noticeable or prominent in an unwelcome or intrusive way.",
    "translation": "बाधा डालनेवाला / जो जबरदस्ती दिखे",
    "sentence": "The waiter was attentive without being obtrusive.",
    "synonyms": [
      "Conspicuous",
      "Intrusive",
      "Bold"
    ],
    "antonyms": [
      "Unobtrusive",
      "Subtle",
      "Discreet"
    ],
    "trick": "Obstruction -> Something that obstructs your view/peace.",
    "tone": "Negative (-)",
    "collocation": "Obtrusive behavior",
    "intensitySpectrum": [
      {
        "word": "Visible",
        "level": "Mild"
      },
      {
        "word": "Noticeable",
        "level": "Medium"
      },
      {
        "word": "Obtrusive",
        "level": "High"
      },
      {
        "word": "Blatant",
        "level": "Extreme"
      }
    ]
  },
  {
    "word": "Prying",
    "partOfSpeech": "Adjective",
    "meaning": "Excessively interested in a person's private affairs.",
    "translation": "तांक-झांक करनेवाला",
    "sentence": "I hate prying neighbors who watch everything I do.",
    "synonyms": [
      "Inquisitive",
      "Meddling",
      "Nosy"
    ],
    "antonyms": [
      "Discreet",
      "Uninterested",
      "Respectful"
    ],
    "trick": "Prise -> To 'prise' (force) open a box/secret.",
    "tone": "Negative (-)",
    "collocation": "Prying eyes",
    "intensitySpectrum": [
      {
        "word": "Curious",
        "level": "Mild"
      },
      {
        "word": "Inquisitive",
        "level": "Medium"
      },
      {
        "word": "Prying",
        "level": "High"
      },
      {
        "word": "Intrusive",
        "level": "Extreme"
      }
    ]
  },

];
