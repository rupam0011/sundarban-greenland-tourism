"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ChevronLeft, ChevronRight, Loader2, ImageOff, RefreshCw } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchGallery, type GalleryImage } from "@/lib/api";
import WildlifeDivider from "@/components/WildlifeDivider";

// Map API categories to display-friendly labels
const CATEGORY_MAP: Record<string, string> = {
  all: "All",
  wildlife: "Wildlife",
  general: "General",
  mangrove: "Mangroves",
  mangroves: "Mangroves",
};

// Masonry height classes to create visual variety
const heights = ["h-64", "h-80", "h-72", "h-96", "h-80", "h-64", "h-72", "h-80", "h-64", "h-96", "h-72", "h-80"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxId, setLightboxId] = useState<string | null>(null);

  // Fetch gallery images via TanStack Query
  const { data: images = [], isLoading, isError, refetch } = useQuery({
    queryKey: ["gallery", activeCategory === "all" ? undefined : activeCategory],
    queryFn: () => fetchGallery(activeCategory === "all" ? undefined : activeCategory),
  });

  // Extract unique categories from the fetched data for the "All" view
  const { data: allImages = [] } = useQuery({
    queryKey: ["gallery"],
    queryFn: () => fetchGallery(),
  });

  const categories = useMemo(() => {
    const cats = new Set<string>();
    allImages.forEach((img) => cats.add(img.category));
    return ["all", ...Array.from(cats)];
  }, [allImages]);

  // Lightbox navigation
  const currentIndex = useMemo(
    () => (lightboxId ? images.findIndex((img) => img._id === lightboxId) : -1),
    [lightboxId, images]
  );

  const navigateLightbox = useCallback(
    (direction: number) => {
      if (currentIndex === -1 || images.length === 0) return;
      const newIndex = (currentIndex + direction + images.length) % images.length;
      setLightboxId(images[newIndex]._id);
    },
    [currentIndex, images]
  );

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxId === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxId(null);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxId, navigateLightbox]);

  // Get display label for a category
  const getCategoryLabel = (cat: string) => CATEGORY_MAP[cat] || cat.charAt(0).toUpperCase() + cat.slice(1);

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
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-mangrove text-white shadow-lg shadow-mangrove/20"
                    : "bg-white text-gray-600 hover:bg-mangrove/5 hover:text-mangrove border border-gray-100"
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>

          <WildlifeDivider variant="paws" className="mb-10" />

          {/* Loading State */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-mangrove/5 flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-mangrove animate-spin" />
                </div>
                <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-mangrove/20 animate-ping" />
              </div>
              <p className="text-gray-500 mt-6 text-sm font-medium">Loading gallery...</p>
            </div>
          )}

          {/* Error State */}
          {isError && (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                <ImageOff className="w-10 h-10 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)]">
                Failed to load gallery
              </h3>
              <p className="text-gray-500 text-sm mb-6 max-w-md text-center">
                We couldn&apos;t fetch the images. Please check your connection and try again.
              </p>
              <button
                onClick={() => refetch()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-mangrove text-white text-sm font-medium hover:bg-mangrove-light transition-colors shadow-lg shadow-mangrove/20"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !isError && images.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="w-20 h-20 rounded-2xl bg-mangrove/5 flex items-center justify-center mb-6">
                <Camera className="w-10 h-10 text-mangrove/40" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)]">
                No images found
              </h3>
              <p className="text-gray-500 text-sm">
                No photos available in this category yet. Check back soon!
              </p>
            </div>
          )}

          {/* Masonry Grid */}
          {!isLoading && !isError && images.length > 0 && (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              <AnimatePresence>
                {images.map((item, i) => (
                  <motion.div
                    key={item._id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="break-inside-avoid"
                  >
                    <button
                      onClick={() => setLightboxId(item._id)}
                      className={`w-full ${heights[i % heights.length]} rounded-2xl overflow-hidden relative group cursor-pointer block`}
                    >
                      <Image
                        src={item.url}
                        alt={item.altText || item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end p-5">
                        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <span className="text-white/70 text-xs uppercase tracking-wider">
                            {getCategoryLabel(item.category)}
                          </span>
                          <h3 className="text-white font-bold text-lg font-[family-name:var(--font-display)]">
                            {item.title}
                          </h3>
                          <p className="text-white/60 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxId !== null && (() => {
          const item = images.find((img) => img._id === lightboxId);
          if (!item) return null;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setLightboxId(null)}
            >
              {/* Close button */}
              <button
                onClick={() => setLightboxId(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white z-50 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image counter */}
              <div className="absolute top-6 left-6 z-50 text-white/50 text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </div>

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

              {/* Lightbox image */}
              <motion.div
                key={item._id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-5xl h-[75vh] rounded-2xl relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={item.url}
                  alt={item.altText || item.title}
                  fill
                  className="object-contain bg-black"
                  sizes="90vw"
                  priority
                />
                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs uppercase tracking-wider mb-2">
                    {getCategoryLabel(item.category)}
                  </span>
                  <h3 className="text-white font-bold text-2xl font-[family-name:var(--font-display)]">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm mt-1">{item.description}</p>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </article>
  );
}
