import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://ik.imagekit.io/**"),
      new URL("https://sundarban-greenland-tourism.vercel.app/**"),
    ],
  },
};

export default nextConfig;
