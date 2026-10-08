# TODO.md — Gainers Lab Hub (Build Plan)

Status legend: `[ ]` todo · `[~]` in progress · `[x]` done

## Phase 0 — Documentation & planning

- [x] Inspect repository (empty greenfield folder; Node 24 / npm 11 available)
- [x] PRODUCT.md — scope, screens, demo script, non-goals
- [x] DESIGN.md — tokens, typography, component + motion rules
- [x] ARCHITECTURE.md — stack, structure, navigation/state model
- [x] TODO.md — this file
- [x] AGENTS.md — conventions & guardrails for future sessions

## Phase 1 — Scaffold

- [x] package.json + Vite + TypeScript config
- [x] Tailwind CSS v4 via `@tailwindcss/vite`, tokens in `src/index.css`
- [x] `index.html` with Google Fonts + mobile viewport
- [x] App shell skeleton (screen state + placeholder) — verify dev server runs

## Phase 2 — Vertical slice: Welcome → Member Home

- [x] Welcome screen: brand, positioning statement, 800+ members, **Enter Gainers Lab** CTA
- [x] Shared UI kit: Button, MicroLabel, Badge, ItemRow, NoticeBlock, icons
- [x] `Screen` wrapper (top bar + entry animation) and fixed `BottomNav`
- [x] Member Home: welcome message, upcoming presentation, latest announcement,
      learning resources, official-info/scam warning, section navigation
- [x] Verify: build passes, CTA and nav all work end-to-end

## Phase 3 — Remaining screens

- [x] Learning: 4 sample resources, tap-to-expand sample descriptions
- [x] Announcements: presentation / learning / community sample announcements
- [x] Ask: free-text form → local success confirmation → question lands in Admin queue
- [x] Admin preview: Members / Announcements / Questions tabs (mock data,
      goal framing 800+ → 2,000, pending questions show NEW badge)

## Phase 4 — Polish

- [x] Mobile pass at 360px + desktop centering at ≥640px (mobile-first layout, `max-w-[520px]` centered shell)
- [x] Motion + `prefers-reduced-motion` (screen-enter/collapse-enter, disabled under reduced motion)
- [x] Copy pass: no hype, no financial promises, scam-warning clarity
- [x] Dead-control audit: every button/tab does something (verified via code search of all `onClick`/`type="submit"`)
- [x] Token collision fix: `--color-base` → `--color-night` (Tailwind `text-base` font-size conflict) + removed backdrop blur (no-glassmorphism rule)

## Phase 5 — Validation & handoff

- [x] `npm run build` clean (tsc + vite) — verified repeatedly
- [x] Dev-server smoke test: modules transform without errors on all screens;
      Welcome → Home flow + full nav wired through `App` screen state
- [x] Final read-through of the 5 docs vs. actual implementation (token rename synced to DESIGN.md)

### Known limitations (accepted for prototype scope)

- No automated browser/E2E tests — visual QA is manual (`npm run dev`).
- Refresh resets to the Welcome screen (no URL routing — by design).
- Google Fonts require network; system fallbacks apply offline.
 