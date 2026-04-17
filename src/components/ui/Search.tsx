import React, {
  forwardRef,
  InputHTMLAttributes,
  useState,
  useEffect,
  useRef,
} from "react";
import {
  Search as SearchIcon,
  X,
  ArrowRight,
  FileText,
  Layers,
  DollarSign,
  User,
  Package,
} from "lucide-react";
import { useLanguage } from "@/src/i18n/LanguageContext";

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
  icon: React.ReactNode;
}

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
  onClose?: () => void;
  showCloseButton?: boolean;
  language?: string;
  results?: SearchResult[];
  onSelectResult?: (result: SearchResult) => void;
  fullPage?: boolean;
}

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      className,
      onClear,
      onClose,
      showCloseButton = false,
      language = "en",
      results = [],
      onSelectResult,
      value = "",
      fullPage = false,
      ...props
    },
    ref,
  ) => {
    const { t } = useLanguage();
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const resultsContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Sync refs
    useEffect(() => {
      if (ref) {
        if (typeof ref === "function") {
          ref(inputRef.current);
        } else {
          ref.current = inputRef.current;
        }
      }
    }, [ref]);

    useEffect(() => {
      setSelectedIndex(-1);
    }, [value, results]);

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (results.length === 0) return;

        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < results.length - 1 ? prev + 1 : 0,
          );
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : results.length - 1,
          );
        } else if (e.key === "Enter" && selectedIndex >= 0) {
          e.preventDefault();
          onSelectResult?.(results[selectedIndex]);
        } else if (e.key === "Escape") {
          onClose?.();
        }
      };

      const input = inputRef.current;
      input?.addEventListener("keydown", handleKeyDown);
      return () => input?.removeEventListener("keydown", handleKeyDown);
    }, [results, selectedIndex, onSelectResult, onClose]);

    // Scroll selected result into view
    useEffect(() => {
      if (selectedIndex >= 0 && resultsContainerRef.current) {
        const selectedElement = resultsContainerRef.current.children[
          selectedIndex
        ] as HTMLElement;
        if (selectedElement) {
          selectedElement.scrollIntoView({ block: "nearest" });
        }
      }
    }, [selectedIndex]);

    const highlightMatch = (text: string, query: string) => {
      if (!query) return text;
      const regex = new RegExp(
        `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
        "gi",
      );
      return text.replace(
        regex,
        '<mark class="bg-brand-green/30 text-white px-0.5 rounded">$1</mark>',
      );
    };

    const getCategoryIcon = (category: string) => {
      switch (category) {
        case "Services":
          return <Layers className="w-4 h-4" />;
        case "Products":
          return <Package className="w-4 h-4" />;
        case "Pricing":
          return <DollarSign className="w-4 h-4" />;
        case "About":
          return <User className="w-4 h-4" />;
        default:
          return <FileText className="w-4 h-4" />;
      }
    };

    const groupedResults: Record<string, SearchResult[]> = results.reduce(
      (acc, result) => {
        if (!acc[result.category]) {
          acc[result.category] = [];
        }
        acc[result.category].push(result);
        return acc;
      },
      {},
    );

    return (
      <div className={`relative ${className}`}>
        <div className="relative flex items-center">
          <SearchIcon className="absolute left-4 text-white/50 w-5 h-5" />
          <input
            ref={inputRef}
            type="text"
            value={value}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-12 py-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
            {...props}
          />
          {showCloseButton && (
            <button
              onClick={() => {
                if (value) {
                  onClear?.();
                  inputRef.current?.focus();
                } else {
                  onClose?.();
                }
              }}
              className="absolute right-4 text-white/70 hover:text-white transition-colors"
              aria-label={value ? "Clear search" : "Close search"}
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Results Dropdown */}
        {results.length > 0 && (
          <div
            className={`bg-brand-navy/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 overflow-y-auto ${
              fullPage ?
                "mt-6 max-h-[calc(100vh-200px)]"
              : "absolute top-full left-0 right-0 mt-2 max-h-[60vh]"
            }`}
          >
            <div ref={resultsContainerRef}>
              {Object.entries(groupedResults).map(
                ([category, categoryResults]) => (
                  <div key={category}>
                    <div className="px-4 py-2 bg-white/5 text-xs font-semibold text-text-muted uppercase tracking-wider sticky top-0 backdrop-blur-xl">
                      {category}
                    </div>
                    {categoryResults.map((result, idx) => {
                      const globalIndex = results.indexOf(result);
                      return (
                        <button
                          key={result.id}
                          onClick={() => onSelectResult?.(result)}
                          className={`w-full px-4 py-3 text-left flex items-start gap-3 transition-all hover:bg-white/5 ${
                            selectedIndex === globalIndex ?
                              "bg-brand-green/10 border-l-2 border-brand-green"
                            : "border-l-2 border-transparent"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-brand-green/20 flex items-center justify-center text-brand-green shrink-0 mt-0.5">
                            {getCategoryIcon(result.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div
                              className="text-white font-medium text-sm"
                              dangerouslySetInnerHTML={{
                                __html: highlightMatch(
                                  result.title,
                                  String(value),
                                ),
                              }}
                            />
                            <div
                              className="text-text-muted text-xs mt-0.5 line-clamp-2"
                              dangerouslySetInnerHTML={{
                                __html: highlightMatch(
                                  result.description,
                                  String(value),
                                ),
                              }}
                            />
                          </div>
                          <ArrowRight className="w-4 h-4 text-text-muted shrink-0 mt-1" />
                        </button>
                      );
                    })}
                  </div>
                ),
              )}
            </div>
            <div className="px-4 py-2 bg-white/5 border-t border-white/10 text-xs text-text-muted flex items-center gap-2">
              <span>↑↓</span>
              <span>{t.search?.navigate || "to navigate"}</span>
              <span className="mx-2">•</span>
              <span>↵</span>
              <span>{t.search?.select || "to select"}</span>
              <span className="mx-2">•</span>
              <span>esc</span>
              <span>{t.search?.close || "to close"}</span>
            </div>
          </div>
        )}

        {/* No Results */}
        {value && results.length === 0 && (
          <div
            className={`bg-brand-navy/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 p-6 text-center ${
              fullPage ? "mt-6" : "absolute top-full left-0 right-0 mt-2"
            }`}
          >
            <SearchIcon className="w-12 h-12 text-text-muted mx-auto mb-3" />
            <p className="text-white font-medium">
              {t.search?.noResults || "No results found"}
            </p>
            <p className="text-text-muted text-sm mt-1">
              {t.search?.trySearching ||
                "Try searching for services, products, or pricing"}
            </p>
          </div>
        )}
      </div>
    );
  },
);

Search.displayName = "Search";
