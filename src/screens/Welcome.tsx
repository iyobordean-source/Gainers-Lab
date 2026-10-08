/** Screen 1 — Welcome / Landing. */
import { ArrowRightIcon } from '../components/icons';
import { Button } from '../components/ui';

function Mark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/40 bg-accent/10">
        <svg
          className="h-6 w-6 text-accent"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M15 7h6v6" />
        </svg>
      </div>
      <div>
        <p className="font-display text-base font-semibold leading-none text-ink">Gainers Lab</p>
        <p className="mt-1 text-micro font-medium uppercase tracking-[0.08em] text-muted">
          Member Hub
        </p>
      </div>
    </div>
  );
}

export function Welcome({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="screen-enter flex min-h-dvh flex-col px-6 pt-[max(1.5rem,env(safe-area-inset-top))] pb-10">
      <Mark />

      <div className="flex flex-1 flex-col justify-center py-12">
        <p className="text-micro font-medium uppercase text-accent">You’re in the right place</p>

        <h1 className="mt-4 font-display text-[2.15rem] leading-[1.1] font-semibold text-ink">
          The home of the
          <br />
          Gainers Lab <span className="editorial text-accent">community</span>
        </h1>

        <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-muted">
          Learning resources, presentations and official announcements for members — organised in
          one trustworthy place, away from the chat scroll.
        </p>

        <div className="mt-8 flex items-center gap-3 border-y border-line py-4">
          <span className="font-display text-3xl font-semibold tabular text-accent">800+</span>
          <span className="text-sm leading-snug text-muted">
            community members
            <br />
            <span className="text-micro font-medium uppercase tracking-[0.08em]">
              growing toward 2,000
            </span>
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <Button full onClick={onEnter}>
          Enter Gainers Lab
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
        <p className="text-center text-micro font-medium uppercase tracking-[0.08em] text-muted">
          Education &amp; community · no trading, no deposits
        </p>
      </div>
    </div>
  );
}
