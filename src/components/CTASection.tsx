"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/content";
import { MessageCircle, Mail, Phone, ArrowUpRight } from "lucide-react";

export const CTASection: React.FC = () => {
  const { language, t, isRtl } = useLanguage();

  return (
    <section className="py-20 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative Golden Ambient Circles */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-navy-800/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dark-guilloche opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{language === "ar" ? "جاهزون للرد على استفسارك" : "Ready to Assist You"}</span>
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-arabic leading-[1.4] sm:leading-[1.45] md:leading-[1.5] text-white">
          {t("ctaHeading")}
        </h2>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {t("ctaSubtitle")}
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg transition-all duration-300 border border-emerald-400/30"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t("contactViaWhatsApp")}</span>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm shadow-md transition-all duration-300 border border-gold-500/40"
          >
            <Mail className="w-5 h-5 text-gold-400" />
            <span>{t("sendEmail")}</span>
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded text-gold-300 hover:text-white text-sm font-medium transition-colors"
          >
            <span>{t("requestConsultation")}</span>
            <ArrowUpRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
          </Link>
        </div>

        {/* Direct Contact info footer */}
        <div className="pt-8 border-t border-navy-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-gold-500" />
            <a href={`tel:${siteConfig.phoneFormatted}`} className="hover:text-gold-400 transition-colors font-mono" dir="ltr">
              {siteConfig.phone}
            </a>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-gold-500" />
            <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-400 transition-colors">
              {siteConfig.email}
            </a>
          </div>
          <span>•</span>
          <span>{siteConfig.location[language]}</span>
        </div>
      </div>
    </section>
  );
};
