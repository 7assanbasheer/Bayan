"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { navigationLinks, siteConfig } from "@/data/content";
import { BrandLogo } from "./BrandLogo";
import { Phone, Mail, Globe, Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t, isRtl } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Header Bar for contact details & fast actions */}
      <header className="hidden lg:block bg-navy-950 text-white/80 border-b border-navy-800 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phoneFormatted}`}
              className="flex items-center gap-2 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              <span dir="ltr">{siteConfig.phone}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-gold-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-gold-500" />
              <span>{siteConfig.email}</span>
            </a>
            <span className="text-white/20">|</span>
            <span className="text-white/60">
              {siteConfig.location[language]}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-gold-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {language === "ar" ? "مكتب بيان | استشاري عقود احترافية" : "Bayan Office | Professional Contracts Consultant"}
            </span>
            <span className="text-white/20">|</span>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-semibold bg-navy-800/80 hover:bg-gold-500 hover:text-navy-950 text-gold-400 transition-all border border-gold-500/30"
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === "ar" ? "English" : "العربية"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-luxury border-b border-gold-500/15 py-3"
            : "bg-ivory/90 backdrop-blur-sm border-b border-black/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <BrandLogo size="md" />

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1 2xl:gap-2">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-200 relative ${
                    isActive
                      ? "text-navy-900 font-semibold"
                      : "text-navy-700 hover:text-gold-600 hover:bg-gold-50/50"
                  }`}
                >
                  {link.label[language]}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher Button (compact) */}
            <button
              onClick={toggleLanguage}
              className="xl:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-navy-800 bg-white border border-gold-500/40 hover:bg-gold-50 hover:text-gold-700 transition-colors"
              aria-label="Change language"
            >
              <Globe className="w-3.5 h-3.5 text-gold-600" />
              <span>{language === "ar" ? "EN" : "عربي"}</span>
            </button>

            {/* Primary Consultation Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-navy-900 hover:bg-navy-800 text-white text-xs md:text-sm font-semibold tracking-wide shadow-sm hover:shadow-luxury transition-all duration-300 border border-gold-500/40 group"
            >
              <MessageSquare className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
              <span>{t("requestConsultation")}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 text-gold-400 transition-transform ${isRtl ? "group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 rotate-180" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
            </Link>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-semibold bg-white border border-gold-500/30 text-navy-900"
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-gold-600" />
              <span>{language === "ar" ? "EN" : "عربي"}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-navy-900 hover:bg-gold-50 hover:text-gold-600 focus:outline-none transition-colors border border-navy-200/60"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div
            className={`fixed inset-y-0 ${
              isRtl ? "right-0" : "left-0"
            } w-[85%] max-w-sm bg-ivory shadow-2xl z-50 flex flex-col justify-between p-6 border-l border-gold-500/20 overflow-y-auto`}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-navy-100">
                <BrandLogo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-navy-800 hover:bg-gold-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-6 flex flex-col gap-1.5">
                {navigationLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-all ${
                        isActive
                          ? "bg-navy-900 text-gold-400 font-semibold shadow-sm"
                          : "text-navy-800 hover:bg-gold-100/60 hover:text-gold-700"
                      }`}
                    >
                      <span>{link.label[language]}</span>
                      <span className="text-gold-500/70 text-xs">›</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-6 border-t border-navy-200/60 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-navy-900 text-white font-semibold text-sm shadow-md border border-gold-500/40"
              >
                <MessageSquare className="w-4 h-4 text-gold-400" />
                <span>{t("requestConsultation")}</span>
              </Link>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs shadow-sm transition-colors"
              >
                <span>{t("contactViaWhatsApp")}</span>
              </a>

              <div className="text-center text-xs text-subtext pt-2">
                <p>{siteConfig.location[language]}</p>
                <p className="mt-1 font-mono" dir="ltr">{siteConfig.phone}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
