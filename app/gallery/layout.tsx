import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery – Wildlife, Boats & Mangrove Photography",
  description: "Browse stunning photos from our Sundarban tours – Royal Bengal Tigers, mangrove forests, river dolphins, traditional boats, and eco-resort experiences.",
  keywords: ["Sundarban gallery", "Sundarban photos", "wildlife photography Sundarban", "mangrove forest images"],
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
