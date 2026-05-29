import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Breadcrumb } from '@/components/public/Breadcrumb'
import { NewsCard } from '@/components/public/NewsCard'
import { newsArticles, newsCategories } from '@/data/news'
import { cn } from '@/lib/utils'

export function NewsPage() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = newsArticles
    .filter((a) => a.status === 'published')
    .filter((a) => category === 'All' || a.category === category)
    .filter(
      (a) =>
        !query ||
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase())
    )

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'News' }]} />
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-black sm:text-4xl">News & Articles</h1>
        <p className="mt-2 text-neutral-600">Informasi resmi produk, kemitraan, dan kegiatan Simbadda Group.</p>
      </motion.div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari artikel..."
            className="w-full rounded-full border border-neutral-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-black"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {newsCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                'rounded-full px-4 py-1.5 text-xs font-medium transition',
                category === cat ? 'bg-black text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article, i) => (
          <NewsCard key={article.id} article={article} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-neutral-500">Tidak ada artikel yang cocok dengan pencarian.</p>
      )}
    </div>
  )
}
