"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { experienceSectors } from "@/data/content";
import { Landmark, Building2, FileCheck, ArrowUpRight, CheckCircle2, Shield } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Landmark,
  Building2,
  FileCheck,
};

export const ExperienceSection: React.FC = () => {
  const { language, t, isRtl } = useLanguage();

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-24 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-50 text-navy-800 text-xs font-semibold border border-navy-200">
            <Shield className="w-3.5 h-3.5 text-gold-600" />
            <span>{language === "ar" ? "مسيرة مهنية وسجل عملي" : "Professional Track Record"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 leading-snug sm:leading-normal font-arabic">
            {t("experienceHeading")}
          </h2>

          <p className="text-sm sm:text-base text-subtext leading-relaxed">
            {t("experienceSubtitle")}
          </p>
        </div>

        {/* Highlighted Sectors Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {experienceSectors.map((sector) => {
            const Icon = iconMap[sector.iconName] || Building2;

            return (
              <div
                key={sector.id}
                className="luxury-card rounded-xl p-5 sm:p-7 md:p-8 bg-ivory/40 border border-gold-500/20 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-4 sm:mb-6 shadow-sm border border-gold-500/30 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider block mb-1">
                    {sector.subtitle[language]}
                  </span>

                  <h3 className="text-xl font-bold text-navy-900 mb-3 font-arabic">
                    {sector.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-subtext leading-relaxed mb-6">
                    {sector.description[language]}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-gray-200/80">
                    {sector.points[language].map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-navy-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200/60">
                  <span className="text-[11px] text-gray-400 italic">
                    {language === "ar"
                      ? "خبرة تعاقدية وفهم تطبيقي للبيئة التنظيمية السعودية"
                      : "Applied contractual depth under Saudi regulatory dynamics"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Narrative Context Card regarding corporate ecosystems like Elm & Tamara */}
        <div className="mt-8 sm:mt-12 rounded-xl bg-navy-950 text-white p-5 sm:p-7 md:p-8 border border-gold-500/30 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                {language === "ar" ? "بيئات العمل والتقنية المتقدمة" : "High-Growth Corporate Environments"}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white font-arabic">
                {language === "ar"
                  ? "خبرات مرتبطة بمنظومات رائدة في المملكة"
                  : "Experience within Leading National Ecosystems"}
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {language === "ar"
                  ? "تتضمن الخبرات المهنية لبيان الجعفر ممارسات عملية ارتبطت ببيئات شركات رائدة مثل شركة علم (Elm) وتمارا (Tamara) والعديد من المنشآت الأخرى، حيث ركّزت على صياغة أطر التعاون، ومواءمة البنود مع معايير الالتزام المالي والتقني، وحوكمة الاتفاقيات."
                  : "Bayan Aljafar's professional experience encompasses practical engagements connected to pioneer enterprise environments such as Elm, Tamara, and other notable corporations, focusing on structuring collaboration frameworks, harmonizing clauses with financial & tech compliance benchmarks, and governing agreements."}
              </p>
              <p className="text-[11px] text-gold-400/80 pt-1">
                {language === "ar"
                  ? "* الإشارة هنا تأتي في إطار وصف الخبرة المهنية وسياق الممارسة العملية، ولا تُعد ادعاءً بوجود تمثيل حصري أو شراكة تجارية رسمية."
                  : "* Mentioned strictly within the context of verified professional exposure and practical contract engagement, without asserting exclusive representation or official commercial partnership."}
              </p>
            </div>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider transition-colors flex-shrink-0 text-center"
            >
              <span>{t("contactMe")}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
