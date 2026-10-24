import { Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { siteConfig } from '@/data/siteData';

const approach = [
  'Understand how you use each space before planning its design.',
  'Balance appearance with storage, circulation and everyday function.',
  'Discuss materials and finishes to suit your requirements and budget.',
  'Pay attention to the details and workmanship through execution.',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Thoughtful interiors, made for the way you live"
        description="Get to know S.M Kitchen Interior and our approach to designing practical, personalized spaces."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      <section className="bg-cream-50 px-5 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-luxury">
            <img
              src="https://images.pexels.com/photos/7018836/pexels-photo-7018836.jpeg?auto=compress&cs=tinysrgb&w=940"
              alt="Interior design by S.M Kitchen Interior"
              className="h-full min-h-72 w-full object-cover"
              loading="lazy"
              width={940}
              height={650}
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wine-700">
              Our Company
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal-900 sm:text-4xl">
              S.M Kitchen Interior
            </h2>
            <p className="mt-6 leading-relaxed text-charcoal-600">
              Based in {siteConfig.address.line1}, Haryana, S.M Kitchen Interior provides
              interior designing and modular furniture solutions for homes in the area and
              nearby communities. The business has been serving clients since {siteConfig.since}.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal-600">
              From kitchens and wardrobes to individual furniture and complete home interiors,
              each project starts with a conversation about the space, the people using it and
              what they need from it.
            </p>
            <div className="mt-7 rounded-xl border border-gold-300/40 bg-cream-100 p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-charcoal-500">
                Director
              </p>
              <p className="mt-1 font-serif text-lg font-semibold text-charcoal-900">
                {siteConfig.director}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal-950 bg-grain px-5 py-16 text-cream-50 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Design Philosophy
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Useful, personal, considered
            </h2>
            <p className="mt-5 leading-relaxed text-cream-100/65">
              A good interior should feel right for the people who live with it. Our design
              approach brings together your preferences, the proportions of the space and
              practical details such as storage and daily use.
            </p>
            <p className="mt-4 leading-relaxed text-cream-100/65">
              We discuss suitable materials and finishes with you rather than assuming a
              one-size-fits-all solution. Choices are finalized around the project scope and
              your budget.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="rounded-2xl border border-cream-100/10 bg-charcoal-900/70 p-6">
              <h3 className="font-serif text-xl font-bold text-gold-400">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-100/65">
                To create personalized, functional interiors through attentive planning,
                considered selections and quality-focused work.
              </p>
            </article>
            <article className="rounded-2xl border border-cream-100/10 bg-charcoal-900/70 p-6">
              <h3 className="font-serif text-xl font-bold text-gold-400">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-100/65">
                To help more families shape welcoming spaces that reflect their needs and
                personal style.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 px-5 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wine-700">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal-900 sm:text-4xl">
              Care in every decision
            </h2>
            <ul className="mt-7 space-y-4">
              {approach.map((item) => (
                <li key={item} className="flex items-start gap-3 text-charcoal-700">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-wine-700" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-charcoal-600">
              Clear conversations about materials, craftsmanship and expectations help us work
              toward customer satisfaction at every stage.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-luxury">
            <img
              src="https://images.pexels.com/photos/8135496/pexels-photo-8135496.jpeg?auto=compress&cs=tinysrgb&w=940"
              alt="Warm, coordinated residential interior"
              className="h-full min-h-72 w-full object-cover"
              loading="lazy"
              width={940}
              height={650}
            />
          </div>
        </div>
      </section>

      <section className="bg-wine-950 px-5 py-14 text-center text-cream-50">
        <h2 className="font-serif text-3xl font-bold">Let’s talk about your space</h2>
        <p className="mx-auto mt-3 max-w-2xl text-cream-100/70">
          Tell us what you have in mind and we’ll discuss the next steps.
        </p>
        <a
          href="/contact"
          className="mt-7 inline-flex rounded-full bg-gradient-to-r from-gold-500 to-gold-700 px-6 py-3 text-sm font-semibold text-charcoal-950 shadow-gold"
        >
          Get Free Consultation
        </a>
      </section>
    </>
  );
}
