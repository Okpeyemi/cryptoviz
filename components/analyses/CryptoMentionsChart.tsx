'use client';

import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const chartData = [
  { crypto: 'Bitcoin', mentions: 1247, fill: 'var(--color-bitcoin)' },
  { crypto: 'Ethereum', mentions: 892, fill: 'var(--color-ethereum)' },
  { crypto: 'Solana', mentions: 654, fill: 'var(--color-solana)' },
  { crypto: 'Cardano', mentions: 423, fill: 'var(--color-cardano)' },
  { crypto: 'Polkadot', mentions: 312, fill: 'var(--color-polkadot)' },
  { crypto: 'Avalanche', mentions: 287, fill: 'var(--color-avalanche)' },
];

const chartConfig = {
  mentions: {
    label: 'Mentions',
  },
  bitcoin: {
    label: 'Bitcoin',
    color: 'hsl(var(--chart-1))',
  },
  ethereum: {
    label: 'Ethereum',
    color: 'hsl(var(--chart-2))',
  },
  solana: {
    label: 'Solana',
    color: 'hsl(var(--chart-3))',
  },
  cardano: {
    label: 'Cardano',
    color: 'hsl(var(--chart-4))',
  },
  polkadot: {
    label: 'Polkadot',
    color: 'hsl(var(--chart-5))',
  },
  avalanche: {
    label: 'Avalanche',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export default function CryptoMentionsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mentions par Crypto</CardTitle>
        <CardDescription>Top 6 des cryptos les plus mentionnées (24h)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="crypto"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <XAxis dataKey="mentions" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="mentions" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
