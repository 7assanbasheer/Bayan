"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/content";
import {
  GraduationCap,
  Clock,
  FileCheck,
  ShieldCheck,
  Building,
  Landmark,
  Handshake,
  ArrowUpRight,
  UserCheck,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  const { language, t, isRtl } = useLanguage();

  return (
    <div className="py-12 md:py-20 bg-ivory/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Breadcrumb & Title */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-subtext">
            <Link href="/" className="hover:text-navy-900 transition-colors">
              {language === "ar" ? "الرئيسية" : "Home"}
            </Link>
            <span>/</span>
            <span className="text-gold-600 font-medium">
              {language === "ar" ? "عن مكتب بيان" : "About Bayan Office"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 leading-[1.4] sm:leading-[1.45] md:leading-[1.5] font-arabic">
            {language === "ar" ? "خبرة قانونية برؤية عملية ورصينة" : "Legal Expertise with Practical Precision"}
          </h1>

          <p className="text-base sm:text-lg text-subtext max-w-3xl leading-relaxed">
            {siteConfig.aboutSnippet[language]}
          </p>
        </div>

        {/* Profile Card & Core Qualifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Avatar / Portrait Placeholder Frame (4 cols) */}
          <div className="lg:col-span-4">
            <div className="luxury-card rounded-2xl bg-white p-7 border border-gold-500/30 text-center space-y-5">
              {/* Elegant Monogram Portrait Box */}
              <div className="relative w-48 h-56 mx-auto rounded-xl bg-navy-950 flex flex-col items-center justify-center p-6 border-2 border-gold-500/40 shadow-inner group overflow-hidden">
                <div className="absolute inset-0 bg-dark-guilloche opacity-30" />
                <div className="relative z-10 w-20 h-20 rounded-full bg-navy-900 border border-gold-400 flex items-center justify-center text-gold-400 font-serif text-3xl font-bold shadow-md">
                  BA
                </div>
                <div className="relative z-10 mt-3 text-center">
                  <span className="text-white font-bold text-sm block whitespace-nowrap">
                    {siteConfig.name[language]}
                  </span>
                  <span className="text-gold-400 text-xs font-serif">
                    {siteConfig.shortDegree}
                  </span>
                </div>
              </div>

              {/* Note about portrait placeholder */}
              <div className="text-[11px] text-gray-400 leading-snug">
                {language === "ar"
                  ? "(موضع مخصص للصورة الشخصية الاحترافية عند اعتمادها وتوفيرها)"
                  : "(Reserved placeholder for official professional portrait upon release)"}
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={`tel:${siteConfig.phoneFormatted}`}
                  className="py-2.5 px-4 rounded bg-navy-50 hover:bg-gold-50 text-navy-900 hover:text-gold-700 font-semibold text-xs transition-colors font-mono"
                  dir="ltr"
                >
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="py-2.5 px-4 rounded bg-navy-900 text-white font-medium text-xs transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Narrative & Pillars (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Academic & Experience Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-gold-500/20 shadow-sm flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-xs text-subtext block">
                    {language === "ar" ? "المؤهل الأكاديمي" : "Academic Qualification"}
                  </span>
                  <h4 className="text-sm font-bold text-navy-900">
                    {siteConfig.degree[language]}
                  </h4>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gold-500/20 shadow-sm flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-xs text-subtext block">
                    {language === "ar" ? "الخبرة المهنية" : "Professional Practice"}
                  </span>
                  <h4 className="text-sm font-bold text-navy-900">
                    {language === "ar" ? "أكثر من 5 سنوات" : "Over 5 Years"}
                  </h4>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gold-500/20 shadow-sm flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-xs text-subtext block">
                    {language === "ar" ? "سجل العقود" : "Contract Track Record"}
                  </span>
                  <h4 className="text-sm font-bold text-navy-900">
                    {language === "ar" ? "أكثر من 50 عقدًا" : "+50 Contracts"}
                  </h4>
                </div>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="p-8 rounded-2xl bg-white border border-gold-500/20 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-navy-900 font-arabic">
                {language === "ar" ? "نبذة عن مكتب بيان والخبرة المهنية" : "About Bayan Office & Professional Practice"}
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-subtext leading-relaxed">
                <p>
                  {siteConfig.heroBio[language]}
                </p>
                <p>
                  {language === "ar"
                    ? "يتبنى مكتب بيان نهجًا قانونيًا رصينًا يقوم على هندسة البنود بصيغ نظامية دقيقة تحمي التوازن التعاقدي بين الأطراف وتمنع مواضع التأويل أو النزاع المستقبلي. تتركز ممارسات المكتب بصفته استشاري عقود احترافية في مجالات صياغة وتدقيق العقود، العقود التجارية، قضايا الأحوال الشخصية (الطلاق والنفقة والحضانة والتركات)، ونظام العمل السعودي واللوائح التنظيمية، مع فهم متعمق للاشتراطات الرقابية ومتطلبات الحوكمة في بيئات القطاع المصرفي والمالي."
                    : "Bayan Office adheres to a rigorous legal and contractual engineering methodology designed to preserve equilibrium between parties while preempting ambiguities and future disputes. The office's practice as a professional contracts consultant spans contract drafting and auditing, corporate agreements, personal status cases (divorce, alimony, custody), and Saudi Labor Law governance, bolstered by deep regulatory acumen in financial institutions."}
                </p>
                <p>
                  {language === "ar"
                    ? "خلال مسيرتها المهنية التي تتجاوز خمس سنوات، شاركت بيان الجعفر في مراجعة وصياغة أكثر من 50 عقدًا تشمل اتفاقيات شراكة وتعاون، بالإضافة إلى ممارسات عملية ارتبطت ببيئات أعمال رائدة بالمملكة تشمل شركة علم (Elm) وتمارا (Tamara) والعديد من المنشآت الأخرى، مع التركيز التام على تقديم خدمات متوافقة بدقة مع الأنظمة السعودية."
                    : "Over more than five years of professional practice, Consultant Bayan Aljafar has drafted and audited over 50 contracts spanning joint ventures, commercial agreements, and operational frameworks, with practical experience linked to progressive Saudi ecosystems including Elm, Tamara, and key national enterprises."}
                </p>
              </div>
            </div>

            {/* Philosophy & Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white border border-gold-500/20 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-navy-50 text-gold-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-navy-900 font-arabic">
                  {language === "ar" ? "السرية والخصوصية التامة" : "Absolute Confidentiality"}
                </h4>
                <p className="text-xs text-subtext leading-relaxed">
                  {language === "ar"
                    ? "الالتزام الصارم بأخلاقيات المهنة وسرية المعلومات التجارية والمستندات، وتوفير بيئة تواصل آمنة تحمي أسرار وخطط العملاء دون أي استثناء."
                    : "Strict professional ethics and complete non-disclosure of all commercial insights, providing a secure, discreet advisory space."}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-gold-500/20 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-navy-50 text-gold-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-navy-900 font-arabic">
                  {language === "ar" ? "الوضوح والدقة التنظيمية" : "Clarity & Regulatory Rigour"}
                </h4>
                <p className="text-xs text-subtext leading-relaxed">
                  {language === "ar"
                    ? "صياغة بنود مباشرة خالية من الغموض التعاقدي، تساعد الأطراف على استيعاب التزاماتهم المتبادلة دون إبهام أو تعقيدات مفتعلة."
                    : "Formulating unambiguous clauses that allow all parties to grasp their rights and deliverables with complete clarity."}
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="p-6 rounded-xl bg-navy-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-gold-500/30">
              <div>
                <h4 className="text-sm font-bold text-gold-400">
                  {language === "ar" ? "هل ترغب في مناقشة عقد أو اتفاقية؟" : "Looking to review or structure an agreement?"}
                </h4>
                <p className="text-xs text-gray-300 mt-1">
                  {language === "ar" ? "يسعدنا تلقي استفسارك الأولي لتحديد نطاق العمل المناسب." : "We welcome your initial inquiry to define appropriate next steps."}
                </p>
              </div>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider transition-colors flex-shrink-0 flex items-center gap-2"
              >
                <span>{t("contactMe")}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? "rotate-180" : ""}`} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
