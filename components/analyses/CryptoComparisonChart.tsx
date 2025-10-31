'use client';

import { useState } from 'react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const chartData = [
  { date: '20 Oct', BTC: 35, ETH: 28, SOL: 25 },
  { date: '21 Oct', BTC: 38, ETH: 30, SOL: 27 },
  { date: '22 Oct', BTC: 40, ETH: 32, SOL: 30 },
  { date: '23 Oct', BTC: 42, ETH: 35, SOL: 33 },
  { date: '24 Oct', BTC: 41, ETH: 34, SOL: 31 },
  { date: '25 Oct', BTC: 45, ETH: 38, SOL: 36 },
  { date: '26 Oct', BTC: 48, ETH: 40, SOL: 38 },
];

const chartConfig = {
  BTC: {
    label: 'Bitcoin',
    color: 'hsl(var(--chart-1))',
  },
  ETH: {
    label: 'Ethereum',
    color: 'hsl(var(--chart-2))',
  },
  SOL: {
    label: 'Solana',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

export default function CryptoComparisonChart() {
  const [crypto1, setCrypto1] = useState('BTC');
  const [crypto2, setCrypto2] = useState('ETH');

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Comparer deux cryptos</CardTitle>
            <CardDescription>Évolution comparative sur 7 jours</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Select value={crypto1} onValueChange={setCrypto1}>
              <SelectTrigger className="w-20 h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BTC">BTC</SelectItem>
                <SelectItem value="ETH">ETH</SelectItem>
                <SelectItem value="SOL">SOL</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-muted-foreground text-sm">vs</span>
            <Select value={crypto2} onValueChange={setCrypto2}>
              <SelectTrigger className="w-20 h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BTC">BTC</SelectItem>
                <SelectItem value="ETH">ETH</SelectItem>
                <SelectItem value="SOL">SOL</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey={crypto1}
              type="monotone"
              stroke={`var(--color-${crypto1})`}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey={crypto2}
              type="monotone"
              stroke={`var(--color-${crypto2})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
