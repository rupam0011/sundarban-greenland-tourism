"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle, Check } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import WildlifeDivider from "@/components/WildlifeDivider";
import content from "@/data/content.json";

export default function ContactPage() {
  const { companyInfo, faqs } = content;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(`Hi, I have an inquiry via the Contact form:
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Subject: ${form.subject}
Message: ${form.message}`);
    window.open(`https://wa.me/${content.companyInfo.whatsapp}?text=${message}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 5000);
  };

  return (
    <article>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src="/images/pkg-overnight.png"
          alt="Contact Sundarban Greenland Tourism"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-display)] mb-4">
            Contact Us
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ready to explore the Sundarbans? Get in touch and we&apos;ll help plan your perfect trip.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 h-16 bg-gradient-to-t from-mist to-transparent" />
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WildlifeDivider variant="paws" className="mb-12" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-display)]">Get in Touch</h2>

                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: "Address", value: companyInfo.address },
                    { icon: Phone, label: "Phone", value: companyInfo.phone, href: `tel:${companyInfo.phone}` },
                    { icon: Phone, label: "Query / WhatsApp", value: companyInfo.queryPhone, href: `tel:${companyInfo.queryPhone}` },
                    { icon: Mail, label: "Email", value: companyInfo.email, href: `mailto:${companyInfo.email}` },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-50 shadow-sm">
                      <div className="w-10 h-10 rounded-xl bg-mangrove/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-mangrove" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-gray-700 text-sm hover:text-mangrove transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-gray-700 text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="mt-6 w-full py-3.5 bg-green-500 text-white rounded-xl font-semibold text-sm hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                </a>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-50">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-display)]">Send Us a Message</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 text-sm">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" required placeholder="Full Name" value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all" />
                      <input type="email" required placeholder="Email Address" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="tel" placeholder="Phone Number" value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all" />
                      <input type="text" required placeholder="Subject" value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all" />
                    </div>
                    <textarea rows={5} required placeholder="Your message..." value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all resize-none" />
                    <button type="submit"
                      className="w-full py-3.5 bg-mangrove text-white rounded-xl font-semibold text-sm hover:bg-mangrove-dark transition-colors shadow-lg shadow-mangrove/20 flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-mangrove text-sm font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 font-[family-name:var(--font-display)]">
              Frequently Asked Questions
            </h2>
          </div>
          <WildlifeDivider variant="mangrove" className="mb-10" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </article>
  );
}
