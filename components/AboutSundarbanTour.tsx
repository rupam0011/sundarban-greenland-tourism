"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

const spots = [
  {
    title: "Sajnekhali Watchtower",
    location: "Sajnekhali, Sundarban Tiger Reserve",
    image: "/images/hero-1.png",
  },
  {
    title: "Sudhanyakhali Tiger Point",
    location: "Sudhanyakhali, Core Area",
    image: "/images/gallery-1.png",
  },
  {
    title: "Dobanki Canopy Walk",
    location: "Dobanki, Buffer Zone",
    image: "/images/gallery-3.png",
  },
  {
    title: "Netidhopani Temple",
    location: "Netidhopani Island",
    image: "/images/gallery-4.png",
  },
  {
    title: "Mangrove Forests",
    location: "UNESCO World Heritage Site",
    image: "/images/hero-2.png",
  },
  {
    title: "River Life & Communities",
    location: "Sundarban Delta Villages",
    image: "/images/hero-4.png",
  },
];

export default function AboutSundarbanTour() {
  return (
    <section className="py-20 bg-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-mangrove text-sm font-semibold uppercase tracking-wider">
            Explore the Wild
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 font-[family-name:var(--font-display)]">
            About Sundarban Tour
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Discover the breathtaking destinations across the Sundarbans —
            from ancient watchtowers and tiger territories to pristine mangrove
            forests and vibrant local communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spots.map((spot, i) => (
            <motion.div
              key={spot.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-500"
            >
              <Image
                src={spot.image}
                alt={spot.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Title - always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <h3 className="text-white text-lg font-bold font-[family-name:var(--font-display)] mb-1 transition-transform duration-500 group-hover:-translate-y-2">
                  {spot.title}
                </h3>

                {/* Location - revealed on hover */}
                <div className="flex items-center gap-1.5 text-white/0 group-hover:text-white/90 transition-all duration-500 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span className="text-sm">{spot.location}</span>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 ring-2 ring-gold/0 group-hover:ring-gold/40 rounded-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-4">
                  GREAT HOLIDAYS
                </h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  We have started our journey since 2005 for providing a satisfactory Sundarban tour to the tourists of every corner in the world. The love we received from our customers motivated us to expand our tour and travels business, and makes it much more comfortable and happy experience for our customers in Sundarban. The Sundarban travel is a wonderful experience with our tour guide team.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-4 italic">
                  How can I make a sundarban tour comfortable?
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                  There will be many ways to make a sundarban tour. First, you should be fixed a base point. I think KOLKATA is the right place to keep as a Basepoint for you if you belong to another city or state. You can reach at Kolkata by air, Train or Bus. You can choose our sundarban tour package for your hessle free Sundarban tour.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg text-mangrove font-[family-name:var(--font-display)] flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Way-1:
                    </h4>
                    <p className="text-gray-600 pl-3 text-justify">
                      You can reach DUM DUM airport by air. It&apos;s 168 km away from Sundarban. You can travel by bus or cab or if you will book your sundarban tour package then we can pick up you from the airport.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-mangrove font-[family-name:var(--font-display)] flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Way-2:
                    </h4>
                    <p className="text-gray-600 pl-3 text-justify">
                      By train, you can reach sealdah or howrah. Then from these stations, you can travel by bus or cab or by our packages, etc. It&apos;s near about 180 km away from sundarban.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-mangrove font-[family-name:var(--font-display)] flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Way-3:
                    </h4>
                    <p className="text-gray-600 pl-3 text-justify">
                      From Kolkata you can travel by local train to Canning then you can hire a private cab or auto to Gosaba. Canning is nearly 46 km away from Kolkata.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 uppercase font-[family-name:var(--font-display)] mb-4">
                SUNDARBAN TOUR GUIDE
              </h3>
              <h4 className="text-xl font-semibold text-mangrove font-[family-name:var(--font-display)] italic mb-8">
                Things you have to know before making a sundarban trip.
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-mangrove font-[family-name:var(--font-display)] flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Enjoy natural beauty:
                  </h4>
                  <p className="text-gray-600 pl-3 text-justify">
                    I think Sundarban is made by direct blessing of GOD. It&apos;s natural beauty is highly charming which can change your mind to free.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg text-mangrove font-[family-name:var(--font-display)] flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> How to make a plan for Sundarban tour?:
                  </h4>
                  <p className="text-gray-600 pl-3 text-justify">
                    You can book a Sundarban tour by choose a sundarban tour package or you can send us a request to make a customized Sundarban tour package.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-mangrove font-[family-name:var(--font-display)] flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Watch Tower:
                  </h4>
                  <p className="text-gray-600 pl-3 text-justify">
                    There will be three watch towers i.e Sajnekhali, Sudhanyakhali, Dobani. From these towers, you can watch birds of around 200 species such as hiron, Kingfisher, quill, eagle, Caspian tern, etc.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-mangrove font-[family-name:var(--font-display)] flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Enjoy of Local Tour:
                  </h4>
                  <p className="text-gray-600 pl-3 text-justify">
                    You can feel like never before by touching the morning wind to your body. You will feel like listening to a song from nature surrounding you. The beginning of the day will make your day so sweat.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-mangrove font-[family-name:var(--font-display)] flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Riding of Boat:
                  </h4>
                  <p className="text-gray-600 pl-3 text-justify">
                    If you will not ride a boat during your trip, it&apos;s sure the trip will not be completed. During the houseboat riding period, you can feel the song of the river. If you will lucky then you can see Royal Bengal Tiger.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-mangrove font-[family-name:var(--font-display)] flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Jungle Trip:
                  </h4>
                  <p className="text-gray-600 pl-3 text-justify">
                    By GOD&apos;s grace jungle is full of ornaments like deer, tigers, snakes, wolves, many types of birds along with BONO DEVI. You will never forget to visit the jungle during your tour.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-mangrove font-[family-name:var(--font-display)] flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Availability of ATM:
                  </h4>
                  <p className="text-gray-600 pl-3 text-justify">
                    ATMs are not available in the sundarban area. Therefore you will take sufficient money as per your need from GOSOBA or your nearest availability area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
