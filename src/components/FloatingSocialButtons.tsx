import { Instagram, Youtube } from 'lucide-react';

export default function FloatingSocialButtons() {
  return (
    <>
      <a
        href="https://www.instagram.com/smkitchensinteriors?utm_source=qr&stkn=MTc0Zmt3cGhudTJieA=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
        className="group fixed bottom-[15rem] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg shadow-pink-900/30 transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-400 sm:right-6"
      >
        <Instagram aria-hidden="true" className="h-8 w-8" />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-md bg-charcoal-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          Follow us on Instagram
        </span>
      </a>
      <a
        href="https://www.youtube.com/@sundermodulerfurnicher"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Subscribe on YouTube"
        className="group fixed bottom-[10.5rem] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-lg shadow-red-900/30 transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400 sm:right-6"
      >
        <Youtube aria-hidden="true" className="h-8 w-8" />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-md bg-charcoal-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          Subscribe on YouTube
        </span>
      </a>
    </>
  );
}
