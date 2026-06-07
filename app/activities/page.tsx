import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Ship,
  Bird,
  Footprints,
  Music,
  Drama,
  Flame,
  Map,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Activities in Sundarban – Adventure & Experiences",
  description:
    "Enjoy exhilarating adventure activities in Sundarban. Experience Boat Safari, Bird Watching, Local Folk Dance, and more with Sundarban Greenland Tourism.",
  keywords: [
    "Sundarban activities",
    "boat safari",
    "bird watching",
    "Sundarban adventure",
    "folk dance",
  ],
};

const activities = [
  {
    id: "boat-safari",
    title: "Boat Safari",
    description:
      "Boat safari in Sundarban is a truly immersive experience. Those who visit the Sundarbans take up this boat safari at least once — and for good reason. Glide through the narrow creeks, witness the pristine mangrove forests from the water, and keep your camera ready for sightings of the Royal Bengal Tiger, crocodiles, and river dolphins. The boat safari lets you explore Sundarban with your own eyes and creates memories that last a lifetime.",
    icon: Ship,
    accent: "border-river",
    tagColor: "bg-river/10 text-river",
  },
  {
    id: "bird-watching",
    title: "Bird Watching",
    description:
      "The Sundarbans is a paradise for bird enthusiasts with over 260 species of birds, including the White-Bellied Sea Eagle, Kingfisher, and the rare Masked Finfoot. Our expert naturalist guides will take you to the best birding spots at dawn, when the forest comes alive with calls and colors. Whether you are a seasoned birder or a first-timer, the experience of watching these magnificent creatures in their natural habitat is simply unforgettable.",
    icon: Bird,
    accent: "border-mangrove",
    tagColor: "bg-mangrove/10 text-mangrove",
  },
  {
    id: "nature-walk",
    title: "Nature Walk",
    description:
      "Step off the boat and onto the forest floor for a guided nature walk through the Sundarbans. Feel the earthy crunch beneath your feet as you walk under the dense canopy of Sundri and Gewa trees. Our guides share fascinating insights about the flora, fauna, and ecology of the mangrove ecosystem. It is a meditative, grounding experience — a rare chance to disconnect from the noise of the city and reconnect with the rhythms of the wild.",
    icon: Footprints,
    accent: "border-earth",
    tagColor: "bg-earth/10 text-earth",
  },
  {
    id: "folk-dance",
    title: "Local Folk Dance",
    description:
      "The Sundarbans is not just about wildlife — it is also home to a rich cultural tapestry. In the evenings, local artists perform traditional folk dances that depict the legends and daily life of the mangrove communities. The rhythmic beats, vibrant costumes, and soulful expressions bring the culture of the delta alive. It is a beautiful way to connect with the soul of Sundarban beyond its forests and rivers.",
    icon: Music,
    accent: "border-sunset",
    tagColor: "bg-sunset/10 text-sunset",
  },
  {
    id: "drama-show",
    title: "Banabibi Drama Show",
    description:
      "Banabibi is the revered goddess of the forest, the protector of all who enter the mangroves. Before every journey into the deep jungle, the locals offer prayers to her for safety. The Banabibi drama is a captivating theatrical performance that narrates her legendary story — the triumph of good over evil. It is deeply rooted in the faith and tradition of the Sundarban people, and watching it live is a powerful cultural experience.",
    icon: Drama,
    accent: "border-gold",
    tagColor: "bg-gold/10 text-gold",
  },
  {
    id: "camp-fire",
    title: "Camp Fire",
    description:
      "As darkness falls over the Sundarbans and the forest hums with nocturnal sounds, gather around a crackling campfire with your fellow travelers. Share stories, sing songs, and savor the warmth under a star-studded sky. The campfire experience at Sundarban is one of the most cherished moments of any tour — a time of bonding, laughter, and the simple joy of being together in nature.",
    icon: Flame,
    accent: "border-sunset-light",
    tagColor: "bg-red-500/10 text-red-600",
  },
];

export default function ActivitiesPage() {
  return (
    <article>
      {/* ── Hero Banner ── */}
      <section className="relative pt-32 pb-24 md:pb-32 overflow-hidden">
        <Image
          src="/images/hero-1.png"
          alt="Adventure Activities in Sundarban"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-mangrove-dark/80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6">
              <Map className="w-4 h-4" /> Discover &amp; Experience
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-display)] mb-6 leading-tight">
              Our Activities
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              From thrilling boat safaris through serpentine creeks to mesmerizing
              folk performances under the stars — the Sundarbans offers
              experiences that stay with you long after you leave.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-mist to-transparent" />
      </section>

      {/* ── Activities — alternating layout ── */}
      <section className="py-16 md:py-24 bg-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="text-center mb-16 md:mb-20">
            <span className="text-mangrove text-sm font-semibold uppercase tracking-wider">
              What Awaits You
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 font-[family-name:var(--font-display)]">
              Experiences Crafted by Nature
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              Every activity is thoughtfully curated to bring you closer to the
              raw beauty, culture, and spirit of the Sundarbans.
            </p>
          </div>

          {/* Activities list */}
          <div className="space-y-20 md:space-y-28">
            {activities.map((activity, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={activity.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                >
                  {/* Image side */}
                  <div
                    className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div
                      className={`relative h-[300px] sm:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl border-l-4 ${activity.accent}`}
                    >
                      <Image
                        src={`/images/activities/${activity.id}.png`}
                        alt={activity.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    {/* Floating number badge */}
                    <div className="absolute -top-4 -right-4 lg:-top-5 lg:-right-5 w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-gray-100">
                      <span className="text-mangrove font-bold text-xl font-[family-name:var(--font-display)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Text side */}
                  <div
                    className={`${isEven ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${activity.tagColor}`}
                    >
                      <activity.icon className="w-3.5 h-3.5" />
                      {activity.title}
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-5">
                      {activity.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                      {activity.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-mangrove font-semibold text-sm">
                      <Link
                        href="/packages"
                        className="inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
                      >
                        Explore packages with this activity{" "}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Call-to-action strip ── */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/hero-1.png"
          alt="Book Sundarban Tour"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-mangrove-dark/85" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-display)] mb-4">
            Ready for an Unforgettable Sundarban Adventure?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Pick a package that suits you and experience the magic of the
            world&apos;s largest mangrove forest first-hand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/packages"
              className="px-8 py-3.5 rounded-full bg-white text-mangrove font-semibold hover:bg-white/90 transition-colors shadow-lg"
            >
              View Tour Packages
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
