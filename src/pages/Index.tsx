
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  // Schema data for website organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Geniumsites",
    "url": "https://geniumsites.ru",
    "logo": "https://iili.io/3CZZRe4.png",
    "sameAs": [
      "https://vk.com/geniumsites",
      "https://t.me/geniumsites"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-800-000-00-00",
      "contactType": "customer service",
      "availableLanguage": "Russian"
    }
  };

  // Schema data for website service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development",
    "provider": {
      "@type": "Organization",
      "name": "Geniumsites"
    },
    "description": "Создание премиум веб-сайтов с высокой конверсией, адаптированных для российского рынка",
    "offers": {
      "@type": "Offer",
      "price": "от 30000",
      "priceCurrency": "RUB"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Geniumsites - Премиум веб-сайты с высокой конверсией для бизнеса в России</title>
        <meta name="description" content="Geniumsites - премиум веб-агентство, создающее высококонверсионные сайты с SEO-оптимизацией для российского рынка. Быстрая разработка за 24 часа, индивидуальный подход и гарантия результата." />
        <meta name="keywords" content="веб-сайты, разработка сайтов, SEO оптимизация, дизайн сайтов, высокая конверсия, заказать сайт, премиум сайты, веб-агентство, Россия" />
        <link rel="canonical" href="https://geniumsites.ru/" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>
      
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <CaseStudies />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
