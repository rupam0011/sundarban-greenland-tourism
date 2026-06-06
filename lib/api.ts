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

export default api;
