# Layout Dynamique - Page Actualités

## 🎯 Comportement

La page actualités a maintenant un **layout dynamique** qui s'adapte selon la sélection d'article.

### Par défaut (aucun article sélectionné)
- **Liste d'articles** prend **toute la largeur** (100%)
- Panneau de détail **masqué**
- Layout : **1 colonne**

### Après clic sur un article (Desktop)
- **Liste d'articles** se réduit à **1/3** de la largeur
- **Panneau de détail** apparaît et prend **2/3** de la largeur
- Layout : **3 colonnes** (1 + 2)
- Transition fluide de 300ms

### Mobile/Tablet (< 1024px)
- Liste reste **pleine largeur**
- Détail s'ouvre en **modal**
- Pas de changement de layout

## 🔧 Implémentation

### État initial
```tsx
const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);
const [isDesktop, setIsDesktop] = useState(false);
```

**Changement clé** : `selectedArticleId` commence à `null` au lieu de `1`

### Détection du desktop
```tsx
useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };
  
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

### Layout dynamique
```tsx
<div className={`grid gap-6 transition-all duration-300 ${
  selectedArticleId && isDesktop ? 'lg:grid-cols-3' : 'grid-cols-1'
}`}>
```

**Logique** :
- Si article sélectionné ET desktop → `grid-cols-3`
- Sinon → `grid-cols-1`

### Liste d'articles
```tsx
<div className={`bg-card border border-border p-6 rounded-xl shadow-sm ${
  selectedArticleId && isDesktop ? 'lg:col-span-1' : 'col-span-1'
}`}>
```

**Logique** :
- Si article sélectionné ET desktop → `col-span-1` (1/3)
- Sinon → `col-span-1` (pleine largeur)

### Panneau de détail
```tsx
{selectedArticleId && selectedArticle && (
  <div className="hidden lg:block lg:col-span-2 h-full">
    {/* Contenu du détail */}
  </div>
)}
```

**Logique** :
- Affiché seulement si article sélectionné
- Masqué sur mobile/tablet (`hidden lg:block`)
- Prend 2/3 de la largeur (`col-span-2`)

### Gestion du clic
```tsx
const handleArticleSelect = (id: number) => {
  setSelectedArticleId(id);
  // Ouvrir modal sur mobile/tablet
  if (!isDesktop) {
    setIsModalOpen(true);
  }
};
```

## 🎨 Transitions

### CSS
```css
transition-all duration-300
```

**Effet** :
- Changement de layout fluide
- Animation de 300ms
- S'applique à la grille et aux colonnes

## 📱 Comportements par plateforme

### Desktop (≥1024px)

**État initial** :
```
┌─────────────────────────────────────┐
│                                     │
│      Liste d'articles (100%)        │
│                                     │
└─────────────────────────────────────┘
```

**Après clic** :
```
┌───────────┬─────────────────────────┐
│           │                         │
│   Liste   │   Détail de l'article   │
│   (33%)   │        (67%)            │
│           │                         │
└───────────┴─────────────────────────┘
```

### Mobile/Tablet (<1024px)

**État initial** :
```
┌─────────────────────────────────────┐
│                                     │
│      Liste d'articles (100%)        │
│                                     │
└─────────────────────────────────────┘
```

**Après clic** :
```
┌─────────────────────────────────────┐
│                                     │
│      Liste d'articles (100%)        │
│                                     │
└─────────────────────────────────────┘
        ↓ Modal s'ouvre
┌─────────────────────────────────────┐
│  ┌───────────────────────────────┐  │
│  │                               │  │
│  │   Détail de l'article         │  │
│  │   (Modal)                     │  │
│  │                               │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

## ✨ Avantages

### UX améliorée
- ✅ Plus d'espace pour parcourir les articles initialement
- ✅ Détail apparaît seulement quand nécessaire
- ✅ Transition fluide et naturelle
- ✅ Pas de contenu inutile affiché

### Performance
- ✅ Moins de rendu initial
- ✅ Chargement conditionnel du détail
- ✅ Optimisation mobile

### Responsive
- ✅ S'adapte automatiquement à la taille d'écran
- ✅ Détection du resize en temps réel
- ✅ Modal sur mobile, panneau sur desktop

## 🔄 Flux utilisateur

### Desktop
1. **Page charge** → Liste pleine largeur, aucun article sélectionné
2. **Clic sur article #1** → Liste se réduit, détail apparaît à droite
3. **Clic sur article #2** → Détail se met à jour, layout reste 3 colonnes
4. **Resize fenêtre < 1024px** → Layout revient à 1 colonne

### Mobile
1. **Page charge** → Liste pleine largeur
2. **Clic sur article #1** → Modal s'ouvre avec détail
3. **Fermeture modal** → Retour à la liste
4. **Clic sur article #2** → Modal s'ouvre avec nouvel article

## 🐛 Corrections apportées

### Problème 1 : window is not defined
**Cause** : `window` n'existe pas côté serveur (SSR)

**Solution** :
```tsx
const [isDesktop, setIsDesktop] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };
  handleResize();
  // ...
}, []);
```

### Problème 2 : selectedArticle undefined
**Cause** : `selectedArticleId` peut être `null`

**Solution** :
```tsx
const selectedArticle = selectedArticleId 
  ? articles.find(a => a.id === selectedArticleId) 
  : articles[0];

{selectedArticleId && selectedArticle && (
  // Rendu conditionnel
)}
```

### Problème 3 : Parenthèse manquante
**Cause** : Bloc conditionnel mal fermé

**Solution** :
```tsx
{selectedArticleId && selectedArticle && (
  <div>...</div>
)}  // ← Parenthèse ajoutée
```

## 📊 Comparaison

### Avant
- Liste : **1/3** de la largeur (toujours)
- Détail : **2/3** de la largeur (toujours)
- Article #1 sélectionné par défaut
- Layout fixe

### Après
- Liste : **100%** → **33%** (dynamique)
- Détail : **masqué** → **67%** (conditionnel)
- Aucun article sélectionné par défaut
- Layout adaptatif

## ✅ Checklist

- ✅ selectedArticleId commence à null
- ✅ isDesktop détecté avec useEffect
- ✅ Layout dynamique (1 col → 3 cols)
- ✅ Transition fluide 300ms
- ✅ Détail conditionnel (affiché si sélectionné)
- ✅ Modal sur mobile/tablet
- ✅ Resize listener ajouté
- ✅ Cleanup du listener
- ✅ Gestion des undefined

---

**Version** : 2.3.0  
**Date** : 31 octobre 2025  
**Statut** : ✅ 100% Fonctionnel  
**Serveur** : http://localhost:3000/actualites
