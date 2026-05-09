"use client";

import { motion } from "framer-motion";
import { Shield, Compass, FileCheck, Leaf } from "lucide-react";
import content from "@/data/content.json";

const iconMap: Record<string, React.ElementType> = {
  Shield, Compass, FileCheck, Leaf,
};

export default function WhyChooseUs() {
  const { whyChooseUs } = content;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-mangrove text-sm font-semibold uppercase tracking-wider">Why Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 font-[family-name:var(--font-display)]">
            Why Choose Sundarban Greenland Tourism
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Shield;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group text-center p-8 rounded-2xl bg-mist hover:bg-mangrove transition-all duration-500 hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-mangrove/10 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-5 transition-colors duration-500">
                  <Icon className="w-7 h-7 text-mangrove group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-500 font-[family-name:var(--font-display)]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors duration-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
