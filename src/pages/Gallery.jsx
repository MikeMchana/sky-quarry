import { useEffect, useState } from 'react';

import AOS from 'aos';

const galleryImages = [
  {
    src: '/images/Gallery-Project-1.jpg',
    title: 'Residential Project',
    category: 'Building Projects',
  },
  {
    src: '/images/Gallery-Project-2.jpg',
    title: 'Building Project',
    category: 'Building Projects',
  },
  {
    src: '/images/Gallery-Project-3.jpg',
    title: 'Three-Bedroom Project',
    category: 'Building Projects',
  },
  {
    src: '/images/Gallery-Quarry-1.jpg',
    title: 'Quarry and Stone',
    category: 'Quarry Operations',
  },
  {
    src: '/images/Gallery-Quarry-2.jpg',
    title: 'Stone Operations',
    category: 'Quarry Operations',
  },
  {
    src: '/images/Gallery-Quarry-3.jpg',
    title: 'Stone Supply',
    category: 'Quarry Operations',
  },
];

const WHATSAPP_URL =
  'https://wa.me/254706496180?text=' +
  encodeURIComponent(
    'Hello Sky Quarry Investments, I would like to enquire about building stones for my project.',
  );

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    AOS.refreshHard();

    const frame = window.requestAnimationFrame(() => {
      AOS.refreshHard();
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const filters = ['All', 'Building Projects', 'Quarry Operations'];

  const visibleImages =
    activeFilter === 'All'
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeFilter);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a href="/" aria-label="Sky Quarry Investments home">
            <img
              src="/images/sky-quarry-logo.webp"
              alt="Sky Quarry Investments"
              className="w-[112px] object-contain sm:w-[132px]"
            />
          </a>

          <nav
            aria-label="Main navigation"
            className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-x-6"
          >
            <a
              href="/"
              className="text-sm font-bold text-slate-600 transition hover:text-[#0055FF]"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-sm font-bold text-slate-600 transition hover:text-[#0055FF]"
            >
              About
            </a>
            <a
              href="/gallery"
              aria-current="page"
              className="text-sm font-extrabold text-[#0055FF]"
            >
              Gallery
            </a>
            <a
              href="/#products"
              className="hidden text-sm font-bold text-slate-600 transition hover:text-[#0055FF] sm:inline"
            >
              Products
            </a>
            <a
              href="/#contact"
              className="hidden rounded-lg bg-[#0055FF] px-4 py-3 text-sm font-extrabold text-white transition hover:bg-[#003DB8] sm:inline-flex"
            >
              Get a Quotation
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-slate-950">
          <img
            src="/images/quarry-background.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />

          <div
            className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
            data-aos="fade-up"
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#FFBF00]">
              Our Work · Our Materials
            </p>

            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              The Sky Quarry
              <span className="block text-[#FFBF00]">Gallery</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Browse photographs related to building projects, building
              stones, and quarry operations. Contact our team to discuss
              your own construction requirements.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#FFBF00] px-6 py-4 text-sm font-extrabold text-slate-950 transition hover:bg-[#E6A900]"
            >
              Enquire About Your Project
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="h-1 bg-gradient-to-r from-[#0055FF] via-[#FFBF00] to-[#B8860B]" />
        </section>

        {/* Gallery */}
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl" data-aos="fade-up">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0055FF]">
                Browse Images
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Project Inspiration
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Explore the gallery and select an image to view it larger.
                For current product availability, pricing, or delivery
                details, please contact our team.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="100">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={`rounded-full border px-5 py-3 text-sm font-bold transition ${
                    activeFilter === filter
                      ? 'border-[#0055FF] bg-[#0055FF] text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-[#0055FF] hover:text-[#0055FF]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleImages.map((item, index) => (
                <article
                  key={item.src}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    aria-label={`View image: ${item.title}`}
                    className="relative block w-full overflow-hidden bg-slate-100 text-left"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src =
                          '/images/quarry-background.webp';
                      }}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                    />
                    <span className="absolute right-4 top-4 rounded-full bg-slate-950/75 px-3 py-2 text-xs font-bold text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFBF00] text-lg font-bold text-slate-950">
                      ↗
                    </span>
                  </button>

                  <div className="p-5 sm:p-6">
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#B8860B]">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-xl font-extrabold text-slate-950">
                      {item.title}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setSelectedImage(item)}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[#0055FF] hover:text-[#003DB8]"
                    >
                      View Image <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-[#0055FF] px-4 py-16 sm:px-6 lg:px-8">
          <div
            className="mx-auto flex max-w-7xl flex-col justify-between gap-7 md:flex-row md:items-center"
            data-aos="fade-up"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#FFBF00]">
                Planning a Project?
              </p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                Let's Discuss Your Stone Requirements.
              </h2>
              <p className="mt-4 leading-7 text-white/90">
                Tell us your preferred stone type, estimated quantity, and
                project location to begin an enquiry.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-lg bg-white px-6 py-4 text-sm font-extrabold text-[#0055FF] transition hover:bg-slate-100"
            >
              Contact Us on WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-extrabold">Sky Quarry Investments</p>
            <p className="mt-2 text-sm text-slate-400">
              For Quality Stones
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">
            <a href="/" className="text-sm text-slate-300 hover:text-[#FFBF00]">
              Home
            </a>
            <a href="/about" className="text-sm text-slate-300 hover:text-[#FFBF00]">
              About
            </a>
            <a href="/gallery" className="text-sm text-slate-300 hover:text-[#FFBF00]">
              Gallery
            </a>
          </nav>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Sky Quarry Investments.
          </p>
        </div>
      </footer>

      {/* Image lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white hover:bg-white/20"
          >
            ×
          </button>

          <div
            className="w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[78vh] w-full rounded-xl object-contain"
            />
            <div className="mt-5 text-center">
              <h3 className="text-xl font-extrabold text-white">
                {selectedImage.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}