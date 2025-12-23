
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
      word: "Adverse vs Averse",
      context: "Spelling Traps",
      definition: "Adverse: Unfavorable/Bad (e.g., Adverse weather).\nAverse: Reluctant/Dislike (e.g., I am averse to risk).\n\nMemory Hook: D in Adverse = Disaster."
    },
    {
      type: 'simple',
      word: "Elicit vs Illicit",
      context: "Spelling Traps",
      definition: "Elicit: To draw out (e.g., Police elicited the truth).\nIllicit: Illegal (e.g., Illicit drugs).\n\nMemory Hook: Illist = Illegal."
    },
    {
      type: 'simple',
      word: "Compliment vs Complement",
      context: "Spelling Traps",
      definition: "Compliment: Praise.\nComplement: To complete (e.g., Bread complements butter).\n\nMemory Hook: Complement = Complete."
    },
    {
      type: 'simple',
      word: "Allude vs Elude",
      context: "Spelling Traps",
      definition: "Allude: To hint indirectly.\nElude: To escape (e.g., The thief eluded the police).\n\nMemory Hook: Elude = Escape."
    },
    {
      type: 'simple',
      word: "Censure vs Censor",
      context: "Spelling Traps",
      definition: "Censure: To Criticize/Scold.\nCensor: To Ban/Cut (e.g., The movie was censored).\n\nMemory Hook: Censure = Scold."
    },
    {
      type: 'simple',
      word: "Stationary vs Stationery",
      context: "Spelling Traps",
      definition: "Stationary: Not moving (e.g., The car was stationary).\nStationery: Pens/Paper.\n\nMemory Hook: Stationery = Letter."
    },
    {
      type: 'simple',
      word: "Discrete vs Discreet",
      context: "Spelling Traps",
      definition: "Discrete: Separate/Distinct.\nDiscreet: Careful/Secret.\n\nMemory Hook: Discreet = Keep quiet."
    },
    {
      type: 'simple',
      word: "Eminent vs Imminent",
      context: "Spelling Traps",
      definition: "Eminent: Famous/Respected (e.g., An eminent scientist).\nImminent: About to happen (e.g., The storm is imminent).\n\nMemory Hook: Imminent = Immediate."
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
