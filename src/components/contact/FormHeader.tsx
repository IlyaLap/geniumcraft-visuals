
import { Badge } from '@/components/ui/badge';

const FormHeader = () => {
  return (
    <>
      <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
        Свяжитесь с нами
      </Badge>
      <h2 className="text-3xl font-bold text-white mb-4">Давайте обсудим ваш проект</h2>
      <p className="text-gray-300 mb-8">
        Заполните форму предварительной квалификации, и мы свяжемся с вами для обсуждения деталей.
      </p>
    </>
  );
};

export default FormHeader;
