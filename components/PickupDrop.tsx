"use client";

import { motion } from "framer-motion";
import { MapPin, Bus, Clock, Route, Phone, ArrowRight } from "lucide-react";

export default function PickupDrop() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-mangrove text-sm font-semibold uppercase tracking-wider">
            Transportation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 font-[family-name:var(--font-display)]">
            Pickup & Drop Service
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            We provide comfortable AC vehicle pickup and drop service so you can
            start your Sundarban adventure stress-free.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-mangrove/5 via-white to-gold/5 rounded-3xl border border-gray-100 shadow-lg overflow-hidden"
        >
          {/* Decorative background dots */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "radial-gradient(circle, #2d4a22 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }} />

          <div className="relative z-10 p-8 sm:p-10">
            {/* Route visual */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
              {/* Pickup Point */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center md:items-start text-center md:text-left flex-1"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-mangrove/10 mb-4">
                  <MapPin className="w-8 h-8 text-mangrove" />
                </div>
                <div className="px-3 py-1 rounded-full bg-mangrove/10 text-mangrove text-xs font-bold uppercase tracking-wider mb-2">
                  Pickup Locations
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
                  Kolkata <span className="text-gray-400 font-normal">&amp;</span> Canning
                </h3>
                <p className="text-gray-500 text-sm mt-1">Multiple convenient boarding points</p>
              </motion.div>

              {/* Route connector */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col md:flex-row items-center gap-3 px-4 md:px-8 py-4"
              >
                {/* Dashed line - horizontal on md+, vertical on mobile */}
                <div className="hidden md:block w-12 lg:w-16 h-0.5 border-t-2 border-dashed border-mangrove/30" />
                <div className="md:hidden h-12 w-0.5 border-l-2 border-dashed border-mangrove/30" />

                <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-mangrove text-white shadow-lg shadow-mangrove/20">
                  <Bus className="w-5 h-5" />
                  <div className="text-center">
                    <p className="text-xs font-bold uppercase tracking-wider">AC Vehicle</p>
                    <p className="text-[10px] text-white/70">To Godkhali</p>
                  </div>
                  <ArrowRight className="w-4 h-4" />
                </div>

                <div className="hidden md:block w-12 lg:w-16 h-0.5 border-t-2 border-dashed border-mangrove/30" />
                <div className="md:hidden h-12 w-0.5 border-l-2 border-dashed border-mangrove/30" />
              </motion.div>

              {/* Drop Point */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col items-center md:items-end text-center md:text-right flex-1"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-earth/10 mb-4">
                  <MapPin className="w-8 h-8 text-earth" />
                </div>
                <div className="px-3 py-1 rounded-full bg-earth/10 text-earth text-xs font-bold uppercase tracking-wider mb-2">
                  Drop / Boarding Point
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
                  Godkhali Ghat
                </h3>
                <p className="text-gray-500 text-sm mt-1">South 24 Parganas, West Bengal</p>
              </motion.div>
            </div>

            {/* Detailed Locations List */}
            <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-mangrove" />
                Detailed Boarding Information
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {/* Point 1 */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex items-center justify-center w-8 h-8 rounded-full bg-mangrove/10 shrink-0">
                    <span className="text-mangrove font-bold text-xs">1</span>
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">Indian Museum (Park St.)</p>
                    <p className="text-sm text-gray-500 mt-1">Kolkata • Primary Pickup Point</p>
                  </div>
                </div>
                
                {/* Point 2 */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex items-center justify-center w-8 h-8 rounded-full bg-mangrove/10 shrink-0">
                    <span className="text-mangrove font-bold text-xs">2</span>
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">Science City</p>
                    <p className="text-sm text-gray-500 mt-1">P.C. Chandra Garden • Second Pickup</p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex items-center justify-center w-8 h-8 rounded-full bg-mangrove/10 shrink-0">
                    <span className="text-mangrove font-bold text-xs">3</span>
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">Canning Railway Station</p>
                    <p className="text-sm text-gray-500 mt-1">South 24 Parganas • Direct Transfer</p>
                  </div>
                </div>

                {/* Point 4 - Drop */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex items-center justify-center w-8 h-8 rounded-full bg-earth/10 shrink-0">
                    <MapPin className="w-4 h-4 text-earth" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">Godkhali Ghat (Drop)</p>
                    <p className="text-sm text-gray-500 mt-1">Gateway to Sundarban • Boat Safari Begins</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {[
                { icon: Clock, label: "Journey Time", value: "1.5 to 3.5 Hours" },
                { icon: Route, label: "Distance to Godkhali", value: "30km to 90km" },
                { icon: Phone, label: "For Booking", value: "+91 62908 86807" },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-gray-50 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-mangrove/5 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-mangrove" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">{info.label}</p>
                    <p className="text-sm font-bold text-gray-900">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
