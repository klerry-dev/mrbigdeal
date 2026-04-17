import React, { useState } from "react";
import { useLanguage } from "@/src/i18n/LanguageContext";
import { Button } from "@/src/components/ui/Button";
import { Instagram } from "lucide-react";

export function About() {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/mr_bigdeal_digital?igsh=ODFrM2Y2cnA3Y2k1",
      "_blank",
    );
  };

  return (
    <section id="about" className="bg-brand-dark my-12">
      <div className="container mx-auto max-w-7xl md:pl-0 lg:pl-0">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            {t.about.header.greeting}{" "}
            <span className="text-brand-green">{t.about.header.name}</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t.about.header.subtitle}
          </p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-8">
          {/* Profile Image with Interactive Effect */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleInstagramClick}
          >
            <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
              {/* Profile Image Container - Squircle */}
              <div className="absolute inset-0 rounded-xl overflow-hidden border-4 border-brand-green/30 group-hover:border-brand-green transition-all duration-300">
                <img
                  src="/hero.jpeg"
                  alt="Mr.BigDeal - Brand Consultant"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 30%" }}
                />

                {/* Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-brand-dark/60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="text-center">
                    <Instagram className="w-12 h-12 text-brand-green mx-auto" />
                    <p className="text-white font-semibold">
                      {t.about.profile.followText}
                    </p>
                    <p className="text-text-muted text-sm">
                      {t.about.profile.instagramHandle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="md:ml-0 lg:ml-0">
            <p className="text-base lg:text-xl text-text-muted leading-relaxed mb-3">
              <span className="text-brand-green font-semibold">Mr.BigDeal</span>{" "}
              - {t.about.content.paragraph3}
            </p>

            <p className="text-base lg:text-xl text-text-muted leading-relaxed mb-3">
              {t.about.content.paragraph4}
            </p>

            <p className="text-base lg:text-xl text-text-muted leading-relaxed">
              {t.about.content.paragraph5}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
