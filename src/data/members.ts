/** Mock members — sample records for the prototype only. */
export type Member = {
  id: string;
  name: string;
  joined: string;
  status: 'active' | 'new';
};

export const communityStats = {
  current: '800+',
  goal: '2,000',
  goalValue: 2000,
  currentValue: 800,
};

export const members: Member[] = [
  { id: 'm1', name: 'Chinedu O.', joined: '2 Oct 2026', status: 'new' },
  { id: 'm2', name: 'Amaka N.', joined: '1 Oct 2026', status: 'new' },
  { id: 'm3', name: 'Tunde A.', joined: '24 Sep 2026', status: 'active' },
  { id: 'm4', name: 'Grace E.', joined: '18 Sep 2026', status: 'active' },
  { id: 'm5', name: 'Ibrahim K.', joined: '11 Sep 2026', status: 'active' },
  { id: 'm6', name: 'Ngozi U.', joined: '3 Sep 2026', status: 'active' },
  { id: 'm7', name: 'Samuel B.', joined: '27 Aug 2026', status: 'active' },
  { id: 'm8', name: 'Fatima H.', joined: '19 Aug 2026', status: 'active' },
];
