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
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-13 h-13",
  };

  const textStyles = {
    sm: {
      en: "text-base tracking-[0.18em]",
      ar: "text-xs tracking-normal font-medium",
      subtitle: "text-[9px] tracking-[0.25em]",
    },
    md: {
      en: "text-lg md:text-xl tracking-[0.18em]",
      ar: "text-xs md:text-sm tracking-normal font-medium",
      subtitle: "text-[10px] md:text-[11px] tracking-[0.22em]",
    },
    lg: {
      en: "text-2xl md:text-3xl tracking-[0.2em]",
      ar: "text-sm md:text-base tracking-normal font-medium",
      subtitle: "text-xs md:text-sm tracking-[0.25em]",
    },
  };

  const primaryColor = light ? "text-white" : "text-navy-900";
  const secondaryColor = light ? "text-gray-300" : "text-subtext";
  const goldColor = "text-gold-500";
  const emblemBg = light ? "bg-navy-800 border-gold-500/40 text-gold-400" : "bg-navy-900 border-gold-500/40 text-gold-400";

  return (
    <Link href="/" className="group flex items-center gap-3.5 focus:outline-none transition-transform duration-300 hover:opacity-95">
      {/* Luxury Monogram Crest */}
      <div
        className={`relative ${iconSizes[size]} flex-shrink-0 rounded-sm border ${emblemBg} flex items-center justify-center shadow-sm group-hover:border-gold-500 transition-colors duration-300`}
      >
        {/* Subtle geometric corner accents */}
        <div className="absolute top-0.5 right-0.5 w-1 h-1 border-t border-r border-gold-400/60" />
        <div className="absolute bottom-0.5 left-0.5 w-1 h-1 border-b border-l border-gold-400/60" />
        <svg
          viewBox="0 0 40 40"
          className="w-6 h-6 text-gold-400"
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
      <div className="flex flex-col">
        <div className="flex items-baseline gap-2">
          <span className={`font-serif font-bold ${textStyles[size].en} ${primaryColor} uppercase transition-colors group-hover:text-gold-600`}>
            BAYAN ALJAFAR
          </span>
        </div>
        <div className="flex items-center gap-2 -mt-0.5 whitespace-nowrap">
          <span className={`${textStyles[size].ar} ${goldColor} font-semibold font-arabic whitespace-nowrap`}>
            المحامية بيان الجعفر
          </span>
          <span className="w-1 h-1 rounded-full bg-gold-500/50 flex-shrink-0" />
          <span className={`${textStyles[size].subtitle} ${secondaryColor} uppercase tracking-wider font-medium whitespace-nowrap`}>
            {language === "ar" ? "خدمات قانونية وعقود" : "Legal & Contracts"}
          </span>
        </div>
      </div>
    </Link>
  );
};
