'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const chartData = [
  { date: '01 Oct', volume: 1.2 },
  { date: '05 Oct', volume: 1.5 },
  { date: '10 Oct', volume: 1.1 },
  { date: '15 Oct', volume: 1.8 },
  { date: '20 Oct', volume: 2.1 },
  { date: '25 Oct', volume: 2.4 },
  { date: '31 Oct', volume: 2.7 },
];

const chartConfig = {
  volume: {
    label: 'Volume',
    color: 'hsl(var(--chart-4))',
  },
} satisfies ChartConfig;

export default function TradingVolumeChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Volume de Trading</CardTitle>
        <CardDescription>Volume quotidien en milliards USD</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 6)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `$${value}B`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="volume" fill="var(--color-volume)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
