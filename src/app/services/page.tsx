"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { servicesData } from "@/data/content";
import {
  FileSignature,
  SearchCheck,
  Handshake,
  Briefcase,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Info,
  ArrowUpRight,
  MessageSquare,
  Shield,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  FileSignature,
  SearchCheck,
  Handshake,
  Briefcase,
  FileText,
  ShieldCheck,
};

export default function ServicesPage() {
  const { language, t, isRtl } = useLanguage();
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredServices =
    selectedFilter === "all"
      ? servicesData
      : servicesData.filter((s) => s.id === selectedFilter);

  const handleInquire = (serviceId: string) => {
    router.push(`/contact?service=${serviceId}`);
  };

  return (
    <div className="py-12 md:py-20 bg-ivory/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb & Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-subtext">
            <Link href="/" className="hover:text-navy-900 transition-colors">
              {language === "ar" ? "الرئيسية" : "Home"}
            </Link>
            <span>/</span>
            <span className="text-gold-600 font-medium">
              {language === "ar" ? "الخدمات والحلول التعاقدية" : "Services & Solutions"}
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 leading-[1.4] sm:leading-[1.45] md:leading-[1.5] font-arabic">
              {t("servicesHeading")}
            </h1>
            <p className="text-base sm:text-lg text-subtext leading-relaxed">
              {t("servicesSubtitle")}
            </p>
          </div>
        </div>

        {/* Filter Pills for extensibility */}
        <div className="flex flex-wrap items-center gap-2 pt-2 pb-4 border-b border-gold-500/15">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              selectedFilter === "all"
                ? "bg-navy-900 text-white shadow-sm"
                : "bg-white text-navy-800 hover:bg-gold-50 border border-gray-200"
            }`}
          >
            {language === "ar" ? "جميع الخدمات (6)" : "All Services (6)"}
          </button>
          {servicesData.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedFilter(s.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedFilter === s.id
                  ? "bg-navy-900 text-white shadow-sm"
                  : "bg-white text-navy-800 hover:bg-gold-50 border border-gray-200"
              }`}
            >
              {s.title[language]}
            </button>
          ))}
        </div>

        {/* Comprehensive Services List with Full Details */}
        <div className="space-y-8">
          {filteredServices.map((service, index) => {
            const Icon = iconMap[service.iconName] || FileText;

            return (
              <div
                key={service.id}
                id={service.id}
                className="luxury-card rounded-2xl p-7 sm:p-10 bg-white border border-gold-500/30 relative overflow-hidden group"
              >
                {/* Gold Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-400 via-gold-500 to-navy-900" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Icon & Overview (5 cols) */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shadow-sm border border-gold-500/30">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono font-bold text-gold-600 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
                        0{index + 1}
                      </span>
                    </div>

                    <div>
                      {service.badge && (
                        <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">
                          {service.badge[language]}
                        </span>
                      )}
                      <h2 className="text-2xl font-bold text-navy-900 font-arabic">
                        {service.title[language]}
                      </h2>
                    </div>

                    <p className="text-sm font-semibold text-navy-700 leading-relaxed">
                      {service.shortDescription[language]}
                    </p>

                    <p className="text-xs text-subtext leading-relaxed">
                      {service.fullDescription[language]}
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => handleInquire(service.id)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs tracking-wider transition-all shadow-sm border border-gold-500/40"
                      >
                        <MessageSquare className="w-4 h-4 text-gold-400" />
                        <span>{t("inquireAboutService")}</span>
                        <ArrowUpRight
                          className={`w-3.5 h-3.5 text-gold-400 ${
                            isRtl ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Suitable Cases & Prerequisites (7 cols) */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 bg-ivory/50 p-6 rounded-xl border border-gold-500/15">
                    {/* Suitable Cases */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold text-navy-900 flex items-center gap-2 uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-gold-600" />
                        <span>{t("suitableCases")}</span>
                      </h3>
                      <ul className="space-y-2 text-xs text-subtext">
                        {service.suitableFor[language].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Information to Prepare */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold text-navy-900 flex items-center gap-2 uppercase tracking-wider">
                        <Info className="w-4 h-4 text-navy-700" />
                        <span>{t("prerequisitesHeading")}</span>
                      </h3>
                      <ul className="space-y-2 text-xs text-subtext">
                        {service.prerequisites[language].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-1.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory & Expansion Notice */}
        <div className="p-6 rounded-xl bg-white border border-gold-500/25 flex items-start gap-4 text-xs text-subtext">
          <Shield className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {language === "ar"
              ? "ملاحظة مهنية: صُممت هذه الباقة من الخدمات لتكون متكاملة وقابلة للتوسع وإضافة خدمات جديدة مستقبلًا. لا يتم تقديم أي خدمة إلا بعد التأكد من مطابقتها للتراخيص والصلاحيات المهنية والنظامية المعتمدة للمحامية بيان الجعفر في المملكة العربية السعودية."
              : "Professional note: This service suite is modular and scalable for future expansion. Engagement begins strictly upon ensuring full conformity with authorized professional credentials and statutory permissions within Saudi Arabia."}
          </p>
        </div>
      </div>
    </div>
  );
}
