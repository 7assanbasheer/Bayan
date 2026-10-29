"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig, navigationLinks } from "@/data/content";
import { BrandLogo } from "./BrandLogo";
import { Phone, Mail, MapPin, ShieldAlert, ArrowUp, CheckCircle2 } from "lucide-react";

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 text-white border-t border-gold-500/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-navy-800">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <BrandLogo light size="lg" />
            <p className="text-gray-300 text-sm leading-relaxed max-w-md pt-2">
              {siteConfig.heroBio[language]}
            </p>

            {/* Credential Badges */}
            <div className="pt-2 flex flex-wrap gap-2.5 text-xs text-gold-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-navy-900 border border-gold-500/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                {siteConfig.degree[language]}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-navy-900 border border-gold-500/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                {language === "ar" ? "+5 سنوات خبرة مهنية" : "+5 Years Experience"}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-navy-900 border border-gold-500/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                {language === "ar" ? "+50 عقدًا عمليًا" : "+50 Contracts Track Record"}
              </span>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gold-400 font-serif">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40 group-hover:bg-gold-400 transition-colors" />
                    <span>{link.label[language]}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40 group-hover:bg-gold-400 transition-colors" />
                  <span>{t("privacyPolicy")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40 group-hover:bg-gold-400 transition-colors" />
                  <span>{t("termsAndConditions")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gold-400 font-serif">
              {t("contactDetails")}
            </h3>
            <div className="space-y-3.5 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-1 flex-shrink-0" />
                <span>{siteConfig.location[language]}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneFormatted}`}
                  className="hover:text-gold-400 transition-colors font-mono"
                  dir="ltr"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-gold-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Quick Action buttons in footer */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-medium transition-colors border border-emerald-500/30"
              >
                {t("contactViaWhatsApp")}
              </a>
              <Link
                href="/contact"
                className="px-4 py-2 rounded bg-gold-500/20 hover:bg-gold-500 hover:text-navy-950 text-gold-300 text-xs font-medium transition-colors border border-gold-500/40"
              >
                {t("requestConsultation")}
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="my-8 p-4 md:p-5 rounded-md bg-navy-900/80 border border-gold-500/20 text-xs text-gray-300/90 leading-relaxed">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-gold-400 block mb-1">
                {t("legalDisclaimerTitle")}
              </span>
              <p>{t("legalDisclaimerText")}</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 pt-4">
          <div className="flex flex-wrap items-center gap-3">
            <span>
              {t("allRightsReserved")} © {new Date().getFullYear()}
            </span>
            <span>•</span>
            <Link href="/privacy" className="hover:text-gold-400 transition-colors">
              {t("privacyPolicy")}
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-gold-400 transition-colors">
              {t("termsAndConditions")}
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-gray-300 transition-all border border-navy-700"
            aria-label={t("backToTop")}
          >
            <span>{t("backToTop")}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
