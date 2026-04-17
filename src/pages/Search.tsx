import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/src/i18n/LanguageContext";
import { Search, SearchResult } from "@/src/components/ui/Search";
import { filterSearchResults } from "@/src/lib/searchData";

export default function SearchPage() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setSearchResults(filterSearchResults(searchQuery, language as "en" | "sw"));
  }, [searchQuery, language]);

  const handleSelectResult = (result: SearchResult) => {
    setSearchQuery("");
    setSearchResults([]);

    // Navigate to the result's href
    if (result.href.startsWith("#")) {
      // If it's a hash link, navigate to home with the hash
      navigate(`/${result.href}`);

      // Scroll to the element after navigation
      setTimeout(() => {
        const element = document.querySelector(result.href);
        if (element) {
          const headerHeight = window.innerWidth >= 768 ? 80 : 64;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight - 20;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // Navigate to the result's href
      window.location.href = result.href;
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-brand-dark pt-20 md:pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto">
          <Search
            ref={searchInputRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClear={() => setSearchQuery("")}
            onClose={handleClose}
            placeholder={language === "en" ? "Search..." : "Tafuta..."}
            language={language}
            className="w-full"
            showCloseButton={true}
            results={searchResults}
            onSelectResult={handleSelectResult}
            fullPage={true}
          />
        </div>
      </div>
    </div>
  );
}
