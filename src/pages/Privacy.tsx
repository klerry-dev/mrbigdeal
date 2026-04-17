import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-brand-dark py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Privacy Policy
        </h1>
        <div className="text-text-muted space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p>
              We collect information you provide directly, including name, email address, phone number, and business details when you use our services or contact us.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <p>
              We use your information to provide, maintain, and improve our services, communicate with you about our products and services, and process transactions.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Cookies</h2>
            <p>
              We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Third-Party Services</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external sites.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">9. Contact Us</h2>
            <p>
              For questions about this privacy policy, please contact us at paul@mrbigdeal.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
