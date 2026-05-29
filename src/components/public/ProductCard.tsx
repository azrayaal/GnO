import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import type { Product } from '@/types'

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <Link to={`/products/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-[20px] bg-neutral-200">
          <div className="flex min-h-[240px] items-center justify-center sm:min-h-[280px] lg:min-h-[300px]">
            <div className="absolute bottom-0 right-0 z-10 h-14 w-14 rounded-tl-[28px] bg-white sm:h-16 sm:w-16 sm:rounded-tl-[32px]" />

            <img
              src={product.image}
              alt={product.name}
              className="relative z-0 h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]"
            />
          </div>

          <span className="absolute bottom-0 right-0 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition group-hover:bg-neutral-800 sm:h-11 sm:w-11">
            <Plus className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" strokeWidth={2.25} />
          </span>
        </div>

        <div className="mt-3">
          <p className="text-xs font-normal text-neutral-500">{product.label ?? product.category}</p>
          <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-snug text-black sm:text-[15px]">
            {product.name}
          </h3>
          {product.tagline && (
            <p className="mt-1 line-clamp-1 text-xs text-neutral-500">{product.tagline}</p>
          )}
          <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            {product.originalPrice != null && (
              <span className="text-xs text-neutral-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-sm font-bold text-black sm:text-[15px]">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
