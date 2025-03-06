
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { AddonFieldProps } from './types';

const AdditionalServices = ({ formData, handleAddonChange }: AddonFieldProps) => {
  return (
    <div className="space-y-2">
      <Label>Дополнительные услуги</Label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="seoBlogs" 
            checked={formData.addons.seoBlogs}
            onCheckedChange={(checked) => 
              handleAddonChange('seoBlogs', checked as boolean)
            }
          />
          <Label htmlFor="seoBlogs" className="text-sm cursor-pointer">
            Продвижение Сайта (7 500 ₽/мес)
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="digitalMarketing" 
            checked={formData.addons.digitalMarketingConsulting}
            onCheckedChange={(checked) => 
              handleAddonChange('digitalMarketingConsulting', checked as boolean)
            }
          />
          <Label htmlFor="digitalMarketing" className="text-sm cursor-pointer">
            Консультация Digital Marketing (15 000 ₽)
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="audit" 
            checked={formData.addons.websiteAudit}
            onCheckedChange={(checked) => 
              handleAddonChange('websiteAudit', checked as boolean)
            }
          />
          <Label htmlFor="audit" className="text-sm cursor-pointer">
            Аудит сайта (10 000 ₽)
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="siteService" 
            checked={formData.addons.weeklySiteService}
            onCheckedChange={(checked) => 
              handleAddonChange('weeklySiteService', checked as boolean)
            }
          />
          <Label htmlFor="siteService" className="text-sm cursor-pointer">
            Сервис сайта (от 5000 ₽/нед)
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="yandexDirect" 
            checked={formData.addons.yandexDirect}
            onCheckedChange={(checked) => 
              handleAddonChange('yandexDirect', checked as boolean)
            }
          />
          <Label htmlFor="yandexDirect" className="text-sm cursor-pointer">
            Яндекс Директ (от 5000 ₽)
          </Label>
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;
