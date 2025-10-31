# Bottom Navigation - Mobile

## 🎯 Fonctionnalité

Navigation adaptative selon la taille d'écran :
- **Desktop (≥md)** : Sidebar verticale à gauche
- **Mobile (<md)** : Bottom navigation bar fixée en bas

## 📱 Bottom Navigation

### Design
- **Position** : Fixed en bas de l'écran
- **Hauteur** : 64px (h-16)
- **Layout** : 5 items horizontaux
- **Fond** : bg-background
- **Bordure** : border-t border-border
- **Z-index** : 50

### Items
1. **Dashboard** - Icône maison
2. **Utilisateurs** - Icône utilisateurs
3. **Commandes** - Icône sac shopping
4. **Repas** - Icône plus
5. **Rapports** - Icône graphique

### États
- **Actif** : Icône et texte en violet (text-primary)
- **Inactif** : Icône et texte gris (text-muted-foreground)
- **Hover** : Texte devient text-foreground

### Structure
```tsx
<nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
  <div className="flex items-center justify-around h-16">
    {navItems.map((item) => (
      <Link>
        <Icon /> {/* 24x24px */}
        <span className="text-[10px]">{label}</span>
      </Link>
    ))}
  </div>
</nav>
```

## 🖥️ Sidebar Desktop

### Modifications
- **Masquée sur mobile** : `hidden md:block`
- **Visible sur desktop** : `md:block`
- Reste inchangée pour ≥md

## 📐 MainContent

### Ajustements
```tsx
className={`
  min-h-screen 
  transition-all duration-300 
  pb-16 md:pb-0           // Padding bottom mobile
  ${isCollapsed ? 'md:ml-20' : 'md:ml-64'}  // Margin left desktop
  ml-0                    // Pas de margin mobile
`}
```

**Changements** :
- `pb-16` : Padding bottom 64px sur mobile (pour la bottom nav)
- `md:pb-0` : Pas de padding sur desktop
- `ml-0` : Pas de margin left sur mobile
- `md:ml-20/64` : Margin left sur desktop (sidebar)

## 🎨 Icônes

### HomeIcon (Dashboard)
```tsx
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
```

### UsersIcon (Utilisateurs)
```tsx
<path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
```

### ShoppingBagIcon (Commandes)
```tsx
<path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
```

### PlusIcon (Repas)
```tsx
<path d="M12 4v16m8-8H4" />
```

### ChartIcon (Rapports)
```tsx
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
```

## 🔄 Navigation

### Détection de la page active
```tsx
const pathname = usePathname();
const isActive = pathname === item.href;
```

### Routing
- Utilise Next.js `Link` component
- Client-side navigation
- Pas de rechargement de page

## 📦 Composants

### BottomNav.tsx
**Rôle** : Navigation mobile en bas d'écran

**Props** : Aucune

**Hooks** :
- `usePathname()` : Détecte la route actuelle

**Classes clés** :
- `md:hidden` : Masqué sur desktop
- `fixed bottom-0` : Fixé en bas
- `z-50` : Au-dessus du contenu

### DashboardSidebar.tsx
**Modification** : Ajout de `hidden md:block`

**Avant** :
```tsx
className="fixed left-0 top-0 h-screen..."
```

**Après** :
```tsx
className="hidden md:block fixed left-0 top-0 h-screen..."
```

### MainContent.tsx
**Modifications** :
- Padding bottom mobile : `pb-16 md:pb-0`
- Margin left conditionnel : `ml-0 md:ml-20/64`

## 🎯 Breakpoints

### Mobile (<768px)
- Sidebar masquée
- Bottom nav visible
- Padding bottom 64px
- Pas de margin left

### Desktop (≥768px)
- Sidebar visible
- Bottom nav masquée
- Pas de padding bottom
- Margin left 80px/256px

## ✨ Transitions

### Bottom nav items
```tsx
transition-colors
```
- Changement de couleur fluide
- S'applique aux icônes et textes

### MainContent
```tsx
transition-all duration-300
```
- Transition du margin left
- Animation de 300ms

## 📱 Responsive

### Layout mobile
```
┌─────────────────────────────────────┐
│                                     │
│         Header (sticky)             │
│                                     │
├─────────────────────────────────────┤
│                                     │
│                                     │
│         Contenu                     │
│         (pb-16)                     │
│                                     │
│                                     │
├─────────────────────────────────────┤
│  🏠   👥   🛍️   ➕   📊            │
│  Dash Users Cmd  Meal  Rep          │
└─────────────────────────────────────┘
```

### Layout desktop
```
┌────┬────────────────────────────────┐
│    │                                │
│ S  │         Header                 │
│ I  │                                │
│ D  ├────────────────────────────────┤
│ E  │                                │
│ B  │                                │
│ A  │         Contenu                │
│ R  │                                │
│    │                                │
│    │                                │
└────┴────────────────────────────────┘
```

## 🔧 Intégration

### Layout.tsx
```tsx
<SidebarProvider>
  <DashboardSidebar />      {/* Desktop only */}
  <MainContent>{children}</MainContent>
  <BottomNav />             {/* Mobile only */}
</SidebarProvider>
```

## ✅ Checklist

- ✅ BottomNav créé avec 5 items
- ✅ Icônes SVG inline
- ✅ État actif en violet
- ✅ Masqué sur desktop (md:hidden)
- ✅ Fixé en bas (fixed bottom-0)
- ✅ Sidebar masquée sur mobile (hidden md:block)
- ✅ MainContent avec pb-16 mobile
- ✅ MainContent avec ml-0 mobile
- ✅ Transitions fluides
- ✅ Détection route active

## 🚀 Améliorations futures

- [ ] Badges de notification
- [ ] Animations au tap
- [ ] Haptic feedback
- [ ] Gestures (swipe)
- [ ] Menu contextuel au long press

---

**Version** : 2.4.0  
**Date** : 31 octobre 2025  
**Statut** : ✅ 100% Fonctionnel  
**Serveur** : http://localhost:3000
