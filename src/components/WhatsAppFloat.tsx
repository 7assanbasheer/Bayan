"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/content";
import { MessageCircle, Phone, Mail, X } from "lucide-react";

export const WhatsAppFloat: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed bottom-6 ${
        isRtl ? "left-6" : "right-6"
      } z-40 flex flex-col items-${isRtl ? "start" : "end"} gap-3`}
    >
      {/* Quick Contact Modal Popover */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl border border-gold-500/30 p-4 w-72 mb-1 animate-fade-up">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-navy-900">
                {language === "ar" ? "قنوات التواصل المباشر" : "Direct Channels"}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-navy-900 p-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-subtext my-3 leading-relaxed">
            {language === "ar"
              ? "مرحبًا بك. يمكنك التواصل مباشرة لطلب استفسار أو تنسيق حول العقود والاتفاقيات."
              : "Welcome. You can reach out directly to inquire about contract drafting or review."}
          </p>

          <div className="space-y-2">
            {/* WhatsApp */}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{language === "ar" ? "محادثة واتساب فورية" : "Chat on WhatsApp"}</span>
            </a>

            {/* Direct Call */}
            <a
              href={`tel:${siteConfig.phoneFormatted}`}
              className="flex items-center gap-2.5 w-full px-3 py-2 rounded bg-navy-900 hover:bg-navy-800 text-white text-xs font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span dir="ltr">{siteConfig.phone}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2.5 w-full px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 text-navy-900 text-xs font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-navy-700" />
              <span className="truncate">{siteConfig.email}</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <span className="hidden sm:inline-flex items-center bg-navy-950/90 text-gold-300 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg border border-gold-500/30 backdrop-blur-sm">
            {language === "ar" ? "تواصل مع المحامية بيان" : "Chat with Attorney Bayan"}
          </span>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-luxury-lg hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
          aria-label="Contact options"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-gold-400 border-2 border-white" />
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
        </button>
      </div>
    </div>
  );
};
