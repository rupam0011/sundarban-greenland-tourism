"use client";

import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { fetchFeaturedPackages } from "@/lib/api";
import PackageCard from "@/components/PackageCard";

export default function FeaturedPackages() {
  const { data: packages = [], isLoading } = useQuery({
    queryKey: ["packages", { featured: true }],
    queryFn: fetchFeaturedPackages,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-16">
        <Loader2 className="w-8 h-8 text-mangrove animate-spin" />
      </div>
    );
  }

  if (packages.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {packages.slice(0, 6).map((pkg, i) => (
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
  );
}
