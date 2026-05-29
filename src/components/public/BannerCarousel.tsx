import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { banners } from '@/data/banners'

export function BannerCarousel() {
  const activeBanners = banners.filter((b) => b.active)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % activeBanners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [activeBanners.length])

  const current = activeBanners[index]

  return (
    <section className="bg-neutral-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-neutral-500">
          Featured Highlights
        </h2>
        <div className="relative overflow-hidden rounded-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[21/7] min-h-[200px]"
            >
              <img src={current.image} alt={current.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white sm:text-2xl">{current.title}</h3>
                <p className="text-sm text-white/80">{current.subtitle}</p>
                <span className="mt-3 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black">
                  {current.cta}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-4 right-4 flex gap-1.5">
            {activeBanners.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${index === i ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
