import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/src/i18n/LanguageContext";
import { Button } from "../ui/Button";
import { Language } from "@/src/i18n/translations";
import { MenuIcon, XIcon } from "../ui/icons";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLangName, setShowLangName] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // On mobile: show bg immediately when scrolling down, hide when at top
      // On desktop: use hero section threshold
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        setIsScrolled(currentScrollY > 0);
      } else {
        const heroSection = document.getElementById("home");
        const heroBottom =
          heroSection ?
            heroSection.offsetTop + heroSection.offsetHeight - 100
          : 0;

        if (
          currentScrollY > lastScrollY.current &&
          currentScrollY > 50 &&
          currentScrollY >= heroBottom
        ) {
          setIsScrolled(true);
        } else if (currentScrollY < lastScrollY.current) {
          setIsScrolled(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showLangName) {
      const timer = setTimeout(() => {
        setShowLangName(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showLangName]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center h-16 md:h-20">
          <div className="flex-1 flex justify-start">
            <Link to="/" className="flex items-center cursor-pointer">
              <span className="text-2xl font-bold font-heading text-white">
                Mr.BigDeal
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-text-muted hover:text-white transition-colors cursor-pointer"
            >
              {t.nav.home || "Home"}
            </Link>
            <Link
              to="#about"
              className="text-sm font-medium text-text-muted hover:text-white transition-colors cursor-pointer"
            >
              {t.nav.about}
            </Link>
            <Link
              to="#services"
              className="text-sm font-medium text-text-muted hover:text-white transition-colors cursor-pointer"
            >
              {t.nav.services}
            </Link>
            <Link
              to="#products"
              className="text-sm font-medium text-text-muted hover:text-white transition-colors cursor-pointer"
            >
              {t.nav.courses || "Courses"}
            </Link>
            <Link
              to="#Pricing"
              className="text-sm font-medium text-text-muted hover:text-white transition-colors cursor-pointer"
            >
              {t.nav.pricing || "Pricing"}
            </Link>
            <Link
              to="#contact"
              className="text-sm font-medium text-text-muted hover:text-white transition-colors cursor-pointer"
            >
              {t.nav.contacts || "Contacts"}
            </Link>
          </nav>

          <div className="flex-1 flex justify-end">
            <div className="flex items-center gap-4 relative">
              <button
                onClick={() => {
                  setShowLangName(!showLangName);
                  setLanguage(language === "en" ? "sw" : "en");
                }}
                className="hidden md:flex items-center gap-2 p-2 text-white hover:text-brand-green transition-colors relative"
                aria-label="Toggle language"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m5 8 6 6" />
                  <path d="m4 14 6-6 2-3" />
                  <path d="M2 5h12" />
                  <path d="M7 2h1" />
                  <path d="m22 22-5-10-5 10" />
                  <path d="M14 18h6" />
                </svg>
                {showLangName && (
                  <span className="text-sm font-medium text-white animate-in fade-in slide-in-from-left-2 duration-300">
                    {language === "en" ? "English" : "Kiswahili"}
                  </span>
                )}
              </button>

              <Link
                to="/search"
                className="hidden sm:inline-flex p-2 text-white hover:text-brand-green transition-colors"
                aria-label="Search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m21 21-4.34-4.34" />
                  <circle cx="11" cy="11" r="8" />
                </svg>
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden py-2 pl-2 pr-0 text-white hover:text-brand-green transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ?
                  <XIcon width="28" height="28" />
                : <MenuIcon width="28" height="28" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed right-0 top-16 h-[calc(100vh-4rem)] w-full z-60 bg-brand-dark flex flex-col overflow-y-auto"
            >
              {/* Mobile Navigation */}
              <div className="flex flex-col items-center w-full py-6 md:py-6">
                <nav className="flex flex-col gap-4 items-center text-center">
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-4 text-3xl font-bold rounded-lg transition-colors text-white hover:text-text-muted"
                  >
                    {t.nav.home || "Home"}
                  </Link>
                  <Link
                    to="/#about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-4 text-3xl font-bold rounded-lg transition-colors text-white hover:text-text-muted"
                  >
                    {t.nav.about}
                  </Link>
                  <Link
                    to="/#services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-4 text-3xl font-bold rounded-lg transition-colors text-white hover:text-text-muted"
                  >
                    {t.nav.services}
                  </Link>
                  <Link
                    to="/#products"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-4 text-3xl font-bold rounded-lg transition-colors text-white hover:text-text-muted"
                  >
                    {t.nav.courses || "Courses"}
                  </Link>
                  <Link
                    to="/#Pricing"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-4 text-3xl font-bold rounded-lg transition-colors text-white hover:text-text-muted"
                  >
                    {t.nav.pricing || "Pricing"}
                  </Link>
                  <Link
                    to="/#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-4 text-3xl font-bold rounded-lg transition-colors text-white hover:text-text-muted"
                  >
                    {t.nav.contacts || "Contacts"}
                  </Link>
                </nav>
              </div>

              {/* Mobile Action Buttons */}
              <div className="p-6">
                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={() => {
                      setShowLangName(!showLangName);
                      setLanguage(language === "en" ? "sw" : "en");
                    }}
                    className="flex items-center gap-2 p-3 text-white hover:text-brand-green transition-colors"
                    aria-label="Toggle language"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m5 8 6 6" />
                      <path d="m4 14 6-6 2-3" />
                      <path d="M2 5h12" />
                      <path d="M7 2h1" />
                      <path d="m22 22-5-10-5 10" />
                      <path d="M14 18h6" />
                    </svg>
                    {showLangName && (
                      <span className="text-sm font-medium">
                        {language === "en" ? "EN" : "SW"}
                      </span>
                    )}
                  </button>

                  <Link
                    to="/search"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 p-3 text-white hover:text-brand-green transition-colors"
                    aria-label="Search"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m21 21-4.34-4.34" />
                      <circle cx="11" cy="11" r="8" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
