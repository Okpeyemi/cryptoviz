'use client';

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const chartData = [
  { date: '20 Oct', positif: 65, neutre: 20, negatif: 15 },
  { date: '21 Oct', positif: 60, neutre: 25, negatif: 15 },
  { date: '22 Oct', positif: 70, neutre: 18, negatif: 12 },
  { date: '23 Oct', positif: 75, neutre: 15, negatif: 10 },
  { date: '24 Oct', positif: 72, neutre: 18, negatif: 10 },
  { date: '25 Oct', positif: 78, neutre: 14, negatif: 8 },
  { date: '26 Oct', positif: 80, neutre: 12, negatif: 8 },
];

const chartConfig = {
  positif: {
    label: 'Positif',
    color: 'hsl(var(--chart-1))',
  },
  neutre: {
    label: 'Neutre',
    color: 'hsl(var(--chart-2))',
  },
  negatif: {
    label: 'Négatif',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

export default function SentimentEvolutionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Évolution du Sentiment Global</CardTitle>
        <CardDescription>Tendances du sentiment sur 7 jours</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
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
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillPositif" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-positif)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-positif)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillNeutre" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-neutre)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-neutre)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillNegatif" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-negatif)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-negatif)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="negatif"
              type="natural"
              fill="url(#fillNegatif)"
              fillOpacity={0.4}
              stroke="var(--color-negatif)"
              stackId="a"
            />
            <Area
              dataKey="neutre"
              type="natural"
              fill="url(#fillNeutre)"
              fillOpacity={0.4}
              stroke="var(--color-neutre)"
              stackId="a"
            />
            <Area
              dataKey="positif"
              type="natural"
              fill="url(#fillPositif)"
              fillOpacity={0.4}
              stroke="var(--color-positif)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
