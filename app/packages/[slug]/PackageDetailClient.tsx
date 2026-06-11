"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Users, Check, X as XIcon, MapPin, ArrowLeft, Phone, MessageCircle, Backpack, Baby, AlertTriangle, Calendar } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import WildlifeDivider from "@/components/WildlifeDivider";
import content from "@/data/content.json";

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
  thingsToCarry?: string[];
  childPolicy?: { age: string; charge: string }[];
  importantNotes?: string[];
  image: string;
  featured: boolean;
}

export default function PackageDetailClient({ pkg }: { pkg: PackageData }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const { companyInfo } = content;
  console.log("pkg", pkg);
  
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
        <div className="max-w-7xl mx-auto px-4 relative z-10">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-display)] uppercase tracking-wide">Detailed Daywise Itinerary</h2>
                <div className="space-y-8">
                  {Object.entries(
                    pkg.itinerary.reduce((acc, curr) => {
                      const match = curr.time.match(/^(Day \d+)(?:\s*[-–:]\s*(.*))?/i);
                      const dayKey = match ? match[1] : "Day 1";
                      const actualTime = match ? (match[2] || "") : curr.time;
                      
                      if (!acc[dayKey]) acc[dayKey] = { day: dayKey, items: [] };
                      acc[dayKey].items.push({ time: actualTime, activity: curr.activity });
                      return acc;
                    }, {} as Record<string, { day: string, items: {time: string, activity: string}[] }>)
                  ).map(([dayKey, group], dayIndex) => {
                    const suffixes = ["st", "nd", "rd"];
                    const suffix = dayIndex < 3 ? suffixes[dayIndex] : "th";
                    const dayTitle = pkg.slug.includes("hilsa") 
                      ? (dayIndex === 0 ? "Arrival & Hilsa Delicacies" : dayIndex === 1 ? "Jungle Safari & Festivities" : "Cultural Events & Departure")
                      : `${dayIndex + 1}${suffix} Day Sundarban`;

                    return (
                      <div key={dayKey} className="space-y-5">
                        {/* Theme Header */}
                        <div className="bg-mangrove-dark text-white p-4 flex items-center gap-3 rounded-t-xl">
                          <Calendar className="w-5 h-5 text-gold" />
                          <h3 className="font-bold text-lg font-[family-name:var(--font-display)]">
                            {dayKey} : {dayTitle}
                          </h3>
                        </div>
                        
                        <div className="space-y-5 px-1 pb-4">
                          {group.items.map((item, i) => (
                            <div key={i}>
                              <p className="text-gray-800 text-[15px] leading-loose">
                                {item.time && <span className="font-bold">{item.time} :- </span>}
                                {item.activity}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
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

              {/* Things to Carry */}
              {pkg.thingsToCarry && pkg.thingsToCarry.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-50">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)] flex items-center gap-2">
                    <Backpack className="w-5 h-5 text-mangrove" /> Things to Carry
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {pkg.thingsToCarry.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-mangrove mt-0.5 shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Child Policy */}
              {pkg.childPolicy && pkg.childPolicy.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)] flex items-center gap-2">
                    <Baby className="w-5 h-5 text-mangrove" /> Child Policy
                  </h3>
                  <div className="space-y-2">
                    {pkg.childPolicy.map((policy) => (
                      <div key={policy.age} className="flex items-center justify-between p-3 rounded-xl bg-mangrove/5">
                        <span className="text-sm text-gray-700 font-medium">{policy.age}</span>
                        <span className="text-sm font-semibold text-mangrove">{policy.charge}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Important Notes */}
              {pkg.importantNotes && pkg.importantNotes.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                  className="bg-amber-50 rounded-2xl p-6 shadow-sm border border-amber-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)] flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" /> Important Notes
                  </h3>
                  <ul className="space-y-2.5">
                    {pkg.importantNotes.map((note, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)]">Book This Tour</h3>
                <div className="text-3xl font-bold text-mangrove mb-1 font-[family-name:var(--font-display)]">{pkg.priceLabel}</div>
                <p className="text-gray-400 text-xs mb-2">All inclusive • 50% advance</p>

                <div className="bg-mangrove/5 rounded-xl p-3 mb-5 text-xs text-gray-500">
                  <p className="font-medium text-gray-700 mb-1">Payment Policy:</p>
                  <p>50% advance at booking. Remaining 50% payable before the trip.</p>
                </div>

                <button onClick={() => setBookingOpen(true)}
                  className="w-full py-3.5 bg-mangrove text-white rounded-xl font-semibold text-sm hover:bg-mangrove-dark transition-colors shadow-lg shadow-mangrove/20 mb-3">
                  Book Now
                </button>
                <a href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(`Hi! I'm interested in ${pkg.title}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full py-3.5 bg-green-500 text-white rounded-xl font-semibold text-sm hover:bg-green-600 transition-colors flex items-center justify-center gap-2 mb-3">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
                <a href={`tel:${companyInfo.phone}`}
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
