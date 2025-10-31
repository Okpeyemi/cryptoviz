'use client';

import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

// Icône de refresh
const RefreshIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

// Données de démonstration pour BTC et ETH
const generateChartData = () => {
  const data = [];
  const now = new Date();
  
  for (let i = 0; i < 24; i++) {
    const time = new Date(now.getTime() - (23 - i) * 60 * 60 * 1000);
    const hour = time.getHours();
    
    data.push({
      time: `${hour.toString().padStart(2, '0')}:00`,
      btc: 43000 + Math.random() * 2000,
      eth: 2200 + Math.random() * 200,
    });
  }
  
  return data;
};

const chartConfig = {
  btc: {
    label: 'Bitcoin',
    color: 'hsl(var(--chart-1))',
  },
  eth: {
    label: 'Ethereum',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export default function CryptoComparisonChart() {
  const [crypto1, setCrypto1] = React.useState('BTC');
  const [crypto2, setCrypto2] = React.useState('ETH');
  const [timeRange, setTimeRange] = React.useState('1h');
  const [chartData, setChartData] = React.useState(generateChartData());

  const handleRefresh = () => {
    setChartData(generateChartData());
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <CardTitle className="text-lg font-semibold">Évolution des Prix</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}
          </CardDescription>
        </div>
        
        <div className="flex items-center gap-2 flex-wrap">
          {/* Crypto 1 */}
          <Select value={crypto1} onValueChange={setCrypto1}>
            <SelectTrigger className="w-[100px] bg-background">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="BTC">BTC</SelectItem>
              <SelectItem value="ETH">ETH</SelectItem>
              <SelectItem value="SOL">SOL</SelectItem>
            </SelectContent>
          </Select>

          <span className="text-sm text-muted-foreground">vs</span>

          {/* Crypto 2 */}
          <Select value={crypto2} onValueChange={setCrypto2}>
            <SelectTrigger className="w-[100px] bg-background">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ETH">ETH</SelectItem>
              <SelectItem value="BTC">BTC</SelectItem>
              <SelectItem value="SOL">SOL</SelectItem>
            </SelectContent>
          </Select>

          {/* Time Range */}
          <div className="flex gap-1 bg-muted rounded-lg p-1">
            {['1h', '24h', '7j', '30j'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1 text-xs cursor-pointer rounded-md transition-colors ${
                  timeRange === range
                    ? 'bg-background text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          {/* Refresh Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRefresh}
            className="h-8 w-8 cursor-pointer"
          >
            <RefreshIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-6">
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fillBtc" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-btc)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-btc)"
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="fillEth" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-eth)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-eth)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              interval="preserveStartEnd"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => `Heure: ${value}`}
                  formatter={(value) => `$${Number(value).toLocaleString()}`}
                />
              }
            />
            <Area
              dataKey="btc"
              type="monotone"
              fill="url(#fillBtc)"
              stroke="var(--color-btc)"
              strokeWidth={2}
            />
            <Area
              dataKey="eth"
              type="monotone"
              fill="url(#fillEth)"
              stroke="var(--color-eth)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
