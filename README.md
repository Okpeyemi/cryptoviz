# 🚀 CryptoViz

**CryptoViz** est un dashboard moderne d'analyse de cryptomonnaies et d'actualités crypto. Construit avec Next.js 16, React 19, TypeScript et Tailwind CSS v4, il offre une interface élégante et responsive pour suivre les tendances du marché crypto.

![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)

---

## ✨ Fonctionnalités

### 📊 Dashboard Principal
- **Statistiques en temps réel** : Volume total, articles analysés, sentiment moyen, cryptos suivies
- **Graphiques interactifs** : Évolution des prix (BTC, ETH), distribution des sentiments
- **Comparaison multi-cryptos** : Visualisation comparative avec sélection de période
- **Actualités récentes** : Flux d'articles avec scores de sentiment

### 📰 Actualités
- **Liste d'articles** paginée avec filtres par source et sentiment
- **Détail d'article** en sidebar desktop ou modal mobile/tablet
- **Recherche et filtrage** avancés
- **Badges de sentiment** colorés (positif, neutre, négatif)
- **Responsive design** adaptatif

### 📈 Analyses
- **Distribution des sentiments** : Graphique en barres
- **Tendances temporelles** : Évolution du sentiment sur 7 jours
- **Volume de trading** : Graphique en barres par jour
- **Top cryptos** : Classement avec variations et volumes
- **Export de données** (à venir)

### 🕐 Historique
- **Timeline controller** : Sélection de période (24H, 7J, 1M, 3M, 1A, Tout)
- **Métriques clés** : Volume, articles, sentiment, cryptos suivies
- **Évolution des prix** : AreaChart double (BTC/ETH)
- **Historique du sentiment** : LineChart sur 7 jours
- **Volume de trading** : BarChart vertical
- **Timeline d'événements** : Événements marquants avec impact

### ⚙️ Paramètres
- **Configuration de collecte** : Fréquence (5/10/15/30/60 min)
- **Gestion des sources** : 6 sources activables/désactivables
- **État des services** : Web Scrapper, Analytics Builder
- **Logs système** : Console temps réel avec scroll

---

## 🛠️ Technologies

### Core
- **[Next.js 16.0.1](https://nextjs.org/)** - Framework React avec Turbopack
- **[React 19](https://react.dev/)** - Bibliothèque UI
- **[TypeScript 5](https://www.typescriptlang.org/)** - Typage statique
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework CSS utility-first

### UI Components
- **[shadcn/ui](https://ui.shadcn.com/)** - Composants React réutilisables
- **[Recharts](https://recharts.org/)** - Bibliothèque de graphiques
- **[Lucide Icons](https://lucide.dev/)** - Icônes SVG

### Styling & Fonts
- **[Work Sans](https://fonts.google.com/specimen/Work+Sans)** - Police Google Fonts
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Gestion du thème dark/light

### State Management
- **React Context API** - Gestion d'état (Sidebar)
- **React Hooks** - useState, useEffect, usePathname

---

## 📁 Structure du Projet

```
cryptoviz/
├── app/                          # Pages Next.js (App Router)
│   ├── actualites/              # Page Actualités
│   ├── analyses/                # Page Analyses
│   ├── historique/              # Page Historique
│   ├── parametres/              # Page Paramètres
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Dashboard (page d'accueil)
│   └── globals.css              # Styles globaux
├── components/                   # Composants React
│   ├── ui/                      # Composants shadcn/ui
│   ├── historique/              # Composants Historique
│   ├── parametres/              # Composants Paramètres
│   ├── ArticlesList.tsx         # Liste d'articles
│   ├── ArticleDetailModal.tsx   # Modal détail article
│   ├── BottomNav.tsx            # Navigation mobile
│   ├── CryptoComparisonChart.tsx # Graphique comparaison
│   ├── DashboardHeader.tsx      # Header principal
│   ├── DashboardSidebar.tsx     # Sidebar navigation
│   ├── MainContent.tsx          # Conteneur principal
│   ├── Pagination.tsx           # Pagination
│   ├── SentimentDistribution.tsx # Graphique sentiment
│   ├── StatsCard.tsx            # Carte statistique
│   └── ThemeToggle.tsx          # Toggle thème
├── contexts/                     # Contextes React
│   └── SidebarContext.tsx       # Contexte sidebar
├── lib/                         # Utilitaires
│   └── utils.ts                 # Fonctions helper
├── public/                      # Assets statiques
├── .eslintrc.json              # Configuration ESLint
├── next.config.ts              # Configuration Next.js
├── package.json                # Dépendances
├── tailwind.config.ts          # Configuration Tailwind
├── tsconfig.json               # Configuration TypeScript
└── README.md                   # Documentation
```

---

## 🚀 Installation

### Prérequis
- **Node.js** 18.x ou supérieur
- **npm**, **yarn**, **pnpm** ou **bun**

### Étapes

1. **Cloner le repository**
```bash
git clone <repository-url>
cd cryptoviz
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

---

## 📜 Scripts Disponibles

```bash
npm run dev          # Lancer le serveur de développement (Turbopack)
npm run build        # Build de production
npm run start        # Démarrer le serveur de production
npm run lint         # Linter le code avec ESLint
```

---

## 🎨 Design System

### Thèmes
- **Light Mode** : Fond clair, texte sombre
- **Dark Mode** : Fond sombre, texte clair
- **System** : Suit les préférences système

### Couleurs
- **Primary** : Violet (`hsl(var(--primary))`)
- **Secondary** : Gris (`hsl(var(--secondary))`)
- **Success** : Vert (sentiment positif)
- **Warning** : Orange (sentiment neutre)
- **Destructive** : Rouge (sentiment négatif)
- **Charts** : 5 couleurs (bleu, vert, orange, violet, cyan)

### Typographie
- **Police** : Work Sans (300, 400, 500, 600, 700)
- **Tailles** : text-xs, text-sm, text-base, text-lg, text-xl, text-2xl

### Responsive Breakpoints
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

---

## 📱 Fonctionnalités Responsive

### Mobile (< 768px)
- Navigation bottom bar (5 icônes)
- Sidebar masquée
- Grilles 1 colonne
- Modal plein écran pour détails

### Tablet (768px - 1024px)
- Navigation bottom bar
- Sidebar masquée
- Grilles 2 colonnes
- Modal overlay pour détails

### Desktop (> 1024px)
- Sidebar fixe (collapsible)
- Navigation dans sidebar
- Grilles 4 colonnes
- Détails en sidebar droite

---

## 🔧 Configuration

### Tailwind CSS v4
Le projet utilise Tailwind CSS v4 avec configuration inline dans `globals.css` :
- Variables CSS personnalisées
- Thème dark/light
- Couleurs adaptatives
- Animations

### Next.js
Configuration dans `next.config.ts` :
- Turbopack activé
- App Router
- TypeScript strict mode

### TypeScript
Configuration dans `tsconfig.json` :
- Strict mode activé
- Path aliases (`@/`)
- JSX preserve

---

## 📊 Données

Actuellement, le projet utilise des **données mock statiques** pour la démonstration.

### À implémenter
- API backend pour données réelles
- WebSocket pour temps réel
- Base de données (PostgreSQL/MongoDB)
- Authentification utilisateur
- Sauvegarde des préférences

---

## 🚧 Roadmap

### Phase 1 - Backend (À venir)
- [ ] API REST avec Express/Fastify
- [ ] Web scraping automatique
- [ ] Analyse de sentiment avec NLP
- [ ] Base de données PostgreSQL
- [ ] Cache Redis

### Phase 2 - Features (À venir)
- [ ] Authentification (NextAuth.js)
- [ ] Profils utilisateurs
- [ ] Favoris et alertes
- [ ] Export CSV/PDF
- [ ] Notifications push
- [ ] Recherche avancée

### Phase 3 - Analytics (À venir)
- [ ] Prédictions ML
- [ ] Corrélations multi-cryptos
- [ ] Analyse technique
- [ ] Backtesting
- [ ] API publique

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📝 License

Ce projet est sous licence **MIT**. Voir le fichier `LICENSE` pour plus de détails.

---

## 👤 Auteur

**Maqsoud TAWALIOU**

---

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) - Framework React
- [shadcn/ui](https://ui.shadcn.com/) - Composants UI
- [Recharts](https://recharts.org/) - Graphiques
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Vercel](https://vercel.com/) - Hébergement

---

## 📞 Support

Pour toute question ou problème, ouvrir une issue sur GitHub.

---

**Made with ❤️ and ☕**
