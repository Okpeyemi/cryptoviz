'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const sentimentData = [
  { sentiment: 'Très positif', value: 36 },
  { sentiment: 'Positif', value: 27 },
  { sentiment: 'Neutre', value: 21 },
  { sentiment: 'Négatif', value: 9 },
  { sentiment: 'Très négatif', value: 5 },
];

const chartConfig = {
  value: {
    label: 'Articles',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export default function SentimentDistribution() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Distribution des sentiments</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart data={sentimentData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis
              dataKey="sentiment"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) => `${value} articles`}
                />
              }
            />
            <Bar
              dataKey="value"
              fill="var(--color-value)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
