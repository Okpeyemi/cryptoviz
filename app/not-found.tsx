import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-8">
      <div className="text-center space-y-6 max-w-md">
        {/* 404 Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="text-9xl font-bold text-primary/20">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="w-24 h-24 text-primary" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={1.5}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-foreground">
          Page introuvable
        </h1>

        {/* Description */}
        <p className="text-muted-foreground">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Button asChild className="cursor-pointer">
            <Link href="/">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Retour à l'accueil
            </Link>
          </Button>

          <Button variant="outline" asChild className="cursor-pointer">
            <Link href="/actualites">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Voir les actualités
            </Link>
          </Button>
        </div>

        {/* Additional links */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">
            Pages populaires :
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link 
              href="/analyses" 
              className="text-sm text-primary hover:underline"
            >
              Analyses
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              href="/historique" 
              className="text-sm text-primary hover:underline"
            >
              Historique
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              href="/parametres" 
              className="text-sm text-primary hover:underline"
            >
              Paramètres
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
