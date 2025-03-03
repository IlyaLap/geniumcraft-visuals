
import { Instagram, Linkedin, MapPin, Phone, Mail, TikTok } from 'lucide-react';
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
                href="#" 
                className="w-10 h-10 rounded-full bg-genium-purple/10 flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/20 transition-colors"
                aria-label="Twitter"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.89 6.56C19.06 6.87 18.19 7.08 17.3 7.17C18.22 6.61 18.92 5.73 19.25 4.7C18.38 5.2 17.41 5.56 16.41 5.76C16.17 5.5 15.89 5.29 15.58 5.13C15.28 4.97 14.95 4.86 14.61 4.8C14.27 4.75 13.93 4.76 13.59 4.82C13.26 4.88 12.94 5 12.64 5.17C12.04 5.5 11.54 6 11.2 6.62C10.86 7.24 10.71 7.94 10.77 8.65C10.77 8.94 10.8 9.23 10.86 9.5C9.42 9.43 8.02 9.05 6.74 8.39C5.47 7.73 4.35 6.81 3.46 5.69C3.11 6.26 2.91 6.92 2.91 7.62C2.91 8.25 3.07 8.87 3.37 9.42C3.67 9.97 4.1 10.43 4.62 10.75C3.9 10.73 3.18 10.52 2.55 10.14V10.18C2.55 10.9 2.8 11.6 3.26 12.17C3.71 12.74 4.35 13.14 5.06 13.32C4.69 13.41 4.31 13.46 3.92 13.47C3.65 13.47 3.38 13.44 3.11 13.39C3.3 14.01 3.67 14.56 4.18 14.95C4.69 15.35 5.3 15.58 5.94 15.6C4.76 16.53 3.31 17.03 1.82 17.03C1.49 17.03 1.17 17.01 0.85 16.97C2.37 17.97 4.15 18.49 5.97 18.48C12.7 18.48 16.38 12.96 16.38 8.16C16.38 8 16.38 7.85 16.37 7.69C17.23 7.06 17.97 6.28 18.56 5.39L19.89 6.56Z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-genium-purple/10 flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/20 transition-colors"
                aria-label="VK"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.579 6.855c.14-.465 0-.806-.666-.806h-2.196c-.56 0-.817.294-.956.619 0 0-1.116 2.712-2.695 4.472-.51.508-.742.67-1.02.67-.14 0-.343-.162-.343-.627V6.855c0-.558-.164-.806-.631-.806H9.689c-.348 0-.558.258-.558.504 0 .528.788.65.867 2.135v3.225c0 .707-.127.836-.407.836-.742 0-2.546-2.725-3.616-5.842-.21-.606-.42-.858-.98-.858H2.799c-.627 0-.752.294-.752.619 0 .582.742 3.462 3.46 7.271 1.812 2.601 4.363 4.011 6.687 4.011 1.392 0 1.563-.312 1.563-.85v-1.96c0-.627.133-.752.576-.752.327 0 .887.164 2.196 1.425 1.494 1.494 1.74 2.167 2.583 2.167h2.196c.627 0 .939-.313.759-.932-.197-.612-.907-1.5-1.848-2.553-.51-.605-1.277-1.26-1.51-1.584-.327-.42-.234-.607 0-.979 0 0 2.669-3.759 2.949-5.035z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-genium-purple/10 flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/20 transition-colors"
                aria-label="Telegram"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.572 4.088a1.58 1.58 0 0 0-.626.057 1.727 1.727 0 0 0-.552.264c-.012.008-1.281.76-3.261 1.918l-6.847 4.03-3.506 2.064c-.3.245-.54.623-.248 1.012.292.39.682.47.975.525.293.054.595.092.595.092l2.184.185s.292.688.44 1.04c.147.353.295.649.517.649a.89.89 0 0 0 .489-.19c.008-.004 1.787-1.155 1.787-1.155l2.194 1.903.078.046c.7.39 1.347.76 1.935.057a1.52 1.52 0 0 0 .716-.901c.006-.016.797-3.16 1.483-5.93l1.285-5.227c.11-.456.142-.883-.185-1.289a1.246 1.246 0 0 0-.957-.45zm-.212 1.389c-.02.091-.003-.003.042.266l.015.074c-.051.195-1.336 5.271-1.297 5.135-.144.574-.72 2.915-.72 2.915l-.145.57-.56-.487-2.566-2.226-1.446.935c.077-.094-.306.582-.306.582l-.067-.973-.984-3.292 8.034-4.733z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-genium-purple/10 flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/20 transition-colors"
                aria-label="TikTok"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.59-1.16-2.59-2.5 0-1.4 1.16-2.5 2.59-2.5.27 0 .53.04.77.13v-3.13c-.27-.03-.54-.05-.82-.05-3.06 0-5.5 2.5-5.5 5.5 0 3.03 2.46 5.5 5.5 5.5 3.02 0 5.5-2.47 5.5-5.5v-6.27a8.75 8.75 0 0 0 5.5 1.97v-3.13c-1.91 0-3.39-1.33-3.81-3.14Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-genium-purple-light transition-colors">Дизайн веб-сайтов</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-genium-purple-light transition-colors">Разработка</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-genium-purple-light transition-colors">SEO-оптимизация</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-genium-purple-light transition-colors">Еженедельные SEO-блоги</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-genium-purple-light transition-colors">Поддержка сайтов</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Ссылки</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-genium-purple-light transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-genium-purple-light transition-colors">О нас</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-genium-purple-light transition-colors">Проекты</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-genium-purple-light transition-colors">Блог</Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-400 hover:text-genium-purple-light transition-colors">Контакты</Link>
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
            <Link to="/contacts#contact">
              <Button className="cta-button mt-6">Связаться с нами</Button>
            </Link>
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
