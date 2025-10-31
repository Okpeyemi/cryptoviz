'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  variant?: 'blue' | 'green' | 'purple' | 'pink';
}

const variantStyles = {
  blue: 'border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent',
  green: 'border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent',
  purple: 'border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent',
  pink: 'border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-transparent',
};

const iconStyles = {
  blue: 'text-blue-500',
  green: 'text-green-500',
  purple: 'text-purple-500',
  pink: 'text-pink-500',
};

const subtitleStyles = {
  blue: 'text-blue-400',
  green: 'text-green-400',
  purple: 'text-purple-400',
  pink: 'text-pink-400',
};

export default function StatsCard({ 
  title, 
  value, 
  subtitle, 
  icon, 
  variant = 'blue' 
}: StatsCardProps) {
  return (
    <Card className={cn('border-2', variantStyles[variant])}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={cn('w-5 h-5', iconStyles[variant])}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <p className={cn('text-xs mt-1', subtitleStyles[variant])}>
          {subtitle}
        </p>
      </CardContent>
    </Card>
  );
}
