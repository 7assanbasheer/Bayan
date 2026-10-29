"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface BrandLogoProps {
  light?: boolean;
  size?: "sm" | "md" | "lg";
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ light = false, size = "md" }) => {
  const { language } = useLanguage();

  const iconSizes = {
    sm: "w-7 h-7 sm:w-8 sm:h-8",
    md: "w-8 h-8 sm:w-10 sm:h-10",
    lg: "w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13",
  };

  const svgSizes = {
    sm: "w-4 h-4 sm:w-5 sm:h-5",
    md: "w-5 h-5 sm:w-6 sm:h-6",
    lg: "w-6 h-6 sm:w-7 sm:h-7",
  };

  const textStyles = {
    sm: {
      en: "text-xs sm:text-sm tracking-[0.12em]",
      ar: "text-[11px] sm:text-xs font-bold leading-tight",
      subtitle: "text-[8px] sm:text-[9px] tracking-[0.18em]",
    },
    md: {
      en: "text-xs sm:text-base md:text-lg tracking-[0.12em]",
      ar: "text-xs sm:text-sm md:text-base font-bold leading-tight",
      subtitle: "text-[9px] sm:text-[10px] md:text-[11px] tracking-wider",
    },
    lg: {
      en: "text-base sm:text-xl md:text-2xl tracking-[0.15em]",
      ar: "text-sm sm:text-base md:text-xl font-bold leading-tight",
      subtitle: "text-[10px] sm:text-xs md:text-sm tracking-wider",
    },
  };

  const primaryColor = light ? "text-white" : "text-navy-900";
  const goldColor = "text-gold-500";
  const emblemBg = light ? "bg-navy-800 border-gold-500/40 text-gold-400" : "bg-navy-900 border-gold-500/40 text-gold-400";

  return (
    <Link href="/" className="group flex items-center gap-2 sm:gap-3 focus:outline-none transition-transform duration-300 hover:opacity-95 min-w-0">
      {/* Luxury Monogram Crest */}
      <div
        className={`relative ${iconSizes[size]} flex-shrink-0 rounded-sm border ${emblemBg} flex items-center justify-center shadow-sm group-hover:border-gold-500 transition-colors duration-300`}
      >
        {/* Subtle geometric corner accents */}
        <div className="absolute top-0.5 right-0.5 w-1 h-1 border-t border-r border-gold-400/60" />
        <div className="absolute bottom-0.5 left-0.5 w-1 h-1 border-b border-l border-gold-400/60" />
        <svg
          viewBox="0 0 40 40"
          className={`${svgSizes[size]} text-gold-400`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Geometric Diamond Framework */}
          <path
            d="M20 4L34 20L20 36L6 20L20 4Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="2 2"
            className="opacity-40"
          />
          {/* Central Monogram B & Balance Motif */}
          <path
            d="M15 13H21.5C23.4 13 25 14.3 25 16C25 17.7 23.4 19 21.5 19H15V13Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 19H22.5C24.4 19 26 20.3 26 22.5C26 24.7 24.4 26 22.5 26H15V19Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 11V29"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography Label */}
      <div className="flex flex-col min-w-0">
        <div className="flex items-baseline">
          <span className={`${language === "ar" ? textStyles[size].ar : textStyles[size].en} ${primaryColor} uppercase transition-colors group-hover:text-gold-600 font-arabic whitespace-nowrap`}>
            {language === "ar" ? "مكتب بيان لاستشارات العقود" : "BAYAN CONTRACT CONSULTING"}
          </span>
        </div>
        <div className="flex items-center mt-0.5 whitespace-nowrap">
          <span className={`${textStyles[size].subtitle} ${goldColor} uppercase tracking-wider font-semibold whitespace-nowrap leading-none`}>
            {language === "ar" ? "خدمات قانونية" : "Legal Services"}
          </span>
        </div>
      </div>
    </Link>
  );
};
