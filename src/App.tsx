import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "./i18n/LanguageContext";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import SearchPage from "./pages/Search";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Sitemap from "./pages/Sitemap";
import Developer from "./pages/Developer";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash && pathname === "/") {
      const element = document.querySelector(hash);
      if (element) {
        const headerHeight = window.innerWidth >= 768 ? 80 : 64;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - 20;

        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    } else if (!hash && pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isStudio = pathname.startsWith("/studio");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        navigate("/search");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToHash />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/developer" element={<Developer />} />
        </Routes>
      </main>
      {!isStudio && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
