import type { Metadata } from "next";
import Image from "next/image";
import PackageCard from "@/components/PackageCard";
import WildlifeDivider from "@/components/WildlifeDivider";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "Sundarban Tour Packages – Day Trips to Multi-Day Safaris",
  description: "Explore our range of Sundarban tour packages. From 1-day boat safaris to 4-day wildlife photography expeditions. All-inclusive with jungle permits, meals, and expert guides.",
  keywords: ["Sundarban tour packages", "Sundarban trip price", "Sundarban safari booking", "Sundarban 1 day trip", "Sundarban 2 night 3 days package"],
};

export default function PackagesPage() {
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
            Choose from our carefully crafted itineraries – each one designed to show you the best of the Sundarbans.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 h-16 bg-gradient-to-t from-mist to-transparent" />
      </section>

      {/* Package Grid */}
      <section className="py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WildlifeDivider variant="paws" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.packages.map((pkg, i) => (
              <PackageCard
                key={pkg.id}
                slug={pkg.slug}
                title={pkg.title}
                duration={pkg.duration}
                priceLabel={pkg.priceLabel}
                groupSize={pkg.groupSize}
                highlights={pkg.highlights}
                description={pkg.description}
                image={pkg.image}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
