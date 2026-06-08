@AGENTS.md

# Portfolio Antoine — Instructions

## ⚠️ Versions installées
- Next.js 16.2.7
- React 19.2.4
- Tailwind CSS v4
- TypeScript 5

**Tailwind v4 breaking change** : pas de `tailwind.config.ts`. La configuration se fait dans `globals.css` via `@theme {}`. Lis `node_modules/tailwindcss/dist/` avant d'écrire du CSS.

**Next.js 16 breaking change** : lis `node_modules/next/dist/docs/` avant toute chose. Ne suppose rien depuis ton entraînement sur Next.js 13/14/15.

## Objectif
Site CV/Portfolio single-page professionnel. Public : recruteurs tech, personnes curieuses.
Design : "Data Terminal Élégant" — dark, serif display pour les titres, accent vert terminal.

## Stack
- Next.js 16 App Router + TypeScript strict
- Tailwind CSS v4
- Framer Motion (animations scroll + stagger)
- next-themes (dark par défaut)

## Palette (dans globals.css via @theme pour Tailwind v4)
```css
@import "tailwindcss";

@theme {
  --color-bg-primary: #0A0A0A;
  --color-bg-surface: #111111;
  --color-bg-elevated: #1A1A1A;
  --color-accent: #1D9E75;
  --color-accent-dim: #0F6E56;
  --color-text-primary: #F5F5F0;
  --color-text-muted: #888880;
  --color-border: #222222;
}
```

## Typographie
- Titres H1/H2 : Playfair Display italic (Google Fonts)
- Corps/labels/nav : JetBrains Mono (Google Fonts)

## Structure cible
```
app/
  layout.tsx        ← fonts, metadata, ThemeProvider
  page.tsx          ← assemble toutes les sections
  globals.css
components/
  Nav.tsx
  Hero.tsx
  About.tsx
  Projects.tsx
  Skills.tsx
  Contact.tsx
  ui/
    ProjectCard.tsx
    SkillBadge.tsx
    SectionTitle.tsx
lib/
  data.ts           ← TOUTES les données ici, jamais hardcodées dans les composants
```

## Données (lib/data.ts)
```ts
export const personal = {
  name: "Antoine",
  lastName: "Vassort",
  title: "Administrateur Système & DevOps",
  subtitle: "Bachelor RNCP Niveau 6 · Paris",
  tagline: "Je construis des systèmes qui apprennent, automatisent et prédisent.",
  bio: [
    "Passionné par l'automatisation et la donnée, je conçois des systèmes capables de prendre des décisions intelligentes en temps réel.",
    "Mon approche mêle rigueur DevOps et expérimentation ML — de l'infrastructure aux algorithmes prédictifs.",
  ],
  github: "https://github.com/AntoineVassort",
  linkedin: "https://linkedin.com/in/antoine-vassort",
  email: "",
}

export const projects = [
  {
    id: "sports-prediction-platform",
    title: "Sports Prediction Platform",
    subtitle: "BasketOverPrediction + TennisOverPrediction",
    description: "Système ML pour les marchés Over/Under basketball et tennis. Ratings Elo custom, datasets ATP/WTA.",
    tags: ["Python", "Machine Learning", "Elo Rating"],
    domain: "ML / Data",
    highlight: true,
    github: "",
    demo: "",
  },
  {
    id: "auto-pip",
    title: "AutoPiP",
    subtitle: "Extension Chrome/Firefox + Userscript",
    description: "Active le Picture-in-Picture à la perte de focus, le ferme au retour. Extension MV3 (Chrome, Brave, Edge, Firefox) et userscript Tampermonkey. Support SPAs, open-source MIT.",
    tags: ["JavaScript", "Chrome Extension", "MV3", "Userscript", "Web APIs"],
    domain: "Tooling / Browser",
    highlight: false,
    github: "",
    demo: "",
  },
]

export const skills = {
  "DevOps & Infra": ["Linux", "Docker", "CI/CD", "Nginx", "Git", "Bash"],
  "Développement": ["Python", "TypeScript", "Next.js", "React", "REST API"],
  "Data & ML": ["Pandas", "Scikit-learn", "Elo Rating"],
  "Cloud & Deploy": ["Vercel", "Netlify", "GitHub Actions"],
  "Blockchain": ["Solana", "Web3.py", "Helius DAS"],
}
```

## Sprints — un à la fois, attends validation avant de continuer

### Sprint 1 — Fondations
- Vérifier la syntaxe exacte de next-themes pour Next.js 16 + React 19 avant d'installer
- Installer : `npm install framer-motion next-themes`
- Créer `lib/data.ts`
- Configurer `globals.css` avec `@import "tailwindcss"` + `@theme {}` + scrollbar fine accent vert
- Configurer `app/layout.tsx` : Google Fonts, ThemeProvider, metadata SEO

### Sprint 2 — Composants UI de base
- `components/ui/SectionTitle.tsx`
- `components/ui/ProjectCard.tsx`
- `components/ui/SkillBadge.tsx`
- `components/Nav.tsx`

### Sprint 3 — Hero + About + Projects
- `components/Hero.tsx` avec animations Framer Motion
- `components/About.tsx`
- `components/Projects.tsx`

### Sprint 4 — Skills + Contact + responsive
- `components/Skills.tsx`
- `components/Contact.tsx`
- Mobile complet, nav hamburger

### Sprint 5 — Polish & deploy
- OG image, audit perf, deploy Vercel

## Conventions
- TypeScript strict, pas de `any`
- Imports absolus `@/components/...`
- Tailwind v4 uniquement, pas de CSS Modules
- Toutes les données dans `lib/data.ts`
- Commentaires en français
- `prefers-reduced-motion` respecté