import React from "react";
import { useLanguage } from "@/src/i18n/LanguageContext";
import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import { Check, Zap, Crown, Star } from "lucide-react";

export function Pricing() {
  const { t } = useLanguage();

  const subscriptions = [
    {
      id: "basic",
      name: t.Pricing?.plans?.basic?.name || "Basic",
      icon: <Star className="w-6 h-6" />,
      price: 99,
      period: "/month",
      description:
        t.Pricing?.plans?.basic?.description ||
        "Perfect for startups and small businesses getting started",
      features: t.Pricing?.plans?.basic?.features || [
        "Social media management (2 platforms)",
        "Basic graphic design (5 posts/month)",
        "Monthly performance report",
        "Email support",
        "Content calendar planning",
      ],
      highlighted: false,
    },
    {
      id: "premium",
      name: t.Pricing?.plans?.premium?.name || "Premium",
      icon: <Zap className="w-6 h-6" />,
      price: 299,
      period: "/month",
      description:
        t.Pricing?.plans?.premium?.description ||
        "Ideal for growing businesses ready to scale",
      features: t.Pricing?.plans?.premium?.features || [
        "Social media management (4 platforms)",
        "Advanced graphic design (15 posts/month)",
        "Meta Ads campaign management",
        "Weekly performance reports",
        "Priority WhatsApp support",
      ],
      highlighted: false,
    },
    {
      id: "gold",
      name: t.Pricing?.plans?.gold?.name || "Gold",
      icon: <Crown className="w-6 h-6" />,
      price: 599,
      period: "/month",
      description:
        t.Pricing?.plans?.gold?.description ||
        "Complete digital transformation for serious businesses",
      features: t.Pricing?.plans?.gold?.features || [
        "Everything in Premium",
        "Unlimited graphic design",
        "Full Meta Ads & Google Ads",
        "Dedicated account manager",
        "24/7 priority support",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="Pricing" className="bg-brand-dark">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            {t.Pricing?.title || "Simple Pricing Plans"}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t.Pricing?.subtitle ||
              "Choose the perfect plan for your business growth"}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {subscriptions.map((plan) => (
            <div
              key={plan.id}
              className="relative rounded-xl bg-brand-navy/20 border border-white/5 hover:border-brand-green/30 hover:bg-brand-navy/30 transition-all flex flex-col h-full p-6"
            >
              {/* Content */}
              <div className="flex flex-col gap-4 flex-1">
                {/* Header */}
                <div className="text-center space-y-2">
                  <div className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center bg-brand-green/10 text-brand-green">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-text-muted text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center">
                  <span className="text-4xl font-bold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-text-muted text-sm">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="grow space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-brand-green/70" />
                      <span className="text-text-primary">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action */}
                <Button className="w-full mt-auto" variant="outline" size="md">
                  View Plan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
