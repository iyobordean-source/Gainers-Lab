# AGENTS.md — Working on the Gainers Lab Hub

Read this first. It is the guardrail file for anyone (human or AI) touching this repository.

## What this project is

A **clickable prototype** of a member hub for *Gainers Lab* (forex education community, 800+ members, goal 2,000), built to convince/evaluate with a potential client. See `PRODUCT.md` for scope, `DESIGN.md` for the visual system, `ARCHITECTURE.md` for the technical shape, `TODO.md` for the plan.

## Non-negotiable scope rules

- **Mock data only.** No backend, no database, no auth, no Supabase, no external APIs, no AI, no payments.
- **No real trading anything** — no execution, brokers, deposits, withdrawals, investment advice.
- **Do not add features** because they could be useful. If it doesn't demonstrate the core concept in `PRODUCT.md`, leave it out.
- **No new dependencies** without removing the justification burden: the full allowed list is in `ARCHITECTURE.md`. No router, no state library, no icon package, no CSS framework besides Tailwind.
- **Every interactive element must work.** If a button/tab/link is visible, clicking it does something real (navigate, expand, submit, toggle). Dead controls are bugs.

## Conventions

- **Stack:** Vite + React + TypeScript (strict) + Tailwind CSS v4. Match what exists; don't restructure without reason.
- **Structure:** screens in `src/screens/`, shared UI in `src/components/`, mock content in `src/data/`. Keep files small and single-purpose.
- **Navigation:** the `Screen` union type in `App.tsx` — add a value there, render it in the screen switch, add a tab in `BottomNav` only if it's a top-level section.
- **State:** only `screen` and `questions` live in `App`. Don't introduce context/reducers for a 6-screen prototype.
- **Styling:** Tailwind utilities; colors/typography come from the tokens in `src/index.css` (`@theme`). Never hardcode a hex value that isn't in `DESIGN.md`.
- **Icons:** inline SVG in `src/components/icons.tsx` (stroke style, ~1.6 weight). No emoji as icons.
- **Copy:** plain, confident, community-oriented. Zero hype words, zero promises of profit/returns. Scam-warning language stays clear and non-alarmist.
- **Type safety:** no `any`, no `@ts-ignore` without a written reason.

## Commands

```bash
npm install
npm run dev       # dev server
npm run build     # MUST pass before sharing the build
npm run preview   # serve production build
```

## Definition of done for any change

1. `npm run build` passes.
2. The affected flow works on a phone-width viewport (360–430px).
3. No dead controls introduced.
4. `TODO.md` updated if the change was planned work.
