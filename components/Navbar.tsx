"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, TreePine, Phone } from "lucide-react";
import { cn } from "@/lib/cn";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/packages", label: "Packages" },
  { href: "/destinations", label: "Destinations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/activities", label: "Activities" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-mangrove/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className={cn(
              "transition-all duration-300 group-hover:scale-105 rounded-xl p-2 flex items-center justify-center",
              !scrolled && "bg-white/95 backdrop-blur-sm shadow-lg shadow-black/5"
            )}>
              <Image
                src="/images/logo.png"
                alt="Sundarban Greenland Tourism"
                width={160}
                height={60}
                className="h-10 md:h-15 w-auto object-contain mix-blend-multiply"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",
                  scrolled
                    ? "text-gray-700 hover:text-mangrove hover:bg-mangrove/5"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn(
                "ml-3 px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg",
                scrolled
                  ? "bg-mangrove text-white hover:bg-mangrove-dark"
                  : "bg-white text-mangrove hover:bg-white/90"
              )}
            >
              <Phone className="w-4 h-4" />
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-mangrove" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg text-gray-700 hover:text-mangrove hover:bg-mangrove/5 font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-4 py-3 rounded-full bg-mangrove text-white text-center font-semibold hover:bg-mangrove-dark transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
