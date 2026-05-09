import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – Book Your Sundarban Tour Today",
  description: "Get in touch with Sundarban Greenland Tourism. Call, WhatsApp, or email us to plan your perfect Sundarban trip. Read our FAQ for common travel questions.",
  keywords: ["contact Sundarban tour operator", "book Sundarban trip", "Sundarban travel enquiry", "Sundarban FAQ"],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
