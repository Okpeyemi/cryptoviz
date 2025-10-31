'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const logs = [
  {
    id: 1,
    timestamp: '2025-10-26 10:32:15',
    type: 'scrapper',
    message: 'Scrapper: 124 nouveaux articles collectés',
    level: 'success',
  },
  {
    id: 2,
    timestamp: '2025-10-26 10:31:45',
    type: 'builder',
    message: 'Builder: Analyse de sentiment terminée',
    level: 'info',
  },
  {
    id: 3,
    timestamp: '2025-10-26 10:30:22',
    type: 'scrapper',
    message: 'Scrapper: Connexion à CoinDesk réussie',
    level: 'success',
  },
  {
    id: 4,
    timestamp: '2025-10-26 10:29:58',
    type: 'builder',
    message: 'Builder: Traitement de 3421 articles',
    level: 'info',
  },
  {
    id: 5,
    timestamp: '2025-10-26 10:29:12',
    type: 'system',
    message: 'System: Mise à jour des statistiques',
    level: 'info',
  },
  {
    id: 6,
    timestamp: '2025-10-26 10:28:47',
    type: 'scrapper',
    message: 'Scrapper: Source CryptoNews active',
    level: 'success',
  },
];

const getLogColor = (level: string) => {
  const colors: Record<string, string> = {
    success: 'text-green-500',
    info: 'text-blue-500',
    warning: 'text-orange-500',
    error: 'text-red-500',
  };
  return colors[level] || 'text-muted-foreground';
};

const getTypeLabel = (type: string) => {
  const labels: Record<string, string> = {
    scrapper: 'Scrapper',
    builder: 'Builder',
    system: 'System',
  };
  return labels[type] || type;
};

export default function SystemLogs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Logs du Système</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full rounded-md border border-border bg-muted/30 p-4">
          <div className="space-y-2 font-mono text-sm">
            {logs.map((log) => (
              <div key={log.id} className="flex items-start gap-2">
                <span className="text-muted-foreground whitespace-nowrap">
                  [{log.timestamp}]
                </span>
                <span className={`font-semibold ${getLogColor(log.level)}`}>
                  {getTypeLabel(log.type)}:
                </span>
                <span className={getLogColor(log.level)}>
                  {log.message}
                </span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
