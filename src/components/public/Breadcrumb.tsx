import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-neutral-500">
        <li>
          <Link to="/" className="flex items-center gap-1 transition hover:text-black">
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5 text-neutral-300" />
            {item.href ? (
              <Link to={item.href} className="transition hover:text-black">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-black">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
