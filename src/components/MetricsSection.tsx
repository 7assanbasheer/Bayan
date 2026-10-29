"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/content";
import { Clock, FileStack, MapPin } from "lucide-react";

export const MetricsSection: React.FC = () => {
  const { language } = useLanguage();

  const metrics = [
    {
      id: "years",
      stat: siteConfig.experienceYears,
      unit: language === "ar" ? "سنوات" : "Years",
      title: language === "ar" ? "خبرة مهنية متخصصة" : "Professional Experience",
      description:
        language === "ar"
          ? "في العقود التجارية، قطاع البنوك، والشراكات المؤسسية"
          : "In commercial contracts, banking, and B2B partnerships",
      icon: Clock,
    },
    {
      id: "contracts",
      stat: siteConfig.contractsCount,
      unit: language === "ar" ? "عقدًا" : "Contracts",
      title: language === "ar" ? "ضمن الخبرة العملية والمراجعة" : "Drafted & Audited Contracts",
      description:
        language === "ar"
          ? "صياغة وتدقيق قانوني دقيق لمختلف الاتفاقيات ومذكرات التفاهم"
          : "Rigorous drafting and analysis of corporate agreements and MOUs",
      icon: FileStack,
    },
    {
      id: "location",
      stat: language === "ar" ? "المنطقة الشرقية" : "Eastern Province",
      unit: "",
      title: language === "ar" ? "المملكة العربية السعودية" : "Kingdom of Saudi Arabia",
      description:
        language === "ar"
          ? "خدمات حضورية وتغطية مهنية متكاملة عن بُعد لكافة المناطق"
          : "Regional presence with seamless remote professional coverage across all regions",
      icon: MapPin,
    },
  ];

  return (
    <section className="relative mt-6 sm:-mt-8 md:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          const isTextStat = metric.id === "location";

          return (
            <div
              key={metric.id}
              className="luxury-card rounded-xl p-5 sm:p-6 md:p-7 bg-white border border-gold-500/25 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Gold Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500/30 group-hover:bg-gold-500 transition-colors" />

              <div>
                {/* Stat & Icon Row */}
                <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
                  <div className="flex items-baseline gap-1.5 sm:gap-2">
                    <span
                      className={`${
                        isTextStat
                          ? "text-xl sm:text-2xl md:text-[1.65rem] font-bold font-arabic text-navy-900"
                          : "text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-navy-900"
                      } group-hover:text-gold-600 transition-colors`}
                    >
                      {metric.stat}
                    </span>
                    {metric.unit && (
                      <span className="text-xs sm:text-sm font-semibold text-gold-600 font-arabic">
                        {metric.unit}
                      </span>
                    )}
                  </div>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-navy-50 text-navy-900 border border-navy-100 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-50 group-hover:text-gold-700 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold-600" />
                  </div>
                </div>

                {/* Clear, Non-repetitive Title */}
                <h3 className="text-sm sm:text-base font-bold text-navy-900 font-arabic mb-1 leading-snug">
                  {metric.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="text-xs text-subtext leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Single Consolidated Disclaimer Note under the 3 cards (not repeated) */}
      <div className="mt-3.5 text-center">
        <p className="text-[11px] text-subtext/75">
          * {language === "ar"
            ? "مؤشرات توثيقية للخبرة العملية السابقة ولا تمثل ضمانًا لنتائج قانونية مستقبلية."
            : "Documented indicators of past professional experience; does not imply guarantees of future legal outcomes."}
        </p>
      </div>
    </section>
  );
};
