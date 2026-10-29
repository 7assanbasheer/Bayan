"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/content";
import { ArrowUpRight, GraduationCap, ShieldCheck, CheckCircle2 } from "lucide-react";

export const AboutSection: React.FC = () => {
  const { language, t, isRtl } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Visual Profile Editorial Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Decorative Background Frame */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-gold-500/20 via-navy-900/5 to-transparent blur-lg" />

              <div className="relative rounded-xl bg-ivory p-5 sm:p-7 md:p-8 border border-gold-500/30 shadow-luxury space-y-5 sm:space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-navy-100">
                  <span className="text-xs font-semibold tracking-wider uppercase text-gold-600">
                    {siteConfig.degree[language]}
                  </span>
                  <GraduationCap className="w-5 h-5 text-gold-600" />
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-navy-900 leading-snug">
                    {siteConfig.name[language]}
                  </h3>
                  <p className="text-xs text-gold-600 font-semibold uppercase tracking-wider">
                    {siteConfig.roleTitle[language]} • {siteConfig.shortDegree[language]}
                  </p>
                  <p className="text-xs sm:text-sm text-subtext leading-relaxed">
                    {siteConfig.aboutSnippet[language]}
                  </p>
                </div>

                {/* Professional Pillars */}
                <div className="space-y-3 pt-3 border-t border-navy-100 text-xs text-navy-900 font-medium">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span>
                      {language === "ar"
                        ? "استشاري عقود احترافية وخبرة تتجاوز 5 سنوات"
                        : "Contracts consultant with 5+ years of practice"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span>
                      {language === "ar"
                        ? "خبرة في قضايا الأحوال الشخصية (الطلاق والنفقة)"
                        : "Personal status expertise (divorce & alimony)"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <span>
                      {language === "ar"
                        ? "خبرة في نظام العمل السعودي والنزاعات العمالية"
                        : "Saudi Labor Law & workplace regulations"}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded bg-navy-950 text-white text-xs flex items-center justify-between">
                  <span className="text-gold-400 font-medium">
                    {siteConfig.location[language]}
                  </span>
                  <span className="text-[11px] text-gray-300">
                    {language === "ar" ? "حضور محلي وتغطية شاملة" : "Regional & Remote"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Editorial Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 text-gold-700 text-xs font-semibold border border-gold-200">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
              <span>{t("aboutBadge")}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-normal md:leading-relaxed font-arabic">
              {t("aboutHeading")}
            </h2>

            <p className="text-base sm:text-lg text-subtext leading-relaxed">
              {siteConfig.aboutSnippet[language]}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="p-5 rounded-lg bg-ivory/60 border border-gold-500/20">
                <h4 className="text-sm font-bold text-navy-900 mb-1.5">
                  {language === "ar" ? "فلسفة العمل" : "Professional Philosophy"}
                </h4>
                <p className="text-xs text-subtext leading-relaxed">
                  {language === "ar"
                    ? "الانطلاق من الدقة والشفافية التامة، وصياغة اتفاقيات مفهومة للأطراف لا تقتصر على التعقيد الاصطلاحي، بل تُحدد الحقوق وتمنع النزاعات قبل نشوئها."
                    : "Grounded in precision, absolute clarity, and mutual transparency. Crafting enforceable, understandable agreements that protect rights and avert friction before it arises."}
                </p>
              </div>

              <div className="p-5 rounded-lg bg-ivory/60 border border-gold-500/20">
                <h4 className="text-sm font-bold text-navy-900 mb-1.5">
                  {language === "ar" ? "السرية والخصوصية" : "Confidentiality & Trust"}
                </h4>
                <p className="text-xs text-subtext leading-relaxed">
                  {language === "ar"
                    ? "الالتزام الصارم بأخلاقيات المهنة وسرية المعلومات التجارية والمستندات، وتوفير بيئة تواصل آمنة تحمي أسرار وخطط العملاء."
                    : "Unwavering adherence to ethical confidentiality and data protection standards, ensuring a secure environment for all proprietary commercial insights."}
                </p>
              </div>
            </div>

            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all border border-gold-500/40 group text-center"
              >
                <span>{t("learnMoreAboutExperience")}</span>
                <ArrowUpRight
                  className={`w-4 h-4 text-gold-400 transition-transform ${
                    isRtl
                      ? "group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 rotate-180"
                      : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  }`}
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-white hover:bg-gold-50 text-navy-900 font-semibold text-xs sm:text-sm border border-navy-200 transition-colors text-center"
              >
                <span>{t("contactMe")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
