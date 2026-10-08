/** Mock learning resources — sample educational content for the prototype only. */
export type LearningResource = {
  id: string;
  title: string;
  level: 'Beginner';
  duration: string;
  summary: string;
  points: string[];
};

export const learningResources: LearningResource[] = [
  {
    id: 'l1',
    title: 'Forex Basics',
    level: 'Beginner',
    duration: '6 min read',
    summary:
      'What the forex market actually is, which pairs matter to beginners, and how a trading session is structured.',
    points: [
      'Currencies are traded in pairs — EUR/USD means buying the euro against the dollar.',
      'Major sessions (London, New York, Asia) set the rhythm of the day.',
      'A "pip" is the smallest standard move a price makes.',
    ],
  },
  {
    id: 'l2',
    title: 'Understanding Buy vs Sell',
    level: 'Beginner',
    duration: '5 min read',
    summary:
      'What going long and going short really mean, and why you can profit from a falling market too.',
    points: [
      'Buy (long) = you expect the price to rise; sell (short) = you expect it to fall.',
      'Every position is a pair: you are always buying one currency and selling another.',
      'Direction is a bias, not a certainty — that is why exits matter.',
    ],
  },
  {
    id: 'l3',
    title: 'Market Terminology',
    level: 'Beginner',
    duration: '7 min read',
    summary:
      'A plain-language glossary of the words you will hear in every session: pip, spread, leverage, margin and more.',
    points: [
      'Spread = the gap between buy and sell price — the cost of entering.',
      'Leverage amplifies both gains and losses; treat it with respect.',
      'Bullish vs bearish: rising market vs falling market.',
    ],
  },
  {
    id: 'l4',
    title: 'Risk Management Basics',
    level: 'Beginner',
    duration: '6 min read',
    summary:
      'Position sizing, stop losses and the habit of protecting capital before chasing profit.',
    points: [
      'Risk a small, fixed percentage of your account per idea — never "all in".',
      'A stop loss is your pre-decided exit when the idea is wrong.',
      'Consistency beats big wins: survival is the first rule of the game.',
    ],
  },
];
