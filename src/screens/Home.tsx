/** Screen 2 — Member Home. The hub overview. */
import type { Screen } from '../App';
import { Screen as ScreenShell } from '../components/Screen';
import { ArrowRightIcon, CalendarIcon, ChatIcon, ShieldIcon } from '../components/icons';
import { Badge, ItemRow, MicroLabel, NoticeBlock } from '../components/ui';
import { announcementLabel, announcements } from '../data/announcements';
import { upcomingPresentation } from '../data/events';
import { learningResources } from '../data/learning';

export function Home({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const latest = announcements[0];
  const presentation = upcomingPresentation;

  return (
    <ScreenShell eyebrow="Member home" title="Welcome back, Member">
      {/* ---------------- Upcoming presentation ---------------- */}
      <section>
        <MicroLabel>Upcoming presentation</MicroLabel>
        <ItemRow className="mt-2.5" onClick={() => onNavigate('announcements')}>
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
              <span className="font-display text-lg leading-none font-semibold tabular">
                {presentation.date.split(' ')[1]}
              </span>
              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wider">
                {presentation.date.split(' ')[0]}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <Badge tone="accent">Live</Badge>
                <span className="text-micro font-medium uppercase text-muted">{presentation.day}</span>
              </div>
              <h2 className="mt-1.5 font-display text-base font-semibold text-ink">
                {presentation.title}
              </h2>
              <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-muted">
                <CalendarIcon className="h-3.5 w-3.5" />
                <span className="tabular">{presentation.time}</span>
                <span aria-hidden="true">·</span>
                <span>{presentation.format}</span>
              </p>
            </div>
            <ArrowRightIcon className="mt-1 h-4 w-4 shrink-0 text-muted" />
          </div>
        </ItemRow>
      </section>

      {/* ---------------- Latest announcement ---------------- */}
      <section className="mt-7">
        <div className="flex items-center justify-between">
          <MicroLabel>Latest announcement</MicroLabel>
          <button
            type="button"
            onClick={() => onNavigate('announcements')}
            className="text-micro font-medium uppercase text-accent hover:text-accent-deep"
          >
            View all
          </button>
        </div>
        <ItemRow className="mt-2.5" onClick={() => onNavigate('announcements')}>
          <div className="flex items-center gap-2">
            <Badge tone={latest.category === 'official' ? 'warn' : 'muted'}>
              {announcementLabel[latest.category]}
            </Badge>
            <span className="text-xs text-muted">{latest.date}</span>
          </div>
          <h2 className="mt-2 font-display text-base font-semibold text-ink">{latest.title}</h2>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{latest.body}</p>
        </ItemRow>
      </section>

      {/* ---------------- Learning resources ---------------- */}
      <section className="mt-7">
        <div className="flex items-center justify-between">
          <MicroLabel>Start learning</MicroLabel>
          <button
            type="button"
            onClick={() => onNavigate('learning')}
            className="text-micro font-medium uppercase text-accent hover:text-accent-deep"
          >
            All resources
          </button>
        </div>
        <div className="mt-2.5 grid gap-2">
          {learningResources.slice(0, 2).map((r) => (
            <ItemRow key={r.id} onClick={() => onNavigate('learning')}>
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="font-display text-sm font-semibold text-ink">{r.title}</h2>
                  <p className="mt-0.5 text-xs text-muted">
                    {r.level} · {r.duration}
                  </p>
                </div>
                <ArrowRightIcon className="h-4 w-4 shrink-0 text-muted" />
              </div>
            </ItemRow>
          ))}
        </div>
      </section>

      {/* ---------------- Official information / scam warning ---------------- */}
      <section className="mt-7">
        <NoticeBlock label="Official information · scam warning" title="Verify before you trust">
          Gainers Lab will never DM members asking for money, wallet addresses or login details.
          Announcements posted in this hub are the official word — everything else, treat with
          caution.
        </NoticeBlock>
        <button
          type="button"
          onClick={() => onNavigate('announcements')}
          className="mt-3 flex w-full items-center justify-between rounded-xl border border-line px-4 py-3 text-sm text-muted transition-colors hover:border-muted/60"
        >
          <span className="flex items-center gap-2">
            <ShieldIcon className="h-4 w-4 text-warn" />
            How to spot fake Gainers Lab accounts
          </span>
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </section>

      {/* ---------------- Section shortcuts ---------------- */}
      <section className="mt-7">
        <MicroLabel>Jump to</MicroLabel>
        <div className="mt-2.5 grid grid-cols-2 gap-2">
          <ShortcutButton
            label="Ask a question"
            icon={<ChatIcon className="h-4 w-4" />}
            onClick={() => onNavigate('ask')}
          />
          <ShortcutButton
            label="Owner preview"
            icon={<ShieldIcon className="h-4 w-4" />}
            onClick={() => onNavigate('admin')}
          />
        </div>
      </section>
    </ScreenShell>
  );
}

function ShortcutButton({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 rounded-xl border border-line bg-surface2 px-4 py-3 text-left text-sm font-medium text-ink transition-colors hover:border-muted/60"
    >
      <span className="text-accent">{icon}</span>
      {label}
    </button>
  );
}

