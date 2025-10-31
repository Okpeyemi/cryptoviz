'use client';

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const chartData = [
  { date: '01 Oct', BTC: 42000, ETH: 2200 },
  { date: '05 Oct', BTC: 43500, ETH: 2350 },
  { date: '10 Oct', BTC: 41800, ETH: 2180 },
  { date: '15 Oct', BTC: 44200, ETH: 2420 },
  { date: '20 Oct', BTC: 45800, ETH: 2580 },
  { date: '25 Oct', BTC: 47200, ETH: 2720 },
  { date: '31 Oct', BTC: 48500, ETH: 2850 },
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
} satisfies ChartConfig;

export default function PriceEvolutionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Évolution des Prix</CardTitle>
        <CardDescription>Prix historiques de Bitcoin et Ethereum (USD)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[350px] w-full">
          <AreaChart
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
              tickFormatter={(value) => value.slice(0, 6)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="ETH"
              type="natural"
              fill="var(--color-ETH)"
              fillOpacity={0.4}
              stroke="var(--color-ETH)"
              strokeWidth={2}
            />
            <Area
              dataKey="BTC"
              type="natural"
              fill="var(--color-BTC)"
              fillOpacity={0.4}
              stroke="var(--color-BTC)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
