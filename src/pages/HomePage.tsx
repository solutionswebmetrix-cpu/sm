import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
