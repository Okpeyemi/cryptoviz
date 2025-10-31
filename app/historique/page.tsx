'use client';

import { useState } from 'react';
import TimelineController from '@/components/historique/TimelineController';
import KeyMetrics from '@/components/historique/KeyMetrics';
import PriceEvolutionChart from '@/components/historique/PriceEvolutionChart';
import SentimentHistoryChart from '@/components/historique/SentimentHistoryChart';
import EventsTimeline from '@/components/historique/EventsTimeline';
import TradingVolumeChart from '@/components/historique/TradingVolumeChart';

export default function HistoriquePage() {
  const [selectedRange, setSelectedRange] = useState('1m');

  return (
    <div className="p-8 space-y-6">
      <div className="mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Historique
          </h1>
          <p className="text-muted-foreground">
            Analyse historique des prix, sentiments et événements marquants
          </p>
        </div>

        {/* Timeline Controller */}
        <TimelineController
          selectedRange={selectedRange}
          onRangeChange={setSelectedRange}
        />

        {/* Key Metrics */}
        <KeyMetrics />

        {/* Main Chart - Price Evolution */}
        <PriceEvolutionChart />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SentimentHistoryChart />
          <TradingVolumeChart />
        </div>

        {/* Events Timeline */}
        <EventsTimeline />
      </div>
    </div>
  );
}
