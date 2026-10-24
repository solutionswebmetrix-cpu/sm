import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import { navLinks } from '@/data/siteData';
import { useActiveSection, useScrollPosition } from '@/hooks/useScroll';

const sectionIds = ['home', 'about', 'services', 'contact'];

type NavbarProps = {
  pathname: string;
};

export default function Navbar({ pathname }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollPosition();
  const activeSection = useActiveSection(sectionIds);
  const visibleNavLinks = navLinks;

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal-950/95 backdrop-blur-md shadow-luxury py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
          <a
            href="/#home"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
            aria-label="S.M Kitchen Interior home"
          >
            <img
              src={logo}
              alt="S.M Kitchen Interior"
              className="h-14 w-20 object-contain sm:h-16 sm:w-24"
            />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {visibleNavLinks.map((link) => {
              const sectionId = link.href === '/' ? 'home' : link.href.slice(1);
              const isActive =
                (pathname === '/' && activeSection === sectionId) ||
                pathname === link.href ||
                (pathname.startsWith('/services/') && link.href === '/services');
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-gold-400'
                        : 'text-cream-100/80 hover:text-gold-300'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-gold-400 transition-all duration-300 ${
                        isActive ? 'w-2/3' : 'w-0'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="/contact"
              className="rounded-full bg-gradient-to-r from-gold-500 to-gold-700 px-5 py-2.5 text-sm font-semibold text-charcoal-950 shadow-gold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get Free Consultation
            </a>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-charcoal-800/50 text-cream-100 transition-colors hover:bg-charcoal-700 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-charcoal-950/70 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 max-w-[80vw] bg-charcoal-950 shadow-luxury transition-transform duration-400 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-full flex-col overflow-y-auto px-6 py-24">
            <ul className="flex flex-col gap-1">
              {visibleNavLinks.map((link) => {
                const sectionId = link.href === '/' ? 'home' : link.href.slice(1);
                const isActive =
                  (pathname === '/' && activeSection === sectionId) ||
                  pathname === link.href ||
                  (pathname.startsWith('/services/') && link.href === '/services');
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-wine-800/40 text-gold-400'
                          : 'text-cream-100/80 hover:bg-charcoal-800 hover:text-gold-300'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 rounded-full bg-gradient-to-r from-gold-500 to-gold-700 px-5 py-3 text-center text-sm font-semibold text-charcoal-950 shadow-gold transition-transform hover:scale-105"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
