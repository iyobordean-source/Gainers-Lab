/** Mock question queue — questions submitted in the Ask screen are prepended. */
export type Question = {
  id: string;
  text: string;
  askedBy: string;
  askedAt: string;
  status: 'pending' | 'answered';
};

export const seedQuestions: Question[] = [
  {
    id: 'q1',
    text: 'Which session is best for a beginner to watch first?',
    askedBy: 'Chinedu O.',
    askedAt: 'Today, 9:12 AM',
    status: 'pending',
  },
  {
    id: 'q2',
    text: 'Should I practise on a demo account before going live?',
    askedBy: 'Amaka N.',
    askedAt: 'Yesterday, 6:40 PM',
    status: 'answered',
  },
  {
    id: 'q3',
    text: 'Will Saturday’s session be recorded for members who work nights?',
    askedBy: 'Tunde A.',
    askedAt: 'Yesterday, 1:05 PM',
    status: 'answered',
  },
];
