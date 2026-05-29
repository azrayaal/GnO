import { assets } from '@/lib/assets'
import type { NewsArticle } from '@/types'

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Simbadda Luncurkan Seri Loudspeaker CST 808N dengan Mode TWS',
    slug: 'simbadda-luncurkan-cst-808n-tws',
    excerpt:
      'Produk flagship terbaru menghadirkan kejernihan audio premium dan bass yang powerful untuk ruang keluarga modern.',
    content: `Jakarta — PT Simbadda Group secara resmi meluncurkan loudspeaker CST 808N, sistem audio 2.1 generasi terbaru yang dirancang untuk pengalaman hiburan rumah kelas enterprise.

Dilengkapi dengan mode True Wireless Stereo (TWS), pengguna dapat menghubungkan dua unit untuk cakupan suara yang lebih luas. Produk ini telah melalui sertifikasi standar industri dan siap mendukung kebutuhan institusi maupun retail premium.

"Kami berkomitmen menghadirkan teknologi audio yang andal, mudah dioperasikan, dan sesuai standar kualitas nasional," ujar Direktur Produk Simbadda.

CST 808N tersedia melalui jaringan distributor resmi nasional mulai kuartal ini.`,
    category: 'Product Launch',
    author: 'Tim Humas Simbadda',
    publishedAt: '2026-05-15',
    image: assets.heroFamily,
    status: 'published',
    featured: true,
  },
  {
    id: '2',
    title: 'Kerja Sama Strategis dengan Kementerian untuk Program Audio Digital',
    slug: 'kerja-sama-kementerian-audio-digital',
    excerpt:
      'Inisiatif kolaborasi mendukung digitalisasi infrastruktur audio di fasilitas publik dan instansi pemerintah.',
    content: `Simbadda Group menandatangani nota kesepahaman dengan mitra institusi pemerintah untuk pengembangan solusi audio digital terintegrasi.

Program ini mencakup pelatihan operator, standar pemeliharaan peralatan, dan dokumentasi teknis berbahasa Indonesia. Fase pilot akan dijalankan di tiga provinsi prioritas.

Partisipasi masyarakat dan UMKM distributor lokal menjadi fokus implementasi tahun pertama.`,
    category: 'Partnership',
    author: 'Divisi Enterprise',
    publishedAt: '2026-05-02',
    image: assets.lifestyleGaming,
    status: 'published',
  },
  {
    id: '3',
    title: 'Tips Merawat Sistem Speaker agar Awet dan Optimal',
    slug: 'tips-merawat-sistem-speaker',
    excerpt:
      'Panduan resmi perawatan berkala untuk menjaga performa perangkat audio Simbadda di lingkungan kantor maupun rumah.',
    content: `Perawatan speaker tidak hanya soal membersihkan permukaan. Tim teknis Simbadda merekomendasikan kalibrasi berkala, pengecekan koneksi nirkabel, dan penyimpanan di ruangan dengan kelembapan terkontrol.

Untuk unit karaoke dan meeting room, lakukan uji mikrofon sebelum acara resmi. Gunakan power strip berkualitas dan hindari paparan sinar matahari langsung.

Unduh checklist perawatan lengkap melalui portal layanan pelanggan resmi.`,
    category: 'Tips & Guides',
    author: 'Technical Support',
    publishedAt: '2026-04-20',
    image: assets.product2,
    status: 'published',
  },
  {
    id: '4',
    title: 'Simbadda Hadir di Pameran Teknologi Nasional 2026',
    slug: 'pameran-teknologi-nasional-2026',
    excerpt:
      'Kunjungi booth Simbadda untuk demo live produk terbaru dan konsultasi solusi audio enterprise.',
    content: `Pada Pameran Teknologi Nasional 2026, Simbadda menampilkan lini produk lengkap mulai dari soundbar, sistem karaoke, hingga solusi audio portable profesional.

Pengunjung dapat mencoba fitur TWS, menguji kualitas mikrofon nirkabel, dan berkonsultasi dengan engineer produk.

Acara berlangsung 10–14 Juni 2026 di Jakarta Convention Center.`,
    category: 'Events',
    author: 'Event Marketing',
    publishedAt: '2026-04-08',
    image: assets.product3,
    status: 'published',
  },
  {
    id: '5',
    title: 'Rilis Firmware v2.4 untuk Seri RGB Speaker',
    slug: 'firmware-v2-4-rgb-speaker',
    excerpt:
      'Pembaruan meningkatkan stabilitas koneksi Bluetooth dan menambah preset pencahayaan untuk instalasi event.',
    content: `Firmware v2.4 kini tersedia untuk seri RGB Speaker. Pembaruan mencakup perbaikan latency, mode sinkronisasi multi-unit, dan preset lighting untuk acara indoor.

Panduan instalasi tersedia di pusat unduhan resmi. Disarankan backup konfigurasi sebelum pembaruan.`,
    category: 'Updates',
    author: 'R&D Team',
    publishedAt: '2026-03-28',
    image: assets.product3,
    status: 'draft',
  },
]

export const newsCategories = [
  'All',
  'Product Launch',
  'Partnership',
  'Tips & Guides',
  'Events',
  'Updates',
]
