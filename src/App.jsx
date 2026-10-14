import { useState } from 'react';

const WHATSAPP_NUMBER = '254706496180';

const IMAGES = {
  logo: '/images/sky-quarry-logo.webp',
  background: '/images/quarry-background.webp',
  manualCut1: '/images/ManualCut1.jpg',
  manualCut2: '/images/ManualCut2.jpg',
  delivery: '/images/delivery-truck.webp',
};

const FACEBOOK_URL =
  'https://web.facebook.com/skyquarrystones?mibextid=%20ZbWKwl&_rdc=1&_rdr';

const products = [
  {
    id: 'manual-cut-building-stones',
    title: 'Manual-Cut Building Stones',
    description:
      'Explore building stones for residential, commercial, and other construction projects.',
    image: IMAGES.manualCut1,
    number: '01',
    tag: 'Building Materials',
  },
  {
    id: 'manual-cut-stone-options',
    title: 'Stone Options for Your Project',
    description:
      'Discuss available stone options, estimated quantities, and requirements with our team.',
    image: IMAGES.manualCut2,
    number: '02',
    tag: 'Project Enquiries',
  },
  {
    id: 'stone-supply-delivery',
    title: 'Stone Supply & Delivery',
    description:
      'Share your order requirements and project location to discuss delivery arrangements.',
    image: IMAGES.delivery,
    number: '03',
    tag: 'Order Coordination',
  },
];

const services = [
  {
    number: '01',
    title: 'Building Stone Supply',
    description:
      'Discuss the building stones you need and the requirements of your construction project.',
    icon: 'stone',
  },
  {
    number: '02',
    title: 'Quotation Enquiries',
    description:
      'Share your estimated quantity and project details to discuss pricing and availability.',
    icon: 'quote',
  },
  {
    number: '03',
    title: 'Delivery Coordination',
    description:
      'Provide your project location and order details to discuss suitable delivery arrangements.',
    icon: 'delivery',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Share Your Requirements',
    description:
      'Tell us the stone type, estimated quantity, project location, and any special requirements.',
  },
  {
    number: '02',
    title: 'Discuss Your Quotation',
    description:
      'Contact our team to discuss pricing, availability, quantities, and delivery arrangements.',
  },
  {
    number: '03',
    title: 'Coordinate Your Order',
    description:
      'Review the order details with our team and discuss the next steps for your project.',
  },
];

const faqs = [
  {
    question: 'What types of building stones do you supply?',
    answer:
      'Sky Quarry Investments focuses on manual-cut building stones. Contact our team to discuss the stone options currently available for your project.',
  },
  {
    question: 'How do I request a quotation?',
    answer:
      'Complete the quotation form on this website. Your details will be prepared in WhatsApp so you can review the enquiry and send it to our team.',
  },
  {
    question: 'What information should I provide?',
    answer:
      'If possible, include your preferred stone type, estimated quantity, project location, and any additional requirements.',
  },
  {
    question: 'Do you arrange delivery?',
    answer:
      'You can discuss delivery arrangements with our team. Share your project location and order details so available options can be confirmed.',
  },
  {
    question: 'Can I enquire about a large construction project?',
    answer:
      'Yes. Use the quotation form to describe your project, estimated quantity, and location. Our team can then discuss your requirements.',
  },
];

const navigation = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/#products' },
  { label: 'Services', href: '/#services' },
  { label: 'FAQs', href: '/#faqs' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/#contact' },
];

function ArrowRight({ className = 'h-5 w-5' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
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

function MenuIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
    >
      {open ? (
        <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

function CompanyLogo() {
  return (
    <a
      href="/#home"
      aria-label="Sky Quarry Investments home"
      className="inline-flex shrink-0 items-center rounded-lg bg-white p-1 transition hover:opacity-90"
    >
      <img
        src={IMAGES.logo}
        alt="Sky Quarry Investments — For Quality Stones"
        className="h-auto w-[108px] object-contain sm:w-[124px]"
      />
    </a>
  );
}

function WhatsAppLink({
  children,
  className = '',
  message = '',
  onClick,
  label,
}) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}${
    message ? `?text=${encodeURIComponent(message)}` : ''
  }`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={onClick}
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
  align = 'center',
}) {
  return (
    <div
      data-aos="fade-up"
      className={`mb-12 max-w-3xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      }`}
    >
      <p
        className={`mb-4 inline-flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.19em] ${
          light ? 'text-[#FFBF00]' : 'text-[#0055FF]'
        }`}
      >
        <span className="h-[3px] w-6 rounded-full bg-[#FFBF00]" />
        {eyebrow}
      </p>

      <h2
        className={`text-3xl font-black leading-[1.12] tracking-tight sm:text-4xl lg:text-[46px] ${
          light ? 'text-white' : 'text-slate-950'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-sm leading-7 sm:text-base sm:leading-8 ${
            light ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function ServiceIcon({ type, className = 'h-6 w-6' }) {
  if (type === 'delivery') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={className}
      >
        <path d="M2.5 6.5h12v11h-12zM14.5 10h4l3 3.5v4h-7z" />
        <circle cx="6.5" cy="19" r="1.5" />
        <circle cx="18" cy="19" r="1.5" />
      </svg>
    );
  }

  if (type === 'quote') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className={className}
      >
        <path d="M7 3.5h10a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
        <path d="M9 8h6M9 12h6M9 16h3" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
    >
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4.5 7.7 7.5 4.4 7.5-4.4M12 12.1V21" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [formError, setFormError] = useState('');

  const [form, setForm] = useState({
    name: '',
    phone: '',
    product: '',
    quantity: '',
    location: '',
    details: '',
  });

  const update = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (formError) setFormError('');
  };

  const closeMenu = () => setMenuOpen(false);

  const selectProduct = (productTitle) => {
    setForm((previous) => ({
      ...previous,
      product: productTitle,
    }));

    closeMenu();

    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    setFormError('');

    if (!form.name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }

    if (form.phone.replace(/\D/g, '').length < 7) {
      setFormError('Please enter a valid phone number.');
      return;
    }

    if (!form.product) {
      setFormError('Please select a product or service.');
      return;
    }

    const message = [
      'Hello Sky Quarry Investments,',
      '',
      'I would like to request a quotation.',
      '',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Product or service: ${form.product}`,
      `Estimated quantity: ${form.quantity.trim() || 'Not specified'}`,
      `Delivery location: ${form.location.trim() || 'Not specified'}`,
      `Additional details: ${form.details.trim() || 'None provided'}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    const newWindow = window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer',
    );

    if (!newWindow) {
      setFormError(
        'Your browser blocked the WhatsApp window. Please allow pop-ups and submit the form again.',
      );
    }
  };

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 3);

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-slate-900">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_3px_18px_rgba(15,23,42,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex min-h-[74px] max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <CompanyLogo />

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-4 xl:flex 2xl:gap-6"
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative py-3 text-[13px] font-bold text-slate-600 transition-colors hover:text-[#0055FF]"
              >
                {item.label}
                <span className="absolute bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#FFBF00] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <WhatsAppLink
            className="hidden min-h-11 items-center gap-2 rounded-lg bg-[#0055FF] px-4 py-3 text-sm font-extrabold text-white shadow-[0_5px_15px_rgba(0,85,255,0.17)] transition hover:-translate-y-0.5 hover:bg-[#003DB8] hover:shadow-lg lg:inline-flex"
            message="Hello Sky Quarry Investments, I would like a quotation for manual-cut building stones."
          >
            <WhatsAppIcon />
            Get a Quotation
          </WhatsAppLink>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:border-[#0055FF]/30 hover:bg-blue-50 xl:hidden"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-slate-200 bg-white px-4 py-4 shadow-xl xl:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-blue-50 hover:text-[#0055FF]"
                >
                  {item.label}
                </a>
              ))}

              <WhatsAppLink
                onClick={closeMenu}
                className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#0055FF] px-4 py-3 text-sm font-extrabold text-white transition hover:bg-[#003DB8]"
                message="Hello Sky Quarry Investments, I would like a quotation for manual-cut building stones."
              >
                <WhatsAppIcon />
                Get a Quotation
              </WhatsAppLink>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative isolate flex min-h-[600px] scroll-mt-24 items-center overflow-hidden bg-[#071a3d] sm:min-h-[660px] lg:min-h-[700px]"
        >
          <img
            src={IMAGES.background}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06142e]/95 via-[#06142e]/85 to-[#06142e]/35" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06142e]/60 via-transparent to-[#06142e]/10" />

          <div className="pointer-events-none absolute -right-24 top-1/2 hidden h-[430px] w-[430px] -translate-y-1/2 rounded-full border border-white/10 lg:block" />
          <div className="pointer-events-none absolute -right-8 top-1/2 hidden h-[310px] w-[310px] -translate-y-1/2 rounded-full border border-[#FFBF00]/20 lg:block" />

          <div className="mx-auto w-full max-w-[1320px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
            <div data-aos="fade-up" className="max-w-4xl">
              <p className="mb-7 inline-flex flex-wrap items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.17em] text-white backdrop-blur-md sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-[#FFBF00]" />
                Building Stones
                <span className="text-white/40">/</span>
                Supply
                <span className="text-white/40">/</span>
                Delivery
              </p>

              <h1 className="max-w-4xl text-[42px] font-black leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[82px]">
                Build with
                <span className="block text-[#FFBF00]">confidence.</span>
                <span className="mt-3 block text-3xl font-bold leading-tight tracking-tight text-white/90 sm:text-4xl lg:text-5xl">
                  Start with the right stone.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8 lg:text-lg">
                Explore manual-cut building stone options from Sky Quarry
                Investments. Tell us about your project and discuss your
                requirements, quotation, and delivery arrangements with our
                team.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="/#products"
                  className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-lg bg-[#FFBF00] px-6 py-4 text-sm font-extrabold text-[#17243a] shadow-[0_8px_24px_rgba(255,191,0,0.16)] transition hover:-translate-y-1 hover:bg-[#ffcf40] hover:shadow-lg"
                >
                  Explore Our Products
                  <ArrowRight />
                </a>

                <WhatsAppLink
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/[0.07] px-6 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:border-white/60 hover:bg-white/[0.14]"
                  message="Hello Sky Quarry Investments, I would like to discuss my building stone requirements."
                >
                  <WhatsAppIcon />
                  Talk to Our Team
                </WhatsAppLink>
              </div>

              <div className="mt-12 grid max-w-3xl grid-cols-1 gap-5 border-t border-white/20 pt-6 sm:grid-cols-3 sm:gap-7">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#FFBF00]">
                    <ServiceIcon type="stone" className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-white">
                      Building Stones
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-300">
                      Explore available options
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#FFBF00]">
                    <ServiceIcon type="quote" className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-white">
                      Project Enquiries
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-300">
                      Discuss your requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#FFBF00]">
                    <ServiceIcon type="delivery" className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-white">
                      Delivery Planning
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-300">
                      Discuss your project location
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0055FF] via-[#FFBF00] to-[#0055FF]" />
        </section>

        {/* ABOUT INTRODUCTION */}
        <section
          id="about-intro"
          className="overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div data-aos="fade-right" className="relative pb-5 pl-3 pt-3">
              <div className="absolute left-0 top-0 z-0 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#FFBF00]" />

              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
                alt="Building construction and architectural development"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = IMAGES.manualCut1;
                }}
                className="relative z-10 h-[300px] w-full rounded-2xl object-cover shadow-xl transition duration-500 hover:shadow-2xl sm:h-[420px]"
              />

              <div className="absolute -bottom-1 right-4 z-20 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-lg sm:right-7">
                <p className="text-sm font-extrabold text-slate-950">
                  Sky Quarry Investments
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Building on a Strong Foundation
                </p>
              </div>
            </div>

            <div data-aos="fade-left" className="pt-3 lg:pt-0">
              <p className="inline-flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.19em] text-[#0055FF]">
                <span className="h-[3px] w-6 rounded-full bg-[#FFBF00]" />
                Get to Know Us
              </p>

              <h2 className="mt-4 text-3xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-4xl lg:text-[46px]">
                Every Great Building Starts with a Strong Foundation.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Sky Quarry Investments focuses on supplying manual-cut
                building stones for residential, commercial, and other
                construction projects. We help customers discuss their stone
                requirements, estimated quantities, pricing, and delivery
                arrangements.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Whether you are planning a new home or another building
                project, share your requirements with our team so we can
                discuss the options available for your needs.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="/about"
                  className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-lg bg-[#0055FF] px-6 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-[#003DB8]"
                >
                  Discover Our Story
                  <ArrowRight />
                </a>

                <WhatsAppLink
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border border-slate-200 px-6 py-4 text-sm font-extrabold text-slate-800 transition hover:-translate-y-1 hover:border-[#0055FF] hover:text-[#0055FF]"
                  message="Hello Sky Quarry Investments, I would like to learn more about your building stone supply."
                >
                  <WhatsAppIcon />
                  Talk to Our Team
                </WhatsAppLink>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section
          id="products"
          className="scroll-mt-24 bg-[#f7f9fc] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="mx-auto max-w-[1240px]">
            <SectionHeading
              eyebrow="Explore Our Products"
              title="Stone for Your Next Project"
              description="Explore our manual-cut building stone options. Contact our team to discuss current availability, quantities, pricing, and delivery."
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {products.map((product, index) => (
                <article
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_5px_20px_rgba(15,23,42,0.035)] transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)]"
                >
                  <div className="relative h-[245px] overflow-hidden bg-slate-200 sm:h-[265px]">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = IMAGES.manualCut1;
                      }}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.055]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071a3d]/75 via-transparent to-[#071a3d]/10" />

                    <span className="absolute left-5 top-5 rounded-md border border-white/30 bg-[#071a3d]/65 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.13em] text-white backdrop-blur-sm">
                      {product.tag}
                    </span>

                    <span className="absolute bottom-4 right-5 text-4xl font-black tracking-tight text-white/75">
                      {product.number}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-xl font-extrabold leading-snug tracking-tight text-slate-950">
                      {product.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                      {product.description}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <button
                        type="button"
                        onClick={() => selectProduct(product.title)}
                        className="inline-flex min-h-10 items-center gap-2 text-sm font-extrabold text-[#0055FF] transition hover:gap-3 hover:text-[#003DB8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0055FF]"
                      >
                        Enquire About This
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-xs leading-6 text-slate-500">
              Product availability, pricing, quantities, and delivery
              arrangements should be confirmed with our team.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="mx-auto max-w-[1240px]">
            <div className="grid grid-cols-1 items-end gap-5 lg:grid-cols-[1fr_0.65fr] lg:gap-12">
              <div>
                <SectionHeading
                  eyebrow="How We Can Help"
                  title="Practical Support for Your Build"
                  align="left"
                  description="From identifying your stone requirements to discussing delivery, start a conversation with our team."
                />
              </div>

              <div className="mb-12 hidden border-l-2 border-[#FFBF00] pl-5 lg:block">
                <p className="text-sm leading-7 text-slate-600">
                  Every project is different. Share the details of yours so we
                  can discuss the relevant options with you.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0055FF]/[0.07] text-[#0055FF] transition duration-300 group-hover:bg-[#0055FF] group-hover:text-white">
                      <ServiceIcon type={service.icon} />
                    </span>

                    <span className="text-sm font-extrabold tracking-widest text-slate-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-extrabold tracking-tight text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => selectProduct(service.title)}
                    className="mt-6 inline-flex min-h-10 items-center gap-2 text-sm font-extrabold text-[#0055FF] transition hover:gap-3 hover:text-[#003DB8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0055FF]"
                  >
                    Make an enquiry
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          id="process"
          className="scroll-mt-24 bg-[#071a3d] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="mx-auto max-w-[1240px]">
            <SectionHeading
              eyebrow="A Simple Process"
              title="From Your Enquiry to the Next Step"
              description="A clear starting point for discussing your building stone requirements with our team."
              light
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <article
                  key={step.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#FFBF00]/40 hover:bg-white/[0.075] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-black tracking-tight text-[#FFBF00]">
                      {step.number}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 p-2.5 text-[#FFBF00] transition group-hover:border-[#FFBF00]/50 group-hover:bg-[#FFBF00]/10">
                      <ArrowRight className="h-full w-full" />
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-extrabold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-9 text-center">
              <a
                href="/#contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#FFBF00] px-6 py-4 text-sm font-extrabold text-[#17243a] transition hover:-translate-y-1 hover:bg-[#ffcf40]"
              >
                Tell Us About Your Project
                <ArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* GALLERY PROMOTION */}
        <section className="bg-[#f7f9fc] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div
            data-aos="fade-up"
            className="mx-auto grid max-w-[1240px] grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-xl md:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="group relative min-h-[240px] overflow-hidden bg-slate-200 md:min-h-[310px]">
              <img
                src={IMAGES.manualCut1}
                alt="Manual-cut building stones"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = IMAGES.manualCut2;
                }}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a3d]/50 to-transparent" />
              <span className="absolute bottom-5 left-5 rounded-md border border-white/25 bg-[#071a3d]/70 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                Explore the Gallery
              </span>
            </div>

            <div className="flex flex-col items-start justify-center p-7 sm:p-10 lg:p-12">
              <p className="inline-flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0055FF]">
                <span className="h-[3px] w-6 rounded-full bg-[#FFBF00]" />
                Project Inspiration
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
                See the Materials.
                <span className="block text-[#0055FF]">
                  Explore the Gallery.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Browse images related to building projects, stone materials,
                and quarry operations on our dedicated gallery page.
              </p>

              <a
                href="/gallery"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#0055FF] px-6 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-[#003DB8]"
              >
                View Gallery
                <ArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section
          id="faqs"
          className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Questions Before You Enquire?"
              description="Find answers to common questions about our stone supply and quotation process."
            />

            <div className="space-y-3">
              {visibleFaqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <article
                    key={faq.question}
                    className={`overflow-hidden rounded-xl border transition duration-300 ${
                      isOpen
                        ? 'border-blue-200 bg-blue-50/40 shadow-[0_8px_24px_rgba(0,85,255,0.06)]'
                        : 'border-slate-200 bg-white hover:border-blue-200'
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        onClick={() =>
                          setOpenFaq((current) =>
                            current === index ? null : index,
                          )
                        }
                        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-sm font-extrabold text-slate-900 sm:px-6"
                      >
                        <span>{faq.question}</span>
                        <span
                          aria-hidden="true"
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl font-medium transition ${
                            isOpen
                              ? 'bg-[#0055FF] text-white'
                              : 'bg-slate-100 text-[#0055FF]'
                          }`}
                        >
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                    </h3>

                    {isOpen && (
                      <div
                        id={`faq-answer-${index}`}
                        className="border-t border-slate-200/70 px-5 py-5 text-sm leading-7 text-slate-600 sm:px-6"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            <div className="mt-7 text-center">
              <button
                type="button"
                onClick={() => {
                  setShowAllFaqs((current) => !current);
                  setOpenFaq(null);
                }}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-extrabold text-[#0055FF] transition hover:border-[#0055FF] hover:bg-blue-50"
              >
                {showAllFaqs ? 'Show Fewer Questions' : 'View All Questions'}
                <span aria-hidden="true">
                  {showAllFaqs ? '−' : '+'}
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="relative isolate overflow-hidden bg-[#0055FF] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="pointer-events-none absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-8 -top-16 -z-10 h-64 w-64 rounded-full border border-[#FFBF00]/30" />

          <div
            data-aos="fade-up"
            className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-8 md:flex-row md:items-center"
          >
            <div className="max-w-2xl">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.19em] text-[#FFDF7E]">
                Have a Project in Mind?
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-[46px]">
                Let's talk about
                <span className="block text-[#FFBF00]">
                  your stone requirements.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
                Tell us what you need, your estimated quantity, and where your
                project is located.
              </p>
            </div>

            <WhatsAppLink
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-lg bg-white px-6 py-4 text-sm font-extrabold text-[#0055FF] shadow-lg transition hover:-translate-y-1 hover:bg-slate-100"
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
          className="scroll-mt-24 bg-[#f7f9fc] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="mx-auto max-w-[1240px]">
            <SectionHeading
              eyebrow="Get in Touch"
              title="Tell Us About Your Project"
              description="Complete the form to prepare your enquiry in WhatsApp. You can review the details before sending your message."
            />

            <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
              <aside
                data-aos="fade-right"
                className="overflow-hidden rounded-2xl bg-[#071a3d] text-white shadow-[0_16px_40px_rgba(7,26,61,0.12)]"
              >
                <div className="border-b border-white/10 p-6 sm:p-8">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#FFBF00]">
                    Sky Quarry Investments
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                    Let's discuss your requirements.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    Share your project details with us so we can discuss
                    available stone options, pricing, and delivery arrangements.
                  </p>
                </div>

                <div className="space-y-6 p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#FFBF00]">
                      <WhatsAppIcon />
                    </span>

                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                        Direct Enquiry
                      </p>

                      <WhatsAppLink
                        className="mt-1 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-[#FFBF00]"
                        message="Hello Sky Quarry Investments, I would like to make an enquiry."
                      >
                        Chat With Our Team
                        <ArrowRight className="h-4 w-4" />
                      </WhatsAppLink>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#FFBF00]">
                      <ServiceIcon type="quote" />
                    </span>

                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                        Quotation Details
                      </p>
                      <p className="mt-1 text-sm leading-6 text-white">
                        Include your stone type, quantity, and project location.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#FFBF00]">
                      <ServiceIcon type="delivery" />
                    </span>

                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                        Delivery Planning
                      </p>
                      <p className="mt-1 text-sm leading-6 text-white">
                        Share the project location to discuss delivery options.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mx-6 mb-6 rounded-xl border border-white/10 bg-white/[0.045] p-4 sm:mx-8 sm:mb-8">
                  <p className="text-xs leading-6 text-slate-300">
                    Your enquiry is prepared for WhatsApp. It is not sent until
                    you review the message and press Send.
                  </p>
                </div>
              </aside>

              <div
                data-aos="fade-left"
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_35px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_16px_42px_rgba(15,23,42,0.08)] sm:p-8 lg:p-9"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#0055FF]">
                      Quotation Request
                    </p>
                    <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                      Your Project Details
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Fields marked with * are required.
                    </p>
                  </div>

                  <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0055FF]/[0.07] text-[#0055FF] sm:flex">
                    <ServiceIcon type="quote" />
                  </span>
                </div>

                <form onSubmit={submitForm} className="mt-7 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <label className="block text-sm font-bold text-slate-700">
                      Full Name *
                      <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        value={form.name}
                        onChange={update}
                        placeholder="Enter your full name"
                        required
                        maxLength={100}
                        aria-invalid={Boolean(formError && !form.name.trim())}
                        className="form-control"
                      />
                    </label>

                    <label className="block text-sm font-bold text-slate-700">
                      Phone Number *
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
                        aria-invalid={Boolean(
                          formError &&
                            form.phone.replace(/\D/g, '').length < 7,
                        )}
                        className="form-control"
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
                      aria-invalid={Boolean(formError && !form.product)}
                      className="form-control"
                    >
                      <option value="">Choose an option</option>

                      {products.map((product) => (
                        <option key={product.id} value={product.title}>
                          {product.title}
                        </option>
                      ))}

                      {services.map((service) => (
                        <option key={service.number} value={service.title}>
                          {service.title}
                        </option>
                      ))}

                      <option value="Other construction requirements">
                        Other construction requirements
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
                        className="form-control"
                      />
                    </label>

                    <label className="block text-sm font-bold text-slate-700">
                      Project Location
                      <input
                        type="text"
                        name="location"
                        autoComplete="shipping locality"
                        value={form.location}
                        onChange={update}
                        placeholder="Town or project location"
                        maxLength={150}
                        className="form-control"
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
                      placeholder="Tell us more about your project or requirements."
                      className="form-control resize-y"
                    />
                  </label>

                  {formError && (
                    <p
                      role="alert"
                      className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-medium leading-6 text-red-700"
                    >
                      {formError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#0055FF] px-5 py-4 text-sm font-extrabold text-white shadow-[0_6px_18px_rgba(0,85,255,0.16)] transition hover:-translate-y-0.5 hover:bg-[#003DB8] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0055FF]"
                  >
                    <WhatsAppIcon />
                    Prepare WhatsApp Enquiry
                    <ArrowRight />
                  </button>

                  <p className="text-center text-xs leading-6 text-slate-500">
                    WhatsApp opens with your enquiry prepared. Review the
                    message and press Send to submit it.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#06142e] text-white">
        <div className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
            <div data-aos="fade-up">
              <CompanyLogo />

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                Sky Quarry Investments focuses on manual-cut building stone
                supply and helping customers discuss their construction
                requirements.
              </p>

              <a
                href="/about"
                className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#FFBF00] transition hover:gap-3 hover:text-white"
              >
                Discover Our Story
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xs font-extrabold uppercase tracking-[0.16em] text-white">
                Explore
              </h3>

              <nav
                aria-label="Footer navigation"
                className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3"
              >
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="w-fit text-sm text-slate-400 transition hover:translate-x-1 hover:text-[#FFBF00]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xs font-extrabold uppercase tracking-[0.16em] text-white">
                Start a Conversation
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Have a construction project in mind? Contact us to discuss
                your building stone requirements.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <WhatsAppLink
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#0055FF] px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#003DB8]"
                  message="Hello Sky Quarry Investments, I would like to make an enquiry about your products and services."
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </WhatsAppLink>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/20 px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-[#FFBF00] hover:text-[#FFBF00]"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="mt-11 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-6 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Sky Quarry Investments. All rights
              reserved.
            </p>

            <a
              href="/#home"
              className="inline-flex w-fit items-center gap-2 transition hover:text-[#FFBF00]"
            >
              Back to Top
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <WhatsAppLink
        label="Contact Sky Quarry Investments on WhatsApp"
        message="Hello Sky Quarry Investments, I would like to make an enquiry."
        className="fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#25D366] text-white shadow-[0_8px_25px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:scale-105 hover:bg-[#1ebd5a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 sm:bottom-7 sm:right-7"
      >
        <WhatsAppIcon className="h-7 w-7" />
        <span className="sr-only">Contact us on WhatsApp</span>
      </WhatsAppLink>
    </div>
  );
}

export default App;