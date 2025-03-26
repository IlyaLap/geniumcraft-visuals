
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAnimateOnScroll } from '@/lib/animations';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const BlogPost1 = () => {
  const { elementRef, isVisible } = useAnimateOnScroll(0.1);
  const publishDate = "2025-03-10"; // ISO format for schema
  const modifiedDate = "2025-03-15"; // ISO format for schema
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Schema data for this article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Как увеличить конверсию вашего сайта на 50%",
    "description": "Практические советы и стратегии для значительного повышения конверсии вашего веб-сайта в короткие сроки.",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "datePublished": publishDate,
    "dateModified": modifiedDate,
    "author": {
      "@type": "Organization",
      "name": "Geniumsites",
      "url": "https://geniumsites.ru"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Geniumsites",
      "logo": {
        "@type": "ImageObject",
        "url": "https://iili.io/3CZZRe4.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://geniumsites.ru/blog/increase-conversion"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Как увеличить конверсию вашего сайта на 50% | Geniumsites</title>
        <meta name="description" content="Практические советы и стратегии для значительного повышения конверсии вашего веб-сайта в короткие сроки. Узнайте эффективные методы от экспертов." />
        <meta name="keywords" content="конверсия сайта, повышение конверсии, оптимизация конверсии, CRO, увеличение продаж, оптимизация сайта" />
        <link rel="canonical" href="https://geniumsites.ru/blog/increase-conversion" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-genium-black">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-genium-purple-light hover:text-genium-purple transition-colors mb-8" aria-label="Вернуться к блогу">
                <ArrowLeft size={16} className="mr-2" />
                Вернуться к блогу
              </Link>
              
              <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
                Конверсия
              </Badge>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Как увеличить конверсию вашего сайта на 50%</h1>
              
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <time dateTime="2025-03-10">10 марта 2025</time>
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  7 мин
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-genium-black-light" ref={elementRef}>
          <div className={`container mx-auto px-4 sm:px-6 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="max-w-3xl mx-auto">
              <article className="glass-card p-8 rounded-xl mb-10">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Конверсия веб-сайта"
                  className="w-full h-auto rounded-lg mb-8"
                />
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-lg mb-6">
                    В современном цифровом мире высокая конверсия веб-сайта является ключевым показателем его эффективности. 
                    Увеличение конверсии даже на небольшой процент может значительно повысить доход вашего бизнеса. 
                    В этой статье мы рассмотрим проверенные стратегии, которые помогут увеличить конверсию вашего сайта на 50% и более.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Оптимизация скорости загрузки страниц</h2>
                  <p className="text-gray-300 mb-4">
                    Исследования показывают, что 40% пользователей покидают сайт, если время загрузки превышает 3 секунды. 
                    Каждая дополнительная секунда загрузки снижает конверсию на 7%. Вот несколько способов ускорить ваш сайт:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                    <li>Оптимизация изображений (сжатие без потери качества)</li>
                    <li>Минимизация CSS и JavaScript</li>
                    <li>Использование CDN (Content Delivery Network)</li>
                    <li>Внедрение кэширования браузера</li>
                    <li>Оптимизация мобильной версии сайта</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Улучшение дизайна форм и кнопок призыва к действию</h2>
                  <p className="text-gray-300 mb-4">
                    Форма для заполнения и кнопки призыва к действию (CTA) напрямую влияют на конверсию. 
                    Небольшие изменения в их дизайне могут привести к значительному росту конверсии:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                    <li>Сокращение количества полей в формах до необходимого минимума</li>
                    <li>Использование контрастных цветов для кнопок CTA</li>
                    <li>Применение убедительного текста на кнопках ("Получить консультацию" вместо "Отправить")</li>
                    <li>Добавление социальных доказательств рядом с формами (отзывы, рейтинги)</li>
                    <li>Внедрение автозаполнения полей формы</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Персонализация пользовательского опыта</h2>
                  <p className="text-gray-300 mb-4">
                    Современные пользователи ожидают персонализированного опыта. Согласно исследованиям, 
                    персонализация может повысить конверсию на 30-70%:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                    <li>Сегментация аудитории и адаптация контента под разные группы пользователей</li>
                    <li>Персонализированные рекомендации на основе поведения пользователя</li>
                    <li>Динамический контент, который меняется в зависимости от истории посещений</li>
                    <li>Ретаргетинг для возврата пользователей, которые покинули сайт</li>
                    <li>Персонализированные электронные письма для удержания клиентов</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. A/B тестирование ключевых элементов</h2>
                  <p className="text-gray-300 mb-4">
                    A/B тестирование позволяет сравнивать две версии одной страницы, чтобы определить, 
                    какая из них показывает лучшие результаты. Рекомендуется тестировать:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                    <li>Заголовки и подзаголовки</li>
                    <li>Изображения и видео</li>
                    <li>Цвета, размер и расположение кнопок CTA</li>
                    <li>Длину и формат контента</li>
                    <li>Дизайн и расположение форм</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Оптимизация мобильного опыта</h2>
                  <p className="text-gray-300 mb-4">
                    Более 60% трафика приходит с мобильных устройств, поэтому оптимизация мобильного опыта критически важна:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                    <li>Использование адаптивного дизайна</li>
                    <li>Упрощение навигации для мобильных устройств</li>
                    <li>Оптимизация размера шрифтов и кнопок для удобного нажатия</li>
                    <li>Минимизация необходимости вводить текст на мобильных устройствах</li>
                    <li>Тестирование на различных устройствах и размерах экрана</li>
                  </ul>
                  
                  <h2 className="text-2xl font-bold text-white mt-10 mb-4">Заключение</h2>
                  <p className="text-gray-300 mb-4">
                    Увеличение конверсии на 50% вполне достижимо при комплексном подходе к оптимизации вашего сайта. 
                    Важно помнить, что это непрерывный процесс, требующий регулярного анализа, тестирования и внесения корректировок. 
                    Применяя описанные выше стратегии и постоянно отслеживая их эффективность, вы сможете значительно 
                    повысить конверсию и увеличить доход вашего бизнеса.
                  </p>
                  
                  <div className="text-gray-300 mt-8">
                    <p>
                      Хотите получить профессиональную помощь в увеличении конверсии вашего сайта? 
                      <Link to="/order" className="text-genium-purple-light hover:text-genium-purple ml-1">
                        Закажите консультацию у наших экспертов.
                      </Link>
                    </p>
                    
                    <p className="mt-4">
                      Изучите также нашу статью 
                      <Link to="/blog/seo-optimization-2025" className="text-genium-purple-light hover:text-genium-purple mx-1">
                        SEO-оптимизация в 2025 году
                      </Link>
                      для комплексного подхода к улучшению вашего сайта.
                    </p>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-genium-purple/20">
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="mb-4 sm:mb-0">
                      <Badge variant="outline" className="bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
                        Конверсия
                      </Badge>
                      <Badge variant="outline" className="bg-genium-purple/10 text-genium-purple-light border-genium-purple/30 ml-2">
                        Оптимизация
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2 border-genium-purple/30 text-gray-300 hover:bg-genium-purple/20"
                        aria-label="Поделиться статьей"
                      >
                        <Share2 size={16} />
                        Поделиться
                      </Button>
                      <Link to="/order">
                        <Button className="cta-button">
                          Заказать консультацию
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost1;
