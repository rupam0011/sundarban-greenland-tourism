import Image from "next/image";
import Hero from "@/components/Hero";
import EnquiryBar from "@/components/EnquiryBar";
import AboutSundarbanTour from "@/components/AboutSundarbanTour";
import PackageCard from "@/components/PackageCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import FoodHighlightCard from "@/components/FoodHighlightCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import PickupDrop from "@/components/PickupDrop";
import TourInsurance from "@/components/TourInsurance";
import MangroveHoney from "@/components/MangroveHoney";
import MiniGallery from "@/components/MiniGallery";
import WildlifeDivider from "@/components/WildlifeDivider";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import content from "@/data/content.json";

export default function HomePage() {
  const featured = content.packages.filter((p) => p.featured);

  return (
    <>
      <Hero />
      <EnquiryBar />

      {/* About Sundarban Tour - Spot Images */}
      <AboutSundarbanTour />

      <WildlifeDivider variant="paws" className="bg-white py-4" />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Pickup & Drop */}
      <PickupDrop />

      {/* Tour Insurance */}
      {/* <TourInsurance /> */}

      <WildlifeDivider variant="tiger-stripe" className="bg-mist py-4" />

      {/* Featured Packages */}
      <section className="py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-mangrove text-sm font-semibold uppercase tracking-wider">Our Tours</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 font-[family-name:var(--font-display)]">
              Popular Tour Packages
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Handcrafted itineraries for every kind of traveler – from quick day trips to immersive multi-day wildlife expeditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featured.map((pkg, i) => (
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

          <div className="text-center">
            <Link href="/packages"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-mangrove text-white rounded-full font-semibold text-sm hover:bg-mangrove-dark hover:scale-105 transition-all duration-300 shadow-lg shadow-mangrove/20">
              View All Packages
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <WildlifeDivider variant="tiger-stripe" className="bg-white py-4" />

      {/* Local Cuisine */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-earth text-sm font-semibold uppercase tracking-wider">Taste of Sundarbans</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 font-[family-name:var(--font-display)]">
              Local Cuisine Highlights
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Savor authentic Bengali flavors prepared with the freshest catch from the mangrove waters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.foods.map((food, i) => (
              <FoodHighlightCard
                key={food.id}
                name={food.name}
                description={food.description}
                image={food.image}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pure Mangrove Honey */}
      <MangroveHoney />

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Mini Gallery */}
      <MiniGallery />

      {/* <WildlifeDivider variant="mangrove" className="bg-mist py-4" /> */}

      {/* CTA Section with real image background */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/gallery-2.png"
          alt="Sundarban sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mangrove-dark/90 via-mangrove-dark/80 to-mangrove-dark/60" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-display)]">
            Ready for Your Sundarban Adventure?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Join thousands of happy travelers who have explored the wild Sundarbans with us. Book your tour today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/packages"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-mangrove-dark rounded-full font-semibold text-sm hover:bg-gold-light hover:scale-105 transition-all duration-300 shadow-lg shadow-gold/25">
              Browse Packages
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
