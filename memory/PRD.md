# Hanna & Niyas — Wedding Invitation Website

## Original problem statement
"Build me a wedding invitation website, I have attached the function details, ask me if you have questions, it should be minimal, good looking, clean and lovely."
User provided two invitation cards: (1) a cream Nikkah card and (2) a maroon Reception card.

## User choices (confirmed)
- Go with defaults; **no RSVP** needed.
- Envelope reveal animation on entry.
- Blended cream → maroon theme.

## Architecture
- Frontend only: React 19 + Tailwind + Framer Motion.
- Single-page marketing-style invitation.
- No backend data flows (FastAPI/Mongo template kept unchanged).
- Fonts: Great Vibes (script), Cormorant Garamond (serif), Montserrat (body), Amiri (Arabic).

## What's implemented (2026-04-19)
- Envelope overlay with 3D flap-open animation and gold wax seal ("H&N"), body scroll locked until opened.
- Hero: Bismillah (Arabic + English), couple names in ornamental script, live countdown to Nikkah (10 May 2026 12:00 IST).
- Nikkah section: bride/groom family details with grandparents, venue card (Century Staples Convention Centre, Erattupetta), "View Map" + "Add to Calendar" (Google Calendar link).
- Reception section: maroon velvet background, gold corner vines, groom-family invitation text, reception venue card (Nehru Memorial Town Hall, Mattanchery), map + calendar links.
- Footer: "With love, Hanna & Niyas", siblings/family acknowledgements, phone numbers, Arabic closing (جزاكم الله خيرا).
- Mobile-first responsive design with staggered framer-motion fade-ins.

## Core requirements (static)
- Minimal, elegant Muslim wedding aesthetic.
- Both events (Nikkah 10 May, Reception 11 May 2026) clearly displayed.
- Working Google Maps + Add-to-Calendar links.
- No authentication, no database, no third-party LLM integrations.

## Backlog (P1 / P2)
- P1: Photo gallery / "Our Story" section with couple photos.
- P1: Background instrumental music toggle (user can mute/unmute).
- P2: Guest-name personalization via URL parameter (e.g., `?to=Ahmed` → "Dear Ahmed").
- P2: Share on WhatsApp / Copy Link button.
- P2: Directions-with-travel-time via Google Maps Embed (live).
