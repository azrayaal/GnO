import { assets } from '@/lib/assets'
import type { GalleryItem } from '@/types'

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Karaoke Family Experience',
    category: 'Lifestyle',
    image: assets.heroFamily,
    uploadedAt: '2026-05-10',
    size: '2.4 MB',
  },
  {
    id: '2',
    title: 'Gaming Setup Showcase',
    category: 'Lifestyle',
    image: assets.lifestyleGaming,
    uploadedAt: '2026-05-08',
    size: '1.8 MB',
  },
  {
    id: '3',
    title: 'CST Portable Pro — Studio',
    category: 'Product',
    image: assets.product1,
    uploadedAt: '2026-05-01',
    size: '890 KB',
  },
  {
    id: '4',
    title: '2.1 Surround System',
    category: 'Product',
    image: assets.product2,
    uploadedAt: '2026-04-28',
    size: '920 KB',
  },
  {
    id: '5',
    title: 'RGB Gaming Series',
    category: 'Product',
    image: assets.product3,
    uploadedAt: '2026-04-22',
    size: '1.1 MB',
  },
  {
    id: '6',
    title: 'Enterprise Booth Display',
    category: 'Events',
    image: assets.heroDesign,
    uploadedAt: '2026-04-15',
    size: '3.2 MB',
  },
  {
    id: '7',
    title: 'Government Demo Session',
    category: 'Events',
    image: assets.lifestyleGaming,
    uploadedAt: '2026-04-02',
    size: '1.6 MB',
  },
  {
    id: '8',
    title: 'Brand Logo Assets',
    category: 'Branding',
    image: assets.logo,
    uploadedAt: '2026-03-20',
    size: '120 KB',
  },
]

export const galleryCategories = ['All', 'Product', 'Lifestyle', 'Events', 'Branding']
