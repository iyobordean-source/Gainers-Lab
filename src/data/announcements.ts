/** Mock announcements — sample content for the prototype only. */
export type Announcement = {
  id: string;
  category: 'presentation' | 'learning' | 'community' | 'official';
  title: string;
  body: string;
  date: string;
  pinned?: boolean;
};

export const announcements: Announcement[] = [
  {
    id: 'a1',
    category: 'official',
    title: 'Verify before you trust — official Gainers Lab channels',
    body: 'Gainers Lab will never DM members asking for money, wallet addresses or login details. Only trust announcements posted inside this hub and our verified community channels. Forward suspicious messages to the admin team.',
    date: 'Today',
    pinned: true,
  },
  {
    id: 'a2',
    category: 'presentation',
    title: 'Next presentation: Reading Market Structure Live',
    body: 'Join Coach Daniel this Saturday at 7:00 PM WAT for a 60-minute live session on how price structures trends, ranges and reversals. Bring questions — the last 15 minutes are open Q&A.',
    date: '2 days ago',
  },
  {
    id: 'a3',
    category: 'learning',
    title: 'New beginner lesson: Risk Management Basics',
    body: 'A new lesson is live in the Learning section covering position sizing, stop losses and why protecting capital comes before chasing profit. Start with the 6-minute read if you are new.',
    date: '4 days ago',
  },
  {
    id: 'a4',
    category: 'community',
    title: 'Community update — we passed 800 members',
    body: 'The community has grown to 800+ members. Onboarding is moving into the hub so new members can find the starter lessons, the presentation schedule and official notices in one place.',
    date: '1 week ago',
  },
];

export const announcementLabel: Record<Announcement['category'], string> = {
  presentation: 'Presentation',
  learning: 'Learning',
  community: 'Community',
  official: 'Official',
};
