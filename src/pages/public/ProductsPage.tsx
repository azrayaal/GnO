import { useMemo, useState } from 'react'
import { Breadcrumb } from '@/components/public/Breadcrumb'
import { ProductCard } from '@/components/public/ProductCard'
import { productCategories, products } from '@/data/products'
import { cn } from '@/lib/utils'

export function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products
    return products.filter((product) => product.category === activeCategory)
  }, [activeCategory])

  return (
    <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Products' }]} />

      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Catalog</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Semua Produk GnO
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
          Jelajahi semua lini produk GnO dari pelumas, bundle, hingga merchandise resmi dengan
          halaman katalog yang terpisah dari homepage.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {productCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition',
              activeCategory === category
                ? 'border-black bg-black text-white'
                : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:text-black'
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </article>
  )
}
