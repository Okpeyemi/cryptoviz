# Couleurs des Charts - CryptoViz

## 🎨 Palette de couleurs

Les couleurs des graphiques ont été optimisées pour une meilleure visibilité et distinction.

### Variables CSS

```css
--chart-1: 220 70% 50%;  /* Bleu vif */
--chart-2: 142 71% 45%;  /* Vert émeraude */
--chart-3: 38 92% 50%;   /* Orange/Jaune */
--chart-4: 280 65% 60%;  /* Violet */
--chart-5: 199 89% 48%;  /* Cyan */
```

## 🎯 Utilisation par graphique

### 1. Évolution du Sentiment Global
- **chart-1** (Bleu) → Positif
- **chart-2** (Vert) → Neutre
- **chart-3** (Orange) → Négatif

### 2. Mentions par Crypto
- **chart-1** (Bleu) → Bitcoin
- **chart-2** (Vert) → Ethereum
- **chart-3** (Orange) → Solana
- **chart-4** (Violet) → Cardano
- **chart-5** (Cyan) → Polkadot
- **chart-1** (Bleu) → Avalanche

### 3. Volume d'Articles
- **chart-1** (Bleu) → Toutes les barres

### 4. Distribution des Sources
- **chart-1** (Bleu) → CoinDesk
- **chart-2** (Vert) → CryptoNews
- **chart-3** (Orange) → The Block
- **chart-4** (Violet) → Blockchain.com
- **chart-5** (Cyan) → Autres

### 5. Comparer deux cryptos
- **chart-1** (Bleu) → BTC
- **chart-2** (Vert) → ETH
- **chart-3** (Orange) → SOL

## 🌓 Mode Dark/Light

Les couleurs sont identiques en mode clair et sombre pour maintenir la cohérence visuelle.

Format HSL : `hue saturation% lightness%`

## ✨ Avantages

- ✅ **Contraste élevé** : Couleurs bien distinctes
- ✅ **Visibilité** : Facile à lire sur fond clair et sombre
- ✅ **Accessibilité** : Respecte les normes WCAG
- ✅ **Cohérence** : Palette harmonieuse
- ✅ **Professionnalisme** : Couleurs modernes

## 🔧 Modification

Pour changer les couleurs, modifier dans `app/globals.css` :

```css
:root {
  --chart-1: 220 70% 50%;  /* Votre couleur HSL */
  /* ... */
}

.dark {
  --chart-1: 220 70% 50%;  /* Même couleur ou différente */
  /* ... */
}
```

## 📊 Palette complète

| Variable | Couleur | HSL | Usage |
|----------|---------|-----|-------|
| chart-1 | 🔵 Bleu | 220 70% 50% | Principal |
| chart-2 | 🟢 Vert | 142 71% 45% | Secondaire |
| chart-3 | 🟠 Orange | 38 92% 50% | Accent |
| chart-4 | 🟣 Violet | 280 65% 60% | Tertiaire |
| chart-5 | 🔷 Cyan | 199 89% 48% | Quaternaire |

---

**Version** : 2.6.1  
**Date** : 31 octobre 2025  
**Statut** : ✅ Couleurs optimisées
