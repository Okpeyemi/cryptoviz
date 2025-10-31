'use client';

import { Label, Pie, PieChart } from 'recharts';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const chartData = [
  { source: 'coindesk', articles: 280, fill: 'var(--color-coindesk)' },
  { source: 'cryptonews', articles: 230, fill: 'var(--color-cryptonews)' },
  { source: 'theblock', articles: 180, fill: 'var(--color-theblock)' },
  { source: 'blockchain', articles: 150, fill: 'var(--color-blockchain)' },
  { source: 'autres', articles: 160, fill: 'var(--color-autres)' },
];

const chartConfig = {
  articles: {
    label: 'Articles',
  },
  coindesk: {
    label: 'CoinDesk',
    color: 'hsl(var(--chart-1))',
  },
  cryptonews: {
    label: 'CryptoNews',
    color: 'hsl(var(--chart-2))',
  },
  theblock: {
    label: 'The Block',
    color: 'hsl(var(--chart-3))',
  },
  blockchain: {
    label: 'Blockchain.com',
    color: 'hsl(var(--chart-4))',
  },
  autres: {
    label: 'Autres',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

export default function SourceDistributionChart() {
  const totalArticles = chartData.reduce((acc, curr) => acc + curr.articles, 0);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Distribution des Sources</CardTitle>
        <CardDescription>Répartition des articles par source</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="articles"
              nameKey="source"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalArticles.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Articles
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          5 sources principales suivies
        </div>
      </CardFooter>
    </Card>
  );
}
