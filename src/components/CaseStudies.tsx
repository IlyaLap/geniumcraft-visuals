
import { useState } from 'react';
import { useAnimateOnScroll } from '@/lib/animations';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Link } from 'react-router-dom';

const CaseStudies = ({ limit = 0 }) => {
  const { elementRef, isVisible } = useAnimateOnScroll(0.1);
  const [filter, setFilter] = useState('all');
  
  const allCaseStudies = [
    {
      id: 1,
      title: 'Редизайн интернет-магазина',
      description: 'Полный редизайн интернет-магазина с улучшением пользовательского опыта и оптимизацией конверсии.',
      category: 'ecommerce',
      image: '/lovable-uploads/9e2c769d-b8cb-4986-a5d4-1d0b6e9461d5.png',
      duration: '10 недель',
      improvement: 'Увеличение конверсии на 47%',
      link: '/projects'
    },
    {
      id: 2,
      title: 'Корпоративный сайт для IT-компании',
      description: 'Разработка современного корпоративного сайта с фокусом на привлечение новых клиентов и найм специалистов.',
      category: 'corporate',
      image: '/lovable-uploads/7d7ae813-b71a-4ddd-89a7-d42c86903b83.png',
      duration: '13 недель',
      improvement: 'Рост заявок на 83%',
      link: '/projects'
    },
    {
      id: 3,
      title: 'Сайт для юридической фирмы',
      description: 'Создание элегантного и профессионального сайта для юридической фирмы с системой онлайн-консультаций.',
      category: 'corporate',
      image: '/lovable-uploads/005f723a-2bc3-46be-baeb-4696dc4216ee.png',
      duration: '16 недель',
      improvement: 'Увеличение новых клиентов на 61%',
      link: '/projects'
    },
    {
      id: 4,
      title: 'Лендинг для онлайн-курса',
      description: 'Разработка высококонверсионного лендинга для продажи образовательного онлайн-курса.',
      category: 'landing',
      image: '/lovable-uploads/4e5cccba-d763-4607-a615-3bd98096bed6.png',
      duration: '6 недель',
      improvement: 'Увеличение продаж на 127%',
      link: '/projects'
    },
    {
      id: 5,
      title: 'Туристический портал',
      description: 'Разработка информационного портала о путешествиях с интеграцией системы бронирования.',
      category: 'portal',
      image: '/lovable-uploads/900c700d-035f-4aca-b298-a0dc1b9458b0.png',
      duration: '20 недель',
      improvement: 'Рост трафика на 215%',
      link: '/projects'
    },
    {
      id: 6,
      title: 'Агентство недвижимости',
      description: 'Создание сайта для агентства недвижимости с каталогом объектов и системой фильтрации.',
      category: 'corporate',
      image: '/lovable-uploads/80c9e2f3-8166-46cc-87b4-9344a52467a3.png',
      duration: '14 недель',
      improvement: 'Увеличение числа запросов на 93%',
      link: '/projects'
    }
  ];

  const filteredCaseStudies = filter === 'all' 
    ? allCaseStudies 
    : allCaseStudies.filter(study => study.category === filter);
  
  const displayedCaseStudies = limit > 0 
    ? filteredCaseStudies.slice(0, limit) 
    : filteredCaseStudies;

  return (
    <section className="py-20 bg-genium-black-light" id="case-studies">
      <div 
        ref={elementRef}
        className={`container mx-auto px-4 sm:px-6 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
            Кейсы
          </Badge>
          <h2 className="centered-section-title">Наши проекты</h2>
          <p className="text-gray-300 mt-4">
            Мы гордимся результатами, которых достигли наши клиенты с помощью разработанных нами сайтов.
          </p>
        </div>

        {limit === 0 && (
          <div className="max-w-xs mx-auto mb-12">
            <Select defaultValue="all" onValueChange={setFilter}>
              <SelectTrigger className="bg-genium-black/60 border-genium-purple/30 focus:border-genium-purple">
                <SelectValue placeholder="Фильтр по категории" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все проекты</SelectItem>
                <SelectItem value="ecommerce">Интернет-магазины</SelectItem>
                <SelectItem value="corporate">Корпоративные сайты</SelectItem>
                <SelectItem value="landing">Лендинги</SelectItem>
                <SelectItem value="portal">Порталы</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCaseStudies.map((study, index) => (
            <div 
              key={study.id}
              className={`glass-card overflow-hidden rounded-xl card-hover transition-all duration-500 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-genium-black to-transparent opacity-60"></div>
                <Badge className="absolute top-4 left-4 bg-genium-purple text-white border-none">
                  {study.category === 'ecommerce' && 'Интернет-магазин'}
                  {study.category === 'corporate' && 'Корпоративный сайт'}
                  {study.category === 'landing' && 'Лендинг'}
                  {study.category === 'portal' && 'Портал'}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                <p className="text-gray-300 mb-4">{study.description}</p>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Срок реализации: {study.duration}</span>
                  <span className="text-genium-purple-light">{study.improvement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {limit > 0 && (
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button className="cta-button">
                Смотреть все проекты
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;
