"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { servicesData } from "@/data/content";
import { ServiceItem } from "@/types";
import {
  FileSignature,
  SearchCheck,
  Handshake,
  Briefcase,
  FileText,
  ShieldCheck,
  ArrowUpRight,
  Info,
  CheckCircle2,
  X,
  MessageSquare,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  FileSignature,
  SearchCheck,
  Handshake,
  Briefcase,
  FileText,
  ShieldCheck,
};

export const ServicesSection: React.FC = () => {
  const { language, t, isRtl } = useLanguage();
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleInquire = (service: ServiceItem) => {
    // Navigate to contact with preselected service id
    router.push(`/contact?service=${service.id}`);
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-ivory/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-gold-700 text-xs font-semibold border border-gold-300/60 shadow-sm">
            <span>{language === "ar" ? "حلول تعاقدية متخصصة" : "Specialized Contractual Solutions"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-normal md:leading-relaxed font-arabic">
            {t("servicesHeading")}
          </h2>

          <p className="text-base text-subtext leading-relaxed">
            {t("servicesSubtitle")}
          </p>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || FileText;

            return (
              <div
                key={service.id}
                className="luxury-card rounded-xl p-7 bg-white border border-gold-500/25 flex flex-col justify-between relative group"
              >
                {/* Gold Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500/30 group-hover:bg-gold-500 transition-colors" />

                <div>
                  {/* Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-navy-50 text-navy-900 border border-navy-100 flex items-center justify-center group-hover:bg-gold-50 group-hover:text-gold-700 transition-colors">
                      <IconComponent className="w-6 h-6 text-gold-600" />
                    </div>

                    {service.badge && (
                      <span className="px-2.5 py-1 rounded text-[11px] font-semibold bg-gold-50 text-gold-700 border border-gold-200">
                        {service.badge[language]}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors font-arabic">
                    {service.title[language]}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-subtext leading-relaxed mb-6">
                    {service.shortDescription[language]}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-5 border-t border-gray-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-navy-800 hover:text-gold-600 flex items-center gap-1.5 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-gold-500" />
                    <span>{language === "ar" ? "التفاصيل والشروط" : "View Details"}</span>
                  </button>

                  <button
                    onClick={() => handleInquire(service)}
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-sm bg-navy-900 hover:bg-navy-800 text-white text-xs font-medium transition-all shadow-sm group/btn border border-gold-500/30"
                  >
                    <span>{t("inquireAboutService")}</span>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 text-gold-400 transition-transform ${
                        isRtl
                          ? "group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5 rotate-180"
                          : "group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      }`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scope Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-subtext max-w-2xl mx-auto leading-relaxed">
            {language === "ar"
              ? "* تقدم جميع الخدمات بصورة شخصية ومهنية وفقًا للأنظمة المعمول بها في المملكة العربية السعودية، وبما يتوافق مع التراخيص والصلاحيات النظامية المعتمدة."
              : "* All services are rendered personally and professionally under applicable Saudi Arabian regulations, adhering strictly to authorized scopes and statutory frameworks."}
          </p>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedService(null)}
          />

          <div className="relative bg-white rounded-xl shadow-2xl border border-gold-500/30 max-w-2xl w-full p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between pb-5 border-b border-gray-100">
              <div>
                <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider block mb-1">
                  {selectedService.badge ? selectedService.badge[language] : (language === "ar" ? "خدمة متخصصة" : "Specialized Service")}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-navy-900 font-arabic">
                  {selectedService.title[language]}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 rounded-full text-gray-400 hover:text-navy-900 hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="py-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                  {language === "ar" ? "عن الخدمة ونطاقها:" : "About the Service:"}
                </h4>
                <p className="text-sm text-subtext leading-relaxed">
                  {selectedService.fullDescription[language]}
                </p>
              </div>

              {/* Suitable For */}
              <div className="p-4 rounded-lg bg-ivory/80 border border-gold-500/20">
                <h4 className="text-xs font-bold text-navy-900 mb-2.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  <span>{t("suitableCases")}</span>
                </h4>
                <ul className="space-y-2 text-xs text-subtext">
                  {selectedService.suitableFor[language].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prerequisites */}
              <div className="p-4 rounded-lg bg-navy-50/70 border border-navy-100">
                <h4 className="text-xs font-bold text-navy-900 mb-2.5 flex items-center gap-2">
                  <Info className="w-4 h-4 text-navy-700" />
                  <span>{t("prerequisitesHeading")}</span>
                </h4>
                <ul className="space-y-2 text-xs text-subtext">
                  {selectedService.prerequisites[language].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded text-xs font-medium text-navy-700 hover:bg-gray-100 transition-colors"
              >
                {language === "ar" ? "إغلاق" : "Close"}
              </button>

              <button
                onClick={() => {
                  const s = selectedService;
                  setSelectedService(null);
                  handleInquire(s);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm border border-gold-500/40"
              >
                <MessageSquare className="w-4 h-4 text-gold-400" />
                <span>{t("inquireAboutService")}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
