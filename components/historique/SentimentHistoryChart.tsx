'use client';

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const chartData = [
  { date: '01 Oct', score: 65 },
  { date: '05 Oct', score: 62 },
  { date: '10 Oct', score: 58 },
  { date: '15 Oct', score: 70 },
  { date: '20 Oct', score: 75 },
  { date: '25 Oct', score: 78 },
  { date: '31 Oct', score: 82 },
];

const chartConfig = {
  score: {
    label: 'Score de sentiment',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export default function SentimentHistoryChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Évolution du Sentiment</CardTitle>
        <CardDescription>Score de sentiment global sur la période</CardDescription>
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
              tickFormatter={(value) => value.slice(0, 6)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[0, 100]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="score"
              type="monotone"
              stroke="var(--color-score)"
              strokeWidth={3}
              dot={{
                fill: 'var(--color-score)',
                r: 4,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
