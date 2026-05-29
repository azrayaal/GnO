import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface CtaSectionProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export function CtaSection({
  title = 'Solusi Audio Enterprise untuk Instansi Anda',
  description = 'Konsultasi gratis untuk kebutuhan meeting room, aula, dan fasilitas publik. Tim ahli Simbadda siap mendampingi proses pengadaan.',
  primaryLabel = 'Hubungi Kami',
  primaryTo = '/contact',
  secondaryLabel = 'Lihat Galeri',
  secondaryTo = '/gallery',
}: CtaSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mx-4 my-16 rounded-3xl bg-black px-6 py-12 text-center sm:mx-6 lg:mx-8 lg:px-12"
    >
      <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-300 sm:text-base">{description}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to={primaryTo}
          className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-neutral-100"
        >
          {primaryLabel}
        </Link>
        <Link
          to={secondaryTo}
          className="rounded-full border border-neutral-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:border-white"
        >
          {secondaryLabel}
        </Link>
      </div>
    </motion.section>
  )
}
