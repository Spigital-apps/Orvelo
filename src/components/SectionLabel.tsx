import { ReactNode } from 'react';

export const SectionLabel = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="h-px w-10 bg-brand-teal/30" />
    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-teal/70">
      {children}
    </span>
  </div>
);
