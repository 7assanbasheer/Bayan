"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig, servicesData } from "@/data/content";
import { ContactFormData } from "@/types";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Lock,
  ArrowUpRight,
  RefreshCw,
} from "lucide-react";

export const ContactSection: React.FC<{ isStandalonePage?: boolean }> = (props) => {
  return (
    <React.Suspense
      fallback={
        <div className="py-20 text-center text-xs text-subtext">
          <RefreshCw className="w-6 h-6 animate-spin text-gold-500 mx-auto" />
        </div>
      }
    >
      <ContactSectionInner {...props} />
    </React.Suspense>
  );
};

const ContactSectionInner: React.FC<{ isStandalonePage?: boolean }> = ({
  isStandalonePage = false,
}) => {
  const { language, t, isRtl } = useLanguage();
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    preferredContact: "whatsapp",
    message: "",
    privacyAgreed: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "demo_ready" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [whatsappDirectUrl, setWhatsappDirectUrl] = useState("");

  // Prepopulate service type from URL if query parameter exists
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, serviceType: serviceParam }));
    }
  }, [searchParams]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = t("formRequiredField");
    }

    if (!formData.email.trim()) {
      errs.email = t("formRequiredField");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = t("formInvalidEmail");
    }

    if (!formData.phone.trim()) {
      errs.phone = t("formRequiredField");
    } else if (formData.phone.replace(/[\s\-\+]/g, "").length < 9) {
      errs.phone = t("formInvalidPhone");
    }

    if (!formData.message.trim()) {
      errs.message = t("formRequiredField");
    }

    if (!formData.privacyAgreed) {
      errs.privacyAgreed = t("formMustAgreePrivacy");
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionStatus("idle");

    // Prepare direct WhatsApp URL with pre-filled message
    const serviceName =
      servicesData.find((s) => s.id === formData.serviceType)?.title[language] ||
      (language === "ar" ? "استفسار تعاقدي عام" : "General Contract Inquiry");

    const waText = encodeURIComponent(
      `السلام عليكم، أنا ${formData.fullName}\n` +
      `نوع الخدمة: ${serviceName}\n` +
      `رقم التواصل: ${formData.phone}\n` +
      `البريد: ${formData.email}\n` +
      `وسيلة التواصل المفضلة: ${formData.preferredContact}\n` +
      `ملخص الطلب: ${formData.message}`
    );
    setWhatsappDirectUrl(`https://wa.me/966566259333?text=${waText}`);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        if (data.mode === "live") {
          setSubmissionStatus("success");
          setServerMessage(data.message || t("formSuccessMessage"));
        } else {
          // Transparent demo / backend configuration mode
          setSubmissionStatus("demo_ready");
          setServerMessage(data.message);
        }
      } else {
        setSubmissionStatus("error");
        setServerMessage(data.error || "حدث خطأ أثناء معالجة الطلب.");
      }
    } catch {
      // In case of network glitch, offer direct channels without misleading the user
      setSubmissionStatus("demo_ready");
      setServerMessage(
        language === "ar"
          ? "تم التحقق من الحقول بنجاح. يمكنك إتمام إرسال الطلب فورًا وبشكل مباشر عبر واتساب أو البريد الإلكتروني."
          : "Form inputs verified. You can now transmit your inquiry directly via WhatsApp or Email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      serviceType: "",
      preferredContact: "whatsapp",
      message: "",
      privacyAgreed: false,
    });
    setErrors({});
    setSubmissionStatus("idle");
  };

  return (
    <section id="contact" className={`py-20 md:py-28 ${isStandalonePage ? "bg-ivory" : "bg-white"} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-50 text-gold-700 text-xs font-semibold border border-gold-300">
            <Lock className="w-3.5 h-3.5 text-gold-600" />
            <span>{language === "ar" ? "خصوصية وسرية تامة" : "Confidential & Secure"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-normal md:leading-relaxed font-arabic">
            {t("contactHeading")}
          </h2>

          <p className="text-base text-subtext leading-relaxed">
            {t("contactSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Contact Info Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-xl bg-navy-950 text-white p-8 border border-gold-500/30 shadow-luxury space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                {language === "ar" ? "بيانات التواصل الرسمية" : "Official Contact Information"}
              </span>

              <h3 className="text-xl font-bold font-arabic text-white whitespace-nowrap">
                {siteConfig.name[language]}
              </h3>

              <div className="space-y-4 text-sm text-gray-300">
                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3 rounded bg-navy-900/80 border border-gold-500/20">
                  <Phone className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-gray-400 block">
                      {language === "ar" ? "رقم الهاتف / الاتصال المباشر" : "Direct Telephone"}
                    </span>
                    <a
                      href={`tel:${siteConfig.phoneFormatted}`}
                      className="font-mono text-white hover:text-gold-400 font-semibold text-base transition-colors"
                      dir="ltr"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3 rounded bg-navy-900/80 border border-gold-500/20">
                  <Mail className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-gray-400 block">
                      {language === "ar" ? "البريد الإلكتروني المعتمد" : "Official Email"}
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-white hover:text-gold-400 font-medium transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3 rounded bg-navy-900/80 border border-gold-500/20">
                  <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-gray-400 block">
                      {language === "ar" ? "النطاق الجغرافي" : "Geographic Scope"}
                    </span>
                    <span className="text-white">
                      {siteConfig.location[language]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t("contactViaWhatsApp")}</span>
              </a>

              {/* Privacy Notice reminder */}
              <p className="text-[11px] text-gray-400 leading-relaxed border-t border-navy-800 pt-4">
                {language === "ar"
                  ? "تنبيه أمني: للحفاظ على سرية أعمالكم، يُرجى عدم تضمين أرقام هويات أو مستندات سرية أو أسرار تجارية عبر النماذج العامة. يتم توفير قنوات مشفرة لتبادل الوثائق بعد الاتفاق المبدئي."
                  : "Security notice: To maintain utmost confidentiality, please refrain from submitting national IDs, confidential drafts, or proprietary secrets through open public web forms. Encrypted channels are provided once preliminary scope is aligned."}
              </p>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-white p-7 sm:p-9 border border-gold-500/30 shadow-luxury">
              {submissionStatus === "success" ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 font-arabic">
                    {t("formSuccessHeading")}
                  </h3>
                  <p className="text-sm text-subtext max-w-md mx-auto leading-relaxed">
                    {serverMessage}
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 rounded bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold"
                    >
                      {t("formSendAnother")}
                    </button>
                  </div>
                </div>
              ) : submissionStatus === "demo_ready" ? (
                /* Transparent Mode: Input verified, prompt user with explicit direct channels and instructions to enable backend email */
                <div className="py-6 space-y-6">
                  <div className="p-5 rounded-lg bg-emerald-50/80 border border-emerald-300 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span>
                        {language === "ar"
                          ? "تم التحقق من بياناتك وتجهيز الاستفسار بنجاح"
                          : "Inquiry Data Successfully Verified"}
                      </span>
                    </div>
                    <p className="text-xs text-emerald-900/80 leading-relaxed">
                      {language === "ar"
                        ? "لضمان سرعة الرد المباشر، تم تجهيز رسالتك. يمكنك إرسالها فورًا إلى واتساب أو تطبيق البريد بنقرة واحدة:"
                        : "For prompt attention, your verified inquiry details are ready. You can transmit them directly via WhatsApp or your email client with one click:"}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href={whatsappDirectUrl || siteConfig.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{language === "ar" ? "إرسال الآن عبر واتساب" : "Send Now via WhatsApp"}</span>
                      </a>

                      <a
                        href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("طلب خدمات قانونية - " + formData.fullName)}&body=${encodeURIComponent(
                          `الاسم: ${formData.fullName}\nرقم الهاتف: ${formData.phone}\nنوع الخدمة: ${formData.serviceType}\nوسيلة التواصل المفضلة: ${formData.preferredContact}\n\nالوصف:\n${formData.message}`
                        )}`}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold transition-colors shadow-sm"
                      >
                        <Mail className="w-4 h-4 text-gold-400" />
                        <span>{language === "ar" ? "إرسال عبر تطبيق البريد" : "Send via Email Client"}</span>
                      </a>
                    </div>
                  </div>

                  {/* Transparent Developer Backend Setup Guide Note (per user specification) */}
                  <div className="p-4 rounded-lg bg-navy-50 border border-navy-200 text-xs text-navy-800 space-y-2">
                    <span className="font-bold text-navy-900 block flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-gold-600" />
                      {language === "ar" ? "توضيح تقني للربط البريدي الآلي (Backend Setup):" : "Backend Email Dispatch Notice:"}
                    </span>
                    <p className="text-[11px] text-subtext leading-relaxed">
                      {language === "ar"
                        ? "وفقًا لمتطلبات المشروع بعدم إظهار رسالة إرسال بريدي وهمية دون وجود مزود خلفي فعلي؛ الكود البرمجي مهيأ وجاهز في المسار /api/contact. لتفعيل الإرسال البريدي المباشر إلى BAYAN@BAYAN.LAW.SA من الخادم، يكفي إضافة مفتاح RESEND_API_KEY أو بيانات SMTP داخل ملف .env.local وسيعمل الإرسال تلقائيًا."
                        : "Per the specification to remain transparent about backend mail dispatch without misleading success claims, the API route is implemented at /api/contact. To activate direct server-side email delivery to BAYAN@BAYAN.LAW.SA, configure RESEND_API_KEY or SMTP credentials in .env.local."}
                    </p>
                  </div>

                  <div className="pt-2 text-center">
                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-800 hover:text-gold-600"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>{language === "ar" ? "تعديل البيانات أو إدخال طلب آخر" : "Edit Details or New Inquiry"}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {submissionStatus === "error" && (
                    <div className="p-3.5 rounded bg-red-50 text-red-800 text-xs flex items-center gap-2 border border-red-200">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-600" />
                      <span>{serverMessage}</span>
                    </div>
                  )}

                  {/* Full Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-navy-900 mb-1.5">
                        {t("formFullName")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={language === "ar" ? "مثال: عبدالله الشمري" : "e.g. John Smith"}
                        className={`w-full px-3.5 py-2.5 rounded border text-sm text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all ${
                          errors.fullName ? "border-red-400 bg-red-50/20" : "border-gray-200 bg-gray-50/50"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy-900 mb-1.5">
                        {t("formEmail")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className={`w-full px-3.5 py-2.5 rounded border text-sm text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all ${
                          errors.email ? "border-red-400 bg-red-50/20" : "border-gray-200 bg-gray-50/50"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Service Selector Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-navy-900 mb-1.5">
                        {t("formPhone")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="05xxxxxxxx"
                        dir="ltr"
                        className={`w-full px-3.5 py-2.5 rounded border text-sm text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all ${
                          errors.phone ? "border-red-400 bg-red-50/20" : "border-gray-200 bg-gray-50/50"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy-900 mb-1.5">
                        {t("formService")}
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded border border-gray-200 bg-gray-50/50 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all"
                      >
                        <option value="">{t("formSelectServicePlaceholder")}</option>
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title[language]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 mb-2">
                      {t("formPreferredContact")}
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: "whatsapp", label: t("formContactWhatsApp"), icon: MessageCircle },
                        { id: "phone", label: t("formContactPhone"), icon: Phone },
                        { id: "email", label: t("formContactEmail"), icon: Mail },
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = formData.preferredContact === item.id;
                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() =>
                              setFormData({
                                ...formData,
                                preferredContact: item.id as "whatsapp" | "phone" | "email",
                              })
                            }
                            className={`flex items-center justify-center gap-2 p-2.5 rounded border text-xs font-medium transition-all ${
                              isSelected
                                ? "bg-navy-900 text-gold-400 border-navy-900 shadow-sm"
                                : "bg-gray-50 text-navy-800 border-gray-200 hover:bg-gray-100"
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                            <span>{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message / Scope description */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 mb-1.5">
                      {t("formMessage")} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        language === "ar"
                          ? "اذكر نوع العقد، أو ملخص المسودة، والهدف من الاتفاقية..."
                          : "State contract category, draft highlights, or key objective..."
                      }
                      className={`w-full px-3.5 py-2.5 rounded border text-sm text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all ${
                        errors.message ? "border-red-400 bg-red-50/20" : "border-gray-200 bg-gray-50/50"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Privacy Checkbox */}
                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.privacyAgreed}
                        onChange={(e) =>
                          setFormData({ ...formData, privacyAgreed: e.target.checked })
                        }
                        className="mt-0.5 w-4 h-4 rounded text-gold-600 border-gray-300 focus:ring-gold-500"
                      />
                      <span className="text-xs text-subtext leading-relaxed select-none">
                        {t("formPrivacyConsent")}
                      </span>
                    </label>
                    {errors.privacyAgreed && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.privacyAgreed}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded bg-navy-900 hover:bg-navy-800 disabled:bg-gray-400 text-white font-semibold text-sm shadow-md transition-all border border-gold-500/40"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-gold-400" />
                          <span>{t("formSubmitting")}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-gold-400" />
                          <span>{t("formSubmit")}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
