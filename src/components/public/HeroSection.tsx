import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { assets } from '@/lib/assets'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative aspect-[21/9] min-h-[320px] w-full sm:min-h-[420px] lg:min-h-[520px]">
        <img
          src={assets.heroFamily}
          alt="Simbadda loudspeaker family experience"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <p className="text-sm font-medium text-white/90 sm:text-base">Loudspeaker</p>
            <h1 className="mt-1 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              CST 808N
            </h1>
            <p className="mt-2 text-sm text-white/80 sm:text-lg">Dengan Mode TWS</p>
            <Link
              to="/products/tower-loudspeaker-cst-808n"
              className="mt-4 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-neutral-100 sm:mt-6 sm:px-6 sm:py-2.5"
            >
              See more
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
