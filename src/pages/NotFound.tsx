
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-genium-black p-4">
      <div className="max-w-md w-full glass-card p-8 rounded-xl text-center">
        <div className="w-20 h-20 bg-genium-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-5xl font-bold text-genium-purple-light">404</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Страница не найдена</h1>
        <p className="text-gray-300 mb-8">
          Запрашиваемая страница не существует. Возможно, она была перемещена или удалена.
        </p>
        <Button 
          className="cta-button inline-flex items-center"
          onClick={() => window.location.href = '/'}
        >
          <ArrowLeft size={16} className="mr-2" /> Вернуться на главную
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
