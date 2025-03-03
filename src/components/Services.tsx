
import { useAnimateOnScroll } from '@/lib/animations';
import { Badge } from '@/components/ui/badge';
import { Code, PenTool, BarChart, Repeat, Search, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <PenTool size={32} />,
    title: 'Премиум дизайн веб-сайтов',
    description: 'Уникальный дизайн, соответствующий вашему бренду и привлекающий внимание целевой аудитории.',
    badge: 'Популярный',
    link: '/services',
    isClickable: true
  },
  {
    icon: <Code size={32} />,
    title: 'Разработка веб-сайтов',
    description: 'Передача полного кода или реализация под ключ за дополнительную плату.',
    badge: 'Быстрая доставка',
    link: '/services',
    isClickable: true
  },
  {
    icon: <Search size={32} />,
    title: 'Еженедельные SEO-блоги',
    description: 'Регулярные публикации оптимизированного контента для повышения органического трафика.',
    badge: '',
    link: '/blog',
    isClickable: false
  },
  {
    icon: <BarChart size={32} />,
    title: 'SEO-оптимизация',
    description: 'Комплексная оптимизация сайта для повышения позиций в поисковых системах.',
    badge: '',
    link: '/services',
    isClickable: true
  },
  {
    icon: <Repeat size={32} />,
    title: 'Поддержка и обслуживание',
    description: 'Регулярное обновление и поддержка сайта для обеспечения бесперебойной работы.',
    badge: '',
    link: '/services',
    isClickable: true
  },
  {
    icon: <Megaphone size={32} />,
    title: 'Маркетинговые стратегии',
    description: 'Разработка и реализация эффективных маркетинговых стратегий для вашего бизнеса.',
    badge: 'Новый',
    link: '/services',
    isClickable: true
  }
];

const Services = () => {
  const { elementRef, isVisible } = useAnimateOnScroll(0.1);

  return (
    <section className="py-20 bg-genium-black-light" id="services">
      <div 
        ref={elementRef}
        className={`container mx-auto px-4 sm:px-6 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
            Наши услуги
          </Badge>
          <h2 className="centered-section-title">Услуги премиум-класса</h2>
          <p className="text-gray-300 mt-4">
            Мы предлагаем полный спектр услуг по созданию и продвижению вашего цифрового присутствия, 
            включая дизайн, разработку, оптимизацию и маркетинг.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            service.isClickable ? (
              <Link 
                key={index} 
                to={service.link}
                className={`glass-card p-8 rounded-xl card-hover transition-all duration-500 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 flex items-center justify-center bg-genium-purple/20 text-genium-purple rounded-lg mb-6">
                  {service.icon}
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  {service.badge && (
                    <Badge className="bg-genium-purple/20 text-genium-purple-light border-none">
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-gray-300">{service.description}</p>
              </Link>
            ) : (
              <div 
                key={index}
                className={`glass-card p-8 rounded-xl transition-all duration-500 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 flex items-center justify-center bg-genium-purple/20 text-genium-purple rounded-lg mb-6">
                  {service.icon}
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  {service.badge && (
                    <Badge className="bg-genium-purple/20 text-genium-purple-light border-none">
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-gray-300">{service.description}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
