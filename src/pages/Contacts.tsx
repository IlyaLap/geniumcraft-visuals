
import { useEffect } from 'react';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { useAnimateOnScroll } from '@/lib/animations';
import { MapPin, Phone, Mail, Clock, Facebook, Youtube } from 'lucide-react';

const ContactsPage = () => {
  const { elementRef, isVisible } = useAnimateOnScroll(0.1);
  
  useEffect(() => {
    // Set metadata for SEO
    document.title = "Контакты | Geniumsites - Премиум веб-сайты";
    
    // Create meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Свяжитесь с веб-агентством Geniumsites для обсуждения вашего проекта. Контактная информация и форма для связи.');
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-genium-black">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
                Контакты
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Свяжитесь с нами</h1>
              <p className="text-xl text-gray-300">
                Мы всегда на связи и готовы ответить на ваши вопросы по поводу создания веб-сайта
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-genium-black-light" ref={elementRef}>
          <div className={`container mx-auto px-4 sm:px-6 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="grid grid-cols-1 gap-10 mb-20">
              <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-8">Наши контакты</h2>
              
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-genium-purple/20 rounded-lg flex items-center justify-center mr-4 text-genium-purple-light">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Адрес</h3>
                      <p className="text-gray-300">Александровский Проспект, 19, Свердловская Область, Россия, 623702</p>
                    </div>
                  </div>
                
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-genium-purple/20 rounded-lg flex items-center justify-center mr-4 text-genium-purple-light">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Телефон</h3>
                      <p className="text-gray-300">+7 985 007 8282</p>
                      <p className="text-gray-300">+7 902 257-96-62</p>
                    </div>
                  </div>
                
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-genium-purple/20 rounded-lg flex items-center justify-center mr-4 text-genium-purple-light">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-300">geniumsites@outlook.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-genium-purple/20 rounded-lg flex items-center justify-center mr-4 text-genium-purple-light">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Часы работы</h3>
                      <p className="text-gray-300">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-gray-300">Сб-Вс: выходные</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-lg font-semibold text-white mb-4">Мы в социальных сетях</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://x.com/GeniumSites" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-genium-purple/20 rounded-full flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/40 transition-colors"
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.89 6.56C19.06 6.87 18.19 7.08 17.3 7.17C18.22 6.61 18.92 5.73 19.25 4.7C18.38 5.2 17.41 5.56 16.41 5.76C16.17 5.5 15.89 5.29 15.58 5.13C15.28 4.97 14.95 4.86 14.61 4.8C14.27 4.75 13.93 4.76 13.59 4.82C13.26 4.88 12.94 5 12.64 5.17C12.04 5.5 11.54 6 11.2 6.62C10.86 7.24 10.71 7.94 10.77 8.65C10.77 8.94 10.8 9.23 10.86 9.5C9.42 9.43 8.02 9.05 6.74 8.39C5.47 7.73 4.35 6.81 3.46 5.69C3.11 6.26 2.91 6.92 2.91 7.62C2.91 8.25 3.07 8.87 3.37 9.42C3.67 9.97 4.1 10.43 4.62 10.75C3.9 10.73 3.18 10.52 2.55 10.14V10.18C2.55 10.9 2.8 11.6 3.26 12.17C3.71 12.74 4.35 13.14 5.06 13.32C4.69 13.41 4.31 13.46 3.92 13.47C3.65 13.47 3.38 13.44 3.11 13.39C3.3 14.01 3.67 14.56 4.18 14.95C4.69 15.35 5.3 15.58 5.94 15.6C4.76 16.53 3.31 17.03 1.82 17.03C1.49 17.03 1.17 17.01 0.85 16.97C2.37 17.97 4.15 18.49 5.97 18.48C12.7 18.48 16.38 12.96 16.38 8.16C16.38 8 16.38 7.85 16.37 7.69C17.23 7.06 17.97 6.28 18.56 5.39L19.89 6.56Z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://vk.com/id1032741356" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-genium-purple/20 rounded-full flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/40 transition-colors"
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.579 6.855c.14-.465 0-.806-.666-.806h-2.196c-.56 0-.817.294-.956.619 0 0-1.116 2.712-2.695 4.472-.51.508-.742.67-1.02.67-.14 0-.343-.162-.343-.627V6.855c0-.558-.164-.806-.631-.806H9.689c-.348 0-.558.258-.558.504 0 .528.788.65.867 2.135v3.225c0 .707-.127.836-.407.836-.742 0-2.546-2.725-3.616-5.842-.21-.606-.42-.858-.98-.858H2.799c-.627 0-.752.294-.752.619 0 .582.742 3.462 3.46 7.271 1.812 2.601 4.363 4.011 6.687 4.011 1.392 0 1.563-.312 1.563-.85v-1.96c0-.627.133-.752.576-.752.327 0 .887.164 2.196 1.425 1.494 1.494 1.74 2.167 2.583 2.167h2.196c.627 0 .939-.313.759-.932-.197-.612-.907-1.5-1.848-2.553-.51-.605-1.277-1.26-1.51-1.584-.327-.42-.234-.607 0-.979 0 0 2.669-3.759 2.949-5.035z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.facebook.com/people/Genium-Sites/61573543604846/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-genium-purple/20 rounded-full flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/40 transition-colors"
                    >
                      <Facebook size={20} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/genium-sites/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-genium-purple/20 rounded-full flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/40 transition-colors"
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V10H9V17ZM7.694 8.717C6.923 8.717 6.408 8.203 6.408 7.517C6.408 6.831 6.922 6.317 7.779 6.317C8.55 6.317 9.065 6.831 9.065 7.517C9.065 8.203 8.551 8.717 7.694 8.717ZM18 17H15.558V13.174C15.558 12.116 14.907 11.872 14.663 11.872C14.419 11.872 13.605 12.035 13.605 13.174C13.605 13.337 13.605 17 13.605 17H11.082V10H13.605V10.977C13.93 10.407 14.581 10 15.802 10C17.023 10 18 10.977 18 13.174V17Z" />
                      </svg>
                    </a>
                    <a 
                      href="https://www.tiktok.com/@geniumsites?is_from_webapp=1&sender_device=pc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-genium-purple/20 rounded-full flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/40 transition-colors"
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.59-1.16-2.59-2.5 0-1.4 1.16-2.5 2.59-2.5.27 0 .53.04.77.13v-3.13c-.27-.03-.54-.05-.82-.05-3.06 0-5.5 2.5-5.5 5.5 0 3.03 2.46 5.5 5.5 5.5 3.02 0 5.5-2.47 5.5-5.5v-6.27a8.75 8.75 0 0 0 5.5 1.97v-3.13c-1.91 0-3.39-1.33-3.81-3.14Z" />
                      </svg>
                    </a>
                    <a 
                      href="https://www.youtube.com/@GeniumSites" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-genium-purple/20 rounded-full flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/40 transition-colors"
                    >
                      <Youtube size={20} />
                    </a>
                    <a 
                      href="https://rutube.ru/channel/58553409/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-genium-purple/20 rounded-full flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/40 transition-colors"
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.5 12C17.5 8.41 14.59 5.5 11 5.5s-6.5 2.91-6.5 6.5c0 1.47.49 2.82 1.3 3.91C6.92 17.92 8.83 19 11 19c3.59 0 6.5-2.91 6.5-6.5zm3 0c0 5.25-4.25 9.5-9.5 9.5S1.5 17.25 1.5 12 5.75 2.5 11 2.5s9.5 4.25 9.5 9.5zM11 13.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default ContactsPage;
