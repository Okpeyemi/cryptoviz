'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const timeRanges = [
  { label: '24H', value: '24h' },
  { label: '7J', value: '7d' },
  { label: '1M', value: '1m' },
  { label: '3M', value: '3m' },
  { label: '1A', value: '1y' },
  { label: 'Tout', value: 'all' },
];

interface TimelineControllerProps {
  selectedRange: string;
  onRangeChange: (range: string) => void;
}

export default function TimelineController({ selectedRange, onRangeChange }: TimelineControllerProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-foreground">Période</span>
          </div>
          <div className="flex items-center gap-2">
            {timeRanges.map((range) => (
              <Button
                key={range.value}
                variant={selectedRange === range.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => onRangeChange(range.value)}
                className="h-8 px-3 cursor-pointer"
              >
                {range.label}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
