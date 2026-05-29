"use client";

import { motion } from "framer-motion";
import { Droplets, Leaf, ShieldCheck, Award, MessageCircle } from "lucide-react";

const features = [
  { icon: Droplets, label: "100% Pure & Raw" },
  { icon: Leaf, label: "Organic Mangrove" },
  { icon: ShieldCheck, label: "Lab Tested" },
  { icon: Award, label: "Premium Quality" },
];

export default function MangroveHoney() {
  const handleOrderHoney = () => {
    const message = encodeURIComponent(
      "Hi! I'd like to order Pure Mangrove Honey from Sundarbans. Please share the details and pricing."
    );
    window.open(`https://wa.me/916290886807?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/50 to-yellow-50">
      {/* Decorative golden blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-200/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-yellow-200/20 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">
              From the Mangroves
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4 font-[family-name:var(--font-display)]">
              Pure Mangrove{" "}
              <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-500 bg-clip-text text-transparent">
                Honey
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Harvested by the brave Mouli honey collectors deep inside the
              Sundarban Tiger Reserve, our pure mangrove honey is one of the
              rarest and most sought-after varieties in India.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Rich in antioxidants and natural enzymes, Sundarban mangrove honey
              is collected from wild beehives in the heart of the UNESCO World
              Heritage mangrove forest. Each jar carries the essence of the
              world&apos;s largest tidal forest — unprocessed, unfiltered, and
              absolutely pure.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/70 border border-amber-100 shadow-sm"
                >
                  <feat.icon className="w-5 h-5 text-amber-600 shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{feat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={handleOrderHoney}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-white rounded-full font-semibold text-sm shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-shadow duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Order Honey on WhatsApp
            </motion.button>
            <p className="text-gray-400 text-xs mt-3">
              Click to chat with us directly on WhatsApp for ordering
            </p>
          </motion.div>

          {/* Visual Side - Honey jar illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Glowing background circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-amber-300/40 via-yellow-200/30 to-orange-200/20 blur-2xl" />

              {/* Main honey display card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-amber-100 shadow-xl p-8 h-full flex flex-col items-center justify-center">
                {/* Hexagon pattern background */}
                <div className="absolute inset-0 opacity-[0.03] rounded-3xl overflow-hidden" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />

                {/* Honey drop icon */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-6"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 flex items-center justify-center shadow-lg shadow-amber-400/30">
                    <Droplets className="w-12 h-12 text-white" />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-display)] text-center mb-2">
                  Sundarban Wild Honey
                </h3>
                <p className="text-amber-600 font-semibold text-sm mb-4">
                  Pure & Unprocessed
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {["Wild Flower", "Mangrove", "Raw", "Organic"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium border border-amber-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-gray-400 text-xs">Collected by Traditional Moulis</p>
                  <p className="text-gray-400 text-xs">From the Heart of Sundarbans</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
