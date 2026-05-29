# SIMBADDA — UI/UX POC

Presentation-ready frontend mockup for **Simbadda Group**: public marketing website. No backend or real API integration.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Framer Motion

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Routes

| Path | Page |
|------|------|
| `/` | Landing (hero, products, banners, news) |
| `/about` | About |
| `/news` | News listing + search |
| `/news/:slug` | Article detail |
| `/gallery` | Gallery with preview modal |
| `/contact` | Contact form |

## Project Structure

```
src/
├── components/
│   └── public/      # Website components
├── data/            # Dummy data
├── layouts/         # Public layout
├── pages/
│   └── public/
├── lib/             # Utils & assets
└── types/
```

## Assets

Brand images are in `public/assets/` (logo, hero, products, lifestyle).

## Build

```bash
npm run build
npm run preview
```

---

**POC Demo** — Forms and actions are UI-only; no persistence or authentication backend.
# simbadda
