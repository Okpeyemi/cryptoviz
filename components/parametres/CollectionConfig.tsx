'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const sources = [
  {
    id: 1,
    name: 'CoinDesk',
    url: 'https://coindesk.com',
    active: true,
  },
  {
    id: 2,
    name: 'CryptoNews',
    url: 'https://cryptonews.com',
    active: true,
  },
  {
    id: 3,
    name: 'The Block',
    url: 'https://theblock.co',
    active: true,
  },
  {
    id: 4,
    name: 'Blockchain.com',
    url: 'https://blockchain.com/news',
    active: true,
  },
  {
    id: 5,
    name: 'CoinTelegraph',
    url: 'https://cointelegraph.com',
    active: false,
  },
  {
    id: 6,
    name: 'Decrypt',
    url: 'https://decrypt.co',
    active: true,
  },
];

export default function CollectionConfig() {
  const [frequency, setFrequency] = useState('15');
  const [sourcesState, setSourcesState] = useState(sources);

  const activeSources = sourcesState.filter(s => s.active).length;
  const totalSources = sourcesState.length;

  const toggleSource = (id: number) => {
    setSourcesState(prev =>
      prev.map(source =>
        source.id === id ? { ...source, active: !source.active } : source
      )
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Configuration de la Collecte</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Fréquence de collecte */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">
            Fréquence de collecte (minutes)
          </label>
          <Select value={frequency} onValueChange={setFrequency}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">Toutes les 5 minutes</SelectItem>
              <SelectItem value="10">Toutes les 10 minutes</SelectItem>
              <SelectItem value="15">Toutes les 15 minutes</SelectItem>
              <SelectItem value="30">Toutes les 30 minutes</SelectItem>
              <SelectItem value="60">Toutes les 60 minutes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sources actives */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground">
              Sources actives
            </label>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              {activeSources} / {totalSources}
            </Badge>
          </div>

          <div className="space-y-2">
            {sourcesState.map((source) => (
              <div
                key={source.id}
                className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${source.active ? 'bg-green-500' : 'bg-muted-foreground'}`} />
                  <div>
                    <p className="font-medium text-foreground text-sm">{source.name}</p>
                    <p className="text-xs text-muted-foreground">{source.url}</p>
                  </div>
                </div>
                <Switch
                  checked={source.active}
                  onCheckedChange={() => toggleSource(source.id)}
                />
              </div>
            ))}
          </div>

          {/* Bouton Ajouter une source */}
          <Button variant="outline" className="w-full mt-4 cursor-pointer">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Ajouter une source
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
