import { Phone, Mail, MapPin, ArrowUp, Instagram, Youtube } from 'lucide-react';
import logo from '@/assets/logo.png';
import { siteConfig, navLinks, allServices, serviceSlugs } from '@/data/siteData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-charcoal-950 bg-grain pt-20 pb-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="S.M Kitchen Interior"
                className="h-16 w-24 object-contain"
              />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-cream-100/50">
              Professional interior designing and modular furniture solutions serving Farmana,
              Sonipat and nearby areas in Haryana.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-100/60 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {allServices.map((service) => (
                <li key={service.id}>
                  <a
                    href={`/services/${serviceSlugs[service.id]}`}
                    className="text-sm text-cream-100/60 transition-colors hover:text-gold-400"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400">
              Contact
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-cream-100/60">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-wine-400" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-start gap-3 text-sm text-cream-100/60 transition-colors hover:text-gold-400"
                >
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-wine-400" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm text-cream-100/60 transition-colors hover:text-gold-400 break-all"
                >
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-wine-400" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://www.instagram.com/smkitchensinteriors?utm_source=qr&stkn=MTc0Zmt3cGhudTJieA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-cream-100/60 transition-colors hover:text-gold-400"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@sundermodulerfurnicher"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-cream-100/60 transition-colors hover:text-gold-400"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-cream-100/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-xs text-cream-100/40 sm:text-left">
              &copy; {year} S.M Kitchen Interior. All Rights Reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 rounded-full border border-cream-100/15 px-4 py-2 text-xs font-medium text-cream-100/60 transition-colors hover:border-gold-400/40 hover:text-gold-400"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
