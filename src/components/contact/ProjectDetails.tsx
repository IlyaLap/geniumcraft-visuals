
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { FormFieldProps } from './types';

const ProjectDetails = ({ formData, handleChange }: FormFieldProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="hostingProvider">Текущий хостинг-провайдер</Label>
        <Input 
          id="hostingProvider" 
          name="hostingProvider" 
          placeholder="Например: Timeweb, Beget, Reg.ru" 
          className="bg-genium-black/40 border-genium-purple/30 focus:border-genium-purple"
          value={formData.hostingProvider}
          onChange={handleChange}
        />
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
    </>
  );
};

export default ProjectDetails;
