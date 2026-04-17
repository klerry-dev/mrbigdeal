import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { polyfill } from "seamless-scroll-polyfill";
import App from "./App.tsx";
import "./index.css";

// Initialize smooth scrolling polyfill for all browsers (old and new)
polyfill();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
