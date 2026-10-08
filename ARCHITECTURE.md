# ARCHITECTURE.md — Gainers Lab Hub (Technical Shape)

## Stack

| Layer | Choice | Notes |
|---|---|---|
| Build | **Vite** | `npm run dev` / `build` / `preview` |
| UI | **React + TypeScript** | Strict mode TS |
| Styling | **Tailwind CSS v4** via `@tailwindcss/vite` | Tokens declared in `src/index.css` with `@theme`; no PostCSS config file needed |
| Routing | **None (no react-router)** | One screen-state in App — see below |
| State | **React `useState` lifted in `App`** | No state library, no context boilerplate unless a screen genuinely needs it |
| Data | **Local mock modules** in `src/data/` | Typed constants, imported directly |
| Icons | **Inline SVG components** | No icon package |

### Dependencies (complete list)

- runtime: `react`, `react-dom`
- dev: `typescript`, `vite`, `@vitejs/plugin-react`, `@types/react`, `@types/react-dom`, `tailwindcss`, `@tailwindcss/vite`

Nothing else. Any new dependency must be justified against this list.

**The single external resource:** Google Fonts `<link>` in `index.html` (Sora / Inter / Instrument Serif), with system fallbacks. It is not an API and the app works without it.

## Project structure

```
Gainers Lab/
├── PRODUCT.md  DESIGN.md  ARCHITECTURE.md  TODO.md  AGENTS.md
├── package.json  vite.config.ts  tsconfig.json  index.html
└── src/
    ├── main.tsx              # React entry
    ├── App.tsx               # screen state + shared questions state + layout shell
    ├── index.css             # Tailwind import + design tokens (@theme) + base styles
    ├── data/
    │   ├── announcements.ts  # mock announcements
    │   ├── learning.ts       # mock learning resources
    │   ├── members.ts        # mock members + goal framing
    │   ├── questions.ts      # seed questions
    │   └── events.ts         # upcoming presentation
    ├── components/
    │   ├── BottomNav.tsx     # fixed 5-tab navigation
    │   ├── Screen.tsx        # screen wrapper: top bar + entry animation
    │   ├── ui.tsx            # Button, MicroLabel, Badge, ItemRow, NoticeBlock
    │   └── icons.tsx         # inline SVG icon set
    └── screens/
        ├── Welcome.tsx
        ├── Home.tsx
        ├── Learning.tsx
        ├── Announcements.tsx
        ├── Ask.tsx
        └── Admin.tsx
```

## Navigation model

```ts
type Screen = 'welcome' | 'home' | 'learning' | 'announcements' | 'ask' | 'admin';
```

- `App` holds `screen` (starts at `'welcome'`) and passes `navigate` down.
- Welcome → `navigate('home')` on the Enter CTA. The tab bar is hidden on Welcome.
- Tabs switch `screen` directly. No back stack — sub-views are handled *inside* a screen (e.g. learning items expand in place), which keeps navigation honest and simple.
- Rationale: a prototype with 6 flat screens does not need a router dependency or URL state.

## State model

`App` owns exactly two pieces of state:

1. `screen` — current tab.
2. `questions: Question[]` — seeded from `src/data/questions.ts`; the Ask screen **prepends** submitted questions (status `pending`). The Admin screen reads the same array, so a submitted question appears in Admin with a `NEW` badge — one small, real interaction that sells the concept.

Everything else is imported mock data (read-only). No reducers, no context, no persistence — refresh resets to Welcome, which is fine for a demo.

## Data shapes (src/data/)

```ts
type Announcement = { id: string; category: 'presentation' | 'learning' | 'community' | 'official';
  title: string; body: string; date: string; pinned?: boolean };

type LearningResource = { id: string; title: string; level: 'Beginner';
  duration: string; summary: string; points: string[] };

type Member = { id: string; name: string; joined: string; status: 'active' | 'new' };

type Question = { id: string; text: string; askedBy: string;
  askedAt: string; status: 'pending' | 'answered' };

type Presentation = { title: string; date: string; time: string;
  speaker: string; format: string; attendees: string };
```

Dates/copy are fixed sample strings — no `Date.now()` logic, no formatting libraries.

## Responsive rules

- All layout via Tailwind utilities; mobile-first (`sm:` and up only where needed).
- App shell: full-width on phones; on ≥640px content centers in `max-w-[520px]` with side borders, preserving the mobile-product feel on desktop.
- Fixed bottom nav with `pb` reserved on content so nothing hides behind it.

## Build & run

```bash
npm install
npm run dev      # local dev server
npm run build    # tsc --noEmit + vite build  → must pass before sharing
npm run preview  # serve the production build
```

## Non-goals (architectural)

No backend · no auth · no env vars · no API client · no i18n · no PWA/service worker · no test framework (prototype scope) · no CSS framework beyond Tailwind.
