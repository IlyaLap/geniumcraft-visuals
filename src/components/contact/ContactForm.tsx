
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import FormHeader from './FormHeader';
import ContactDetails from './ContactDetails';
import ProjectDetails from './ProjectDetails';
import AdditionalServices from './AdditionalServices';

import { useToast } from '@/components/ui/use-toast';
import { ContactFormData } from './types';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    websiteType: '',
    package: '',
    company: '',
    audience: '',
    features: '',
    message: '',
    hostingProvider: '',
    addons: {
      seoBlogs: false,
      digitalMarketingConsulting: false,
      websiteAudit: false,
      weeklySiteService: false
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleAddonChange = (addon: string, checked: boolean) => {
    setFormData(prevData => ({
      ...prevData,
      addons: {
        ...prevData.addons,
        [addon]: checked
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare formatted addons
      const formattedAddons = Object.entries(formData.addons)
        .filter(([_, value]) => value)
        .map(([key]) => {
          switch(key) {
            case 'seoBlogs': return 'Еженедельные SEO-блоги (7 500 ₽/мес)';
            case 'digitalMarketingConsulting': return 'Консультация Digital Marketing (15 000 ₽)';
            case 'websiteAudit': return 'Аудит сайта (10 000 ₽)';
            case 'weeklySiteService': return 'Сервис сайта (15 000 ₽/нед)';
            default: return key;
          }
        })
        .join(', ');

      // Prepare form data for Web3Forms
      const web3FormsData = new FormData();
      web3FormsData.append('access_key', 'cef68653-cc87-49ac-922d-3a04d7ac7989');
      web3FormsData.append('subject', `Новая заявка от ${formData.name}`);
      
      // Construct detailed message
      const message = `
        Имя: ${formData.name}
        Email: ${formData.email}
        Телефон: ${formData.phone}
        Тип сайта: ${formData.websiteType}
        Тарифный план: ${formData.package}
        Компания: ${formData.company}
        Целевая аудитория: ${formData.audience}
        Желаемые функции: ${formData.features}
        Текущий хостинг-провайдер: ${formData.hostingProvider}
        Дополнительные услуги: ${formattedAddons || 'Нет'}
        Дополнительная информация: ${formData.message}
      `;
      
      web3FormsData.append('message', message);
      web3FormsData.append('from_name', formData.name);
      web3FormsData.append('email', formData.email);
      web3FormsData.append('phone', formData.phone);

      // Send to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3FormsData
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время.",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          websiteType: '',
          package: '',
          company: '',
          audience: '',
          features: '',
          message: '',
          hostingProvider: '',
          addons: {
            seoBlogs: false,
            digitalMarketingConsulting: false,
            websiteAudit: false,
            weeklySiteService: false
          }
        });
      } else {
        throw new Error(result.message || 'Ошибка при отправке');
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Ошибка отправки",
        description: "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте снова позже.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 lg:p-12">
      <FormHeader />
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <ContactDetails 
          formData={formData} 
          handleChange={handleChange} 
          handleSelectChange={handleSelectChange} 
        />
        
        <AdditionalServices 
          formData={formData} 
          handleAddonChange={handleAddonChange} 
        />
        
        <ProjectDetails 
          formData={formData} 
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
        />

        <Button 
          type="submit" 
          className="cta-button w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
