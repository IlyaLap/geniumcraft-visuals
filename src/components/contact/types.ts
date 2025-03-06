
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  websiteType: string;
  package: string;
  company: string;
  audience: string;
  features: string;
  message: string;
  hostingProvider: string;
  addons: {
    seoBlogs: boolean;
    digitalMarketingConsulting: boolean;
    websiteAudit: boolean;
    weeklySiteService: boolean;
    yandexDirect: boolean;
  };
}

export interface FormFieldProps {
  formData: ContactFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

export interface AddonFieldProps {
  formData: ContactFormData;
  handleAddonChange: (addon: string, checked: boolean) => void;
}
