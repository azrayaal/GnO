import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Share2 } from 'lucide-react'
import { Breadcrumb } from '@/components/public/Breadcrumb'
import { NewsCard } from '@/components/public/NewsCard'
import { newsArticles } from '@/data/news'
import { formatDate } from '@/lib/utils'

export function NewsDetailPage() {
  const { slug } = useParams()
  const article = newsArticles.find((a) => a.slug === slug)
  const related = newsArticles
    .filter((a) => a.slug !== slug && a.status === 'published')
    .slice(0, 2)

  if (!article) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Artikel tidak ditemukan</h1>
        <Link to="/news" className="mt-4 inline-block text-sm font-medium underline">
          Kembali ke News
        </Link>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'News', href: '/news' }, { label: article.title }]} />

      <Link to="/news" className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-black">
        <ArrowLeft className="h-4 w-4" />
        Back to News
      </Link>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{article.category}</span>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-black sm:text-4xl">{article.title}</h1>
        <p className="mt-4 text-sm text-neutral-500">
          {formatDate(article.publishedAt)} · {article.author}
        </p>
      </motion.div>

      <div className="mt-8 overflow-hidden rounded-2xl">
        <img src={article.image} alt={article.title} className="w-full object-cover" />
      </div>

      <div className="prose prose-neutral mt-8 max-w-none">
        {article.content.split('\n\n').map((para, i) => (
          <p key={i} className="mb-4 text-base leading-relaxed text-neutral-700">
            {para}
          </p>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-neutral-200 pt-6">
        <button type="button" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-black">
          <Share2 className="h-4 w-4" />
          Share article
        </button>
      </div>

      {related.length > 0 && (
        <section className="mt-16 border-t border-neutral-200 pt-12">
          <h2 className="text-xl font-bold text-black">Related Articles</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {related.map((a, i) => (
              <NewsCard key={a.id} article={a} index={i} />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
