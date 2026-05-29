import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { Breadcrumb } from '@/components/public/Breadcrumb'
import { galleryItems, galleryCategories } from '@/data/gallery'
import { cn } from '@/lib/utils'
import type { GalleryItem } from '@/types'

export function GalleryPage() {
  const [category, setCategory] = useState('All')
  const [preview, setPreview] = useState<GalleryItem | null>(null)

  const filtered =
    category === 'All' ? galleryItems : galleryItems.filter((g) => g.category === category)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Gallery' }]} />
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-black sm:text-4xl">Gallery</h1>
        <p className="mt-2 text-neutral-600">Dokumentasi produk, acara, dan aktivitas Simbadda Group.</p>
      </motion.div>

      <div className="mt-8 flex flex-wrap gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={cn(
              'rounded-full px-4 py-1.5 text-xs font-medium transition',
              category === cat ? 'bg-black text-white' : 'bg-neutral-100 text-neutral-600'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setPreview(item)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 text-left"
          >
            <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
              <div>
                <p className="font-medium text-white">{item.title}</p>
                <p className="text-xs text-white/70">{item.category}</p>
              </div>
              <ZoomIn className="absolute right-4 top-4 h-5 w-5 text-white" />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setPreview(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setPreview(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/50 p-2 text-white"
              >
                <X className="h-5 w-5" />
              </button>
              <img src={preview.image} alt={preview.title} className="max-h-[70vh] w-full object-contain" />
              <div className="p-4">
                <h3 className="font-semibold text-black">{preview.title}</h3>
                <p className="text-sm text-neutral-500">{preview.category} · {preview.size}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
