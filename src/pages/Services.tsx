
import { useEffect } from 'react';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAnimateOnScroll } from '@/lib/animations';
import { ChevronRight } from 'lucide-react';

const ServicesPage = () => {
  const { elementRef, isVisible } = useAnimateOnScroll(0.1);
  
  useEffect(() => {
    // Set metadata for SEO
    document.title = "Услуги | Geniumsites - Премиум веб-сайты";
    
    // Create meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Премиальные услуги веб-разработки от Geniumsites: дизайн сайтов, разработка, SEO-оптимизация и поддержка для вашего бизнеса.');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-genium-black">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
                Наши услуги
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Комплексные услуги веб-разработки</h1>
              <p className="text-xl text-gray-300">
                Мы предлагаем полный спектр услуг для создания и продвижения вашего цифрового присутствия
              </p>
            </div>
          </div>
        </section>
        
        <Services />
        
        <section className="py-16 bg-genium-black" ref={elementRef}>
          <div className={`container mx-auto px-4 sm:px-6 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Готовы обсудить ваш проект?</h2>
              <p className="text-gray-300 mb-8">
                Свяжитесь с нами сегодня, чтобы получить консультацию по вашему проекту и узнать, как мы можем помочь вам достичь ваших целей.
              </p>
              <Button className="cta-button">
                Заказать консультацию <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
