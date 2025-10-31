'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CryptoItem {
  rank: number;
  name: string;
  symbol: string;
  mentions: number;
  change: string;
}

const topCryptos: CryptoItem[] = [
  { rank: 1, name: 'Bitcoin', symbol: 'BTC', mentions: 1247, change: '+5.4%' },
  { rank: 2, name: 'Bitcoin', symbol: 'BTC', mentions: 1247, change: '+5.4%' },
  { rank: 3, name: 'Bitcoin', symbol: 'BTC', mentions: 1247, change: '+5.4%' },
  { rank: 4, name: 'Bitcoin', symbol: 'BTC', mentions: 1247, change: '+5.4%' },
];

export default function TopCryptosList() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Cryptos les plus mentionnées</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {topCryptos.map((crypto) => (
          <div
            key={crypto.rank}
            className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                #{crypto.rank}
              </div>
              <div>
                <p className="font-semibold text-foreground">{crypto.name}</p>
                <p className="text-sm text-muted-foreground">{crypto.symbol}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-foreground">{crypto.mentions}</p>
              <p className="text-sm text-green-500 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {crypto.change}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
