export type Language = "ar" | "en";

export interface ServiceItem {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  shortDescription: {
    ar: string;
    en: string;
  };
  fullDescription: {
    ar: string;
    en: string;
  };
  suitableFor: {
    ar: string[];
    en: string[];
  };
  prerequisites: {
    ar: string[];
    en: string[];
  };
  iconName: string;
  badge?: {
    ar: string;
    en: string;
  };
}

export interface FAQItem {
  id: string;
  question: {
    ar: string;
    en: string;
  };
  answer: {
    ar: string;
    en: string;
  };
  category: "contracts" | "process" | "privacy" | "general";
}

export interface ExperienceHighlight {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  subtitle: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  points: {
    ar: string[];
    en: string[];
  };
  iconName: string;
}

export interface MethodologyStep {
  step: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredContact: "whatsapp" | "phone" | "email";
  message: string;
  privacyAgreed: boolean;
}
