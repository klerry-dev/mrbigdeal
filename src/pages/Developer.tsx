import React from "react";

export default function Developer() {
  return (
    <div className="min-h-screen bg-brand-dark py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Developer Information
        </h1>
        <div className="text-text-muted space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Technology Stack</h2>
            <p>
              This website is built using modern web technologies including React, TypeScript, Vite, and TailwindCSS for optimal performance and developer experience.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Frontend Framework</h2>
            <p>
              React with TypeScript for type safety and better maintainability. The application uses React Router for navigation and state management.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Styling</h2>
            <p>
              TailwindCSS for utility-first styling approach, enabling rapid UI development and consistent design system across the application.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Build Tool</h2>
            <p>
              Vite for fast development server and optimized production builds, providing excellent hot module replacement during development.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Icons</h2>
            <p>
              Lucide React for consistent and beautiful iconography throughout the application.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Internationalization</h2>
            <p>
              Custom i18n implementation with LanguageContext for multi-language support, making the website accessible to a broader audience.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Performance</h2>
            <p>
              Optimized for performance with lazy loading, code splitting, and efficient rendering patterns to ensure fast load times.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Contact Developer</h2>
            <p>
              For technical inquiries or collaboration opportunities, please contact us at paul@mrbigdeal.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
