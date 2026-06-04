"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Phone, CreditCard, MessageCircle, UtensilsCrossed } from "lucide-react";
import content from "@/data/content.json";

interface BookingModalProps {
  packageTitle: string;
  price: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ packageTitle, price, isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<"choose" | "form" | "success">("choose");
  const [paymentType, setPaymentType] = useState<"advance" | "full">("advance");
  const [mealPref, setMealPref] = useState<"non-veg" | "veg">("non-veg");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", guests: "1", date: "" });
  const { companyInfo } = content;

  const advanceAmount = Math.round(price * 0.5);
  const displayAmount = paymentType === "advance" ? advanceAmount : price;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'm interested in the "${packageTitle}" package. Please share more details.`);
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${message}`, "_blank");
  };

  const resetAndClose = () => {
    setStep("choose");
    setFormData({ name: "", email: "", phone: "", guests: "1", date: "" });
    setMealPref("non-veg");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={resetAndClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-mangrove to-mangrove-light p-6">
              <button onClick={resetAndClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <X className="w-4 h-4" />
              </button>
              <h3 className="text-white font-bold text-lg font-[family-name:var(--font-display)]">
                {step === "success" ? "Booking Confirmed!" : `Book: ${packageTitle}`}
              </h3>
              {step !== "success" && (
                <p className="text-white/70 text-sm mt-1">Choose how you&apos;d like to proceed</p>
              )}
            </div>

            <div className="p-6">
              {/* Step: Choose */}
              {step === "choose" && (
                <div className="space-y-4">
                  <button onClick={handleWhatsApp}
                    className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-green-100 bg-green-50 hover:border-green-300 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Talk to Organizer</p>
                      <p className="text-xs text-gray-500">Chat on WhatsApp for custom queries</p>
                    </div>
                  </button>

                  <div className="relative flex items-center gap-4">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-xs text-gray-400 font-medium">OR</span>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>

                  <button onClick={() => setStep("form")}
                    className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-mangrove/10 bg-mangrove/5 hover:border-mangrove/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-mangrove flex items-center justify-center shrink-0">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Book Now Online</p>
                      <p className="text-xs text-gray-500">Pay advance (50%) or full amount</p>
                    </div>
                  </button>

                  <button onClick={() => { window.location.href = `tel:${companyInfo.phone}`; }}
                    className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-earth/10 bg-earth/5 hover:border-earth/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-earth flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Call Us</p>
                      <p className="text-xs text-gray-500">{companyInfo.phone}</p>
                    </div>
                  </button>
                </div>
              )}

              {/* Step: Form */}
              {step === "form" && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Payment type toggle */}
                  <div className="flex rounded-xl bg-gray-100 p-1">
                    {[
                      { key: "advance" as const, label: `Pay 50% Advance – ₹${advanceAmount.toLocaleString("en-IN")}` },
                      { key: "full" as const, label: `Pay Full – ₹${price.toLocaleString("en-IN")}` },
                    ].map((opt) => (
                      <button key={opt.key} type="button"
                        onClick={() => setPaymentType(opt.key)}
                        className={`flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                          paymentType === opt.key
                            ? "bg-mangrove text-white shadow-md"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  <input type="text" required placeholder="Full Name" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all" />
                  <input type="email" required placeholder="Email Address" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all" />
                  <div className="grid grid-cols-2 gap-3">
                    <input type="tel" required placeholder="Phone" value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all" />
                    <input type="number" min="1" max="20" required placeholder="Guests" value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all" />
                  </div>
                  <input type="date" required value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-mangrove focus:ring-2 focus:ring-mangrove/10 transition-all" />

                  {/* Meal Preference */}
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <UtensilsCrossed className="w-3.5 h-3.5" /> Meal Preference
                    </label>
                    <div className="flex rounded-xl bg-gray-100 p-1">
                      {[
                        { key: "non-veg" as const, label: "🍗 Non-Veg", color: "bg-red-500" },
                        { key: "veg" as const, label: "🥬 Veg", color: "bg-green-500" },
                      ].map((opt) => (
                        <button key={opt.key} type="button"
                          onClick={() => setMealPref(opt.key)}
                          className={`flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                            mealPref === opt.key
                              ? `${opt.color} text-white shadow-md`
                              : "text-gray-500 hover:text-gray-700"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-mangrove/5 rounded-xl p-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Amount to pay</span>
                      <span className="font-bold text-mangrove text-lg">₹{displayAmount.toLocaleString("en-IN")}</span>
                    </div>
                    {paymentType === "advance" && (
                      <p className="text-xs text-gray-400">Remaining ₹{(price - advanceAmount).toLocaleString("en-IN")} payable before trip</p>
                    )}
                    <p className="text-xs text-gray-400 mt-1">Meal: {mealPref === "veg" ? "Vegetarian" : "Non-Vegetarian"}</p>
                  </div>

                  <button type="submit"
                    className="w-full py-3.5 rounded-xl bg-mangrove text-white font-semibold text-sm hover:bg-mangrove-dark transition-colors shadow-lg shadow-mangrove/25">
                    Confirm Booking – ₹{displayAmount.toLocaleString("en-IN")}
                  </button>
                </form>
              )}

              {/* Step: Success */}
              {step === "success" && (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Booking Successful!</h4>
                  <p className="text-gray-500 text-sm mb-2">
                    Thank you, {formData.name}! Your booking for <strong>{packageTitle}</strong> has been received.
                  </p>
                  <p className="text-gray-400 text-xs mb-2">
                    Amount: ₹{displayAmount.toLocaleString("en-IN")} ({paymentType === "advance" ? "50% advance" : "Full payment"})
                  </p>
                  <p className="text-gray-400 text-xs mb-2">
                    Meal Preference: {mealPref === "veg" ? "🥬 Vegetarian" : "🍗 Non-Vegetarian"}
                  </p>
                  <p className="text-gray-400 text-xs mb-6">
                    We&apos;ll contact you at {formData.phone} to confirm your trip details.
                  </p>
                  <button onClick={resetAndClose}
                    className="px-8 py-3 rounded-xl bg-mangrove text-white font-semibold text-sm hover:bg-mangrove-dark transition-colors">
                    Done
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
