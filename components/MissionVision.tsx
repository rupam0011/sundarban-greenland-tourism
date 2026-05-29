"use client";

import { motion } from "framer-motion";
import { Target, Eye, Compass, Heart } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-mangrove text-sm font-semibold uppercase tracking-wider">
            What We Stand For
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 font-[family-name:var(--font-display)]">
            Our Mission & Vision
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-mangrove to-mangrove-dark p-8 sm:p-10 text-white shadow-xl hover:shadow-2xl transition-shadow duration-500"
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-display)]">
                  Our Mission
                </h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                To provide authentic, safe, and eco-friendly Sundarban tour experiences
                that connect travelers with the raw beauty of the mangrove ecosystem
                while supporting local communities and preserving biodiversity.
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <Compass className="w-5 h-5 text-gold" />
                <span className="text-white/60 text-sm">
                  Guiding travelers to nature&apos;s wonders responsibly
                </span>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-earth to-earth-dark p-8 sm:p-10 text-white shadow-xl hover:shadow-2xl transition-shadow duration-500"
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-display)]">
                  Our Vision
                </h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                To become the most trusted and recognized eco-tourism brand in
                the Sundarbans, setting the gold standard for responsible wildlife
                tourism that benefits nature, local communities, and travelers alike.
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <Heart className="w-5 h-5 text-gold" />
                <span className="text-white/60 text-sm">
                  Building a future where tourism and conservation thrive together
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
