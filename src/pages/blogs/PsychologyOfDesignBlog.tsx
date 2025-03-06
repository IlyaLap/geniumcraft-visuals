
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { useAnimateOnScroll } from '@/lib/animations';

const PsychologyOfDesignBlog = () => {
  const { elementRef, isVisible } = useAnimateOnScroll(0.1);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set metadata for SEO
    document.title = "Психология дизайна: как цвета влияют на принятие решений | Geniumsites";
    
    // Create meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Научный подход к выбору цветовой палитры для вашего сайта, чтобы влиять на решения пользователей.');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[50vh] min-h-[400px]">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Психология дизайна" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-genium-black/70 via-genium-black/50 to-genium-black"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6">
              <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
                Дизайн
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
                Психология дизайна: как цвета влияют на принятие решений
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  20 января 2025
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  5 мин чтения
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
                    Научный подход к выбору цветовой палитры для вашего сайта, чтобы влиять на решения пользователей. 
                    Анализируем психологическое воздействие различных цветов и их комбинаций на целевую аудиторию.
                  </p>
                  
                  <h2 className="mt-8 mb-4">Почему цвета имеют значение</h2>
                  
                  <p className="mb-6">
                    Исследования показывают, что до 90% первоначальных оценок продукта основаны только на цвете. 
                    Цвета вызывают определенные эмоции и ассоциации, которые могут подтолкнуть пользователя к 
                    принятию решения или, наоборот, отпугнуть его.
                  </p>
                  
                  <h2 className="mt-8 mb-4">Психологическое воздействие основных цветов</h2>
                  
                  <h3 className="mt-6 mb-3">Синий — доверие и безопасность</h3>
                  
                  <p className="mb-6">
                    Синий цвет ассоциируется со стабильностью, надежностью и профессионализмом. Он часто используется 
                    финансовыми учреждениями и технологическими компаниями для создания ощущения безопасности и доверия.
                  </p>
                  
                  <h3 className="mt-6 mb-3">Красный — срочность и энергия</h3>
                  
                  <p className="mb-6">
                    Красный цвет привлекает внимание и создает ощущение срочности. Он может стимулировать импульсивные 
                    покупки и часто используется для кнопок призыва к действию и акционных предложений.
                  </p>
                  
                  <h3 className="mt-6 mb-3">Зеленый — рост и гармония</h3>
                  
                  <p className="mb-6">
                    Зеленый ассоциируется с природой, здоровьем и ростом. Он создает ощущение баланса и часто используется 
                    в сферах здравоохранения, экологии и финансов (особенно в контексте инвестиций и прибыли).
                  </p>
                  
                  <h3 className="mt-6 mb-3">Фиолетовый — креативность и роскошь</h3>
                  
                  <p className="mb-6">
                    Фиолетовый традиционно связан с роскошью, творчеством и мудростью. Он эффективен для брендов, 
                    которые хотят выделиться и подчеркнуть свою уникальность или премиальность.
                  </p>
                  
                  <h2 className="mt-8 mb-4">Практические рекомендации по выбору цветов</h2>
                  
                  <h3 className="mt-6 mb-3">1. Учитывайте свою целевую аудиторию</h3>
                  
                  <p className="mb-6">
                    Восприятие цветов может различаться в зависимости от возраста, пола, культурного контекста и других 
                    демографических факторов. Изучите свою целевую аудиторию, чтобы выбрать цвета, которые будут 
                    резонировать именно с ней.
                  </p>
                  
                  <h3 className="mt-6 mb-3">2. Следуйте правилу 60-30-10</h3>
                  
                  <p className="mb-6">
                    Используйте доминирующий цвет для 60% дизайна, вторичный цвет для 30% и акцентный цвет для 10%. 
                    Это создаст визуальный баланс и иерархию, которая поможет направлять внимание пользователя.
                  </p>
                  
                  <h3 className="mt-6 mb-3">3. Тестируйте разные варианты</h3>
                  
                  <p className="mb-6">
                    A/B тестирование — лучший способ определить, какие цвета действительно работают для вашей аудитории. 
                    Особое внимание уделите цветам CTA-кнопок и других ключевых элементов.
                  </p>
                  
                  <h2 className="mt-8 mb-4">Заключение</h2>
                  
                  <p className="mb-6">
                    Цвета — мощный инструмент в руках дизайнера, способный существенно повлиять на восприятие бренда 
                    и действия пользователя. Осознанный выбор цветовой палитры, основанный на понимании психологии цвета 
                    и особенностей вашей аудитории, поможет создать эффективный и убедительный дизайн.
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
                  <h3 className="text-xl font-semibold text-white mb-4">Нужен профессиональный дизайн?</h3>
                  <p className="text-gray-300 mb-4">Наши дизайнеры создадут уникальный дизайн, который будет конвертировать посетителей в клиентов.</p>
                  <Link to="/order">
                    <Button className="cta-button w-full">Заказать дизайн</Button>
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

export default PsychologyOfDesignBlog;
