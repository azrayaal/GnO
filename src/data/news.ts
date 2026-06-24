import { assets } from '@/lib/assets'
import type { NewsArticle } from '@/types'

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'GnO Rilis Lini Pelumas UltraFlow untuk Mobilitas Harian',
    slug: 'gno-rilis-ultraflow-2026',
    excerpt:
      'Lini baru GnO hadir untuk pengguna harian dan fleet dengan fokus stabilitas suhu tinggi serta efisiensi mesin.',
    content: `Jakarta - GnO secara resmi memperkenalkan lini pelumas UltraFlow dengan varian viskositas untuk kebutuhan kendaraan harian hingga operasional bisnis ringan.

Formula terbaru mengutamakan ketahanan temperatur dan kebersihan mesin agar performa tetap konsisten pada kondisi lalu lintas padat.

Peluncuran dilakukan bersama mitra bengkel dan komunitas otomotif di wilayah Jabodetabek.`,
    category: 'Product Launch',
    author: 'Tim Produk GnO',
    publishedAt: '2026-05-15',
    image: assets.heroFamily,
    status: 'published',
    featured: true,
  },
  {
    id: '2',
    title: 'GnO Perluas Rute Fulfillment untuk Pengiriman Nasional',
    slug: 'gno-perluas-fulfillment-nasional',
    excerpt:
      'Perluasan rute kirim mempercepat distribusi pelumas dan merchandise ke lebih banyak kota besar.',
    content: `GnO menambah titik fulfillment baru di Jawa Timur dan Kalimantan untuk mempercepat SLA pengiriman produk.

Penambahan ini mendukung pelanggan retail, UMKM bengkel, serta pembelian B2B yang memerlukan pengiriman rutin.

Pelanggan kini dapat memilih opsi regular, same day area tertentu, dan cargo untuk kebutuhan volume besar.`,
    category: 'Operations',
    author: 'Supply Chain Team',
    publishedAt: '2026-05-02',
    image: assets.lifestyleGaming,
    status: 'published',
  },
  {
    id: '3',
    title: 'Panduan Memilih Pelumas Sesuai Tipe Kendaraan',
    slug: 'panduan-memilih-pelumas-gno',
    excerpt:
      'Tips praktis memilih viskositas dan interval pergantian pelumas untuk penggunaan harian maupun komersial.',
    content: `Memilih pelumas tidak hanya soal harga, tetapi juga menyesuaikan spesifikasi mesin dan beban operasional.

Gunakan rekomendasi viskositas dari pabrikan kendaraan, lalu sesuaikan dengan iklim dan pola penggunaan harian.

Untuk kendaraan niaga, lakukan inspeksi berkala agar interval penggantian lebih terukur.`,
    category: 'Tips & Guides',
    author: 'Technical Support',
    publishedAt: '2026-04-20',
    image: assets.product1,
    status: 'published',
  },
  {
    id: '4',
    title: 'GnO Hadir di Energy Mobility Expo 2026',
    slug: 'gno-energy-mobility-expo-2026',
    excerpt:
      'Kunjungi booth GnO untuk demo produk, konsultasi pengadaan, dan penawaran paket merchandise.',
    content: `Pada Energy Mobility Expo 2026, GnO menampilkan rangkaian pelumas, service essentials, dan official merch terbaru.

Pengunjung dapat berkonsultasi langsung tentang rekomendasi produk serta skema kerja sama distribusi.

Acara berlangsung 10-14 Juni 2026 di Jakarta Convention Center.`,
    category: 'Events',
    author: 'Event Marketing',
    publishedAt: '2026-04-08',
    image: assets.product2,
    status: 'published',
  },
]

export const newsCategories = ['All', 'Product Launch', 'Operations', 'Tips & Guides', 'Events']
