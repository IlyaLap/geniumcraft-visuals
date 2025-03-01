
import { useState } from 'react';
import { useAnimateOnScroll } from '@/lib/animations';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'Редизайн интернет-магазина',
    description: 'Повышение коэффициента конверсии на 75% и увеличение среднего чека на 25% после полного редизайна.',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    metrics: [
      { label: 'Рост конверсии', value: '+75%' },
      { label: 'Средний чек', value: '+25%' }
    ]
  },
  {
    title: 'Корпоративный сайт для IT-компании',
    description: 'Создание современного корпоративного сайта, который привлек на 120% больше заявок и улучшил позиции в поиске.',
    category: 'Корпоративный сайт',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    metrics: [
      { label: 'Заявки', value: '+120%' },
      { label: 'Позиции в поиске', value: '+32' }
    ]
  },
  {
    title: 'Сайт для юридической фирмы',
    description: 'Премиальный сайт, отражающий статус компании и увеличивший количество квалифицированных лидов на 90%.',
    category: 'Профессиональные услуги',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    metrics: [
      { label: 'Рост лидов', value: '+90%' },
      { label: 'Время на сайте', value: '+68%' }
    ]
  }
];

const CaseStudies = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { elementRef, isVisible } = useAnimateOnScroll(0.1);

  return (
    <section className="py-20" id="case-studies">
      <div 
        ref={elementRef}
        className={`container mx-auto px-4 sm:px-6 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
              Наши проекты
            </Badge>
            <h2 className="section-title">Проекты, которыми мы гордимся</h2>
            <p className="text-gray-300 mt-4">
              Ознакомьтесь с нашими последними работами, демонстрирующими наш уникальный подход
              к созданию высококонверсионных сайтов.
            </p>
          </div>
          <Button variant="outline" className="cta-button-outline mt-6 md:mt-0">
            Все проекты <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div 
              key={index}
              className={`glass-card overflow-hidden rounded-xl card-hover group transition-all duration-700 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-genium-black to-transparent opacity-70"></div>
                <Badge 
                  className="absolute top-4 left-4 bg-genium-purple/30 backdrop-blur-md border-none"
                >
                  {caseStudy.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{caseStudy.title}</h3>
                <p className="text-gray-300 mb-4">{caseStudy.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {caseStudy.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="bg-genium-black/50 rounded-lg p-3">
                      <p className="text-sm text-gray-300">{metric.label}</p>
                      <p className="text-xl font-bold text-genium-purple-light">{metric.value}</p>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="text-genium-purple-light hover:text-white hover:bg-genium-purple/20 transition-all duration-300 w-full"
                >
                  Подробнее <ArrowUpRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
