/** Screen 3 — Learning. Sample beginner resources; tap to expand in place. */
import { useState } from 'react';
import { Screen as ScreenShell } from '../components/Screen';
import { BookIcon, ChevronDownIcon } from '../components/icons';
import { Badge, MicroLabel } from '../components/ui';
import { learningResources } from '../data/learning';

export function Learning() {
  const [openId, setOpenId] = useState<string | null>(learningResources[0].id);

  return (
    <ScreenShell eyebrow="For beginners" title="Learning">
      <p className="text-sm leading-relaxed text-muted">
        Start with the fundamentals. Four short sample resources — open one to read the key points.
      </p>

      <div className="mt-5 space-y-2.5">
        {learningResources.map((r, i) => {
          const open = openId === r.id;
          return (
            <div key={r.id} className="overflow-hidden rounded-xl border border-line bg-surface2">
              <button
                type="button"
                onClick={() => setOpenId(open ? null : r.id)}
                aria-expanded={open}
                className="flex w-full items-center gap-3 p-4 text-left"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line text-accent">
                  <BookIcon className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span className="font-display text-sm font-semibold text-ink">{r.title}</span>
                    {i === 0 && <Badge tone="accent">Start here</Badge>}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted">
                    {r.level} · {r.duration}
                  </span>
                </span>
                <ChevronDownIcon
                  className={`h-4 w-4 shrink-0 text-muted transition-transform duration-200 ${
                    open ? 'rotate-180 text-accent' : ''
                  }`}
                />
              </button>

              {open && (
                <div className="collapse-enter border-t border-line px-4 pt-3.5 pb-4">
                  <p className="text-sm leading-relaxed text-muted">{r.summary}</p>
                  <div className="mt-4">
                    <MicroLabel>Key points</MicroLabel>
                  </div>
                  <ul className="mt-2 space-y-2">
                    {r.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-ink/90">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-muted">
        Sample educational content for this prototype. Not financial advice.
      </p>
    </ScreenShell>
  );
}
