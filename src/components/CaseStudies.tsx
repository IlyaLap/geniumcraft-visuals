
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
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      duration: '10 недель',
      improvement: 'Увеличение конверсии на 47%',
      link: '/projects'
    },
    {
      id: 2,
      title: 'Корпоративный сайт для IT-компании',
      description: 'Разработка современного корпоративного сайта с фокусом на привлечение новых клиентов и найм специалистов.',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      duration: '13 недель',
      improvement: 'Рост заявок на 83%',
      link: '/projects'
    },
    {
      id: 3,
      title: 'Сайт для юридической фирмы',
      description: 'Создание элегантного и профессионального сайта для юридической фирмы с системой онлайн-консультаций.',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
      duration: '16 недель',
      improvement: 'Увеличение новых клиентов на 61%',
      link: '/projects'
    },
    {
      id: 4,
      title: 'Лендинг для онлайн-курса',
      description: 'Разработка высококонверсионного лендинга для продажи образовательного онлайн-курса.',
      category: 'landing',
      image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      duration: '6 недель',
      improvement: 'Увеличение продаж на 127%',
      link: '/projects'
    },
    {
      id: 5,
      title: 'Туристический портал',
      description: 'Разработка информационного портала о путешествиях с интеграцией системы бронирования.',
      category: 'portal',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      duration: '20 недель',
      improvement: 'Рост трафика на 215%',
      link: '/projects'
    },
    {
      id: 6,
      title: 'Агентство недвижимости',
      description: 'Создание сайта для агентства недвижимости с каталогом объектов и системой фильтрации.',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80',
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
