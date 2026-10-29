"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/content";
import { ArrowUpRight, ShieldCheck, Scale, Award, FileText, CheckCircle, MessageSquare } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { language, t, isRtl } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-ivory pt-12 pb-20 md:pt-20 md:pb-28 border-b border-gold-500/15">
      {/* Background Architectural Texture */}
      <div className="absolute inset-0 bg-guilloche opacity-40 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-navy-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 animate-fade-up">
            {/* Subtle Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gold-500/30 text-navy-900 shadow-sm text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-gold-500" />
              <span>{siteConfig.degree[language]}</span>
              <span className="text-gray-300">•</span>
              <span className="text-subtext font-normal">{siteConfig.location[language]}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold text-navy-900 leading-[1.4] sm:leading-[1.45] md:leading-[1.5] font-arabic">
              {siteConfig.tagline[language]}
            </h1>

            {/* Narrative Bio */}
            <p className="text-base sm:text-lg text-subtext leading-relaxed font-normal max-w-2xl">
              {siteConfig.heroBio[language]}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm shadow-luxury hover:shadow-luxury-lg transition-all duration-300 border border-gold-500/40 group"
              >
                <span>{t("exploreServices")}</span>
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
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm bg-white hover:bg-gold-50 text-navy-900 font-semibold text-sm shadow-sm transition-all duration-300 border border-navy-200 hover:border-gold-500/50"
              >
                <MessageSquare className="w-4 h-4 text-gold-600" />
                <span>{t("contactMe")}</span>
              </Link>
            </div>

            {/* Micro Credential Highlights */}
            <div className="pt-4 border-t border-navy-900/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-navy-800 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <span>{language === "ar" ? "سرية مهنية مطلقة" : "Strict Confidentiality"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <span>{language === "ar" ? "دقة تحليل البنود" : "Rigorous Clause Analysis"}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <span>{language === "ar" ? "حلول تجارية عملية" : "Pragmatic Commercial Terms"}</span>
              </div>
            </div>
          </div>

          {/* Luxury Geometric Visual / Crest Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Luxury Card */}
              <div className="relative rounded-2xl bg-white p-7 md:p-9 shadow-luxury-lg border border-gold-500/30 overflow-hidden">
                {/* Gold Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-400 via-gold-500 to-navy-900" />

                {/* Subtle Watermark Monogram */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-[0.03] text-navy-950 pointer-events-none font-serif text-9xl">
                  B
                </div>

                {/* Header of the visual card */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center font-serif text-xl font-bold shadow-sm border border-gold-500/40">
                      BA
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-navy-900 whitespace-nowrap">
                        {siteConfig.name[language]}
                      </h2>
                      <p className="text-xs text-gold-600 font-medium">
                        {siteConfig.shortDegree}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded bg-navy-50 text-navy-800 text-[11px] font-semibold border border-navy-200">
                    {language === "ar" ? "خدمات قانونية" : "Legal Services"}
                  </span>
                </div>

                {/* Featured Core Focus List */}
                <div className="py-6 space-y-4">
                  <div className="p-3.5 rounded-lg bg-ivory/60 border border-gold-500/15 flex items-start gap-3">
                    <FileText className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-navy-900">
                        {language === "ar" ? "صياغة وتدقيق العقود" : "Contract Drafting & Auditing"}
                      </h4>
                      <p className="text-[11px] text-subtext mt-0.5">
                        {language === "ar"
                          ? "حماية الحقوق ومنع الثغرات النظامية في أكثر من 50 عقدًا عمليًا."
                          : "Safeguarding interests across 50+ drafted & audited contracts."}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-ivory/60 border border-gold-500/15 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-navy-700 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-navy-900">
                        {language === "ar" ? "الشراكات والاتفاقيات بين الشركات" : "Corporate Strategic Alliances"}
                      </h4>
                      <p className="text-[11px] text-subtext mt-0.5">
                        {language === "ar"
                          ? "تنظيم التحالفات وعقود التعاون مع كبرى الكيانات والشركات الرائدة."
                          : "Structuring alliances with leading corporate & tech players."}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-ivory/60 border border-gold-500/15 flex items-start gap-3">
                    <Scale className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-navy-900">
                        {language === "ar" ? "القطاع المصرفي والمالي" : "Banking & Financial Sector"}
                      </h4>
                      <p className="text-[11px] text-subtext mt-0.5">
                        {language === "ar"
                          ? "فهم عميق للاشتراطات الرقابية ومتطلبات الحوكمة والتمويل."
                          : "Rigorous compliance, risk governance, and financing terms."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Badge on Card */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-subtext">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-gold-500" />
                    <span>{siteConfig.location[language]}</span>
                  </span>
                  <Link
                    href="/about"
                    className="text-gold-600 hover:text-gold-700 font-semibold flex items-center gap-1 group"
                  >
                    <span>{t("learnMoreAboutExperience")}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">›</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
