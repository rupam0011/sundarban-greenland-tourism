"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

const spots = [
  {
    title: "Sajnekhali Watchtower",
    location: "Sajnekhali, Sundarban Tiger Reserve",
    image: "/images/hero-1.png",
  },
  {
    title: "Sudhanyakhali Tiger Point",
    location: "Sudhanyakhali, Core Area",
    image: "/images/gallery-1.png",
  },
  {
    title: "Dobanki Canopy Walk",
    location: "Dobanki, Buffer Zone",
    image: "/images/gallery-3.png",
  },
  {
    title: "Netidhopani Temple",
    location: "Netidhopani Island",
    image: "/images/gallery-4.png",
  },
  {
    title: "Mangrove Forests",
    location: "UNESCO World Heritage Site",
    image: "/images/hero-2.png",
  },
  {
    title: "River Life & Communities",
    location: "Sundarban Delta Villages",
    image: "/images/hero-4.png",
  },
];

export default function AboutSundarbanTour() {
  return (
    <section className="py-20 bg-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-mangrove text-sm font-semibold uppercase tracking-wider">
            Explore the Wild
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 font-[family-name:var(--font-display)]">
            About Sundarban Tour
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Discover the breathtaking destinations across the Sundarbans —
            from ancient watchtowers and tiger territories to pristine mangrove
            forests and vibrant local communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spots.map((spot, i) => (
            <motion.div
              key={spot.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-500"
            >
              <Image
                src={spot.image}
                alt={spot.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Title - always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <h3 className="text-white text-lg font-bold font-[family-name:var(--font-display)] mb-1 transition-transform duration-500 group-hover:-translate-y-2">
                  {spot.title}
                </h3>

                {/* Location - revealed on hover */}
                <div className="flex items-center gap-1.5 text-white/0 group-hover:text-white/90 transition-all duration-500 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span className="text-sm">{spot.location}</span>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 ring-2 ring-gold/0 group-hover:ring-gold/40 rounded-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
