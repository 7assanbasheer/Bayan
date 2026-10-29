"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { faqsData } from "@/data/content";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";

export const FAQSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>("contract-types");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-50 text-gold-700 text-xs font-semibold border border-gold-300">
            <HelpCircle className="w-3.5 h-3.5 text-gold-600" />
            <span>{language === "ar" ? "إجابات شفافة ومباشرة" : "Transparent Answers"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-normal md:leading-relaxed font-arabic">
            {t("faqHeading")}
          </h2>

          <p className="text-base text-subtext leading-relaxed max-w-2xl mx-auto">
            {t("faqSubtitle")}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-ivory/70 border-gold-500/50 shadow-sm"
                    : "bg-white border-gray-200 hover:border-gold-500/30"
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
                        : "bg-navy-50 text-navy-600 hover:bg-gold-50"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-subtext text-sm leading-relaxed border-t border-gold-500/10 animate-fade-in">
                    <p>{faq.answer[language]}</p>
                    {faq.category === "privacy" && (
                      <div className="mt-3 flex items-center gap-2 text-xs text-gold-700 font-medium">
                        <ShieldCheck className="w-4 h-4" />
                        <span>
                          {language === "ar"
                            ? "توقيع اتفاقيات عدم الإفصاح (NDA) متاح عند الحاجة وقبل استلام المستندات."
                            : "NDAs can be executed upon request prior to receiving sensitive files."}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
