"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { methodologySteps } from "@/data/content";
import { Send, Search, FileSpreadsheet, CheckCircle } from "lucide-react";

const stepIcons = [Send, Search, FileSpreadsheet, CheckCircle];

export const MethodologySection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-ivory/60 relative border-t border-b border-gold-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-gold-700 text-xs font-semibold border border-gold-300 shadow-sm">
            <span>{language === "ar" ? "وضوح تام في كل خطوة" : "Absolute Transparency"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-normal md:leading-relaxed font-arabic">
            {t("methodologyHeading")}
          </h2>

          <p className="text-base text-subtext leading-relaxed">
            {t("methodologySubtitle")}
          </p>
        </div>

        {/* 4-Step Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {methodologySteps.map((step, index) => {
            const Icon = stepIcons[index] || CheckCircle;

            return (
              <div
                key={step.step}
                className="luxury-card rounded-xl p-6 bg-white border border-gold-500/25 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-serif font-bold text-gold-500/80 group-hover:text-gold-600 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center border border-navy-100 group-hover:bg-gold-50 group-hover:text-gold-700 transition-colors">
                      <Icon className="w-5 h-5 text-gold-600" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-navy-900 mb-2.5 font-arabic">
                    {step.title[language]}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-subtext leading-relaxed">
                    {step.description[language]}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-gray-100 flex items-center gap-2 text-[11px] text-gold-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span>
                    {language === "ar" ? `المرحلة ${index + 1}` : `Phase ${index + 1}`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
