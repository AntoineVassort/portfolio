# Antoine Vassort | Portfolio

Développeur Web Full Stack & Administrateur Système DevOps. Vibe coding, développement web et applicatif, infrastructure et machine learning. Je construis des systèmes qui apprennent, automatisent et prédisent.

**En ligne : [antoine-vassort.vercel.app](https://antoine-vassort.vercel.app)** · [CV (PDF)](https://antoine-vassort.vercel.app/Antoine_Vassort_2026.pdf) · [LinkedIn](https://linkedin.com/in/antoine-vassort)

![Aperçu du portfolio](https://antoine-vassort.vercel.app/opengraph-image)

## Projets présentés

| Projet | En bref | Lien |
|---|---|---|
| **CourtVision** | Probabilités tennis calibrées (LightGBM, FastAPI), en production sur VM Oracle Cloud + Vercel | [démo](https://courtvision-lovat.vercel.app) |
| **AutoPiP** | Extension Chrome/Firefox de Picture-in-Picture automatique | [code](https://github.com/AntoineVassort/autopip) |
| **Singularity** | Slot cluster pays 6×5, en ligne sur Stake Engine (Python, Svelte 5, PixiJS) | jouable depuis le casino |
| **Project Arena** | FPS multijoueur à netcode autoritaire (Godot 4, GDScript), en cours de développement | projet privé |

## Stack du site

Next.js 16 (App Router, pages statiques régénérées toutes les heures) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · déployé sur Vercel.

Toutes les données affichées (parcours, projets, compétences) sont centralisées dans [`lib/data.ts`](lib/data.ts).

## Activité GitHub

Le graphe de contributions est récupéré côté serveur ([`lib/github.ts`](lib/github.ts)) depuis le calendrier public du profil, puis mis en cache et revalidé toutes les heures. Il n'expose que des compteurs par jour, jamais de noms de dépôts ni de code, ce qui permet de montrer l'activité de projets privés (option « Include private contributions » de GitHub). Si GitHub est injoignable, la section se masque.

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```
