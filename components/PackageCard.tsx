"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Users, ArrowRight, Star } from "lucide-react";

interface PackageCardProps {
  slug: string;
  title: string;
  duration: string;
  priceLabel: string;
  groupSize: string;
  highlights: string[];
  description: string;
  image?: string;
  imageUrl?: string;
  index?: number;
}

export default function PackageCard({
  slug, title, duration, priceLabel, groupSize, highlights, description, image, imageUrl, index = 0,
}: PackageCardProps) {
  const imgSrc = imageUrl || image;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/packages/${slug}`} className="group block h-full">
        <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-mangrove/20 flex flex-col">
          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            {imgSrc ? (
              <Image
                src={imgSrc}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-mangrove to-earth" />
            )}
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                {duration}
              </span>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="px-4 py-1.5 rounded-full bg-gold text-mangrove-dark text-sm font-bold shadow-lg">
                {priceLabel}
              </div>
            </div>
            {/* Hover explore button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)] group-hover:text-mangrove transition-colors">
              {title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
              {description}
            </p>

            {/* Meta info */}
            <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{duration}</span>
              <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{groupSize}</span>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {highlights.slice(0, 3).map((h) => (
                <span key={h} className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-mangrove/5 text-mangrove text-xs font-medium">
                  <Star className="w-3 h-3" />
                  {h}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-mangrove font-semibold text-sm group-hover:gap-3 transition-all duration-300">
              View Details
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
