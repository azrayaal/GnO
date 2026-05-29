import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { assets } from '@/lib/assets'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Products', to: '/#products' },
  { label: 'Supports', to: '/contact' },
  { label: 'About Us', to: '/about' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <nav className="hidden items-center rounded-full bg-neutral-100 px-2 py-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-black',
                  isActive && 'text-black'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <img src={assets.logoBanner} alt="Simbadda" className="h-8 w-auto sm:h-9" />
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition hover:bg-neutral-200"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition hover:bg-neutral-200 sm:flex"
            aria-label="Cart"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-neutral-100 bg-neutral-50"
          >
            <div className="mx-auto flex max-w-7xl gap-2 px-4 py-3 sm:px-6">
              <input
                type="search"
                placeholder="Cari produk, berita, atau dokumentasi..."
                className="flex-1 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-black"
              />
              <button type="button" className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white">
                Cari
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-neutral-100 bg-white px-4 py-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/news" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50">
              News
            </Link>
            <Link to="/gallery" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50">
              Gallery
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
