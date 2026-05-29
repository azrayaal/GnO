import { assets } from '@/lib/assets'
import type { Product } from '@/types'

export const products: Product[] = [
  {
    id: '1',
    slug: 'cst-400n-morie-retro',
    name: 'CST 400N Morie Retro Lifestyle Speaker',
    category: 'Speakers & Home Theater',
    label: 'Lifestyle',
    image: assets.product1,
    tagline: 'Dual wireless mic · Portable PA',
    price: 2_629_000,
    originalPrice: 2_899_000,
    description:
      'CST 400N Morie Retro menghadirkan karakter retro yang stylish dengan performa audio modern. Dilengkapi dual wireless mic untuk karaoke, Bluetooth, dan desain portable yang mudah dibawa ke mana saja.\n\nIdeal untuk gathering keluarga, acara outdoor, atau ruang tamu yang membutuhkan speaker serbaguna dengan bass yang punchy dan vokal yang jernih.',
    specs: [
      'Dual wireless microphone',
      'Bluetooth 5.0 connectivity',
      'Portable PA design',
      'USB & TF card playback',
      'Built-in rechargeable battery',
    ],
  },
  {
    id: '2',
    slug: 'cst-907n-poseidon-bass',
    name: 'CST 907N+ Poseidon Bass',
    category: 'Speakers & Home Theater',
    label: 'Lifestyle',
    image: assets.product2,
    tagline: 'Subwoofer + satellite · TWS ready',
    price: 3_450_000,
    originalPrice: 3_799_000,
    description:
      'CST 907N+ Poseidon Bass dirancang untuk pengalaman audio immersive dengan sistem subwoofer dan satellite speaker. Dukungan TWS memungkinkan pairing dua unit untuk stereo wireless yang lebih luas.\n\nCocok untuk home theater, gaming setup, dan ruang hiburan yang mengutamakan bass dalam dan detail suara yang tajam.',
    specs: [
      'Subwoofer + satellite configuration',
      'True Wireless Stereo (TWS)',
      'HDMI ARC & optical input',
      'Multiple EQ presets',
      'Remote control included',
    ],
  },
  {
    id: '3',
    slug: 'cst-9000n-plus',
    name: 'CST 9000N+',
    category: 'Speakers & Home Theater',
    label: 'Lifestyle',
    image: assets.product3,
    tagline: 'Faceted design · Dynamic lighting',
    price: 1_899_000,
    originalPrice: 2_199_000,
    description:
      'CST 9000N+ menonjolkan desain faceted yang futuristik dengan dynamic lighting yang menambah atmosfer ruangan. Speaker compact ini memberikan keseimbangan antara estetika dan performa audio untuk penggunaan sehari-hari.\n\nPerfect untuk desktop setup, kamar, atau sudut ruang yang ingin tampil statement tanpa mengorbankan kualitas suara.',
    specs: [
      'Faceted premium design',
      'Dynamic RGB lighting',
      'Bluetooth & AUX input',
      'Compact footprint',
      'Clear vocal reproduction',
    ],
  },
  {
    id: '4',
    slug: 'tower-loudspeaker-cst-808n',
    name: 'Tower Loudspeaker CST 808N',
    category: 'Speakers & Home Theater',
    label: 'Lifestyle',
    image: assets.heroFamily,
    tagline: 'Dengan Mode TWS',
    price: 4_250_000,
    originalPrice: 4_599_000,
    description:
      'Tower Loudspeaker CST 808N adalah flagship tower speaker Simbadda dengan presensi ruangan yang kuat dan mode TWS untuk pengalaman stereo nirkabel. Dirancang untuk keluarga yang menikmati karaoke, film, dan musik dengan volume besar tanpa distorsi.\n\nDriver berukuran besar dan cabinet akustik yang dioptimalkan menghadirkan bass profund dan midrange hangat untuk ruang living yang lebih hidup.',
    specs: [
      'Tower loudspeaker design',
      'True Wireless Stereo (TWS) mode',
      'Dual wireless microphone support',
      'High-power amplifier',
      'Premium cabinet finish',
    ],
  },
  {
    id: '5',
    slug: 'wireless-mic-pack-4ch',
    name: 'Wireless Mic Pack (4CH)',
    category: 'Accessories',
    label: 'Accessories',
    image: assets.product1,
    tagline: 'Multi-channel karaoke',
    price: 899_000,
    description:
      'Wireless Mic Pack 4CH memungkinkan hingga empat performer karaoke bersamaan dengan koneksi stabil dan latensi rendah. Kompatibel dengan berbagai speaker Simbadda untuk acara keluarga dan gathering.\n\nSet lengkap dengan receiver dan microphone ergonomis yang nyaman digunakan dalam durasi panjang.',
    specs: [
      '4-channel wireless system',
      'Low-latency transmission',
      'Compatible with Simbadda speakers',
      'Long battery life',
      'Plug-and-play setup',
    ],
  },
  {
    id: '6',
    slug: 'soundbar-cinema-x',
    name: 'Soundbar Cinema X',
    category: 'Speakers & Home Theater',
    label: 'Home Theater',
    image: assets.product2,
    tagline: 'HDMI ARC · Dolby ready',
    price: 2_199_000,
    originalPrice: 2_499_000,
    description:
      'Soundbar Cinema X menghadirkan pengalaman home cinema dalam satu bar speaker elegan. Dukungan HDMI ARC dan profil audio Dolby-ready membuat setup TV menjadi lebih sederhana dengan suara surround virtual yang immersive.\n\nDesain slim cocok di bawah TV modern, dengan subwoofer wireless opsional untuk bass yang lebih dalam.',
    specs: [
      'HDMI ARC connectivity',
      'Dolby audio profile ready',
      'Virtual surround processing',
      'Slim wall-mountable design',
      'Wireless subwoofer ready',
    ],
  },
]

export const productCategories = [
  'All',
  'Speakers & Home Theater',
  'Computer Part',
  'Accessories',
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}
