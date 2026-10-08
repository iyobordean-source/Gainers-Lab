/** Mock upcoming presentation — sample content for the prototype only. */
export type Presentation = {
  title: string;
  day: string;
  date: string;
  time: string;
  speaker: string;
  format: string;
};

export const upcomingPresentation: Presentation = {
  title: 'Reading Market Structure Live',
  day: 'Saturday',
  date: '18 Oct',
  time: '7:00 PM WAT',
  speaker: 'Coach Daniel, Gainers Lab',
  format: 'Live webinar · 60 min',
};
