"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/content";
import { Scale, FileText, AlertTriangle, ShieldCheck } from "lucide-react";

export default function TermsPage() {
  const { language } = useLanguage();

  return (
    <div className="py-12 md:py-20 bg-ivory/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-subtext">
          <Link href="/" className="hover:text-navy-900 transition-colors">
            {language === "ar" ? "الرئيسية" : "Home"}
          </Link>
          <span>/</span>
          <span className="text-gold-600 font-medium">
            {language === "ar" ? "الشروط والأحكام والتنويه القانوني" : "Terms & Legal Disclaimer"}
          </span>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-navy-800 text-xs font-semibold border border-navy-200">
            <Scale className="w-3.5 h-3.5 text-gold-600" />
            <span>{language === "ar" ? "تنويه نظامي ملزم" : "Statutory Notice"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 font-arabic">
            {language === "ar" ? "الشروط والأحكام والتنويه القانوني" : "Terms of Use & Legal Disclaimer"}
          </h1>
          <p className="text-sm text-subtext">
            {language === "ar"
              ? "المحامية بيان الجعفر للخدمات القانونية والعقود التجارية | المنطقة الشرقية، المملكة العربية السعودية"
              : "Attorney Bayan Aljafar Legal & Commercial Contract Services | Eastern Province, Saudi Arabia"}
          </p>
        </div>

        {/* Prominent Legal Disclaimer Box */}
        <div className="p-7 rounded-2xl bg-navy-950 text-white border border-gold-500/30 space-y-3">
          <div className="flex items-center gap-2 text-gold-400 font-bold text-base">
            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            <span>
              {language === "ar" ? "تنويه عام حول طبيعة المحتوى المنشور:" : "General Disclaimer on Website Content:"}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {language === "ar"
              ? "كافة المقالات والمعلومات والبيانات المعروضة على هذا الموقع هي لأغراض تعريفية وتثقيفية عامة فقط، ولا تُشكل بأي حال من الأحوال مشورة قانونية مخصصة أو رأيًا ملزمًا. لا يترتب على الاطلاع على هذا الموقع أو إرسال استفسار من خلاله نشوء أي علاقة وكالة أو تمثيل مهني بين المحامية بيان الجعفر والزائر. يخضع تقديم أي خدمة قانونية لاتفاق مسبق ومكتوب يحدد نطاق العمل والأتعاب وفق الأنظمة السعودية المعمول بها."
              : "All content, summaries, and informational materials presented on this website are for general informational purposes only and do not constitute tailored legal counsel or binding legal opinions. Browsing this site or transmitting inquiries does not create an attorney-client relationship. Formal engagements require an executed written agreement specifying scope and professional terms under applicable Saudi statutory regulations."}
          </p>
        </div>

        {/* Detailed Terms */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gold-500/25 shadow-sm space-y-8 text-sm text-subtext leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-navy-900 font-arabic">
              {language === "ar" ? "1. استخدام الموقع والتواصل" : "1. Website Use & Communications"}
            </h3>
            <p>
              {language === "ar"
                ? "يوافق المستخدم على استخدام الموقع للأغراض المشروعة فقط ووفقًا للأنظمة السعودية ذات العلاقة. يمتنع المستخدم عن إرسال أي محتوى مضلل أو خبيث أو محاولة اختراق أمن الموقع أو إرسال وثائق تعود لأطراف ثالثة دون تفويض نظامي."
                : "Users agree to utilize this website strictly for lawful purposes under applicable Saudi regulations, refraining from submitting malicious scripts or proprietary third-party records without proper authorization."}
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-navy-900 font-arabic">
              {language === "ar" ? "2. حقوق الملكية الفكرية" : "2. Intellectual Property"}
            </h3>
            <p>
              {language === "ar"
                ? "جميع النصوص والتصاميم والشعارات والمحتوى التحريري المنشور على الموقع هي ملك حصري للمحامية بيان الجعفر ومحمية بموجب أنظمة حماية حقوق المؤلف والعلامات التجارية في المملكة العربية السعودية. يُمنع نسخ أو إعادة نشر أي جزء دون إذن كتابي مسبق."
                : "All texts, structural layouts, typographic emblems, and original editorial content are the exclusive intellectual property of Attorney Bayan Aljafar, protected under Saudi copyright and IP laws."}
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-navy-900 font-arabic">
              {language === "ar" ? "3. التحديد المهني للمسؤولية" : "3. Professional Limitation of Liability"}
            </h3>
            <p>
              {language === "ar"
                ? "لا تتحمل المحامية بيان الجعفر أي مسؤولية عن أي قرارات أو تصرفات يتخذها الزائر اعتمادًا على المحتوى العام المنشور دون الحصول على استشارة قانونية مهنية مخصصة لدراسة مستندات الحالة المحددة."
                : "Attorney Bayan Aljafar assumes no liability for actions taken by visitors based solely on generalized site information in lieu of engaging qualified professional counsel to review individual contract dossiers."}
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-navy-900 font-arabic">
              {language === "ar" ? "4. الاختصاص القضائي والنظام الحاكم" : "4. Governing Law & Jurisdiction"}
            </h3>
            <p>
              {language === "ar"
                ? "تخضع هذه الشروط والأحكام وتُفسر وفقًا للأنظمة واللوائح السارية في المملكة العربية السعودية، وتختص محاكم المملكة بالنظر في أي نزاع قد ينشأ عنها."
                : "These terms and conditions are governed by and construed in accordance with the statutory laws of the Kingdom of Saudi Arabia, and the Saudi courts hold exclusive jurisdiction."}
            </p>
          </div>

          {/* Contact Box */}
          <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs">
            <span className="text-navy-900 font-bold">
              {siteConfig.name[language]} • {siteConfig.location[language]}
            </span>
            <Link href="/contact" className="text-gold-600 hover:text-gold-700 font-semibold">
              {language === "ar" ? "للاستفسارات الرسمية ›" : "Official Inquiries ›"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
