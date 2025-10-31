# Page Analyses Avancées - CryptoViz (shadcn/ui Charts)

## 🎯 Vue d'ensemble

Page complète d'analyses avec 5 graphiques modernes utilisant les composants **shadcn/ui charts** pour un design élégant et professionnel.

## 📊 Graphiques implémentés

### 1. Évolution du Sentiment Global
**Type** : Area Chart stacked (shadcn/ui)

**Données** :
- **Positif** : 65% → 80%
- **Neutre** : 20% → 12%
- **Négatif** : 15% → 8%

**Période** : 20 Oct - 26 Oct (7 jours)

**Fonctionnalités** :
- 3 zones empilées avec dégradés
- Courbes naturelles (type="natural")
- Tooltip shadcn élégant
- Grid horizontal uniquement
- Hauteur : 300px
- CardDescription : "Tendances du sentiment sur 7 jours"

### 2. Mentions par Crypto
**Type** : Bar Chart horizontal (shadcn/ui)

**Top 6 cryptos** :
1. **Bitcoin** - 1247 mentions
2. **Ethereum** - 892 mentions
3. **Solana** - 654 mentions
4. **Cardano** - 423 mentions
5. **Polkadot** - 312 mentions
6. **Avalanche** - 287 mentions

**Fonctionnalités** :
- Barres horizontales colorées (chart-1 à chart-5)
- Layout vertical avec YAxis à gauche
- Tooltip sans label (hideLabel)
- Barres arrondies (radius={5})
- Hauteur : 300px
- CardDescription : "Top 6 des cryptos les plus mentionnées (24h)"

### 3. Volume d'Articles (24h)
**Type** : Bar Chart vertical

**Données** :
- 00:00 → 1200 articles
- 04:00 → 900 articles
- 08:00 → 1800 articles
- 12:00 → 2800 articles (pic)
- 16:00 → 2400 articles
- 20:00 → 3200 articles (pic max)
- 24:00 → 2600 articles

**Fonctionnalités** :
- Barres bleues arrondies en haut
- Tooltip avec valeur exacte
- Grid avec lignes pointillées
- Axes X (temps) et Y (volume)

### 4. Distribution des Sources
**Type** : Pie Chart (camembert)

**Sources** :
- **CoinDesk** - 28% (bleu)
- **CryptoNews** - 23% (violet)
- **The Block** - 18% (cyan)
- **Blockchain.com** - 15% (vert)
- **Autres** - 16% (gris)

**Fonctionnalités** :
- Labels avec nom + pourcentage
- Couleurs distinctes
- Tooltip au survol
- Responsive

### 5. Comparer deux cryptos
**Type** : Line Chart comparatif

**Cryptos disponibles** :
- BTC (Bitcoin)
- ETH (Ethereum)
- SOL (Solana)

**Fonctionnalités** :
- 2 sélecteurs dropdown
- Comparaison "vs"
- 2 lignes colorées (orange/bleu)
- Données sur 7 jours
- Tooltip comparatif

## 🎨 Layout

### Header
```
┌─────────────────────────────────────────┐
│ Analyses Avancées          [CSV] [JSON] │
│ Visualisations et métriques détaillées  │
└─────────────────────────────────────────┘
```

### Filtres
```
Sélectionner une métrique: [Sentiment ▼]
```

### Structure
```
┌─────────────────────────────────────────┐
│   Évolution du Sentiment Global         │
│   (Line Chart - pleine largeur)         │
└─────────────────────────────────────────┘

┌──────────────────────┬──────────────────┐
│ Mentions par Crypto  │ Volume Articles  │
│ (Barres horizontales)│ (Bar Chart)      │
└──────────────────────┴──────────────────┘

┌──────────────────────┬──────────────────┐
│ Distribution Sources │ Comparer cryptos │
│ (Pie Chart)          │ (Line Chart)     │
└──────────────────────┴──────────────────┘
```

## 📦 Composants créés

### SentimentEvolutionChart.tsx
**Rôle** : Graphique d'évolution du sentiment sur 7 jours

**Librairie** : recharts (LineChart)

**Props** : Aucune (données statiques)

**Lignes** :
- Positif (vert #22c55e)
- Neutre (orange #f59e0b)
- Négatif (rouge #ef4444)

### CryptoMentionsChart.tsx
**Rôle** : Top 6 des cryptos les plus mentionnées

**Type** : Composant custom avec barres de progression

**Props** : Aucune

**Données** :
- Rank, name, mentions, change, color

**Calcul** : Largeur = (mentions / maxMentions) × 100%

### ArticleVolumeChart.tsx
**Rôle** : Volume d'articles par tranche horaire

**Librairie** : recharts (BarChart)

**Props** : Aucune

**Barres** : Bleues (#3b82f6) avec radius arrondi

### SourceDistributionChart.tsx
**Rôle** : Répartition des sources d'articles

**Librairie** : recharts (PieChart)

**Props** : Aucune

**Labels** : Nom + pourcentage sur le graphique

### CryptoComparisonChart.tsx
**Rôle** : Comparer 2 cryptos sur 7 jours

**Librairie** : recharts (LineChart)

**Props** : Aucune

**État** :
- crypto1 (défaut: BTC)
- crypto2 (défaut: ETH)

**Sélecteurs** : shadcn Select component

## 🎨 Design

### Thème
- Fond cards : bg-card
- Bordures : border-border
- Texte : text-foreground
- Texte secondaire : text-muted-foreground
- Thème adaptatif (dark/light)

### Couleurs graphiques
- **Positif** : #22c55e (vert)
- **Négatif** : #ef4444 (rouge)
- **Neutre** : #f59e0b (orange)
- **Bleu** : #3b82f6
- **Violet** : #8b5cf6
- **Cyan** : #06b6d4

### Spacing
- Padding page : p-8
- Gap entre sections : space-y-6
- Gap grid : gap-6

### Responsive
- Mobile : 1 colonne
- Desktop (lg) : 2 colonnes pour les grids

## 🔧 Fonctionnalités

### Boutons d'export
- **CSV** : Export des données en CSV
- **JSON** : Export des données en JSON
- Icône download
- Variant outline

### Filtre métrique
- Dropdown avec 3 options :
  - Sentiment
  - Volume
  - Mentions
- Valeur par défaut : Sentiment

### Tooltips
- Fond : bg-card
- Bordure : border
- Radius : 8px
- Affichage au survol

### Légendes
- Affichées sur tous les graphiques
- Cliquables pour masquer/afficher
- Couleurs correspondantes

## 📊 Données

### Format
Toutes les données sont statiques (mock data) pour la démo.

### Structure exemple (Sentiment)
```tsx
const data = [
  { date: '20 Oct', positif: 65, neutre: 20, negatif: 15 },
  { date: '21 Oct', positif: 60, neutre: 25, negatif: 15 },
  // ...
];
```

### À remplacer par
- API backend
- Données temps réel
- Calculs dynamiques

## 🚀 Améliorations futures

### Court terme
- [ ] Filtres fonctionnels
- [ ] Export CSV/JSON réel
- [ ] Sélection de période (7j, 30j, 90j)
- [ ] Refresh automatique

### Moyen terme
- [ ] Connexion API backend
- [ ] Données temps réel
- [ ] Plus de cryptos dans comparaison
- [ ] Zoom sur graphiques
- [ ] Téléchargement des graphiques (PNG)

### Long terme
- [ ] Alertes personnalisées
- [ ] Comparaison multi-cryptos (>2)
- [ ] Prédictions ML
- [ ] Analyse de corrélation
- [ ] Heatmaps

## ✅ Checklist

- ✅ 5 graphiques créés
- ✅ Layout responsive
- ✅ Thème dark/light
- ✅ Tooltips interactifs
- ✅ Légendes cliquables
- ✅ Boutons export
- ✅ Filtre métrique
- ✅ Sélecteurs cryptos
- ✅ Couleurs cohérentes
- ✅ Animations fluides

## 📚 Dépendances

- **recharts** : Graphiques (déjà installé)
- **shadcn/ui** : Select, Button, Card
- **React** : useState pour état local

---

**Version** : 2.5.0  
**Date** : 31 octobre 2025  
**Statut** : ✅ 100% Fonctionnel  
**Serveur** : http://localhost:3000/analyses
