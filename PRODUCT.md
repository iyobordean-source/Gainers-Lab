# PRODUCT.md — Gainers Lab Hub (Interactive Prototype)

## What this is

A polished, clickable, mobile-first **prototype** of a dedicated member hub for **Gainers Lab**, a community forex education / trading community.

It exists for one purpose: to let the owner **experience the idea** on his phone and decide whether he wants us to build the real system.

It is a demo artifact, not a product release.

## What this is NOT

- Not production software. Not a SaaS.
- No backend, no database, no authentication, no Supabase.
- No external APIs, no AI, no payments.
- **No trading execution, no brokers, no deposits, no withdrawals, no financial transactions, no investment advice.**
- No real data — every member, announcement, question and statistic is sample/mock content.

## The problem this prototype demonstrates

Gainers Lab has **800+ members** (goal: **2,000**) and communicates through a WhatsApp/Telegram-style community. As it grows:

- Announcements and presentation schedules get buried in chat scroll.
- Learning material is scattered and hard to find for beginners.
- Members cannot easily distinguish **official Gainers Lab information from scammers**.

The Hub shows how a dedicated member home could make onboarding, learning resources, announcements and official information easy to access — in one trustworthy place.

## Screens & flows (the complete scope)

| # | Screen | Purpose | Must show |
|---|--------|---------|-----------|
| 1 | **Welcome / Landing** | Entry point, set trust & tone | Brand, short positioning statement, "800+ community members", **Enter Gainers Lab** CTA |
| 2 | **Member Home** | The hub overview | Welcome message, upcoming presentation, latest announcement, learning resources, official-info / scam warning, navigation to all main sections |
| 3 | **Learning** | Sample beginner education | Forex basics, Buy vs Sell, Market terminology, Risk management basics (expandable sample descriptions) |
| 4 | **Announcements** | Community communication | Upcoming presentation, new learning material, community updates (realistic sample copy) |
| 5 | **Ask Questions** | Member → owner channel | Free-text question, submit, **local success confirmation** (mock state only) |
| 6 | **Admin Preview** | Owner's future management view | Three tabs: Members, Announcements, Questions — mock data, read-mostly |

### Navigation model

- Screen 1 (Welcome) → **Enter Gainers Lab** → Screen 2 (Home).
- A persistent **bottom tab bar** on screens 2–6: Home · Learn · Announce · Ask · Admin.
- Every button, tab and link shown must actually do something. No dead controls.

## Content inventory (all mock)

- 1 upcoming presentation (title, date, speaker, format).
- 3–4 announcements across categories: presentation, learning material, community update, official/scam notice.
- 4 beginner learning resources with short expandable sample descriptions.
- 8–10 sample member records (name, joined date, status) + the 800+ / 2,000 goal framing.
- A small question queue; questions submitted in the Ask screen appear in the Admin preview.

## Demo script (how to walk the client through it)

1. Open on a phone → see Welcome, feel the brand.
2. Enter → land on Home, point out upcoming presentation + latest announcement.
3. Open the scam/official-info warning → the trust angle.
4. Browse Learning → tap a resource to expand it.
5. Check Announcements → realistic community updates.
6. Ask a question → show the success confirmation.
7. Open Admin Preview → "this is roughly what you'd eventually manage."

## Success criteria

- Loads fast, works in a mobile browser, nothing crashes or dead-ends.
- The client can navigate the whole demo **without instructions**.
- Looks premium, dark, trustworthy — not like a generic AI SaaS template.
- The client immediately understands what the real system would be.

## Explicitly out of scope (do not build)

Trade execution · brokers · deposits/withdrawals · payments · auth/login · real user accounts · push notifications · chat/messaging · analytics dashboards · multi-language · CMS · email · anything requiring a server.
