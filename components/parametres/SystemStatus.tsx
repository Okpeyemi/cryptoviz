'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    id: 1,
    name: 'Web Scrapper',
    description: 'Collecte automatique d\'articles',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    status: 'active',
    color: 'bg-blue-500',
  },
  {
    id: 2,
    name: 'Analytics Builder',
    description: 'Analyse et traitement des données',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    status: 'active',
    color: 'bg-purple-500',
  },
];

export default function SystemStatus() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <CardTitle>État du Système</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg ${service.color}/10 flex items-center justify-center text-${service.color.replace('bg-', '')}`}>
                {service.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-foreground">{service.name}</h4>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Actif
                    </span>
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
