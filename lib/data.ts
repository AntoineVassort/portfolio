export const personal = {
  name: "Antoine",
  lastName: "Vassort",
  title: "Développeur Web Full Stack & Administrateur Système DevOps",
  subtitle: "Bachelor RNCP Niveau 6 · Paris",
  tagline: "Je construis des systèmes qui apprennent, automatisent et prédisent.",
  status: "En recherche de CDI",
  location: "Biarritz / Paris",
  phone: "06 37 95 33 21",
  bio: [
    "Passionné par l'automatisation et la donnée, je conçois des systèmes capables de prendre des décisions intelligentes en temps réel.",
    "Mon approche mêle rigueur DevOps et expérimentation ML, de l'infrastructure aux algorithmes prédictifs.",
  ],
  github: "https://github.com/AntoineVassort",
  linkedin: "https://linkedin.com/in/antoine-vassort",
  email: "antoine.clean@gmail.com",
  languages: ["Français (maternel)", "Anglais (courant)", "Espagnol (scolaire)"],
}

export const experiences = [
  {
    id: "bachelor-devops",
    type: "education" as const,
    period: "2025-2026",
    title: "Bachelor Administrateur Système DevOps",
    organization: "Titre RNCP Niveau 6",
    bullets: [
      "Administration de serveurs Linux, virtualisation et conteneurisation (Docker, Kubernetes).",
      "Automatisation d'infrastructure avec Ansible et Terraform (Infrastructure as Code).",
      "Mise en place de pipelines CI/CD (Jenkins, GitLab CI) et pratiques d'intégration continue.",
      "Déploiement et gestion de services Cloud (AWS, Azure, GCP).",
      "Supervision, monitoring et gestion des incidents en production.",
    ],
    current: false,
  },
  {
    id: "freelance-dev",
    type: "work" as const,
    period: "2023-2025",
    title: "Développeur Web Freelance",
    organization: "",
    bullets: [
      "Création de sites internet personnels (React, Node.js) pour approfondir et élargir mes compétences.",
      "Missions d'intérim chez Picard Surgelés en parallèle (polyvalence, rigueur opérationnelle).",
    ],
    current: false,
  },
  {
    id: "le-wagon",
    type: "education" as const,
    period: "2023",
    title: "Le Wagon BootCamp : Développeur Full Stack",
    organization: "Titre RNCP 35653 Niveau 6",
    bullets: [
      "Projet principal : plateforme de certification d'expériences professionnelles (Ruby on Rails, JavaScript, PostgreSQL).",
      "Développement full stack en équipe agile (Scrum) avec livraisons itératives.",
      "Conception de bases de données relationnelles, APIs REST et interfaces UI/UX.",
    ],
    current: false,
  },
  {
    id: "bts-sio",
    type: "education" as const,
    period: "2019-2020",
    title: "BTS SIO, Option Développement",
    organization: "",
    bullets: [],
    current: false,
  },
]

export const projects = [
  {
    id: "courtvision",
    title: "CourtVision",
    subtitle: "Probabilités tennis calibrées et prouvées",
    description:
      "Prédit le vainqueur des matchs ATP, WTA, Challenger et WTA 125 : LightGBM + Platt sur ~193k matchs, Elo maison. Hors échantillon 2026 : 68,6 % de précision, ECE 0,015, fiabilité publique. En production 24 h/24 sans frais : API sur VM Oracle Cloud (systemd, Caddy HTTPS), worker supervisé qui pousse des snapshots atomiques toutes les 10 min, front sur Vercel.",
    tags: ["Python", "LightGBM", "FastAPI", "Next.js", "Oracle Cloud", "systemd", "Caddy"],
    domain: "ML / Data",
    highlight: true,
    github: "",
    demo: "https://courtvision-lovat.vercel.app",
  },
  {
    id: "auto-pip",
    title: "AutoPiP",
    subtitle: "Extension Chrome/Firefox + Userscript",
    description:
      "PiP automatique au changement d'onglet : détecte la plus grande vidéo en cours, ignore les pubs muettes. Support SPAs (YouTube, Twitch, Vimeo), MV3, zéro tracking. Compatible Chrome, Firefox, Edge, Brave. MIT.",
    tags: ["JavaScript", "Chrome Extension", "MV3", "Userscript", "Web APIs"],
    domain: "Tooling / Browser",
    highlight: true,
    github: "https://github.com/AntoineVassort/autopip",
    demo: "",
  },
  {
    id: "singularity",
    title: "Singularity",
    subtitle: "Slot en ligne sur Stake Engine",
    description:
      "Slot 6×5 à cascades et mécanique signature « Core » (un cœur gravitationnel aspire la couleur dominante en cluster garanti). Moteur mathématique en Python : 5 modes à 96 % de RTP, gain max 10 000×, 300K simulations par mode, conformité vérifiée avec l'outillage officiel. Front en Svelte 5, PixiJS v8 et TypeScript, animations Spine, audio synthétisé, suite de tests automatisés. Publiée sur Stake Engine et jouable directement depuis le casino.",
    tags: ["Python", "TypeScript", "Svelte 5", "PixiJS", "Stake Engine", "Spine"],
    domain: "Gaming / Maths",
    highlight: true,
    github: "",
    demo: "",
  },
  {
    id: "project-arena",
    title: "Project Arena",
    subtitle: "FPS multijoueur compétitif (en développement)",
    description:
      "FPS d'arène inspiré de Quake et Unreal Tournament, visé 200 à 400 FPS. Netcode client/serveur autoritaire (ENet/UDP, serveur dédié headless, compensation de latence), bots, modes FFA, TDM, Instagib, Duel en rounds et parcours de jump procéduraux (bhop, surf). Menus localisés en 4 langues, textures PBR, tests automatisés en ligne de commande. Projet en cours de développement.",
    tags: ["Godot 4", "GDScript", "Netcode", "ENet", "Multijoueur"],
    domain: "Gaming / Réseau",
    highlight: true,
    github: "",
    demo: "",
  },
]

export const skills = {
  "DevOps & Infra": ["Linux", "Docker", "Kubernetes", "Ansible", "Terraform", "CI/CD", "Nginx", "Bash", "GitLab CI", "Jenkins"],
  "Cloud": ["AWS", "Azure", "GCP", "Vercel", "GitHub Actions"],
  "Développement": ["Python", "TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Ruby on Rails", "REST API", "SQL"],
  "Data & ML": ["Pandas", "Scikit-learn", "LightGBM", "Elo Rating"],
}
