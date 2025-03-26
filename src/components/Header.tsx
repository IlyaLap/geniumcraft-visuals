
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to top when navigating to a new page
    window.scrollTo(0, 0);
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-genium-purple-light' : 'text-white';
  };

  const navLinks = [
    { title: "Главная", path: "/" },
    { title: "О нас", path: "/about" },
    { title: "Услуги", path: "/services" },
    { title: "Проекты", path: "/projects" },
    { title: "Блог", path: "/blog" },
    { title: "Контакты", path: "/contacts" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-genium-black/80 backdrop-blur-lg shadow-lg' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center" aria-label="Главная страница Geniumsites">
            <img 
              src="/lovable-uploads/0d1e8624-b745-4f54-8566-e41af3bb63d8.png" 
              alt="Geniumsites Logo" 
              className="h-8 w-auto mr-2"
            />
            <span className="text-white font-display text-2xl font-bold">
              Genium<span className="text-genium-purple">sites</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`${isActive(link.path)} hover:text-genium-purple-light transition-colors`}
              aria-current={location.pathname === link.path ? 'page' : undefined}
            >
              {link.title}
            </Link>
          ))}
          <Button 
            className="cta-button"
            onClick={() => window.location.href = '/order'}
            aria-label="Заказать сайт"
          >
            Заказать сайт
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="p-2 text-white focus:outline-none"
            aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-0 bg-genium-black z-40 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '60px' }}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="flex flex-col p-8 space-y-8 bg-genium-black" aria-label="Мобильная навигация">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-lg ${isActive(link.path)} hover:text-genium-purple transition-colors py-2 border-b border-genium-black-light`}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-current={location.pathname === link.path ? 'page' : undefined}
            >
              {link.title}
            </Link>
          ))}
          <Button 
            className="cta-button mt-4 w-full"
            onClick={() => {
              window.location.href = '/order';
              setIsMobileMenuOpen(false);
            }}
            aria-label="Заказать сайт"
          >
            Заказать сайт
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
