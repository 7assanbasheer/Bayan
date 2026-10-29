"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/content";
import { Clock, FileStack, MapPin } from "lucide-react";

export const MetricsSection: React.FC = () => {
  const { language, t } = useLanguage();

  const metrics = [
    {
      id: "years",
      number: siteConfig.experienceYears,
      unit: language === "ar" ? "سنوات" : "Years",
      title: t("metricsYearsLabel"),
      description: t("metricsYearsSub"),
      icon: Clock,
    },
    {
      id: "contracts",
      number: siteConfig.contractsCount,
      unit: language === "ar" ? "عقدًا" : "Contracts",
      title: t("metricsContractsLabel"),
      description: t("metricsContractsSub"),
      icon: FileStack,
    },
    {
      id: "location",
      number: language === "ar" ? "الشرقية" : "Eastern",
      unit: language === "ar" ? "المملكة" : "KSA",
      title: t("metricsLocationLabel"),
      description: t("metricsLocationSub"),
      icon: MapPin,
    },
  ];

  return (
    <section className="relative -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.id}
              className="luxury-card rounded-xl p-6 sm:p-8 bg-white border border-gold-500/25 relative overflow-hidden group"
            >
              {/* Gold Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500/40 group-hover:bg-gold-500 transition-colors" />

              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-bold font-serif text-navy-900 group-hover:text-gold-600 transition-colors">
                      {metric.number}
                    </span>
                    <span className="text-sm font-semibold text-gold-600">
                      {metric.unit}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mt-2 font-arabic">
                    {metric.title}
                  </h3>
                  <p className="text-xs text-subtext mt-1 leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-navy-50 text-navy-800 border border-navy-100 group-hover:bg-gold-50 group-hover:text-gold-700 transition-colors">
                  <Icon className="w-6 h-6 text-gold-600" />
                </div>
              </div>

              {/* Disclaimer micro note */}
              <div className="mt-4 pt-3 border-t border-gray-100 text-[10px] text-gray-400">
                {language === "ar"
                  ? "مؤشر توثيقي للخبرة العملية السابقة ولا يمثل ضمانًا لنتائج مستقبلية."
                  : "Empirical record of professional experience; does not imply outcome warranties."}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
