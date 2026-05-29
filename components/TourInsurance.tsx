"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Luggage, PlaneTakeoff, BadgeCheck, Umbrella } from "lucide-react";

const benefits = [
  {
    icon: HeartPulse,
    title: "Medical Emergency",
    desc: "Coverage for medical expenses during the tour including hospitalization and emergency evacuation.",
  },
  {
    icon: ShieldCheck,
    title: "Accident Coverage",
    desc: "Personal accident insurance covering unforeseen incidents during boat safaris and jungle excursions.",
  },
  {
    icon: PlaneTakeoff,
    title: "Trip Cancellation",
    desc: "Protection against trip cancellation due to unforeseen circumstances, natural disasters, or emergencies.",
  },
  {
    icon: Luggage,
    title: "Baggage Protection",
    desc: "Coverage for loss or damage to personal belongings and baggage during the tour.",
  },
];

export default function TourInsurance() {
  return (
    <section className="py-20 bg-gradient-to-b from-mist via-white to-mist relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-mangrove/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-mangrove text-sm font-semibold uppercase tracking-wider">
            Travel with Confidence
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 font-[family-name:var(--font-display)]">
            Tour Insurance Included
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Your safety is our priority. We provide comprehensive travel insurance
            with every tour package — so you can explore with complete peace of mind.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
        >
          {/* Header bar */}
          <div className="bg-gradient-to-r from-mangrove-dark to-mangrove px-8 py-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <Umbrella className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg font-[family-name:var(--font-display)]">
                Comprehensive Travel Insurance
              </h3>
              <p className="text-white/70 text-sm">Included with all tour packages at no extra cost</p>
            </div>
            <div className="ml-auto hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <BadgeCheck className="w-4 h-4 text-gold" />
              <span className="text-white text-xs font-semibold">Covered</span>
            </div>
          </div>

          {/* Benefits grid */}
          <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/80 hover:bg-mangrove/5 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-mangrove/10 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6 text-mangrove" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm mb-1">{benefit.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <div className="px-8 pb-6">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-gold/5 border border-gold/10">
              <BadgeCheck className="w-5 h-5 text-gold mt-0.5 shrink-0" />
              <p className="text-gray-600 text-xs leading-relaxed">
                <strong>Note:</strong> Travel insurance is automatically included with all our tour packages.
                Coverage details and terms apply as per the insurance provider&apos;s policy. For specific queries
                about coverage limits, please contact us directly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
