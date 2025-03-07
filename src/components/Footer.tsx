import { Linkedin, MapPinned, Phone, Mail, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-genium-black pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-16">
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
                href="https://x.com/GeniumSites" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-genium-purple/10 flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/20 transition-colors"
                aria-label="Twitter"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.89 6.56C19.06 6.87 18.19 7.08 17.3 7.17C18.22 6.61 18.92 5.73 19.25 4.7C18.38 5.2 17.41 5.56 16.41 5.76C16.17 5.5 15.89 5.29 15.58 5.13C15.28 4.97 14.95 4.86 14.61 4.8C14.27 4.75 13.93 4.76 13.59 4.82C13.26 4.88 12.94 5 12.64 5.17C12.04 5.5 11.54 6 11.2 6.62C10.86 7.24 10.71 7.94 10.77 8.65C10.77 8.94 10.8 9.23 10.86 9.5C9.42 9.43 8.02 9.05 6.74 8.39C5.47 7.73 4.35 6.81 3.46 5.69C3.11 6.26 2.91 6.92 2.91 7.62C2.91 8.25 3.07 8.87 3.37 9.42C3.67 9.97 4.1 10.43 4.62 10.75C3.9 10.73 3.18 10.52 2.55 10.14V10.18C2.55 10.9 2.8 11.6 3.26 12.17C3.71 12.74 4.35 13.14 5.06 13.32C4.69 13.41 4.31 13.46 3.92 13.47C3.65 13.47 3.38 13.44 3.11 13.39C3.3 14.01 3.67 14.56 4.18 14.95C4.69 15.35 5.3 15.58 5.94 15.6C4.76 16.53 3.31 17.03 1.82 17.03C1.49 17.03 1.17 17.01 0.85 16.97C2.37 17.97 4.15 18.49 5.97 18.48C12.7 18.48 16.38 12.96 16.38 8.16C16.38 8 16.38 7.85 16.37 7.69C17.23 7.06 17.97 6.28 18.56 5.39L19.89 6.56Z" />
                </svg>
              </a>
              <a 
                href="https://vk.com/id1032741356" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-genium-purple/10 flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/20 transition-colors"
                aria-label="VK"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.579 6.855c.14-.465 0-.806-.666-.806h-2.196c-.56 0-.817.294-.956.619 0 0-1.116 2.712-2.695 4.472-.51.508-.742.67-1.02.67-.14 0-.343-.162-.343-.627V6.855c0-.558-.164-.806-.631-.806H9.689c-.348 0-.558.258-.558.504 0 .528.788.65.867 2.135v3.225c0 .707-.127.836-.407.836-.742 0-2.546-2.725-3.616-5.842-.21-.606-.42-.858-.98-.858H2.799c-.627 0-.752.294-.752.619 0 .582.742 3.462 3.46 7.271 1.812 2.601 4.363 4.011 6.687 4.011 1.392 0 1.563-.312 1.563-.85v-1.96c0-.627.133-.752.576-.752.327 0 .887.164 2.196 1.425 1.494 1.494 1.74 2.167 2.583 2.167h2.196c.627 0 .939-.313.759-.932-.197-.612-.907-1.5-1.848-2.553-.51-.605-1.277-1.26-1.51-1.584-.327-.42-.234-.607 0-.979 0 0 2.669-3.759 2.949-5.035z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/people/Genium-Sites/61573543604846/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-genium-purple/10 flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.tiktok.com/@geniumsites?is_from_webapp=1&sender_device=pc" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-genium-purple/10 flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/20 transition-colors"
                aria-label="TikTok"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.59-1.16-2.59-2.5 0-1.4 1.16-2.5 2.59-2.5.27 0 .53.04.77.13v-3.13c-.27-.03-.54-.05-.82-.05-3.06 0-5.5 2.5-5.5 5.5 0 3.03 2.46 5.5 5.5 5.5 3.02 0 5.5-2.47 5.5-5.5v-6.27a8.75 8.75 0 0 0 5.5 1.97v-3.13c-1.91 0-3.39-1.33-3.81-3.14Z" />
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@GeniumSites" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-genium-purple/10 flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="https://rutube.ru/channel/58553409/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-genium-purple/10 flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/20 transition-colors"
                aria-label="Rutube"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.5 12C17.5 8.41 14.59 5.5 11 5.5s-6.5 2.91-6.5 6.5c0 1.47.49 2.82 1.3 3.91C6.92 17.92 8.83 19 11 19c3.59 0 6.5-2.91 6.5-6.5zm3 0c0 5.25-4.25 9.5-9.5 9.5S1.5 17.25 1.5 12 5.75 2.5 11 2.5s9.5 4.25 9.5 9.5zM11 13.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/>
                </svg>
              </a>
            </div>
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
                <MapPinned size={18} className="text-genium-purple-light mr-3 mt-1" />
                <span className="text-gray-400">Александровский Проспект, 19, Свердловская Область, Россия, 623702</span>
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
              <Link to="/privacy-policy" className="text-gray-500 hover:text-genium-purple-light text-sm">Политика конфиденциальности</Link>
              <Link to="/terms-of-use" className="text-gray-500 hover:text-genium-purple-light text-sm">Условия использования</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
