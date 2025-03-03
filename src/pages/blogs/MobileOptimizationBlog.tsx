
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { useAnimateOnScroll } from '@/lib/animations';

const MobileOptimizationBlog = () => {
  const { elementRef, isVisible } = useAnimateOnScroll(0.1);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set metadata for SEO
    document.title = "Мобильная оптимизация: почему это критически важно в 2025 году | Geniumsites";
    
    // Create meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Как адаптировать ваш сайт для мобильных устройств и почему это может быть решающим фактором для успеха в 2025 году.');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[50vh] min-h-[400px]">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Мобильная оптимизация" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-genium-black/70 via-genium-black/50 to-genium-black"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6">
              <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
                Оптимизация
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
                Мобильная оптимизация: почему это критически важно в 2025 году
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  5 апреля 2025
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  8 мин чтения
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
                    Как адаптировать ваш сайт для мобильных устройств и почему это может быть решающим фактором для успеха. 
                    Детальный разбор технических аспектов адаптивного дизайна и влияние мобильной оптимизации на конверсию и SEO.
                  </p>
                  
                  <h2>Мобильный трафик в 2025 году</h2>
                  
                  <p>
                    По данным последних исследований, более 75% всего интернет-трафика приходится на мобильные устройства. 
                    Эта тенденция продолжает расти, и игнорирование мобильной оптимизации может стоить вам значительной 
                    части потенциальных клиентов.
                  </p>
                  
                  <h2>Как мобильная оптимизация влияет на SEO</h2>
                  
                  <p>
                    С введением индексации по принципу mobile-first, Google и другие поисковые системы в первую очередь 
                    анализируют мобильную версию вашего сайта. Это означает, что качество мобильного опыта напрямую 
                    влияет на позиции в поисковой выдаче.
                  </p>
                  
                  <h3>Core Web Vitals и мобильная производительность</h3>
                  <p>
                    Core Web Vitals — набор метрик, которые оценивают пользовательский опыт на странице. Три ключевые 
                    метрики (LCP, FID и CLS) особенно важны для мобильных устройств, где пользователи менее терпеливы 
                    и более чувствительны к задержкам и визуальной нестабильности.
                  </p>
                  
                  <h2>Ключевые элементы мобильной оптимизации</h2>
                  
                  <h3>1. Адаптивный дизайн</h3>
                  <p>
                    Адаптивный дизайн обеспечивает оптимальное отображение сайта на устройствах с различными размерами 
                    экрана. Используйте гибкие макеты на основе сетки, гибкие изображения и медиа-запросы CSS.
                  </p>
                  
                  <h3>2. Оптимизация производительности</h3>
                  <p>
                    Мобильные устройства часто работают в условиях ограниченной пропускной способности и вычислительной 
                    мощности. Оптимизируйте размер файлов, минимизируйте код, используйте кеширование браузера и отложенную 
                    загрузку для неприоритетных ресурсов.
                  </p>
                  
                  <h3>3. Удобство навигации</h3>
                  <p>
                    Обеспечьте простую и интуитивно понятную навигацию для пользователей мобильных устройств. Используйте 
                    достаточно крупные кнопки, обеспечьте достаточное расстояние между интерактивными элементами и 
                    реализуйте понятное мобильное меню.
                  </p>
                  
                  <h3>4. Оптимизация форм</h3>
                  <p>
                    Формы должны быть максимально просты в заполнении на мобильных устройствах. Используйте соответствующие 
                    типы полей ввода, автозаполнение, и минимизируйте количество полей.
                  </p>
                  
                  <h2>Практические рекомендации для бизнеса</h2>
                  
                  <h3>1. Регулярно тестируйте ваш сайт на разных устройствах</h3>
                  <p>
                    Используйте такие инструменты, как Google Mobile-Friendly Test и Chrome DevTools для проверки 
                    мобильной версии вашего сайта.
                  </p>
                  
                  <h3>2. Отслеживайте аналитику мобильных пользователей</h3>
                  <p>
                    Анализируйте поведение мобильных пользователей на вашем сайте. Где они проводят больше всего времени? 
                    Где покидают сайт? Какие действия совершают?
                  </p>
                  
                  <h3>3. Инвестируйте в AMP и PWA</h3>
                  <p>
                    Технологии Accelerated Mobile Pages (AMP) и Progressive Web Apps (PWA) помогают создать 
                    исключительно быстрый и удобный мобильный опыт.
                  </p>
                  
                  <h2>Заключение</h2>
                  
                  <p>
                    Мобильная оптимизация в 2025 году — это не просто один из аспектов веб-разработки, а критически 
                    важная составляющая успешной онлайн-стратегии. Сайты, которые обеспечивают превосходный мобильный 
                    опыт, не только получают преимущество в поисковой выдаче, но и значительно повышают конверсию и 
                    лояльность пользователей.
                  </p>
                </article>
                
                <div className="mt-12 pt-8 border-t border-genium-black-light flex items-center justify-between">
                  <Link to="/blog">
                    <Button variant="outline" className="flex items-center gap-2 border-genium-purple/30 text-gray-300 hover:bg-genium-purple/20">
                      <ArrowLeft size={16} />
                      Назад к блогу
                    </Button>
                  </Link>
                  
                  <Button variant="outline" className="flex items-center gap-2 border-genium-purple/30 text-gray-300 hover:bg-genium-purple/20">
                    <Share2 size={16} />
                    Поделиться
                  </Button>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Другие статьи</h3>
                  <div className="space-y-4">
                    <Link to="/blog/increase-conversion" className="block group">
                      <div className="flex gap-3">
                        <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                            alt="Конверсия" 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h4 className="text-white group-hover:text-genium-purple-light transition-colors">Как увеличить конверсию сайта</h4>
                          <p className="text-xs text-gray-400">10 марта 2025</p>
                        </div>
                      </div>
                    </Link>
                    
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
                          <p className="text-xs text-gray-400">15 февраля 2025</p>
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
                          <p className="text-xs text-gray-400">20 января 2025</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Нужна мобильная оптимизация?</h3>
                  <p className="text-gray-300 mb-4">Наши эксперты помогут адаптировать ваш сайт для идеальной работы на мобильных устройствах.</p>
                  <Link to="/order">
                    <Button className="cta-button w-full">Заказать оптимизацию</Button>
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

export default MobileOptimizationBlog;
