"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ContactSection } from "@/components/ContactSection";
import { RefreshCw } from "lucide-react";

function ContactPageInner() {
  const { language } = useLanguage();

  return (
    <div className="py-6 md:py-12 bg-ivory/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-subtext mb-4">
          <Link href="/" className="hover:text-navy-900 transition-colors">
            {language === "ar" ? "الرئيسية" : "Home"}
          </Link>
          <span>/</span>
          <span className="text-gold-600 font-medium">
            {language === "ar" ? "تواصل معنا" : "Contact"}
          </span>
        </div>
      </div>
      <ContactSection isStandalonePage={true} />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center">
          <RefreshCw className="w-8 h-8 animate-spin text-gold-500 mx-auto" />
        </div>
      }
    >
      <ContactPageInner />
    </Suspense>
  );
}
