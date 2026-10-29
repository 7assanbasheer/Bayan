"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { experienceSectors, siteConfig } from "@/data/content";
import {
  Landmark,
  Building2,
  FileCheck,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Lock,
  Award,
  Scale,
  Users,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Landmark,
  Building2,
  FileCheck,
  Scale,
  Users,
};

export default function ExperiencePage() {
  const { language, t, isRtl } = useLanguage();

  return (
    <div className="py-12 md:py-20 bg-ivory/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb & Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-subtext">
            <Link href="/" className="hover:text-navy-900 transition-colors">
              {language === "ar" ? "الرئيسية" : "Home"}
            </Link>
            <span>/</span>
            <span className="text-gold-600 font-medium">
              {language === "ar" ? "الخبرات والقطاعات المهنية" : "Professional Experience"}
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 leading-[1.4] sm:leading-[1.45] md:leading-[1.5] font-arabic">
              {t("experienceHeading")}
            </h1>
            <p className="text-base sm:text-lg text-subtext leading-relaxed">
              {t("experienceSubtitle")}
            </p>
          </div>
        </div>

        {/* Editorial Sector Blocks */}
        <div className="space-y-10">
          {experienceSectors.map((sector, index) => {
            const Icon = iconMap[sector.iconName] || Landmark;

            return (
              <div
                key={sector.id}
                className="luxury-card rounded-2xl p-8 sm:p-10 bg-white border border-gold-500/25 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-4 space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center border border-gold-500/30">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider block mb-1">
                        {sector.subtitle[language]}
                      </span>
                      <h2 className="text-2xl font-bold text-navy-900 font-arabic">
                        {sector.title[language]}
                      </h2>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-navy-50 text-navy-800 text-xs font-medium border border-navy-100">
                      <Award className="w-3.5 h-3.5 text-gold-600" />
                      <span>
                        {index === 0
                          ? language === "ar" ? "معايير امتثال مشددة" : "Rigorous Compliance"
                          : index === 1
                          ? language === "ar" ? "تحالفات استراتيجية" : "Strategic Alliances"
                          : index === 2
                          ? language === "ar" ? "+50 عقدًا عمليًا" : "+50 Executed Contracts"
                          : index === 3
                          ? language === "ar" ? "نظام الأحوال الشخصية" : "Personal Status Law"
                          : language === "ar" ? "نظام العمل السعودي" : "Saudi Labor Law"}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-8 space-y-5">
                    <p className="text-sm sm:text-base text-subtext leading-relaxed">
                      {sector.description[language]}
                    </p>

                    <div className="p-5 rounded-xl bg-ivory/60 border border-gold-500/15 space-y-3">
                      <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                        {language === "ar" ? "أبرز محاور الممارسة التعاقدية:" : "Key Practice Pillars:"}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-navy-800">
                        {sector.points[language].map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-gold-600 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Ecosystem Exposure: Elm & Tamara Context */}
        <div className="rounded-2xl bg-navy-950 text-white p-8 sm:p-10 border border-gold-500/30 space-y-6">
          <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>
              {language === "ar" ? "بيئات أعمال ومنظومات رقمية رائدة" : "Progressive Digital Ecosystems"}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-arabic text-white">
            {language === "ar"
              ? "خبرات تعاقدية متصلة بكيانات ومنصات رائدة"
              : "Contractual Depth Across Progressive Corporate Entities"}
          </h3>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-4xl">
            {language === "ar"
              ? "استندت الخبرات المهنية لمكتب بيان إلى تجارب عملية شملت بيئات أعمال رائدة مثل شركة علم (Elm) وتمارا (Tamara) والعديد من الشركات الوطنية؛ حيث شملت المهام المساهمة في فحص بنود العقود الرقمية، ومواءمة الشروط مع المعايير البنكية والتنظيمية، وإرساء نماذج تعاون مرنة تعزز استدامة الأعمال وتحد من النزاعات."
              : "The professional foundation of Bayan Office is rooted in practical engagements interfacing with forward-looking corporate and fintech entities such as Elm, Tamara, and renowned national companies. Engagements concentrated on reviewing digital service agreements, harmonizing clauses with financial standards, and engineering dispute-resistant B2B partnerships."}
          </p>

          <div className="pt-4 border-t border-navy-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-gold-400/90">
              <Lock className="w-4 h-4" />
              <span>
                {language === "ar"
                  ? "التزام تام بحماية سرية العقود وأسماء الأطراف طبقًا للأنظمة السعودية."
                  : "Complete adherence to contract non-disclosure and party anonymity under Saudi laws."}
              </span>
            </div>

            <Link
              href="/contact"
              className="px-6 py-2.5 rounded bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 flex-shrink-0"
            >
              <span>{t("contactMe")}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
