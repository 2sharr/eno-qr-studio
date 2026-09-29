'use client';

import { Check } from 'lucide-react';

interface DownloadToastProps {
  message: string;
}

export default function DownloadToast({ message }: DownloadToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 right-4 z-50 flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground shadow-lg transition-opacity duration-300 sm:bottom-6 sm:right-6"
    >
      <Check className="h-4 w-4 shrink-0 text-green-500" aria-hidden="true" />
      <span className="truncate">{message}</span>
    </div>
  );
}
