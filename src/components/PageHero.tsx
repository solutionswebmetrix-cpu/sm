type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
};

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="bg-charcoal-950 bg-grain px-5 pb-16 pt-36 text-cream-50 lg:pb-20">
      <div className="mx-auto max-w-7xl lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-cream-100/60">
          {breadcrumbs.map((item, index) => (
            <span key={item.label}>
              {index > 0 && <span className="mx-2 text-gold-400">/</span>}
              {item.href ? (
                <a href={item.href} className="transition-colors hover:text-gold-400">
                  {item.label}
                </a>
              ) : (
                <span aria-current="page" className="text-cream-100">
                  {item.label}
                </span>
              )}
            </span>
          ))}
        </nav>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-cream-100/65 sm:text-lg">
          {description}
        </p>
        <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-gold-500 to-gold-700" />
      </div>
    </section>
  );
}
