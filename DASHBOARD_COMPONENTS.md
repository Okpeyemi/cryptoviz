# Composants Dashboard CryptoViz

## 📊 Vue d'ensemble

Documentation des composants créés pour le dashboard CryptoViz avec design moderne et thème violet.

## 🎴 StatsCard

Carte de statistiques avec icône, titre, valeur et sous-titre.

### Utilisation

```tsx
import StatsCard from '@/components/StatsCard';

<StatsCard
  title="Crypto la plus mentionnée"
  value="Bitcoin"
  subtitle="1,247 mentions"
  icon={<BitcoinIcon />}
  variant="blue"
/>
```

### Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Titre de la carte |
| `value` | `string` | Valeur principale (grande) |
| `subtitle` | `string` | Sous-titre/description |
| `icon` | `React.ReactNode` | Icône SVG |
| `variant` | `'blue' \| 'green' \| 'purple' \| 'pink'` | Couleur du thème |

### Variantes

- **blue** : Bordure et icône bleues (Bitcoin, données générales)
- **green** : Bordure et icône vertes (Sentiment positif, gains)
- **purple** : Bordure et icône violettes (Articles, données)
- **pink** : Bordure et icône roses (Volume, statistiques)

### Design

- Bordure colorée avec opacité 20%
- Gradient de fond subtil
- Icône colorée en haut à droite
- Valeur en gras 2xl
- Sous-titre coloré

## 📈 CryptoComparisonChart

Graphique de comparaison entre deux cryptomonnaies avec sélecteurs et plages de temps.

### Utilisation

```tsx
import CryptoComparisonChart from '@/components/CryptoComparisonChart';

<CryptoComparisonChart />
```

### Fonctionnalités

- ✅ **Sélection de cryptos** : BTC, ETH, SOL (extensible)
- ✅ **Comparaison** : Affiche 2 cryptos simultanément
- ✅ **Plages de temps** : 1h, 24h, 7j, 30j
- ✅ **Actualisation** : Bouton refresh pour recharger les données
- ✅ **Graphique Area** : Avec dégradés et courbes lisses
- ✅ **Tooltip** : Affiche les valeurs au survol
- ✅ **Responsive** : S'adapte à toutes les tailles

### Composants utilisés

- `Card` - Container principal
- `Select` - Sélecteurs de crypto
- `Button` - Bouton refresh
- `AreaChart` (recharts) - Graphique
- `ChartContainer` - Wrapper shadcn

### Personnalisation

#### Ajouter une crypto

```tsx
// Dans les Select
<SelectItem value="ADA">ADA</SelectItem>
<SelectItem value="DOT">DOT</SelectItem>
```

#### Modifier les couleurs

Les couleurs utilisent les variables CSS du thème :
- `--chart-1` : Première crypto (violet)
- `--chart-2` : Deuxième crypto (bleu)

#### Données réelles

Remplacer `generateChartData()` par un appel API :

```tsx
const [chartData, setChartData] = React.useState([]);

React.useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(`/api/crypto/${crypto1}/${crypto2}`);
    const data = await response.json();
    setChartData(data);
  };
  
  fetchData();
}, [crypto1, crypto2, timeRange]);
```

## 🎨 Icônes SVG

### Icônes de stats

```tsx
// Bitcoin
const BitcoinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    {/* Path du logo Bitcoin */}
  </svg>
);

// Tendance haussière
const TrendUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

// Articles
const ArticlesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    {/* Path des articles */}
  </svg>
);

// Volume
const VolumeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    {/* Path du graphique en barres */}
  </svg>
);
```

## 📦 Dépendances

### Installées

```bash
npm install recharts @radix-ui/react-select lucide-react
npx shadcn@latest add chart select
```

### Composants shadcn

- `Card` - Cartes
- `Button` - Boutons
- `Select` - Sélecteurs
- `Chart` - Graphiques (wrapper recharts)

## 🎯 Page Dashboard

### Structure

```tsx
export default function Home() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Stats Grid - 4 cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard ... />
          <StatsCard ... />
          <StatsCard ... />
          <StatsCard ... />
        </div>

        {/* Chart - Graphique de comparaison */}
        <CryptoComparisonChart />
      </div>
    </div>
  );
}
```

### Layout responsive

- **Mobile** : 1 colonne
- **Tablet** : 2 colonnes
- **Desktop** : 4 colonnes

## 🎨 Thème

Tous les composants utilisent le thème violet shadcn :

- `bg-card` - Fond des cartes
- `border-border` - Bordures
- `text-foreground` - Texte principal
- `text-muted-foreground` - Texte secondaire
- `hsl(var(--chart-1))` - Couleur graphique 1
- `hsl(var(--chart-2))` - Couleur graphique 2

## 🚀 Améliorations futures

### StatsCard
- [ ] Animation au hover
- [ ] Clic pour voir les détails
- [ ] Graphique sparkline intégré
- [ ] Indicateur de tendance (↑↓)

### CryptoComparisonChart
- [ ] Données en temps réel (WebSocket)
- [ ] Plus de cryptos disponibles
- [ ] Indicateurs techniques (RSI, MACD)
- [ ] Export des données (CSV, PNG)
- [ ] Zoom et pan sur le graphique
- [ ] Mode plein écran

## 📁 Fichiers

```
components/
├── StatsCard.tsx              # Carte de statistiques
├── CryptoComparisonChart.tsx  # Graphique de comparaison
├── ui/
│   ├── card.tsx              # shadcn Card
│   ├── button.tsx            # shadcn Button
│   ├── select.tsx            # shadcn Select
│   └── chart.tsx             # shadcn Chart
app/
└── page.tsx                   # Page dashboard avec les composants
```

---

**Version** : 1.0.0  
**Date** : 31 octobre 2025  
**Statut** : ✅ Opérationnel  
**Serveur** : http://localhost:3000
