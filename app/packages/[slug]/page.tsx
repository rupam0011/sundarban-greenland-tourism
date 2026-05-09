import { notFound } from "next/navigation";
import type { Metadata } from "next";
import content from "@/data/content.json";
import PackageDetailClient from "./PackageDetailClient";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return content.packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = content.packages.find((p) => p.slug === slug);
  if (!pkg) return { title: "Package Not Found" };

  return {
    title: `${pkg.title} – ${pkg.duration} Sundarban Tour`,
    description: pkg.description,
    keywords: [`Sundarban ${pkg.duration} package`, pkg.title, "Sundarban tour booking", "Sundarban jungle safari"],
    openGraph: {
      title: `${pkg.title} | Sundarban Greenland Tourism`,
      description: pkg.description,
    },
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = content.packages.find((p) => p.slug === slug);
  if (!pkg) notFound();

  return <PackageDetailClient pkg={pkg} />;
}
