'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ArticlesList, { articles } from '@/components/ArticlesList';
import ArticleDetailModal from '@/components/ArticleDetailModal';
import Pagination from '@/components/Pagination';

// Icône SVG
const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ActivityIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export default function ActualitesPage() {
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);
  const articlesPerPage = 3;
  
  const selectedArticle = selectedArticleId ? articles.find(a => a.id === selectedArticleId) || null : articles[0] || null;
  
  // Calculer les articles à afficher
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  
  // Détecter si on est sur desktop
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Gérer le clic sur un article
  const handleArticleSelect = (id: number) => {
    setSelectedArticleId(id);
    // Ouvrir le modal sur mobile/tablet
    if (!isDesktop) {
      setIsModalOpen(true);
    }
  };
  
  // Réinitialiser à la page 1 quand on change de page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case 'positif':
        return 'bg-green-500/10 text-green-500';
      case 'négatif':
        return 'bg-red-500/10 text-red-500';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="p-8">
      <div className="mx-auto space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-card border-border">
              <CardContent className="px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Articles collectés</p>
                    <p className="text-3xl font-bold text-foreground">3,421</p>
                  </div>
                  <ActivityIcon className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Rechercher dans les articles..."
              className="pl-10 bg-background"
            />
          </div>
          <Select defaultValue="all-cryptos">
            <SelectTrigger className="w-full sm:w-[200px] bg-background">
              <SelectValue placeholder="Toutes les cryptos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-cryptos">Toutes les cryptos</SelectItem>
              <SelectItem value="btc">Bitcoin</SelectItem>
              <SelectItem value="eth">Ethereum</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-sources">
            <SelectTrigger className="w-full sm:w-[200px] bg-background">
              <SelectValue placeholder="Toutes les sources" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-sources">Toutes les sources</SelectItem>
              <SelectItem value="coindesk">CoinDesk</SelectItem>
              <SelectItem value="cointelegraph">Cointelegraph</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Articles Section */}
        <div className={`grid gap-6 transition-all duration-300 ${
          selectedArticleId && isDesktop ? 'lg:grid-cols-3' : 'grid-cols-1'
        }`}>
          {/* Articles List */}
          <div className={`bg-card border border-border p-6 rounded-xl shadow-sm ${
            selectedArticleId && isDesktop ? 'lg:col-span-1' : 'col-span-1'
          }`}>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-foreground">Articles récents</h2>
            </div>
            <ArticlesList 
              articles={currentArticles}
              selectedArticleId={selectedArticleId}
              onArticleSelect={handleArticleSelect}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>

          {/* Article Detail - Desktop only - Appears when article selected */}
          {selectedArticleId && selectedArticle && (
            <div className="hidden lg:block lg:col-span-2 h-full">
              <Card className="bg-card border-border sticky top-24 h-full">
                <CardContent className="px-6 space-y-4 flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 text-sm flex-wrap pb-5 border-b border-border">
                      <div className="flex items-center gap-2 text-sm flex-wrap">
                        <span className="px-2 py-1 rounded bg-primary/10 text-primary font-medium">{selectedArticle.source}</span>
                        <span className="px-2 py-1 rounded bg-primary/10 text-primary font-medium">{selectedArticle.crypto}</span>
                        <span className={`px-2 py-1 rounded font-medium ${getSentimentColor(selectedArticle.sentiment)}`}>
                          {selectedArticle.sentiment}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-foreground">
                        {selectedArticle.title}
                      </h2>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {selectedArticle.date}
                        <span className="mx-2">•</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {selectedArticle.readTime} de lecture
                      </div>
                    </div>

                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <button className="flex-1 px-4 py-2 cursor-pointer rounded-md bg-muted hover:bg-muted/80 text-foreground transition-colors flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      Enregistrer
                    </button>
                    <button className="flex-1 px-4 py-2 cursor-pointer rounded-md bg-primary hover:bg-primary/90 text-primary-foreground transition-colors flex items-center justify-center gap-2">
                      Lire l'article complet
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
        
        {/* Modal for mobile/tablet */}
        <ArticleDetailModal
          article={selectedArticle}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          getSentimentColor={getSentimentColor}
        />
      </div>
    </div>
  );
}
