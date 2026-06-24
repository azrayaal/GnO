import { assets } from '@/lib/assets'
import type { Product } from '@/types'

export const products: Product[] = [
  {
    id: '1',
    slug: 'gno-ultraflow-synth-5w-30',
    name: 'GnO UltraFlow Synth 5W-30',
    category: 'Lubricants',
    label: 'Best Seller',
    image: assets.product1,
    tagline: 'Synthetic engine oil for daily & fleet usage',
    price: 389_000,
    originalPrice: 429_000,
    description:
      'GnO UltraFlow Synth 5W-30 adalah pelumas sintetis dengan formula thermal shield untuk suhu tinggi dan stop-and-go traffic. Cocok untuk kendaraan pribadi, armada logistik ringan, serta operasional harian yang menuntut performa stabil.\n\nAdditive package anti-sludge membantu menjaga kebersihan mesin lebih lama, sekaligus memberikan efisiensi bahan bakar yang lebih baik pada interval servis menengah.',
    specs: [
      'API SP performance level',
      'Thermal shield additive',
      'Anti-sludge formula',
      'Low friction technology',
      'Recommended for gasoline engines',
    ],
  },
  {
    id: '2',
    slug: 'gno-gearmax-industrial-80w-90',
    name: 'GnO GearMax Industrial 80W-90',
    category: 'Lubricants',
    label: 'Industrial',
    image: assets.product3,
    tagline: 'Heavy-duty transmission protection',
    price: 529_000,
    originalPrice: 579_000,
    description:
      'GnO GearMax Industrial 80W-90 dikembangkan untuk perlindungan gearbox, differential, dan final drive pada kendaraan niaga serta equipment operasional. Viskositas stabil pada beban berat membantu mengurangi keausan komponen saat torsi tinggi.\n\nProduk ini dirancang untuk menjaga film pelumas tetap konsisten pada lingkungan kerja panas, lembap, atau berdebu sehingga downtime lebih terkendali.',
    specs: [
      'GL-5 extreme pressure protection',
      'Shear stable at high load',
      'Corrosion and rust protection',
      'Suitable for fleet maintenance',
      'Extended drain interval ready',
    ],
  },
  {
    id: '3',
    slug: 'gno-rig-crew-jacket',
    name: 'GnO Rig Crew Jacket',
    category: 'Merchandise',
    label: 'Official Merch',
    image: assets.product2,
    tagline: 'Windproof jacket with reflective accent',
    price: 459_000,
    originalPrice: 499_000,
    description:
      'GnO Rig Crew Jacket adalah official merchandise bergaya utility untuk tim lapangan maupun komunitas otomotif. Material ringan namun tahan angin, dilengkapi aksen reflektif untuk visibilitas tambahan saat aktivitas malam hari.\n\nDesain unisex dengan potongan ergonomis membuat jaket ini nyaman dipakai untuk event, touring, atau kebutuhan kerja mobile.',
    specs: [
      'Water-repellent outer fabric',
      'Reflective front and back accents',
      'Breathable mesh inner layer',
      'Official GnO woven patch',
      'Available sizes S to XXL',
    ],
  },
  {
    id: '4',
    slug: 'gno-hydrolift-46',
    name: 'GnO HydroLift 46',
    category: 'Lubricants',
    label: 'Hydraulic Oil',
    image: assets.productHydraulic,
    tagline: 'Hydraulic fluid for workshop and light industry',
    price: 615_000,
    originalPrice: 659_000,
    description:
      'GnO HydroLift 46 merupakan hydraulic oil untuk pompa, press, dan sistem hidrolik skala bengkel atau industri ringan. Formula anti-foam membantu tekanan tetap responsif dan konsisten dalam siklus kerja panjang.\n\nCocok untuk maintenance berkala agar performa aktuator tetap optimal sekaligus melindungi seal dari oksidasi berlebihan.',
    specs: [
      'ISO VG 46 viscosity grade',
      'Anti-foam and anti-wear package',
      'Good oxidation stability',
      'Compatible with common seal materials',
      'Smooth pressure response',
    ],
  },
  {
    id: '5',
    slug: 'gno-pitstop-bundle',
    name: 'GnO PitStop Bundle',
    category: 'Bundles',
    label: 'Value Pack',
    image: assets.lifestyleFamily,
    tagline: 'Bundle pelumas + merch + service kit',
    price: 999_000,
    originalPrice: 1_159_000,
    description:
      'Paket GnO PitStop Bundle berisi pelumas mesin, funnel lipat, sticker pack, dan crew cap official. Paket ini dibuat untuk pengguna yang ingin kebutuhan maintenance dasar plus merchandise dalam satu pembelian praktis.\n\nCocok sebagai starter pack, hadiah komunitas, atau persediaan workshop kecil.',
    specs: [
      '1x UltraFlow Synth 5W-30',
      '1x reusable maintenance funnel',
      '1x GnO crew cap',
      '1x GnO sticker kit',
      'Bundled shipping protection',
    ],
  },
  {
    id: '6',
    slug: 'gno-service-cap-utility',
    name: 'GnO Service Cap Utility',
    category: 'Merchandise',
    label: 'Accessories',
    image: assets.productCap,
    tagline: 'Everyday cap for garage and outdoor use',
    price: 189_000,
    description:
      'GnO Service Cap Utility menghadirkan gaya clean industrial dengan bahan breathable untuk penggunaan harian. Dirancang untuk teknisi, rider komunitas, dan pengguna yang ingin identitas brand sederhana namun premium.\n\nBuckle strap belakang memudahkan penyesuaian ukuran tanpa mengubah bentuk crown cap.',
    specs: [
      'Adjustable rear buckle strap',
      'Breathable cotton twill',
      'Structured front panel',
      'Embroidered GnO logo',
      'Unisex daily fit',
    ],
  },
]

export const productCategories = ['All', 'Lubricants', 'Merchandise', 'Bundles']

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}
