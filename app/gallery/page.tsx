"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import WildlifeDivider from "@/components/WildlifeDivider";

const categories = ["All", "Wildlife", "Boats & Rivers", "Mangroves", "Culture", "Food & Resort"];

const galleryItems = [
  { id: 1, category: "Wildlife", title: "Royal Bengal Tiger", desc: "Spotted near Sudhanyakhali watchtower", image: "/images/gallery-1.png" },
  { id: 2, category: "Boats & Rivers", title: "Sunset on the Delta", desc: "Golden hour over the Matla River", image: "/images/gallery-2.png" },
  { id: 3, category: "Mangroves", title: "Aerial Mangrove View", desc: "Dense mangrove canopy from Dobanki", image: "/images/gallery-3.png" },
  { id: 4, category: "Wildlife", title: "Spotted Deer Herd", desc: "Grazing at Sajnekhali island", image: "/images/gallery-4.png" },
  { id: 5, category: "Culture", title: "Boat Safari Adventure", desc: "Tourists exploring the mangrove creeks", image: "/images/pkg-day-trip.png" },
  { id: 6, category: "Food & Resort", title: "Eco Resort at Dusk", desc: "Our riverside eco-lodge", image: "/images/pkg-overnight.png" },
  { id: 7, category: "Wildlife", title: "Tiger Pugmarks", desc: "Fresh tracks on the creek bank", image: "/images/pkg-tiger-trail.png" },
  { id: 8, category: "Boats & Rivers", title: "Photography Expedition", desc: "Capturing wildlife from the boat", image: "/images/pkg-photography.png" },
  { id: 9, category: "Mangroves", title: "Morning in the Mangroves", desc: "Misty sunrise over the forest", image: "/images/hero-1.png" },
  { id: 10, category: "Food & Resort", title: "Sundarban Mud Crab", desc: "Fresh catch from the estuaries", image: "/images/food-crab.png" },
  { id: 11, category: "Food & Resort", title: "Bengali Hilsa Bhapa", desc: "King of fish, steamed in banana leaf", image: "/images/food-hilsa.png" },
  { id: 12, category: "Culture", title: "Hilsa Festival Cooking", desc: "Traditional Sundarban cuisine", image: "/images/pkg-hilsa.png" },
];

const heights = ["h-64", "h-80", "h-64", "h-72", "h-80", "h-64", "h-72", "h-64", "h-80", "h-64", "h-72", "h-80"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  const currentLightboxIndex = lightbox !== null ? filtered.findIndex((g) => g.id === lightbox) : -1;

  const navigateLightbox = (direction: number) => {
    if (currentLightboxIndex === -1) return;
    const newIndex = (currentLightboxIndex + direction + filtered.length) % filtered.length;
    setLightbox(filtered[newIndex].id);
  };

  return (
    <article>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src="/images/hero-4.png"
          alt="Sundarban Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-medium mb-6">
            <Camera className="w-3.5 h-3.5" /> Visual Stories
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-display)] mb-4">
            Gallery
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A visual journey through the breathtaking landscapes, wildlife, and culture of the Sundarbans.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 h-16 bg-gradient-to-t from-mist to-transparent" />
      </section>

      {/* Gallery */}
      <section className="py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-mangrove text-white shadow-lg shadow-mangrove/20"
                    : "bg-white text-gray-600 hover:bg-mangrove/5 hover:text-mangrove border border-gray-100"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          <WildlifeDivider variant="paws" className="mb-10" />

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid"
                >
                  <button onClick={() => setLightbox(item.id)}
                    className={`w-full ${heights[i % heights.length]} rounded-2xl overflow-hidden relative group cursor-pointer block`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end p-5">
                      <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-white/70 text-xs uppercase tracking-wider">{item.category}</span>
                        <h3 className="text-white font-bold text-lg font-[family-name:var(--font-display)]">{item.title}</h3>
                        <p className="text-white/60 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (() => {
          const item = galleryItems.find((g) => g.id === lightbox);
          if (!item) return null;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white/70 hover:text-white z-50">
                <X className="w-8 h-8" />
              </button>

              {/* Navigation arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="w-full max-w-4xl h-[70vh] rounded-2xl relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="80vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
                  <span className="text-white/70 text-xs uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-white font-bold text-2xl font-[family-name:var(--font-display)]">{item.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </article>
  );
}
