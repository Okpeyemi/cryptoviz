'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import SentimentEvolutionChart from '@/components/analyses/SentimentEvolutionChart';
import CryptoMentionsChart from '@/components/analyses/CryptoMentionsChart';
import ArticleVolumeChart from '@/components/analyses/ArticleVolumeChart';
import SourceDistributionChart from '@/components/analyses/SourceDistributionChart';
import CryptoComparisonChart from '@/components/analyses/CryptoComparisonChart';

export default function AnalysesPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Analyses Avancées
            </h1>
            <p className="text-muted-foreground">
              Visualisations et métriques détaillées
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2 cursor-pointer">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              CSV
            </Button>
            <Button variant="outline" size="sm" className="gap-2 cursor-pointer">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              JSON
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sélectionner une métrique:</span>
            <Select defaultValue="sentiment">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sentiment">Sentiment</SelectItem>
                <SelectItem value="volume">Volume</SelectItem>
                <SelectItem value="mentions">Mentions</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Main Chart */}
        <SentimentEvolutionChart />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CryptoMentionsChart />
          <ArticleVolumeChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SourceDistributionChart />
          <CryptoComparisonChart />
        </div>
      </div>
    </div>
  );
}
