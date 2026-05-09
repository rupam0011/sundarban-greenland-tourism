"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FoodHighlightCardProps {
  name: string;
  description: string;
  image?: string;
  index?: number;
}

export default function FoodHighlightCard({ name, description, image, index = 0 }: FoodHighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl h-full min-h-[280px]">
        {/* Image background */}
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-800" />
        )}

        {/* Dark overlay for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 transition-all duration-500" />

        <div className="relative p-6 sm:p-8 text-white z-10 flex flex-col justify-end h-full min-h-[280px]">
          {/* Paw icon accent */}
          <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-gold/30 transition-all duration-300">
            <svg viewBox="0 0 32 32" className="w-5 h-5" fill="currentColor">
              <ellipse cx="16" cy="20" rx="6" ry="7" />
              <circle cx="9" cy="11" r="3" />
              <circle cx="15.5" cy="8" r="2.5" />
              <circle cx="22" cy="11" r="3" />
              <circle cx="25.5" cy="16.5" r="2" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-display)]">{name}</h3>
          <p className="text-white/80 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
