"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language } from "@/types";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  t: (key: string) => string;
}

const UI_TRANSLATIONS: Record<string, { ar: string; en: string }> = {
  // Navigation & Actions
  requestConsultation: {
    ar: "طلب استشارة أو تواصل",
    en: "Request Consultation",
  },
  contactMe: {
    ar: "تواصل معي",
    en: "Get in Touch",
  },
  exploreServices: {
    ar: "استكشف الخدمات",
    en: "Explore Services",
  },
  learnMoreAboutExperience: {
    ar: "تعرّف على خبرتي",
    en: "Discover My Experience",
  },
  inquireAboutService: {
    ar: "استفسر عن هذه الخدمة",
    en: "Inquire About This Service",
  },
  contactViaWhatsApp: {
    ar: "تواصل عبر واتساب",
    en: "Contact via WhatsApp",
  },
  sendEmail: {
    ar: "إرسال بريد إلكتروني",
    en: "Send an Email",
  },
  callNow: {
    ar: "اتصال مباشر",
    en: "Direct Call",
  },

  // Hero & Sections
  heroTitle: {
    ar: "حلول قانونية وعقود تُبنى على الوضوح والثقة",
    en: "Legal Solutions & Contracts Built on Clarity and Trust",
  },
  metricsYearsLabel: {
    ar: "+5 سنوات",
    en: "+5 Years",
  },
  metricsYearsSub: {
    ar: "من الخبرة المهنية المتخصصة",
    en: "Of Specialized Professional Experience",
  },
  metricsContractsLabel: {
    ar: "+50 عقدًا",
    en: "+50 Contracts",
  },
  metricsContractsSub: {
    ar: "ضمن الخبرة العملية والمراجعة",
    en: "Within Practical Drafting & Review",
  },
  metricsLocationLabel: {
    ar: "المنطقة الشرقية",
    en: "Eastern Province",
  },
  metricsLocationSub: {
    ar: "المملكة العربية السعودية وتغطية عن بُعد",
    en: "Saudi Arabia & Remote Coverage",
  },

  // About Section
  aboutHeading: {
    ar: "خبرة قانونية برؤية عملية",
    en: "Legal Expertise with Practical Vision",
  },
  aboutBadge: {
    ar: "نبذة عن الخبيرة",
    en: "Profile Overview",
  },

  // Services Section
  servicesHeading: {
    ar: "الخدمات والحلول التعاقدية",
    en: "Services & Contractual Solutions",
  },
  servicesSubtitle: {
    ar: "خدمات قانونية متخصصة ومصممة بعناية لتلبية متطلبات الشركات ورجال الأعمال ورواد الأعمال في صياغة وفحص العقود وحمايتها.",
    en: "Specialized legal services carefully tailored to meet the needs of enterprises, corporate executives, and entrepreneurs in contract drafting, review, and risk mitigation.",
  },
  suitableCases: {
    ar: "الحالات التي تناسبها الخدمة:",
    en: "Suitable Use Cases:",
  },
  prerequisitesHeading: {
    ar: "المعلومات المفضلة قبل التواصل:",
    en: "Recommended Info Prior to Contact:",
  },

  // Experience Section
  experienceHeading: {
    ar: "خبرة في بيئات أعمال متنوعة",
    en: "Experience Across Diverse Business Sectors",
  },
  experienceSubtitle: {
    ar: "خبرات مهنية متراكمة في قطاعات حيوية تشمل البنوك، الشراكات الاستراتيجية، والعقود التجارية المعقدة.",
    en: "A robust professional track record in vital sectors including banking, strategic corporate partnerships, and sophisticated B2B agreements.",
  },

  // Methodology Section
  methodologyHeading: {
    ar: "منهجية العمل ورحلة العميل",
    en: "Our Methodology & Client Journey",
  },
  methodologySubtitle: {
    ar: "خطوات مدروسة تضمن الوضوح التام والشفافية في كل مرحلة من مراحل التعامل.",
    en: "A structured, four-stage process guaranteeing absolute clarity and transparency at every step.",
  },

  // CTA Section
  ctaHeading: {
    ar: "هل تحتاج إلى دعم في عقد أو اتفاقية؟",
    en: "Need Support with a Contract or Agreement?",
  },
  ctaSubtitle: {
    ar: "ابدأ بالتواصل لعرض احتياجك وتحديد الخطوة المناسبة بكل سرية واحترافية.",
    en: "Reach out today to discuss your requirements and determine the right next step with strict confidentiality.",
  },

  // FAQ Section
  faqHeading: {
    ar: "الأسئلة الشائعة",
    en: "Frequently Asked Questions",
  },
  faqSubtitle: {
    ar: "إجابات واضحة ومباشرة عن أبرز الاستفسارات المتعلقة بآلية العمل وتقديم الخدمات.",
    en: "Clear, direct answers regarding service modalities, prerequisites, and client engagement.",
  },

  // Contact Form
  contactHeading: {
    ar: "تواصل مع المحامية بيان الجعفر",
    en: "Connect with Attorney Bayan Aljafar",
  },
  contactSubtitle: {
    ar: "نسعد باستقبال استفساراتكم والرد عليها بكل خصوصية واهتمام مهني.",
    en: "We welcome your inquiries and look forward to responding with complete confidentiality and care.",
  },
  formFullName: {
    ar: "الاسم الكامل",
    en: "Full Name",
  },
  formEmail: {
    ar: "البريد الإلكتروني",
    en: "Email Address",
  },
  formPhone: {
    ar: "رقم الهاتف / الجوال",
    en: "Phone Number",
  },
  formService: {
    ar: "نوع الخدمة المطلوبة",
    en: "Requested Service",
  },
  formSelectServicePlaceholder: {
    ar: "اختر نوع الخدمة أو استفسار عام",
    en: "Select a service or general inquiry",
  },
  formPreferredContact: {
    ar: "طريقة التواصل المفضلة",
    en: "Preferred Contact Method",
  },
  formContactWhatsApp: {
    ar: "واتساب (WhatsApp)",
    en: "WhatsApp",
  },
  formContactPhone: {
    ar: "اتصال هاتفي",
    en: "Phone Call",
  },
  formContactEmail: {
    ar: "البريد الإلكتروني",
    en: "Email",
  },
  formMessage: {
    ar: "وصف مختصر للطلب (دون إرفاق بيانات سرية)",
    en: "Brief Description (do not attach confidential details)",
  },
  formPrivacyConsent: {
    ar: "أوافق على سياسة الخصوصية وأدرك أن إرسال هذا الطلب استفسار أولي لا ينشئ علاقة مهنية ملزمة تلقائيًا.",
    en: "I agree to the Privacy Policy and acknowledge that submitting this inquiry does not automatically establish a formal mandate.",
  },
  formSubmit: {
    ar: "إرسال الاستفسار الآن",
    en: "Submit Inquiry Now",
  },
  formSubmitting: {
    ar: "جاري الإرسال...",
    en: "Submitting...",
  },
  formDirectWhatsAppOption: {
    ar: "أو أرسل تفاصيل طلبك مباشرة عبر واتساب",
    en: "Or send your inquiry directly via WhatsApp",
  },

  // Feedback & Validation
  formRequiredField: {
    ar: "هذا الحقل مطلوب",
    en: "This field is required",
  },
  formInvalidEmail: {
    ar: "يرجى إدخال بريد إلكتروني صحيح",
    en: "Please enter a valid email address",
  },
  formInvalidPhone: {
    ar: "يرجى إدخال رقم هاتف صحيح (مثال: 05xxxxxxxx)",
    en: "Please enter a valid phone number (e.g. 05xxxxxxxx)",
  },
  formMustAgreePrivacy: {
    ar: "يرجى الموافقة على التنويه وسياسة الخصوصية للمتابعة",
    en: "Please accept the privacy terms to proceed",
  },
  formSuccessHeading: {
    ar: "تم استلام استفسارك بنجاح",
    en: "Inquiry Received Successfully",
  },
  formSuccessMessage: {
    ar: "شكرًا لتواصلك. تمت مراجعة البيانات الأولية وسيتم التواصل معك عبر وسيلة الاتصال المفضلة في أقرب وقت.",
    en: "Thank you for reaching out. Your preliminary details have been noted and we will be in touch shortly via your preferred channel.",
  },
  formSendAnother: {
    ar: "إرسال استفسار جديد",
    en: "Submit Another Inquiry",
  },

  // Legal & Footer
  legalDisclaimerTitle: {
    ar: "تنويه مهني وقانوني هام:",
    en: "Important Professional Notice:",
  },
  legalDisclaimerText: {
    ar: "المعلومات الواردة في هذا الموقع ذات طابع تعريفي وتثقيفي عام، ولا تُعد بأي حال استشارة قانونية مخصصة أو بديلاً عن دراسة كل حالة على حدة وفق وقائعها ومستنداتها. إرسال استفسار عبر الموقع لا يُنشئ علاقة تمثيل مهني أو تكليف ملزم إلا بعد الاتفاق الرسمي وتحديد نطاق العمل.",
    en: "The information on this website is for general informational purposes only and does not constitute formal legal counsel or a substitute for assessing specific circumstances. Submitting an inquiry does not establish an attorney-client relationship or binding mandate until an agreement is formally executed.",
  },
  privacyPolicy: {
    ar: "سياسة الخصوصية",
    en: "Privacy Policy",
  },
  termsAndConditions: {
    ar: "الشروط والأحكام",
    en: "Terms & Conditions",
  },
  allRightsReserved: {
    ar: "جميع الحقوق محفوظة © المحامية بيان الجعفر",
    en: "All Rights Reserved © Attorney Bayan Aljafar",
  },
  quickLinks: {
    ar: "روابط سريعة",
    en: "Quick Links",
  },
  contactDetails: {
    ar: "بيانات التواصل",
    en: "Contact Information",
  },
  backToTop: {
    ar: "العودة للأعلى",
    en: "Back to Top",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("ar");

  useEffect(() => {
    const savedLang = localStorage.getItem("bayan_lang") as Language;
    if (savedLang === "ar" || savedLang === "en") {
      setLanguageState(savedLang);
    }
  }, []);

  useEffect(() => {
    const dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    localStorage.setItem("bayan_lang", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const isRtl = language === "ar";

  const t = (key: string): string => {
    if (UI_TRANSLATIONS[key]) {
      return UI_TRANSLATIONS[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isRtl,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
