'use client';

import { useSidebar } from '@/contexts/SidebarContext';
import DashboardHeader from './DashboardHeader';

export default function MainContent({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();

  return (
    <main
      className={`min-h-screen transition-all duration-300 pb-16 lg:pb-0 ${
        isCollapsed ? 'lg:ml-20' : 'lg:ml-52'
      } ml-0`}
    >
      <DashboardHeader />
      {children}
    </main>
  );
}
