/** Screen 5 — Ask. Local mock submission with a success confirmation. */
import { useState, type FormEvent } from 'react';
import { Screen as ScreenShell } from '../components/Screen';
import { ArrowRightIcon, CheckIcon, ChatIcon } from '../components/icons';
import { Button, MicroLabel } from '../components/ui';

export function Ask({
  onSubmit,
  submittedCount,
}: {
  onSubmit: (text: string) => void;
  submittedCount: number;
}) {
  const [text, setText] = useState('');
  const [sent, setSent] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
    setSent(trimmed);
    setText('');
  };

  if (sent) {
    return (
      <ScreenShell eyebrow="Ask & questions" title="Question sent">
        <div className="screen-enter flex flex-col items-center rounded-2xl border border-line bg-surface2 px-5 py-10 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
            <CheckIcon className="h-7 w-7" />
          </span>
          <h2 className="mt-5 font-display text-lg font-semibold text-ink">
            Your question is in the queue
          </h2>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            “{sent}” — the Gainers Lab team reviews questions regularly and answers them in the
            community.
          </p>
          <div className="mt-6">
            <Button variant="ghost" onClick={() => setSent(null)}>
              Ask another question
            </Button>
          </div>
        </div>

        <div className="mt-6 border-t border-line pt-4">
          <MicroLabel>How it works</MicroLabel>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            Questions land in the owner’s queue (see the Admin tab). Frequently asked ones get
            answered in the weekly presentation or a new announcement.
          </p>
        </div>
      </ScreenShell>
    );
  }

  return (
    <ScreenShell eyebrow="Ask & questions" title="Ask the team">
      <p className="text-sm leading-relaxed text-muted">
        Stuck on a concept or need something clarified? Type your question below — the team will
        get back to you through the community.
      </p>

      <form onSubmit={handleSubmit} className="mt-5">
        <label htmlFor="question" className="block">
          <MicroLabel>Your question</MicroLabel>
        </label>
        <textarea
          id="question"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          maxLength={300}
          placeholder="e.g. Which session is best for a beginner to watch first?"
          className="mt-2 w-full resize-none rounded-xl border border-line bg-surface2 p-4 text-sm leading-relaxed text-ink placeholder:text-muted/70 focus:border-accent/60 focus:outline-none"
        />
        <div className="mt-2 flex items-center justify-between">
          <span className="text-micro font-medium uppercase tracking-[0.08em] text-muted">
            Prototype · saved locally only
          </span>
          <span className="text-xs tabular text-muted">{text.trim().length}/300</span>
        </div>

        <div className="mt-5">
          <Button type="submit" full disabled={!text.trim()}>
            Submit question
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </form>

      <div className="mt-7 flex items-start gap-3 border-t border-line pt-4">
        <ChatIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
        <p className="text-xs leading-relaxed text-muted">
          {submittedCount > 0
            ? `You have submitted ${submittedCount} question${submittedCount > 1 ? 's' : ''} in this session.`
            : 'Nothing is sent anywhere — this prototype keeps your question in the browser for the demo.'}
        </p>
      </div>
    </ScreenShell>
  );
}
