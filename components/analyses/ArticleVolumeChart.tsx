'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const chartData = [
  { time: '00:00', volume: 1200 },
  { time: '04:00', volume: 900 },
  { time: '08:00', volume: 1800 },
  { time: '12:00', volume: 2800 },
  { time: '16:00', volume: 2400 },
  { time: '20:00', volume: 3200 },
  { time: '24:00', volume: 2600 },
];

const chartConfig = {
  volume: {
    label: 'Articles',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export default function ArticleVolumeChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Volume d'Articles</CardTitle>
        <CardDescription>Nombre d'articles publiés par tranche horaire (24h)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
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
