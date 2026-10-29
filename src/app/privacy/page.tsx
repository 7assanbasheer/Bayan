"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/content";
import { ShieldCheck, Lock, EyeOff, FileText, AlertCircle } from "lucide-react";

export default function PrivacyPage() {
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
            {language === "ar" ? "سياسة الخصوصية وسرية المعلومات" : "Privacy Policy & Confidentiality"}
          </span>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 text-gold-700 text-xs font-semibold border border-gold-300">
            <Lock className="w-3.5 h-3.5 text-gold-600" />
            <span>
              {language === "ar" ? "متوافق مع نظام حماية البيانات الشخصية بالمملكة" : "Saudi PDPL Compliant"}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 font-arabic">
            {language === "ar" ? "سياسة الخصوصية وسرية المعلومات" : "Privacy Policy & Confidentiality"}
          </h1>
          <p className="text-sm text-subtext">
            {language === "ar"
              ? "تاريخ آخر تحديث: 2026 | المحامية بيان الجعفر للخدمات القانونية والعقود"
              : "Last updated: 2026 | Attorney Bayan Aljafar Legal & Contractual Services"}
          </p>
        </div>

        {/* Legal Disclaimer Callout */}
        <div className="p-6 rounded-xl bg-navy-950 text-white border border-gold-500/30 space-y-2">
          <div className="flex items-center gap-2 text-gold-400 font-bold text-sm">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>
              {language === "ar" ? "تنويه مهني أولي حول التواصل:" : "Preliminary Communication Disclaimer:"}
            </span>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            {language === "ar"
              ? "إن إرسال استفسار عبر الموقع أو الواتساب أو البريد الإلكتروني لا يعني تلقائيًا نشوء علاقة مهنية ملزمة أو قبول التكليف القانوني؛ وإنما يُعد استفسارًا أوليًا لتقييم الاحتياج وتحديد إمكانية ونطاق تقديم الخدمة وفق الأنظمة المعتمدة."
              : "Submitting an inquiry via this website, WhatsApp, or email does not automatically establish an attorney-client relationship or formal mandate. It constitutes preliminary outreach to evaluate feasibility and scope within applicable legal regulations."}
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gold-500/25 shadow-sm space-y-8 text-sm text-subtext leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-navy-900 font-arabic flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-500" />
              <span>
                {language === "ar" ? "1. مبدأ جمع الحد الأدنى من البيانات" : "1. Data Minimization Principle"}
              </span>
            </h3>
            <p>
              {language === "ar"
                ? "نلتزم في موقع المحامية بيان الجعفر بجمع الحد الأدنى الضروري فقط من بيانات التواصل الأساسية (الاسم، البريد الإلكتروني، رقم الهاتف، والوصف العام للاستفسار) لغرض الرد وتنسيق المواعيد وتحديد نطاق الخدمات."
                : "We collect only the minimal essential contact data (name, email, phone number, and generalized inquiry overview) solely to evaluate your request and coordinate next steps."}
            </p>
            <p className="text-navy-900 font-medium text-xs bg-ivory p-3 rounded border border-gold-500/20">
              {language === "ar"
                ? "لا نطلب ولا نجمع أرقام الهوية الوطنية، أو المستندات المصرفية الخاصة، أو ملفات القضايا السرية عبر نماذج الموقع العامة."
                : "We do not request or collect national ID numbers, private bank records, or confidential court dossiers through open web forms."}
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-navy-900 font-arabic flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-500" />
              <span>
                {language === "ar" ? "2. السرية المهنية وعدم الإفصاح" : "2. Strict Professional Confidentiality"}
              </span>
            </h3>
            <p>
              {language === "ar"
                ? "تُعامل جميع الاستفسارات والاتصالات والمناقشات المتعلقة بالعقود بأعلى درجات السرية والخصوصية. لن يتم بيع أو تأجير أو مشاركة أو إظهار أي معلومة تخص العميل علنًا أو لأي طرف ثالث، إلا بما يقتضيه النظام السعودي أو بناءً على موافقة خطية صريحة."
                : "All communications, drafts, and contract discussions are treated with the utmost professional confidentiality. Client information is never sold, shared, rented, or publicly disclosed, except as mandated by Saudi statutory law or with express written authorization."}
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-navy-900 font-arabic flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-500" />
              <span>
                {language === "ar" ? "3. أمان نقل ومعالجة البيانات" : "3. Transmission & Processing Security"}
              </span>
            </h3>
            <p>
              {language === "ar"
                ? "يتم تشغيل الموقع عبر بروتوكول التشفير الآمن (HTTPS / SSL)، وتُعالج البيانات الواردة عبر الخوادم بقنوات محمية تمنع الوصول غير المصرح به."
                : "The site is served entirely over encrypted SSL/HTTPS protocols, processing incoming requests through secure channels to safeguard against unauthorized interception."}
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-navy-900 font-arabic flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-500" />
              <span>
                {language === "ar" ? "4. حقوق أصحاب البيانات" : "4. Data Subject Rights"}
              </span>
            </h3>
            <p>
              {language === "ar"
                ? "يحق للعميل في أي وقت طلب تصحيح أو استعراض أو حذف بيانات التواصل الخاصة به التي زوّدنا بها عبر التواصل المباشر مع المحامية بيان الجعفر على البريد المعتمد BAYAN@BAYAN.LAW.SA."
                : "You reserve the right under the Saudi Personal Data Protection Law (PDPL) to request the inspection, rectification, or erasure of your contact details by writing to BAYAN@BAYAN.LAW.SA."}
            </p>
          </div>

          {/* Contact Box */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xs font-bold text-navy-900 uppercase">
                {language === "ar" ? "مسؤول الخصوصية والتواصل:" : "Privacy & Compliance Officer:"}
              </h4>
              <p className="text-xs text-subtext mt-0.5">
                {siteConfig.name[language]} • {siteConfig.email}
              </p>
            </div>
            <Link
              href="/contact"
              className="px-5 py-2 rounded bg-navy-900 text-white text-xs font-semibold hover:bg-navy-800 transition-colors"
            >
              {language === "ar" ? "تواصل للاستفسار" : "Contact for Inquiries"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
