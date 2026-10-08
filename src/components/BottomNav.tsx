/** Fixed bottom tab bar — the primary navigation for screens 2–6. */
import type { Screen as ScreenName } from '../App';
import { BookIcon, ChatIcon, HomeIcon, LayersIcon, MegaphoneIcon } from './icons';

type Tab = { id: ScreenName; label: string; icon: (p: { className?: string }) => React.JSX.Element };

const tabs: Tab[] = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'learning', label: 'Learn', icon: BookIcon },
  { id: 'announcements', label: 'News', icon: MegaphoneIcon },
  { id: 'ask', label: 'Ask', icon: ChatIcon },
  { id: 'admin', label: 'Admin', icon: LayersIcon },
];

export function BottomNav({
  current,
  onNavigate,
}: {
  current: ScreenName;
  onNavigate: (s: ScreenName) => void;
}) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-surface">
      <div className="mx-auto flex max-w-[520px] items-stretch justify-between px-2 pb-[max(0.35rem,env(safe-area-inset-bottom))] pt-1.5">
        {tabs.map((tab) => {
          const active = current === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onNavigate(tab.id)}
              aria-current={active ? 'page' : undefined}
              className="relative flex min-h-12 flex-1 flex-col items-center justify-center gap-1 rounded-lg py-1 transition-colors"
            >
              <span
                className={`absolute inset-x-3 top-0 h-0.5 rounded-full transition-colors ${
                  active ? 'bg-accent' : 'bg-transparent'
                }`}
              />
              <Icon className={`h-5 w-5 ${active ? 'text-accent' : 'text-muted'}`} />
              <span
                className={`text-[10px] font-medium tracking-wide ${
                  active ? 'text-accent' : 'text-muted'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
