"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Shield, Award } from "lucide-react";

export default function ISOCertified() {
  return (
    <section className="py-16 bg-mist">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-mangrove-dark via-mangrove to-mangrove-dark rounded-3xl overflow-hidden shadow-xl"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }} />
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

          <div className="relative z-10 px-8 sm:px-12 py-10 sm:py-12 flex flex-col md:flex-row items-center gap-8">
            {/* ISO Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="shrink-0"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gold/20 animate-pulse" />
                {/* Badge circle */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gold via-gold-light to-gold border-4 border-white/20 flex flex-col items-center justify-center shadow-lg shadow-gold/30">
                  <Shield className="w-8 h-8 text-mangrove-dark mb-1" />
                  <span className="text-mangrove-dark font-extrabold text-xs tracking-wider">ISO</span>
                  <span className="text-mangrove-dark font-bold text-[10px]">CERTIFIED</span>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="text-center md:text-left flex-1">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                <BadgeCheck className="w-5 h-5 text-gold" />
                <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                  Certified Excellence
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-display)] mb-3">
                ISO Certified Company
              </h3>
              <p className="text-white/70 leading-relaxed max-w-xl">
                Sundarban Greenland Tourism is proud to be an ISO certified organization,
                adhering to international standards of quality management, safety protocols,
                and customer service excellence. This certification reflects our unwavering
                commitment to delivering world-class tour experiences.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                {[
                  { icon: Shield, label: "Quality Assured" },
                  { icon: Award, label: "International Standards" },
                  { icon: BadgeCheck, label: "Verified & Trusted" },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10"
                  >
                    <badge.icon className="w-3.5 h-3.5 text-gold" />
                    <span className="text-white/80 text-xs font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
