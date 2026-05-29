import type { Metadata } from "next";
import Image from "next/image";
import { TreePine, Heart, Globe, Users, Award, Leaf } from "lucide-react";
import WildlifeDivider from "@/components/WildlifeDivider";
import MissionVision from "@/components/MissionVision";
import PickupDrop from "@/components/PickupDrop";
import TestimonialSlider from "@/components/TestimonialSlider";
import ISOCertified from "@/components/ISOCertified";

export const metadata: Metadata = {
  title: "About Us – Our Story & Mission",
  description: "Learn about Sundarban Greenland Tourism – our journey, mission, and commitment to eco-friendly tourism in the world's largest mangrove forest.",
  keywords: ["Sundarban tour operator", "eco tourism Sundarban", "about Sundarban Greenland Tourism"],
};

const values = [
  { icon: Heart, title: "Passion for Nature", desc: "Every tour is crafted with love for the mangrove ecosystem and its incredible biodiversity." },
  { icon: Globe, title: "Eco-Friendly Tourism", desc: "We follow strict low-impact tourism practices to preserve the Sundarbans for future generations." },
  { icon: Users, title: "Local Community", desc: "We employ local guides and support village economies, ensuring tourism benefits the people of Sundarbans." },
  { icon: Award, title: "Expert Knowledge", desc: "Our naturalist guides have 10+ years of field experience and deep knowledge of the mangrove ecosystem." },
];

const stats = [
  { value: "10,000+", label: "Happy Travelers" },
  { value: "500+", label: "Tours Conducted" },
  { value: "15+", label: "Years Experience" },
  { value: "4.9★", label: "Average Rating" },
];

export default function AboutPage() {
  return (
    <article>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src="/images/hero-1.png"
          alt="About Sundarban Greenland Tourism"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-medium mb-6">
            <TreePine className="w-3.5 h-3.5" /> Our Story
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-display)] mb-4">
            About Sundarban Greenland Tourism
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Born from a deep love for the mangroves, we are dedicated to sharing the magic of the Sundarbans with the world – responsibly and sustainably.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 h-16 bg-gradient-to-t from-mist to-transparent" />
      </section>
      <section className="py-20 bg-mist">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-6">Our Journey</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sundarban Greenland Tourism, under the proprietorship of Manika Mandal, was founded with a deep passion for the mangroves and a vision to bring responsible tourism to the Sundarbans. What started as small boat tours for birdwatchers has grown into one of the most trusted tour operators in the region.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our team consists of experienced naturalist guides who were born and raised in the Sundarban delta. They know every creek, every watchtower, and every secret spot where wildlife gathers. This intimate knowledge, combined with a deep respect for the ecosystem, makes every tour with us a truly authentic experience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that tourism should benefit both travelers and local communities. That&apos;s why we employ local guides, source food from nearby villages, and contribute a portion of every booking to mangrove conservation efforts. When you travel with us, you&apos;re not just going on a tour – you&apos;re supporting the preservation of a UNESCO World Heritage Site.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/pkg-day-trip.png"
                alt="Our team on a boat safari"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mangrove-dark/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <MissionVision />

      <WildlifeDivider variant="tiger-stripe" className="bg-mist py-4" />

      {/* Stats */}
      <section className="py-16 bg-mist">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-mangrove font-[family-name:var(--font-display)]">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pickup & Drop */}
      <PickupDrop />

      <WildlifeDivider variant="paws" className="bg-mist py-4" />

      {/* Our Values */}
      <section className="py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-mangrove text-sm font-semibold uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 font-[family-name:var(--font-display)]">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-50">
                <div className="w-14 h-14 rounded-2xl bg-mangrove/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-mangrove" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)]">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO Certified */}
      <ISOCertified />

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Eco Commitment Section - Light Design */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-mangrove/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text & Stats content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-5 h-5 text-mangrove animate-float" />
                <span className="text-mangrove text-sm font-semibold uppercase tracking-wider">Our Eco Commitment</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-display)]">
                Guarding the Wild, Supporting the Community
              </h2>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                We plant 5 mangrove saplings for every tour booked. To date, we&apos;ve planted over 25,000 saplings, contributing to coastal protection and carbon sequestration. Our boats use low-emission engines, and all our lodges follow waste management guidelines set by the Sundarban Biosphere Reserve.
              </p>

              {/* Achievements row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-mangrove/10 flex items-center justify-center shrink-0">
                    <span className="text-mangrove font-bold text-lg">🌱</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">25,000+ Saplings</h4>
                    <p className="text-xs text-gray-500 mt-1">Planted to combat coastal soil erosion and support local eco health.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <span className="text-gold font-bold text-lg">🛥️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Eco Boat Safaris</h4>
                    <p className="text-xs text-gray-500 mt-1">Using low-emission, noise-insulated engines to protect sensitive river wildlife.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Card component */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[350px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/images/gallery-3.png"
                  alt="Sundarban mangrove conservation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mangrove-dark/60 via-transparent to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl flex items-center gap-3 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-mangrove flex items-center justify-center shrink-0 text-white font-bold text-lg">
                    5
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-xs sm:text-sm">Saplings per booking</h5>
                    <p className="text-[10px] sm:text-xs text-gray-500">Every journey helps restore the green canopy.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </article>
  );
}
