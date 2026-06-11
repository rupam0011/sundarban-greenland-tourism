import axios from "axios";

const api = axios.create({
  baseURL: "https://sundarbanbackend.onrender.com/api/web",
  timeout: 15000,
});

export interface GalleryImage {
  _id: string;
  title: string;
  altText: string;
  description: string;
  category: string;
  url: string;
  thumbnailUrl: string;
  width: number;
  height: number;
  sortOrder: number;
  isActive: boolean;
  createdAt: string;
}

interface GalleryResponse {
  message: string;
  data: GalleryImage[];
}

export async function fetchGallery(category?: string): Promise<GalleryImage[]> {
  const params = category ? { category } : {};
  const { data } = await api.get<GalleryResponse>("/gallery", { params });
  return data.data;
}

export async function fetchGalleryImage(id: string): Promise<GalleryImage> {
  const { data } = await api.get<{ message: string; data: GalleryImage }>(`/gallery/${id}`);
  return data.data;
}

// ── Packages ──────────────────────────────────────────────────────────

export interface Package {
  _id: string;
  slug: string;
  category: string;
  title: string;
  shortTitle: string;
  description: string;
  duration: string;
  price: number;
  priceLabel: string;
  priceUnit: string;
  groupSize: string;
  highlights: string[];
  imageUrl: string;
  imageAlt: string;
  thumbnailUrl: string;
  featured: boolean;
}

interface PackagesResponse {
  message: string;
  data: Package[];
}

export async function fetchPackages(category?: string): Promise<Package[]> {
  const params: Record<string, string> = {};
  if (category) params.category = category;
  const { data } = await api.get<PackagesResponse>("/packages", { params });
  
  return data.data;
}

export async function fetchFeaturedPackages(): Promise<Package[]> {
  const { data } = await api.get<PackagesResponse>("/packages", {
    params: { featured: true },
  });
  return data.data;
}

export interface PackageDetail extends Package {
  itinerary: { time: string; activity: string }[];
  isAllInclusive?: boolean;
  metaTitle?: string;
  metaDescription?: string;
}

export async function fetchPackage(slug: string): Promise<PackageDetail | null> {
  try {
    const { data } = await api.get<{ message: string; data: PackageDetail }>(`/packages/${slug}`);
    return data.data;
  } catch (error) {
    console.error(`Failed to fetch package ${slug}:`, error);
    return null;
  }
}

export default api;
