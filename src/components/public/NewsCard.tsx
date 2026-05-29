import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { formatDate } from '@/lib/utils'
import type { NewsArticle } from '@/types'

interface NewsCardProps {
  article: NewsArticle
  index?: number
}

export function NewsCard({ article, index = 0 }: NewsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition hover:shadow-md"
    >
      <Link to={`/news/${article.slug}`} className="block">
        <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <span className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            {article.category}
          </span>
          <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-black group-hover:underline">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-neutral-600">{article.excerpt}</p>
          <p className="mt-4 text-xs text-neutral-400">
            {formatDate(article.publishedAt)} · {article.author}
          </p>
        </div>
      </Link>
    </motion.article>
  )
}
