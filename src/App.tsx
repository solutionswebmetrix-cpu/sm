import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import FloatingSocialButtons from '@/components/FloatingSocialButtons';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import Contact from '@/components/Contact';
import { allServices, serviceSlugs, type ServiceItem } from '@/data/siteData';

type Route =
  | { page: 'home' }
  | { page: 'about' }
  | { page: 'services' }
  | { page: 'contact' }
  | { page: 'service-detail'; service: ServiceItem }
  | { page: 'not-found' };

function getRoute(pathname: string): Route {
  if (pathname === '/' || pathname === '/index.html') return { page: 'home' };
  if (pathname === '/about') return { page: 'about' };
  if (pathname === '/services') return { page: 'services' };
  if (pathname === '/contact') return { page: 'contact' };

  const serviceSlug = pathname.match(/^\/services\/([^/]+)$/)?.[1];
  if (serviceSlug) {
    const service = allServices.find((item) => serviceSlugs[item.id] === serviceSlug);
    if (service) return { page: 'service-detail', service };
  }

  return { page: 'not-found' };
}

export default function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname);
  const route = getRoute(pathname);
  const page = route.page;
  const service = route.page === 'service-detail' ? route.service : undefined;

  useEffect(() => {
    const updatePath = () => setPathname(window.location.pathname);
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest('a');
      if (
        !anchor ||
        (anchor.target && anchor.target !== '_self') ||
        anchor.hasAttribute('download') ||
        new URL(anchor.href).origin !== window.location.origin
      ) {
        return;
      }

      const url = new URL(anchor.href);
      event.preventDefault();
      window.history.pushState(null, '', `${url.pathname}${url.search}${url.hash}`);
      setPathname(url.pathname);

      if (url.hash) {
        requestAnimationFrame(() => {
          document.querySelector(url.hash)?.scrollIntoView({ behavior: 'smooth' });
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', updatePath);
    document.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('popstate', updatePath);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const pageTitles: Record<string, string> = {
      home: 'S.M Kitchen Interior | Interior Designing & Modular Kitchens in Sonipat',
      about: 'About Us | S.M Kitchen Interior',
      services: 'Interior Design Services | S.M Kitchen Interior',
      contact: 'Contact Us | S.M Kitchen Interior',
      'service-detail': `${service?.title ?? 'Interior Design Service'} | S.M Kitchen Interior`,
      'not-found': 'Page Not Found | S.M Kitchen Interior',
    };
    const descriptions: Record<string, string> = {
      home: 'Premium modular kitchens, wardrobes, TV panels, modular beds, flush doors and customized interior designing solutions in Farmana, Sonipat, Haryana.',
      about:
        'Learn about S.M Kitchen Interior, our design approach and interior solutions for homes in Farmana, Sonipat and nearby areas.',
      services:
        'Explore modular kitchens, wardrobes, TV panels, modular beds, flush doors and customized interior solutions from S.M Kitchen Interior.',
      contact:
        'Contact S.M Kitchen Interior in Farmana, Sonipat, Haryana to discuss your interior design or modular furniture requirements.',
      'service-detail': service
        ? `${service.description} Explore ${service.title} from S.M Kitchen Interior in Farmana, Sonipat, Haryana.`
        : 'Explore interior design services from S.M Kitchen Interior in Farmana, Sonipat, Haryana.',
      'not-found': 'The page you requested could not be found.',
    };

    document.title = pageTitles[page];
    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.append(description);
    }
    description.content = descriptions[page];
  }, [page, pathname, service]);

  return (
    <>
      <Navbar pathname={pathname} />
      <main>
        {page === 'home' && <HomePage />}
        {page === 'about' && <AboutPage />}
        {page === 'services' && <ServicesPage />}
        {page === 'service-detail' && service && (
          <ServiceDetailPage service={service} />
        )}
        {page === 'contact' && (
          <div className="bg-charcoal-950 pt-24">
            <Contact />
          </div>
        )}
        {page === 'not-found' && (
          <section className="min-h-[70vh] bg-charcoal-950 px-5 pb-24 pt-40 text-center text-cream-50">
            <h1 className="font-serif text-4xl font-bold">Page not found</h1>
            <p className="mt-4 text-cream-100/70">The page you are looking for is unavailable.</p>
            <a
              href="/"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-gold-500 to-gold-700 px-6 py-3 font-semibold text-charcoal-950"
            >
              Return Home
            </a>
          </section>
        )}
      </main>
      <Footer />
      <FloatingSocialButtons />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
