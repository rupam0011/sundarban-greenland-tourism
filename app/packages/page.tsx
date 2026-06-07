"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { Loader2, PackageOpen, RefreshCw } from "lucide-react";
import { fetchPackages, type Package } from "@/lib/api";
import PackageCard from "@/components/PackageCard";
import WildlifeDivider from "@/components/WildlifeDivider";

// Category display labels
const CATEGORY_MAP: Record<string, string> = {
  all: "All Packages",
  tour: "Tour Packages",
  honeymoon: "Honeymoon Specials",
};

export default function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Fetch packages for the active category
  const { data: packages = [], isLoading, isError, refetch } = useQuery({
    queryKey: ["packages", activeCategory === "all" ? undefined : activeCategory],
    queryFn: () => fetchPackages(activeCategory === "all" ? undefined : activeCategory),
  });

  // Fetch all packages to derive category tabs
  const { data: allPackages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: () => fetchPackages(),
  });

  const categories = useMemo(() => {
    const cats = new Set<string>();
    allPackages.forEach((pkg) => cats.add(pkg.category));
    return ["all", ...Array.from(cats)];
  }, [allPackages]);

  const getCategoryLabel = (cat: string) =>
    CATEGORY_MAP[cat] || cat.charAt(0).toUpperCase() + cat.slice(1);

  return (
    <article>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src="/images/hero-1.png"
          alt="Sundarban Tour Packages"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-display)] mb-4">
            Tour Packages
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Choose from our carefully crafted itineraries – each one designed to
            show you the best of the Sundarbans.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 h-16 bg-gradient-to-t from-mist to-transparent" />
      </section>

      {/* Package Grid */}
      <section className="py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
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

          <WildlifeDivider variant="paws" className="mb-12" />

          {/* Loading */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-mangrove/5 flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-mangrove animate-spin" />
                </div>
                <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-mangrove/20 animate-ping" />
              </div>
              <p className="text-gray-500 mt-6 text-sm font-medium">Loading packages...</p>
            </div>
          )}

          {/* Error */}
          {isError && (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                <PackageOpen className="w-10 h-10 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)]">
                Failed to load packages
              </h3>
              <p className="text-gray-500 text-sm mb-6 max-w-md text-center">
                We couldn&apos;t fetch the tour packages. Please check your connection and try again.
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

          {/* Empty */}
          {!isLoading && !isError && packages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="w-20 h-20 rounded-2xl bg-mangrove/5 flex items-center justify-center mb-6">
                <PackageOpen className="w-10 h-10 text-mangrove/40" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)]">
                No packages found
              </h3>
              <p className="text-gray-500 text-sm">
                No packages available in this category yet. Check back soon!
              </p>
            </div>
          )}

          {/* Package grid */}
          {!isLoading && !isError && packages.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg, i) => (
                <PackageCard
                  key={pkg._id}
                  slug={pkg.slug}
                  title={pkg.title}
                  duration={pkg.duration}
                  priceLabel={pkg.priceLabel}
                  groupSize={pkg.groupSize}
                  highlights={pkg.highlights}
                  description={pkg.description}
                  imageUrl={pkg.imageUrl}
                  index={i}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </article>
  );
}
