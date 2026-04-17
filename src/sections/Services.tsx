import React from "react";
import { useLanguage } from "@/src/i18n/LanguageContext";
import { Section } from "@/src/components/ui/Section";
import { Check, Megaphone, Smartphone, PenTool } from "lucide-react";

export function Services() {
  const { t } = useLanguage();

  const icons = [
    <Megaphone key="1" className="w-8 h-8 text-brand-green" />,
    <Smartphone key="2" className="w-8 h-8 text-brand-green" />,
    <PenTool key="3" className="w-8 h-8 text-brand-green" />,
  ];

  return (
    <section id="services" className="bg-brand-dark">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight tracking-tight"
            dangerouslySetInnerHTML={{ __html: t.services.title }}
          />
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => (
            <div
              key={service.id}
              className="relative rounded-xl border bg-brand-navy/20 border-white/5 hover:border-brand-green/30 transition-all flex flex-col h-full gap-6 p-6"
            >
              <div className="text-center space-y-3">
                <div className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center bg-brand-green/10 text-brand-green">
                  {icons[index]}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm">{service.desc}</p>
              </div>

              <ul className="grow space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-brand-green/70" />
                    <span className="text-text-primary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
