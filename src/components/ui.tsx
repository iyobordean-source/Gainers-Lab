/** Shared UI primitives — see DESIGN.md for the rules these follow. */
import type { ReactNode } from 'react';

/* --------------------------------- Button --------------------------------- */

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  full?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

export function Button({
  children,
  onClick,
  variant = 'primary',
  full = false,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-accent text-night font-semibold hover:bg-accent-deep active:bg-accent-deep'
      : 'border border-line text-ink hover:border-muted';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm transition-colors disabled:opacity-40 ${
        full ? 'w-full' : ''
      } ${styles}`}
    >
      {children}
    </button>
  );
}

/* ------------------------------- MicroLabel ------------------------------- */

export function MicroLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-micro font-medium uppercase text-muted">{children}</p>
  );
}

/* --------------------------------- Badge ---------------------------------- */

type BadgeTone = 'accent' | 'warn' | 'muted';

export function Badge({ children, tone = 'muted' }: { children: ReactNode; tone?: BadgeTone }) {
  const tones: Record<BadgeTone, string> = {
    accent: 'border-accent/40 text-accent',
    warn: 'border-warn/40 text-warn',
    muted: 'border-line text-muted',
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-micro font-medium uppercase ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/* -------------------------------- ItemRow --------------------------------- */

export function ItemRow({
  children,
  onClick,
  className = '',
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const interactive = onClick
    ? 'w-full text-left transition-colors hover:border-muted/60 cursor-pointer'
    : '';
  const Tag = onClick ? 'button' : 'div';
  return (
    <Tag
      onClick={onClick}
      className={`block rounded-xl border border-line bg-surface2 p-4 ${interactive} ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------ NoticeBlock ------------------------------- */

/** The one place amber appears: official-information / scam warnings. */
export function NoticeBlock({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-warn/30 bg-surface p-4">
      <div className="flex items-center gap-2 text-warn">
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6z" />
          <path d="M12 9v4" />
          <path d="M12 16.5h.01" />
        </svg>
        <span className="text-micro font-medium uppercase tracking-[0.08em]">{label}</span>
      </div>
      <h3 className="mt-2 font-display text-base font-semibold text-ink">{title}</h3>
      <div className="mt-1.5 text-sm leading-relaxed text-muted">{children}</div>
    </div>
  );
}
