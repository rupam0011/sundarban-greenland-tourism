"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Calendar, Package, Users, Send, Check } from "lucide-react";
import content from "@/data/content.json";

export default function EnquiryBar() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    date: "",
    package: "",
    persons: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(`Hi, I would like to enquire about a tour.
Name: ${form.name}
Mobile: ${form.mobile}
Date: ${form.date}
Package: ${form.package}
Persons: ${form.persons}`);
    window.open(`https://wa.me/${content.companyInfo.whatsapp}?text=${message}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", mobile: "", date: "", package: "", persons: "" });
    }, 3000);
  };

  return (
    <section className="py-16 bg-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-mangrove text-sm font-semibold uppercase tracking-wider">Quick Booking</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 font-[family-name:var(--font-display)]">
            Enquire About Your Tour
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl shadow-mangrove/5 border border-gray-100 p-5 sm:p-6"
        >
          {submitted ? (
            <div className="flex items-center justify-center gap-3 py-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Enquiry Submitted!</p>
                <p className="text-xs text-gray-500">We&apos;ll call you back shortly.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
              {/* Name */}
              <div className="relative flex-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full pl-9 pr-3 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all bg-white"
                />
              </div>

              {/* Mobile / WhatsApp */}
              <div className="relative flex-1">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="tel"
                  required
                  placeholder="Mobile / WhatsApp"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  className="w-full pl-9 pr-3 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all bg-white"
                />
              </div>

              {/* Tour Date */}
              <div className="relative flex-1">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full pl-9 pr-3 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all bg-white"
                />
              </div>

              {/* Select Package */}
              <div className="relative flex-1">
                <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select
                  required
                  value={form.package}
                  onChange={(e) => setForm({ ...form, package: e.target.value })}
                  className="w-full pl-9 pr-3 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all bg-white appearance-none cursor-pointer"
                >
                  <option value="">Select Package</option>
                  {content.packages.map((pkg) => (
                    <option key={pkg.id} value={pkg.title}>
                      {pkg.title} – {pkg.duration}
                    </option>
                  ))}
                </select>
              </div>

              {/* No of Persons */}
              <div className="relative w-full lg:w-28">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="number"
                  min="1"
                  max="50"
                  required
                  placeholder="Persons"
                  value={form.persons}
                  onChange={(e) => setForm({ ...form, persons: e.target.value })}
                  className="w-full pl-9 pr-3 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all bg-white"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="px-6 py-3 bg-mangrove text-white rounded-xl font-semibold text-sm hover:bg-mangrove-dark transition-all shadow-lg shadow-mangrove/20 flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                <Send className="w-4 h-4" /> SUBMIT
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
