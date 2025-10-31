'use client';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useSidebar } from '@/contexts/SidebarContext';

// SVG Icon pour déconnexion
const LogoutIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

// SVG Icon pour collapse sidebar
const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

interface DashboardHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function DashboardHeader({ 
  title = "Dashboard Admin",
  subtitle = "Maqsoud TAWALIOU"
}: DashboardHeaderProps) {
  const { isCollapsed, toggleSidebar } = useSidebar();
  
  const handleLogout = () => {
    // Logique de déconnexion à implémenter
    console.log('Déconnexion...');
  };

  return (
    <header className="sticky top-0 z-30 bg-background border-b border-border px-8 py-3">
      <div className="flex p-1 items-center justify-between">
        {/* Left side - Collapse button, Title and subtitle */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="hidden lg:block p-2.5 cursor-pointer rounded-lg hover:bg-accent transition-colors"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <MenuIcon className="w-5 h-5 text-foreground" />
          </button>
          <div>
            <h1 className="text-lg font-semibold text-foreground">
              {title}
            </h1>
            <p className="text-sm text-muted-foreground">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Right side - Theme toggle and Logout button */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleLogout}
            className="gap-2 cursor-pointer"
          >
            <LogoutIcon className="w-4 h-4" />
            Déconnexion
          </Button>
        </div>
      </div>
    </header>
  );
}
