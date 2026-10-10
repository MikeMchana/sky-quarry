import { useState } from 'react';

const WHATSAPP_NUMBER = '254706496180';

const IMAGES= {
  logo: '/images/sky-quarry-logo.webp',
  background: '/images/quarry-background.webp',
  stones: '/images/building-stones.webp',
  cutting: '/images/stone-cutting.webp',
  delivery: '/images/delivery-truck.webp',
}

const products = [
  {
    id: 'machine-cut-stones',
    title: 'Machine-Cut Stones',
    description:
      'Quality machine-cut building stones for residential, commercial, and other construction projects.',
    image: IMAGES.stones,
    number: '01',
  },
  {
    id: 'stone-cutting',
    title: 'Stone Cutting',
    description:
      'Stone cutting solutions to help meet your construction material requirements.',
    image: IMAGES.cutting,
    number: '02',
  },
  {
    id: 'stone-delivery',
    title: 'Stone Supply & Delivery',
    description:
      'Discuss your stone quantities, project needs, and delivery arrangements with our team.',
    image: IMAGES.delivery,
    number: '03',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description:
      'Share your preferred stone type, quantity, delivery location, and project requirements.',
  },
  {
    number: '02',
    title: 'Request a Quotation',
    description:
      'Contact our team to discuss pricing, availability, quantities, and delivery arrangements.',
  },
  {
    number: '03',
    title: 'Arrange Your Delivery',
    description:
      'Confirm your order details and coordinate delivery with our team.',
  },
];

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Our Products', href: '#products' },
  { label: 'Our Process', href: '#process' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function ArrowRight({ className = 'h-5 w-5' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path
        d="M5 12h14M12 5l7 7-7 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.16 1.6 5.98L.06 24l6.27-1.64a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.44-8.44ZM12.06 21.8h-.01a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.72.97.99-3.63-.23-.37a9.85 9.85 0 0 1-1.51-5.29c0-5.46 4.44-9.9 9.9-9.9a9.83 9.83 0 0 1 7.01 2.91 9.83 9.83 0 0 1 2.9 7.01c0 5.46-4.44 9.88-9.94 9.88Zm5.43-7.4c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.23 5.14 4.53.72.31 1.28.5 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  );
}

function CompanyLogo({ light = false }) {
  return (
    <a
      href="#home"
      aria-label="Sky Quarry Investments home"
      className="flex items-center gap-3"
    >
      <img
        src={IMAGES.logo}
        alt="Sky Quarry Investments logo"
        className="h-12 w-12 shrink-0 rounded-lg object-contain"
      />

      <span>
        <span
          className={`block text-base font-extrabold leading-tight tracking-tight ${
            light ? 'text-white' : 'text-slate-950'
          }`}
        >
          SKY QUARRY
        </span>

        <span
          className={`mt-1 block text-[10px] font-bold uppercase tracking-[0.22em] ${
            light ? 'text-slate-300' : 'text-slate-500'
          }`}
        >
          Investments
        </span>
      </span>
    </a>
  );
}

function WhatsAppLink({ children, className = '', message = '' }) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}${
    message ? `?text=${encodeURIComponent(message)}` : ''
  }`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <div
      data-aos="fade-up"
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      <p
        className={`mb-3 text-xs font-extrabold uppercase tracking-[0.22em] ${
          light ? 'text-[#FFC700]' : 'text-[#0055FF]'
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-slate-950'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-7 ${
            light ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    product: '',
    quantity: '',
    location: '',
    details: '',
  });

  const [formError, setFormError] = useState('');

  const update = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (formError) {
      setFormError('');
    }
  };

  const closeMenu = () => setMenuOpen(false);

  const selectProduct = (productTitle) => {
    setForm((previous) => ({
      ...previous,
      product: productTitle,
    }));

    setMenuOpen(false);

    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    setFormError('');

    const phoneDigits = form.phone.replace(/\D/g, '');

    if (phoneDigits.length < 7) {
      setFormError('Please enter a valid phone number.');
      return;
    }

    const message = [
      'Hello Sky Quarry Investments,',
      '',
      'I would like to request a quotation.',
      '',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Product: ${form.product || 'Not specified'}`,
      `Quantity: ${form.quantity.trim() || 'Not specified'}`,
      `Delivery location: ${form.location.trim() || 'Not specified'}`,
      `Additional details: ${form.details.trim() || 'None provided'}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-slate-900">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <CompanyLogo />

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 lg:flex"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-600 transition hover:text-[#0055FF]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <WhatsAppLink
            className="hidden items-center gap-2 rounded-lg bg-[#0055FF] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0047D6] sm:inline-flex"
            message="Hello Sky Quarry Investments, I would like a quotation for building stones."
          >
            Get a Quotation
            <ArrowRight />
          </WhatsAppLink>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-800 transition hover:bg-slate-100 lg:hidden"
          >
            {menuOpen ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <path
                  d="m6 6 12 12M18 6 6 18"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-slate-200 bg-white px-4 py-3 shadow-lg lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-[#0055FF]"
                >
                  {item.label}
                </a>
              ))}

              <WhatsAppLink
                className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#0055FF] px-4 py-3 text-sm font-bold text-white"
                message="Hello Sky Quarry Investments, I would like a quotation for building stones."
              >
                <WhatsAppIcon />
                Get a Quotation
              </WhatsAppLink>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative isolate flex min-h-[590px] scroll-mt-24 items-center overflow-hidden bg-slate-950 sm:min-h-[650px]"
        >
          <img
            src={IMAGES.background}
            alt="Quarry landscape and stone supply operations"
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/35" />

          <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div
              data-aos="fade-up"
              className="max-w-3xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#FFC700]" />
                STONE SUPPLY · CUTTING · DELIVERY
              </div>

              <h1 className="text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Building Stronger
                <span className="mt-2 block text-[#FFC700]">
                  Foundations.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Your construction starts with quality building stones. Sky
                Quarry Investments provides stone supply solutions for
                residential, commercial, and other construction projects.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#products"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#0055FF] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#0047D6]"
                >
                  Explore Our Products
                  <ArrowRight />
                </a>

                <WhatsAppLink
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                  message="Hello Sky Quarry Investments, I would like to discuss my construction stone requirements."
                >
                  <WhatsAppIcon />
                  Talk to Our Team
                </WhatsAppLink>
              </div>

              <div className="mt-12 grid max-w-xl grid-cols-1 gap-5 border-t border-white/20 pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-sm font-bold text-white">
                    Quality-focused
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    Stone supply for construction
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Project solutions
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    Options for different needs
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Direct enquiries
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    Discuss your order with us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEY BENEFITS */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              className="flex items-start gap-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0055FF]/5 text-[#0055FF]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                >
                  <path
                    d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"
                    strokeLinejoin="round"
                  />
                  <path d="m4.5 7.7 7.5 4.4 7.5-4.4M12 12.1V21" />
                </svg>
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  Building Stone Supply
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Explore stone options for your construction project.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex items-start gap-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0055FF]/5 text-[#0055FF]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                >
                  <path
                    d="M3 7h11v10H3zM14 10h4l3 4v3h-7z"
                    strokeLinejoin="round"
                  />
                  <circle cx="7.5" cy="18" r="1.5" />
                  <circle cx="17.5" cy="18" r="1.5" />
                </svg>
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  Delivery Coordination
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Discuss quantities and delivery arrangements with our team.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex items-start gap-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0055FF]/5 text-[#0055FF]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                >
                  <path
                    d="M12 3 20 6v5c0 5-3.4 8-8 10-4.6-2-8-5-8-10V6l8-3Z"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m8.5 12 2.3 2.3 4.7-4.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <h2 className="font-bold text-slate-900">
                  Customer Support
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Contact us to discuss your specific stone requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section
          id="products"
          className="scroll-mt-24 bg-slate-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="What We Supply"
              title="Stone Solutions for Your Project"
              description="Explore our stone supply and cutting options. Contact us to discuss availability, quantities, pricing, and delivery."
            />

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-delay={Number(product.number) * 100}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-60 overflow-hidden bg-slate-200">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />

                    <span className="absolute bottom-4 left-5 text-sm font-extrabold tracking-[0.18em] text-white">
                      {product.number}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-slate-950">
                      {product.title}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                      {product.description}
                    </p>

                    <button
                      type="button"
                      onClick={() => selectProduct(product.title)}
                      className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#0055FF] transition hover:text-[#003DB8]"
                    >
                      Enquire About This Product
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div
              data-aos="fade-up"
              className="mt-10 text-center"
            >
              <p className="text-sm text-slate-600">
                Looking for something specific?
              </p>

              <a
                href="#contact"
                className="mt-2 inline-flex min-h-11 items-center gap-2 font-bold text-[#0055FF] hover:text-[#003DB8]"
              >
                Tell Us About Your Project
                <ArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="process"
          className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="How It Works"
              title="From Enquiry to Delivery"
              description="A straightforward process to help you communicate your requirements and plan your stone order."
            />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  data-aos="fade-up"
                  data-aos-delay={Number(step.number) * 100}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-[#0055FF]/40 hover:shadow-lg"
                >
                  <span className="text-5xl font-black tracking-tight text-white/90">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-extrabold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <div
              data-aos="fade-up"
              className="mt-10 flex justify-center"
            >
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-slate-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-[#0047D6]"
              >
                Start Your Enquiry
                <ArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT US */}
        <section
          id="about"
          className="scroll-mt-24 overflow-hidden bg-slate-950"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div
              data-aos="fade-right"
              className="relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-[540px]"
            >
              <img
                src={IMAGES.cutting}
                alt="Stone cutting work for construction materials"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-slate-950/20" />
            </div>

            <div
              data-aos="fade-left"
              className="flex items-center px-5 py-14 sm:px-10 sm:py-16 lg:px-14"
            >
              <div className="max-w-xl">
                <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-[#FFC700]">
                  About Sky Quarry Investments
                </p>

                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                  Supporting Your Construction Journey
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-300">
                  Sky Quarry Investments focuses on building stone supply and
                  helping customers communicate their construction material
                  requirements clearly.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-300">
                  Whether you are planning a home, commercial building, or
                  another construction project, our team is available to
                  discuss your stone requirements and delivery arrangements.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFC700]/15 text-[#FFC700]">
                      <span className="text-sm font-bold">✓</span>
                    </span>

                    <p className="text-sm leading-6 text-slate-200">
                      Enquiries for different construction stone requirements.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFC700]/15 text-[#FFC700]">
                      <span className="text-sm font-bold">✓</span>
                    </span>

                    <p className="text-sm leading-6 text-slate-200">
                      Quotation requests based on your project needs.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFC700]/15 text-[#FFC700]">
                      <span className="text-sm font-bold">✓</span>
                    </span>

                    <p className="text-sm leading-6 text-slate-200">
                      Direct communication to discuss orders and delivery.
                    </p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#0055FF] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#0047D6]"
                >
                  Contact Our Team
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="bg-[#0055FF] px-4 py-16 sm:px-6 lg:px-8">
          <div
            data-aos="fade-up"
            className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#FFC700]">
                Planning Your Next Project?
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Let's Discuss Your Stone Requirements.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/90">
                Tell us what you need, how much you require, and where your
                project is located.
              </p>
            </div>

            <WhatsAppLink
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-lg bg-white px-6 py-4 text-sm font-extrabold text-[#0055FF] transition hover:bg-[#0055FF]/5"
              message="Hello Sky Quarry Investments, I would like to discuss a quotation for my construction project."
            >
              <WhatsAppIcon />
              Request a Quotation
              <ArrowRight />
            </WhatsAppLink>
          </div>
        </section>

        {/* CONTACT AND QUOTATION FORM */}
        <section
          id="contact"
          className="scroll-mt-24 bg-slate-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Get In Touch"
              title="Request a Quotation"
              description="Complete the form below. Your enquiry will be prepared in WhatsApp so you can review and send it directly to our team."
            />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
              {/* CONTACT DETAILS */}
              <div
                data-aos="fade-right"
                className="lg:col-span-2"
              >
                <div className="rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
                  <h3 className="text-2xl font-extrabold">
                    Let's Talk Business
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Have questions about our stone supply, pricing, or
                    delivery? Reach out to discuss your requirements.
                  </p>

                  <div className="mt-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#FFC700]">
                        <WhatsAppIcon />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          WhatsApp
                        </p>

                        <WhatsAppLink
                          className="mt-1 inline-block text-sm font-semibold text-white hover:text-[#FFC700]"
                          message="Hello Sky Quarry Investments, I would like to make an enquiry."
                        >
                          Chat With Our Team
                        </WhatsAppLink>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#FFC700]">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-5 w-5"
                        >
                          <path
                            d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
                            strokeLinejoin="round"
                          />
                          <circle cx="12" cy="9" r="2.5" />
                        </svg>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Service Location
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">
                          Contact us to discuss your delivery location.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#FFC700]">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-5 w-5"
                        >
                          <path
                            d="M4 5h16v14H4z"
                            strokeLinejoin="round"
                          />
                          <path
                            d="m4 7 8 6 8-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Enquiries
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">
                          Building stones and construction supplies
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-white/15 pt-6">
                    <p className="text-sm leading-6 text-slate-300">
                      For a faster quotation, include your stone type,
                      estimated quantity, and delivery location.
                    </p>
                  </div>
                </div>
              </div>

              {/* QUOTATION FORM */}
              <div
                data-aos="fade-left"
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:col-span-3"
              >
                <h3 className="text-xl font-extrabold text-slate-950">
                  Your Project Details
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Fields marked with * are required.
                </p>

                <form onSubmit={submitForm} className="mt-7 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <label className="block text-sm font-bold text-slate-700">
                      Your Full Name *
                      <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        value={form.name}
                        onChange={update}
                        placeholder="Enter your full name"
                        required
                        maxLength={100}
                        className="mt-2 min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base font-normal outline-none transition placeholder:text-slate-400 focus:border-[#0055FF] focus:ring-2 focus:ring-[#0055FF]/20"
                      />
                    </label>

                    <label className="block text-sm font-bold text-slate-700">
                      Your Phone Number *
                      <input
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        name="phone"
                        value={form.phone}
                        onChange={update}
                        placeholder="07XX XXX XXX"
                        required
                        minLength={7}
                        maxLength={25}
                        className="mt-2 min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base font-normal outline-none transition placeholder:text-slate-400 focus:border-[#0055FF] focus:ring-2 focus:ring-[#0055FF]/20"
                      />
                    </label>
                  </div>

                  <label className="block text-sm font-bold text-slate-700">
                    Product or Service *
                    <select
                      name="product"
                      value={form.product}
                      onChange={update}
                      required
                      className="mt-2 min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-[#0055FF] focus:ring-2 focus:ring-[#0055FF]/20"
                    >
                      <option value="">Select a product or service</option>
                      {products.map((product) => (
                        <option key={product.id} value={product.title}>
                          {product.title}
                        </option>
                      ))}
                      <option value="Other construction stone requirements">
                        Other construction stone requirements
                      </option>
                    </select>
                  </label>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <label className="block text-sm font-bold text-slate-700">
                      Estimated Quantity
                      <input
                        type="text"
                        name="quantity"
                        value={form.quantity}
                        onChange={update}
                        placeholder="e.g. 1,000 stones"
                        maxLength={100}
                        className="mt-2 min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base font-normal outline-none transition placeholder:text-slate-400 focus:border-[#0055FF] focus:ring-2 focus:ring-[#0055FF]/20"
                      />
                    </label>

                    <label className="block text-sm font-bold text-slate-700">
                      Delivery Location
                      <input
                        type="text"
                        name="location"
                        autoComplete="shipping locality"
                        value={form.location}
                        onChange={update}
                        placeholder="Town or project location"
                        maxLength={150}
                        className="mt-2 min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base font-normal outline-none transition placeholder:text-slate-400 focus:border-[#0055FF] focus:ring-2 focus:ring-[#0055FF]/20"
                      />
                    </label>
                  </div>

                  <label className="block text-sm font-bold text-slate-700">
                    Additional Information
                    <textarea
                      name="details"
                      value={form.details}
                      onChange={update}
                      rows={4}
                      maxLength={1500}
                      placeholder="Tell us about your project, preferred delivery date, or other requirements."
                      className="mt-2 w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-base font-normal outline-none transition placeholder:text-slate-400 focus:border-[#0055FF] focus:ring-2 focus:ring-[#0055FF]/20"
                    />
                  </label>

                  {formError && (
                    <p
                      role="alert"
                      className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700"
                    >
                      {formError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-[#0055FF] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#0047D6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0055FF]"
                  >
                    <WhatsAppIcon />
                    Send Enquiry Through WhatsApp
                    <ArrowRight />
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-500">
                    WhatsApp will open with your enquiry prepared. Review the
                    message and press Send in WhatsApp to submit it.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div data-aos="fade-up">
              <CompanyLogo light />

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                Building stone supply and construction material solutions
                for your project. Contact Sky Quarry Investments to discuss
                your requirements.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                Quick Links
              </h3>

              <nav
                aria-label="Footer navigation"
                className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3"
              >
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                Contact Our Team
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Have a construction project in mind? Send us your requirements
                and request a quotation.
              </p>

              <WhatsAppLink
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#0055FF] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#0047D6]"
                message="Hello Sky Quarry Investments, I would like to make an enquiry about your products and services."
              >
                <WhatsAppIcon />
                Chat on WhatsApp
                <ArrowRight />
              </WhatsAppLink>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Sky Quarry Investments. All rights
              reserved.
            </p>

            <a
              href="#home"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              Back to Top
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppLink
        message="Hello Sky Quarry Investments, I would like to make an enquiry."
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl transition hover:scale-105 hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 sm:bottom-7 sm:right-7"
      >
        <WhatsAppIcon className="h-7 w-7" />
        <span className="sr-only">Contact us on WhatsApp</span>
      </WhatsAppLink>
    </div>
  );
}

export default App;
