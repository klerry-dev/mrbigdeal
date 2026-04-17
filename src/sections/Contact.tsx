import React, { useState } from "react";
import { useLanguage } from "@/src/i18n/LanguageContext";
import { Section } from "@/src/components/ui/Section";
import { Button } from "@/src/components/ui/Button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Check,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Globe,
} from "lucide-react";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    service: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: t.contact?.labels?.email || "Email",
      value: "paul@mrbigdeal.com",
      href: "mailto:paul@mrbigdeal.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: t.contact?.labels?.phone || "Phone",
      value: "+255 123 456 789",
      href: "tel:+255123456789",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: t.contact?.labels?.location || "Location",
      value: t.contact?.values?.location || "Dar es Salaam, Tanzania",
      href: "#",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: t.contact?.labels?.businessHours || "Business Hours",
      value: t.contact?.values?.businessHours || "Mon-Fri: 9AM-6PM",
      href: "#",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: t.contact?.labels?.website || "Website",
      value: "www.mrbigdeal.com",
      href: "https://www.mrbigdeal.com",
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
  ];

  const services = t.contact?.services || [
    "Meta Ads Management",
    "Social Media Management",
    "Branding Services",
    "Website Development",
    "Digital Consulting",
    "Other",
  ];

  return (
    <section id="contact" className="bg-brand-dark py-12">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center py-8 mb-8">
          <h2 className="text-4xl md:text-6xl font-bold">
            {t.contact.title}{" "}
            <span className="text-brand-green">{t.contact.titleHighlight}</span>
            {t.contact.titleEnd}
          </h2>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-8 w-full m-0 p-0">
          {/* Contact Information */}
          <div className="w-full m-0 p-0 py-8">
            <h3 className="text-2xl font-bold text-white">
              {t.contact?.infoTitle || "Contact Information"}
            </h3>
            <div className="flex flex-col gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center p-6 rounded-xl bg-brand-navy/30 border border-brand-green/20 hover:border-brand-green/40 transition-all group"
                >
                  <div className="w-14 h-14 rounded-lg bg-brand-green/20 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-brand-navy transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-base text-text-muted">
                      {info.label}
                    </div>
                    <div className="text-lg text-white font-medium">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="border-t border-white/10 pt-8 mt-8">
              <h4 className="text-sm font-medium text-text-muted">
                {t.contact?.socialTitle || "Follow Us"}
              </h4>
              <div className="flex items-center gap-8 mt-10">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-brand-navy/50 border border-brand-green/20 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-brand-navy transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full m-0 p-0 py-8">
            <h3 className="text-2xl font-bold text-white">
              {t.contact?.formTitle || "Send a Message"}
            </h3>

            {isSubmitted ?
              <div className="rounded-2xl bg-brand-green/10 border border-brand-green/30 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-green/20 flex items-center justify-center">
                  <Check className="w-8 h-8 text-brand-green" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  {t.contact?.success?.title || "Message Sent!"}
                </h4>
                <p className="text-text-muted">
                  {t.contact?.success?.message ||
                    "Thank you for reaching out. I'll get back to you soon."}
                </p>
              </div>
            : <form onSubmit={handleSubmit}>
                <div className="m-0 p-0">
                  <label className="block text-sm font-medium text-white">
                    {t.contact?.form?.name || "Name"} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-brand-navy/30 border border-brand-green/20 rounded-xl text-white placeholder-text-muted focus:outline-none focus:border-brand-green/40 text-lg"
                    placeholder={
                      t.contact?.form?.placeholders?.name || "Your name"
                    }
                  />
                </div>
                <div className="m-0 p-0">
                  <label className="block text-sm font-medium text-white">
                    {t.contact?.form?.email || "Email"} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-brand-navy/30 border border-brand-green/20 rounded-xl text-white placeholder-text-muted focus:outline-none focus:border-brand-green/40 text-lg"
                    placeholder={
                      t.contact?.form?.placeholders?.email || "your@email.com"
                    }
                  />
                </div>

                <div className="m-0 p-0">
                  <label className="block text-sm font-medium text-white">
                    {t.contact?.form?.serviceInterest || "Service Interest"}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-brand-navy/30 border border-brand-green/20 rounded-xl text-white focus:outline-none focus:border-brand-green/40 appearance-none text-lg"
                  >
                    <option value="">
                      {t.contact?.form?.placeholders?.selectService ||
                        "Select a service"}
                    </option>
                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-brand-dark"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="m-0 p-0">
                  <label className="block text-sm font-medium text-white">
                    {t.contact?.form?.subject || "Subject"} *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-6 bg-brand-navy/30 border border-brand-green/20 rounded-xl text-white placeholder-text-muted focus:outline-none focus:border-brand-green/40 text-xl"
                    placeholder={
                      t.contact?.form?.placeholders?.subject ||
                      "How can I help you?"
                    }
                  />
                </div>

                <div className="m-0 p-0">
                  <label className="block text-sm font-medium text-white">
                    {t.contact?.form?.message || "Message"} *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-brand-navy/30 border border-brand-green/20 rounded-xl text-white placeholder-text-muted focus:outline-none focus:border-brand-green/40 resize-none text-lg"
                    placeholder={
                      t.contact?.form?.placeholders?.message ||
                      "Tell me about your project..."
                    }
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full py-6 text-lg"
                  disabled={
                    !formData.name ||
                    !formData.email ||
                    !formData.subject ||
                    !formData.message
                  }
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t.contact?.button || "Send Message"}
                </Button>
              </form>
            }
          </div>
        </div>
      </div>
    </section>
  );
}
