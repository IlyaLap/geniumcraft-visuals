
import { useState, useEffect } from 'react';
import { ChevronRight, Clock, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-genium-purple/20 rounded-full filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-[20%] left-[5%] w-64 h-64 bg-genium-purple-dark/20 rounded-full filter blur-[80px] animate-float animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div 
              className={`hero-badge mb-6 ${isLoaded ? 'animate-slide-in opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <Clock size={14} className="mr-1" /> Премиум веб-сайты за 24 часа
            </div>

            {/* Main Headline */}
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: '300ms',
                animation: isLoaded ? 'hero-text 0.8s ease-out forwards' : 'none'
              }}
            >
              Создаем <span className="text-gradient">высококонверсионные</span> веб-сайты для бизнеса
            </h1>

            {/* Subheadline */}
            <p 
              className={`text-xl text-gray-300 mb-10 max-w-2xl ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: '500ms',
                animation: isLoaded ? 'hero-text 0.8s ease-out forwards' : 'none'
              }}
            >
              Мы помогаем российским компаниям привлекать больше клиентов, используя SEO-оптимизированные веб-сайты с премиальным дизайном и высокой конверсией.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: '700ms',
                animation: isLoaded ? 'hero-text 0.8s ease-out forwards' : 'none'
              }}
            >
              <Button className="cta-button text-base" onClick={() => window.location.href = '/contact'}>
                Запланировать встречу <ChevronRight size={16} className="ml-1" />
              </Button>
              <Button variant="outline" className="cta-button-outline text-base">
                Узнать больше
              </Button>
            </div>

            {/* Feature Badges */}
            <div 
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 ${
                isLoaded ? 'opacity-100 staggered-fade-in' : 'opacity-0'
              }`}
            >
              <div className="glass-card p-4 flex items-center">
                <div className="p-2 bg-genium-purple/20 rounded-full mr-3">
                  <Clock size={20} className="text-genium-purple-light" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Быстрая разработка</h3>
                  <p className="text-sm text-gray-300">Сайт за 24 часа</p>
                </div>
              </div>
              
              <div className="glass-card p-4 flex items-center">
                <div className="p-2 bg-genium-purple/20 rounded-full mr-3">
                  <Star size={20} className="text-genium-purple-light" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Премиум качество</h3>
                  <p className="text-sm text-gray-300">Уникальный дизайн</p>
                </div>
              </div>
              
              <div className="glass-card p-4 flex items-center">
                <div className="p-2 bg-genium-purple/20 rounded-full mr-3">
                  <Zap size={20} className="text-genium-purple-light" />
                </div>
                <div>
                  <h3 className="font-medium text-white">SEO-оптимизация</h3>
                  <p className="text-sm text-gray-300">Высокая конверсия</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
