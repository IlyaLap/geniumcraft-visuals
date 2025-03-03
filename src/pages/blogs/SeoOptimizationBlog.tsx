
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { useAnimateOnScroll } from '@/lib/animations';

const SeoOptimizationBlog = () => {
  const { elementRef, isVisible } = useAnimateOnScroll(0.1);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set metadata for SEO
    document.title = "SEO-оптимизация в 2025 году: что работает, а что нет | Geniumsites";
    
    // Create meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Последние тренды и изменения в алгоритмах поисковых систем, которые влияют на ранжирование вашего сайта в 2025 году.');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[50vh] min-h-[400px]">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="SEO-оптимизация в 2025 году" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-genium-black/70 via-genium-black/50 to-genium-black"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6">
              <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
                SEO
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
                SEO-оптимизация в 2025 году: что работает, а что нет
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  15 февраля 2025
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  10 мин чтения
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
                    Последние тренды и изменения в алгоритмах поисковых систем, которые влияют на ранжирование вашего сайта. 
                    Разбираем современные стратегии SEO и практики, которые уже не эффективны в текущих реалиях.
                  </p>
                  
                  <h2>Эволюция поисковых алгоритмов в 2025 году</h2>
                  
                  <p>
                    За последние годы алгоритмы поисковых систем претерпели значительные изменения. 
                    Google и Яндекс внедрили передовые технологии машинного обучения и искусственного интеллекта, 
                    которые позволяют им лучше понимать намерения пользователей и контекст запросов.
                  </p>
                  
                  <h2>Что работает в SEO в 2025 году</h2>
                  
                  <h3>1. Контент, ориентированный на намерения пользователя</h3>
                  <p>
                    Современные поисковые системы оценивают не только ключевые слова, но и то, насколько 
                    хорошо контент отвечает на запрос пользователя. Создавайте информативный, полезный и 
                    структурированный контент, который решает проблемы вашей аудитории.
                  </p>
                  
                  <h3>2. E-E-A-T (Опыт, Экспертность, Авторитетность, Надежность)</h3>
                  <p>
                    Google расширил концепцию E-A-T, добавив компонент "Опыт". Теперь важно демонстрировать 
                    не только экспертность, но и практический опыт в вашей нише. Персональные истории, 
                    подтвержденные примеры и реальные кейсы помогают повысить E-E-A-T вашего сайта.
                  </p>
                  
                  <h3>3. Оптимизация для голосового поиска</h3>
                  <p>
                    С ростом популярности голосовых помощников оптимизация для голосовых запросов стала 
                    необходимостью. Используйте естественные, разговорные фразы и давайте четкие ответы 
                    на распространенные вопросы.
                  </p>
                  
                  <h3>4. Пользовательский опыт (UX)</h3>
                  <p>
                    Core Web Vitals и другие метрики пользовательского опыта стали важнейшими факторами 
                    ранжирования. Быстрая загрузка страниц, отзывчивый дизайн и удобная навигация напрямую 
                    влияют на позиции в поисковой выдаче.
                  </p>
                  
                  <h2>Что больше не работает в SEO</h2>
                  
                  <h3>1. Переоптимизация текстов</h3>
                  <p>
                    Насыщение текста ключевыми словами не только не помогает, но и может навредить. 
                    Современные алгоритмы легко распознают переоптимизированный контент и понижают его в выдаче.
                  </p>
                  
                  <h3>2. Массовое наращивание ссылочной массы</h3>
                  <p>
                    Количество больше не преобладает над качеством. Несколько авторитетных и релевантных 
                    ссылок принесут больше пользы, чем сотни низкокачественных.
                  </p>
                  
                  <h3>3. Пренебрежение мобильной версией</h3>
                  <p>
                    Индексация по принципу mobile-first стала стандартом. Сайты, которые не оптимизированы 
                    для мобильных устройств, теряют позиции в поисковой выдаче.
                  </p>
                  
                  <h2>Заключение</h2>
                  
                  <p>
                    SEO в 2025 году требует комплексного подхода, ориентированного на пользователя. 
                    Фокусируйтесь на создании качественного контента, улучшении пользовательского опыта 
                    и построении естественного авторитета в вашей нише.
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
                          <p className="text-xs text-gray-400">5 апреля 2025</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Нужна помощь с SEO?</h3>
                  <p className="text-gray-300 mb-4">Наши эксперты помогут оптимизировать ваш сайт для поисковых систем.</p>
                  <Link to="/order">
                    <Button className="cta-button w-full">Заказать SEO-оптимизацию</Button>
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

export default SeoOptimizationBlog;
