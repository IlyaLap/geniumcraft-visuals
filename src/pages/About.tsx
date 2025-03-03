
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { useAnimateOnScroll } from '@/lib/animations';
import { CheckCircle, Users, Award, Clock, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const { elementRef: teamRef, isVisible: teamVisible } = useAnimateOnScroll(0.1);
  const { elementRef: statsRef, isVisible: statsVisible } = useAnimateOnScroll(0.1);
  
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
        
        {/* Stats Section */}
        <section className="py-16 bg-genium-black">
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
        <section className="py-16 bg-genium-black-light">
          <div className="container mx-auto px-4 sm:px-6" ref={teamRef}>
            <div className={`max-w-5xl mx-auto text-center mb-16 transition-all duration-1000 ${
              teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
                Наша команда
              </Badge>
              <h2 className="text-3xl font-bold text-white mb-6">Профессионалы своего дела</h2>
              <p className="text-gray-300">
                Наша команда состоит из талантливых дизайнеров, разработчиков и маркетологов, 
                объединенных общей целью — создавать выдающиеся веб-проекты.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Team Member Cards would go here */}
                {[1, 2, 3].map((index) => (
                  <div 
                    key={index}
                    className={`glass-card p-6 rounded-xl text-center transition-all duration-1000 ${
                      teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-24 h-24 rounded-full bg-genium-purple/20 flex items-center justify-center mx-auto mb-4">
                      <Users size={36} className="text-genium-purple-light" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">Специалист {index}</h3>
                    <p className="text-genium-purple-light mb-3">Должность</p>
                    <p className="text-gray-300 text-sm">
                      Опытный профессионал с глубокими знаниями в своей области.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-genium-black">
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
