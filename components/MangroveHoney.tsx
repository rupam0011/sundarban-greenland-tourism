"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Droplets, Leaf, ShieldCheck, Award, MessageCircle } from "lucide-react";

const features = [
  { icon: Droplets, label: "100% Natural" },
  { icon: Leaf, label: "Hand Harvested" },
  { icon: ShieldCheck, label: "No Added Sugar" },
  { icon: Award, label: "Raw & Unfiltered" },
];

export default function MangroveHoney() {
  const handleOrderHoney = () => {
    const message = encodeURIComponent(
      "Hi! I'd like to order Brittika Natural Mangrove Honey from Sundarbans. Please share the details and pricing."
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
              Nature's Sweetest Gift
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4 font-[family-name:var(--font-display)]">
              Brittika Natural{" "}
              <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-500 bg-clip-text text-transparent">
                Mangrove Honey
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Pure, wild, and authentic. Collected by traditional honey hunters from the deep mangrove forests of the Sundarbans. Unprocessed, unfiltered, and 100% natural.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Rich in antioxidants and natural enzymes, our Brittika mangrove honey is harvested straight from the wild beehives in the UNESCO World Heritage mangrove forest.
            </p>

            {/* Pricing Cards */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-2xl border border-amber-100 shadow-sm flex-1 sm:flex-none">
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">300gm Jar</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-amber-600">₹250</span>
                  <span className="text-sm text-gray-400 line-through">₹290</span>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-5 py-3 rounded-2xl border border-amber-100 shadow-sm flex-1 sm:flex-none">
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">600gm Jar</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-amber-600">₹490</span>
                  <span className="text-sm text-gray-400 line-through">₹580</span>
                </div>
              </div>
            </div>

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
              Contact us directly: <a href="tel:+916290886807" className="hover:text-amber-600 transition-colors">6290886807</a>
            </p>
          </motion.div>

          {/* Visual Side - Honey banner image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Glowing background circle */}
            <div className="absolute -inset-10 bg-gradient-to-br from-amber-300/40 via-yellow-200/30 to-orange-200/20 blur-3xl rounded-full" />
            
            {/* Poster Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 shadow-amber-900/10 group">
              <Image
                src="/images/brittika-honey.png"
                alt="Brittika Natural Mangrove Honey Banner"
                width={1200}
                height={900}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
