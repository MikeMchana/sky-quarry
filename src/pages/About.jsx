import { useEffect, useState } from 'react';
import AOS from 'aos';

const WHATSAPP_NUMBER = '254706496180';

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hello Sky Quarry Investments, I would like to learn more about your building stone products and services.'
)}`;

const values = [
  {
    number: '01',
    title: 'Commitment',
    description:
      'We aim to build lasting relationships through commitment to our customers and their construction requirements.',
    icon: 'commitment',
  },
  {
    number: '02',
    title: 'Quality',
    description:
      'We focus on helping customers find suitable building stone options for their individual project needs.',
    icon: 'quality',
  },
  {
    number: '03',
    title: 'Integrity',
    description:
      'We value honest communication, responsible business practices, and clear discussions about customer requirements.',
    icon: 'integrity',
  },
  {
    number: '04',
    title: 'Environmental Care',
    description:
      'We recognize the importance of environmental responsibility and the need to consider nature in our operations.',
    icon: 'environment',
  },
];

const principles = [
  {
    label: 'Our Mission',
    title: 'Delivering Value Through Building Stones',
    description:
      'To maintain and grow our position as a supplier of quality construction stones by focusing on customer needs, affordability, and responsible business practices.',
    symbol: 'M',
  },
  {
    label: 'Our Vision',
    title: 'Building a Stronger Future',
    description:
      'To be a customer-driven supplier of quality stones, operating safely and effectively while working toward long-term business growth and environmental responsibility.',
    symbol: 'V',
  },
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

function CompanyLogo() {
  return (
    <a
      href="/"
      aria-label="Sky Quarry Investments home"
      className="inline-flex shrink-0 items-center rounded-md bg-white p-1"
    >
      <img
        src="/images/sky-quarry-logo.webp"
        alt="Sky Quarry Investments"
        className="h-auto w-[112px] object-contain sm:w-[132px]"
      />
    </a>
  );
}

function ValueIcon({ type }) {
  const paths = {
    commitment: (
      <>
        <path d="M12 3 20 7v5c0 5-3.4 7.8-8 9-4.6-1.2-8-4-8-9V7l8-4Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    quality: (
      <>
        <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
      </>
    ),
    integrity: (
      <>
        <path d="M12 21s8-4 8-11V5l-8-3-8 3v5c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    environment: (
      <>
        <path d="M20 4C10 4 5 7 5 13a6 6 0 0 0 6 6c6 0 9-5 9-15Z" />
        <path d="M3 21c2-5 6-8 12-11" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
    >
      {paths[type]}
    </svg>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p
        className={`text-xs font-extrabold uppercase tracking-[0.22em] ${
          light ? 'text-[#FFBF00]' : 'text-[#0055FF]'
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-slate-950'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-8 ${
            light ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function About() {
  const [videoFailed, setVideoFailed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.refreshHard();

    const frame = window.requestAnimationFrame(() => {
      AOS.refreshHard();
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const videoPath = '/videos/BackVideo.mp4';

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/#products' },
    { label: 'Services', href: '/#services' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'FAQs', href: '/#faqs' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900">
      {/* PAGE NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <CompanyLogo />

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 xl:flex"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={link.label === 'About' ? 'page' : undefined}
                className={`text-sm font-bold transition hover:text-[#0055FF] ${
                  link.label === 'About'
                    ? 'text-[#0055FF]'
                    : 'text-slate-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-lg bg-[#0055FF] px-4 py-3 text-sm font-extrabold text-white transition hover:bg-[#003DB8] lg:inline-flex"
          >
            <WhatsAppIcon />
            Get in Touch
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-800 xl:hidden"
          >
            {mobileMenuOpen ? (
              <span className="text-2xl" aria-hidden="true">×</span>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-slate-200 bg-white px-4 py-3 xl:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-[#0055FF]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#0055FF] px-4 py-3 text-sm font-extrabold text-white"
              >
                <WhatsAppIcon />
                Get in Touch
              </a>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* HERO */}
        <section className="relative isolate flex min-h-[400px] items-center overflow-hidden bg-slate-950 sm:min-h-[500px] lg:min-h-[570px]">
          {!videoFailed && (
            <video
              className="absolute inset-0 -z-20 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/quarry-background.webp"
              onError={() => setVideoFailed(true)}
            >
              <source src={videoPath} type="video/mp4" />
            </video>
          )}

          <img
            src="/images/quarry-background.webp"
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 -z-30 h-full w-full object-cover ${
              videoFailed ? 'opacity-100' : 'opacity-100'
            }`}
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40" />

          <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl" data-aos="fade-up">
              <p className="inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#FFBF00]">
                <span className="h-[3px] w-8 bg-[#FFBF00]" />
                Get to Know Us
              </p>

              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                About
                <span className="mt-2 block text-[#FFBF00]">
                  Sky Quarry Investments
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Building relationships through construction stone supply,
                customer service, and a commitment to understanding every
                project's requirements.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#company-story"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#FFBF00] px-6 py-4 text-sm font-extrabold text-slate-950 transition hover:bg-[#E6A900]"
                >
                  Discover Our Story
                  <ArrowRight />
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-white/30 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <WhatsAppIcon />
                  Contact Our Team
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0055FF] via-[#FFBF00] to-[#B8860B]" />
        </section>

        {/* COMPANY STORY */}
        <section
          id="company-story"
          className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative" data-aos="fade-right">
              <div className="absolute -left-3 -top-3 h-28 w-28 rounded-tl-3xl border-l-4 border-t-4 border-[#FFBF00] sm:-left-5 sm:-top-5" />

              <img
                src="/images/aboutus.jpg"
                alt="Sky Quarry Investments and building stone operations"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = '/images/quarry-background.webp';
                }}
                className="relative h-[320px] w-full rounded-2xl object-cover shadow-xl sm:h-[440px]"
              />

              <div className="absolute -bottom-5 right-4 max-w-[260px] rounded-xl border border-slate-200 bg-white p-5 shadow-lg sm:right-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#0055FF]">
                  Our Journey
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
                  Established in 2015. Officially incorporated in 2020.
                </p>
              </div>
            </div>

            <div className="pt-5 lg:pt-0" data-aos="fade-left">
              <SectionHeading
                eyebrow="Who We Are"
                title="A Foundation Built on Experience"
                description="Sky Quarry Investments is a building stone business with roots in Taita Taveta, Kenya."
              />

              <p className="-mt-5 text-base leading-8 text-slate-600">
                According to the company's original profile, the business
                was founded in November 2015 and officially incorporated in
                May 2020. Its operations are based in Taita Taveta.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Our focus is on building stone supply and helping customers
                discuss the materials required for their construction
                projects. We encourage customers to share their project
                details so that stone options, quantities, and delivery
                arrangements can be discussed clearly.
              </p>

              <a
                href="/#products"
                className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#0055FF] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#003DB8]"
              >
                Explore Our Products
                <ArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* COMPANY HISTORY */}
        <section className="bg-slate-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div data-aos="fade-up">
              <SectionHeading
                eyebrow="Our History"
                title="Growing With Our Community"
                description="Our story is rooted in the development of a building stone business serving construction needs in the Taita Taveta region."
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <article
                data-aos="fade-up"
                data-aos-delay="100"
                className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0055FF]/10 text-[#0055FF]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-7 w-7"
                  >
                    <path d="M4 20h16M6 20V8l6-4 6 4v12M9 11h1m4 0h1m-6 4h1m4 0h1" />
                  </svg>
                </div>

                <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-[#B8860B]">
                  November 2015
                </p>

                <h3 className="mt-3 text-2xl font-extrabold text-slate-950">
                  The Beginning
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Sky Quarry Investments traces its beginnings to November
                  2015, when the business was founded with a focus on
                  construction stone supply.
                </p>
              </article>

              <article
                data-aos="fade-up"
                data-aos-delay="200"
                className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFBF00]/20 text-[#8B6500]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-7 w-7"
                  >
                    <path d="M6 3h9l4 4v14H6z" />
                    <path d="M14 3v5h5M9 13h7M9 17h7" />
                  </svg>
                </div>

                <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-[#B8860B]">
                  May 2020
                </p>

                <h3 className="mt-3 text-2xl font-extrabold text-slate-950">
                  Official Incorporation
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  The original company profile states that Sky Quarry
                  Investments was officially incorporated in May 2020,
                  marking an important milestone in its development.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div data-aos="fade-up">
              <SectionHeading
                eyebrow="What Guides Us"
                title="Our Values"
                description="The principles that shape how we approach our work, our customers, and our responsibilities."
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <article
                  key={value.number}
                  data-aos="fade-up"
                  data-aos-delay={Number(value.number) * 100}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#0055FF]/30 hover:shadow-xl sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0055FF]/10 text-[#0055FF] transition group-hover:bg-[#0055FF] group-hover:text-white">
                      <ValueIcon type={value.icon} />
                    </div>

                    <span className="text-sm font-extrabold text-[#B8860B]">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CULTURE */}
        <section className="overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div data-aos="fade-right">
              <SectionHeading
                eyebrow="Our Culture"
                title="Customer Needs Come First"
                description="We aim to maintain a customer-focused approach built around clear communication and practical discussions about construction materials."
                light
              />

              <div className="space-y-5">
                {[
                  {
                    title: 'Understanding Requirements',
                    text: 'We encourage customers to explain their project needs, stone preferences, and estimated quantities.',
                  },
                  {
                    title: 'Clear Communication',
                    text: 'We value straightforward conversations about available options, quotations, and delivery arrangements.',
                  },
                  {
                    title: 'Continuous Improvement',
                    text: 'We recognize the importance of learning from customer interactions and improving the way enquiries are handled.',
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    data-aos="fade-up"
                    data-aos-delay={(index + 1) * 100}
                    className="flex gap-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFBF00] text-sm font-black text-slate-950">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <img
                src="/images/History.jpg"
                alt="Building stone history and operations"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = '/images/ManualCut1.jpg';
                }}
                className="h-[320px] w-full rounded-2xl object-cover sm:h-[440px]"
              />

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#FFBF00]">
                  Sky Quarry Investments
                </p>
                <p className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                  A practical approach to building stone supply.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION AND VISION */}
        <section className="bg-slate-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div data-aos="fade-up">
              <SectionHeading
                eyebrow="Our Direction"
                title="Mission and Vision"
                description="Our purpose and long-term ambition guide the way we approach our business."
              />
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
              {principles.map((principle) => (
                <article
                  key={principle.label}
                  data-aos="fade-up"
                  data-aos-delay={principle.label === 'Our Vision' ? 150 : 0}
                  className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -right-2 -top-10 text-[180px] font-black leading-none text-slate-100"
                  >
                    {principle.symbol}
                  </span>

                  <div className="relative">
                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0055FF]">
                      {principle.label}
                    </p>

                    <h3 className="mt-4 max-w-md text-2xl font-extrabold leading-tight text-slate-950 sm:text-3xl">
                      {principle.title}
                    </h3>

                    <p className="mt-5 text-sm leading-8 text-slate-600">
                      {principle.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="bg-[#0055FF] px-4 py-16 sm:px-6 lg:px-8">
          <div
            data-aos="fade-up"
            className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#FFBF00]">
                Let's Connect
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                Have a Building Project in Mind?
              </h2>

              <p className="mt-4 text-base leading-7 text-white/90">
                Contact Sky Quarry Investments to discuss your manual-cut
                building stone requirements and request a quotation.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-lg bg-white px-6 py-4 text-sm font-extrabold text-[#0055FF] transition hover:bg-slate-100"
            >
              <WhatsAppIcon />
              Contact Us on WhatsApp
              <ArrowRight />
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-center">
            <div>
              <CompanyLogo />
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                Building stone supply enquiries and construction project
                support from Sky Quarry Investments.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#0055FF] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#003DB8]"
            >
              <WhatsAppIcon />
              Contact Our Team
            </a>
          </div>

          <div className="flex flex-col gap-3 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Sky Quarry Investments. All rights
              reserved.
            </p>

            <a href="/" className="font-bold transition hover:text-[#FFBF00]">
              Return to Home →
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Sky Quarry Investments on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl transition hover:scale-105 hover:bg-green-700 sm:bottom-7 sm:right-7"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}