import type { Banner } from '@/types'
import { assets } from '@/lib/assets'

export const banners: Banner[] = [
  {
    id: '1',
    title: 'GnO UltraFlow Series',
    subtitle: 'Pelumas sintetis untuk mobilitas harian',
    image: assets.heroFamily,
    cta: 'Lihat produk',
    active: true,
  },
  {
    id: '2',
    title: 'Official GnO Merchandise',
    subtitle: 'Jacket, cap, dan bundle komunitas',
    image: assets.lifestyleGaming,
    cta: 'Belanja sekarang',
    active: true,
  },
  {
    id: '3',
    title: 'Fast National Shipping',
    subtitle: 'Regular, same day, dan cargo',
    image: assets.lifestyleFamily,
    cta: 'Cek ongkir',
    active: true,
  },
]
