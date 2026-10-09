
import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  HardHat,
  MapPin,
  Menu,
  MessageCircle,
  Mountain,
  PackageCheck,
  Phone,
  ShieldCheck,
  Truck,
  X,
} from 'lucide-react'

// IMPORTANT: Replace this placeholder with the real company WhatsApp number.
// Use 254 followed by the number, without + or the leading zero.
const WHATSAPP_NUMBER = '254706496180'

const IMAGES = {
  logo: '/images/sky-quarry-logo.png',
  background: '/images/quarry-background.jpg',
  stones: '/images/building-stones.jpg',
  cutting: '/images/stone-cutting.jpg',
  delivery: '/images/delivery-truck.jpg',
}

const products = [
  {
    number: '01',
    title: 'Machine-Cut Stones',
    description:
      'Neatly cut building stones for strong walls and clean, consistent finishes.',
    image: IMAGES.stones,
    tag: 'BUILDING',
  },
  {
    number: '02',
    title: 'Foundation Stones',
    description:
      'Dependable stone supply for foundations and demanding construction work.',
    image: IMAGES.cutting,
    tag: 'FOUNDATION',
  },
  {
    number: '03',
    title: 'Bulk Stone Supply',
    description:
      'Organised supply for contractors, property developers and large projects.',
    image: IMAGES.delivery,
    tag: 'PROJECTS',
  },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Quality-focused supply',
    text: 'Stone options selected to suit your construction requirements.',
  },
  {
    icon: Mountain,
    title: 'Cutting expertise',
    text: 'Stone cutting solutions with consistency and precision in mind.',
  },
  {
    icon: Truck,
    title: 'Delivery coordination',
    text: 'Plan transportation around your site location and order requirements.',
  },
]

function WhatsAppLink({
  children,
  className = '',
  message = 'Hello Sky Quarry Investments. I would like to enquire about your building stones.',
}) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  function handleClick(event) {
    if (WHATSAPP_NUMBER.includes('X')) {
      event.preventDefault()
      alert('Please add the real company WhatsApp number in src/App.jsx first.')
    }
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

function CompanyLogo({ footer = false }) {
  return (
    <a
      href="#home"
      className="inline-flex items-center gap-3"
      aria-label="Sky Quarry Investments home"
    >
      <img
        src={IMAGES.logo}
        alt="Sky Quarry Investments logo"
        className={`${footer ? 'h-10 w-10' : 'h-12 w-12'} shrink-0 object-contain`}
      />

      <span>
        <span
          className={`block font-black leading-tight tracking-[-0.06em] ${
            footer ? 'text-sm text-white' : 'text-[17px] text-slate-900'
          }`}
        >
          SKY QUARRY
        </span>
        <span
          className={`mt-1 block text-[9px] font-bold uppercase tracking-[0.24em] ${
            footer ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          Investments
        </span>
      </span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  const links = [
    ['Home', '#home'],
    ['Our stones', '#stones'],
    ['Our process', '#process'],
    ['About us', '#about'],
    ['Contact', '#contact'],
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="container flex h-[76px] items-center justify-between">
        <CompanyLogo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[13px] font-semibold text-slate-600 transition hover:text-[#0055ff]"
            >
              {label}
            </a>
          ))}
        </nav>

        <WhatsAppLink className="hidden items-center gap-2 rounded-lg bg-[#0055ff] px-5 py-3 text-xs font-bold text-white transition hover:bg-blue-700 sm:flex">
          Get a quotation <ArrowRight size={15} />
        </WhatsAppLink>

        <button
          type="button"
          className="rounded-lg border border-slate-200 p-2 text-slate-800 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-b border-slate-100 py-3 text-sm font-semibold text-slate-700"
            >
              {label}
            </a>
          ))}

          <WhatsAppLink className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#0055ff] px-4 py-3 text-sm font-bold text-white">
            Request a quotation <ArrowRight size={16} />
          </WhatsAppLink>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="blueprint-grid relative overflow-hidden">
      <div className="container grid min-h-[610px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
        <div className="reveal-up relative z-10">
          <div className="eyebrow">STONE SUPPLY Â· CUTTING Â· DELIVERY</div>

          <h1 className="mt-6 max-w-2xl text-[clamp(44px,6.4vw,76px)] font-black leading-[.99] tracking-[-.075em] text-[#17243a]">
            Built on stone.
            <br />
            <span className="text-[#0055ff]">Driven by</span>
            <br />
            <span className="relative inline-block">
              reliability.
              <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#ffc700]" />
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-[15px] leading-8 text-slate-600">
            The right stones make a stronger start. We help homeowners, fundis
            and contractors source building stones, arrange cutting and
            coordinate delivery to site.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#stones"
              className="inline-flex items-center gap-3 rounded-lg bg-[#0055ff] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/15 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Explore our stones <ArrowRight size={17} />
            </a>

            <WhatsAppLink className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-800 transition hover:border-[#0055ff] hover:text-[#0055ff]">
              <MessageCircle size={17} /> Get a quote
            </WhatsAppLink>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-6 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#0055ff]" />
              Construction-focused
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#0055ff]" />
              Delivery coordination
            </span>
          </div>
        </div>

        <div className="reveal-up relative mx-auto w-full max-w-[550px]">
          <div className="absolute -right-4 -top-4 h-28 w-28 border-r-4 border-t-4 border-[#ffc700]" />

          <div
            className="hero-image relative min-h-[390px] overflow-hidden rounded-2xl bg-slate-300 shadow-2xl shadow-slate-900/15 sm:min-h-[470px]"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(11,25,49,.02) 30%, rgba(11,25,49,.78) 100%), url('${IMAGES.background}')`,
            }}
          >
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-md bg-white/95 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.15em] text-slate-800">
              <span className="h-2 w-2 rounded-full bg-[#0055ff]" />
              Materials for your next build
            </div>

            <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/20 bg-slate-950/70 p-5 text-white backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#ffc700]">
                    From supply to site
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                    Your build starts here.
                  </h2>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ffc700] text-slate-950 sm:flex">
                  <ArrowDownRight size={25} />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 bg-[#0055ff]" />
        </div>
      </div>
    </section>
  )
}

function TrustStrip() {
  const items = [
    { icon: PackageCheck, title: 'Stone supply', text: 'For different build needs' },
    { icon: HardHat, title: 'Cutting solutions', text: 'Based on your specifications' },
    { icon: Truck, title: 'Transport planning', text: 'Coordinated to your site' },
    { icon: Clock3, title: 'Responsive service', text: 'Clear quotation process' },
  ]

  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="container grid grid-cols-2 divide-x divide-y divide-slate-200 sm:grid-cols-4 sm:divide-y-0">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-3 px-3 py-6 sm:px-5 sm:py-7">
            <Icon size={21} className="mt-1 shrink-0 text-[#0055ff]" />
            <div>
              <p className="text-xs font-extrabold text-slate-900">{title}</p>
              <p className="mt-1 text-[10px] leading-5 text-slate-500">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Products({ onSelect }) {
  return (
    <section id="stones" className="section-space bg-white">
      <div className="container">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="eyebrow">WHAT WE SUPPLY</div>
            <h2 className="section-title max-w-2xl">
              The materials behind <br className="hidden sm:block" />
              every solid beginning.
            </h2>
          </div>
          <p className="section-copy md:max-w-sm">
            Tell us what you are building. We will help you discuss suitable
            stone options, quantities and delivery requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.number}
              className="product-card group overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
            >
              <div className="relative h-[230px] overflow-hidden bg-slate-200">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="product-image absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded bg-white px-3 py-2 text-[9px] font-extrabold tracking-[.15em] text-[#0055ff]">
                  {product.tag}
                </span>
                <span className="absolute bottom-3 right-4 text-4xl font-black tracking-[-.08em] text-white/70">
                  {product.number}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
                  {product.title}
                </h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                  {product.description}
                </p>
                <button
                  type="button"
                  onClick={() => onSelect(product.title)}
                  className="mt-5 flex w-full items-center justify-between border-t border-slate-100 pt-4 text-left text-xs font-extrabold text-[#0055ff] transition group-hover:text-blue-800"
                >
                  Enquire about this <ChevronRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-xs leading-6 text-slate-400">
          Product categories shown for enquiry purposes. Confirm available stone
          types, dimensions and specifications with the company.
        </p>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    ['01', 'Tell us your needs', 'Share your stone type, approximate quantity and project requirements.'],
    ['02', 'Get your quotation', 'Discuss material availability, cutting needs, pricing and transport.'],
    ['03', 'Coordinate delivery', 'Agree on the delivery location and schedule before confirming your order.'],
  ]

  return (
    <section id="process" className="section-space blueprint-grid">
      <div className="container">
        <div className="text-center">
          <div className="eyebrow">SIMPLE. PRACTICAL. CLEAR.</div>
          <h2 className="section-title">From quarry to construction site.</h2>
          <p className="section-copy mx-auto">
            A straightforward way to start your next building-materials order.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map(([number, title, description]) => (
            <div
              key={number}
              className="relative rounded-xl border border-slate-200 bg-white p-7 sm:p-8"
            >
              <span className="text-4xl font-black tracking-[-.08em] text-[#0055ff]/20">
                {number}
              </span>
              <h3 className="mt-5 text-xl font-extrabold tracking-tight text-slate-900">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{description}</p>
              {number !== '03' && (
                <ArrowRight className="absolute right-6 top-9 hidden text-[#ffc700] md:block" size={20} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section-space bg-[#17243a] text-white">
      <div className="container grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div className="relative">
          <div className="absolute -left-3 -top-3 h-16 w-16 border-l-4 border-t-4 border-[#ffc700]" />
          <img
            src={IMAGES.cutting}
            alt="Stone cutting and construction materials"
            className="h-[340px] w-full rounded-xl object-cover sm:h-[410px]"
            loading="lazy"
          />
          <div className="absolute -bottom-4 right-4 rounded-lg bg-[#ffc700] px-5 py-4 text-slate-950 sm:right-7">
            <p className="text-xs font-black uppercase tracking-wider">Building with purpose</p>
            <p className="mt-1 text-[10px] font-semibold">One project at a time</p>
          </div>
        </div>

        <div className="pt-3 lg:pl-4">
          <div className="eyebrow !text-[#ffc700]">ABOUT SKY QUARRY INVESTMENTS</div>
          <h2 className="mt-5 text-4xl font-black leading-[1.07] tracking-[-.06em] sm:text-5xl">
            Strong materials.
            <br />
            <span className="text-[#ffc700]">Stronger partnerships.</span>
          </h2>
          <p className="mt-6 text-sm leading-8 text-slate-300">
            Sky Quarry Investments focuses on helping construction customers
            source building stones, access cutting services and organise
            transportation. Our goal is to make the material-sourcing process
            clearer and more convenient for every project.
          </p>

          <div className="mt-8 space-y-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#ffc700]">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="text-sm font-bold">{title}</h3>
                  <p className="mt-1 text-xs leading-6 text-slate-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact({ initialProduct }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    product: initialProduct || 'Machine-Cut Stones',
    quantity: '',
    location: '',
    details: '',
  })

  function update(event) {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
  }

  function submit(event) {
    event.preventDefault()

    if (WHATSAPP_NUMBER.includes('X')) {
      alert('Replace 2547XXXXXXXX in src/App.jsx with the company WhatsApp number first.')
      return
    }

    const message = [
      'Hello Sky Quarry Investments. I would like a quotation.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Product: ${form.product}`,
      `Estimated quantity: ${form.quantity || 'Please advise'}`,
      `Delivery location: ${form.location}`,
      `Additional details: ${form.details || 'None'}`,
    ].join('\n')

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section id="contact" className="section-space bg-[#f4f7fb]">
      <div className="container grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28">
          <div className="eyebrow">LET'S DISCUSS YOUR PROJECT</div>
          <h2 className="section-title">Your next build starts with a conversation.</h2>
          <p className="section-copy">
            Share a few details and send your enquiry directly to our WhatsApp.
            We can discuss the stone requirements and delivery arrangements with you.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-[#0055ff]">
                <MessageCircle size={21} />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">WhatsApp enquiries</p>
                <p className="mt-1 text-xs text-slate-500">Send project details directly</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50 text-[#8c6512]">
                <MapPin size={21} />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">Delivery planning</p>
                <p className="mt-1 text-xs text-slate-500">Tell us where your project is located</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-8"
        >
          <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#0055ff]">
                Quotation request
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-900">
                Tell us about your order.
              </h3>
            </div>
            <span className="hidden h-12 w-12 items-center justify-center rounded-xl bg-[#0055ff] text-[#ffc700] sm:flex">
              <PackageCheck size={24} />
            </span>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="text-xs font-bold text-slate-700">
              Your name *
              <input
                required
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Enter your name"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-[#0055ff] focus:ring-2 focus:ring-blue-100"
              />
            </label>

            <label className="text-xs font-bold text-slate-700">
              Your phone number
              <input
                name="phone"
                value={form.phone}
                onChange={update}
                placeholder="07XX XXX XXX"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-[#0055ff] focus:ring-2 focus:ring-blue-100"
              />
            </label>

            <label className="text-xs font-bold text-slate-700 sm:col-span-2">
              What do you need? *
              <select
                required
                name="product"
                value={form.product}
                onChange={update}
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-[#0055ff]"
              >
                <option>Machine-Cut Stones</option>
                <option>Foundation Stones</option>
                <option>Bulk Stone Supply</option>
                <option>Stone Cutting</option>
                <option>Transport / Delivery</option>
                <option>Other / Not Sure</option>
              </select>
            </label>

            <label className="text-xs font-bold text-slate-700">
              Estimated quantity
              <input
                name="quantity"
                value={form.quantity}
                onChange={update}
                placeholder="e.g. 2,000 stones"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-[#0055ff]"
              />
            </label>

            <label className="text-xs font-bold text-slate-700">
              Delivery location *
              <input
                required
                name="location"
                value={form.location}
                onChange={update}
                placeholder="Town or project location"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-[#0055ff]"
              />
            </label>

            <label className="text-xs font-bold text-slate-700 sm:col-span-2">
              More about your project
              <textarea
                name="details"
                value={form.details}
                onChange={update}
                rows={3}
                placeholder="Stone dimensions, project type, delivery timing..."
                className="mt-2 w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-[#0055ff]"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg bg-[#0055ff] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-blue-700"
          >
            Send quotation request <MessageCircle size={18} />
          </button>

          <p className="mt-3 text-center text-[10px] leading-5 text-slate-400">
            Your details will be placed in a WhatsApp message for you to send.
          </p>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#101b2d] text-white">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.3fr_.7fr_1fr]">
        <div>
          <CompanyLogo footer />
          <p className="mt-5 max-w-sm text-xs leading-7 text-slate-400">
            Building-materials supply, stone cutting and transport coordination
            for your next construction project.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#ffc700]">
            Explore
          </h3>
          <div className="mt-4 space-y-3 text-xs text-slate-400">
            <a className="block transition hover:text-white" href="#stones">Our stones</a>
            <a className="block transition hover:text-white" href="#process">Our process</a>
            <a className="block transition hover:text-white" href="#about">About us</a>
            <a className="block transition hover:text-white" href="#contact">Request a quote</a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#ffc700]">
            Let's build
          </h3>
          <p className="mt-4 text-xs leading-6 text-slate-400">
            Have a project coming up? Start a conversation about your materials
            and delivery needs.
          </p>
          <WhatsAppLink className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-xs font-bold transition hover:border-[#ffc700] hover:text-[#ffc700]">
            <Phone size={15} /> Contact us <ArrowRight size={15} />
          </WhatsAppLink>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col justify-between gap-2 py-5 text-[10px] text-slate-500 sm:flex-row">
          <span>Â© {new Date().getFullYear()} Sky Quarry Investments. All rights reserved.</span>
          <span>Built for stronger beginnings.</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState('Machine-Cut Stones')

  function selectProduct(product) {
    setSelectedProduct(product)
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header />

      <main>
        <Hero />
        <TrustStrip />
        <Products onSelect={selectProduct} />
        <Process />
        <About />
        <Contact key={selectedProduct} initialProduct={selectedProduct} />
      </main>

      <Footer />

      <WhatsAppLink
        message="Hello Sky Quarry Investments. I would like to discuss a building stone order."
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#16a34a] text-white shadow-xl shadow-green-900/25 transition hover:scale-105"
      >
        <MessageCircle size={26} />
        <span className="sr-only">Contact us on WhatsApp</span>
      </WhatsAppLink>
    </>
  )
}

