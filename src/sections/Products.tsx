import React from "react";
import { useLanguage } from "@/src/i18n/LanguageContext";
import { Section } from "@/src/components/ui/Section";
import { ArrowRight, BookOpen, GraduationCap, BookMarked } from "lucide-react";

export function Products() {
  const { t } = useLanguage();

  const icons = [
    <BookOpen key="1" className="w-6 h-6 text-brand-green" />,
    <GraduationCap key="2" className="w-6 h-6 text-brand-green" />,
    <BookMarked key="3" className="w-6 h-6 text-brand-green" />,
  ];

  return (
    <section id="products" className="bg-brand-dark">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center">
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight tracking-tight"
            dangerouslySetInnerHTML={{ __html: t.products.title }}
          />
          <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {t.products.items.map((product, index) => (
            <div
              key={index}
              className="relative rounded-xl border bg-brand-navy/20 border-white/5 hover:border-brand-green/30 transition-all flex flex-col h-full"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider">
                  {product.badge}
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center shrink-0">
                  {icons[index]}
                </div>
              </div>

              <h3 className="text-xl font-bold tracking-tight">
                {product.title}
              </h3>

              <p className="text-text-muted text-base leading-relaxed min-h-[100px]">
                {product.desc}
              </p>

              <div className="flex items-center gap-3 text-sm font-semibold text-brand-green">
                {product.link}
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
