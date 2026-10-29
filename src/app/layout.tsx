import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "المحامية بيان الجعفر | الخدمات القانونية والعقود التجارية",
  description:
    "تعرّف على المحامية بيان الجعفر، حاصلة على ماجستير في القانون، بخبرة تتجاوز خمس سنوات وتجربة عملية في العقود والشراكات التجارية في المنطقة الشرقية، المملكة العربية السعودية.",
  keywords: [
    "المحامية بيان الجعفر",
    "بيان الجعفر",
    "Attorney Bayan Aljafar",
    "Bayan Aljafar",
    "صياغة العقود",
    "مراجعة العقود",
    "العقود التجارية",
    "اتفاقيات الشراكة",
    "المنطقة الشرقية",
    "خدمات قانونية السعودية",
    "Master of Law",
    "عقود الشركات",
    "القطاع المصرفي",
  ],
  authors: [{ name: "المحامية بيان الجعفر - Attorney Bayan Aljafar" }],
  creator: "Attorney Bayan Aljafar",
  metadataBase: new URL("https://bayan.law.sa"),
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    url: "https://bayan.law.sa",
    siteName: "المحامية بيان الجعفر للخدمات القانونية والعقود",
    title: "المحامية بيان الجعفر | الخدمات القانونية والعقود التجارية",
    description:
      "حلول قانونية وعقود تُبنى على الوضوح والثقة. حاصلة على ماجستير في القانون وخبرة تتجاوز خمس سنوات في العقود والقطاع المصرفي والشراكات.",
  },
  twitter: {
    card: "summary_large_image",
    title: "المحامية بيان الجعفر | الخدمات القانونية والعقود التجارية",
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
    "@type": "Person",
    name: "المحامية بيان الجعفر",
    alternateName: "Attorney Bayan Aljafar",
    jobTitle: "Lawyer & Legal Contracts Specialist",
    description:
      "المحامية بيان الجعفر، حاصلة على ماجستير في القانون بخبرة مهنية تتجاوز 5 سنوات وسجل عملي في أكثر من 50 عقدًا تجاريًا ومصرفيًا في المملكة العربية السعودية.",
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
    email: "BAYAN@BAYAN.LAW.SA",
    telephone: "+966566259333",
    url: "https://bayan.law.sa",
    knowsAbout: [
      "Contract Drafting",
      "Contract Review",
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
