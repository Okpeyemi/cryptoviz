# Configuration shadcn/ui avec Thème Violet

## 📦 Installation

shadcn/ui a été installé et configuré avec succès dans le projet CryptoViz.

```bash
npx shadcn@latest init -y
```

## 🎨 Thème Violet

Le thème violet de shadcn a été appliqué avec les variables CSS suivantes :

### Mode Clair (Light)
- **Primary** : `oklch(0.541 0.281 293.009)` - Violet principal
- **Background** : `oklch(1 0 0)` - Blanc
- **Foreground** : `oklch(0.141 0.005 285.823)` - Texte foncé
- **Border** : `oklch(0.92 0.004 286.32)` - Bordures grises
- **Sidebar Primary** : `oklch(0.541 0.281 293.009)` - Violet pour items actifs

### Mode Sombre (Dark)
- **Primary** : `oklch(0.606 0.25 292.717)` - Violet clair
- **Background** : `oklch(0.141 0.005 285.823)` - Fond sombre
- **Foreground** : `oklch(0.985 0 0)` - Texte clair
- **Sidebar** : `oklch(0.21 0.006 285.885)` - Sidebar sombre

## 📁 Fichiers créés/modifiés

### Créés par shadcn
- `components.json` - Configuration shadcn
- `lib/utils.ts` - Fonction utilitaire `cn()` pour fusionner les classes

### Modifiés
- `app/globals.css` - Variables CSS du thème violet
- `components/DashboardSidebar.tsx` - Utilisation des classes du thème
- `app/page.tsx` - Utilisation des classes du thème
- `app/layout.tsx` - Suppression du bg-gray-50 pour utiliser le thème

## 🎯 Classes Tailwind disponibles

### Couleurs de base
- `bg-background` / `text-foreground`
- `bg-card` / `text-card-foreground`
- `bg-popover` / `text-popover-foreground`

### Couleurs primaires et secondaires
- `bg-primary` / `text-primary-foreground`
- `bg-secondary` / `text-secondary-foreground`
- `bg-muted` / `text-muted-foreground`
- `bg-accent` / `text-accent-foreground`

### Couleurs de la sidebar
- `bg-sidebar` / `text-sidebar-foreground`
- `bg-sidebar-primary` / `text-sidebar-primary-foreground`
- `bg-sidebar-accent` / `text-sidebar-accent-foreground`

### Bordures et autres
- `border-border` - Bordures
- `border-input` - Inputs
- `ring-ring` - Focus rings
- `text-destructive` - Erreurs/suppressions

### Graphiques
- `bg-chart-1` à `bg-chart-5` - Couleurs pour graphiques

## 🔧 Utilisation

### Fonction cn()
Utilisez la fonction `cn()` pour fusionner les classes conditionnelles :

```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  "base-class",
  isActive && "active-class",
  "another-class"
)} />
```

### Ajouter des composants shadcn
Pour ajouter un composant shadcn :

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

Les composants seront ajoutés dans `components/ui/`

## 📚 Composants disponibles

shadcn/ui offre plus de 50 composants :
- **Formulaires** : Button, Input, Select, Checkbox, Radio, etc.
- **Navigation** : Tabs, Breadcrumb, Pagination, etc.
- **Feedback** : Alert, Toast, Dialog, Popover, etc.
- **Data Display** : Table, Card, Badge, Avatar, etc.
- **Layout** : Separator, Scroll Area, etc.

## 🌐 Documentation

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Composants disponibles](https://ui.shadcn.com/docs/components)
- [Thèmes](https://ui.shadcn.com/themes)

## ✅ Statut

- ✅ shadcn/ui installé
- ✅ Thème violet configuré
- ✅ Variables CSS appliquées
- ✅ DashboardSidebar mis à jour
- ✅ Pages mises à jour
- ✅ Fonction `cn()` disponible

Le projet est maintenant prêt à utiliser les composants shadcn/ui avec le thème violet ! 🎉
