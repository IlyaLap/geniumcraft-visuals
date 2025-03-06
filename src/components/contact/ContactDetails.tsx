
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { FormFieldProps } from './types';

const ContactDetails = ({ formData, handleChange, handleSelectChange }: FormFieldProps) => {
  return (
    <>
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
          <Select 
            value={formData.websiteType}
            onValueChange={(value) => handleSelectChange('websiteType', value)}
          >
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
        <Label htmlFor="package">Выберите тарифный план</Label>
        <Select 
          value={formData.package}
          onValueChange={(value) => handleSelectChange('package', value)}
        >
          <SelectTrigger 
            id="package" 
            className="bg-genium-black/40 border-genium-purple/30 focus:border-genium-purple"
          >
            <SelectValue placeholder="Выберите тариф" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="micro">Лендинг (от 20 000 ₽)</SelectItem>
            <SelectItem value="standard">Стандарт (от 60 000 ₽)</SelectItem>
            <SelectItem value="premium">Премиум (от 120 000 ₽)</SelectItem>
            <SelectItem value="business">Бизнес (от 250 000 ₽)</SelectItem>
            <SelectItem value="custom">Индивидуальный</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default ContactDetails;
