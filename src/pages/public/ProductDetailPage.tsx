import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Building2, Check, CreditCard, MapPinned, QrCode, Truck } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Breadcrumb } from '@/components/public/Breadcrumb'
import { ProductCard } from '@/components/public/ProductCard'
import { getProductBySlug, products } from '@/data/products'
import { cn, formatPrice } from '@/lib/utils'

const cityRates: Record<string, number> = {
  Jakarta: 18_000,
  Bandung: 22_000,
  Surabaya: 29_000,
  Balikpapan: 36_000,
}

const vaNumbers: Record<'bca' | 'bni', string> = {
  bca: '8808 9012 3456 7788',
  bni: '9881 5566 7788 2100',
}

export function ProductDetailPage() {
  const { slug } = useParams()
  const product = slug ? getProductBySlug(slug) : undefined
  const related = products
    .filter((item) => item.slug !== slug && item.category === product?.category)
    .slice(0, 3)

  const [qty, setQty] = useState(1)
  const [agreed, setAgreed] = useState(false)
  const [quoteReady, setQuoteReady] = useState(false)
  const [recipientName, setRecipientName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState<keyof typeof cityRates>('Jakarta')
  const [courier, setCourier] = useState<'regular' | 'same-day'>('regular')
  const [insurance, setInsurance] = useState(true)
  const [paymentMethod, setPaymentMethod] = useState<'qris' | 'va'>('qris')
  const [selectedBank, setSelectedBank] = useState<'bca' | 'bni'>('bca')

  const shippingFee = useMemo(() => {
    const base = cityRates[city]
    const courierFee = courier === 'same-day' ? 18_000 : 0
    const insuranceFee = insurance ? 7_500 : 0
    return base + courierFee + insuranceFee
  }, [city, courier, insurance])

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-black">Produk tidak ditemukan</h1>
        <Link to="/products" className="mt-4 inline-block text-sm font-medium underline">
          Kembali ke Product
        </Link>
      </div>
    )
  }

  const subtotal = product.price * qty
  const total = subtotal + shippingFee
  const addressComplete =
    recipientName.trim().length > 0 && phone.trim().length > 0 && address.trim().length > 0

  return (
    <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: product.name },
        ]}
      />

      <Link
        to="/products"
        className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-600 transition hover:text-black"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Product
      </Link>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-neutral-100"
        >
          <div className="aspect-square flex h-full w-full items-center justify-center">
            <img src={product.image} alt={product.name} className="max-h-full w-full object-contain" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
            {product.label ?? product.category}
          </span>
          <h1 className="mt-2 text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">
            {product.name}
          </h1>
          {product.tagline && (
            <p className="mt-3 text-sm text-neutral-600 sm:text-base">{product.tagline}</p>
          )}

          <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            {product.originalPrice != null && (
              <span className="text-base text-neutral-400 line-through sm:text-lg">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-2xl font-bold text-black sm:text-3xl">
              {formatPrice(product.price)}
            </span>
          </div>

          <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="flex items-center justify-between gap-3 border-b border-neutral-100 pb-4">
              <div>
                <p className="text-sm font-semibold text-black">Step 1</p>
                <p className="text-xs text-neutral-500">Pilih jumlah lalu setujui pembuatan ringkasan harga.</p>
              </div>
              <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                Checkout
              </span>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-neutral-500">Quantity</label>
                <select
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-black"
                  value={qty}
                  onChange={(event) => setQty(Number(event.target.value))}
                >
                  {[1, 2, 3, 4, 5].map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="rounded-xl bg-neutral-50 p-4">
                <p className="text-xs text-neutral-500">Subtotal Produk</p>
                <p className="mt-1 text-lg font-bold text-black">{formatPrice(subtotal)}</p>
                <p className="mt-1 text-xs text-neutral-500">Belum termasuk ongkir dan proteksi.</p>
              </div>
            </div>

            <label className="mt-4 inline-flex items-start gap-2 text-sm text-neutral-700">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-neutral-300"
                checked={agreed}
                onChange={(event) => setAgreed(event.target.checked)}
              />
              <span>
                Saya setuju membuat ringkasan harga untuk produk ini sebelum lanjut ke alamat
                pengiriman.
              </span>
            </label>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setQuoteReady(true)}
                disabled={!agreed}
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300"
              >
                Buat Ringkasan Harga
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-50"
              >
                Contact Sales
              </Link>
            </div>
          </div>

          {product.specs && product.specs.length > 0 && (
            <ul className="mt-8 space-y-2 border-t border-neutral-200 pt-6">
              {product.specs.map((spec) => (
                <li key={spec} className="flex items-start gap-2 text-sm text-neutral-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-black" />
                  {spec}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>

      {quoteReady && (
        <section className="mt-12 space-y-6 border-t border-neutral-200 pt-10 sm:mt-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h2 className="flex items-center gap-2 text-xl font-bold text-black sm:text-2xl">
                <MapPinned className="h-5 w-5" />
                Alamat Pengiriman
              </h2>
              <p className="mt-2 text-sm text-neutral-500">
                Step 2. Isi data penerima terlebih dahulu sebelum sistem menampilkan ongkir dan
                metode pembayaran.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-neutral-500">Nama Penerima</label>
                  <input
                    type="text"
                    value={recipientName}
                    onChange={(event) => setRecipientName(event.target.value)}
                    placeholder="Nama lengkap"
                    className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-neutral-500">Nomor HP</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="08xxxxxxxxxx"
                    className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-black"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-neutral-500">Alamat Lengkap</label>
                  <textarea
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    rows={4}
                    placeholder="Jalan, nomor, kecamatan, patokan, dan catatan pengiriman"
                    className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-neutral-500">Kota Tujuan</label>
                  <select
                    className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-black"
                    value={city}
                    onChange={(event) => setCity(event.target.value as keyof typeof cityRates)}
                  >
                    {Object.keys(cityRates).map((cityName) => (
                      <option key={cityName} value={cityName}>
                        {cityName}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-neutral-500">Kurir</label>
                  <select
                    className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-black"
                    value={courier}
                    onChange={(event) => setCourier(event.target.value as 'regular' | 'same-day')}
                  >
                    <option value="regular">Regular (2-4 hari)</option>
                    <option value="same-day">Same Day (area tertentu)</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="inline-flex items-center gap-2 text-sm text-neutral-700">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-neutral-300"
                      checked={insurance}
                      onChange={(event) => setInsurance(event.target.checked)}
                    />
                    Tambahkan proteksi pengiriman
                  </label>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h2 className="flex items-center gap-2 text-xl font-bold text-black sm:text-2xl">
                <Truck className="h-5 w-5" />
                Ongkir dan Ringkasan
              </h2>
              <p className="mt-2 text-sm text-neutral-500">
                Ongkir otomatis muncul setelah alamat pengiriman diisi.
              </p>

              {addressComplete ? (
                <>
                  <div className="mt-5 space-y-3 text-sm text-neutral-700">
                    <p className="flex items-center justify-between border-b border-neutral-100 pb-2">
                      <span>Subtotal ({qty} item)</span>
                      <span>{formatPrice(subtotal)}</span>
                    </p>
                    <p className="flex items-center justify-between border-b border-neutral-100 pb-2">
                      <span>Ongkir ke {city}</span>
                      <span>{formatPrice(shippingFee)}</span>
                    </p>
                    <p className="flex items-center justify-between border-b border-neutral-100 pb-2">
                      <span>Layanan</span>
                      <span>{courier === 'same-day' ? 'Same Day' : 'Regular'}</span>
                    </p>
                    <p className="flex items-center justify-between text-base font-semibold text-black">
                      <span>Total Belanja</span>
                      <span>{formatPrice(total)}</span>
                    </p>
                  </div>

                  <div className="mt-4 rounded-xl bg-neutral-50 p-4 text-sm text-neutral-600">
                    <p className="font-medium text-black">{recipientName}</p>
                    <p className="mt-1">{phone}</p>
                    <p className="mt-2 leading-relaxed">{address}</p>
                  </div>
                </>
              ) : (
                <div className="mt-5 rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-5 text-sm text-neutral-500">
                  Isi nama penerima, nomor HP, dan alamat lengkap untuk menampilkan ongkir.
                </div>
              )}

              <p className="mt-4 flex items-center gap-2 text-xs text-neutral-500">
                <MapPinned className="h-3.5 w-3.5" />
                Estimasi berubah sesuai kota, kurir, dan proteksi.
              </p>
            </div>
          </div>

          {addressComplete && (
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <h2 className="flex items-center gap-2 text-xl font-bold text-black sm:text-2xl">
                <CreditCard className="h-5 w-5" />
                Pembayaran
              </h2>
              <p className="mt-2 text-sm text-neutral-500">
                Step 3. Pilih metode pembayaran, lalu sistem menampilkan QR atau nomor VA untuk
                seolah-olah transaksi asli.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('qris')}
                  className={cn(
                    'rounded-xl border px-4 py-4 text-left transition',
                    paymentMethod === 'qris'
                      ? 'border-black bg-black text-white'
                      : 'border-neutral-200 bg-white text-black hover:border-neutral-400'
                  )}
                >
                  <div className="flex items-center gap-2">
                    <QrCode className="h-4 w-4" />
                    <span className="text-sm font-semibold">QRIS</span>
                  </div>
                  <p
                    className={cn(
                      'mt-2 text-xs',
                      paymentMethod === 'qris' ? 'text-white/75' : 'text-neutral-500'
                    )}
                  >
                    Tampilkan QR untuk pembayaran instan.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('va')}
                  className={cn(
                    'rounded-xl border px-4 py-4 text-left transition',
                    paymentMethod === 'va'
                      ? 'border-black bg-black text-white'
                      : 'border-neutral-200 bg-white text-black hover:border-neutral-400'
                  )}
                >
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span className="text-sm font-semibold">Virtual Account</span>
                  </div>
                  <p
                    className={cn(
                      'mt-2 text-xs',
                      paymentMethod === 'va' ? 'text-white/75' : 'text-neutral-500'
                    )}
                  >
                    Pilih bank lalu tampilkan nomor VA.
                  </p>
                </button>
              </div>

              {paymentMethod === 'qris' ? (
                <div className="mt-5 rounded-2xl border border-neutral-200 bg-white p-5">
                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start">
                    <div className="grid h-40 w-40 grid-cols-6 gap-1 rounded-xl border border-neutral-200 bg-white p-3">
                      {Array.from({ length: 36 }).map((_, index) => (
                        <span
                          key={index}
                          className={cn(
                            'rounded-[2px]',
                            index % 2 === 0 || index % 5 === 0 ? 'bg-black' : 'bg-white'
                          )}
                        />
                      ))}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                        QRIS Payment
                      </p>
                      <p className="mt-2 text-lg font-bold text-black">{formatPrice(total)}</p>
                      <p className="mt-2 text-sm text-neutral-500">
                        Scan QR ini dengan mobile banking atau e-wallet. Status pembayaran akan
                        berubah setelah simulasi berhasil.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-5 rounded-2xl border border-neutral-200 bg-white p-5">
                  <div className="flex flex-wrap gap-3">
                    {(['bca', 'bni'] as const).map((bank) => (
                      <button
                        key={bank}
                        type="button"
                        onClick={() => setSelectedBank(bank)}
                        className={cn(
                          'rounded-full border px-4 py-2 text-sm font-medium uppercase transition',
                          selectedBank === bank
                            ? 'border-black bg-black text-white'
                            : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:text-black'
                        )}
                      >
                        {bank}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                      {selectedBank} Virtual Account
                    </p>
                    <p className="mt-2 font-mono text-lg font-bold text-black">
                      {vaNumbers[selectedBank]}
                    </p>
                    <p className="mt-2 text-xs text-neutral-500">
                      a.n. GnO Commerce Demo, berlaku 24 jam untuk nominal {formatPrice(total)}.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-neutral-200 bg-white p-3">
                  <p className="text-xs text-neutral-500">Metode</p>
                  <p className="mt-1 text-sm font-semibold text-black">
                    {paymentMethod === 'qris' ? 'QRIS' : `${selectedBank.toUpperCase()} VA`}
                  </p>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-3">
                  <p className="text-xs text-neutral-500">Status</p>
                  <p className="mt-1 text-sm font-semibold text-black">Menunggu pembayaran</p>
                </div>
              </div>

              <button
                type="button"
                className="mt-5 w-full rounded-full bg-black py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Lanjutkan Pembayaran
              </button>
            </div>
          )}
        </section>
      )}

      <section className="mt-12 border-t border-neutral-200 pt-10 sm:mt-16">
        <h2 className="text-xl font-bold text-black sm:text-2xl">Product Description</h2>
        <div className="mt-4 max-w-3xl space-y-4">
          {product.description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-12 border-t border-neutral-200 pt-10 sm:mt-16">
          <h2 className="text-xl font-bold text-black sm:text-2xl">Related Products</h2>
          <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <ProductCard key={item.id} product={item} index={index} />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
