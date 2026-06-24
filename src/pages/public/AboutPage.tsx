import { motion } from 'framer-motion'
import { Breadcrumb } from '@/components/public/Breadcrumb'
import { CtaSection } from '@/components/public/CtaSection'
import { assets } from '@/lib/assets'

const milestones = [
  { year: '2012', title: 'Founded', desc: 'GnO memulai distribusi pelumas independen untuk bengkel lokal.' },
  { year: '2017', title: 'National Expansion', desc: 'Jaringan fulfillment dan mitra reseller tumbuh di kota-kota utama.' },
  { year: '2022', title: 'Merch Program', desc: 'Peluncuran official merchandise untuk komunitas dan tim lapangan.' },
  { year: '2026', title: 'Digital Commerce', desc: 'Platform e-commerce terpadu dengan simulasi kirim dan pembayaran.' },
]

export function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'About Us' }]} />

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-black sm:text-4xl">About GnO Energy Retail</h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-neutral-600">
          GnO adalah brand e-commerce oil and gas yang fokus pada pelumas, maintenance essentials, dan
          official merchandise. Kami melayani pelanggan retail maupun bisnis dengan proses order yang
          transparan, cepat, dan mudah dipantau.
        </p>
      </motion.div>

      <div className="mt-10 overflow-hidden rounded-3xl">
        <img src={assets.heroDesign} alt="GnO products and logistics" className="w-full object-cover" />
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { stat: '14+', label: 'Years in Energy Retail' },
          { stat: '120+', label: 'Fulfillment Partners' },
          { stat: '75K+', label: 'Orders Delivered' },
          { stat: '300+', label: 'B2B Clients' },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-neutral-100 bg-neutral-50 p-6 text-center"
          >
            <p className="text-3xl font-bold text-black">{item.stat}</p>
            <p className="mt-1 text-sm text-neutral-600">{item.label}</p>
          </motion.div>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-black">Our Journey</h2>
        <div className="mt-8 space-y-6 border-l-2 border-neutral-200 pl-6">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="text-xs font-bold text-neutral-400">{m.year}</span>
              <h3 className="font-semibold text-black">{m.title}</h3>
              <p className="text-sm text-neutral-600">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaSection
        title="Bermitra dengan GnO"
        description="Program pengadaan B2B untuk pelumas dan paket merchandise dengan opsi pengiriman berkala."
      />
    </div>
  )
}
