'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Article } from './ArticlesList';

interface ArticleDetailModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
  getSentimentColor: (sentiment: string) => string;
}

export default function ArticleDetailModal({
  article,
  isOpen,
  onClose,
  getSentimentColor,
}: ArticleDetailModalProps) {
  if (!article) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm flex-wrap">
              <span className="px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                {article.source}
              </span>
              <span className="px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                {article.crypto}
              </span>
              <span
                className={`px-2 py-1 rounded font-medium ${getSentimentColor(
                  article.sentiment
                )}`}
              >
                {article.sentiment}
              </span>
            </div>

            <DialogTitle className="text-xl font-bold text-foreground text-left">
              {article.title}
            </DialogTitle>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {article.date}
              <span className="mx-2">•</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {article.readTime} de lecture
            </div>
          </div>
        </DialogHeader>

        <div className="prose prose-sm max-w-none text-muted-foreground mt-4">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex gap-2 pt-4 border-t border-border">
          <button className="flex-1 px-4 cursor-pointer py-2 rounded-md bg-muted hover:bg-muted/80 text-foreground transition-colors flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
            Enregistrer
          </button>
          <button className="flex-1 px-4 cursor-pointer py-2 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground transition-colors flex items-center justify-center gap-2">
            Lire l'article complet
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
