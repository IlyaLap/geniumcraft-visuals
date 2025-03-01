
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import CaseStudies from '@/components/CaseStudies';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAnimateOnScroll } from '@/lib/animations';
import { ChevronRight } from 'lucide-react';

const ProjectsPage = () => {
  const { elementRef, isVisible } = useAnimateOnScroll(0.1);
  
  useEffect(() => {
    // Set metadata for SEO
    document.title = "Проекты | Geniumsites - Премиум веб-сайты";
    
    // Create meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Портфолио успешных проектов Geniumsites. Ознакомьтесь с нашими кейсами разработки премиальных веб-сайтов с высокой конверсией для российского рынка.');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-genium-black">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
                Наши проекты
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Портфолио наших работ</h1>
              <p className="text-xl text-gray-300">
                Ознакомьтесь с нашими успешными проектами и результатами, которых мы достигли для наших клиентов
              </p>
            </div>
          </div>
        </section>
        
        <CaseStudies />
        
        <section className="py-16 bg-genium-black-light" ref={elementRef}>
          <div className={`container mx-auto px-4 sm:px-6 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="glass-card p-10 rounded-xl max-w-4xl mx-auto">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Хотите увидеть свой проект в нашем портфолио?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Доверьте нам разработку вашего сайта и присоединитесь к списку наших довольных клиентов. Мы поможем вам создать проект, которым вы будете гордиться.
                </p>
                <Link to="/order">
                  <Button className="cta-button">
                    Обсудить проект <ChevronRight size={16} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
