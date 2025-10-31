# Page Actualités Interactive - CryptoViz

## 🎯 Fonctionnalité

La page actualités permet maintenant de **cliquer sur un article** dans la liste de gauche pour afficher son contenu complet dans le panneau de droite.

## ✨ Améliorations apportées

### 1. Articles cliquables
- ✅ Clic sur une carte d'article pour le sélectionner
- ✅ Bordure violette sur l'article sélectionné
- ✅ Hover effect sur tous les articles
- ✅ Cursor pointer pour indiquer la cliquabilité

### 2. Taille des cartes réduite
**Avant** :
- Padding : `p-6` (24px)
- Titre : `text-lg` (18px)
- Espacement : `space-y-4` (16px)

**Après** :
- Padding : `p-4` (16px)
- Titre : `text-base` (16px)
- Espacement : `space-y-3` (12px)
- Icônes : `w-4 h-4` (16px)
- Texte temps : `text-xs` (12px)
- `line-clamp-2` sur le titre (max 2 lignes)

### 3. Affichage dynamique du détail
- Le panneau de droite affiche l'article sélectionné
- Badges dynamiques (Source, Crypto, Sentiment)
- Couleur du sentiment adaptée :
  - **Positif** : Vert
  - **Négatif** : Rouge
  - **Neutre** : Gris
- Contenu complet avec paragraphes formatés
- Date et temps de lecture dynamiques

### 4. Gestion d'état
- `useState` pour l'article sélectionné
- Article #1 sélectionné par défaut
- Props passées à `ArticlesList` :
  - `selectedArticleId` : ID de l'article actif
  - `onArticleSelect` : Callback de sélection

## 📦 Composants modifiés

### ArticlesList.tsx

**Nouvelles props** :
```tsx
interface ArticlesListProps {
  selectedArticleId: number | null;
  onArticleSelect: (id: number) => void;
}
```

**Fonctionnalités** :
- Export de l'interface `Article` et du tableau `articles`
- Ajout du champ `content` aux articles
- 3 articles avec contenu complet différent :
  1. Bitcoin à 45 000 $ (CoinDesk, BTC, Positif)
  2. Ethereum Dencun (Cointelegraph, ETH, Positif)
  3. SEC ETF BlackRock (CoinDesk, BTC, Neutre)

**Styling** :
- Bordure violette si sélectionné
- Hover effect sur toutes les cartes
- `stopPropagation()` sur les boutons étoile et check
- `cursor-pointer` sur la carte

### actualites/page.tsx

**État** :
```tsx
const [selectedArticleId, setSelectedArticleId] = useState<number | null>(1);
const selectedArticle = articles.find(a => a.id === selectedArticleId) || articles[0];
```

**Fonction helper** :
```tsx
const getSentimentColor = (sentiment: string) => {
  switch (sentiment.toLowerCase()) {
    case 'positif': return 'bg-green-500/10 text-green-500';
    case 'négatif': return 'bg-red-500/10 text-red-500';
    default: return 'bg-muted text-muted-foreground';
  }
};
```

**Affichage dynamique** :
- Badges avec données de l'article sélectionné
- Titre, date, temps de lecture dynamiques
- Contenu formaté en paragraphes
- Couleur du sentiment adaptée

## 🎨 Design

### Liste d'articles (gauche)
- Cartes compactes (padding réduit)
- Espacement réduit entre les cartes
- Bordure violette sur sélection
- Hover effect subtil
- Icônes plus petites

### Détail d'article (droite)
- Card sticky (reste visible au scroll)
- Badges colorés selon le sentiment
- Contenu complet avec paragraphes
- 2 boutons d'action en bas

## 🔄 Flux utilisateur

1. **Page charge** → Article #1 sélectionné par défaut
2. **Utilisateur clique sur article #2** → Bordure violette se déplace
3. **Panneau de droite se met à jour** → Affiche le contenu de l'article #2
4. **Badges changent** → Source, crypto, sentiment de l'article #2
5. **Contenu change** → Paragraphes de l'article #2

## 📊 Données des articles

### Article 1 - Bitcoin 45 000 $
- Source : CoinDesk
- Crypto : BTC
- Sentiment : Positif
- Date : 26 oct., 10:30
- Temps : 3 min
- 4 paragraphes

### Article 2 - Ethereum Dencun
- Source : Cointelegraph
- Crypto : ETH
- Sentiment : Positif
- Date : 26 oct., 09:15
- Temps : 4 min
- 4 paragraphes

### Article 3 - SEC ETF BlackRock
- Source : CoinDesk
- Crypto : BTC
- Sentiment : Neutre
- Date : 25 oct., 16:45
- Temps : 3 min
- 4 paragraphes

## 🚀 Améliorations futures

### Court terme
- [ ] Animation de transition entre articles
- [ ] Skeleton loader pendant le chargement
- [ ] Scroll automatique vers le haut du détail

### Moyen terme
- [ ] Favoris persistants (localStorage)
- [ ] Historique de lecture
- [ ] Partage d'article (copier lien)
- [ ] Impression d'article

### Long terme
- [ ] Connexion à une API réelle
- [ ] Pagination infinie
- [ ] Filtres actifs fonctionnels
- [ ] Recherche en temps réel
- [ ] Notifications de nouveaux articles

## ✅ Checklist

- ✅ Articles cliquables
- ✅ Sélection visuelle (bordure violette)
- ✅ Taille des cartes réduite
- ✅ Détail dynamique
- ✅ 3 articles avec contenu différent
- ✅ Badges colorés selon sentiment
- ✅ Responsive
- ✅ Hover effects
- ✅ Cursor pointer

---

**Version** : 2.1.0  
**Date** : 31 octobre 2025  
**Statut** : ✅ 100% Fonctionnel  
**Serveur** : http://localhost:3000/actualites
