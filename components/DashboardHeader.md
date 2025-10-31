# DashboardHeader Component

## 📋 Description

Composant de header pour le dashboard CryptoViz, affichant le titre, le sous-titre et un bouton de déconnexion.

## 🎨 Design

Basé sur l'image de référence avec :
- Titre principal : "Dashboard Admin"
- Sous-titre : Nom de l'utilisateur
- Bouton de déconnexion avec icône à droite
- Sticky en haut de la page
- Bordure inférieure subtile

## 📦 Utilisation

### Import
```tsx
import DashboardHeader from '@/components/DashboardHeader';
```

### Utilisation de base
```tsx
<DashboardHeader />
```

### Avec props personnalisées
```tsx
<DashboardHeader 
  title="Mon Dashboard"
  subtitle="Jean Dupont"
/>
```

## 🔧 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"Dashboard Admin"` | Titre principal du header |
| `subtitle` | `string` | `"Maqsoud TAWALIOU"` | Sous-titre (nom utilisateur) |

## 🎯 Fonctionnalités

- ✅ **Sticky** - Reste en haut lors du scroll
- ✅ **Bouton déconnexion** - Avec icône SVG
- ✅ **Responsive** - S'adapte à toutes les tailles
- ✅ **Thème** - Utilise les variables CSS du thème violet
- ✅ **Cursor pointer** - Sur le bouton

## 🎨 Classes utilisées

```tsx
// Header
bg-background        // Fond blanc/sombre selon le thème
border-border        // Bordure inférieure

// Texte
text-foreground      // Titre principal
text-muted-foreground // Sous-titre

// Bouton
variant="outline"    // Style outline de shadcn
size="sm"           // Taille small
```

## 🔄 Intégration

Le composant est automatiquement intégré dans `MainContent.tsx` et apparaît sur toutes les pages du dashboard.

## 🎯 Personnalisation

### Modifier le titre dynamiquement
```tsx
'use client';

import { usePathname } from 'next/navigation';
import DashboardHeader from './DashboardHeader';

export default function MainContent({ children }) {
  const pathname = usePathname();
  
  const getTitle = () => {
    switch(pathname) {
      case '/': return 'Dashboard';
      case '/actualites': return 'Actualités';
      case '/analyses': return 'Analyses';
      default: return 'Dashboard Admin';
    }
  };

  return (
    <main>
      <DashboardHeader title={getTitle()} />
      {children}
    </main>
  );
}
```

### Ajouter des actions
```tsx
<DashboardHeader>
  <Button variant="ghost" size="sm">
    <BellIcon className="w-4 h-4 cursor-pointer" />
  </Button>
  <Button variant="ghost" size="sm">
    <SettingsIcon className="w-4 h-4 cursor-pointer" />
  </Button>
</DashboardHeader>
```

## 🔐 Déconnexion

La fonction `handleLogout` est prête à être implémentée avec votre logique d'authentification :

```tsx
const handleLogout = async () => {
  // Exemple avec NextAuth
  await signOut({ callbackUrl: '/login' });
  
  // Ou avec votre API
  await fetch('/api/auth/logout', { method: 'POST' });
  router.push('/login');
};
```

## 📱 Responsive

Le header s'adapte automatiquement :
- **Desktop** : Titre et bouton côte à côte
- **Mobile** : Peut être ajusté avec des classes responsive si nécessaire

## ✨ Icône de déconnexion

L'icône est un SVG inline personnalisé :
- Pas de dépendance externe
- Couleur dynamique avec `currentColor`
- Taille : 16x16px (w-4 h-4)

---

**Version** : 1.0.0  
**Statut** : ✅ Opérationnel
