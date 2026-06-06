"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Into the Wild Sundarbans",
    subtitle: "The World's Largest Mangrove Forest",
    cta: "Explore Packages",
    href: "/packages",
    image: "/images/hero-1.png",
  },
  {
    title: "Track the Royal Bengal Tiger",
    subtitle: "Expert-guided safaris through tiger territory",
    cta: "Tiger Trail Package",
    href: "/packages/2-nights-3-days-standard-sundarban-tour",
    image: "/images/hero-2.png",
  },
  {
    title: "Taste of the Delta",
    subtitle: "Hilsa Festival – A culinary journey like no other",
    cta: "Festival Special",
    href: "/packages/sundarban-hilsa-festival",
    image: "/images/hero-3.png",
  },
  {
    title: "Capture the Untamed",
    subtitle: "Photography expeditions with professional guides",
    cta: "Photography Tour",
    href: "/packages",
    image: "/images/hero-4.png",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 1 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 1 }),
  };

  return (
    <section id="hero" className="relative h-[100vh] min-h-[600px] overflow-hidden bg-black">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            loading="eager"
            priority={current === 0}
            sizes="100vw"
          />
          {/* Ken Burns zoom effect */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 6, ease: "linear" }}
            className="absolute inset-0"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-medium mb-6"
              >
                <MapPin className="w-3.5 h-3.5" />
                Sundarbans, West Bengal, India
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 font-[family-name:var(--font-display)] leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-lg">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={slide.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-mangrove-dark rounded-full font-semibold text-sm hover:bg-gold-light hover:scale-105 transition-all duration-300 shadow-lg shadow-gold/25"
                >
                  {slide.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        <button onClick={prev} aria-label="Previous slide"
          className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-gold" : "w-2 bg-white/40 hover:bg-white/60"}`}
            />
          ))}
        </div>
        <button onClick={next} aria-label="Next slide"
          className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>


    </section>
  );
}
