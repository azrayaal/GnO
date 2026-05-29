import { motion } from 'framer-motion'
import { Breadcrumb } from '@/components/public/Breadcrumb'
import { CtaSection } from '@/components/public/CtaSection'
import { assets } from '@/lib/assets'

const milestones = [
  { year: '1998', title: 'Founded', desc: 'Memulai produksi speaker domestik berkualitas.' },
  { year: '2010', title: 'National Expansion', desc: 'Jaringan distributor di seluruh Indonesia.' },
  { year: '2020', title: 'Enterprise Division', desc: 'Solusi audio untuk instansi & pemerintah.' },
  { year: '2026', title: 'Digital Platform', desc: 'Portal informasi dan layanan terintegrasi SIMBADDA.' },
]

export function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'About Us' }]} />

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-black sm:text-4xl">About Simbadda Group</h1>
        <p className="mt-4 max-w-3xl text-neutral-600 leading-relaxed">
          Simbadda Group adalah perusahaan teknologi audio dan elektronik terkemuka di Indonesia. Kami melayani segmen consumer, pro-sumer, dan enterprise dengan standar kualitas yang konsisten serta dukungan purna jual nasional.
        </p>
      </motion.div>

      <div className="mt-10 overflow-hidden rounded-3xl">
        <img src={assets.heroDesign} alt="Simbadda products" className="w-full object-cover" />
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { stat: '25+', label: 'Years of Experience' },
          { stat: '500+', label: 'Distribution Points' },
          { stat: '1M+', label: 'Products Delivered' },
          { stat: '50+', label: 'Enterprise Clients' },
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
        title="Bermitra dengan Simbadda"
        description="Program B2B dan pengadaan pemerintah dengan dokumentasi lengkap dan dukungan teknis on-site."
      />
    </div>
  )
}
