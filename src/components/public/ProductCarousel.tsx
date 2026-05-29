import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ProductCard } from '@/components/public/ProductCard'
import { products, productCategories } from '@/data/products'
import { cn } from '@/lib/utils'

function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(1)

  useEffect(() => {
    const update = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) setItemsPerPage(3)
      else if (window.matchMedia('(min-width: 640px)').matches) setItemsPerPage(2)
      else setItemsPerPage(1)
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return itemsPerPage
}

export function ProductCarousel() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [page, setPage] = useState(0)
  const itemsPerPage = useItemsPerPage()

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory)

  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage))
  const safePage = Math.min(page, totalPages - 1)
  const visible = filtered.slice(safePage * itemsPerPage, safePage * itemsPerPage + itemsPerPage)

  useEffect(() => {
    setPage(0)
  }, [activeCategory, itemsPerPage])

  useEffect(() => {
    if (page >= totalPages) setPage(Math.max(0, totalPages - 1))
  }, [page, totalPages])

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <p className="mx-auto max-w-3xl text-center text-base font-semibold leading-snug text-black sm:text-lg lg:text-2xl">
        Discover Simbadda&apos;s premium audio collection engineered for ultimate clarity and powerful bass.
        Explore now and find the perfect beat for your space.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 sm:mt-10 sm:gap-x-8">
        {productCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'px-1 pb-1 text-xs font-medium transition sm:text-sm',
              activeCategory === cat
                ? 'border-b-2 border-black text-black'
                : 'text-neutral-400 hover:text-neutral-700'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-center gap-1.5 sm:justify-start">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setPage(index)}
              className={cn(
                'h-1 rounded-full transition-all',
                safePage === index ? 'w-4 bg-black' : 'w-1 bg-neutral-300'
              )}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setPage((current) => (current + 1) % totalPages)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 sm:w-auto"
        >
          Next
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-5 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
