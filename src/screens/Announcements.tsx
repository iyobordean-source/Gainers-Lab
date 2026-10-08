/** Screen 4 — Announcements. Sample community communication. */
import { Screen as ScreenShell } from '../components/Screen';
import { CalendarIcon } from '../components/icons';
import { Badge, ItemRow, MicroLabel, NoticeBlock } from '../components/ui';
import { announcementLabel, announcements } from '../data/announcements';
import { upcomingPresentation } from '../data/events';

export function Announcements() {
  const [first, ...rest] = announcements;

  return (
    <ScreenShell eyebrow="Stay updated" title="Announcements">
      {/* Presentation block */}
      <MicroLabel>Next presentation</MicroLabel>
      <div className="mt-2.5 rounded-2xl border border-line bg-surface2 p-4">
        <Badge tone="accent">Live this week</Badge>
        <h2 className="mt-2 font-display text-lg font-semibold text-ink">
          {upcomingPresentation.title}
        </h2>
        <dl className="mt-3 grid grid-cols-2 gap-y-2 text-xs">
          <div>
            <dt className="text-micro font-medium uppercase text-muted">When</dt>
            <dd className="mt-0.5 tabular text-ink">
              {upcomingPresentation.day}, {upcomingPresentation.date} · {upcomingPresentation.time}
            </dd>
          </div>
          <div>
            <dt className="text-micro font-medium uppercase text-muted">Speaker</dt>
            <dd className="mt-0.5 text-ink">{upcomingPresentation.speaker}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-micro font-medium uppercase text-muted">Format</dt>
            <dd className="mt-0.5 flex items-center gap-1.5 text-ink">
              <CalendarIcon className="h-3.5 w-3.5 text-accent" />
              {upcomingPresentation.format}
            </dd>
          </div>
        </dl>
      </div>

      {/* Feed */}
      <div className="mt-7">
        <MicroLabel>All announcements</MicroLabel>
        <div className="mt-2.5 space-y-2.5">
          {first.category === 'official' && (
            <NoticeBlock label={`Official · ${first.date}`} title={first.title}>
              {first.body}
            </NoticeBlock>
          )}
          {rest.map((a) => (
            <ItemRow key={a.id}>
              <div className="flex items-center gap-2">
                <Badge tone={a.category === 'official' ? 'warn' : 'muted'}>
                  {announcementLabel[a.category]}
                </Badge>
                <span className="text-xs text-muted">{a.date}</span>
              </div>
              <h2 className="mt-2 font-display text-base font-semibold text-ink">{a.title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.body}</p>
            </ItemRow>
          ))}
        </div>
      </div>
    </ScreenShell>
  );
}
