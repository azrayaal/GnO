import { Link } from 'react-router-dom'
import { assets } from '@/lib/assets'

const navLinks = [
  { label: 'About GnO', to: '/about' },
  { label: 'News', to: '/news' },
  { label: 'Our Products', to: '/#products' },
  { label: 'Shipping & Payment', to: '/contact' },
  { label: 'Contact Us', to: '/contact' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M6.5 9.5H4V20h2.5V9.5zM5.25 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9 9.5h2.4v1.4h.03c.34-.64 1.17-1.32 2.4-1.32 2.57 0 3.05 1.69 3.05 3.88V20H14V14.9c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V20H9V9.5z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.1 5 12 5 12 5s-6.1 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.9 19 12 19 12 19s6.1 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <img src={assets.logoWhite} alt="GnO" className="h-12 w-auto sm:h-14" />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="max-w-xs">
            <p className="text-sm leading-relaxed text-white/90">
              Tim GnO siap bantu order pelumas, official merch, hingga penjadwalan pengiriman untuk area industri.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <a href="tel:+62215008990" className="block underline underline-offset-4 hover:text-white/80">
                (021) 500-8990
              </a>
              <a href="mailto:sales@gno-energy.id" className="block underline underline-offset-4 hover:text-white/80">
                sales@gno-energy.id
              </a>
            </div>
            <div className="mt-8">
              <p className="text-sm font-medium">Operating Hours</p>
              <div className="mt-2 space-y-1 text-sm text-white/90">
                <p>Monday - Friday 08:30 - 18:00</p>
                <p>Saturday 09:00 - 14:00</p>
                <p>Sunday and public holiday off</p>
              </div>
            </div>
          </div>

          <div className="lg:border-l lg:border-white/30 lg:pl-12">
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="underline underline-offset-4 hover:text-white/80">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-sm font-medium">Find Us</p>
              <div className="mt-3 flex items-center gap-4">
                {socialLinks.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition hover:text-white/70"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:text-right">
            <p className="text-sm font-medium">Warehouse & Fulfillment</p>
            <address className="mt-2 max-w-xs text-sm not-italic leading-relaxed text-white/90 lg:ml-auto">
              Kawasan Industri Delta Silicon 5,
              <br />
              Cikarang, Bekasi 17530
            </address>
          </div>
        </div>
      </div>
    </footer>
  )
}
