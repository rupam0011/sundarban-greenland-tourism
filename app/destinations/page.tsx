import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import content from "@/data/content.json";
import WildlifeDivider from "@/components/WildlifeDivider";

export const metadata: Metadata = {
  title: "Sundarban Destinations – Tigers, Mangroves & Watchtowers",
  description: "Explore the iconic destinations of the Sundarbans – from Royal Bengal Tiger habitats to ancient mangrove forests and panoramic watchtowers.",
  keywords: ["Sundarban destinations", "Royal Bengal Tiger Sundarban", "Sundarban mangrove forest", "Sundarban watchtowers", "Sajnekhali", "Sudhanyakhali"],
};

export default function DestinationsPage() {
  return (
    <article>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src="/images/hero-2.png"
          alt="Sundarban Destinations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-medium mb-6">
            <BookOpen className="w-3.5 h-3.5" /> Explore & Learn
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-display)] mb-4">
            Sundarban Destinations
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Dive deep into the wonders of the Sundarbans – the wildlife, the forests, and the stories that make this delta a UNESCO World Heritage Site.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 h-16 bg-gradient-to-t from-mist to-transparent" />
      </section>

      {/* Destinations */}
      <section className="py-20 bg-mist">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <WildlifeDivider variant="paws" className="mb-12" />

          <div className="space-y-10">
            {content.destinations.map((dest, i) => (
              <div key={dest.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-gray-50">
                {/* Image Banner */}
                <div className="relative h-56 sm:h-72 overflow-hidden">
                  {dest.image ? (
                    <Image
                      src={dest.image}
                      alt={dest.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-r from-mangrove to-earth" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                      Article {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)]">
                    {dest.title}
                  </h2>
                  <p className="text-gray-500 text-lg mb-4 italic">{dest.excerpt}</p>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{dest.content}</p>

                  <div className="mt-8">
                    <Link href="/packages"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-mangrove text-white rounded-full font-semibold text-sm hover:bg-mangrove-dark transition-all hover:scale-105">
                      Explore Related Packages <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Wildlife divider between articles */}
                {i < content.destinations.length - 1 && (
                  <div className="px-10 pb-2">
                    <WildlifeDivider variant={i % 2 === 0 ? "tiger-stripe" : "mangrove"} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
