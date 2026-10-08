/** Screen 6 — Admin preview. What the owner could eventually manage. Mock data only. */
import { useState } from 'react';
import { Screen as ScreenShell } from '../components/Screen';
import { Badge, MicroLabel, NoticeBlock } from '../components/ui';
import { announcementLabel, announcements } from '../data/announcements';
import { communityStats, members } from '../data/members';
import type { Question } from '../data/questions';

type Tab = 'members' | 'announcements' | 'questions';

const tabs: { id: Tab; label: string }[] = [
  { id: 'members', label: 'Members' },
  { id: 'announcements', label: 'Announcements' },
  { id: 'questions', label: 'Questions' },
];

export function Admin({
  questions,
  answeredCount,
  onToggleAnswer,
}: {
  questions: Question[];
  answeredCount: number;
  onToggleAnswer: (id: string) => void;
}) {
  const [tab, setTab] = useState<Tab>('members');
  const pendingCount = questions.length - answeredCount;
  const pct = Math.round((communityStats.currentValue / communityStats.goalValue) * 100);

  return (
    <ScreenShell eyebrow="Owner view" title="Admin preview">
      <NoticeBlock label="Prototype only" title="This is a demo of the owner’s screen">
        Mock data — in the real system this is where you would manage members, post announcements
        and answer questions.
      </NoticeBlock>

      {/* Segmented tabs */}
      <div className="mt-5 flex gap-1 rounded-full border border-line bg-surface2 p-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`relative flex-1 rounded-full px-3 py-2 text-xs font-medium transition-colors ${
              tab === t.id ? 'bg-accent text-night' : 'text-muted hover:text-ink'
            }`}
          >
            {t.label}
            {t.id === 'questions' && pendingCount > 0 && (
              <span
                className={`absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-semibold ${
                  tab === t.id ? 'bg-night text-accent' : 'bg-warn text-night'
                }`}
              >
                {pendingCount}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ---------------- Members ---------------- */}
      {tab === 'members' && (
        <div className="screen-enter mt-5">
          <MicroLabel>Community growth</MicroLabel>
          <div className="mt-2.5 rounded-2xl border border-line bg-surface2 p-4">
            <div className="flex items-end justify-between">
              <div>
                <p className="font-display text-3xl font-semibold tabular text-accent">
                  {communityStats.current}
                </p>
                <p className="mt-0.5 text-xs text-muted">members today</p>
              </div>
              <div className="text-right">
                <p className="font-display text-lg font-semibold tabular text-ink">
                  {communityStats.goal}
                </p>
                <p className="text-xs text-muted">goal</p>
              </div>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-line">
              <div className="h-full rounded-full bg-accent" style={{ width: `${pct}%` }} />
            </div>
            <p className="mt-2 text-micro font-medium uppercase tracking-[0.08em] text-muted">
              {pct}% of the way to goal
            </p>
          </div>

          <div className="mt-5">
            <MicroLabel>Recent members</MicroLabel>
            <ul className="mt-2.5 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface2">
              {members.map((m) => (
                <li key={m.id} className="flex items-center justify-between gap-3 px-4 py-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-surface font-display text-xs font-semibold text-muted">
                      {m.name.slice(0, 1)}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-ink">{m.name}</p>
                      <p className="text-xs text-muted">Joined {m.joined}</p>
                    </div>
                  </div>
                  <Badge tone={m.status === 'new' ? 'accent' : 'muted'}>{m.status}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ---------------- Announcements ---------------- */}
      {tab === 'announcements' && (
        <div className="screen-enter mt-5">
          <MicroLabel>Published feed</MicroLabel>
          <ul className="mt-2.5 space-y-2.5">
            {announcements.map((a) => (
              <li key={a.id} className="rounded-xl border border-line bg-surface2 p-4">
                <div className="flex items-center justify-between gap-2">
                  <Badge tone={a.category === 'official' ? 'warn' : 'muted'}>
                    {announcementLabel[a.category]}
                  </Badge>
                  <span className="text-xs text-muted">{a.date}</span>
                </div>
                <p className="mt-2 text-sm font-medium text-ink">{a.title}</p>
                <div className="mt-2.5 flex items-center justify-between border-t border-line pt-2.5">
                  <span className="text-micro font-medium uppercase text-accent">Published</span>
                  <span className="text-xs text-muted">Visible to all members</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}


      {/* ---------------- Questions ---------------- */}
      {tab === 'questions' && (
        <div className="screen-enter mt-5">
          <div className="flex items-center justify-between">
            <MicroLabel>Member questions</MicroLabel>
            <span className="text-xs text-muted">
              {pendingCount} pending · {answeredCount} answered
            </span>
          </div>
          <ul className="mt-2.5 space-y-2.5">
            {questions.map((q) => (
              <li key={q.id} className="rounded-xl border border-line bg-surface2 p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-muted">
                    {q.askedBy} · {q.askedAt}
                  </span>
                  <Badge tone={q.status === 'pending' ? 'warn' : 'accent'}>{q.status}</Badge>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink">{q.text}</p>
                <button
                  type="button"
                  onClick={() => onToggleAnswer(q.id)}
                  className={`mt-3 w-full rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                    q.status === 'pending'
                      ? 'border-accent/40 text-accent hover:bg-accent/10'
                      : 'border-line text-muted hover:border-muted/60'
                  }`}
                >
                  {q.status === 'pending' ? 'Mark as answered' : 'Move back to pending'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </ScreenShell>
  );
}

