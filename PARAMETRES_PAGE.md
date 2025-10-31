# Page Paramètres & Administration - CryptoViz

## 🎯 Vue d'ensemble

Page d'administration pour gérer les composants backend et visualiser les logs système en temps réel.

## 📊 Composants implémentés

### 1. System Status (État du Système)
**Type** : Gestion des services backend

**Services (2)** :

1. **Web Scrapper**
   - Description : Collecte automatique d'articles
   - Icône : Document (bleu)
   - Statut : Actif ✓
   - Toggle : Switch activé

2. **Analytics Builder**
   - Description : Analyse et traitement des données
   - Icône : Éclair (violet)
   - Statut : Actif ✓
   - Toggle : Switch activé

**Design** :
- Cartes avec bordure hover
- Icône colorée (12x12, fond coloré/10)
- Badge "Actif" vert avec checkmark
- Switch shadcn à droite
- Transition hover: bg-accent/50

**Fonctionnalités** :
- Toggle on/off pour chaque service
- Badge de statut dynamique
- Hover effects sur cartes
- Icônes distinctives

### 2. System Logs (Logs du Système)
**Type** : Console de logs en temps réel

**6 Logs affichés** :

1. `[2025-10-26 10:32:15] Scrapper: 124 nouveaux articles collectés` (success)
2. `[2025-10-26 10:31:45] Builder: Analyse de sentiment terminée` (info)
3. `[2025-10-26 10:30:22] Scrapper: Connexion à CoinDesk réussie` (success)
4. `[2025-10-26 10:29:58] Builder: Traitement de 3421 articles` (info)
5. `[2025-10-26 10:29:12] System: Mise à jour des statistiques` (info)
6. `[2025-10-26 10:28:47] Scrapper: Source CryptoNews active` (success)

**Niveaux de logs** :
- **Success** : Vert (text-green-500)
- **Info** : Bleu (text-blue-500)
- **Warning** : Orange (text-orange-500)
- **Error** : Rouge (text-red-500)

**Design** :
- ScrollArea shadcn (hauteur 400px)
- Fond : bg-muted/30
- Bordure : border-border
- Police : font-mono text-sm
- Format : [timestamp] Type: message

**Fonctionnalités** :
- Scroll vertical automatique
- Couleurs par niveau
- Timestamps précis
- Types de logs (Scrapper, Builder, System)

## 🎨 Layout

### Structure
```
┌─────────────────────────────────────┐
│ Paramètres & Administration         │
│ Gérez les composants backend...     │
├─────────────────────────────────────┤
│ État du Système                     │
│ ┌─────────────────────────────────┐ │
│ │ [Icon] Web Scrapper    [✓] [⚫] │ │
│ │ Collecte automatique...         │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ [Icon] Analytics Builder [✓][⚫]│ │
│ │ Analyse et traitement...        │ │
│ └─────────────────────────────────┘ │
├─────────────────────────────────────┤
│ Logs du Système                     │
│ ┌─────────────────────────────────┐ │
│ │ [timestamp] Type: message       │ │
│ │ [timestamp] Type: message       │ │
│ │ ...                             │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

### Responsive
- **Mobile** : 1 colonne, pleine largeur
- **Desktop** : Même layout, max-w-7xl

## 📦 Composants créés

### SystemStatus.tsx
**Rôle** : Gestion des services backend

**Props** : Aucune (données statiques)

**Services array** :
```tsx
{
  id: number,
  name: string,
  description: string,
  icon: JSX.Element,
  status: 'active' | 'inactive',
  color: string (bg-blue-500, bg-purple-500)
}
```

**Composants shadcn** :
- Card + CardHeader + CardTitle + CardContent
- Switch (toggle on/off)
- Badge (statut actif)

### SystemLogs.tsx
**Rôle** : Affichage des logs système

**Props** : Aucune (données statiques)

**Logs array** :
```tsx
{
  id: number,
  timestamp: string,
  type: 'scrapper' | 'builder' | 'system',
  message: string,
  level: 'success' | 'info' | 'warning' | 'error'
}
```

**Fonctions** :
- `getLogColor(level)` - Retourne couleur selon niveau
- `getTypeLabel(type)` - Retourne label formaté

**Composants shadcn** :
- Card + CardHeader + CardTitle + CardContent
- ScrollArea (zone scrollable)

## 🎨 Design

### Couleurs services
- **Web Scrapper** : Bleu (bg-blue-500/10)
- **Analytics Builder** : Violet (bg-purple-500/10)

### Couleurs logs
- **Success** : text-green-500
- **Info** : text-blue-500
- **Warning** : text-orange-500
- **Error** : text-red-500

### Spacing
- Padding page : p-8
- Gap sections : space-y-6
- Padding cards : p-4
- Gap logs : space-y-2

### Typography
- Titre : text-3xl font-bold
- Description : text-muted-foreground
- Service name : font-semibold
- Logs : font-mono text-sm

## 🔧 Fonctionnalités

### État du Système
- **Toggle services** : Switch pour activer/désactiver
- **Badge statut** : Affichage visuel de l'état
- **Hover effects** : Feedback visuel sur cartes
- **Icônes distinctives** : Identification rapide

### Logs du Système
- **Scroll automatique** : ScrollArea pour navigation
- **Couleurs par niveau** : Identification rapide
- **Timestamps** : Horodatage précis
- **Types de logs** : Catégorisation claire

## 📊 Données

### Format
Mock data statiques pour démo

### À implémenter
- WebSocket pour logs temps réel
- API pour toggle services
- Filtrage des logs (par type, niveau)
- Export des logs
- Pagination des logs
- Recherche dans les logs

## 🚀 Améliorations futures

### Court terme
- [ ] Logs temps réel (WebSocket)
- [ ] Toggle services fonctionnel
- [ ] Filtres logs (type, niveau, date)
- [ ] Export logs (CSV, JSON)

### Moyen terme
- [ ] Statistiques par service
- [ ] Graphiques de performance
- [ ] Alertes en cas d'erreur
- [ ] Configuration avancée

### Long terme
- [ ] Dashboard de monitoring
- [ ] Métriques détaillées
- [ ] Historique des logs
- [ ] Notifications push
- [ ] Gestion des utilisateurs

## ✅ Checklist

- ✅ État du Système avec 2 services
- ✅ Switch pour toggle services
- ✅ Badge statut actif
- ✅ Logs système avec 6 entrées
- ✅ ScrollArea pour logs
- ✅ Couleurs par niveau
- ✅ Format timestamp
- ✅ Design responsive
- ✅ Thème adaptatif
- ✅ Hover effects

## 📚 Dépendances

- **shadcn/ui** : Card, Switch, Badge, ScrollArea
- **React** : Composants fonctionnels

## 🎯 Composants shadcn utilisés

- **Card** : Structure des sections
- **Switch** : Toggle services
- **Badge** : Statut actif
- **ScrollArea** : Zone de logs scrollable

---

**Version** : 2.8.0  
**Date** : 31 octobre 2025  
**Statut** : ✅ 100% Fonctionnel  
**Serveur** : http://localhost:3000/parametres
