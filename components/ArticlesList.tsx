'use client';

import { Card, CardContent } from '@/components/ui/card';

// Icônes SVG
const StarIcon = ({ className, filled = false }: { className?: string; filled?: boolean }) => (
  <svg className={className} fill={filled ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export interface Article {
  id: number;
  title: string;
  readTime: string;
  source: string;
  crypto: string;
  sentiment: string;
  date: string;
  excerpt: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'Bitcoin atteint un nouveau sommet historique à 45 000 $',
    readTime: '3 min',
    source: 'CoinDesk',
    crypto: 'BTC',
    sentiment: 'Positif',
    date: '26 oct., 10:30',
    excerpt: 'Le Bitcoin continue sa progression impressionnante avec une hausse de 5,4% au cours des dernières 24 heures...',
    content: `Le Bitcoin continue sa progression impressionnante avec une hausse de 5,4% au cours des dernières 24 heures...

Le Bitcoin a franchi la barre symbolique des 45 000 $ ce matin, marquant un nouveau sommet historique pour la cryptomonnaie phare. Cette hausse spectaculaire de 5,4% en 24 heures s'inscrit dans une tendance haussière qui perdure depuis plusieurs semaines.

Les analystes attribuent cette performance à plusieurs facteurs clés : l'adoption croissante par les institutions financières, les attentes d'approbation de nouveaux ETF Bitcoin, et un contexte macroéconomique favorable.

Les volumes de trading ont également explosé, dépassant les 50 milliards de dollars sur les dernières 24 heures, signe d'un regain d'intérêt massif des investisseurs.`,
  },
  {
    id: 2,
    title: 'Ethereum prépare sa mise à jour majeure "Dencun"',
    readTime: '4 min',
    source: 'Cointelegraph',
    crypto: 'ETH',
    sentiment: 'Positif',
    date: '26 oct., 09:15',
    excerpt: 'La blockchain Ethereum se prépare à déployer sa prochaine mise à jour importante...',
    content: `La blockchain Ethereum se prépare à déployer sa prochaine mise à jour importante...

La mise à jour "Dencun" d'Ethereum devrait être déployée dans les prochaines semaines, apportant des améliorations significatives en termes de scalabilité et de réduction des frais de transaction.

Cette mise à jour combine les propositions EIP-4844 et plusieurs autres améliorations techniques qui devraient réduire les coûts de transaction jusqu'à 90% pour les solutions Layer 2.

Les développeurs sont confiants quant au déploiement réussi de cette mise à jour après plusieurs tests sur les réseaux de test.`,
  },
  {
    id: 3,
    title: 'La SEC reporte sa décision sur l\'ETF Bitcoin de BlackRock',
    readTime: '3 min',
    source: 'CoinDesk',
    crypto: 'BTC',
    sentiment: 'Neutre',
    date: '25 oct., 16:45',
    excerpt: 'La Securities and Exchange Commission a une fois de plus reporté sa décision...',
    content: `La Securities and Exchange Commission a une fois de plus reporté sa décision...

La SEC américaine a annoncé le report de sa décision concernant la demande d'ETF Bitcoin spot de BlackRock, repoussant l'échéance de plusieurs mois.

Cette décision n'est pas surprenante étant donné l'historique de la SEC en matière d'approbation d'ETF crypto. Cependant, les analystes restent optimistes quant à une approbation éventuelle.

BlackRock, le plus grand gestionnaire d'actifs au monde, a déposé sa demande il y a plusieurs mois et a travaillé en étroite collaboration avec les régulateurs pour répondre à leurs préoccupations.`,
  },
  {
    id: 4,
    title: 'Solana dépasse les 100$ pour la première fois depuis 2022',
    readTime: '3 min',
    source: 'CoinDesk',
    crypto: 'SOL',
    sentiment: 'Positif',
    date: '25 oct., 14:20',
    excerpt: 'Solana connaît une forte reprise avec une hausse de 15% cette semaine...',
    content: `Solana connaît une forte reprise avec une hausse de 15% cette semaine...

Le token SOL a franchi la barre symbolique des 100$ pour la première fois depuis novembre 2022, porté par un regain d'intérêt pour l'écosystème Solana.

Cette performance s'explique par plusieurs facteurs : le lancement réussi de nouveaux projets DeFi, l'amélioration de la stabilité du réseau, et l'arrivée de nouveaux investisseurs institutionnels.

Les volumes de trading sur la blockchain Solana ont également atteint des records, témoignant d'une adoption croissante de la plateforme.`,
  },
  {
    id: 5,
    title: 'Les NFTs font leur grand retour avec une hausse de 40%',
    readTime: '5 min',
    source: 'Cointelegraph',
    crypto: 'ETH',
    sentiment: 'Positif',
    date: '25 oct., 11:30',
    excerpt: 'Le marché des NFTs connaît un regain d\'activité inattendu...',
    content: `Le marché des NFTs connaît un regain d'activité inattendu...

Après plusieurs mois de baisse, le marché des NFTs montre des signes de reprise avec une augmentation de 40% des volumes de trading sur les principales plateformes.

Les collections historiques comme CryptoPunks et Bored Ape Yacht Club voient leurs prix plancher augmenter significativement, attirant de nouveaux collectionneurs.

Cette renaissance du marché NFT coïncide avec l'arrivée de nouvelles fonctionnalités et l'intégration de l'intelligence artificielle dans la création d'œuvres numériques.`,
  },
  {
    id: 6,
    title: 'Binance annonce de nouvelles mesures de conformité',
    readTime: '4 min',
    source: 'CoinDesk',
    crypto: 'BNB',
    sentiment: 'Neutre',
    date: '24 oct., 18:00',
    excerpt: 'La plateforme renforce ses procédures KYC et AML...',
    content: `La plateforme renforce ses procédures KYC et AML...

Binance a annoncé la mise en place de nouvelles mesures de conformité visant à renforcer la sécurité et la transparence de ses opérations.

Ces nouvelles procédures incluent une vérification d'identité renforcée pour tous les utilisateurs et une surveillance accrue des transactions suspectes.

Cette initiative s'inscrit dans un contexte de régulation croissante du secteur des cryptomonnaies à l'échelle mondiale.`,
  },
  {
    id: 7,
    title: 'Le Lightning Network atteint 5000 BTC de capacité',
    readTime: '3 min',
    source: 'Cointelegraph',
    crypto: 'BTC',
    sentiment: 'Positif',
    date: '24 oct., 15:45',
    excerpt: 'Le réseau de paiement de seconde couche continue sa croissance...',
    content: `Le réseau de paiement de seconde couche continue sa croissance...

Le Lightning Network, solution de scalabilité pour Bitcoin, vient de franchir le cap des 5000 BTC de capacité totale, marquant une étape importante dans son développement.

Cette croissance témoigne de l'adoption croissante des paiements instantanés en Bitcoin et de la confiance des utilisateurs dans cette technologie.

De nombreux commerçants et plateformes intègrent désormais le Lightning Network pour offrir des transactions rapides et peu coûteuses.`,
  },
  {
    id: 8,
    title: 'Cardano lance son premier DEX décentralisé',
    readTime: '4 min',
    source: 'CoinDesk',
    crypto: 'ADA',
    sentiment: 'Positif',
    date: '24 oct., 12:00',
    excerpt: 'L\'écosystème Cardano franchit une nouvelle étape...',
    content: `L'écosystème Cardano franchit une nouvelle étape...

Le premier exchange décentralisé natif de Cardano vient d'être lancé, offrant aux utilisateurs la possibilité d'échanger des tokens directement sur la blockchain.

Cette plateforme utilise les smart contracts Plutus et promet des frais de transaction très bas ainsi qu'une sécurité renforcée.

Le lancement de ce DEX marque un tournant pour l'écosystème Cardano qui cherche à concurrencer Ethereum dans le domaine de la DeFi.`,
  },
  {
    id: 9,
    title: 'Régulation crypto : l\'Europe finalise MiCA',
    readTime: '5 min',
    source: 'Cointelegraph',
    crypto: 'BTC',
    sentiment: 'Neutre',
    date: '23 oct., 16:30',
    excerpt: 'Le cadre réglementaire européen entre en vigueur...',
    content: `Le cadre réglementaire européen entre en vigueur...

L'Union Européenne finalise la mise en place de MiCA (Markets in Crypto-Assets), son cadre réglementaire pour les actifs numériques.

Cette régulation vise à protéger les investisseurs tout en favorisant l'innovation dans le secteur des cryptomonnaies.

Les plateformes d'échange devront se conformer à de nouvelles exigences en matière de transparence et de sécurité.`,
  },
  {
    id: 10,
    title: 'Les stablecoins dépassent 150 milliards de capitalisation',
    readTime: '3 min',
    source: 'CoinDesk',
    crypto: 'USDT',
    sentiment: 'Positif',
    date: '23 oct., 10:15',
    excerpt: 'Le marché des stablecoins continue sa croissance exponentielle...',
    content: `Le marché des stablecoins continue sa croissance exponentielle...

La capitalisation totale des stablecoins vient de dépasser les 150 milliards de dollars, témoignant de leur adoption massive dans l'écosystème crypto.

USDT et USDC dominent toujours le marché, mais de nouveaux acteurs émergent avec des propositions innovantes.

Cette croissance reflète le besoin croissant de stabilité dans un marché volatile et l'utilisation des stablecoins pour les paiements transfrontaliers.`,
  },
];

interface ArticlesListProps {
  articles: Article[];
  selectedArticleId: number | null;
  onArticleSelect: (id: number) => void;
}

export default function ArticlesList({ articles, selectedArticleId, onArticleSelect }: ArticlesListProps) {
  return (
    <div className="space-y-3">
      {articles.map((article) => (
        <Card 
          key={article.id} 
          className={`bg-card border-border hover:border-primary/50 transition-colors cursor-pointer ${
            selectedArticleId === article.id ? 'border-primary' : ''
          }`}
          onClick={() => onArticleSelect(article.id)}
        >
          <CardContent className="px-4 py-1">
            <div className="flex items-start gap-3">
              {/* Star icon */}
              <button 
                className="mt-1 text-muted-foreground cursor-pointer hover:text-primary transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <StarIcon className="w-4 h-4" />
              </button>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex flex-col gap-2">
                    <span className="px-2 py-0.5 w-fit rounded bg-primary/10 text-primary font-medium text-[10px]">
                      {article.source}
                    </span>
                    <h3 className="text-base font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                  <button 
                    className="shrink-0 p-1.5 cursor-pointer rounded-md bg-muted hover:bg-muted/80 text-foreground transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <CheckCircleIcon className="w-4 h-4 text-primary" />
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ClockIcon className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
