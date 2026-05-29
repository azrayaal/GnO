export type NewsStatus = 'draft' | 'published' | 'archived'

export interface NewsArticle {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  author: string
  publishedAt: string
  image: string
  status: NewsStatus
  featured?: boolean
}

export interface GalleryItem {
  id: string
  title: string
  category: string
  image: string
  uploadedAt: string
  size: string
}

export interface Product {
  id: string
  slug: string
  name: string
  category: string
  image: string
  tagline?: string
  label?: string
  price: number
  originalPrice?: number
  description: string
  specs?: string[]
}

export interface Banner {
  id: string
  title: string
  subtitle: string
  image: string
  cta: string
  active: boolean
}
