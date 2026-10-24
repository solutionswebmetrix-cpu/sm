import { ArrowRight, Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import {
  allServices,
  servicePageDetails,
  serviceSlugs,
} from '@/data/siteData';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Interior design services for your home"
        description="Explore the modular furniture and interior solutions offered by S.M Kitchen Interior in Farmana, Sonipat and nearby areas."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />
      <section className="bg-charcoal-950 px-5 pb-20 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {allServices.map((service) => {
            const detail = servicePageDetails[service.id];
            return (
              <article
                key={service.id}
                className="group overflow-hidden rounded-2xl bg-charcoal-900 shadow-premium transition-transform duration-300 hover:-translate-y-1"
              >
                <a
                  href={`/services/${serviceSlugs[service.id]}`}
                  aria-label={`View ${service.title} details`}
                  className="relative block h-56 overflow-hidden"
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={940}
                    height={650}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 to-transparent" />
                  <h2 className="absolute bottom-4 left-5 right-5 font-serif text-xl font-bold text-cream-50">
                    {service.title}
                  </h2>
                </a>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-cream-100/65">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {detail.features.slice(0, 2).map((feature) => (
                      <li key={feature} className="flex gap-2 text-xs text-cream-100/60">
                        <Check className="h-4 w-4 flex-shrink-0 text-gold-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <a
                      href={`/services/${serviceSlugs[service.id]}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
                    >
                      View Details <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="/contact"
                      className="text-sm font-medium text-cream-100/70 transition-colors hover:text-gold-400"
                    >
                      Get a Quote
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
