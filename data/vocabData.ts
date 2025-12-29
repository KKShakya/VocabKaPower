
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
        trick: "Add + Use = To ADD facts to USE as proof."
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
    }
  ]
};
