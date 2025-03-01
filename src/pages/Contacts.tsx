
import { useEffect } from 'react';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { useAnimateOnScroll } from '@/lib/animations';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div className="glass-card p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-white mb-8">Наши контакты</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-genium-purple/20 rounded-lg flex items-center justify-center mr-4 text-genium-purple-light">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Адрес</h3>
                      <p className="text-gray-300">Москва, ул. Примерная, д. 123, офис 45</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-genium-purple/20 rounded-lg flex items-center justify-center mr-4 text-genium-purple-light">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Телефон</h3>
                      <p className="text-gray-300">+7 (123) 456-78-90</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-genium-purple/20 rounded-lg flex items-center justify-center mr-4 text-genium-purple-light">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-300">info@geniumsites.ru</p>
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
                    <a href="#" className="w-10 h-10 bg-genium-purple/20 rounded-full flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/40 transition-colors">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.59 10.37 16.04 15.03 15.76 17.01C15.65 17.83 15.33 18.09 15.02 18.12C14.36 18.19 13.85 17.69 13.21 17.26C12.17 16.58 11.6 16.17 10.6 15.5C9.44 14.73 10.21 14.31 10.89 13.61C11.07 13.42 13.76 10.96 13.82 10.75C13.83 10.71 13.83 10.62 13.78 10.57C13.73 10.53 13.66 10.54 13.6 10.55C13.52 10.57 12.12 11.49 9.41 13.32C8.93 13.65 8.5 13.81 8.1 13.8C7.66 13.79 6.82 13.55 6.19 13.35C5.41 13.1 4.79 12.96 4.84 12.53C4.87 12.31 5.18 12.08 5.75 11.85C8.66 10.57 10.64 9.71 11.69 9.28C14.74 7.99 15.44 7.71 15.92 7.7C16.04 7.7 16.32 7.74 16.5 7.88C16.65 8 16.71 8.16 16.73 8.28C16.76 8.45 16.77 8.62 16.64 8.8Z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-genium-purple/20 rounded-full flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/40 transition-colors">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM7.6 4C5.61 4 4 5.61 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C18.39 20 20 18.39 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.94 5.5 18.5 6.06 18.5 6.75C18.5 7.44 17.94 8 17.25 8C16.56 8 16 7.44 16 6.75C16 6.06 16.56 5.5 17.25 5.5ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM12 9C10.35 9 9 10.35 9 12C9 13.65 10.35 15 12 15C13.65 15 15 13.65 15 12C15 10.35 13.65 9 12 9Z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-genium-purple/20 rounded-full flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/40 transition-colors">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.89 6.56C19.06 6.87 18.19 7.08 17.3 7.17C18.22 6.61 18.92 5.73 19.25 4.7C18.38 5.2 17.41 5.56 16.41 5.76C16.17 5.5 15.89 5.29 15.58 5.13C15.28 4.97 14.95 4.86 14.61 4.8C14.27 4.75 13.93 4.76 13.59 4.82C13.26 4.88 12.94 5 12.64 5.17C12.04 5.5 11.54 6 11.2 6.62C10.86 7.24 10.71 7.94 10.77 8.65C10.77 8.94 10.8 9.23 10.86 9.5C9.42 9.43 8.02 9.05 6.74 8.39C5.47 7.73 4.35 6.81 3.46 5.69C3.11 6.26 2.91 6.92 2.91 7.62C2.91 8.25 3.07 8.87 3.37 9.42C3.67 9.97 4.1 10.43 4.62 10.75C3.9 10.73 3.18 10.52 2.55 10.14V10.18C2.55 10.9 2.8 11.6 3.26 12.17C3.71 12.74 4.35 13.14 5.06 13.32C4.69 13.41 4.31 13.46 3.92 13.47C3.65 13.47 3.38 13.44 3.11 13.39C3.3 14.01 3.67 14.56 4.18 14.95C4.69 15.35 5.3 15.58 5.94 15.6C4.76 16.53 3.31 17.03 1.82 17.03C1.49 17.03 1.17 17.01 0.85 16.97C2.37 17.97 4.15 18.49 5.97 18.48C12.7 18.48 16.38 12.96 16.38 8.16C16.38 8 16.38 7.85 16.37 7.69C17.23 7.06 17.97 6.28 18.56 5.39L19.89 6.56Z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-genium-purple/20 rounded-full flex items-center justify-center text-genium-purple-light hover:bg-genium-purple/40 transition-colors">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8 rounded-xl">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.347142575441!2d37.618696!3d55.755826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sRed%20Square!5e0!3m2!1sen!2sru!4v1616683194500!5m2!1sen!2sru" 
                    width="600" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    className="w-full h-full"
                  ></iframe>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-4">Как добраться</h3>
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold">На метро:</span> Станция "Примерная", выход №3
                </p>
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold">На автомобиле:</span> Есть парковка рядом со зданием
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold">На общественном транспорте:</span> Автобусы №123, №456 до остановки "Примерная улица"
                </p>
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
