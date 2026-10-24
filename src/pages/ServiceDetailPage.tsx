import { ArrowRight, Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import {
  allServices,
  portfolioItems,
  servicePageDetails,
  serviceSlugs,
  type ServiceItem,
} from '@/data/siteData';

type ServiceDetailPageProps = {
  service: ServiceItem;
};

const galleryCategories: Record<string, string[]> = {
  'modular-kitchen': ['Modular Kitchen'],
  'modular-wardrobe': ['Wardrobe'],
  'lcd-tv-panel': ['TV Panel'],
  'modular-bed': ['Bedroom'],
  'flush-door': ['Complete Interiors'],
  'complete-interior': ['Complete Interiors', 'Living Room'],
  'customized-furniture': ['Living Room', 'Bedroom'],
};

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const detail = servicePageDetails[service.id];
  const related = allServices.filter((item) => item.id !== service.id).slice(0, 3);
  const categories = galleryCategories[service.id] ?? [];
  const gallery = portfolioItems
    .filter((item) => categories.includes(item.category))
    .slice(0, 3);
  const images = gallery.length > 0 ? gallery : [{ ...service, title: service.title }];

  return (
    <>
      <PageHero
        eyebrow="Interior Design Service"
        title={service.title}
        description={service.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      <section className="bg-cream-50 px-5 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wine-700">
              Made around your requirements
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal-900 sm:text-4xl">
              A design that works for your space
            </h2>
            <p className="mt-5 leading-relaxed text-charcoal-600">{detail.overview}</p>
            <ul className="mt-7 space-y-3">
              {detail.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-charcoal-700">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-wine-700" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-luxury">
            <img
              src={service.image}
              alt={service.alt}
              className="h-full min-h-72 w-full object-cover"
              width={940}
              height={650}
            />
          </div>
        </div>
      </section>

      <section className="bg-charcoal-950 bg-grain px-5 py-16 text-cream-50 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:px-8">
          <article className="rounded-2xl border border-cream-100/10 bg-charcoal-900/70 p-7">
            <h2 className="font-serif text-2xl font-bold text-gold-400">Design options</h2>
            <ul className="mt-5 space-y-3">
              {detail.designOptions.map((option) => (
                <li key={option} className="flex items-center gap-3 text-sm text-cream-100/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                  {option}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-cream-100/10 bg-charcoal-900/70 p-7">
            <h2 className="font-serif text-2xl font-bold text-gold-400">
              Materials & finishes
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-cream-100/70">{detail.materials}</p>
          </article>
        </div>
      </section>

      <section className="bg-cream-100 px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-charcoal-900">
            Related project inspiration
          </h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <figure key={image.id} className="overflow-hidden rounded-2xl shadow-premium">
                <img
                  src={image.image}
                  alt={image.alt}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                  width={940}
                  height={650}
                />
                <figcaption className="bg-cream-50 px-4 py-3 text-sm font-medium text-charcoal-700">
                  {image.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-50 px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl rounded-2xl border border-gold-300/40 bg-cream-100 p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-charcoal-900">
            Frequently asked question
          </h2>
          <h3 className="mt-5 font-semibold text-charcoal-800">{detail.faq.question}</h3>
          <p className="mt-2 leading-relaxed text-charcoal-600">{detail.faq.answer}</p>
        </div>
      </section>

      <section className="bg-wine-950 px-5 py-14 text-center text-cream-50">
        <h2 className="font-serif text-3xl font-bold">Ready to discuss your project?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-cream-100/70">
          Share your ideas and requirements with S.M Kitchen Interior.
        </p>
        <a
          href="/contact"
          className="mt-7 inline-flex rounded-full bg-gradient-to-r from-gold-500 to-gold-700 px-6 py-3 text-sm font-semibold text-charcoal-950 shadow-gold"
        >
          Get Free Consultation
        </a>
      </section>

      <section className="bg-charcoal-950 px-5 py-16 text-cream-50 lg:py-20">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                Explore more
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold">Related services</h2>
            </div>
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300"
            >
              All services <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <a
                key={item.id}
                href={`/services/${serviceSlugs[item.id]}`}
                className="rounded-xl border border-cream-100/10 bg-charcoal-900/70 p-5 transition-colors hover:border-gold-400/40"
              >
                <h3 className="font-serif text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/60">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
          <a href="/services" className="mt-8 inline-block text-sm text-cream-100/60 hover:text-gold-400">
            ← Back to Services
          </a>
        </div>
      </section>
    </>
  );
}
