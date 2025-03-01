
import { useState } from 'react';
import { useAnimateOnScroll } from '@/lib/animations';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { elementRef, isVisible } = useAnimateOnScroll(0.1);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    websiteType: '',
    company: '',
    audience: '',
    features: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
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
        company: '',
        audience: '',
        features: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section className="py-20 bg-genium-black-light" id="contact">
      <div 
        ref={elementRef}
        className={`container mx-auto px-4 sm:px-6 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Form */}
              <div className="p-8 lg:p-12">
                <Badge variant="outline" className="mb-4 bg-genium-purple/10 text-genium-purple-light border-genium-purple/30">
                  Свяжитесь с нами
                </Badge>
                <h2 className="text-3xl font-bold text-white mb-4">Давайте обсудим ваш проект</h2>
                <p className="text-gray-300 mb-8">
                  Заполните форму предварительной квалификации, и мы свяжемся с вами для обсуждения деталей.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Иван Иванов" 
                        className="bg-genium-black/40 border-genium-purple/30 focus:border-genium-purple"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="ivan@company.ru" 
                        className="bg-genium-black/40 border-genium-purple/30 focus:border-genium-purple"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        placeholder="+7 (XXX) XXX-XX-XX" 
                        className="bg-genium-black/40 border-genium-purple/30 focus:border-genium-purple"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="websiteType">Тип сайта</Label>
                      <Select onValueChange={(value) => handleSelectChange('websiteType', value)}>
                        <SelectTrigger 
                          id="websiteType" 
                          className="bg-genium-black/40 border-genium-purple/30 focus:border-genium-purple"
                        >
                          <SelectValue placeholder="Выберите тип сайта" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="corporate">Корпоративный сайт</SelectItem>
                          <SelectItem value="ecommerce">Интернет-магазин</SelectItem>
                          <SelectItem value="landing">Лендинг</SelectItem>
                          <SelectItem value="blog">Блог</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Описание компании</Label>
                    <Textarea 
                      id="company" 
                      name="company" 
                      placeholder="Кратко опишите вашу компанию и направление деятельности" 
                      className="bg-genium-black/40 border-genium-purple/30 focus:border-genium-purple min-h-[80px]"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="audience">Целевая аудитория</Label>
                      <Input 
                        id="audience" 
                        name="audience" 
                        placeholder="Кто ваши клиенты?" 
                        className="bg-genium-black/40 border-genium-purple/30 focus:border-genium-purple"
                        value={formData.audience}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="features">Желаемые функции</Label>
                      <Input 
                        id="features" 
                        name="features" 
                        placeholder="Блог, интеграция с CRM и т.д." 
                        className="bg-genium-black/40 border-genium-purple/30 focus:border-genium-purple"
                        value={formData.features}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Дополнительная информация</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Расскажите подробнее о вашем проекте, целях и ожиданиях" 
                      className="bg-genium-black/40 border-genium-purple/30 focus:border-genium-purple min-h-[120px]"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="cta-button w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                </form>
              </div>

              {/* Right Column - Decoration */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-genium-purple/20 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-genium-purple/40 to-genium-black"></div>
                </div>
                <div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
                  <div className="p-4 rounded-full bg-white/10 backdrop-blur-md mb-8 purple-glow">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">Премиум веб-сайты для вашего бизнеса</h3>
                  
                  <p className="text-white/80 mb-8">
                    Мы создаем высококонверсионные сайты, которые помогают привлекать клиентов и увеличивать продажи.
                  </p>

                  <div className="space-y-4 text-left">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3746C6.51168 20.6274 4.78465 19.2462 3.61096 17.4369C2.43727 15.6276 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M22 4L12 14.01L9 11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-white/90">Уникальный дизайн</span>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3746C6.51168 20.6274 4.78465 19.2462 3.61096 17.4369C2.43727 15.6276 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M22 4L12 14.01L9 11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-white/90">SEO-оптимизация</span>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3746C6.51168 20.6274 4.78465 19.2462 3.61096 17.4369C2.43727 15.6276 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M22 4L12 14.01L9 11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-white/90">Быстрая разработка</span>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3746C6.51168 20.6274 4.78465 19.2462 3.61096 17.4369C2.43727 15.6276 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M22 4L12 14.01L9 11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-white/90">Высокая конверсия</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
