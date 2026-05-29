import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Check } from 'lucide-react'
import { Breadcrumb } from '@/components/public/Breadcrumb'
import { ProductCard } from '@/components/public/ProductCard'
import { getProductBySlug, products } from '@/data/products'
import { formatPrice } from '@/lib/utils'

export function ProductDetailPage() {
  const { slug } = useParams()
  const product = slug ? getProductBySlug(slug) : undefined
  const related = products
    .filter((item) => item.slug !== slug && item.category === product?.category)
    .slice(0, 3)

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-black">Produk tidak ditemukan</h1>
        <Link to="/#products" className="mt-4 inline-block text-sm font-medium underline">
          Kembali ke Products
        </Link>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/#products' },
          { label: product.name },
        ]}
      />

      <Link
        to="/#products"
        className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-600 transition hover:text-black"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-neutral-100"
        >
          <div className="flex aspect-square items-center justify-center h-full w-full">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full w-full object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
            {product.label ?? product.category}
          </span>
          <h1 className="mt-2 text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">
            {product.name}
          </h1>
          {product.tagline && (
            <p className="mt-3 text-sm text-neutral-600 sm:text-base">{product.tagline}</p>
          )}

          <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            {product.originalPrice != null && (
              <span className="text-base text-neutral-400 line-through sm:text-lg">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-2xl font-bold text-black sm:text-3xl">
              {formatPrice(product.price)}
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Add to Cart
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-50"
            >
              Contact Sales
            </Link>
          </div>

          {product.specs && product.specs.length > 0 && (
            <ul className="mt-8 space-y-2 border-t border-neutral-200 pt-6">
              {product.specs.map((spec) => (
                <li key={spec} className="flex items-start gap-2 text-sm text-neutral-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-black" />
                  {spec}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>

      <section className="mt-12 border-t border-neutral-200 pt-10 sm:mt-16">
        <h2 className="text-xl font-bold text-black sm:text-2xl">Product Description</h2>
        <div className="mt-4 max-w-3xl space-y-4">
          {product.description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-12 border-t border-neutral-200 pt-10 sm:mt-16">
          <h2 className="text-xl font-bold text-black sm:text-2xl">Related Products</h2>
          <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <ProductCard key={item.id} product={item} index={index} />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
