import React from "react";

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-brand-dark py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Sitemap
        </h1>
        <div className="text-text-muted space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Main Pages</h2>
            <ul className="space-y-2">
              <li><a href="/" className="text-brand-green hover:underline">Home</a></li>
              <li><a href="/search" className="text-brand-green hover:underline">Search</a></li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Sections</h2>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-brand-green hover:underline">About</a></li>
              <li><a href="/#services" className="text-brand-green hover:underline">Services</a></li>
              <li><a href="/#builds" className="text-brand-green hover:underline">Courses</a></li>
              <li><a href="/#products" className="text-brand-green hover:underline">Products</a></li>
              <li><a href="/#contact" className="text-brand-green hover:underline">Contact</a></li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Legal & Information</h2>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-brand-green hover:underline">Terms of Service</a></li>
              <li><a href="/privacy" className="text-brand-green hover:underline">Privacy Policy</a></li>
              <li><a href="/sitemap" className="text-brand-green hover:underline">Sitemap</a></li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Services</h2>
            <ul className="space-y-2">
              <li>Meta Ads Management</li>
              <li>Social Media Marketing</li>
              <li>Branding Services</li>
              <li>Digital Products</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
            <ul className="space-y-2">
              <li>Email: paul@mrbigdeal.com</li>
              <li>Phone: +255 123 456 789</li>
              <li>Location: Dar es Salaam, Tanzania</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
