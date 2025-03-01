
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-genium-black pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-white font-display text-2xl font-bold">
                Genium<span className="text-genium-purple">sites</span>
              </span>
            </div>
            <p className="text-gray-400">
              Премиум веб-сайты для бизнеса с высокой конверсией и SEO-оптимизацией.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-genium-purple/10 flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-genium-purple/10 flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:geniumsites@outlook.com" 
                className="w-10 h-10 rounded-full bg-genium-purple/10 flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-genium-purple-light transition-colors">Дизайн веб-сайтов</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-genium-purple-light transition-colors">Разработка</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-genium-purple-light transition-colors">SEO-оптимизация</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-genium-purple-light transition-colors">Ведение блога</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-genium-purple-light transition-colors">Поддержка сайтов</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Ссылки</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-genium-purple-light transition-colors">Главная</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-genium-purple-light transition-colors">О нас</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-genium-purple-light transition-colors">Проекты</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-genium-purple-light transition-colors">Блог</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-genium-purple-light transition-colors">Контакты</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="text-genium-purple-light mr-3 mt-1" />
                <span className="text-gray-400">+7 985 007 8282</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-genium-purple-light mr-3 mt-1" />
                <span className="text-gray-400">geniumsites@outlook.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-genium-purple-light mr-3 mt-1" />
                <span className="text-gray-400">623700, Свердловская обл., г. Березовский, ул. Ольховая, д. 12</span>
              </li>
            </ul>
            <a href="/contacts#contact">
              <Button className="cta-button mt-6">Связаться с нами</Button>
            </a>
          </div>
        </div>

        <div className="border-t border-genium-purple/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Geniumsites. Все права защищены.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-genium-purple-light text-sm">Политика конфиденциальности</a>
              <a href="#" className="text-gray-500 hover:text-genium-purple-light text-sm">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
