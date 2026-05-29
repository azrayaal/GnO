import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Breadcrumb } from '@/components/public/Breadcrumb'

export function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Contact' }]} />
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-black sm:text-4xl">Contact Us</h1>
        <p className="mt-2 max-w-2xl text-neutral-600">
          Hubungi tim kami untuk dukungan produk, kerja sama enterprise, dan informasi pengadaan.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          {[
            { icon: MapPin, label: 'Head Office', value: 'Jl. Industri Raya No. 88, Tangerang, Banten 15143' },
            { icon: Phone, label: 'Phone', value: '+62 21 5550 8800' },
            { icon: Mail, label: 'Email', value: 'contact@simbadda.co.id' },
          ].map((item) => (
            <div key={item.label} className="flex gap-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-5">
              <item.icon className="h-5 w-5 shrink-0 text-black" />
              <div>
                <p className="text-xs font-semibold uppercase text-neutral-500">{item.label}</p>
                <p className="mt-1 text-sm text-black">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-lg font-semibold text-black">Send a Message</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-medium text-neutral-600">Full Name</label>
              <input className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-black" placeholder="John Doe" />
            </div>
            <div>
              <label className="text-xs font-medium text-neutral-600">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-black" placeholder="you@company.id" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-xs font-medium text-neutral-600">Subject</label>
            <select className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-black">
              <option>Product Inquiry</option>
              <option>Enterprise / Government</option>
              <option>Technical Support</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="text-xs font-medium text-neutral-600">Message</label>
            <textarea rows={5} className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-black" placeholder="Your message..." />
          </div>
          <button type="submit" className="mt-6 w-full rounded-full bg-black py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800">
            Submit Message
          </button>
          <p className="mt-3 text-center text-xs text-neutral-400">POC Demo — form tidak terhubung ke backend</p>
        </form>
      </div>
    </div>
  )
}
