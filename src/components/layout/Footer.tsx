import React from "react";
import { useLanguage } from "@/src/i18n/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    services: t.footer?.links?.services || [
      { name: "Meta Ads", href: "#/services" },
      { name: "Social Media", href: "#/services" },
      { name: "Branding", href: "#/services" },
      { name: "Digital Products", href: "#/products" },
    ],
    company: t.footer?.links?.company || [
      { name: "About", href: "#/about" },
      { name: "Courses", href: "#/courses" },
      { name: "Pricing", href: "#/Pricing" },
      { name: "Contact", href: "#/contact" },
    ],
    legal: t.footer?.links?.legal || [
      { name: "Developer", href: "#/developer" },
      { name: "Terms", href: "#/terms" },
      { name: "Privacy", href: "#/privacy" },
      { name: "Sitemap", href: "#/sitemap" },
    ],
  };

  return (
    <footer className="bg-brand-navy py-16 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="home-y-4">
            <div className="font-heading font-bold text-2xl tracking-tight text-white">
              Paul<span className="text-brand-green">.</span>Digital
            </div>
            <p className="text-text-muted leading-relaxed">
              {t.footer?.brandDescription ||
                "Your trusted digital marketing partner in Tanzania. Building systems that grow businesses through Meta Ads, social media, and branding expertise."}
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t.footer?.columns?.services || "Services"}
            </h4>
            <ul className="home-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-brand-green transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t.footer?.columns?.company || "Company"}
            </h4>
            <ul className="home-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-brand-green transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t.footer?.columns?.legal || "Legal & Contact"}
            </h4>
            <ul className="home-y-2 mb-6">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-text-muted hover:text-brand-green transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="text-sm">
              <div className="flex items-center gap-2 text-text-muted mb-4">
                <Mail className="w-4 h-4" />
                <span>paul@mrbigdeal.com</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted mb-4">
                <Phone className="w-4 h-4" />
                <span>+255 123 456 789</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <MapPin className="w-4 h-4" />
                <span>Dar es Salaam, Tanzania</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted pt-8 border-t border-white/5">
          <div>
            {t.footer?.copyright ||
              "© 2026 Paul Digital. Tanzania. All rights reserved."}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span>
              {t.footer?.bottomTags ||
                "Meta Ads · Social Media · Branding · Digital Products"}
            </span>
            <span className="text-brand-green">•</span>
            <span>
              {t.footer?.bottomLegal || "Developer · Terms · Privacy"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
