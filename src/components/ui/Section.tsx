import React from 'react';
import { cn } from '@/src/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  containerClass?: string;
  className?: string;
  id?: string;
}

export function Section({ className, containerClass, children, id, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 md:py-32", className)} {...props}>
      <div className={cn("container mx-auto px-6 md:px-12 max-w-7xl", containerClass)}>
        {children}
      </div>
    </section>
  );
}
