# Composants CryptoViz

## DashboardSidebar

Barre latérale de navigation pour le dashboard crypto.

### Fonctionnalités

- **Navigation principale** : 5 sections (Dashboard, Actualités, Analyses, Historique, Paramètres)
- **État actif** : Mise en surbrillance de la page active avec fond orange
- **Collapsible** : Bouton pour réduire/agrandir la sidebar
- **Icônes** : Utilisation de Heroicons pour une interface moderne
- **Responsive** : Animation fluide lors du collapse
- **Footer** : Copyright et version de l'application

### Utilisation

Le composant est déjà intégré dans le layout principal (`app/layout.tsx`).

```tsx
import DashboardSidebar from '@/components/DashboardSidebar';

export default function Layout({ children }) {
  return (
    <>
      <DashboardSidebar />
      <main className="ml-64">{children}</main>
    </>
  );
}
```

### Structure des menus

| Menu | Route | Icône | Description |
|------|-------|-------|-------------|
| Dashboard | `/` | HomeIcon | Page d'accueil du dashboard |
| Actualités | `/actualites` | NewspaperIcon | Flux d'actualités crypto |
| Analyses | `/analyses` | ChartBarIcon | Analyses et graphiques |
| Historique | `/historique` | ClockIcon | Historique des transactions |
| Paramètres | `/parametres` | Cog6ToothIcon | Configuration de l'application |

### Personnalisation

Pour modifier les menus, éditez le tableau `menuItems` dans le composant :

```tsx
const menuItems: MenuItem[] = [
  { name: 'Nom du menu', href: '/route', icon: IconComponent },
  // ...
];
```

### Design

Le design s'inspire de l'interface "andunu" avec :
- Fond blanc avec bordure grise
- Élément actif en orange (#f97316)
- Transitions fluides
- Typographie moderne
- Footer avec copyright et version

### Dépendances

- `next/link` : Navigation Next.js
- `next/navigation` : Hook usePathname pour l'état actif
- **Icônes** : SVG inline personnalisés (pas de dépendance externe)
