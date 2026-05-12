import { ReactNode } from 'react';

export const SectionLabel = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <div className={`flex items-center gap-3 mb-6 ${className}`}>
    <div className={`h-px w-10 ${className.includes('text-') ? 'bg-current opacity-30' : 'bg-brand-teal/30'}`} />
    <span className={`text-[10px] uppercase tracking-[0.4em] font-bold ${className.includes('text-') ? 'text-current' : 'text-brand-teal/70'}`}>
      {children}
    </span>
  </div>
);
