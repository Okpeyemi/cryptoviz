# Pagination et Modal - Page Actualités

## 🎯 Fonctionnalités implémentées

### 1. ✅ Pagination
- **5 articles par page**
- **10 articles au total** (2 pages)
- Boutons précédent/suivant
- Numéros de pages cliquables
- Ellipses (...) pour les pages éloignées
- Scroll automatique en haut lors du changement de page

### 2. ✅ Affichage responsive

#### Desktop (lg et plus - ≥1024px)
- **Layout 3 colonnes** : 1 colonne liste + 2 colonnes détail
- Détails affichés **à droite** en permanence
- Clic sur article → Mise à jour du panneau de droite
- Panneau sticky (reste visible au scroll)

#### Mobile/Tablet (md et moins - <1024px)
- **Layout 1 colonne** : Liste uniquement
- Détails affichés en **modal** au clic
- Modal avec scroll interne
- Fermeture par X ou clic extérieur

## 📦 Composants créés

### 1. ArticleDetailModal.tsx
**Rôle** : Afficher les détails d'un article en modal sur mobile/tablet

**Props** :
- `article` : Article à afficher
- `isOpen` : État d'ouverture du modal
- `onClose` : Callback de fermeture
- `getSentimentColor` : Fonction pour colorer le sentiment

**Fonctionnalités** :
- Dialog shadcn/ui
- Scroll interne (max-h-[90vh])
- Badges (Source, Crypto, Sentiment)
- Titre + date + temps de lecture
- Contenu complet formaté
- 2 boutons d'action

### 2. Pagination.tsx
**Rôle** : Naviguer entre les pages d'articles

**Props** :
- `currentPage` : Page actuelle
- `totalPages` : Nombre total de pages
- `onPageChange` : Callback de changement de page

**Fonctionnalités** :
- Boutons précédent/suivant avec icônes
- Max 5 pages visibles
- Ellipses pour pages éloignées
- Page active en violet (variant="default")
- Boutons désactivés aux extrémités

### 3. ArticlesList.tsx (modifié)
**Nouvelles props** :
- `articles` : Tableau d'articles à afficher (paginés)

**Changement** :
- Reçoit maintenant un tableau filtré au lieu d'utiliser tous les articles

## 🎨 Logique de pagination

```tsx
const articlesPerPage = 5;
const currentPage = 1; // État

// Calcul des indices
const indexOfLastArticle = currentPage * articlesPerPage;
const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

// Articles de la page actuelle
const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

// Nombre total de pages
const totalPages = Math.ceil(articles.length / articlesPerPage);
```

## 📱 Logique responsive

```tsx
const handleArticleSelect = (id: number) => {
  setSelectedArticleId(id);
  
  // Ouvrir modal sur mobile/tablet
  if (window.innerWidth < 1024) {
    setIsModalOpen(true);
  }
};
```

### Desktop (lg)
```tsx
<div className="hidden lg:block lg:col-span-2">
  {/* Panneau de détail */}
</div>
```

### Mobile/Tablet
```tsx
<ArticleDetailModal
  article={selectedArticle}
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
/>
```

## 📊 Articles disponibles

**Total** : 10 articles

### Page 1 (Articles 1-5)
1. Bitcoin 45 000 $ (CoinDesk, BTC, Positif)
2. Ethereum Dencun (Cointelegraph, ETH, Positif)
3. SEC ETF BlackRock (CoinDesk, BTC, Neutre)
4. Solana 100$ (CoinDesk, SOL, Positif)
5. NFTs +40% (Cointelegraph, ETH, Positif)

### Page 2 (Articles 6-10)
6. Binance conformité (CoinDesk, BNB, Neutre)
7. Lightning Network 5000 BTC (Cointelegraph, BTC, Positif)
8. Cardano DEX (CoinDesk, ADA, Positif)
9. MiCA Europe (Cointelegraph, BTC, Neutre)
10. Stablecoins 150B (CoinDesk, USDT, Positif)

## 🎯 Expérience utilisateur

### Desktop
1. Page charge → Article #1 sélectionné, détails à droite
2. Clic sur article #3 → Détails se mettent à jour à droite
3. Clic sur page 2 → Affiche articles 6-10
4. Scroll → Panneau de détail reste visible (sticky)

### Mobile/Tablet
1. Page charge → Liste d'articles uniquement
2. Clic sur article #2 → Modal s'ouvre avec détails
3. Lecture → Scroll dans le modal
4. Fermeture → Retour à la liste
5. Clic sur page 2 → Affiche articles 6-10

## 🔧 Composants shadcn ajoutés

```bash
npx shadcn@latest add dialog
```

**Dialog** : Modal responsive avec overlay

## 📁 Fichiers créés/modifiés

### Créés
- `components/ArticleDetailModal.tsx` - Modal pour mobile/tablet
- `components/Pagination.tsx` - Navigation entre pages
- `components/ui/dialog.tsx` - shadcn Dialog

### Modifiés
- `components/ArticlesList.tsx` - Ajout prop `articles`, 10 articles
- `app/actualites/page.tsx` - Pagination + modal + responsive

## 🎨 Breakpoints

- **Mobile** : < 768px (md)
- **Tablet** : 768px - 1023px (md-lg)
- **Desktop** : ≥ 1024px (lg)

**Comportement** :
- `< 1024px` : Modal
- `≥ 1024px` : Panneau à droite

## ✨ Améliorations futures

### Court terme
- [ ] Animation de transition du modal
- [ ] Loader pendant le chargement
- [ ] Nombre d'articles par page configurable

### Moyen terme
- [ ] Filtres fonctionnels (source, crypto, sentiment)
- [ ] Recherche en temps réel
- [ ] Tri (date, popularité)
- [ ] URL avec paramètres de page

### Long terme
- [ ] Infinite scroll en option
- [ ] Préchargement des pages adjacentes
- [ ] Historique de navigation
- [ ] Favoris avec localStorage

## ✅ Checklist

- ✅ 10 articles créés avec contenu complet
- ✅ Pagination fonctionnelle (5 articles/page)
- ✅ Desktop : Détails à droite
- ✅ Mobile/Tablet : Détails en modal
- ✅ Responsive breakpoint à 1024px
- ✅ Scroll automatique au changement de page
- ✅ Badge source sur chaque article
- ✅ Sentiment coloré (vert/rouge/gris)
- ✅ Boutons précédent/suivant
- ✅ Numéros de pages cliquables

---

**Version** : 2.2.0  
**Date** : 31 octobre 2025  
**Statut** : ✅ 100% Fonctionnel  
**Serveur** : http://localhost:3000/actualites
