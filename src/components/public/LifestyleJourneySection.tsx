import { forwardRef, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '@/lib/assets'
import { cn, formatPrice } from '@/lib/utils'
import { getProductById } from '@/data/products'
import type { Product } from '@/types'

const FRAME_PADDING = 8
const HOTSPOT_BUTTON_RADIUS = 10
const TOOLTIP_BUTTON_PADDING = 2

type Hotspot = {
  id: string
  top: string
  left: string
  productId?: string
}

type ImageBounds = {
  offsetX: number
  offsetY: number
  width: number
  height: number
  containerWidth: number
  containerHeight: number
}

const gamingHotspots: Hotspot[] = [
  { id: 'headphones', top: '30%', left: '58%', productId: '3' },
  { id: 'speaker', top: '75%', left: '15%', productId: '1' },
  { id: 'pc', top: '80%', left: '50%', productId: '2' },
]

const familyHotspots: Hotspot[] = [
  { id: 'speaker', top: '75%', left: '80%', productId: '1' },
]


function parsePercent(value: string): number {
  return Number.parseFloat(value) / 100
}

function getObjectCoverBounds(
  containerWidth: number,
  containerHeight: number,
  naturalWidth: number,
  naturalHeight: number
): ImageBounds {
  const scale = Math.max(containerWidth / naturalWidth, containerHeight / naturalHeight)
  const width = naturalWidth * scale
  const height = naturalHeight * scale

  return {
    offsetX: (containerWidth - width) / 2,
    offsetY: (containerHeight - height) / 2,
    width,
    height,
    containerWidth,
    containerHeight,
  }
}

function getHotspotPosition(spot: Hotspot, bounds: ImageBounds) {
  return {
    x: bounds.offsetX + bounds.width * parsePercent(spot.left),
    y: bounds.offsetY + bounds.height * parsePercent(spot.top),
  }
}

function computeTooltipPosition(
  hotspotX: number,
  hotspotY: number,
  tooltipWidth: number,
  tooltipHeight: number,
  bounds: ImageBounds
) {
  const maxLeft = bounds.containerWidth - tooltipWidth - FRAME_PADDING
  const maxTop = bounds.containerHeight - tooltipHeight - FRAME_PADDING

  let left = hotspotX - tooltipWidth / 2
  left = Math.max(FRAME_PADDING, Math.min(left, maxLeft))

  const gapFromButton = HOTSPOT_BUTTON_RADIUS + TOOLTIP_BUTTON_PADDING

  let top = hotspotY + gapFromButton
  if (top + tooltipHeight > bounds.containerHeight - FRAME_PADDING) {
    top = hotspotY - gapFromButton - tooltipHeight
  }
  top = Math.max(FRAME_PADDING, Math.min(top, maxTop))

  return { top, left }
}

function HotspotButton({
  active,
  onClick,
  style,
}: {
  active: boolean
  onClick: () => void
  style: CSSProperties
}) {
  return (
    <div
      style={style}
      className="absolute z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2"
    >
      <span
        aria-hidden
        className={cn(
          'absolute inset-0 rounded-full bg-white/50 animate-hotspot-ripple',
          active && 'bg-white/70'
        )}
      />
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-white/35 animate-hotspot-ripple [animation-delay:1s]"
      />
      <button
        type="button"
        onClick={onClick}
        aria-label="View product"
        aria-pressed={active}
        className={cn(
          'relative h-full w-full rounded-full border-2 border-white bg-white/90 shadow-md transition hover:scale-110',
          active && 'scale-110 ring-2 ring-white ring-offset-2 ring-offset-transparent'
        )}
      />
    </div>
  )
}

const ProductTooltip = forwardRef<HTMLDivElement, { product: Product; style: CSSProperties }>(
  function ProductTooltip({ product, style }, ref) {
    const shortName = product.name.replace(' Lifestyle Speaker', '')

    return (
      <div
        ref={ref}
        style={style}
        className="absolute z-20 w-[min(280px,calc(100%-1rem))] max-w-[calc(100%-1rem)] animate-tooltip-enter rounded-2xl bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
      >
        <p className="text-xs text-neutral-500">{product.label ?? product.category}</p>
        <p className="mt-1 text-sm font-bold text-black">{shortName}</p>
        <p className="text-xs text-neutral-600">Lifestyle Speaker</p>
        <p className="mt-2 text-sm font-semibold text-black">{formatPrice(product.price)}</p>
        <Link
          to={`/products/${product.slug}`}
          className="mt-3 inline-flex animate-cta-pulse rounded-full bg-black px-4 py-2 text-xs font-medium text-white transition hover:scale-105 hover:bg-neutral-800 active:scale-95"
        >
          Explore More
        </Link>
      </div>
    )
  }
)

function CaptionPill({ label }: { label: string }) {
  return (
    <div className="absolute bottom-0 right-0 rounded-tl-[16px] bg-white px-3 py-1.5 text-sm font-medium text-black sm:rounded-tl-[20px] sm:px-4 sm:py-2 sm:text-base lg:text-xl">
      {label}
    </div>
  )
}

function LifestyleImagePanel({
  imageSrc,
  imageAlt,
  caption,
  hotspots,
  defaultHotspotId,
}: {
  imageSrc: string
  imageAlt: string
  caption: string
  hotspots: Hotspot[]
  defaultHotspotId?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  const [activeHotspot, setActiveHotspot] = useState(defaultHotspotId ?? hotspots[0]?.id ?? '')
  const [imageBounds, setImageBounds] = useState<ImageBounds | null>(null)
  const [tooltipStyle, setTooltipStyle] = useState<CSSProperties>({ visibility: 'hidden' })

  const activeSpot = activeHotspot ? hotspots.find((spot) => spot.id === activeHotspot) : undefined
  const activeProduct = activeSpot?.productId ? getProductById(activeSpot.productId) : undefined

  const handleHotspotClick = (spotId: string) => {
    setActiveHotspot((current) => (current === spotId ? '' : spotId))
  }

  const updateImageBounds = () => {
    const container = containerRef.current
    const image = imageRef.current
    if (!container || !image?.naturalWidth || !image.naturalHeight) return

    setImageBounds(
      getObjectCoverBounds(
        container.clientWidth,
        container.clientHeight,
        image.naturalWidth,
        image.naturalHeight
      )
    )
  }

  useLayoutEffect(() => {
    updateImageBounds()

    const container = containerRef.current
    const image = imageRef.current
    if (!container || !image) return

    const resizeObserver = new ResizeObserver(updateImageBounds)
    resizeObserver.observe(container)
    image.addEventListener('load', updateImageBounds)
    window.addEventListener('resize', updateImageBounds)

    return () => {
      resizeObserver.disconnect()
      image.removeEventListener('load', updateImageBounds)
      window.removeEventListener('resize', updateImageBounds)
    }
  }, [imageSrc])

  useLayoutEffect(() => {
    if (!activeSpot || !activeProduct || !imageBounds) {
      setTooltipStyle({ visibility: 'hidden' })
      return
    }

    const tooltip = tooltipRef.current
    if (!tooltip) return

    const hotspot = getHotspotPosition(activeSpot, imageBounds)
    const position = computeTooltipPosition(
      hotspot.x,
      hotspot.y,
      tooltip.offsetWidth,
      tooltip.offsetHeight,
      imageBounds
    )

    setTooltipStyle({
      top: position.top,
      left: position.left,
      visibility: 'visible',
    })
  }, [activeHotspot, activeProduct, imageBounds])

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-[16/11]"
    >
      <img
        ref={imageRef}
        src={imageSrc}
        alt={imageAlt}
        className="h-full w-full object-cover"
        onLoad={updateImageBounds}
      />

      {imageBounds &&
        hotspots.map((spot) => {
          const position = getHotspotPosition(spot, imageBounds)

          return (
            <HotspotButton
              key={spot.id}
              active={activeHotspot === spot.id}
              onClick={() => handleHotspotClick(spot.id)}
              style={{ top: position.y, left: position.x }}
            />
          )
        })}

      {activeSpot && activeProduct && imageBounds && (
        <ProductTooltip
          key={activeSpot.id}
          product={activeProduct}
          style={tooltipStyle}
          ref={tooltipRef}
        />
      )}

      <CaptionPill label={caption} />
    </div>
  )
}

export function LifestyleJourneySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h3 className="mx-auto max-w-3xl text-center text-xl leading-snug text-black sm:text-xl font-semibold">
        In every moment Sambadda always on your journey
      </h3>

      <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-6">
        <LifestyleImagePanel
          imageSrc={assets.lifestyleGaming}
          imageAlt="Gaming setup with Simbadda audio"
          caption="Embrace Your Skill"
          hotspots={gamingHotspots}
          defaultHotspotId="speaker"
        />

        <LifestyleImagePanel
          imageSrc={assets.lifestyleFamily}
          imageAlt="Gaming setup with Simbadda audio"
          caption="Fun Theater"
          hotspots={familyHotspots}
          defaultHotspotId="speaker"
        />
      </div>
    </section>
  )
}
