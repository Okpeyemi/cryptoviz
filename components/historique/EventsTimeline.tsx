'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const events = [
  {
    id: 1,
    date: '31 Oct 2024',
    title: 'Bitcoin atteint 48 500$',
    description: 'Nouveau sommet mensuel pour le BTC suite à l\'annonce des ETF',
    type: 'price',
    impact: 'positive',
  },
  {
    id: 2,
    date: '28 Oct 2024',
    title: 'Ethereum Dencun activé',
    description: 'Mise à jour majeure du réseau Ethereum réduisant les frais de gas',
    type: 'tech',
    impact: 'positive',
  },
  {
    id: 3,
    date: '25 Oct 2024',
    title: 'Régulation MiCA en Europe',
    description: 'Entrée en vigueur du cadre réglementaire européen pour les cryptos',
    type: 'regulation',
    impact: 'neutral',
  },
  {
    id: 4,
    date: '20 Oct 2024',
    title: 'Volume record sur Solana',
    description: 'Solana enregistre un volume de transactions record de 5M/jour',
    type: 'volume',
    impact: 'positive',
  },
  {
    id: 5,
    date: '15 Oct 2024',
    title: 'Hack de DeFi Protocol',
    description: 'Perte de 50M$ suite à une faille de sécurité',
    type: 'security',
    impact: 'negative',
  },
];

const getTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    price: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    tech: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    regulation: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    volume: 'bg-green-500/10 text-green-500 border-green-500/20',
    security: 'bg-red-500/10 text-red-500 border-red-500/20',
  };
  return colors[type] || 'bg-gray-500/10 text-gray-500 border-gray-500/20';
};

const getTypeLabel = (type: string) => {
  const labels: Record<string, string> = {
    price: 'Prix',
    tech: 'Technologie',
    regulation: 'Régulation',
    volume: 'Volume',
    security: 'Sécurité',
  };
  return labels[type] || type;
};

const getImpactIcon = (impact: string) => {
  if (impact === 'positive') {
    return (
      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }
  if (impact === 'negative') {
    return (
      <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
        <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    );
  }
  return (
    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
      <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  );
};

export default function EventsTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Événements Marquants</CardTitle>
        <CardDescription>Chronologie des événements importants</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={event.id} className="flex gap-4">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                {getImpactIcon(event.impact)}
                {index < events.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-2" />
                )}
              </div>

              {/* Event content */}
              <div className="flex-1 pb-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={getTypeColor(event.type)}>
                      {getTypeLabel(event.type)}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{event.date}</span>
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{event.title}</h4>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
