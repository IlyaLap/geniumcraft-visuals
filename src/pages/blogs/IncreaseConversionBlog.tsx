
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { useAnimateOnScroll } from '@/lib/animations';

const IncreaseConversionBlog = () => {
  const { elementRef, isVisible } = useAnimateOnScroll(0.1);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set metadata for SEO
    document.title = "Как увеличить конверсию вашего сайта на 50% | Geniumsites";
    
    // Create meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Практические советы и стратегии для значительного повышения конверсии вашего веб-сайта в короткие сроки.');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[50vh] min-h-[400px]">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Как увеличить конверсию вашего сайта на 50%" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-genium-black/70 via-genium-black/50 to-genium-black"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6">
              <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
                Конверсия
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
                Как увеличить конверсию вашего сайта на 50%
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  15 декабря 2024
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  7 мин чтения
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section className="bg-genium-black py-16" ref={elementRef}>
          <div className={`container mx-auto px-4 sm:px-6 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12">
              <div className="glass-card p-8 rounded-xl">
                <article className="prose prose-invert max-w-none">
                  <p className="lead text-xl text-gray-300 mb-8">
                    Практические советы и стратегии для значительного повышения конверсии вашего веб-сайта в короткие сроки. 
                    Узнайте, какие элементы дизайна и UX имеют наибольшее влияние на взаимодействие пользователей с вашим сайтом.
                  </p>
                  
                  <h2 className="mt-8 mb-4">Что такое конверсия и почему она важна</h2>
                  
                  <p className="mb-6">
                    Конверсия — это процент посетителей сайта, которые выполняют целевое действие (покупка, 
                    заполнение формы, подписка на рассылку и т.д.). Даже небольшое увеличение конверсии может 
                    значительно повысить доходность вашего бизнеса без привлечения дополнительного трафика.
                  </p>
                  
                  <h2 className="mt-8 mb-4">Стратегии увеличения конверсии</h2>
                  
                  <h3 className="mt-6 mb-3">1. Оптимизация скорости загрузки</h3>
                  
                  <p className="mb-6">
                    Согласно исследованиям, 40% пользователей покидают сайт, если страница загружается более 3 секунд. 
                    Оптимизация изображений, использование кэширования и выбор надежного хостинга могут существенно 
                    повысить скорость загрузки вашего сайта.
                  </p>
                  
                  <h3 className="mt-6 mb-3">2. Четкие призывы к действию (CTA)</h3>
                  
                  <p className="mb-6">
                    Эффективные CTA должны быть заметными, контрастными и содержать четкое указание на то, что произойдет 
                    после клика. Замена стандартного текста «Отправить» на более конкретный, например, «Получить бесплатную консультацию», 
                    может увеличить конверсию на 30-40%.
                  </p>
                  
                  <h3 className="mt-6 mb-3">3. Социальные доказательства</h3>
                  
                  <p className="mb-6">
                    Отзывы клиентов, кейсы, количество пользователей и логотипы известных клиентов повышают доверие к вашему 
                    сайту и могут увеличить конверсию на 15-20%.
                  </p>
                  
                  <h3 className="mt-6 mb-3">4. A/B тестирование</h3>
                  
                  <p className="mb-6">
                    Регулярное тестирование различных вариантов заголовков, изображений, CTA и форм позволяет определить, 
                    какие элементы лучше конвертируют посетителей в клиентов.
                  </p>
                  
                  <h3 className="mt-6 mb-3">5. Упрощение форм</h3>
                  
                  <p className="mb-6">
                    Каждое дополнительное поле в форме снижает конверсию на 5-10%. Запрашивайте только самую необходимую 
                    информацию, остальное можно уточнить позже.
                  </p>
                  
                  <h2 className="mt-8 mb-4">Как измерить результаты</h2>
                  
                  <p className="mb-6">
                    Используйте аналитические инструменты (Google Analytics, Яндекс.Метрика) для отслеживания конверсий и 
                    поведения пользователей. Анализируйте тепловые карты и записи сессий, чтобы определить, где пользователи 
                    сталкиваются с трудностями.
                  </p>
                  
                  <h2 className="mt-8 mb-4">Заключение</h2>
                  
                  <p className="mb-6">
                    Увеличение конверсии — это непрерывный процесс оптимизации и тестирования. Применяя описанные выше 
                    стратегии, вы сможете постепенно добиться значительных результатов и повысить эффективность вашего сайта.
                  </p>
                </article>
                
                <div className="mt-12 pt-8 border-t border-genium-black-light flex items-center justify-between">
                  <Link to="/blog">
                    <Button variant="outline" className="flex items-center gap-2 border-genium-purple/30 text-gray-300 hover:bg-genium-purple/20">
                      <ArrowLeft size={16} />
                      Назад к блогу
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Другие статьи</h3>
                  <div className="space-y-4">
                    <Link to="/blog/seo-optimization-2025" className="block group">
                      <div className="flex gap-3">
                        <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                            alt="SEO" 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h4 className="text-white group-hover:text-genium-purple-light transition-colors">SEO-оптимизация в 2025 году</h4>
                          <p className="text-xs text-gray-400">10 января 2025</p>
                        </div>
                      </div>
                    </Link>
                    
                    <Link to="/blog/psychology-of-design" className="block group">
                      <div className="flex gap-3">
                        <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                            alt="Дизайн" 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h4 className="text-white group-hover:text-genium-purple-light transition-colors">Психология дизайна</h4>
                          <p className="text-xs text-gray-400">5 февраля 2025</p>
                        </div>
                      </div>
                    </Link>
                    
                    <Link to="/blog/mobile-optimization" className="block group">
                      <div className="flex gap-3">
                        <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                            alt="Мобильная оптимизация" 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h4 className="text-white group-hover:text-genium-purple-light transition-colors">Мобильная оптимизация</h4>
                          <p className="text-xs text-gray-400">28 февраля 2025</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Нужна помощь с конверсией?</h3>
                  <p className="text-gray-300 mb-4">Наши эксперты помогут оптимизировать ваш сайт и увеличить конверсию.</p>
                  <Link to="/order">
                    <Button className="cta-button w-full">Заказать консультацию</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IncreaseConversionBlog;
