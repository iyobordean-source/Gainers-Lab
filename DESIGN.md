# DESIGN.md — Gainers Lab Hub (Visual System)

## Direction

**Premium · dark · modern · trustworthy · financial-community · mobile-first.**

The reference feeling is a private members' terminal, not a consumer app and not a startup landing page. Restrained color, strong hierarchy, confident typography, generous breathing room.

## Design principles

1. **Hierarchy over decoration.** Size, weight and space do the work — not borders, shadows or icons everywhere.
2. **One accent color.** Jade green ("gains") is used deliberately for primary actions, active nav and key numbers. Amber is reserved exclusively for warnings / official notices.
3. **Fewer cards.** Cards only for genuinely repeated items (announcements, resources, members). Sections on Home are separated by rules and spacing, not by boxing everything.
4. **Honesty in numbers.** The only statistic shown is the brief's real one (800+ members / 2,000 goal). No invented charts, no fake dashboards, no vanity metrics.
5. **Thumb-first.** Primary actions and navigation live in the lower half of the screen. Tap targets ≥ 44px.

## Hard "do NOT" list

- ❌ Purple/blue AI gradients, neon glows
- ❌ Glassmorphism, frosted panels, heavy blur
- ❌ Excessive / nested cards, dashboard mosaics
- ❌ Fake statistics, chart decoration, "AI-powered" fluff
- ❌ Stock-template UI, emoji-as-icon
- ❌ More than one accent hue per screen (amber warnings excepted)

## Color tokens

| Token | Hex | Usage |
|---|---|---|
| `--night` | `#070A09` | App background (near-black, green undertone) — named `night` because `base` collides with Tailwind's `text-base` font-size utility |
| `--surface` | `#0D1211` | Raised sections, tab bar |
| `--surface-2` | `#131A18` | Item surfaces (announcement rows, inputs) |
| `--line` | `#1F2926` | Hairline borders, dividers |
| `--ink` | `#EBF1EE` | Primary text |
| `--muted` | `#8D9C95` | Secondary text, labels |
| `--accent` | `#2BD98C` | Primary CTA, active nav, key highlights |
| `--accent-deep` | `#12B876` | Pressed / hover state |
| `--warn` | `#F0B429` | Scam warning, official-information markers |
| `--danger` | `#E5654F` | Scam/alert emphasis only, sparingly |

Rules: accent never used for large background fills; text on accent is `--night` (dark-on-green), never white-on-green.

## Typography

Loaded from Google Fonts in `index.html`, with system-font fallbacks so the prototype still renders correctly offline.

| Role | Family | Weights |
|---|---|---|
| Display / headings | **Sora** | 600 / 700 |
| Body / UI | **Inter** | 400 / 500 / 600 |
| Editorial accent | **Instrument Serif** (italic only) | 400 italic — used for ONE emphasis word in large headings, never for body copy |

Scale (mobile-first): 11 (micro-label, uppercase + 0.08em tracking) · 13 · 14 · 16 (body) · 18 · 22 · 28 · 34 (display).

Numbers use `font-variant-numeric: tabular-nums`.

## Layout & spacing

- Mobile-first: designed at 360–430px wide; gracefully centered in a max-width column (~520px) on desktop so it still reads as the mobile product it is.
- 4px spacing base; screen side padding 20px.
- Radius: 12px items · 16px panels · 999px pills/buttons.
- Borders: 1px `--line`. Shadows minimal (panels lift, nothing glows).
- Bottom tab bar is fixed; content area reserves its height.

## Components

- **Button, primary:** pill, `--accent` bg, `--night` text, 48px tall.
- **Button, ghost:** pill, transparent, 1px `--line` border, `--ink`.
- **Micro-label:** 11px uppercase, `--muted`, letter-spaced — used to head each Home section.
- **Item row:** `--surface-2`, 1px `--line`, radius 12, full-width, whole row is tappable where applicable.
- **Pill/badge:** radius 999, 11px uppercase — statuses (LIVE, DRAFT, PUBLISHED, NEW).
- **Notice block (scam/official):** `--surface` with 1px `--warn` border at low opacity and amber micro-label. Only place amber appears.
- **Icons:** inline SVG only (stroke-based, 1.5–1.75 weight). **No icon library dependency.**

## Motion

- Screen entry: 180ms fade + 8px rise, `ease-out`.
- Expand/collapse (learning items): 200ms height/opacity.
- Tab switch: instant content, active tab indicator animates.
- Respect `prefers-reduced-motion: reduce` → disable transforms.

## Voice / copy

Confident, plain, community-oriented. Short sentences. No hype words ("revolutionary", "AI-driven"), no financial promises, no "guaranteed profits" language anywhere — the brand is education and community, not signals or returns.
