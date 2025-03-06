
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { useAnimateOnScroll } from '@/lib/animations';
import { CheckCircle, Users, Award, Clock, Sparkles, Star, Brain, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const { elementRef: teamRef, isVisible: teamVisible } = useAnimateOnScroll(0.1);
  const { elementRef: statsRef, isVisible: statsVisible } = useAnimateOnScroll(0.1);
  const { elementRef: techRef, isVisible: techVisible } = useAnimateOnScroll(0.1);
  
  useEffect(() => {
    // Set metadata for SEO
    document.title = "О нас | Geniumsites - Премиум веб-сайты";
    
    // Create meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Узнайте больше о веб-агентстве Geniumsites. Мы создаем премиум веб-сайты с высокой конверсией для бизнеса.');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-genium-black">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
                О нас
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Создаем сайты, которые работают на вас</h1>
              <p className="text-xl text-gray-300">
                Мы — команда профессионалов, специализирующихся на создании высококонверсионных веб-сайтов для бизнеса любого масштаба.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 bg-genium-black-light">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="glass-card p-8 md:p-12 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
                      Наша миссия
                    </Badge>
                    <h2 className="text-3xl font-bold text-white mb-6">Создавать цифровой опыт, который превосходит ожидания</h2>
                    <p className="text-gray-300 mb-6">
                      Мы стремимся не просто создавать красивые сайты, а разрабатывать эффективные инструменты для роста вашего бизнеса.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-genium-purple-light mr-3 mt-1" />
                        <span className="text-gray-300">Ориентированность на результат</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-genium-purple-light mr-3 mt-1" />
                        <span className="text-gray-300">Индивидуальный подход к каждому клиенту</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-genium-purple-light mr-3 mt-1" />
                        <span className="text-gray-300">Постоянное развитие и совершенствование</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="aspect-square rounded-xl overflow-hidden bg-genium-purple/20 flex items-center justify-center">
                      <Sparkles size={80} className="text-genium-purple-light opacity-60" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg bg-genium-purple/30 -z-10"></div>
                    <div className="absolute -top-4 -left-4 w-32 h-32 rounded-lg bg-genium-purple/10 -z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Technology Section */}
        <section className="py-16 bg-genium-black" ref={techRef}>
          <div className={`container mx-auto px-4 sm:px-6 transition-all duration-1000 ${
            techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
                  Наша технология
                </Badge>
                <h2 className="text-3xl font-bold text-white mb-6">AI-усиленная платформа разработки</h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Мы используем проприетарную AI-технологию, которая значительно повышает качество, эффективность и скорость 
                  выполнения проектов, позволяя нам создавать исключительные веб-сайты в рекордно короткие сроки.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-card p-6 rounded-xl text-center">
                  <div className="w-16 h-16 rounded-full bg-genium-purple/20 flex items-center justify-center mx-auto mb-4">
                    <Brain size={32} className="text-genium-purple-light" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Умная оптимизация</h3>
                  <p className="text-gray-300">
                    Наши AI-алгоритмы автоматически оптимизируют контент, структуру и код сайта для максимальной конверсии и SEO-эффективности.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl text-center">
                  <div className="w-16 h-16 rounded-full bg-genium-purple/20 flex items-center justify-center mx-auto mb-4">
                    <Cpu size={32} className="text-genium-purple-light" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Ускоренная разработка</h3>
                  <p className="text-gray-300">
                    Благодаря автоматизации рутинных процессов, мы можем доставлять первые прототипы за 24 часа, сохраняя высокое качество.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl text-center">
                  <div className="w-16 h-16 rounded-full bg-genium-purple/20 flex items-center justify-center mx-auto mb-4">
                    <Star size={32} className="text-genium-purple-light" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Персонализация</h3>
                  <p className="text-gray-300">
                    AI-анализ целевой аудитории позволяет создавать сайты, идеально соответствующие потребностям ваших клиентов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-genium-black-light">
          <div className="container mx-auto px-4 sm:px-6" ref={statsRef}>
            <div className={`max-w-5xl mx-auto transition-all duration-1000 ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="glass-card p-6 rounded-xl text-center">
                  <div className="w-16 h-16 rounded-full bg-genium-purple/20 flex items-center justify-center mx-auto mb-4">
                    <Star size={32} className="text-genium-purple-light" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
                  <p className="text-gray-300">Выполненных проектов</p>
                </div>
                <div className="glass-card p-6 rounded-xl text-center">
                  <div className="w-16 h-16 rounded-full bg-genium-purple/20 flex items-center justify-center mx-auto mb-4">
                    <Users size={32} className="text-genium-purple-light" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">15+</h3>
                  <p className="text-gray-300">Специалистов в команде</p>
                </div>
                <div className="glass-card p-6 rounded-xl text-center">
                  <div className="w-16 h-16 rounded-full bg-genium-purple/20 flex items-center justify-center mx-auto mb-4">
                    <Award size={32} className="text-genium-purple-light" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">7+</h3>
                  <p className="text-gray-300">Лет опыта</p>
                </div>
                <div className="glass-card p-6 rounded-xl text-center">
                  <div className="w-16 h-16 rounded-full bg-genium-purple/20 flex items-center justify-center mx-auto mb-4">
                    <Clock size={32} className="text-genium-purple-light" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
                  <p className="text-gray-300">Завершение в срок</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-genium-black">
          <div className="container mx-auto px-4 sm:px-6" ref={teamRef}>
            <div className={`max-w-5xl mx-auto text-center mb-16 transition-all duration-1000 ${
              teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
                Наша команда
              </Badge>
              <h2 className="text-3xl font-bold text-white mb-6">Профессионалы своего дела</h2>
              <p className="text-gray-300">
                Наша команда состоит из талантливых специалистов, объединенных общей целью — создавать выдающиеся веб-проекты, 
                которые приносят реальные результаты нашим клиентам.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Founder 1 */}
                <div 
                  className={`glass-card p-6 rounded-xl text-center transition-all duration-1000 ${
                    teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: '100ms' }}
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-genium-purple/10">
                    <img 
                      src="/lovable-uploads/9e43bffa-7678-4869-a5a2-faf2b0608ab6.png" 
                      alt="Илья Лаптев" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">Илья Лаптев</h3>
                  <p className="text-genium-purple-light mb-3">Соучредитель и Коммерческий директор</p>
                  <p className="text-gray-300 text-sm">
                    Коммерческий эксперт на международных рынках США и ЕС. Сотрудничал с несколькими быстрорастущими 
                    AI-компаниями и имеет опыт работы с NASDAQ. Специализируется на стратегическом развитии и международных деловых отношениях.
                  </p>
                </div>

                {/* Founder 2 */}
                <div 
                  className={`glass-card p-6 rounded-xl text-center transition-all duration-1000 ${
                    teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-genium-purple/10">
                    <img 
                      src="/lovable-uploads/a6cbf52c-2696-4fe0-b697-3a819b746888.png" 
                      alt="Евгения Жирякова" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">Евгения Жирякова</h3>
                  <p className="text-genium-purple-light mb-3">Соучредитель и Директор по маркетингу</p>
                  <p className="text-gray-300 text-sm">
                    Специалист по онлайн-маркетингу с обширным опытом работы на российском рынке. 
                    Реализовала более 100 индивидуальных проектов, обеспечивая высокие показатели конверсии и 
                    рост онлайн-присутствия для бизнесов различных направлений.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-genium-black-light">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Готовы начать свой проект?</h2>
              <p className="text-gray-300 mb-8">
                Давайте обсудим, как мы можем помочь реализовать ваши идеи и достичь бизнес-целей с помощью качественного веб-сайта.
              </p>
              <Link to="/contacts#contact">
                <Button className="cta-button">Связаться с нами</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
