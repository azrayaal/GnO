import type { Banner } from '@/types'
import { assets } from '@/lib/assets'

export const banners: Banner[] = [
  {
    id: '1',
    title: 'Loudspeaker CST 808N',
    subtitle: 'Dengan Mode TWS',
    image: assets.heroFamily,
    cta: 'See more',
    active: true,
  },
  {
    id: '2',
    title: 'Enterprise Audio Solutions',
    subtitle: 'Untuk instansi & pemerintah',
    image: assets.lifestyleGaming,
    cta: 'Hubungi kami',
    active: true,
  },
  {
    id: '3',
    title: 'RGB Gaming Series',
    subtitle: 'Immersive sound & light',
    image: assets.product3,
    cta: 'Explore',
    active: false,
  },
]
