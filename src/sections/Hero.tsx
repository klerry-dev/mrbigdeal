import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/src/i18n/LanguageContext";
import { Button } from "@/src/components/ui/Button";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-brand-dark overflow-hidden relative"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/background.jpeg"
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-brand-dark/40" />
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center h-full relative z-10">
        <div className="flex flex-col items-center max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            {t.hero.title}
            <span className="text-brand-green">{t.hero.titleHighlight}</span>
            {t.hero.titleEnd}
          </h1>

          <p className="text-xs sm:text-base md:text-base lg:text-lg text-text-muted leading-relaxed max-w-xl">
            {t.hero.subtitle}
          </p>

          {/* Mobile: vertical stack, larger buttons. Desktop: horizontal */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center w-full max-w-md mx-auto">
            <Link to="/#about" className="flex-1">
              <Button
                size="lg"
                className="w-full whitehome-nowrap px-6 sm:px-6 py-4 sm:py-3 text-base sm:text-base h-14 sm:h-auto rounded-xl"
              >
                {t.hero.buttonPrimary}
              </Button>
            </Link>
            <Link to="/#Pricing" className="flex-1">
              <Button
                variant="ghost"
                size="lg"
                className="w-full border border-white/30 hover:border-white/60 whitehome-nowrap px-6 sm:px-6 py-4 sm:py-3 text-base sm:text-base h-14 sm:h-auto rounded-xl"
              >
                {t.hero.buttonSecondary}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
