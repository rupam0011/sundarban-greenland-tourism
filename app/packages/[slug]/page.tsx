import { notFound } from "next/navigation";
import type { Metadata } from "next";
import content from "@/data/content.json";
import PackageDetailClient from "./PackageDetailClient";
import { fetchPackage, fetchPackages } from "@/lib/api";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  try {
    const packages = await fetchPackages();
    return packages.map((pkg) => ({ slug: pkg.slug }));
  } catch (error) {
    // Fallback if API fails
    return content.packages.map((pkg) => ({ slug: pkg.slug }));
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const apiPkg = await fetchPackage(slug);
  const staticPkg = content.packages.find((p) => p.slug === slug);
  
  const title = apiPkg?.metaTitle || apiPkg?.title || staticPkg?.title;
  const description = apiPkg?.metaDescription || apiPkg?.description || staticPkg?.description;
  const duration = apiPkg?.duration || staticPkg?.duration;

  if (!title) return { title: "Package Not Found" };

  return {
    title: `${title} – ${duration} Sundarban Tour`,
    description: description,
    keywords: [`Sundarban ${duration} package`, title, "Sundarban tour booking", "Sundarban jungle safari"],
    openGraph: {
      title: `${title} | Sundarban Greenland Tourism`,
      description: description,
    },
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Fetch dynamic data from API
  const apiPkg = await fetchPackage(slug);
  
  // Fetch static fallbacks from content.json
  const staticPkg = content.packages.find((p) => p.slug === slug);
  
  // If neither exists, return 404
  if (!apiPkg && !staticPkg) {
    notFound();
  }

  // Merge dynamic and static data
  // Prefer API data for core details, fall back to static data for inclusions, exclusions, etc.
  const mergedPkg = {
    id: apiPkg?._id || staticPkg?.id || slug,
    slug: slug,
    title: apiPkg?.title || staticPkg?.title || "",
    duration: apiPkg?.duration || staticPkg?.duration || "",
    price: apiPkg?.price || staticPkg?.price || 0,
    priceLabel: apiPkg?.priceLabel || staticPkg?.priceLabel || "",
    groupSize: apiPkg?.groupSize || staticPkg?.groupSize || "",
    highlights: apiPkg?.highlights?.length ? apiPkg.highlights : (staticPkg?.highlights || []),
    description: apiPkg?.description || staticPkg?.description || "",
    itinerary: apiPkg?.itinerary?.length ? apiPkg.itinerary : (staticPkg?.itinerary || []),
    image: apiPkg?.imageUrl || staticPkg?.image || "/images/hero-1.png",
    featured: apiPkg?.featured ?? (staticPkg?.featured || false),
    
    // Static-only details from content.json
    inclusions: staticPkg?.inclusions || [],
    exclusions: staticPkg?.exclusions || [],
    thingsToCarry: staticPkg?.thingsToCarry || [],
    childPolicy: staticPkg?.childPolicy || [],
    importantNotes: staticPkg?.importantNotes || [],
  };

  return <PackageDetailClient pkg={mergedPkg as any} />;
}
