"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Check,
  User,
  Calendar,
  Users,
} from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CustomSelect from "@/components/CustomSelect";
import content from "@/data/content.json";

export default function ContactPage() {
  const { companyInfo, faqs } = content;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    date: "",
    package: "",
    persons: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi, I would like to book a tour.\nName: ${form.name}\nMobile: ${form.mobile}\nTour Date: ${form.date}\nPackage: ${form.package}\nPersons: ${form.persons}\nMessage: ${form.message}`
    );
    window.open(
      `https://wa.me/${content.companyInfo.whatsapp}?text=${msg}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        mobile: "",
        date: "",
        package: "",
        persons: "",
        message: "",
      });
    }, 5000);
  };

  return (
    <article>
      {/* ── Hero Banner ── */}
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
            Get In Touch
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ready to explore the Sundarbans? Get in touch and we&apos;ll help
            plan your perfect trip.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 h-16 bg-gradient-to-t from-mist to-transparent" />
      </section>

      {/* ── Contact Info + Form (side-by-side like reference) ── */}
      <section className="py-16 md:py-24 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* LEFT — Office Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-display)]">
                Our Office Information
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-mangrove/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-mangrove" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {companyInfo.address}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sunset/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-sunset" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">
                      E-mail
                    </h4>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-gray-600 text-sm hover:text-mangrove transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-river/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-river" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">
                      Phone
                    </h4>
                    <p className="text-gray-600 text-sm">
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="hover:text-mangrove transition-colors"
                      >
                        {companyInfo.phone}
                      </a>{" "}
                      /{" "}
                      <a
                        href={`tel:${companyInfo.queryPhone}`}
                        className="hover:text-mangrove transition-colors"
                      >
                        {companyInfo.queryPhone}
                      </a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">
                      WhatsApp
                    </h4>
                    <a
                      href={`https://wa.me/${companyInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 text-sm font-medium hover:text-green-700 transition-colors"
                    >
                      Chat with us instantly →
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-3.5 bg-green-500 text-white rounded-xl font-semibold text-sm hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </motion.div>

            {/* RIGHT — Enquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-display)]">
                  Send Us an Enquiry
                </h2>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Enquiry Submitted!
                    </h3>
                    <p className="text-gray-500 text-sm">
                      We&apos;ll get back to you within 1 hour.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all bg-white"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          required
                          placeholder="Mobile / WhatsApp"
                          value={form.mobile}
                          onChange={(e) =>
                            setForm({ ...form, mobile: e.target.value })
                          }
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all bg-white"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="date"
                          required
                          value={form.date}
                          onChange={(e) =>
                            setForm({ ...form, date: e.target.value })
                          }
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all bg-white"
                        />
                      </div>
                      <div className="relative">
                        <CustomSelect
                          required
                          value={form.package}
                          onChange={(val) =>
                            setForm({ ...form, package: val })
                          }
                          placeholder="Select Package"
                          options={content.packages.map((pkg) => ({
                            value: pkg.title,
                            label: `${pkg.title} – ${pkg.duration}`,
                          }))}
                        />
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="number"
                        min="1"
                        max="50"
                        required
                        placeholder="No of Person"
                        value={form.persons}
                        onChange={(e) =>
                          setForm({ ...form, persons: e.target.value })
                        }
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all bg-white"
                      />
                    </div>

                    {/* Row 4 — Message */}
                    <textarea
                      rows={5}
                      placeholder="Message (optional)"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all bg-white resize-none"
                    />

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-mangrove text-white rounded-xl font-semibold text-sm hover:bg-mangrove-dark transition-all shadow-lg shadow-mangrove/20 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-mist">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-mangrove text-sm font-semibold uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 font-[family-name:var(--font-display)]">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </article>
  );
}
