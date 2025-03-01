import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAnimateOnScroll } from '@/lib/animations';
import { Calendar, Clock, Search, ChevronRight, ArrowUpRight } from 'lucide-react';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Как увеличить конверсию вашего сайта на 50%',
    excerpt: 'Практические советы и стратегии для значительного повышения конверсии вашего веб-сайта в короткие сроки. Узнайте, какие элементы дизайна и UX имеют наибольшее влияние на взаимодействие пользователей с вашим сайтом.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Конверсия',
    date: '10 марта 2025',
    readTime: '7 мин'
  },
  {
    id: 2,
    title: 'SEO-оптимизация в 2025 году: что работает, а что нет',
    excerpt: 'Последние тренды и изменения в алгоритмах поисковых систем, которые влияют на ранжирование вашего сайта. Разбираем современные стратегии SEO и практики, которые уже не эффективны в текущих реалиях.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'SEO',
    date: '15 февраля 2025',
    readTime: '10 мин'
  },
  {
    id: 3,
    title: 'Психология дизайна: как цвета влияют на принятие решений',
    excerpt: 'Научный подход к выбору цветовой палитры для вашего сайта, чтобы влиять на решения пользователей. Анализируем психологическое воздействие различных цветов и их комбинаций на целевую аудиторию в российском сегменте интернета.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Дизайн',
    date: '20 января 2025',
    readTime: '5 мин'
  },
  {
    id: 4,
    title: 'Мобильная оптимизация: почему это критически важно в 2025 году',
    excerpt: 'Как адаптировать ваш сайт для мобильных устройств и почему это может быть решающим фактором для успеха. Детальный разбор технических аспектов адаптивного дизайна и влияние мобильной оптимизации на конверсию и SEO.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Оптимизация',
    date: '5 апреля 2025',
    readTime: '8 мин'
  }
];

// Blog categories
const categories = [
  'Все', 'SEO', 'Дизайн', 'Разработка', 'Конверсия', 'Оптимизация', 'Маркетинг'
];

const BlogPage = () => {
  const { elementRef, isVisible } = useAnimateOnScroll(0.1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Все');
  
  useEffect(() => {
    // Set metadata for SEO
    document.title = "Блог | Geniumsites - Премиум веб-сайты";
    
    // Create meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Блог Geniumsites о веб-разработке, дизайне, SEO и маркетинге. Полезные статьи, советы и тренды для успешного онлайн-присутствия в России.');
  }, []);

  // Filter posts based on search query and active category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'Все' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-genium-black">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
                Наш блог
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Полезные статьи и советы</h1>
              <p className="text-xl text-gray-300">
                Актуальная информация о веб-разработке, дизайне, SEO и маркетинге от экспертов Geniumsites
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-10">
                <Input 
                  placeholder="Поиск по статьям..." 
                  className="bg-genium-black/40 border-genium-purple/30 focus:border-genium-purple py-6 pl-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              
              <div className="flex flex-wrap gap-2 mb-10 justify-center">
                {categories.map((category) => (
                  <Button 
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    className={activeCategory === category ? 
                      "bg-genium-purple hover:bg-genium-purple/90" : 
                      "border-genium-purple/30 text-gray-300 hover:bg-genium-purple/20"
                    }
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-genium-black-light" ref={elementRef}>
          <div className={`container mx-auto px-4 sm:px-6 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className="glass-card overflow-hidden rounded-xl card-hover group transition-all duration-700 transform"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-genium-black to-transparent opacity-70"></div>
                    <Badge 
                      className="absolute top-4 left-4 bg-genium-purple/30 backdrop-blur-md border-none"
                    >
                      {post.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-300 mb-6">{post.excerpt}</p>
                    <Button 
                      variant="ghost" 
                      className="text-genium-purple-light hover:text-white hover:bg-genium-purple/20 transition-all duration-300 w-full"
                    >
                      Читать полностью <ArrowUpRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-white mb-4">Статьи не найдены</h3>
                <p className="text-gray-300 mb-6">Попробуйте изменить параметры поиска или выбрать другую категорию</p>
                <Button 
                  variant="outline" 
                  className="border-genium-purple/30 text-gray-300 hover:bg-genium-purple/20"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('Все');
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            )}
            
            <div className="text-center mt-16">
              <Button className="cta-button-outline">
                Загрузить еще <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
