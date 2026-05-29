import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HeroSection } from '@/components/public/HeroSection'
import { ProductCarousel } from '@/components/public/ProductCarousel'
import { LifestyleJourneySection } from '@/components/public/LifestyleJourneySection'
import { ProductCard } from '@/components/public/ProductCard'
import { products } from '@/data/products'
import { assets } from '@/lib/assets'

export function HomePage() {
  const location = useLocation()
  const featuredProducts = products.slice(0, 3)

  useEffect(() => {
    if (location.hash === '#products') {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.hash])

  return (
    <>
      <HeroSection />
      <ProductCarousel />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-neutral-300 sm:rounded-3xl">
          <div className="absolute left-0 top-0 h-10 w-10 rounded-br-[20px] bg-white sm:h-14 sm:w-14 sm:rounded-br-[28px]" />

          <div className="relative px-34 pt-8 text-center">
            <h2 className="text-xl font-bold leading-snug text-black sm:text-2xl lg:text-[38px] lg:leading-tight">
              OUR SOUND DESIGN{' '}
              <img
                src={assets.icon1}
                alt=""
                aria-hidden
                className="inline-block h-8 w-auto align-middle sm:h-12 lg:h-20"
              />{' '}
              PROMISE A SONICALLY{' '}
              <img
                src={assets.icon2}
                alt=""
                aria-hidden
                className="inline-block h-8 w-auto align-middle sm:h-12 lg:h-20"
              />{' '}
              DELIGHTFUL JOURNEY THAT EMBRACES LISTENERS IN A WARM{' '}
              <img
                src={assets.icon3}
                alt=""
                aria-hidden
                className="inline-block h-8 w-auto align-middle sm:h-12 lg:h-20"
              />
            </h2>

            <div className="absolute bottom-0 right-0 flex h-14 w-full max-w-[220px] items-center justify-center rounded-tl-[16px] bg-white pt-2 pl-2 sm:h-16 sm:rounded-tl-[20px] sm:pt-3 sm:pl-3">
              <Link
                to="/about"
                className="flex h-full w-full items-center justify-center rounded-[16px] bg-black text-xs font-medium text-white sm:rounded-[20px] sm:text-sm"
              >
                Explore more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LifestyleJourneySection />

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8">
        <h3 className="text-center text-lg font-semibold leading-snug text-black sm:text-xl">
          Our Products
        </h3>
        <div className="mt-8 grid gap-x-6 gap-y-10 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
    </>
  )
}
