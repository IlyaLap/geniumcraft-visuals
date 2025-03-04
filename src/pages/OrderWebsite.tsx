
import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAnimateOnScroll } from '@/lib/animations';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderWebsitePage = () => {
  const { elementRef, isVisible } = useAnimateOnScroll(0.1);
  const contactFormRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Set metadata for SEO
    document.title = "Заказать сайт | Geniumsites - Премиум веб-сайты";
    
    // Create meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Закажите премиальный веб-сайт с высокой конверсией от Geniumsites. Индивидуальный дизайн, быстрая разработка и SEO-оптимизация за 24 часа.');
  }, []);

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Pricing plans
  const pricingPlans = [
    {
      name: "Микро-сайт",
      price: "от 30 000 ₽",
      description: "Идеальное экономичное решение",
      features: [
        "1 лендинг",
        "Адаптивная вёрстка",
        "Базовая SEO-оптимизация",
        "2 правки до утверждения",
        "Доставка в виде исходного кода"
      ],
      popular: false
    },
    {
      name: "Стандарт",
      price: "от 60 000 ₽",
      description: "Идеально для малого бизнеса и стартапов",
      features: [
        "Дизайн до 5 страниц",
        "Адаптивная вёрстка",
        "Базовая SEO-оптимизация",
        "4 правки до утверждения",
        "Полная интеграция"
      ],
      popular: false
    },
    {
      name: "Премиум",
      price: "от 120 000 ₽",
      description: "Оптимальное решение для растущего бизнеса",
      features: [
        "Дизайн до 10 страниц",
        "Адаптивная вёрстка",
        "Расширенная SEO-оптимизация",
        "7 правок до утверждения",
        "3 месяца поддержки",
        "Прототип за 24 часа"
      ],
      popular: true
    },
    {
      name: "Бизнес",
      price: "от 250 000 ₽",
      description: "Комплексное решение для крупного бизнеса",
      features: [
        "Дизайн до 20 страниц",
        "Адаптивная вёрстка",
        "Полная SEO-оптимизация",
        "Интеграция с любыми системами",
        "Мультиязычность",
        "10 правок до утверждения",
        "Прототип за 24 часа",
        "6 месяцев поддержки",
        "Еженедельные SEO-блоги"
      ],
      popular: false
    },
    {
      name: "Индивидуальный",
      price: "По запросу",
      description: "Уникальное решение под ваши потребности",
      features: [
        "Индивидуальный объем работ",
        "Гибкие условия",
        "Персональный подход",
        "Неограниченное количество правок",
        "Индивидуальные сроки",
        "Расширенная техническая поддержка"
      ],
      popular: false
    }
  ];

  // Additional mini packages
  const miniPackages = [
    {
      name: "Еженедельные SEO-блоги",
      price: "7 500 ₽/мес",
      description: "Регулярные SEO-оптимизированные статьи для вашего сайта"
    },
    {
      name: "Консультация по Digital Marketing",
      price: "15 000 ₽/сессия",
      description: "Экспертный анализ и рекомендации по цифровому маркетингу"
    },
    {
      name: "Аудит сайта",
      price: "10 000 ₽",
      description: "Подробный технический и SEO-аудит вашего текущего сайта"
    },
    {
      name: "Continuous Weekly Service",
      price: "15 000 ₽/нед",
      description: "Еженедельное обслуживание и обновление вашего сайта"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-genium-black">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
                Заказать сайт
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Создайте сайт вашей мечты</h1>
              <p className="text-xl text-gray-300">
                Мы создаем высококонверсионные веб-сайты, которые помогают привлекать клиентов и увеличивать продажи
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-genium-black-light" ref={elementRef}>
          <div className={`container mx-auto px-4 sm:px-6 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Выберите подходящий для вас тариф</h2>
              <p className="text-gray-300">
                Мы предлагаем различные тарифные планы, которые можно адаптировать под ваши конкретные потребности и бюджет
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`glass-card p-8 rounded-xl overflow-hidden relative card-hover transition-all duration-500 transform ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-genium-purple text-white text-xs font-bold px-3 py-1 uppercase tracking-wider transform rotate-0 origin-top-right">
                        Популярный
                      </div>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-genium-purple-light">{plan.price}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircle2 className="text-genium-purple-light flex-shrink-0 mr-2 mt-1" size={18} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={plan.popular ? "cta-button w-full" : "cta-button-outline w-full"} 
                    onClick={scrollToContactForm}
                  >
                    Выбрать тариф
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto mt-20">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Дополнительные услуги</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {miniPackages.map((pack, index) => (
                  <div 
                    key={index}
                    className={`glass-card p-6 rounded-xl overflow-hidden transition-all duration-500 transform ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${(index + pricingPlans.length) * 150}ms` }}
                  >
                    <h4 className="text-xl font-semibold text-white mb-2">{pack.name}</h4>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-genium-purple-light">{pack.price}</span>
                    </div>
                    <p className="text-gray-300 mb-6">{pack.description}</p>
                    <Button 
                      variant="outline" 
                      className="cta-button-outline w-full" 
                      onClick={scrollToContactForm}
                    >
                      Добавить
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto text-center mt-12">
              <p className="text-gray-300">
                Нужен индивидуальный подход? У нас есть <span className="text-genium-purple-light font-semibold">специальные предложения для корпоративных клиентов</span>. 
                Свяжитесь с нами для обсуждения.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-genium-black">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Почему выбирают нас</h2>
              <p className="text-gray-300">
                Мы объединяем креативный дизайн, передовые технологии и маркетинговые знания для создания сайтов, 
                которые не только отлично выглядят, но и эффективно работают
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-xl">
                <div className="w-14 h-14 flex items-center justify-center bg-genium-purple/20 text-genium-purple-light rounded-lg mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Быстрая разработка</h3>
                <p className="text-gray-300">Мы создаем высококачественные сайты в кратчайшие сроки — от 24 часов до 2 недель в зависимости от сложности проекта.</p>
              </div>
              
              <div className="glass-card p-8 rounded-xl">
                <div className="w-14 h-14 flex items-center justify-center bg-genium-purple/20 text-genium-purple-light rounded-lg mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Уникальный дизайн</h3>
                <p className="text-gray-300">Каждый проект уникален — мы создаем индивидуальный дизайн, отражающий ценности вашего бренда и привлекающий внимание клиентов.</p>
              </div>
              
              <div className="glass-card p-8 rounded-xl">
                <div className="w-14 h-14 flex items-center justify-center bg-genium-purple/20 text-genium-purple-light rounded-lg mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.1042 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.1042 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 16H6.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 16H10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Высокая конверсия</h3>
                <p className="text-gray-300">Мы используем проверенные техники маркетинга и UX-дизайна для создания сайтов, которые конвертируют посетителей в клиентов.</p>
              </div>
              
              <div className="glass-card p-8 rounded-xl">
                <div className="w-14 h-14 flex items-center justify-center bg-genium-purple/20 text-genium-purple-light rounded-lg mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 7L13.5 15.5L9.5 11.5L2 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 7H22V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">SEO-оптимизация</h3>
                <p className="text-gray-300">Встроенная SEO-оптимизация помогает вашему сайту занимать высокие позиции в поисковых системах и привлекать органический трафик.</p>
              </div>
              
              <div className="glass-card p-8 rounded-xl">
                <div className="w-14 h-14 flex items-center justify-center bg-genium-purple/20 text-genium-purple-light rounded-lg mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Высокое качество</h3>
                <p className="text-gray-300">Мы заботимся о каждой детали — от выбора шрифтов и цветов до оптимизации скорости загрузки и безопасности вашего сайта.</p>
              </div>
              
              <div className="glass-card p-8 rounded-xl">
                <div className="w-14 h-14 flex items-center justify-center bg-genium-purple/20 text-genium-purple-light rounded-lg mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Комплексная поддержка</h3>
                <p className="text-gray-300">После запуска мы продолжаем поддерживать ваш сайт, обеспечивая его бесперебойную работу и регулярные обновления.</p>
              </div>
            </div>
          </div>
        </section>
        
        <div ref={contactFormRef}>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderWebsitePage;
