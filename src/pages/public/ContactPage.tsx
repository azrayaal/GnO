import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Truck, Wallet } from 'lucide-react'
import { Breadcrumb } from '@/components/public/Breadcrumb'

export function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Contact' }]} />
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-black sm:text-4xl">Shipping & Contact</h1>
        <p className="mt-2 max-w-2xl text-neutral-600">
          Hubungi tim GnO untuk konsultasi produk, pengiriman dalam kota/antar provinsi, dan kebutuhan bulk order.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          {[
            { icon: MapPin, label: 'Fulfillment Center', value: 'Delta Silicon 5, Cikarang, Bekasi 17530' },
            { icon: Phone, label: 'Phone', value: '+62 21 5008 990' },
            { icon: Mail, label: 'Email', value: 'support@gno-energy.id' },
          ].map((item) => (
            <div key={item.label} className="flex gap-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-5">
              <item.icon className="h-5 w-5 shrink-0 text-black" />
              <div>
                <p className="text-xs font-semibold uppercase text-neutral-500">{item.label}</p>
                <p className="mt-1 text-sm text-black">{item.value}</p>
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <p className="flex items-center gap-2 text-sm font-semibold text-black">
              <Truck className="h-4 w-4" />
              Opsi Pengiriman
            </p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>- Same day Jabodetabek (motor/carrier internal)</li>
              <li>- Regular nasional (JNE, SiCepat, J&T)</li>
              <li>- Cargo untuk order pelumas volume besar</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <p className="flex items-center gap-2 text-sm font-semibold text-black">
              <Wallet className="h-4 w-4" />
              Metode Pembayaran
            </p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>- Virtual Account (BCA, BNI, Mandiri)</li>
              <li>- E-Wallet (GoPay, OVO, DANA)</li>
              <li>- Transfer bank untuk invoice B2B</li>
            </ul>
          </div>
        </div>

        <form className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-lg font-semibold text-black">Request Callback</h2>
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
              <option>Shipping Schedule</option>
              <option>Bulk Purchase</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="text-xs font-medium text-neutral-600">Message</label>
            <textarea rows={5} className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-black" placeholder="Ceritakan kebutuhan produk, jumlah, dan lokasi pengiriman..." />
          </div>
          <button type="submit" className="mt-6 w-full rounded-full bg-black py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800">
            Submit Message
          </button>
          <p className="mt-3 text-center text-xs text-neutral-400">POC Demo - form belum terhubung backend</p>
        </form>
      </div>
    </div>
  )
}
