/** Screen shell: top bar + content area + entry animation. Used by every screen except Welcome. */
import type { ReactNode } from 'react';

export function Screen({
  title,
  eyebrow,
  action,
  children,
}: {
  title: string;
  eyebrow?: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="screen-enter flex min-h-dvh flex-col pb-24">
      <header className="sticky top-0 z-10 border-b border-line bg-night px-5 pt-[max(1rem,env(safe-area-inset-top))] pb-3">
        <div className="flex items-end justify-between gap-3">
          <div>
            {eyebrow && <p className="text-micro font-medium uppercase text-accent">{eyebrow}</p>}
            <h1 className="mt-0.5 font-display text-2xl font-semibold text-ink">{title}</h1>
          </div>
          {action}
        </div>
      </header>
      <main className="flex-1 px-5 pt-5">{children}</main>
    </div>
  );
}
