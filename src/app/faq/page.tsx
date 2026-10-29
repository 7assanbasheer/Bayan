"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { faqsData, siteConfig } from "@/data/content";
import { ChevronDown, Search, HelpCircle, ShieldCheck, MessageCircle, ArrowUpRight } from "lucide-react";

export default function FAQPage() {
  const { language, t, isRtl } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [openId, setOpenId] = useState<string | null>("contract-types");

  const filteredFaqs = faqsData.filter((item) => {
    const q = item.question[language].toLowerCase();
    const a = item.answer[language].toLowerCase();
    const s = searchTerm.toLowerCase();
    return q.includes(s) || a.includes(s);
  });

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="py-12 md:py-20 bg-ivory/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb & Header */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-subtext justify-center">
            <Link href="/" className="hover:text-navy-900 transition-colors">
              {language === "ar" ? "الرئيسية" : "Home"}
            </Link>
            <span>/</span>
            <span className="text-gold-600 font-medium">
              {language === "ar" ? "الأسئلة الشائعة" : "FAQ"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 leading-[1.4] sm:leading-[1.45] md:leading-[1.5] font-arabic">
            {t("faqHeading")}
          </h1>
          <p className="text-base text-subtext max-w-2xl mx-auto leading-relaxed">
            {t("faqSubtitle")}
          </p>
        </div>

        {/* Search Input */}
        <div className="relative max-w-xl mx-auto">
          <Search className="w-5 h-5 text-gray-400 absolute top-1/2 -translate-y-1/2 right-4 rtl:right-4 rtl:left-auto ltr:left-4 ltr:right-auto pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={
              language === "ar"
                ? "ابحث في الأسئلة الشائعة (مثال: صياغة، سرية، رسوم)..."
                : "Search frequently asked questions..."
            }
            className="w-full py-3.5 px-12 rounded-xl bg-white border border-gold-500/30 text-sm text-navy-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
          />
        </div>

        {/* Questions Accordion */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-gold-500/50 shadow-luxury"
                      : "bg-white/80 border-gray-200 hover:border-gold-500/30"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full py-5 px-6 text-start flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-navy-900 font-arabic leading-snug">
                      {faq.question[language]}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-navy-900 text-gold-400 rotate-180"
                          : "bg-navy-50 text-navy-600"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-subtext text-sm leading-relaxed border-t border-gray-100 animate-fade-in">
                      <p>{faq.answer[language]}</p>
                      {faq.category === "privacy" && (
                        <div className="mt-3 flex items-center gap-2 text-xs text-gold-700 font-medium">
                          <ShieldCheck className="w-4 h-4" />
                          <span>
                            {language === "ar"
                              ? "توقيع اتفاقيات عدم الإفصاح (NDA) متاح عند الحاجة وقبل استلام المستندات."
                              : "Non-Disclosure Agreements (NDA) available prior to exchanging materials."}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-sm text-subtext">
                {language === "ar"
                  ? "لم يتم العثور على نتائج تطابق بحثك. تواصل معنا مباشرة للإجابة على استفسارك."
                  : "No matching questions found. Reach out directly to discuss your inquiry."}
              </p>
            </div>
          )}
        </div>

        {/* Still have questions CTA */}
        <div className="p-8 rounded-2xl bg-navy-950 text-white text-center space-y-4 border border-gold-500/30">
          <h3 className="text-xl font-bold font-arabic text-white">
            {language === "ar"
              ? "هل لديك استفسار آخر لم تجد إجابته هنا؟"
              : "Have a specific question not covered here?"}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
            {language === "ar"
              ? "المحامية بيان الجعفر تسعد بتقديم الإيضاحات اللازمة ومناقشة تفاصيل طلبكم."
              : "Attorney Bayan Aljafar is ready to clarify your requirements and evaluate next steps."}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <span>{t("contactMe")}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? "rotate-180" : ""}`} />
            </Link>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t("contactViaWhatsApp")}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
