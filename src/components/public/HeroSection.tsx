import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { assets } from '@/lib/assets'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative aspect-[21/9] min-h-[320px] w-full sm:min-h-[420px] lg:min-h-[520px]">
        <img
          src={assets.heroFamily}
          alt="GnO oil and gas commerce showcase"
          className="h-full w-full object-cover object-[72%_center] sm:object-[68%_center] lg:object-center"
        />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black via-black/95 to-black/20 sm:w-[58%] lg:w-[46%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/25" />
        <div className="absolute inset-0 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <p className="text-sm font-medium text-white/90 sm:text-base">GnO Store</p>
            <h1 className="mt-1 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Solusi Pelumas dan Kebutuhan Lapangan GnO
            </h1>
            <p className="mt-2 max-w-lg text-sm text-white/80 sm:text-lg">
              Belanja pelumas, perlengkapan operasional, dan official merchandise dengan alur checkout, ongkir, dan pembayaran yang terasa seperti transaksi asli.
            </p>
            <Link
              to="/products"
              className="mt-4 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-neutral-100 sm:mt-6 sm:px-6 sm:py-2.5"
            >
              Lihat Semua Produk
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
