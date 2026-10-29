import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "مكتب بيان | استشاري عقود احترافية وخدمات قانونية",
  description:
    "موقع مكتب بيان للخدمات القانونية والعقود في المنطقة الشرقية، المملكة العربية السعودية. استشاري عقود احترافية بقيادة بيان الجعفر (Master of Law)، خبرة في قضايا الأحوال الشخصية (الطلاق والنفقة)، نظام العمل السعودي، والقطاع المصرفي.",
  keywords: [
    "مكتب بيان",
    "استشاري عقود احترافية",
    "بيان الجعفر",
    "Bayan Office",
    "Bayan Aljafar",
    "صياغة العقود",
    "مراجعة العقود",
    "قضايا الأحوال الشخصية",
    "الطلاق والنفقة",
    "نظام العمل السعودي",
    "العقود العمالية",
    "العقود التجارية",
    "اتفاقيات الشراكة",
    "المنطقة الشرقية",
    "خدمات قانونية السعودية",
    "Master of Law",
    "القطاع المصرفي",
  ],
  authors: [{ name: "مكتب بيان - Bayan Office" }],
  creator: "Bayan Office",
  metadataBase: new URL("https://bayan.law.sa"),
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    url: "https://bayan.law.sa",
    siteName: "مكتب بيان | استشاري عقود احترافية وخدمات قانونية",
    title: "مكتب بيان | استشاري عقود احترافية وخدمات قانونية",
    description:
      "حلول قانونية وعقود تُبنى على الوضوح والثقة. استشاري عقود احترافية، قضايا الأحوال الشخصية (الطلاق والنفقة)، نظام العمل، والقطاع المصرفي.",
  },
  twitter: {
    card: "summary_large_image",
    title: "مكتب بيان | استشاري عقود احترافية وخدمات قانونية",
    description:
      "حلول قانونية وعقود تُبنى على الوضوح والثقة في المنطقة الشرقية، المملكة العربية السعودية.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "مكتب بيان",
    alternateName: "Bayan Office - Professional Contracts Consultant",
    description:
      "مكتب بيان للخدمات القانونية، استشاري عقود احترافية بقيادة بيان الجعفر (ماجستير في القانون) بخبرة مهنية تتجاوز 5 سنوات وتجربة عملية في أكثر من 50 عقدًا تجاريًا ومصرفيًا وقضايا الأحوال الشخصية ونظام العمل بالمملكة العربية السعودية.",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Master of Law (ماجستير في القانون)",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "المنطقة الشرقية - Eastern Province",
      addressCountry: "SA",
    },
    email: "b.a.alj3fr@hotmail.com",
    telephone: "+966566259333",
    url: "https://bayan.law.sa",
    knowsAbout: [
      "Contract Drafting",
      "Contract Review",
      "Personal Status Law (Divorce & Alimony)",
      "Saudi Labor Law",
      "Commercial Agreements",
      "Banking & Financial Ecosystem Regulations",
      "Corporate Partnerships",
    ],
  };

  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory text-navy-900 antialiased selection:bg-navy-900 selection:text-gold-400">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <WhatsAppFloat />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
