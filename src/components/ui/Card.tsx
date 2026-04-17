import React from "react";
import { cn } from "@/src/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl bg-brand-navy/50 backdrop-blur-sm border border-white/10 p-6 shadow-xl",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("", className)} {...props}>
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
CardContent.displayName = "CardContent";
