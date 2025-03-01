
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
          <Link to="/" className="flex items-center">
            <span className="text-white font-display text-2xl font-bold">
              Genium<span className="text-genium-purple">sites</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-genium-purple-light transition-colors">
            Главная
          </Link>
          <Link to="/services" className="text-white hover:text-genium-purple-light transition-colors">
            Услуги
          </Link>
          <Link to="/case-studies" className="text-white hover:text-genium-purple-light transition-colors">
            Проекты
          </Link>
          <Link to="/blog" className="text-white hover:text-genium-purple-light transition-colors">
            Блог
          </Link>
          <Link to="/contact" className="text-white hover:text-genium-purple-light transition-colors">
            Контакты
          </Link>
          <Button 
            className="cta-button"
            onClick={() => window.location.href = '/contact'}
          >
            Заказать сайт
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
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
      >
        <nav className="flex flex-col p-8 space-y-8">
          <Link 
            to="/" 
            className="text-lg text-white hover:text-genium-purple transition-colors py-2 border-b border-genium-black-light"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Главная
          </Link>
          <Link 
            to="/services" 
            className="text-lg text-white hover:text-genium-purple transition-colors py-2 border-b border-genium-black-light"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Услуги
          </Link>
          <Link 
            to="/case-studies" 
            className="text-lg text-white hover:text-genium-purple transition-colors py-2 border-b border-genium-black-light"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Проекты
          </Link>
          <Link 
            to="/blog" 
            className="text-lg text-white hover:text-genium-purple transition-colors py-2 border-b border-genium-black-light"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Блог
          </Link>
          <Link 
            to="/contact" 
            className="text-lg text-white hover:text-genium-purple transition-colors py-2 border-b border-genium-black-light"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Контакты
          </Link>
          <Button 
            className="cta-button mt-4 w-full"
            onClick={() => {
              window.location.href = '/contact';
              setIsMobileMenuOpen(false);
            }}
          >
            Заказать сайт
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
