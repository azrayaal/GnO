import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '@/lib/assets'
import { cn, formatPrice } from '@/lib/utils'
import { getProductById } from '@/data/products'

const FRAME_PADDING = 8

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
}

const fieldOpsHotspots: Hotspot[] = [
  { id: 'lubricant', top: '42%', left: '58%', productId: '1' },
  { id: 'bundle', top: '70%', left: '16%', productId: '5' },
  { id: 'industrial', top: '76%', left: '52%', productId: '2' },
]

const logisticsHotspots: Hotspot[] = [{ id: 'merch', top: '72%', left: '78%', productId: '3' }]

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
  }
}

function getHotspotPosition(spot: Hotspot, bounds: ImageBounds) {
  return {
    x: bounds.offsetX + bounds.width * parsePercent(spot.left),
    y: bounds.offsetY + bounds.height * parsePercent(spot.top),
  }
}

function clampTooltipPosition(x: number, y: number, width: number, height: number, bounds: ImageBounds) {
  return {
    left: Math.max(FRAME_PADDING, Math.min(x, bounds.width - width - FRAME_PADDING)),
    top: Math.max(FRAME_PADDING, Math.min(y, bounds.height - height - FRAME_PADDING)),
  }
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
    <div style={style} className="absolute z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2">
      <span
        aria-hidden
        className={cn(
          'absolute inset-0 animate-hotspot-ripple rounded-full bg-white/50',
          active && 'bg-white/70'
        )}
      />
      <span
        aria-hidden
        className="absolute inset-0 animate-hotspot-ripple rounded-full bg-white/35 [animation-delay:1s]"
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
  const [activeHotspot, setActiveHotspot] = useState(defaultHotspotId ?? hotspots[0]?.id ?? '')
  const [imageBounds, setImageBounds] = useState<ImageBounds | null>(null)

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

  let tooltipStyle: CSSProperties = { visibility: 'hidden' }
  if (activeSpot && imageBounds) {
    const pos = getHotspotPosition(activeSpot, imageBounds)
    const clamped = clampTooltipPosition(pos.x - 130, pos.y - 120, 260, 120, imageBounds)
    tooltipStyle = { left: clamped.left, top: clamped.top, visibility: 'visible' }
  }

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
        <div
          style={tooltipStyle}
          className="absolute z-20 w-[min(280px,calc(100%-1rem))] max-w-[calc(100%-1rem)] animate-tooltip-enter rounded-2xl bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
        >
          <p className="text-xs text-neutral-500">{activeProduct.label ?? activeProduct.category}</p>
          <p className="mt-1 text-sm font-bold text-black">{activeProduct.name}</p>
          <p className="mt-2 text-sm font-semibold text-black">{formatPrice(activeProduct.price)}</p>
          <Link
            to={`/products/${activeProduct.slug}`}
            className="mt-3 inline-flex rounded-full bg-black px-4 py-2 text-xs font-medium text-white transition hover:bg-neutral-800"
          >
            Explore More
          </Link>
        </div>
      )}

      <CaptionPill label={caption} />
    </div>
  )
}

export function LifestyleJourneySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h3 className="mx-auto max-w-3xl text-center text-xl font-semibold leading-snug text-black sm:text-xl">
        GnO support every journey: dari lapangan, gudang, sampai pengiriman ke lokasi Anda.
      </h3>

      <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-6">
        <LifestyleImagePanel
          imageSrc={assets.lifestyleGaming}
          imageAlt="GnO field operation and product setup"
          caption="Field Ready"
          hotspots={fieldOpsHotspots}
          defaultHotspotId="lubricant"
        />

        <LifestyleImagePanel
          imageSrc={assets.lifestyleFamily}
          imageAlt="GnO logistics and fulfillment"
          caption="Fast Fulfillment"
          hotspots={logisticsHotspots}
          defaultHotspotId="merch"
        />
      </div>
    </section>
  )
}
