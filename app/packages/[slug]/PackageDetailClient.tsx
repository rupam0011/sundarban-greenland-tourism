"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Users, Check, X as XIcon, MapPin, ArrowLeft, Phone, MessageCircle } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import WildlifeDivider from "@/components/WildlifeDivider";

interface PackageData {
  id: string;
  slug: string;
  title: string;
  duration: string;
  price: number;
  priceLabel: string;
  groupSize: string;
  highlights: string[];
  description: string;
  itinerary: { time: string; activity: string }[];
  inclusions: string[];
  exclusions: string[];
  image: string;
  featured: boolean;
}

export default function PackageDetailClient({ pkg }: { pkg: PackageData }) {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <article>
      {/* Hero with real image */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <Link href="/packages" className="inline-flex items-center gap-2 text-white/70 text-sm hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Packages
          </Link>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                  <Clock className="w-3 h-3 inline mr-1" />{pkg.duration}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                  <Users className="w-3 h-3 inline mr-1" />{pkg.groupSize}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-display)] mb-3">
                {pkg.title}
              </h1>
              <p className="text-white/70 text-lg max-w-xl">{pkg.description}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center min-w-[200px]">
              <div className="text-3xl font-bold text-gold font-[family-name:var(--font-display)]">{pkg.priceLabel}</div>
              <p className="text-white/50 text-xs mt-1">All inclusive</p>
              <button onClick={() => setBookingOpen(true)}
                className="mt-4 w-full px-6 py-3 bg-gold text-mangrove-dark rounded-full font-semibold text-sm hover:bg-gold-light transition-all shadow-lg">
                Book This Tour
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 h-16 bg-gradient-to-t from-mist to-transparent" />
      </section>

      <section className="py-16 bg-mist">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <WildlifeDivider variant="paws" className="mb-10" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Highlights */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-50">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)]">Highlights</h2>
                <div className="flex flex-wrap gap-2">
                  {pkg.highlights.map((h) => (
                    <span key={h} className="px-4 py-2 rounded-full bg-mangrove/5 text-mangrove text-sm font-medium flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />{h}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Itinerary */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-50">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-display)]">Full Itinerary</h2>
                <div className="relative space-y-0">
                  {/* Timeline line */}
                  <div className="absolute left-[18px] top-3 bottom-3 w-0.5 bg-mangrove/10" />
                  {pkg.itinerary.map((item, i) => (
                    <div key={i} className="relative flex gap-5 py-3">
                      <div className="w-9 h-9 rounded-full bg-mangrove/10 flex items-center justify-center shrink-0 z-10 border-2 border-white">
                        <div className="w-2.5 h-2.5 rounded-full bg-mangrove" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-mangrove uppercase tracking-wider">{item.time}</span>
                        <p className="text-gray-700 text-sm mt-0.5">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Inclusions / Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)]">Inclusions</h3>
                  <ul className="space-y-2.5">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)]">Exclusions</h3>
                  <ul className="space-y-2.5">
                    {pkg.exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <XIcon className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)]">Book This Tour</h3>
                <div className="text-3xl font-bold text-mangrove mb-1 font-[family-name:var(--font-display)]">{pkg.priceLabel}</div>
                <p className="text-gray-400 text-xs mb-6">Per person, all inclusive</p>

                <button onClick={() => setBookingOpen(true)}
                  className="w-full py-3.5 bg-mangrove text-white rounded-xl font-semibold text-sm hover:bg-mangrove-dark transition-colors shadow-lg shadow-mangrove/20 mb-3">
                  Book Now
                </button>
                <a href={`https://wa.me/916290886807?text=${encodeURIComponent(`Hi! I'm interested in ${pkg.title}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full py-3.5 bg-green-500 text-white rounded-xl font-semibold text-sm hover:bg-green-600 transition-colors flex items-center justify-center gap-2 mb-3">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
                <a href="tel:+916290886807"
                  className="w-full py-3.5 bg-white text-mangrove rounded-xl font-semibold text-sm border-2 border-mangrove/20 hover:border-mangrove/40 transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        packageTitle={pkg.title}
        price={pkg.price}
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </article>
  );
}
